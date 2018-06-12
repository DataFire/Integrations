# @datafire/evetech

Client library for EVE Swagger Interface

## Installation and Usage
```bash
npm install --save @datafire/evetech
```
```js
let evetech = require('@datafire/evetech').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

evetech.get_wars({}).then(data => {
  console.log(data);
});
```

## Description

An OpenAPI for EVE Online

## Actions

### get_alliances
List all active player alliances

---
Alternate route: `/dev/alliances/`

Alternate route: `/legacy/alliances/`

Alternate route: `/v1/alliances/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_alliances({}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: 200 ok array
  * items `integer`: 200 ok integer

### get_alliances_names
Resolve a set of alliance IDs to alliance names

---
Alternate route: `/dev/alliances/names/`

Alternate route: `/v2/alliances/names/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_alliances_names({
  "alliance_ids": []
}, context)
```

#### Input
* input `object`
  * alliance_ids **required** `array`: A comma separated list of alliance IDs
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * alliance_id **required** `integer`: alliance_id integer
    * alliance_name **required** `string`: alliance_name string

### get_alliances_alliance_id
Public information about an alliance

---
Alternate route: `/dev/alliances/{alliance_id}/`

Alternate route: `/v3/alliances/{alliance_id}/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_alliances_alliance_id({
  "alliance_id": 0
}, context)
```

#### Input
* input `object`
  * alliance_id **required** `integer`: An EVE alliance ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `object`: 200 ok object
  * creator_corporation_id **required** `integer`: ID of the corporation that created the alliance
  * creator_id **required** `integer`: ID of the character that created the alliance
  * date_founded **required** `string`: date_founded string
  * executor_corporation_id `integer`: the executor corporation ID, if this alliance is not closed
  * faction_id `integer`: Faction ID this alliance is fighting for, if this alliance is enlisted in factional warfare
  * name **required** `string`: the full name of the alliance
  * ticker **required** `string`: the short name of the alliance

### get_alliances_alliance_id_contacts
Return contacts of an alliance

---
Alternate route: `/legacy/alliances/{alliance_id}/contacts/`

Alternate route: `/v1/alliances/{alliance_id}/contacts/`

---
This route is cached for up to 300 seconds

---
Warning: This route has an upgrade available.

---
[Diff of the upcoming changes](https://esi.evetech.net/diff/latest/dev/#GET-/alliances/{alliance_id}/contacts/)


```js
evetech.get_alliances_alliance_id_contacts({
  "alliance_id": 0
}, context)
```

#### Input
* input `object`
  * alliance_id **required** `integer`: An EVE alliance ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * contact_id **required** `integer`: contact_id integer
    * contact_type **required** `string` (values: character, corporation, alliance, faction): contact_type string
    * label_id `integer`: Custom label of the contact
    * standing **required** `number`: Standing of the contact

### get_alliances_alliance_id_contacts_labels
Return custom labels for an alliance's contacts

---
Alternate route: `/dev/alliances/{alliance_id}/contacts/labels/`

Alternate route: `/legacy/alliances/{alliance_id}/contacts/labels/`

Alternate route: `/v1/alliances/{alliance_id}/contacts/labels/`

---
This route is cached for up to 300 seconds


```js
evetech.get_alliances_alliance_id_contacts_labels({
  "alliance_id": 0
}, context)
```

#### Input
* input `object`
  * alliance_id **required** `integer`: An EVE alliance ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * label_id **required** `integer`: label_id integer
    * label_name **required** `string`: label_name string

### get_alliances_alliance_id_corporations
List all current member corporations of an alliance

---
Alternate route: `/dev/alliances/{alliance_id}/corporations/`

Alternate route: `/legacy/alliances/{alliance_id}/corporations/`

Alternate route: `/v1/alliances/{alliance_id}/corporations/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_alliances_alliance_id_corporations({
  "alliance_id": 0
}, context)
```

#### Input
* input `object`
  * alliance_id **required** `integer`: An EVE alliance ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: 200 ok array
  * items `integer`: 200 ok integer

### get_alliances_alliance_id_icons
Get the icon urls for a alliance

---
Alternate route: `/dev/alliances/{alliance_id}/icons/`

Alternate route: `/legacy/alliances/{alliance_id}/icons/`

Alternate route: `/v1/alliances/{alliance_id}/icons/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_alliances_alliance_id_icons({
  "alliance_id": 0
}, context)
```

#### Input
* input `object`
  * alliance_id **required** `integer`: An EVE alliance ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `object`: 200 ok object
  * px128x128 `string`: px128x128 string
  * px64x64 `string`: px64x64 string

### post_characters_affiliation
Bulk lookup of character IDs to corporation, alliance and faction

---
Alternate route: `/dev/characters/affiliation/`

Alternate route: `/legacy/characters/affiliation/`

Alternate route: `/v1/characters/affiliation/`

---
This route is cached for up to 3600 seconds


```js
evetech.post_characters_affiliation({
  "characters": []
}, context)
```

#### Input
* input `object`
  * characters **required** `array`: characters array
    * items `integer`: character integer
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * alliance_id `integer`: The character's alliance ID, if their corporation is in an alliance
    * character_id **required** `integer`: The character's ID
    * corporation_id **required** `integer`: The character's corporation ID
    * faction_id `integer`: The character's faction ID, if their corporation is in a faction

### get_characters_names
Resolve a set of character IDs to character names

---
Alternate route: `/dev/characters/names/`

Alternate route: `/legacy/characters/names/`

Alternate route: `/v1/characters/names/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_characters_names({
  "character_ids": []
}, context)
```

#### Input
* input `object`
  * character_ids **required** `array`: A comma separated list of character IDs
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * character_id **required** `integer`: character_id integer
    * character_name **required** `string`: character_name string

### get_characters_character_id
Public information about a character

---
Alternate route: `/dev/characters/{character_id}/`

Alternate route: `/v4/characters/{character_id}/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_characters_character_id({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `object`: 200 ok object
  * alliance_id `integer`: The character's alliance ID
  * ancestry_id `integer`: ancestry_id integer
  * birthday **required** `string`: Creation date of the character
  * bloodline_id **required** `integer`: bloodline_id integer
  * corporation_id **required** `integer`: The character's corporation ID
  * description `string`: description string
  * faction_id `integer`: ID of the faction the character is fighting for, if the character is enlisted in Factional Warfare
  * gender **required** `string` (values: female, male): gender string
  * name **required** `string`: name string
  * race_id **required** `integer`: race_id integer
  * security_status `number`: security_status number

### get_characters_character_id_agents_research
Return a list of agents research information for a character. The formula for finding the current research points with an agent is: currentPoints = remainderPoints + pointsPerDay * days(currentTime - researchStartDate)

---
Alternate route: `/dev/characters/{character_id}/agents_research/`

Alternate route: `/legacy/characters/{character_id}/agents_research/`

Alternate route: `/v1/characters/{character_id}/agents_research/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_characters_character_id_agents_research({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * agent_id **required** `integer`: agent_id integer
    * points_per_day **required** `number`: points_per_day number
    * remainder_points **required** `number`: remainder_points number
    * skill_type_id **required** `integer`: skill_type_id integer
    * started_at **required** `string`: started_at string

### get_characters_character_id_assets
Return a list of the characters assets

---
Alternate route: `/dev/characters/{character_id}/assets/`

Alternate route: `/v3/characters/{character_id}/assets/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_characters_character_id_assets({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * is_singleton **required** `boolean`: is_singleton boolean
    * item_id **required** `integer`: item_id integer
    * location_flag **required** `string` (values: AssetSafety, AutoFit, Cargo, CorpseBay, Deliveries, DroneBay, FighterBay, FighterTube0, FighterTube1, FighterTube2, FighterTube3, FighterTube4, FleetHangar, Hangar, HangarAll, HiSlot0, HiSlot1, HiSlot2, HiSlot3, HiSlot4, HiSlot5, HiSlot6, HiSlot7, HiddenModifiers, Implant, LoSlot0, LoSlot1, LoSlot2, LoSlot3, LoSlot4, LoSlot5, LoSlot6, LoSlot7, Locked, MedSlot0, MedSlot1, MedSlot2, MedSlot3, MedSlot4, MedSlot5, MedSlot6, MedSlot7, QuafeBay, RigSlot0, RigSlot1, RigSlot2, RigSlot3, RigSlot4, RigSlot5, RigSlot6, RigSlot7, ShipHangar, Skill, SpecializedAmmoHold, SpecializedCommandCenterHold, SpecializedFuelBay, SpecializedGasHold, SpecializedIndustrialShipHold, SpecializedLargeShipHold, SpecializedMaterialBay, SpecializedMediumShipHold, SpecializedMineralHold, SpecializedOreHold, SpecializedPlanetaryCommoditiesHold, SpecializedSalvageHold, SpecializedShipHold, SpecializedSmallShipHold, SubSystemBay, SubSystemSlot0, SubSystemSlot1, SubSystemSlot2, SubSystemSlot3, SubSystemSlot4, SubSystemSlot5, SubSystemSlot6, SubSystemSlot7, Unlocked, Wardrobe): location_flag string
    * location_id **required** `integer`: location_id integer
    * location_type **required** `string` (values: station, solar_system, other): location_type string
    * quantity **required** `integer`: quantity integer
    * type_id **required** `integer`: type_id integer

### post_characters_character_id_assets_locations
Return locations for a set of item ids, which you can get from character assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)

---
Alternate route: `/dev/characters/{character_id}/assets/locations/`

Alternate route: `/v2/characters/{character_id}/assets/locations/`



```js
evetech.post_characters_character_id_assets_locations({
  "character_id": 0,
  "item_ids": []
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * item_ids **required** `array`: item_ids array
    * items `integer`: item_id integer
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * item_id **required** `integer`: item_id integer
    * position **required** `object`: position object
      * x **required** `number`: x number
      * y **required** `number`: y number
      * z **required** `number`: z number

### post_characters_character_id_assets_names
Return names for a set of item ids, which you can get from character assets endpoint. Typically used for items that can customize names, like containers or ships.

---
Alternate route: `/dev/characters/{character_id}/assets/names/`

Alternate route: `/legacy/characters/{character_id}/assets/names/`

Alternate route: `/v1/characters/{character_id}/assets/names/`



```js
evetech.post_characters_character_id_assets_names({
  "character_id": 0,
  "item_ids": []
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * item_ids **required** `array`: item_ids array
    * items `integer`: item_id integer
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * item_id **required** `integer`: item_id integer
    * name **required** `string`: name string

### get_characters_character_id_attributes
Return attributes of a character

---
Alternate route: `/dev/characters/{character_id}/attributes/`

Alternate route: `/legacy/characters/{character_id}/attributes/`

Alternate route: `/v1/characters/{character_id}/attributes/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_characters_character_id_attributes({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `object`: 200 ok object
  * accrued_remap_cooldown_date `string`: Neural remapping cooldown after a character uses remap accrued over time
  * bonus_remaps `integer`: Number of available bonus character neural remaps
  * charisma **required** `integer`: charisma integer
  * intelligence **required** `integer`: intelligence integer
  * last_remap_date `string`: Datetime of last neural remap, including usage of bonus remaps
  * memory **required** `integer`: memory integer
  * perception **required** `integer`: perception integer
  * willpower **required** `integer`: willpower integer

### get_characters_character_id_blueprints
Return a list of blueprints the character owns

---
Alternate route: `/dev/characters/{character_id}/blueprints/`

Alternate route: `/v2/characters/{character_id}/blueprints/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_characters_character_id_blueprints({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * item_id **required** `integer`: Unique ID for this item.
    * location_flag **required** `string` (values: AutoFit, Cargo, CorpseBay, DroneBay, FleetHangar, Deliveries, HiddenModifiers, Hangar, HangarAll, LoSlot0, LoSlot1, LoSlot2, LoSlot3, LoSlot4, LoSlot5, LoSlot6, LoSlot7, MedSlot0, MedSlot1, MedSlot2, MedSlot3, MedSlot4, MedSlot5, MedSlot6, MedSlot7, HiSlot0, HiSlot1, HiSlot2, HiSlot3, HiSlot4, HiSlot5, HiSlot6, HiSlot7, AssetSafety, Locked, Unlocked, Implant, QuafeBay, RigSlot0, RigSlot1, RigSlot2, RigSlot3, RigSlot4, RigSlot5, RigSlot6, RigSlot7, ShipHangar, SpecializedFuelBay, SpecializedOreHold, SpecializedGasHold, SpecializedMineralHold, SpecializedSalvageHold, SpecializedShipHold, SpecializedSmallShipHold, SpecializedMediumShipHold, SpecializedLargeShipHold, SpecializedIndustrialShipHold, SpecializedAmmoHold, SpecializedCommandCenterHold, SpecializedPlanetaryCommoditiesHold, SpecializedMaterialBay, SubSystemSlot0, SubSystemSlot1, SubSystemSlot2, SubSystemSlot3, SubSystemSlot4, SubSystemSlot5, SubSystemSlot6, SubSystemSlot7, FighterBay, FighterTube0, FighterTube1, FighterTube2, FighterTube3, FighterTube4, Module): Type of the location_id
    * location_id **required** `integer`: References a solar system, station or item_id if this blueprint is located within a container. If the return value is an item_id, then the Character AssetList API must be queried to find the container using the given item_id to determine the correct location of the Blueprint.
    * material_efficiency **required** `integer`: Material Efficiency Level of the blueprint.
    * quantity **required** `integer`: A range of numbers with a minimum of -2 and no maximum value where -1 is an original and -2 is a copy. It can be a positive integer if it is a stack of blueprint originals fresh from the market (e.g. no activities performed on them yet).
    * runs **required** `integer`: Number of runs remaining if the blueprint is a copy, -1 if it is an original.
    * time_efficiency **required** `integer`: Time Efficiency Level of the blueprint.
    * type_id **required** `integer`: type_id integer

### get_characters_character_id_bookmarks
A list of your character's personal bookmarks

---
Alternate route: `/dev/characters/{character_id}/bookmarks/`

Alternate route: `/v2/characters/{character_id}/bookmarks/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_characters_character_id_bookmarks({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * bookmark_id **required** `integer`: bookmark_id integer
    * coordinates `object`: Optional object that is returned if a bookmark was made on a planet or a random location in space.
      * x **required** `number`: x number
      * y **required** `number`: y number
      * z **required** `number`: z number
    * created **required** `string`: created string
    * creator_id **required** `integer`: creator_id integer
    * folder_id `integer`: folder_id integer
    * item `object`: Optional object that is returned if a bookmark was made on a particular item.
      * item_id **required** `integer`: item_id integer
      * type_id **required** `integer`: type_id integer
    * label **required** `string`: label string
    * location_id **required** `integer`: location_id integer
    * notes **required** `string`: notes string

### get_characters_character_id_bookmarks_folders
A list of your character's personal bookmark folders

---
Alternate route: `/dev/characters/{character_id}/bookmarks/folders/`

Alternate route: `/v2/characters/{character_id}/bookmarks/folders/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_characters_character_id_bookmarks_folders({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * folder_id **required** `integer`: folder_id integer
    * name **required** `string`: name string

### get_characters_character_id_calendar
Get 50 event summaries from the calendar. If no from_event ID is given, the resource will return the next 50 chronological event summaries from now. If a from_event ID is specified, it will return the next 50 chronological event summaries from after that event.

---
Alternate route: `/dev/characters/{character_id}/calendar/`

Alternate route: `/legacy/characters/{character_id}/calendar/`

Alternate route: `/v1/characters/{character_id}/calendar/`

---
This route is cached for up to 5 seconds


```js
evetech.get_characters_character_id_calendar({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * from_event `integer`: The event ID to retrieve events from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: Up to 50 events from now or the event you requested
  * items `object`: event
    * event_date `string`: event_date string
    * event_id `integer`: event_id integer
    * event_response `string` (values: declined, not_responded, accepted, tentative): event_response string
    * importance `integer`: importance integer
    * title `string`: title string

### get_characters_character_id_calendar_event_id
Get all the information for a specific event

---
Alternate route: `/dev/characters/{character_id}/calendar/{event_id}/`

Alternate route: `/v3/characters/{character_id}/calendar/{event_id}/`

---
This route is cached for up to 5 seconds


```js
evetech.get_characters_character_id_calendar_event_id({
  "character_id": 0,
  "event_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * event_id **required** `integer`: The id of the event requested
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `object`: Full details of a specific event
  * date **required** `string`: date string
  * duration **required** `integer`: Length in minutes
  * event_id **required** `integer`: event_id integer
  * importance **required** `integer`: importance integer
  * owner_id **required** `integer`: owner_id integer
  * owner_name **required** `string`: owner_name string
  * owner_type **required** `string` (values: eve_server, corporation, faction, character, alliance): owner_type string
  * response **required** `string`: response string
  * text **required** `string`: text string
  * title **required** `string`: title string

### put_characters_character_id_calendar_event_id
Set your response status to an event

---
Alternate route: `/dev/characters/{character_id}/calendar/{event_id}/`

Alternate route: `/v3/characters/{character_id}/calendar/{event_id}/`



```js
evetech.put_characters_character_id_calendar_event_id({
  "character_id": 0,
  "event_id": 0,
  "response": {
    "response": ""
  }
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * event_id **required** `integer`: The ID of the event requested
  * response **required** `object`: response object
    * response **required** `string` (values: accepted, declined, tentative): response string
  * token `string`: Access token to use if unable to set a header

#### Output
*Output schema unknown*

### get_characters_character_id_calendar_event_id_attendees
Get all invited attendees for a given event

---
Alternate route: `/dev/characters/{character_id}/calendar/{event_id}/attendees/`

Alternate route: `/legacy/characters/{character_id}/calendar/{event_id}/attendees/`

Alternate route: `/v1/characters/{character_id}/calendar/{event_id}/attendees/`

---
This route is cached for up to 600 seconds


```js
evetech.get_characters_character_id_calendar_event_id_attendees({
  "character_id": 0,
  "event_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * event_id **required** `integer`: The id of the event requested
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: List of attendees for a given event
  * items `object`: character_id and response of an attendee
    * character_id `integer`: character_id integer
    * event_response `string` (values: declined, not_responded, accepted, tentative): event_response string

### get_characters_character_id_clones
A list of the character's clones

---
Alternate route: `/dev/characters/{character_id}/clones/`

Alternate route: `/v3/characters/{character_id}/clones/`

---
This route is cached for up to 120 seconds


```js
evetech.get_characters_character_id_clones({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `object`: 200 ok object
  * home_location `object`: home_location object
    * location_id `integer`: location_id integer
    * location_type `string` (values: station, structure): location_type string
  * jump_clones **required** `array`: jump_clones array
    * items `object`: jump_clone object
      * implants **required** `array`: implants array
        * items `integer`: implant integer
      * jump_clone_id **required** `integer`: jump_clone_id integer
      * location_id **required** `integer`: location_id integer
      * location_type **required** `string` (values: station, structure): location_type string
      * name `string`: name string
  * last_clone_jump_date `string`: last_clone_jump_date string
  * last_station_change_date `string`: last_station_change_date string

### delete_characters_character_id_contacts
Bulk delete contacts

---
Alternate route: `/dev/characters/{character_id}/contacts/`

Alternate route: `/v2/characters/{character_id}/contacts/`



```js
evetech.delete_characters_character_id_contacts({
  "character_id": 0,
  "contact_ids": []
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * contact_ids **required** `array`: A list of contacts to delete
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * token `string`: Access token to use if unable to set a header

#### Output
*Output schema unknown*

### get_characters_character_id_contacts
Return contacts of a character

---
Alternate route: `/legacy/characters/{character_id}/contacts/`

Alternate route: `/v1/characters/{character_id}/contacts/`

---
This route is cached for up to 300 seconds

---
Warning: This route has an upgrade available.

---
[Diff of the upcoming changes](https://esi.evetech.net/diff/latest/dev/#GET-/characters/{character_id}/contacts/)


```js
evetech.get_characters_character_id_contacts({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * contact_id **required** `integer`: contact_id integer
    * contact_type **required** `string` (values: character, corporation, alliance, faction): contact_type string
    * is_blocked `boolean`: Whether this contact is in the blocked list. Note a missing value denotes unknown, not true or false
    * is_watched `boolean`: Whether this contact is being watched
    * label_id `integer`: Custom label of the contact
    * standing **required** `number`: Standing of the contact

### post_characters_character_id_contacts
Bulk add contacts with same settings

---
Alternate route: `/legacy/characters/{character_id}/contacts/`

Alternate route: `/v1/characters/{character_id}/contacts/`


---
Warning: This route has an upgrade available.

---
[Diff of the upcoming changes](https://esi.evetech.net/diff/latest/dev/#POST-/characters/{character_id}/contacts/)


```js
evetech.post_characters_character_id_contacts({
  "character_id": 0,
  "contact_ids": [],
  "standing": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * contact_ids **required** `array`: contact_ids array
    * items `integer`: ID of the contact to edit
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * label_id `integer`: Add a custom label to the new contact
  * standing **required** `number`: Standing for the contact
  * token `string`: Access token to use if unable to set a header
  * watched `boolean`: Whether the contact should be watched, note this is only effective on characters

#### Output
* output `array`: 201 created array
  * items `integer`: 201 created integer

### put_characters_character_id_contacts
Bulk edit contacts with same settings

---
Alternate route: `/legacy/characters/{character_id}/contacts/`

Alternate route: `/v1/characters/{character_id}/contacts/`


---
Warning: This route has an upgrade available.

---
[Diff of the upcoming changes](https://esi.evetech.net/diff/latest/dev/#PUT-/characters/{character_id}/contacts/)


```js
evetech.put_characters_character_id_contacts({
  "character_id": 0,
  "contact_ids": [],
  "standing": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * contact_ids **required** `array`: contact_ids array
    * items `integer`: ID of the contact to edit
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * label_id `integer`: Add a custom label to the contact, use 0 for clearing label
  * standing **required** `number`: Standing for the contact
  * token `string`: Access token to use if unable to set a header
  * watched `boolean`: Whether the contact should be watched, note this is only effective on characters

#### Output
*Output schema unknown*

### get_characters_character_id_contacts_labels
Return custom labels for a character's contacts

---
Alternate route: `/dev/characters/{character_id}/contacts/labels/`

Alternate route: `/legacy/characters/{character_id}/contacts/labels/`

Alternate route: `/v1/characters/{character_id}/contacts/labels/`

---
This route is cached for up to 300 seconds


```js
evetech.get_characters_character_id_contacts_labels({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * label_id **required** `integer`: label_id integer
    * label_name **required** `string`: label_name string

### get_characters_character_id_contracts
Returns contracts available to a character, only if the character is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is "in_progress".

---
Alternate route: `/dev/characters/{character_id}/contracts/`

Alternate route: `/legacy/characters/{character_id}/contracts/`

Alternate route: `/v1/characters/{character_id}/contracts/`

---
This route is cached for up to 300 seconds


```js
evetech.get_characters_character_id_contracts({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * acceptor_id **required** `integer`: Who will accept the contract
    * assignee_id **required** `integer`: ID to whom the contract is assigned, can be corporation or character ID
    * availability **required** `string` (values: public, personal, corporation, alliance): To whom the contract is available
    * buyout `number`: Buyout price (for Auctions only)
    * collateral `number`: Collateral price (for Couriers only)
    * contract_id **required** `integer`: contract_id integer
    * date_accepted `string`: Date of confirmation of contract
    * date_completed `string`: Date of completed of contract
    * date_expired **required** `string`: Expiration date of the contract
    * date_issued **required** `string`: Сreation date of the contract
    * days_to_complete `integer`: Number of days to perform the contract
    * end_location_id `integer`: End location ID (for Couriers contract)
    * for_corporation **required** `boolean`: true if the contract was issued on behalf of the issuer's corporation
    * issuer_corporation_id **required** `integer`: Character's corporation ID for the issuer
    * issuer_id **required** `integer`: Character ID for the issuer
    * price `number`: Price of contract (for ItemsExchange and Auctions)
    * reward `number`: Remuneration for contract (for Couriers only)
    * start_location_id `integer`: Start location ID (for Couriers contract)
    * status **required** `string` (values: outstanding, in_progress, finished_issuer, finished_contractor, finished, cancelled, rejected, failed, deleted, reversed): Status of the the contract
    * title `string`: Title of the contract
    * type **required** `string` (values: unknown, item_exchange, auction, courier, loan): Type of the contract
    * volume `number`: Volume of items in the contract

### get_characters_character_id_contracts_contract_id_bids
Lists bids on a particular auction contract

---
Alternate route: `/dev/characters/{character_id}/contracts/{contract_id}/bids/`

Alternate route: `/legacy/characters/{character_id}/contracts/{contract_id}/bids/`

Alternate route: `/v1/characters/{character_id}/contracts/{contract_id}/bids/`

---
This route is cached for up to 300 seconds


```js
evetech.get_characters_character_id_contracts_contract_id_bids({
  "character_id": 0,
  "contract_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * contract_id **required** `integer`: ID of a contract
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * amount **required** `number`: The amount bid, in ISK
    * bid_id **required** `integer`: Unique ID for the bid
    * bidder_id **required** `integer`: Character ID of the bidder
    * date_bid **required** `string`: Datetime when the bid was placed

### get_characters_character_id_contracts_contract_id_items
Lists items of a particular contract

---
Alternate route: `/dev/characters/{character_id}/contracts/{contract_id}/items/`

Alternate route: `/legacy/characters/{character_id}/contracts/{contract_id}/items/`

Alternate route: `/v1/characters/{character_id}/contracts/{contract_id}/items/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_characters_character_id_contracts_contract_id_items({
  "character_id": 0,
  "contract_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * contract_id **required** `integer`: ID of a contract
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * is_included **required** `boolean`: true if the contract issuer has submitted this item with the contract, false if the isser is asking for this item in the contract.
    * is_singleton **required** `boolean`: is_singleton boolean
    * quantity **required** `integer`: Number of items in the stack
    * raw_quantity `integer`: -1 indicates that the item is a singleton (non-stackable). If the item happens to be a Blueprint, -1 is an Original and -2 is a Blueprint Copy
    * record_id **required** `integer`: Unique ID for the item
    * type_id **required** `integer`: Type ID for item

### get_characters_character_id_corporationhistory
Get a list of all the corporations a character has been a member of

---
Alternate route: `/dev/characters/{character_id}/corporationhistory/`

Alternate route: `/legacy/characters/{character_id}/corporationhistory/`

Alternate route: `/v1/characters/{character_id}/corporationhistory/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_characters_character_id_corporationhistory({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * corporation_id **required** `integer`: corporation_id integer
    * is_deleted `boolean`: True if the corporation has been deleted
    * record_id **required** `integer`: An incrementing ID that can be used to canonically establish order of records in cases where dates may be ambiguous
    * start_date **required** `string`: start_date string

### post_characters_character_id_cspa
Takes a source character ID in the url and a set of target character ID's in the body, returns a CSPA charge cost

---
Alternate route: `/dev/characters/{character_id}/cspa/`

Alternate route: `/v4/characters/{character_id}/cspa/`



```js
evetech.post_characters_character_id_cspa({
  "character_id": 0,
  "characters": []
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * characters **required** `array`: characters array
    * items `integer`: character integer
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * token `string`: Access token to use if unable to set a header

#### Output
* output `number`: 201 created number

### get_characters_character_id_fatigue
Return a character's jump activation and fatigue information

---
Alternate route: `/dev/characters/{character_id}/fatigue/`

Alternate route: `/legacy/characters/{character_id}/fatigue/`

Alternate route: `/v1/characters/{character_id}/fatigue/`

---
This route is cached for up to 300 seconds


```js
evetech.get_characters_character_id_fatigue({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `object`: 200 ok object
  * jump_fatigue_expire_date `string`: Character's jump fatigue expiry
  * last_jump_date `string`: Character's last jump activation
  * last_update_date `string`: Character's last jump update

### get_characters_character_id_fittings
Return fittings of a character

---
Alternate route: `/dev/characters/{character_id}/fittings/`

Alternate route: `/legacy/characters/{character_id}/fittings/`

Alternate route: `/v1/characters/{character_id}/fittings/`

---
This route is cached for up to 300 seconds


```js
evetech.get_characters_character_id_fittings({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * description **required** `string`: description string
    * fitting_id **required** `integer`: fitting_id integer
    * items **required** `array`: items array
      * items `object`: item object
        * flag **required** `integer`: flag integer
        * quantity **required** `integer`: quantity integer
        * type_id **required** `integer`: type_id integer
    * name **required** `string`: name string
    * ship_type_id **required** `integer`: ship_type_id integer

### post_characters_character_id_fittings
Save a new fitting for a character

---
Alternate route: `/dev/characters/{character_id}/fittings/`

Alternate route: `/legacy/characters/{character_id}/fittings/`

Alternate route: `/v1/characters/{character_id}/fittings/`



```js
evetech.post_characters_character_id_fittings({
  "character_id": 0,
  "fitting": {
    "name": "",
    "description": "",
    "ship_type_id": 0,
    "items": []
  }
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * fitting **required** `object`: fitting object
    * description **required** `string`: description string
    * items **required** `array`: items array
      * items `object`: item object
        * flag **required** `integer`: flag integer
        * quantity **required** `integer`: quantity integer
        * type_id **required** `integer`: type_id integer
    * name **required** `string`: name string
    * ship_type_id **required** `integer`: ship_type_id integer
  * token `string`: Access token to use if unable to set a header

#### Output
* output `object`: 201 created object
  * fitting_id **required** `integer`: fitting_id integer

### delete_characters_character_id_fittings_fitting_id
Delete a fitting from a character

---
Alternate route: `/dev/characters/{character_id}/fittings/{fitting_id}/`

Alternate route: `/legacy/characters/{character_id}/fittings/{fitting_id}/`

Alternate route: `/v1/characters/{character_id}/fittings/{fitting_id}/`



```js
evetech.delete_characters_character_id_fittings_fitting_id({
  "character_id": 0,
  "fitting_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * fitting_id **required** `integer`: ID for a fitting of this character
  * token `string`: Access token to use if unable to set a header

#### Output
*Output schema unknown*

### get_characters_character_id_fleet
Return the fleet ID the character is in, if any.

---
Alternate route: `/dev/characters/{character_id}/fleet/`

Alternate route: `/legacy/characters/{character_id}/fleet/`

Alternate route: `/v1/characters/{character_id}/fleet/`

---
This route is cached for up to 60 seconds


```js
evetech.get_characters_character_id_fleet({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `object`: 200 ok object
  * fleet_id **required** `integer`: The character's current fleet ID
  * role **required** `string` (values: fleet_commander, squad_commander, squad_member, wing_commander): Member’s role in fleet
  * squad_id **required** `integer`: ID of the squad the member is in. If not applicable, will be set to -1
  * wing_id **required** `integer`: ID of the wing the member is in. If not applicable, will be set to -1

### get_characters_character_id_fw_stats
Statistical overview of a character involved in faction warfare

---
Alternate route: `/dev/characters/{character_id}/fw/stats/`

Alternate route: `/legacy/characters/{character_id}/fw/stats/`

Alternate route: `/v1/characters/{character_id}/fw/stats/`

---
This route expires daily at 11:05


```js
evetech.get_characters_character_id_fw_stats({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `object`: 200 ok object
  * current_rank `integer`: The given character's current faction rank
  * enlisted_on `string`: The enlistment date of the given character into faction warfare. Will not be included if character is not enlisted in faction warfare
  * faction_id `integer`: The faction the given character is enlisted to fight for. Will not be included if character is not enlisted in faction warfare
  * highest_rank `integer`: The given character's highest faction rank achieved
  * kills **required** `object`: Summary of kills done by the given character against enemy factions
    * last_week **required** `integer`: Last week's total number of kills by a given character against enemy factions
    * total **required** `integer`: Total number of kills by a given character against enemy factions since the character enlisted
    * yesterday **required** `integer`: Yesterday's total number of kills by a given character against enemy factions
  * victory_points **required** `object`: Summary of victory points gained by the given character for the enlisted faction
    * last_week **required** `integer`: Last week's victory points gained by the given character
    * total **required** `integer`: Total victory points gained since the given character enlisted
    * yesterday **required** `integer`: Yesterday's victory points gained by the given character

### get_characters_character_id_implants
Return implants on the active clone of a character

---
Alternate route: `/dev/characters/{character_id}/implants/`

Alternate route: `/legacy/characters/{character_id}/implants/`

Alternate route: `/v1/characters/{character_id}/implants/`

---
This route is cached for up to 300 seconds


```js
evetech.get_characters_character_id_implants({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `integer`: 200 ok integer

### get_characters_character_id_industry_jobs
List industry jobs placed by a character

---
Alternate route: `/dev/characters/{character_id}/industry/jobs/`

Alternate route: `/legacy/characters/{character_id}/industry/jobs/`

Alternate route: `/v1/characters/{character_id}/industry/jobs/`

---
This route is cached for up to 300 seconds


```js
evetech.get_characters_character_id_industry_jobs({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * include_completed `boolean`: Whether retrieve completed character industry jobs as well
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * activity_id **required** `integer`: Job activity ID
    * blueprint_id **required** `integer`: blueprint_id integer
    * blueprint_location_id **required** `integer`: Location ID of the location from which the blueprint was installed. Normally a station ID, but can also be an asset (e.g. container) or corporation facility
    * blueprint_type_id **required** `integer`: blueprint_type_id integer
    * completed_character_id `integer`: ID of the character which completed this job
    * completed_date `string`: Date and time when this job was completed
    * cost `number`: The sume of job installation fee and industry facility tax
    * duration **required** `integer`: Job duration in seconds
    * end_date **required** `string`: Date and time when this job finished
    * facility_id **required** `integer`: ID of the facility where this job is running
    * installer_id **required** `integer`: ID of the character which installed this job
    * job_id **required** `integer`: Unique job ID
    * licensed_runs `integer`: Number of runs blueprint is licensed for
    * output_location_id **required** `integer`: Location ID of the location to which the output of the job will be delivered. Normally a station ID, but can also be a corporation facility
    * pause_date `string`: Date and time when this job was paused (i.e. time when the facility where this job was installed went offline)
    * probability `number`: Chance of success for invention
    * product_type_id `integer`: Type ID of product (manufactured, copied or invented)
    * runs **required** `integer`: Number of runs for a manufacturing job, or number of copies to make for a blueprint copy
    * start_date **required** `string`: Date and time when this job started
    * station_id **required** `integer`: ID of the station where industry facility is located
    * status **required** `string` (values: active, cancelled, delivered, paused, ready, reverted): status string
    * successful_runs `integer`: Number of successful runs for this job. Equal to runs unless this is an invention job

### get_characters_character_id_killmails_recent
Return a list of a character's kills and losses going back 90 days

---
Alternate route: `/dev/characters/{character_id}/killmails/recent/`

Alternate route: `/legacy/characters/{character_id}/killmails/recent/`

Alternate route: `/v1/characters/{character_id}/killmails/recent/`

---
This route is cached for up to 300 seconds


```js
evetech.get_characters_character_id_killmails_recent({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * killmail_hash **required** `string`: A hash of this killmail
    * killmail_id **required** `integer`: ID of this killmail

### get_characters_character_id_location
Information about the characters current location. Returns the current solar system id, and also the current station or structure ID if applicable.

---
Alternate route: `/dev/characters/{character_id}/location/`

Alternate route: `/legacy/characters/{character_id}/location/`

Alternate route: `/v1/characters/{character_id}/location/`

---
This route is cached for up to 5 seconds


```js
evetech.get_characters_character_id_location({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `object`: 200 ok object
  * solar_system_id **required** `integer`: solar_system_id integer
  * station_id `integer`: station_id integer
  * structure_id `integer`: structure_id integer

### get_characters_character_id_loyalty_points
Return a list of loyalty points for all corporations the character has worked for

---
Alternate route: `/dev/characters/{character_id}/loyalty/points/`

Alternate route: `/legacy/characters/{character_id}/loyalty/points/`

Alternate route: `/v1/characters/{character_id}/loyalty/points/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_characters_character_id_loyalty_points({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * corporation_id **required** `integer`: corporation_id integer
    * loyalty_points **required** `integer`: loyalty_points integer

### get_characters_character_id_mail
Return the 50 most recent mail headers belonging to the character that match the query criteria. Queries can be filtered by label, and last_mail_id can be used to paginate backwards.

---
Alternate route: `/dev/characters/{character_id}/mail/`

Alternate route: `/legacy/characters/{character_id}/mail/`

Alternate route: `/v1/characters/{character_id}/mail/`

---
This route is cached for up to 30 seconds


```js
evetech.get_characters_character_id_mail({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * labels `array`: Fetch only mails that match one or more of the given labels
  * last_mail_id `integer`: List only mail with an ID lower than the given ID, if present
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * from `integer`: From whom the mail was sent
    * is_read `boolean`: is_read boolean
    * labels `array`: labels array
      * items `integer`: label integer
    * mail_id `integer`: mail_id integer
    * recipients `array`: Recipients of the mail
      * items `object`: recipient object
        * recipient_id **required** `integer`: recipient_id integer
        * recipient_type **required** `string` (values: alliance, character, corporation, mailing_list): recipient_type string
    * subject `string`: Mail subject
    * timestamp `string`: When the mail was sent

### post_characters_character_id_mail
Create and send a new mail

---
Alternate route: `/dev/characters/{character_id}/mail/`

Alternate route: `/legacy/characters/{character_id}/mail/`

Alternate route: `/v1/characters/{character_id}/mail/`



```js
evetech.post_characters_character_id_mail({
  "character_id": 0,
  "mail": {
    "recipients": [],
    "subject": "",
    "body": ""
  }
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * mail **required** `object`: mail object
    * approved_cost `integer`: approved_cost integer
    * body **required** `string`: body string
    * recipients **required** `array`: recipients array
      * items `object`: recipient object
        * recipient_id **required** `integer`: recipient_id integer
        * recipient_type **required** `string` (values: alliance, character, corporation, mailing_list): recipient_type string
    * subject **required** `string`: subject string
  * token `string`: Access token to use if unable to set a header

#### Output
* output `integer`: Mail ID

### get_characters_character_id_mail_labels
Return a list of the users mail labels, unread counts for each label and a total unread count.

---
Alternate route: `/dev/characters/{character_id}/mail/labels/`

Alternate route: `/v3/characters/{character_id}/mail/labels/`

---
This route is cached for up to 30 seconds


```js
evetech.get_characters_character_id_mail_labels({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `object`: 200 ok object
  * labels `array`: labels array
    * items `object`: label object
      * color `string` (values: #0000fe, #006634, #0099ff, #00ff33, #01ffff, #349800, #660066, #666666, #999999, #99ffff, #9a0000, #ccff9a, #e6e6e6, #fe0000, #ff6600, #ffff01, #ffffcd, #ffffff): color string
      * label_id `integer`: label_id integer
      * name `string`: name string
      * unread_count `integer`: unread_count integer
  * total_unread_count `integer`: total_unread_count integer

### post_characters_character_id_mail_labels
Create a mail label

---
Alternate route: `/dev/characters/{character_id}/mail/labels/`

Alternate route: `/legacy/characters/{character_id}/mail/labels/`

Alternate route: `/v2/characters/{character_id}/mail/labels/`



```js
evetech.post_characters_character_id_mail_labels({
  "character_id": 0,
  "label": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * label **required** `object`: label object
    * color `string` (values: #0000fe, #006634, #0099ff, #00ff33, #01ffff, #349800, #660066, #666666, #999999, #99ffff, #9a0000, #ccff9a, #e6e6e6, #fe0000, #ff6600, #ffff01, #ffffcd, #ffffff): Hexadecimal string representing label color, in RGB format
    * name **required** `string`: name string
  * token `string`: Access token to use if unable to set a header

#### Output
* output `integer`: Label ID

### delete_characters_character_id_mail_labels_label_id
Delete a mail label

---
Alternate route: `/dev/characters/{character_id}/mail/labels/{label_id}/`

Alternate route: `/legacy/characters/{character_id}/mail/labels/{label_id}/`

Alternate route: `/v1/characters/{character_id}/mail/labels/{label_id}/`



```js
evetech.delete_characters_character_id_mail_labels_label_id({
  "character_id": 0,
  "label_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * label_id **required** `integer`: An EVE label id
  * token `string`: Access token to use if unable to set a header

#### Output
*Output schema unknown*

### get_characters_character_id_mail_lists
Return all mailing lists that the character is subscribed to

---
Alternate route: `/dev/characters/{character_id}/mail/lists/`

Alternate route: `/legacy/characters/{character_id}/mail/lists/`

Alternate route: `/v1/characters/{character_id}/mail/lists/`

---
This route is cached for up to 120 seconds


```js
evetech.get_characters_character_id_mail_lists({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * mailing_list_id **required** `integer`: Mailing list ID
    * name **required** `string`: name string

### delete_characters_character_id_mail_mail_id
Delete a mail

---
Alternate route: `/dev/characters/{character_id}/mail/{mail_id}/`

Alternate route: `/legacy/characters/{character_id}/mail/{mail_id}/`

Alternate route: `/v1/characters/{character_id}/mail/{mail_id}/`



```js
evetech.delete_characters_character_id_mail_mail_id({
  "character_id": 0,
  "mail_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * mail_id **required** `integer`: An EVE mail ID
  * token `string`: Access token to use if unable to set a header

#### Output
*Output schema unknown*

### get_characters_character_id_mail_mail_id
Return the contents of an EVE mail

---
Alternate route: `/dev/characters/{character_id}/mail/{mail_id}/`

Alternate route: `/legacy/characters/{character_id}/mail/{mail_id}/`

Alternate route: `/v1/characters/{character_id}/mail/{mail_id}/`

---
This route is cached for up to 30 seconds


```js
evetech.get_characters_character_id_mail_mail_id({
  "character_id": 0,
  "mail_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * mail_id **required** `integer`: An EVE mail ID
  * token `string`: Access token to use if unable to set a header

#### Output
* output `object`: 200 ok object
  * body `string`: Mail's body
  * from `integer`: From whom the mail was sent
  * labels `array`: Labels attached to the mail
    * items `integer`: label integer
  * read `boolean`: Whether the mail is flagged as read
  * recipients `array`: Recipients of the mail
    * items `object`: recipient object
      * recipient_id **required** `integer`: recipient_id integer
      * recipient_type **required** `string` (values: alliance, character, corporation, mailing_list): recipient_type string
  * subject `string`: Mail subject
  * timestamp `string`: When the mail was sent

### put_characters_character_id_mail_mail_id
Update metadata about a mail

---
Alternate route: `/dev/characters/{character_id}/mail/{mail_id}/`

Alternate route: `/legacy/characters/{character_id}/mail/{mail_id}/`

Alternate route: `/v1/characters/{character_id}/mail/{mail_id}/`



```js
evetech.put_characters_character_id_mail_mail_id({
  "character_id": 0,
  "contents": {},
  "mail_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * contents **required** `object`: contents object
    * labels `array`: Labels to assign to the mail. Pre-existing labels are unassigned.
      * items `integer`: label integer
    * read `boolean`: Whether the mail is flagged as read
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * mail_id **required** `integer`: An EVE mail ID
  * token `string`: Access token to use if unable to set a header

#### Output
*Output schema unknown*

### get_characters_character_id_medals
Return a list of medals the character has

---
Alternate route: `/dev/characters/{character_id}/medals/`

Alternate route: `/legacy/characters/{character_id}/medals/`

Alternate route: `/v1/characters/{character_id}/medals/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_characters_character_id_medals({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * corporation_id **required** `integer`: corporation_id integer
    * date **required** `string`: date string
    * description **required** `string`: description string
    * graphics **required** `array`: graphics array
      * items `object`: graphic object
        * color `integer`: color integer
        * graphic **required** `string`: graphic string
        * layer **required** `integer`: layer integer
        * part **required** `integer`: part integer
    * issuer_id **required** `integer`: issuer_id integer
    * medal_id **required** `integer`: medal_id integer
    * reason **required** `string`: reason string
    * status **required** `string` (values: public, private): status string
    * title **required** `string`: title string

### get_characters_character_id_mining
Paginated record of all mining done by a character for the past 30 days


---
Alternate route: `/dev/characters/{character_id}/mining/`

Alternate route: `/legacy/characters/{character_id}/mining/`

Alternate route: `/v1/characters/{character_id}/mining/`

---
This route is cached for up to 600 seconds


```js
evetech.get_characters_character_id_mining({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * date **required** `string`: date string
    * quantity **required** `integer`: quantity integer
    * solar_system_id **required** `integer`: solar_system_id integer
    * type_id **required** `integer`: type_id integer

### get_characters_character_id_notifications
Return character notifications

---
Alternate route: `/dev/characters/{character_id}/notifications/`

Alternate route: `/v2/characters/{character_id}/notifications/`

---
This route is cached for up to 600 seconds


```js
evetech.get_characters_character_id_notifications({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * is_read `boolean`: is_read boolean
    * notification_id **required** `integer`: notification_id integer
    * sender_id **required** `integer`: sender_id integer
    * sender_type **required** `string` (values: character, corporation, alliance, faction, other): sender_type string
    * text `string`: text string
    * timestamp **required** `string`: timestamp string
    * type **required** `string` (values: AcceptedAlly, AcceptedSurrender, AllAnchoringMsg, AllMaintenanceBillMsg, AllStrucInvulnerableMsg, AllStructVulnerableMsg, AllWarCorpJoinedAllianceMsg, AllWarDeclaredMsg, AllWarInvalidatedMsg, AllWarRetractedMsg, AllWarSurrenderMsg, AllianceCapitalChanged, AllyContractCancelled, AllyJoinedWarAggressorMsg, AllyJoinedWarAllyMsg, AllyJoinedWarDefenderMsg, BattlePunishFriendlyFire, BillOutOfMoneyMsg, BillPaidCorpAllMsg, BountyClaimMsg, BountyESSShared, BountyESSTaken, BountyPlacedAlliance, BountyPlacedChar, BountyPlacedCorp, BountyYourBountyClaimed, BuddyConnectContactAdd, CharAppAcceptMsg, CharAppRejectMsg, CharAppWithdrawMsg, CharLeftCorpMsg, CharMedalMsg, CharTerminationMsg, CloneActivationMsg, CloneActivationMsg2, CloneMovedMsg, CloneRevokedMsg1, CloneRevokedMsg2, ContactAdd, ContactEdit, ContainerPasswordMsg, CorpAllBillMsg, CorpAppAcceptMsg, CorpAppInvitedMsg, CorpAppNewMsg, CorpAppRejectCustomMsg, CorpAppRejectMsg, CorpDividendMsg, CorpFriendlyFireDisableTimerCompleted, CorpFriendlyFireDisableTimerStarted, CorpFriendlyFireEnableTimerCompleted, CorpFriendlyFireEnableTimerStarted, CorpKicked, CorpLiquidationMsg, CorpNewCEOMsg, CorpNewsMsg, CorpOfficeExpirationMsg, CorpStructLostMsg, CorpTaxChangeMsg, CorpVoteCEORevokedMsg, CorpVoteMsg, CorpWarDeclaredMsg, CorpWarFightingLegalMsg, CorpWarInvalidatedMsg, CorpWarRetractedMsg, CorpWarSurrenderMsg, CustomsMsg, DeclareWar, DistrictAttacked, DustAppAcceptedMsg, EntosisCaptureStarted, FWAllianceKickMsg, FWAllianceWarningMsg, FWCharKickMsg, FWCharRankGainMsg, FWCharRankLossMsg, FWCharWarningMsg, FWCorpJoinMsg, FWCorpKickMsg, FWCorpLeaveMsg, FWCorpWarningMsg, FacWarCorpJoinRequestMsg, FacWarCorpJoinWithdrawMsg, FacWarCorpLeaveRequestMsg, FacWarCorpLeaveWithdrawMsg, FacWarLPDisqualifiedEvent, FacWarLPDisqualifiedKill, FacWarLPPayoutEvent, FacWarLPPayoutKill, GameTimeAdded, GameTimeReceived, GameTimeSent, GiftReceived, IHubDestroyedByBillFailure, IncursionCompletedMsg, IndustryTeamAuctionLost, IndustryTeamAuctionWon, InfrastructureHubBillAboutToExpire, InsuranceExpirationMsg, InsuranceFirstShipMsg, InsuranceInvalidatedMsg, InsuranceIssuedMsg, InsurancePayoutMsg, JumpCloneDeletedMsg1, JumpCloneDeletedMsg2, KillReportFinalBlow, KillReportVictim, KillRightAvailable, KillRightAvailableOpen, KillRightEarned, KillRightUnavailable, KillRightUnavailableOpen, KillRightUsed, LocateCharMsg, MadeWarMutual, MercOfferedNegotiationMsg, MissionOfferExpirationMsg, MissionTimeoutMsg, MoonminingAutomaticFracture, MoonminingExtractionCancelled, MoonminingExtractionFinished, MoonminingExtractionStarted, MoonminingLaserFired, NPCStandingsGained, NPCStandingsLost, OfferedSurrender, OfferedToAlly, OldLscMessages, OperationFinished, OrbitalAttacked, OrbitalReinforced, OwnershipTransferred, ReimbursementMsg, ResearchMissionAvailableMsg, RetractsWar, SeasonalChallengeCompleted, SovAllClaimAquiredMsg, SovAllClaimLostMsg, SovCommandNodeEventStarted, SovCorpBillLateMsg, SovCorpClaimFailMsg, SovDisruptorMsg, SovStationEnteredFreeport, SovStructureDestroyed, SovStructureReinforced, SovStructureSelfDestructCancel, SovStructureSelfDestructFinished, SovStructureSelfDestructRequested, SovereigntyIHDamageMsg, SovereigntySBUDamageMsg, SovereigntyTCUDamageMsg, StationAggressionMsg1, StationAggressionMsg2, StationConquerMsg, StationServiceDisabled, StationServiceEnabled, StationStateChangeMsg, StoryLineMissionAvailableMsg, StructureAnchoring, StructureCourierContractChanged, StructureDestroyed, StructureFuelAlert, StructureItemsDelivered, StructureLostArmor, StructureLostShields, StructureOnline, StructureServicesOffline, StructureUnanchoring, StructureUnderAttack, StructureWentHighPower, StructureWentLowPower, StructuresReinforcementChanged, TowerAlertMsg, TowerResourceAlertMsg, TransactionReversalMsg, TutorialMsg, WarAllyOfferDeclinedMsg, WarSurrenderDeclinedMsg, WarSurrenderOfferMsg): type string

### get_characters_character_id_notifications_contacts
Return notifications about having been added to someone's contact list

---
Alternate route: `/dev/characters/{character_id}/notifications/contacts/`

Alternate route: `/legacy/characters/{character_id}/notifications/contacts/`

Alternate route: `/v1/characters/{character_id}/notifications/contacts/`

---
This route is cached for up to 600 seconds


```js
evetech.get_characters_character_id_notifications_contacts({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * message **required** `string`: message string
    * notification_id **required** `integer`: notification_id integer
    * send_date **required** `string`: send_date string
    * sender_character_id **required** `integer`: sender_character_id integer
    * standing_level **required** `number`: A number representing the standing level the receiver has been added at by the sender. The standing levels are as follows: -10 -> Terrible | -5 -> Bad |  0 -> Neutral |  5 -> Good |  10 -> Excellent

### get_characters_character_id_online
Checks if the character is currently online

---
Alternate route: `/dev/characters/{character_id}/online/`

Alternate route: `/v2/characters/{character_id}/online/`

---
This route is cached for up to 60 seconds


```js
evetech.get_characters_character_id_online({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `object`: 200 ok object
  * last_login `string`: Timestamp of the last login
  * last_logout `string`: Timestamp of the last logout
  * logins `integer`: Total number of times the character has logged in
  * online **required** `boolean`: If the character is online

### get_characters_character_id_opportunities
Return a list of tasks finished by a character

---
Alternate route: `/dev/characters/{character_id}/opportunities/`

Alternate route: `/legacy/characters/{character_id}/opportunities/`

Alternate route: `/v1/characters/{character_id}/opportunities/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_characters_character_id_opportunities({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * completed_at **required** `string`: completed_at string
    * task_id **required** `integer`: task_id integer

### get_characters_character_id_orders
List open market orders placed by a character

---
Alternate route: `/dev/characters/{character_id}/orders/`

Alternate route: `/v2/characters/{character_id}/orders/`

---
This route is cached for up to 1200 seconds


```js
evetech.get_characters_character_id_orders({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * duration **required** `integer`: Number of days for which order is valid (starting from the issued date). An order expires at time issued + duration
    * escrow `number`: For buy orders, the amount of ISK in escrow
    * is_buy_order `boolean`: True if the order is a bid (buy) order
    * is_corporation **required** `boolean`: Signifies whether the buy/sell order was placed on behalf of a corporation.
    * issued **required** `string`: Date and time when this order was issued
    * location_id **required** `integer`: ID of the location where order was placed
    * min_volume `integer`: For buy orders, the minimum quantity that will be accepted in a matching sell order
    * order_id **required** `integer`: Unique order ID
    * price **required** `number`: Cost per unit for this order
    * range **required** `string` (values: 1, 10, 2, 20, 3, 30, 4, 40, 5, region, solarsystem, station): Valid order range, numbers are ranges in jumps
    * region_id **required** `integer`: ID of the region where order was placed
    * type_id **required** `integer`: The type ID of the item transacted in this order
    * volume_remain **required** `integer`: Quantity of items still required or offered
    * volume_total **required** `integer`: Quantity of items required or offered at time order was placed

### get_characters_character_id_orders_history
List cancelled and expired market orders placed by a character up to 90 days in the past.

---
Alternate route: `/dev/characters/{character_id}/orders/history/`

Alternate route: `/legacy/characters/{character_id}/orders/history/`

Alternate route: `/v1/characters/{character_id}/orders/history/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_characters_character_id_orders_history({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * duration **required** `integer`: Number of days the order was valid for (starting from the issued date). An order expires at time issued + duration
    * escrow `number`: For buy orders, the amount of ISK in escrow
    * is_buy_order `boolean`: True if the order is a bid (buy) order
    * is_corporation **required** `boolean`: Signifies whether the buy/sell order was placed on behalf of a corporation.
    * issued **required** `string`: Date and time when this order was issued
    * location_id **required** `integer`: ID of the location where order was placed
    * min_volume `integer`: For buy orders, the minimum quantity that will be accepted in a matching sell order
    * order_id **required** `integer`: Unique order ID
    * price **required** `number`: Cost per unit for this order
    * range **required** `string` (values: 1, 10, 2, 20, 3, 30, 4, 40, 5, region, solarsystem, station): Valid order range, numbers are ranges in jumps
    * region_id **required** `integer`: ID of the region where order was placed
    * state **required** `string` (values: cancelled, expired): Current order state
    * type_id **required** `integer`: The type ID of the item transacted in this order
    * volume_remain **required** `integer`: Quantity of items still required or offered
    * volume_total **required** `integer`: Quantity of items required or offered at time order was placed

### get_characters_character_id_planets
Returns a list of all planetary colonies owned by a character.

---
Alternate route: `/dev/characters/{character_id}/planets/`

Alternate route: `/legacy/characters/{character_id}/planets/`

Alternate route: `/v1/characters/{character_id}/planets/`

---
This route is cached for up to 600 seconds


```js
evetech.get_characters_character_id_planets({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * last_update **required** `string`: last_update string
    * num_pins **required** `integer`: num_pins integer
    * owner_id **required** `integer`: owner_id integer
    * planet_id **required** `integer`: planet_id integer
    * planet_type **required** `string` (values: temperate, barren, oceanic, ice, gas, lava, storm, plasma): planet_type string
    * solar_system_id **required** `integer`: solar_system_id integer
    * upgrade_level **required** `integer`: upgrade_level integer

### get_characters_character_id_planets_planet_id
Returns full details on the layout of a single planetary colony, including links, pins and routes. Note: Planetary information is only recalculated when the colony is viewed through the client. Information will not update until this criteria is met.

---
Alternate route: `/dev/characters/{character_id}/planets/{planet_id}/`

Alternate route: `/v3/characters/{character_id}/planets/{planet_id}/`

---
This route is cached for up to 600 seconds


```js
evetech.get_characters_character_id_planets_planet_id({
  "character_id": 0,
  "planet_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * planet_id **required** `integer`: Planet id of the target planet
  * token `string`: Access token to use if unable to set a header

#### Output
* output `object`: 200 ok object
  * links **required** `array`: links array
    * items `object`: link object
      * destination_pin_id **required** `integer`: destination_pin_id integer
      * link_level **required** `integer`: link_level integer
      * source_pin_id **required** `integer`: source_pin_id integer
  * pins **required** `array`: pins array
    * items `object`: pin object
      * contents `array`: contents array
        * items `object`: content object
          * amount **required** `integer`: amount integer
          * type_id **required** `integer`: type_id integer
      * expiry_time `string`: expiry_time string
      * extractor_details `object`: extractor_details object
        * cycle_time `integer`: in seconds
        * head_radius `number`: head_radius number
        * heads **required** `array`: heads array
          * items `object`: head object
            * head_id **required** `integer`: head_id integer
            * latitude **required** `number`: latitude number
            * longitude **required** `number`: longitude number
        * product_type_id `integer`: product_type_id integer
        * qty_per_cycle `integer`: qty_per_cycle integer
      * factory_details `object`: factory_details object
        * schematic_id **required** `integer`: schematic_id integer
      * install_time `string`: install_time string
      * last_cycle_start `string`: last_cycle_start string
      * latitude **required** `number`: latitude number
      * longitude **required** `number`: longitude number
      * pin_id **required** `integer`: pin_id integer
      * schematic_id `integer`: schematic_id integer
      * type_id **required** `integer`: type_id integer
  * routes **required** `array`: routes array
    * items `object`: route object
      * content_type_id **required** `integer`: content_type_id integer
      * destination_pin_id **required** `integer`: destination_pin_id integer
      * quantity **required** `number`: quantity number
      * route_id **required** `integer`: route_id integer
      * source_pin_id **required** `integer`: source_pin_id integer
      * waypoints `array`: list of pin ID waypoints
        * items `integer`: waypoint integer

### get_characters_character_id_portrait
Get portrait urls for a character

---
Alternate route: `/dev/characters/{character_id}/portrait/`

Alternate route: `/v2/characters/{character_id}/portrait/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_characters_character_id_portrait({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `object`: 200 ok object
  * px128x128 `string`: px128x128 string
  * px256x256 `string`: px256x256 string
  * px512x512 `string`: px512x512 string
  * px64x64 `string`: px64x64 string

### get_characters_character_id_roles
Returns a character's corporation roles

---
Alternate route: `/dev/characters/{character_id}/roles/`

Alternate route: `/v2/characters/{character_id}/roles/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_characters_character_id_roles({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `object`: 200 ok object
  * roles `array`: roles array
    * items `string` (values: Account_Take_1, Account_Take_2, Account_Take_3, Account_Take_4, Account_Take_5, Account_Take_6, Account_Take_7, Accountant, Auditor, Communications_Officer, Config_Equipment, Config_Starbase_Equipment, Container_Take_1, Container_Take_2, Container_Take_3, Container_Take_4, Container_Take_5, Container_Take_6, Container_Take_7, Contract_Manager, Diplomat, Director, Factory_Manager, Fitting_Manager, Hangar_Query_1, Hangar_Query_2, Hangar_Query_3, Hangar_Query_4, Hangar_Query_5, Hangar_Query_6, Hangar_Query_7, Hangar_Take_1, Hangar_Take_2, Hangar_Take_3, Hangar_Take_4, Hangar_Take_5, Hangar_Take_6, Hangar_Take_7, Junior_Accountant, Personnel_Manager, Rent_Factory_Facility, Rent_Office, Rent_Research_Facility, Security_Officer, Starbase_Defense_Operator, Starbase_Fuel_Technician, Station_Manager, Terrestrial_Combat_Officer, Terrestrial_Logistics_Officer, Trader): role string
  * roles_at_base `array`: roles_at_base array
    * items `string` (values: Account_Take_1, Account_Take_2, Account_Take_3, Account_Take_4, Account_Take_5, Account_Take_6, Account_Take_7, Accountant, Auditor, Communications_Officer, Config_Equipment, Config_Starbase_Equipment, Container_Take_1, Container_Take_2, Container_Take_3, Container_Take_4, Container_Take_5, Container_Take_6, Container_Take_7, Contract_Manager, Diplomat, Director, Factory_Manager, Fitting_Manager, Hangar_Query_1, Hangar_Query_2, Hangar_Query_3, Hangar_Query_4, Hangar_Query_5, Hangar_Query_6, Hangar_Query_7, Hangar_Take_1, Hangar_Take_2, Hangar_Take_3, Hangar_Take_4, Hangar_Take_5, Hangar_Take_6, Hangar_Take_7, Junior_Accountant, Personnel_Manager, Rent_Factory_Facility, Rent_Office, Rent_Research_Facility, Security_Officer, Starbase_Defense_Operator, Starbase_Fuel_Technician, Station_Manager, Terrestrial_Combat_Officer, Terrestrial_Logistics_Officer, Trader): roles_at_base string
  * roles_at_hq `array`: roles_at_hq array
    * items `string` (values: Account_Take_1, Account_Take_2, Account_Take_3, Account_Take_4, Account_Take_5, Account_Take_6, Account_Take_7, Accountant, Auditor, Communications_Officer, Config_Equipment, Config_Starbase_Equipment, Container_Take_1, Container_Take_2, Container_Take_3, Container_Take_4, Container_Take_5, Container_Take_6, Container_Take_7, Contract_Manager, Diplomat, Director, Factory_Manager, Fitting_Manager, Hangar_Query_1, Hangar_Query_2, Hangar_Query_3, Hangar_Query_4, Hangar_Query_5, Hangar_Query_6, Hangar_Query_7, Hangar_Take_1, Hangar_Take_2, Hangar_Take_3, Hangar_Take_4, Hangar_Take_5, Hangar_Take_6, Hangar_Take_7, Junior_Accountant, Personnel_Manager, Rent_Factory_Facility, Rent_Office, Rent_Research_Facility, Security_Officer, Starbase_Defense_Operator, Starbase_Fuel_Technician, Station_Manager, Terrestrial_Combat_Officer, Terrestrial_Logistics_Officer, Trader): roles_at_hq string
  * roles_at_other `array`: roles_at_other array
    * items `string` (values: Account_Take_1, Account_Take_2, Account_Take_3, Account_Take_4, Account_Take_5, Account_Take_6, Account_Take_7, Accountant, Auditor, Communications_Officer, Config_Equipment, Config_Starbase_Equipment, Container_Take_1, Container_Take_2, Container_Take_3, Container_Take_4, Container_Take_5, Container_Take_6, Container_Take_7, Contract_Manager, Diplomat, Director, Factory_Manager, Fitting_Manager, Hangar_Query_1, Hangar_Query_2, Hangar_Query_3, Hangar_Query_4, Hangar_Query_5, Hangar_Query_6, Hangar_Query_7, Hangar_Take_1, Hangar_Take_2, Hangar_Take_3, Hangar_Take_4, Hangar_Take_5, Hangar_Take_6, Hangar_Take_7, Junior_Accountant, Personnel_Manager, Rent_Factory_Facility, Rent_Office, Rent_Research_Facility, Security_Officer, Starbase_Defense_Operator, Starbase_Fuel_Technician, Station_Manager, Terrestrial_Combat_Officer, Terrestrial_Logistics_Officer, Trader): roles_at_other string

### get_characters_character_id_search
Search for entities that match a given sub-string.

---
Alternate route: `/dev/characters/{character_id}/search/`

Alternate route: `/v3/characters/{character_id}/search/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_characters_character_id_search({
  "categories": [],
  "character_id": 0,
  "search": ""
}, context)
```

#### Input
* input `object`
  * Accept-Language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response
  * categories **required** `array`: Type of entities to search for
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response, takes precedence over Accept-Language
  * search **required** `string`: The string to search on
  * strict `boolean`: Whether the search should be a strict match
  * token `string`: Access token to use if unable to set a header

#### Output
* output `object`: 200 ok object
  * agent `array`: agent array
    * items `integer`: agent integer
  * alliance `array`: alliance array
    * items `integer`: alliance integer
  * character `array`: character array
    * items `integer`: character integer
  * constellation `array`: constellation array
    * items `integer`: constellation integer
  * corporation `array`: corporation array
    * items `integer`: corporation integer
  * faction `array`: faction array
    * items `integer`: faction integer
  * inventory_type `array`: inventory_type array
    * items `integer`: inventory_type integer
  * region `array`: region array
    * items `integer`: region integer
  * solar_system `array`: solar_system array
    * items `integer`: solar_system integer
  * station `array`: station array
    * items `integer`: station integer
  * structure `array`: structure array
    * items `integer`: structure integer

### get_characters_character_id_ship
Get the current ship type, name and id

---
Alternate route: `/dev/characters/{character_id}/ship/`

Alternate route: `/legacy/characters/{character_id}/ship/`

Alternate route: `/v1/characters/{character_id}/ship/`

---
This route is cached for up to 5 seconds


```js
evetech.get_characters_character_id_ship({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `object`: 200 ok object
  * ship_item_id **required** `integer`: Item id's are unique to a ship and persist until it is repackaged. This value can be used to track repeated uses of a ship, or detect when a pilot changes into a different instance of the same ship type.
  * ship_name **required** `string`: ship_name string
  * ship_type_id **required** `integer`: ship_type_id integer

### get_characters_character_id_skillqueue
List the configured skill queue for the given character

---
Alternate route: `/dev/characters/{character_id}/skillqueue/`

Alternate route: `/legacy/characters/{character_id}/skillqueue/`

Alternate route: `/v2/characters/{character_id}/skillqueue/`

---
This route is cached for up to 120 seconds


```js
evetech.get_characters_character_id_skillqueue({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * finish_date `string`: finish_date string
    * finished_level **required** `integer`: finished_level integer
    * level_end_sp `integer`: level_end_sp integer
    * level_start_sp `integer`: Amount of SP that was in the skill when it started training it's current level. Used to calculate % of current level complete.
    * queue_position **required** `integer`: queue_position integer
    * skill_id **required** `integer`: skill_id integer
    * start_date `string`: start_date string
    * training_start_sp `integer`: training_start_sp integer

### get_characters_character_id_skills
List all trained skills for the given character

---
Alternate route: `/dev/characters/{character_id}/skills/`

Alternate route: `/v4/characters/{character_id}/skills/`

---
This route is cached for up to 120 seconds


```js
evetech.get_characters_character_id_skills({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `object`: 200 ok object
  * skills **required** `array`: skills array
    * items `object`: skill object
      * active_skill_level **required** `integer`: active_skill_level integer
      * skill_id **required** `integer`: skill_id integer
      * skillpoints_in_skill **required** `integer`: skillpoints_in_skill integer
      * trained_skill_level **required** `integer`: trained_skill_level integer
  * total_sp **required** `integer`: total_sp integer
  * unallocated_sp `integer`: Skill points available to be assigned

### get_characters_character_id_standings
Return character standings from agents, NPC corporations, and factions

---
Alternate route: `/dev/characters/{character_id}/standings/`

Alternate route: `/legacy/characters/{character_id}/standings/`

Alternate route: `/v1/characters/{character_id}/standings/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_characters_character_id_standings({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * from_id **required** `integer`: from_id integer
    * from_type **required** `string` (values: agent, npc_corp, faction): from_type string
    * standing **required** `number`: standing number

### get_characters_character_id_stats
Returns aggregate yearly stats for a character

---
Alternate route: `/dev/characters/{character_id}/stats/`

Alternate route: `/v2/characters/{character_id}/stats/`

---
This route is cached for up to 86400 seconds


```js
evetech.get_characters_character_id_stats({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: List of character aggregate stats
  * items `object`: Aggregate stats for a year
    * character `object`: character object
      * days_of_activity `integer`: days_of_activity integer
      * minutes `integer`: minutes integer
      * sessions_started `integer`: sessions_started integer
    * combat `object`: combat object
      * cap_drainedby_npc `integer`: cap_drainedby_npc integer
      * cap_drainedby_pc `integer`: cap_drainedby_pc integer
      * cap_draining_pc `integer`: cap_draining_pc integer
      * criminal_flag_set `integer`: criminal_flag_set integer
      * damage_from_np_cs_amount `integer`: damage_from_np_cs_amount integer
      * damage_from_np_cs_num_shots `integer`: damage_from_np_cs_num_shots integer
      * damage_from_players_bomb_amount `integer`: damage_from_players_bomb_amount integer
      * damage_from_players_bomb_num_shots `integer`: damage_from_players_bomb_num_shots integer
      * damage_from_players_combat_drone_amount `integer`: damage_from_players_combat_drone_amount integer
      * damage_from_players_combat_drone_num_shots `integer`: damage_from_players_combat_drone_num_shots integer
      * damage_from_players_energy_amount `integer`: damage_from_players_energy_amount integer
      * damage_from_players_energy_num_shots `integer`: damage_from_players_energy_num_shots integer
      * damage_from_players_fighter_bomber_amount `integer`: damage_from_players_fighter_bomber_amount integer
      * damage_from_players_fighter_bomber_num_shots `integer`: damage_from_players_fighter_bomber_num_shots integer
      * damage_from_players_fighter_drone_amount `integer`: damage_from_players_fighter_drone_amount integer
      * damage_from_players_fighter_drone_num_shots `integer`: damage_from_players_fighter_drone_num_shots integer
      * damage_from_players_hybrid_amount `integer`: damage_from_players_hybrid_amount integer
      * damage_from_players_hybrid_num_shots `integer`: damage_from_players_hybrid_num_shots integer
      * damage_from_players_missile_amount `integer`: damage_from_players_missile_amount integer
      * damage_from_players_missile_num_shots `integer`: damage_from_players_missile_num_shots integer
      * damage_from_players_projectile_amount `integer`: damage_from_players_projectile_amount integer
      * damage_from_players_projectile_num_shots `integer`: damage_from_players_projectile_num_shots integer
      * damage_from_players_smart_bomb_amount `integer`: damage_from_players_smart_bomb_amount integer
      * damage_from_players_smart_bomb_num_shots `integer`: damage_from_players_smart_bomb_num_shots integer
      * damage_from_players_super_amount `integer`: damage_from_players_super_amount integer
      * damage_from_players_super_num_shots `integer`: damage_from_players_super_num_shots integer
      * damage_from_structures_total_amount `integer`: damage_from_structures_total_amount integer
      * damage_from_structures_total_num_shots `integer`: damage_from_structures_total_num_shots integer
      * damage_to_players_bomb_amount `integer`: damage_to_players_bomb_amount integer
      * damage_to_players_bomb_num_shots `integer`: damage_to_players_bomb_num_shots integer
      * damage_to_players_combat_drone_amount `integer`: damage_to_players_combat_drone_amount integer
      * damage_to_players_combat_drone_num_shots `integer`: damage_to_players_combat_drone_num_shots integer
      * damage_to_players_energy_amount `integer`: damage_to_players_energy_amount integer
      * damage_to_players_energy_num_shots `integer`: damage_to_players_energy_num_shots integer
      * damage_to_players_fighter_bomber_amount `integer`: damage_to_players_fighter_bomber_amount integer
      * damage_to_players_fighter_bomber_num_shots `integer`: damage_to_players_fighter_bomber_num_shots integer
      * damage_to_players_fighter_drone_amount `integer`: damage_to_players_fighter_drone_amount integer
      * damage_to_players_fighter_drone_num_shots `integer`: damage_to_players_fighter_drone_num_shots integer
      * damage_to_players_hybrid_amount `integer`: damage_to_players_hybrid_amount integer
      * damage_to_players_hybrid_num_shots `integer`: damage_to_players_hybrid_num_shots integer
      * damage_to_players_missile_amount `integer`: damage_to_players_missile_amount integer
      * damage_to_players_missile_num_shots `integer`: damage_to_players_missile_num_shots integer
      * damage_to_players_projectile_amount `integer`: damage_to_players_projectile_amount integer
      * damage_to_players_projectile_num_shots `integer`: damage_to_players_projectile_num_shots integer
      * damage_to_players_smart_bomb_amount `integer`: damage_to_players_smart_bomb_amount integer
      * damage_to_players_smart_bomb_num_shots `integer`: damage_to_players_smart_bomb_num_shots integer
      * damage_to_players_super_amount `integer`: damage_to_players_super_amount integer
      * damage_to_players_super_num_shots `integer`: damage_to_players_super_num_shots integer
      * damage_to_structures_total_amount `integer`: damage_to_structures_total_amount integer
      * damage_to_structures_total_num_shots `integer`: damage_to_structures_total_num_shots integer
      * deaths_high_sec `integer`: deaths_high_sec integer
      * deaths_low_sec `integer`: deaths_low_sec integer
      * deaths_null_sec `integer`: deaths_null_sec integer
      * deaths_pod_high_sec `integer`: deaths_pod_high_sec integer
      * deaths_pod_low_sec `integer`: deaths_pod_low_sec integer
      * deaths_pod_null_sec `integer`: deaths_pod_null_sec integer
      * deaths_pod_wormhole `integer`: deaths_pod_wormhole integer
      * deaths_wormhole `integer`: deaths_wormhole integer
      * drone_engage `integer`: drone_engage integer
      * dscans `integer`: dscans integer
      * duel_requested `integer`: duel_requested integer
      * engagement_register `integer`: engagement_register integer
      * kills_assists `integer`: kills_assists integer
      * kills_high_sec `integer`: kills_high_sec integer
      * kills_low_sec `integer`: kills_low_sec integer
      * kills_null_sec `integer`: kills_null_sec integer
      * kills_pod_high_sec `integer`: kills_pod_high_sec integer
      * kills_pod_low_sec `integer`: kills_pod_low_sec integer
      * kills_pod_null_sec `integer`: kills_pod_null_sec integer
      * kills_pod_wormhole `integer`: kills_pod_wormhole integer
      * kills_wormhole `integer`: kills_wormhole integer
      * npc_flag_set `integer`: npc_flag_set integer
      * probe_scans `integer`: probe_scans integer
      * pvp_flag_set `integer`: pvp_flag_set integer
      * repair_armor_by_remote_amount `integer`: repair_armor_by_remote_amount integer
      * repair_armor_remote_amount `integer`: repair_armor_remote_amount integer
      * repair_armor_self_amount `integer`: repair_armor_self_amount integer
      * repair_capacitor_by_remote_amount `integer`: repair_capacitor_by_remote_amount integer
      * repair_capacitor_remote_amount `integer`: repair_capacitor_remote_amount integer
      * repair_capacitor_self_amount `integer`: repair_capacitor_self_amount integer
      * repair_hull_by_remote_amount `integer`: repair_hull_by_remote_amount integer
      * repair_hull_remote_amount `integer`: repair_hull_remote_amount integer
      * repair_hull_self_amount `integer`: repair_hull_self_amount integer
      * repair_shield_by_remote_amount `integer`: repair_shield_by_remote_amount integer
      * repair_shield_remote_amount `integer`: repair_shield_remote_amount integer
      * repair_shield_self_amount `integer`: repair_shield_self_amount integer
      * self_destructs `integer`: self_destructs integer
      * warp_scramble_pc `integer`: warp_scramble_pc integer
      * warp_scrambledby_npc `integer`: warp_scrambledby_npc integer
      * warp_scrambledby_pc `integer`: warp_scrambledby_pc integer
      * weapon_flag_set `integer`: weapon_flag_set integer
      * webifiedby_npc `integer`: webifiedby_npc integer
      * webifiedby_pc `integer`: webifiedby_pc integer
      * webifying_pc `integer`: webifying_pc integer
    * industry `object`: industry object
      * hacking_successes `integer`: hacking_successes integer
      * jobs_cancelled `integer`: jobs_cancelled integer
      * jobs_completed_copy_blueprint `integer`: jobs_completed_copy_blueprint integer
      * jobs_completed_invention `integer`: jobs_completed_invention integer
      * jobs_completed_manufacture `integer`: jobs_completed_manufacture integer
      * jobs_completed_manufacture_asteroid `integer`: jobs_completed_manufacture_asteroid integer
      * jobs_completed_manufacture_asteroid_quantity `integer`: jobs_completed_manufacture_asteroid_quantity integer
      * jobs_completed_manufacture_charge `integer`: jobs_completed_manufacture_charge integer
      * jobs_completed_manufacture_charge_quantity `integer`: jobs_completed_manufacture_charge_quantity integer
      * jobs_completed_manufacture_commodity `integer`: jobs_completed_manufacture_commodity integer
      * jobs_completed_manufacture_commodity_quantity `integer`: jobs_completed_manufacture_commodity_quantity integer
      * jobs_completed_manufacture_deployable `integer`: jobs_completed_manufacture_deployable integer
      * jobs_completed_manufacture_deployable_quantity `integer`: jobs_completed_manufacture_deployable_quantity integer
      * jobs_completed_manufacture_drone `integer`: jobs_completed_manufacture_drone integer
      * jobs_completed_manufacture_drone_quantity `integer`: jobs_completed_manufacture_drone_quantity integer
      * jobs_completed_manufacture_implant `integer`: jobs_completed_manufacture_implant integer
      * jobs_completed_manufacture_implant_quantity `integer`: jobs_completed_manufacture_implant_quantity integer
      * jobs_completed_manufacture_module `integer`: jobs_completed_manufacture_module integer
      * jobs_completed_manufacture_module_quantity `integer`: jobs_completed_manufacture_module_quantity integer
      * jobs_completed_manufacture_other `integer`: jobs_completed_manufacture_other integer
      * jobs_completed_manufacture_other_quantity `integer`: jobs_completed_manufacture_other_quantity integer
      * jobs_completed_manufacture_ship `integer`: jobs_completed_manufacture_ship integer
      * jobs_completed_manufacture_ship_quantity `integer`: jobs_completed_manufacture_ship_quantity integer
      * jobs_completed_manufacture_structure `integer`: jobs_completed_manufacture_structure integer
      * jobs_completed_manufacture_structure_quantity `integer`: jobs_completed_manufacture_structure_quantity integer
      * jobs_completed_manufacture_subsystem `integer`: jobs_completed_manufacture_subsystem integer
      * jobs_completed_manufacture_subsystem_quantity `integer`: jobs_completed_manufacture_subsystem_quantity integer
      * jobs_completed_material_productivity `integer`: jobs_completed_material_productivity integer
      * jobs_completed_time_productivity `integer`: jobs_completed_time_productivity integer
      * jobs_started_copy_blueprint `integer`: jobs_started_copy_blueprint integer
      * jobs_started_invention `integer`: jobs_started_invention integer
      * jobs_started_manufacture `integer`: jobs_started_manufacture integer
      * jobs_started_material_productivity `integer`: jobs_started_material_productivity integer
      * jobs_started_time_productivity `integer`: jobs_started_time_productivity integer
      * reprocess_item `integer`: reprocess_item integer
      * reprocess_item_quantity `integer`: reprocess_item_quantity integer
    * inventory `object`: inventory object
      * abandon_loot_quantity `integer`: abandon_loot_quantity integer
      * trash_item_quantity `integer`: trash_item_quantity integer
    * isk `object`: isk object
      * in `integer`: in integer
      * out `integer`: out integer
    * market `object`: market object
      * accept_contracts_courier `integer`: accept_contracts_courier integer
      * accept_contracts_item_exchange `integer`: accept_contracts_item_exchange integer
      * buy_orders_placed `integer`: buy_orders_placed integer
      * cancel_market_order `integer`: cancel_market_order integer
      * create_contracts_auction `integer`: create_contracts_auction integer
      * create_contracts_courier `integer`: create_contracts_courier integer
      * create_contracts_item_exchange `integer`: create_contracts_item_exchange integer
      * deliver_courier_contract `integer`: deliver_courier_contract integer
      * isk_gained `integer`: isk_gained integer
      * isk_spent `integer`: isk_spent integer
      * modify_market_order `integer`: modify_market_order integer
      * search_contracts `integer`: search_contracts integer
      * sell_orders_placed `integer`: sell_orders_placed integer
    * mining `object`: mining object
      * drone_mine `integer`: drone_mine integer
      * ore_arkonor `integer`: ore_arkonor integer
      * ore_bistot `integer`: ore_bistot integer
      * ore_crokite `integer`: ore_crokite integer
      * ore_dark_ochre `integer`: ore_dark_ochre integer
      * ore_gneiss `integer`: ore_gneiss integer
      * ore_harvestable_cloud `integer`: ore_harvestable_cloud integer
      * ore_hedbergite `integer`: ore_hedbergite integer
      * ore_hemorphite `integer`: ore_hemorphite integer
      * ore_ice `integer`: ore_ice integer
      * ore_jaspet `integer`: ore_jaspet integer
      * ore_kernite `integer`: ore_kernite integer
      * ore_mercoxit `integer`: ore_mercoxit integer
      * ore_omber `integer`: ore_omber integer
      * ore_plagioclase `integer`: ore_plagioclase integer
      * ore_pyroxeres `integer`: ore_pyroxeres integer
      * ore_scordite `integer`: ore_scordite integer
      * ore_spodumain `integer`: ore_spodumain integer
      * ore_veldspar `integer`: ore_veldspar integer
    * module `object`: module object
      * activations_armor_hardener `integer`: activations_armor_hardener integer
      * activations_armor_repair_unit `integer`: activations_armor_repair_unit integer
      * activations_armor_resistance_shift_hardener `integer`: activations_armor_resistance_shift_hardener integer
      * activations_automated_targeting_system `integer`: activations_automated_targeting_system integer
      * activations_bastion `integer`: activations_bastion integer
      * activations_bomb_launcher `integer`: activations_bomb_launcher integer
      * activations_capacitor_booster `integer`: activations_capacitor_booster integer
      * activations_cargo_scanner `integer`: activations_cargo_scanner integer
      * activations_cloaking_device `integer`: activations_cloaking_device integer
      * activations_clone_vat_bay `integer`: activations_clone_vat_bay integer
      * activations_cynosural_field `integer`: activations_cynosural_field integer
      * activations_damage_control `integer`: activations_damage_control integer
      * activations_data_miners `integer`: activations_data_miners integer
      * activations_drone_control_unit `integer`: activations_drone_control_unit integer
      * activations_drone_tracking_modules `integer`: activations_drone_tracking_modules integer
      * activations_eccm `integer`: activations_eccm integer
      * activations_ecm `integer`: activations_ecm integer
      * activations_ecm_burst `integer`: activations_ecm_burst integer
      * activations_energy_destabilizer `integer`: activations_energy_destabilizer integer
      * activations_energy_vampire `integer`: activations_energy_vampire integer
      * activations_energy_weapon `integer`: activations_energy_weapon integer
      * activations_festival_launcher `integer`: activations_festival_launcher integer
      * activations_frequency_mining_laser `integer`: activations_frequency_mining_laser integer
      * activations_fueled_armor_repairer `integer`: activations_fueled_armor_repairer integer
      * activations_fueled_shield_booster `integer`: activations_fueled_shield_booster integer
      * activations_gang_coordinator `integer`: activations_gang_coordinator integer
      * activations_gas_cloud_harvester `integer`: activations_gas_cloud_harvester integer
      * activations_hull_repair_unit `integer`: activations_hull_repair_unit integer
      * activations_hybrid_weapon `integer`: activations_hybrid_weapon integer
      * activations_industrial_core `integer`: activations_industrial_core integer
      * activations_interdiction_sphere_launcher `integer`: activations_interdiction_sphere_launcher integer
      * activations_micro_jump_drive `integer`: activations_micro_jump_drive integer
      * activations_mining_laser `integer`: activations_mining_laser integer
      * activations_missile_launcher `integer`: activations_missile_launcher integer
      * activations_passive_targeting_system `integer`: activations_passive_targeting_system integer
      * activations_probe_launcher `integer`: activations_probe_launcher integer
      * activations_projected_eccm `integer`: activations_projected_eccm integer
      * activations_projectile_weapon `integer`: activations_projectile_weapon integer
      * activations_propulsion_module `integer`: activations_propulsion_module integer
      * activations_remote_armor_repairer `integer`: activations_remote_armor_repairer integer
      * activations_remote_capacitor_transmitter `integer`: activations_remote_capacitor_transmitter integer
      * activations_remote_ecm_burst `integer`: activations_remote_ecm_burst integer
      * activations_remote_hull_repairer `integer`: activations_remote_hull_repairer integer
      * activations_remote_sensor_booster `integer`: activations_remote_sensor_booster integer
      * activations_remote_sensor_damper `integer`: activations_remote_sensor_damper integer
      * activations_remote_shield_booster `integer`: activations_remote_shield_booster integer
      * activations_remote_tracking_computer `integer`: activations_remote_tracking_computer integer
      * activations_salvager `integer`: activations_salvager integer
      * activations_sensor_booster `integer`: activations_sensor_booster integer
      * activations_shield_booster `integer`: activations_shield_booster integer
      * activations_shield_hardener `integer`: activations_shield_hardener integer
      * activations_ship_scanner `integer`: activations_ship_scanner integer
      * activations_siege `integer`: activations_siege integer
      * activations_smart_bomb `integer`: activations_smart_bomb integer
      * activations_stasis_web `integer`: activations_stasis_web integer
      * activations_strip_miner `integer`: activations_strip_miner integer
      * activations_super_weapon `integer`: activations_super_weapon integer
      * activations_survey_scanner `integer`: activations_survey_scanner integer
      * activations_target_breaker `integer`: activations_target_breaker integer
      * activations_target_painter `integer`: activations_target_painter integer
      * activations_tracking_computer `integer`: activations_tracking_computer integer
      * activations_tracking_disruptor `integer`: activations_tracking_disruptor integer
      * activations_tractor_beam `integer`: activations_tractor_beam integer
      * activations_triage `integer`: activations_triage integer
      * activations_warp_disrupt_field_generator `integer`: activations_warp_disrupt_field_generator integer
      * activations_warp_scrambler `integer`: activations_warp_scrambler integer
      * link_weapons `integer`: link_weapons integer
      * overload `integer`: overload integer
      * repairs `integer`: repairs integer
    * orbital `object`: orbital object
      * strike_characters_killed `integer`: strike_characters_killed integer
      * strike_damage_to_players_armor_amount `integer`: strike_damage_to_players_armor_amount integer
      * strike_damage_to_players_shield_amount `integer`: strike_damage_to_players_shield_amount integer
    * pve `object`: pve object
      * dungeons_completed_agent `integer`: dungeons_completed_agent integer
      * dungeons_completed_distribution `integer`: dungeons_completed_distribution integer
      * missions_succeeded `integer`: missions_succeeded integer
      * missions_succeeded_epic_arc `integer`: missions_succeeded_epic_arc integer
    * social `object`: social object
      * add_contact_bad `integer`: add_contact_bad integer
      * add_contact_good `integer`: add_contact_good integer
      * add_contact_high `integer`: add_contact_high integer
      * add_contact_horrible `integer`: add_contact_horrible integer
      * add_contact_neutral `integer`: add_contact_neutral integer
      * add_note `integer`: add_note integer
      * added_as_contact_bad `integer`: added_as_contact_bad integer
      * added_as_contact_good `integer`: added_as_contact_good integer
      * added_as_contact_high `integer`: added_as_contact_high integer
      * added_as_contact_horrible `integer`: added_as_contact_horrible integer
      * added_as_contact_neutral `integer`: added_as_contact_neutral integer
      * calendar_event_created `integer`: calendar_event_created integer
      * chat_messages_alliance `integer`: chat_messages_alliance integer
      * chat_messages_constellation `integer`: chat_messages_constellation integer
      * chat_messages_corporation `integer`: chat_messages_corporation integer
      * chat_messages_fleet `integer`: chat_messages_fleet integer
      * chat_messages_region `integer`: chat_messages_region integer
      * chat_messages_solarsystem `integer`: chat_messages_solarsystem integer
      * chat_messages_warfaction `integer`: chat_messages_warfaction integer
      * chat_total_message_length `integer`: chat_total_message_length integer
      * direct_trades `integer`: direct_trades integer
      * fleet_broadcasts `integer`: fleet_broadcasts integer
      * fleet_joins `integer`: fleet_joins integer
      * mails_received `integer`: mails_received integer
      * mails_sent `integer`: mails_sent integer
    * travel `object`: travel object
      * acceleration_gate_activations `integer`: acceleration_gate_activations integer
      * align_to `integer`: align_to integer
      * distance_warped_high_sec `integer`: distance_warped_high_sec integer
      * distance_warped_low_sec `integer`: distance_warped_low_sec integer
      * distance_warped_null_sec `integer`: distance_warped_null_sec integer
      * distance_warped_wormhole `integer`: distance_warped_wormhole integer
      * docks_high_sec `integer`: docks_high_sec integer
      * docks_low_sec `integer`: docks_low_sec integer
      * docks_null_sec `integer`: docks_null_sec integer
      * jumps_stargate_high_sec `integer`: jumps_stargate_high_sec integer
      * jumps_stargate_low_sec `integer`: jumps_stargate_low_sec integer
      * jumps_stargate_null_sec `integer`: jumps_stargate_null_sec integer
      * jumps_wormhole `integer`: jumps_wormhole integer
      * warps_high_sec `integer`: warps_high_sec integer
      * warps_low_sec `integer`: warps_low_sec integer
      * warps_null_sec `integer`: warps_null_sec integer
      * warps_to_bookmark `integer`: warps_to_bookmark integer
      * warps_to_celestial `integer`: warps_to_celestial integer
      * warps_to_fleet_member `integer`: warps_to_fleet_member integer
      * warps_to_scan_result `integer`: warps_to_scan_result integer
      * warps_wormhole `integer`: warps_wormhole integer
    * year **required** `integer`: Gregorian year for this set of aggregates

### get_characters_character_id_titles
Returns a character's titles

---
Alternate route: `/dev/characters/{character_id}/titles/`

Alternate route: `/legacy/characters/{character_id}/titles/`

Alternate route: `/v1/characters/{character_id}/titles/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_characters_character_id_titles({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * name `string`: name string
    * title_id `integer`: title_id integer

### get_characters_character_id_wallet
Returns a character's wallet balance

---
Alternate route: `/dev/characters/{character_id}/wallet/`

Alternate route: `/legacy/characters/{character_id}/wallet/`

Alternate route: `/v1/characters/{character_id}/wallet/`

---
This route is cached for up to 120 seconds


```js
evetech.get_characters_character_id_wallet({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `number`: Wallet balance

### get_characters_character_id_wallet_journal
Retrieve the given character's wallet journal going 30 days back

---
Alternate route: `/dev/characters/{character_id}/wallet/journal/`

Alternate route: `/v4/characters/{character_id}/wallet/journal/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_characters_character_id_wallet_journal({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: Wallet journal entries
  * items `object`: 200 ok object
    * amount `number`: The amount of ISK given or taken from the wallet as a result of the given transaction. Positive when ISK is deposited into the wallet and negative when ISK is withdrawn
    * balance `number`: Wallet balance after transaction occurred
    * context_id `integer`: An ID that gives extra context to the particular transaction. Because of legacy reasons the context is completely different per ref_type and means different things. It is also possible to not have a context_id
    * context_id_type `string` (values: structure_id, station_id, market_transaction_id, character_id, corporation_id, alliance_id, eve_system, industry_job_id, contract_id, planet_id, system_id, type_id): The type of the given context_id if present
    * date **required** `string`: Date and time of transaction
    * description **required** `string`: The reason for the transaction, mirrors what is seen in the client
    * first_party_id `integer`: The id of the first party involved in the transaction. This attribute has no consistency and is different or non existant for particular ref_types. The description attribute will help make sense of what this attribute means. For more info about the given ID it can be dropped into the /universe/names/ ESI route to determine its type and name
    * id **required** `integer`: Unique journal reference ID
    * reason `string`: The user stated reason for the transaction. Only applies to some ref_types
    * ref_type **required** `string` (values: acceleration_gate_fee, advertisement_listing_fee, agent_donation, agent_location_services, agent_miscellaneous, agent_mission_collateral_paid, agent_mission_collateral_refunded, agent_mission_reward, agent_mission_reward_corporation_tax, agent_mission_time_bonus_reward, agent_mission_time_bonus_reward_corporation_tax, agent_security_services, agent_services_rendered, agents_preward, alliance_maintainance_fee, alliance_registration_fee, asset_safety_recovery_tax, bounty, bounty_prize, bounty_prize_corporation_tax, bounty_prizes, bounty_reimbursement, bounty_surcharge, brokers_fee, clone_activation, clone_transfer, contraband_fine, contract_auction_bid, contract_auction_bid_corp, contract_auction_bid_refund, contract_auction_sold, contract_brokers_fee, contract_brokers_fee_corp, contract_collateral, contract_collateral_deposited_corp, contract_collateral_payout, contract_collateral_refund, contract_deposit, contract_deposit_corp, contract_deposit_refund, contract_deposit_sales_tax, contract_price, contract_price_payment_corp, contract_reversal, contract_reward, contract_reward_deposited, contract_reward_deposited_corp, contract_reward_refund, contract_sales_tax, copying, corporate_reward_payout, corporate_reward_tax, corporation_account_withdrawal, corporation_bulk_payment, corporation_dividend_payment, corporation_liquidation, corporation_logo_change_cost, corporation_payment, corporation_registration_fee, courier_mission_escrow, cspa, cspaofflinerefund, datacore_fee, dna_modification_fee, docking_fee, duel_wager_escrow, duel_wager_payment, duel_wager_refund, factory_slot_rental_fee, gm_cash_transfer, industry_job_tax, infrastructure_hub_maintenance, inheritance, insurance, jump_clone_activation_fee, jump_clone_installation_fee, kill_right_fee, lp_store, manufacturing, market_escrow, market_fine_paid, market_transaction, medal_creation, medal_issued, mission_completion, mission_cost, mission_expiration, mission_reward, office_rental_fee, operation_bonus, opportunity_reward, planetary_construction, planetary_export_tax, planetary_import_tax, player_donation, player_trading, project_discovery_reward, project_discovery_tax, reaction, release_of_impounded_property, repair_bill, reprocessing_tax, researching_material_productivity, researching_technology, researching_time_productivity, resource_wars_reward, reverse_engineering, security_processing_fee, shares, sovereignity_bill, store_purchase, store_purchase_refund, transaction_tax, upkeep_adjustment_fee, war_ally_contract, war_fee, war_fee_surrender): The transaction type for the given transaction. Different transaction types will populate different attributes. Note: If you have an existing XML API application that is using ref_types, you will need to know which string ESI ref_type maps to which integer. You can look at the following file to see string->int mappings: https://github.com/ccpgames/eve-glue/blob/master/eve_glue/wallet_journal_ref.py
    * second_party_id `integer`: The id of the second party involved in the transaction. This attribute has no consistency and is different or non existant for particular ref_types. The description attribute will help make sense of what this attribute means. For more info about the given ID it can be dropped into the /universe/names/ ESI route to determine its type and name
    * tax `number`: Tax amount received. Only applies to tax related transactions
    * tax_receiver_id `integer`: The corporation ID receiving any tax paid. Only applies to tax related transactions

### get_characters_character_id_wallet_transactions
Get wallet transactions of a character

---
Alternate route: `/dev/characters/{character_id}/wallet/transactions/`

Alternate route: `/legacy/characters/{character_id}/wallet/transactions/`

Alternate route: `/v1/characters/{character_id}/wallet/transactions/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_characters_character_id_wallet_transactions({
  "character_id": 0
}, context)
```

#### Input
* input `object`
  * character_id **required** `integer`: An EVE character ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * from_id `integer`: Only show transactions happened before the one referenced by this id
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: Wallet transactions
  * items `object`: wallet transaction
    * client_id **required** `integer`: client_id integer
    * date **required** `string`: Date and time of transaction
    * is_buy **required** `boolean`: is_buy boolean
    * is_personal **required** `boolean`: is_personal boolean
    * journal_ref_id **required** `integer`: journal_ref_id integer
    * location_id **required** `integer`: location_id integer
    * quantity **required** `integer`: quantity integer
    * transaction_id **required** `integer`: Unique transaction ID
    * type_id **required** `integer`: type_id integer
    * unit_price **required** `number`: Amount paid per unit

### get_corporation_corporation_id_mining_extractions
Extraction timers for all moon chunks being extracted by refineries belonging to a corporation.


---
Alternate route: `/dev/corporation/{corporation_id}/mining/extractions/`

Alternate route: `/legacy/corporation/{corporation_id}/mining/extractions/`

Alternate route: `/v1/corporation/{corporation_id}/mining/extractions/`

---
This route is cached for up to 1800 seconds

---
Requires one of the following EVE corporation role(s): Structure_manager



```js
evetech.get_corporation_corporation_id_mining_extractions({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * chunk_arrival_time **required** `string`: The time at which the chunk being extracted will arrive and can be fractured by the moon mining drill.
    * extraction_start_time **required** `string`: The time at which the current extraction was initiated.
    * moon_id **required** `integer`: moon_id integer
    * natural_decay_time **required** `string`: The time at which the chunk being extracted will naturally fracture if it is not first fractured by the moon mining drill.
    * structure_id **required** `integer`: structure_id integer

### get_corporation_corporation_id_mining_observers
Paginated list of all entities capable of observing and recording mining for a corporation


---
Alternate route: `/dev/corporation/{corporation_id}/mining/observers/`

Alternate route: `/legacy/corporation/{corporation_id}/mining/observers/`

Alternate route: `/v1/corporation/{corporation_id}/mining/observers/`

---
This route is cached for up to 3600 seconds

---
Requires one of the following EVE corporation role(s): Accountant



```js
evetech.get_corporation_corporation_id_mining_observers({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * last_updated **required** `string`: last_updated string
    * observer_id **required** `integer`: The entity that was observing the asteroid field when it was mined.
    * observer_type **required** `string` (values: structure): The category of the observing entity

### get_corporation_corporation_id_mining_observers_observer_id
Paginated record of all mining seen by an observer


---
Alternate route: `/dev/corporation/{corporation_id}/mining/observers/{observer_id}/`

Alternate route: `/legacy/corporation/{corporation_id}/mining/observers/{observer_id}/`

Alternate route: `/v1/corporation/{corporation_id}/mining/observers/{observer_id}/`

---
This route is cached for up to 3600 seconds

---
Requires one of the following EVE corporation role(s): Accountant



```js
evetech.get_corporation_corporation_id_mining_observers_observer_id({
  "corporation_id": 0,
  "observer_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * observer_id **required** `integer`: A mining observer id
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * character_id **required** `integer`: The character that did the mining
    * last_updated **required** `string`: last_updated string
    * quantity **required** `integer`: quantity integer
    * recorded_corporation_id **required** `integer`: The corporation id of the character at the time data was recorded.
    * type_id **required** `integer`: type_id integer

### get_corporations_names
Resolve a set of corporation IDs to corporation names

---
Alternate route: `/dev/corporations/names/`

Alternate route: `/v2/corporations/names/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_corporations_names({
  "corporation_ids": []
}, context)
```

#### Input
* input `object`
  * corporation_ids **required** `array`: A comma separated list of corporation IDs
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * corporation_id **required** `integer`: corporation_id integer
    * corporation_name **required** `string`: corporation_name string

### get_corporations_npccorps
Get a list of npc corporations

---
Alternate route: `/dev/corporations/npccorps/`

Alternate route: `/legacy/corporations/npccorps/`

Alternate route: `/v1/corporations/npccorps/`

---
This route expires daily at 11:05


```js
evetech.get_corporations_npccorps({}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: 200 ok array
  * items `integer`: 200 ok integer

### get_corporations_corporation_id
Public information about a corporation

---
Alternate route: `/dev/corporations/{corporation_id}/`

Alternate route: `/v4/corporations/{corporation_id}/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_corporations_corporation_id({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `object`: 200 ok object
  * alliance_id `integer`: ID of the alliance that corporation is a member of, if any
  * ceo_id **required** `integer`: ceo_id integer
  * creator_id **required** `integer`: creator_id integer
  * date_founded `string`: date_founded string
  * description `string`: description string
  * faction_id `integer`: faction_id integer
  * home_station_id `integer`: home_station_id integer
  * member_count **required** `integer`: member_count integer
  * name **required** `string`: the full name of the corporation
  * shares `integer`: shares integer
  * tax_rate **required** `number`: tax_rate number
  * ticker **required** `string`: the short name of the corporation
  * url `string`: url string

### get_corporations_corporation_id_alliancehistory
Get a list of all the alliances a corporation has been a member of

---
Alternate route: `/dev/corporations/{corporation_id}/alliancehistory/`

Alternate route: `/v2/corporations/{corporation_id}/alliancehistory/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_corporations_corporation_id_alliancehistory({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * alliance_id `integer`: alliance_id integer
    * is_deleted `boolean`: True if the alliance has been closed
    * record_id **required** `integer`: An incrementing ID that can be used to canonically establish order of records in cases where dates may be ambiguous
    * start_date **required** `string`: start_date string

### get_corporations_corporation_id_assets
Return a list of the corporation assets

---
Alternate route: `/dev/corporations/{corporation_id}/assets/`

Alternate route: `/v3/corporations/{corporation_id}/assets/`

---
This route is cached for up to 3600 seconds

---
Requires one of the following EVE corporation role(s): Director



```js
evetech.get_corporations_corporation_id_assets({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * is_singleton **required** `boolean`: is_singleton boolean
    * item_id **required** `integer`: item_id integer
    * location_flag **required** `string` (values: AssetSafety, AutoFit, Bonus, Booster, BoosterBay, Capsule, Cargo, CorpDeliveries, CorpSAG1, CorpSAG2, CorpSAG3, CorpSAG4, CorpSAG5, CorpSAG6, CorpSAG7, CrateLoot, Deliveries, DroneBay, DustBattle, DustDatabank, FighterBay, FighterTube0, FighterTube1, FighterTube2, FighterTube3, FighterTube4, FleetHangar, Hangar, HangarAll, HiSlot0, HiSlot1, HiSlot2, HiSlot3, HiSlot4, HiSlot5, HiSlot6, HiSlot7, HiddenModifiers, Implant, Impounded, JunkyardReprocessed, JunkyardTrashed, LoSlot0, LoSlot1, LoSlot2, LoSlot3, LoSlot4, LoSlot5, LoSlot6, LoSlot7, Locked, MedSlot0, MedSlot1, MedSlot2, MedSlot3, MedSlot4, MedSlot5, MedSlot6, MedSlot7, OfficeFolder, Pilot, PlanetSurface, QuafeBay, Reward, RigSlot0, RigSlot1, RigSlot2, RigSlot3, RigSlot4, RigSlot5, RigSlot6, RigSlot7, SecondaryStorage, ServiceSlot0, ServiceSlot1, ServiceSlot2, ServiceSlot3, ServiceSlot4, ServiceSlot5, ServiceSlot6, ServiceSlot7, ShipHangar, ShipOffline, Skill, SkillInTraining, SpecializedAmmoHold, SpecializedCommandCenterHold, SpecializedFuelBay, SpecializedGasHold, SpecializedIndustrialShipHold, SpecializedLargeShipHold, SpecializedMaterialBay, SpecializedMediumShipHold, SpecializedMineralHold, SpecializedOreHold, SpecializedPlanetaryCommoditiesHold, SpecializedSalvageHold, SpecializedShipHold, SpecializedSmallShipHold, StructureActive, StructureFuel, StructureInactive, StructureOffline, SubSystemBay, SubSystemSlot0, SubSystemSlot1, SubSystemSlot2, SubSystemSlot3, SubSystemSlot4, SubSystemSlot5, SubSystemSlot6, SubSystemSlot7, Unlocked, Wallet, Wardrobe): location_flag string
    * location_id **required** `integer`: location_id integer
    * location_type **required** `string` (values: station, solar_system, other): location_type string
    * quantity **required** `integer`: quantity integer
    * type_id **required** `integer`: type_id integer

### post_corporations_corporation_id_assets_locations
Return locations for a set of item ids, which you can get from corporation assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)

---
Alternate route: `/dev/corporations/{corporation_id}/assets/locations/`

Alternate route: `/v2/corporations/{corporation_id}/assets/locations/`


---
Requires one of the following EVE corporation role(s): Director



```js
evetech.post_corporations_corporation_id_assets_locations({
  "corporation_id": 0,
  "item_ids": []
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * item_ids **required** `array`: item_ids array
    * items `integer`: item_id integer
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * item_id **required** `integer`: item_id integer
    * position **required** `object`: position object
      * x **required** `number`: x number
      * y **required** `number`: y number
      * z **required** `number`: z number

### post_corporations_corporation_id_assets_names
Return names for a set of item ids, which you can get from corporation assets endpoint. Only valid for items that can customize names, like containers or ships.

---
Alternate route: `/dev/corporations/{corporation_id}/assets/names/`

Alternate route: `/legacy/corporations/{corporation_id}/assets/names/`

Alternate route: `/v1/corporations/{corporation_id}/assets/names/`


---
Requires one of the following EVE corporation role(s): Director



```js
evetech.post_corporations_corporation_id_assets_names({
  "corporation_id": 0,
  "item_ids": []
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * item_ids **required** `array`: item_ids array
    * items `integer`: item_id integer
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * item_id **required** `integer`: item_id integer
    * name **required** `string`: name string

### get_corporations_corporation_id_blueprints
Returns a list of blueprints the corporation owns

---
Alternate route: `/dev/corporations/{corporation_id}/blueprints/`

Alternate route: `/v2/corporations/{corporation_id}/blueprints/`

---
This route is cached for up to 3600 seconds

---
Requires one of the following EVE corporation role(s): Director



```js
evetech.get_corporations_corporation_id_blueprints({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * item_id **required** `integer`: Unique ID for this item.
    * location_flag **required** `string` (values: AssetSafety, AutoFit, Bonus, Booster, BoosterBay, Capsule, Cargo, CorpDeliveries, CorpSAG1, CorpSAG2, CorpSAG3, CorpSAG4, CorpSAG5, CorpSAG6, CorpSAG7, CrateLoot, Deliveries, DroneBay, DustBattle, DustDatabank, FighterBay, FighterTube0, FighterTube1, FighterTube2, FighterTube3, FighterTube4, FleetHangar, Hangar, HangarAll, HiSlot0, HiSlot1, HiSlot2, HiSlot3, HiSlot4, HiSlot5, HiSlot6, HiSlot7, HiddenModifiers, Implant, Impounded, JunkyardReprocessed, JunkyardTrashed, LoSlot0, LoSlot1, LoSlot2, LoSlot3, LoSlot4, LoSlot5, LoSlot6, LoSlot7, Locked, MedSlot0, MedSlot1, MedSlot2, MedSlot3, MedSlot4, MedSlot5, MedSlot6, MedSlot7, OfficeFolder, Pilot, PlanetSurface, QuafeBay, Reward, RigSlot0, RigSlot1, RigSlot2, RigSlot3, RigSlot4, RigSlot5, RigSlot6, RigSlot7, SecondaryStorage, ServiceSlot0, ServiceSlot1, ServiceSlot2, ServiceSlot3, ServiceSlot4, ServiceSlot5, ServiceSlot6, ServiceSlot7, ShipHangar, ShipOffline, Skill, SkillInTraining, SpecializedAmmoHold, SpecializedCommandCenterHold, SpecializedFuelBay, SpecializedGasHold, SpecializedIndustrialShipHold, SpecializedLargeShipHold, SpecializedMaterialBay, SpecializedMediumShipHold, SpecializedMineralHold, SpecializedOreHold, SpecializedPlanetaryCommoditiesHold, SpecializedSalvageHold, SpecializedShipHold, SpecializedSmallShipHold, StructureActive, StructureFuel, StructureInactive, StructureOffline, SubSystemBay, SubSystemSlot0, SubSystemSlot1, SubSystemSlot2, SubSystemSlot3, SubSystemSlot4, SubSystemSlot5, SubSystemSlot6, SubSystemSlot7, Unlocked, Wallet, Wardrobe): Type of the location_id
    * location_id **required** `integer`: References a solar system, station or item_id if this blueprint is located within a container.
    * material_efficiency **required** `integer`: Material Efficiency Level of the blueprint.
    * quantity **required** `integer`: A range of numbers with a minimum of -2 and no maximum value where -1 is an original and -2 is a copy. It can be a positive integer if it is a stack of blueprint originals fresh from the market (e.g. no activities performed on them yet).
    * runs **required** `integer`: Number of runs remaining if the blueprint is a copy, -1 if it is an original.
    * time_efficiency **required** `integer`: Time Efficiency Level of the blueprint.
    * type_id **required** `integer`: type_id integer

### get_corporations_corporation_id_bookmarks
A list of your corporation's bookmarks

---
Alternate route: `/dev/corporations/{corporation_id}/bookmarks/`

Alternate route: `/legacy/corporations/{corporation_id}/bookmarks/`

Alternate route: `/v1/corporations/{corporation_id}/bookmarks/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_corporations_corporation_id_bookmarks({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * bookmark_id **required** `integer`: bookmark_id integer
    * coordinates `object`: Optional object that is returned if a bookmark was made on a planet or a random location in space.
      * x **required** `number`: x number
      * y **required** `number`: y number
      * z **required** `number`: z number
    * created **required** `string`: created string
    * creator_id **required** `integer`: creator_id integer
    * folder_id `integer`: folder_id integer
    * item `object`: Optional object that is returned if a bookmark was made on a particular item.
      * item_id **required** `integer`: item_id integer
      * type_id **required** `integer`: type_id integer
    * label **required** `string`: label string
    * location_id **required** `integer`: location_id integer
    * notes **required** `string`: notes string

### get_corporations_corporation_id_bookmarks_folders
A list of your corporation's bookmark folders

---
Alternate route: `/dev/corporations/{corporation_id}/bookmarks/folders/`

Alternate route: `/legacy/corporations/{corporation_id}/bookmarks/folders/`

Alternate route: `/v1/corporations/{corporation_id}/bookmarks/folders/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_corporations_corporation_id_bookmarks_folders({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * creator_id `integer`: creator_id integer
    * folder_id **required** `integer`: folder_id integer
    * name **required** `string`: name string

### get_corporations_corporation_id_contacts
Return contacts of a corporation

---
Alternate route: `/legacy/corporations/{corporation_id}/contacts/`

Alternate route: `/v1/corporations/{corporation_id}/contacts/`

---
This route is cached for up to 300 seconds

---
Warning: This route has an upgrade available.

---
[Diff of the upcoming changes](https://esi.evetech.net/diff/latest/dev/#GET-/corporations/{corporation_id}/contacts/)


```js
evetech.get_corporations_corporation_id_contacts({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * contact_id **required** `integer`: contact_id integer
    * contact_type **required** `string` (values: character, corporation, alliance, faction): contact_type string
    * is_watched `boolean`: Whether this contact is being watched
    * label_id `integer`: Custom label of the contact
    * standing **required** `number`: Standing of the contact

### get_corporations_corporation_id_contacts_labels
Return custom labels for a corporation's contacts

---
Alternate route: `/dev/corporations/{corporation_id}/contacts/labels/`

Alternate route: `/legacy/corporations/{corporation_id}/contacts/labels/`

Alternate route: `/v1/corporations/{corporation_id}/contacts/labels/`

---
This route is cached for up to 300 seconds


```js
evetech.get_corporations_corporation_id_contacts_labels({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * label_id **required** `integer`: label_id integer
    * label_name **required** `string`: label_name string

### get_corporations_corporation_id_containers_logs
Returns logs recorded in the past seven days from all audit log secure containers (ALSC) owned by a given corporation

---
Alternate route: `/dev/corporations/{corporation_id}/containers/logs/`

Alternate route: `/v2/corporations/{corporation_id}/containers/logs/`

---
This route is cached for up to 600 seconds

---
Requires one of the following EVE corporation role(s): Director



```js
evetech.get_corporations_corporation_id_containers_logs({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * action **required** `string` (values: add, assemble, configure, enter_password, lock, move, repackage, set_name, set_password, unlock): action string
    * character_id **required** `integer`: ID of the character who performed the action.
    * container_id **required** `integer`: ID of the container
    * container_type_id **required** `integer`: Type ID of the container
    * location_flag **required** `string` (values: AssetSafety, AutoFit, Bonus, Booster, BoosterBay, Capsule, Cargo, CorpDeliveries, CorpSAG1, CorpSAG2, CorpSAG3, CorpSAG4, CorpSAG5, CorpSAG6, CorpSAG7, CrateLoot, Deliveries, DroneBay, DustBattle, DustDatabank, FighterBay, FighterTube0, FighterTube1, FighterTube2, FighterTube3, FighterTube4, FleetHangar, Hangar, HangarAll, HiSlot0, HiSlot1, HiSlot2, HiSlot3, HiSlot4, HiSlot5, HiSlot6, HiSlot7, HiddenModifiers, Implant, Impounded, JunkyardReprocessed, JunkyardTrashed, LoSlot0, LoSlot1, LoSlot2, LoSlot3, LoSlot4, LoSlot5, LoSlot6, LoSlot7, Locked, MedSlot0, MedSlot1, MedSlot2, MedSlot3, MedSlot4, MedSlot5, MedSlot6, MedSlot7, OfficeFolder, Pilot, PlanetSurface, QuafeBay, Reward, RigSlot0, RigSlot1, RigSlot2, RigSlot3, RigSlot4, RigSlot5, RigSlot6, RigSlot7, SecondaryStorage, ServiceSlot0, ServiceSlot1, ServiceSlot2, ServiceSlot3, ServiceSlot4, ServiceSlot5, ServiceSlot6, ServiceSlot7, ShipHangar, ShipOffline, Skill, SkillInTraining, SpecializedAmmoHold, SpecializedCommandCenterHold, SpecializedFuelBay, SpecializedGasHold, SpecializedIndustrialShipHold, SpecializedLargeShipHold, SpecializedMaterialBay, SpecializedMediumShipHold, SpecializedMineralHold, SpecializedOreHold, SpecializedPlanetaryCommoditiesHold, SpecializedSalvageHold, SpecializedShipHold, SpecializedSmallShipHold, StructureActive, StructureFuel, StructureInactive, StructureOffline, SubSystemBay, SubSystemSlot0, SubSystemSlot1, SubSystemSlot2, SubSystemSlot3, SubSystemSlot4, SubSystemSlot5, SubSystemSlot6, SubSystemSlot7, Unlocked, Wallet, Wardrobe): location_flag string
    * location_id **required** `integer`: location_id integer
    * logged_at **required** `string`: Timestamp when this log was created
    * new_config_bitmask `integer`: new_config_bitmask integer
    * old_config_bitmask `integer`: old_config_bitmask integer
    * password_type `string` (values: config, general): Type of password set if action is of type SetPassword or EnterPassword
    * quantity `integer`: Quantity of the item being acted upon
    * type_id `integer`: Type ID of the item being acted upon

### get_corporations_corporation_id_contracts
Returns contracts available to a corporation, only if the corporation is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is "in_progress".

---
Alternate route: `/dev/corporations/{corporation_id}/contracts/`

Alternate route: `/legacy/corporations/{corporation_id}/contracts/`

Alternate route: `/v1/corporations/{corporation_id}/contracts/`

---
This route is cached for up to 300 seconds


```js
evetech.get_corporations_corporation_id_contracts({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * acceptor_id **required** `integer`: Who will accept the contract
    * assignee_id **required** `integer`: ID to whom the contract is assigned, can be corporation or character ID
    * availability **required** `string` (values: public, personal, corporation, alliance): To whom the contract is available
    * buyout `number`: Buyout price (for Auctions only)
    * collateral `number`: Collateral price (for Couriers only)
    * contract_id **required** `integer`: contract_id integer
    * date_accepted `string`: Date of confirmation of contract
    * date_completed `string`: Date of completed of contract
    * date_expired **required** `string`: Expiration date of the contract
    * date_issued **required** `string`: Сreation date of the contract
    * days_to_complete `integer`: Number of days to perform the contract
    * end_location_id `integer`: End location ID (for Couriers contract)
    * for_corporation **required** `boolean`: true if the contract was issued on behalf of the issuer's corporation
    * issuer_corporation_id **required** `integer`: Character's corporation ID for the issuer
    * issuer_id **required** `integer`: Character ID for the issuer
    * price `number`: Price of contract (for ItemsExchange and Auctions)
    * reward `number`: Remuneration for contract (for Couriers only)
    * start_location_id `integer`: Start location ID (for Couriers contract)
    * status **required** `string` (values: outstanding, in_progress, finished_issuer, finished_contractor, finished, cancelled, rejected, failed, deleted, reversed): Status of the the contract
    * title `string`: Title of the contract
    * type **required** `string` (values: unknown, item_exchange, auction, courier, loan): Type of the contract
    * volume `number`: Volume of items in the contract

### get_corporations_corporation_id_contracts_contract_id_bids
Lists bids on a particular auction contract

---
Alternate route: `/dev/corporations/{corporation_id}/contracts/{contract_id}/bids/`

Alternate route: `/legacy/corporations/{corporation_id}/contracts/{contract_id}/bids/`

Alternate route: `/v1/corporations/{corporation_id}/contracts/{contract_id}/bids/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_corporations_corporation_id_contracts_contract_id_bids({
  "contract_id": 0,
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * contract_id **required** `integer`: ID of a contract
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * amount **required** `number`: The amount bid, in ISK
    * bid_id **required** `integer`: Unique ID for the bid
    * bidder_id **required** `integer`: Character ID of the bidder
    * date_bid **required** `string`: Datetime when the bid was placed

### get_corporations_corporation_id_contracts_contract_id_items
Lists items of a particular contract

---
Alternate route: `/dev/corporations/{corporation_id}/contracts/{contract_id}/items/`

Alternate route: `/legacy/corporations/{corporation_id}/contracts/{contract_id}/items/`

Alternate route: `/v1/corporations/{corporation_id}/contracts/{contract_id}/items/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_corporations_corporation_id_contracts_contract_id_items({
  "contract_id": 0,
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * contract_id **required** `integer`: ID of a contract
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * is_included **required** `boolean`: true if the contract issuer has submitted this item with the contract, false if the isser is asking for this item in the contract.
    * is_singleton **required** `boolean`: is_singleton boolean
    * quantity **required** `integer`: Number of items in the stack
    * raw_quantity `integer`: -1 indicates that the item is a singleton (non-stackable). If the item happens to be a Blueprint, -1 is an Original and -2 is a Blueprint Copy
    * record_id **required** `integer`: Unique ID for the item
    * type_id **required** `integer`: Type ID for item

### get_corporations_corporation_id_customs_offices
List customs offices owned by a corporation

---
Alternate route: `/dev/corporations/{corporation_id}/customs_offices/`

Alternate route: `/legacy/corporations/{corporation_id}/customs_offices/`

Alternate route: `/v1/corporations/{corporation_id}/customs_offices/`

---
This route is cached for up to 3600 seconds

---
Requires one of the following EVE corporation role(s): Director



```js
evetech.get_corporations_corporation_id_customs_offices({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * alliance_tax_rate `number`: Only present if alliance access is allowed
    * allow_access_with_standings **required** `boolean`: standing_level and any standing related tax rate only present when this is true
    * allow_alliance_access **required** `boolean`: allow_alliance_access boolean
    * bad_standing_tax_rate `number`: bad_standing_tax_rate number
    * corporation_tax_rate `number`: corporation_tax_rate number
    * excellent_standing_tax_rate `number`: Tax rate for entities with excellent level of standing, only present if this level is allowed, same for all other standing related tax rates
    * good_standing_tax_rate `number`: good_standing_tax_rate number
    * neutral_standing_tax_rate `number`: neutral_standing_tax_rate number
    * office_id **required** `integer`: unique ID of this customs office
    * reinforce_exit_end **required** `integer`: reinforce_exit_end integer
    * reinforce_exit_start **required** `integer`: Together with reinforce_exit_end, marks a 2-hour period where this customs office could exit reinforcement mode during the day after initial attack
    * standing_level `string` (values: bad, excellent, good, neutral, terrible): Access is allowed only for entities with this level of standing or better
    * system_id **required** `integer`: ID of the solar system this customs office is located in
    * terrible_standing_tax_rate `number`: terrible_standing_tax_rate number

### get_corporations_corporation_id_divisions
Return corporation hangar and wallet division names, only show if a division is not using the default name

---
Alternate route: `/dev/corporations/{corporation_id}/divisions/`

Alternate route: `/legacy/corporations/{corporation_id}/divisions/`

Alternate route: `/v1/corporations/{corporation_id}/divisions/`

---
This route is cached for up to 3600 seconds

---
Requires one of the following EVE corporation role(s): Director



```js
evetech.get_corporations_corporation_id_divisions({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `object`: 200 ok object
  * hangar `array`: hangar array
    * items `object`: hangar object
      * division `integer`: division integer
      * name `string`: name string
  * wallet `array`: wallet array
    * items `object`: wallet object
      * division `integer`: division integer
      * name `string`: name string

### get_corporations_corporation_id_facilities
Return a corporation's facilities

---
Alternate route: `/dev/corporations/{corporation_id}/facilities/`

Alternate route: `/legacy/corporations/{corporation_id}/facilities/`

Alternate route: `/v1/corporations/{corporation_id}/facilities/`

---
This route is cached for up to 3600 seconds

---
Requires one of the following EVE corporation role(s): Factory_Manager



```js
evetech.get_corporations_corporation_id_facilities({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * facility_id **required** `integer`: facility_id integer
    * system_id **required** `integer`: system_id integer
    * type_id **required** `integer`: type_id integer

### get_corporations_corporation_id_fw_stats
Statistics about a corporation involved in faction warfare

---
Alternate route: `/dev/corporations/{corporation_id}/fw/stats/`

Alternate route: `/legacy/corporations/{corporation_id}/fw/stats/`

Alternate route: `/v1/corporations/{corporation_id}/fw/stats/`

---
This route expires daily at 11:05


```js
evetech.get_corporations_corporation_id_fw_stats({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `object`: 200 ok object
  * enlisted_on `string`: The enlistment date of the given corporation into faction warfare. Will not be included if corporation is not enlisted in faction warfare
  * faction_id `integer`: The faction the given corporation is enlisted to fight for. Will not be included if corporation is not enlisted in faction warfare
  * kills **required** `object`: Summary of kills done by the given corporation against enemy factions
    * last_week **required** `integer`: Last week's total number of kills by members of the given corporation against enemy factions
    * total **required** `integer`: Total number of kills by members of the given corporation against enemy factions since the corporation enlisted
    * yesterday **required** `integer`: Yesterday's total number of kills by members of the given corporation against enemy factions
  * pilots `integer`: How many pilots the enlisted corporation has. Will not be included if corporation is not enlisted in faction warfare
  * victory_points **required** `object`: Summary of victory points gained by the given corporation for the enlisted faction
    * last_week **required** `integer`: Last week's victory points gained by members of the given corporation
    * total **required** `integer`: Total victory points gained since the given corporation enlisted
    * yesterday **required** `integer`: Yesterday's victory points gained by members of the given corporation

### get_corporations_corporation_id_icons
Get the icon urls for a corporation

---
Alternate route: `/dev/corporations/{corporation_id}/icons/`

Alternate route: `/legacy/corporations/{corporation_id}/icons/`

Alternate route: `/v1/corporations/{corporation_id}/icons/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_corporations_corporation_id_icons({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `object`: 200 ok object
  * px128x128 `string`: px128x128 string
  * px256x256 `string`: px256x256 string
  * px64x64 `string`: px64x64 string

### get_corporations_corporation_id_industry_jobs
List industry jobs run by a corporation

---
Alternate route: `/dev/corporations/{corporation_id}/industry/jobs/`

Alternate route: `/legacy/corporations/{corporation_id}/industry/jobs/`

Alternate route: `/v1/corporations/{corporation_id}/industry/jobs/`

---
This route is cached for up to 300 seconds

---
Requires one of the following EVE corporation role(s): FactoryManager



```js
evetech.get_corporations_corporation_id_industry_jobs({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * include_completed `boolean`: Whether retrieve completed industry jobs as well
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * activity_id **required** `integer`: Job activity ID
    * blueprint_id **required** `integer`: blueprint_id integer
    * blueprint_location_id **required** `integer`: Location ID of the location from which the blueprint was installed. Normally a station ID, but can also be an asset (e.g. container) or corporation facility
    * blueprint_type_id **required** `integer`: blueprint_type_id integer
    * completed_character_id `integer`: ID of the character which completed this job
    * completed_date `string`: Date and time when this job was completed
    * cost `number`: The sume of job installation fee and industry facility tax
    * duration **required** `integer`: Job duration in seconds
    * end_date **required** `string`: Date and time when this job finished
    * facility_id **required** `integer`: ID of the facility where this job is running
    * installer_id **required** `integer`: ID of the character which installed this job
    * job_id **required** `integer`: Unique job ID
    * licensed_runs `integer`: Number of runs blueprint is licensed for
    * location_id **required** `integer`: ID of the location for the industry facility
    * output_location_id **required** `integer`: Location ID of the location to which the output of the job will be delivered. Normally a station ID, but can also be a corporation facility
    * pause_date `string`: Date and time when this job was paused (i.e. time when the facility where this job was installed went offline)
    * probability `number`: Chance of success for invention
    * product_type_id `integer`: Type ID of product (manufactured, copied or invented)
    * runs **required** `integer`: Number of runs for a manufacturing job, or number of copies to make for a blueprint copy
    * start_date **required** `string`: Date and time when this job started
    * status **required** `string` (values: active, cancelled, delivered, paused, ready, reverted): status string
    * successful_runs `integer`: Number of successful runs for this job. Equal to runs unless this is an invention job

### get_corporations_corporation_id_killmails_recent
Get a list of a corporation's kills and losses going back 90 days

---
Alternate route: `/dev/corporations/{corporation_id}/killmails/recent/`

Alternate route: `/legacy/corporations/{corporation_id}/killmails/recent/`

Alternate route: `/v1/corporations/{corporation_id}/killmails/recent/`

---
This route is cached for up to 300 seconds

---
Requires one of the following EVE corporation role(s): Director



```js
evetech.get_corporations_corporation_id_killmails_recent({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * killmail_hash **required** `string`: A hash of this killmail
    * killmail_id **required** `integer`: ID of this killmail

### get_corporations_corporation_id_medals
Returns a corporation's medals

---
Alternate route: `/dev/corporations/{corporation_id}/medals/`

Alternate route: `/legacy/corporations/{corporation_id}/medals/`

Alternate route: `/v1/corporations/{corporation_id}/medals/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_corporations_corporation_id_medals({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * created_at **required** `string`: created_at string
    * creator_id **required** `integer`: ID of the character who created this medal
    * description **required** `string`: description string
    * medal_id **required** `integer`: medal_id integer
    * title **required** `string`: title string

### get_corporations_corporation_id_medals_issued
Returns medals issued by a corporation

---
Alternate route: `/dev/corporations/{corporation_id}/medals/issued/`

Alternate route: `/legacy/corporations/{corporation_id}/medals/issued/`

Alternate route: `/v1/corporations/{corporation_id}/medals/issued/`

---
This route is cached for up to 3600 seconds

---
Requires one of the following EVE corporation role(s): Director



```js
evetech.get_corporations_corporation_id_medals_issued({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * character_id **required** `integer`: ID of the character who was rewarded this medal
    * issued_at **required** `string`: issued_at string
    * issuer_id **required** `integer`: ID of the character who issued the medal
    * medal_id **required** `integer`: medal_id integer
    * reason **required** `string`: reason string
    * status **required** `string` (values: private, public): status string

### get_corporations_corporation_id_members
Return the current member list of a corporation, the token's character need to be a member of the corporation.

---
Alternate route: `/dev/corporations/{corporation_id}/members/`

Alternate route: `/v3/corporations/{corporation_id}/members/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_corporations_corporation_id_members({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: A list of character IDs
  * items `integer`: 200 ok integer

### get_corporations_corporation_id_members_limit
Return a corporation's member limit, not including CEO himself

---
Alternate route: `/dev/corporations/{corporation_id}/members/limit/`

Alternate route: `/legacy/corporations/{corporation_id}/members/limit/`

Alternate route: `/v1/corporations/{corporation_id}/members/limit/`

---
This route is cached for up to 3600 seconds

---
Requires one of the following EVE corporation role(s): Director



```js
evetech.get_corporations_corporation_id_members_limit({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `integer`: 200 ok integer

### get_corporations_corporation_id_members_titles
Returns a corporation's members' titles

---
Alternate route: `/dev/corporations/{corporation_id}/members/titles/`

Alternate route: `/legacy/corporations/{corporation_id}/members/titles/`

Alternate route: `/v1/corporations/{corporation_id}/members/titles/`

---
This route is cached for up to 3600 seconds

---
Requires one of the following EVE corporation role(s): Director



```js
evetech.get_corporations_corporation_id_members_titles({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * character_id **required** `integer`: character_id integer
    * titles **required** `array`: A list of title_id
      * items `integer`: title integer

### get_corporations_corporation_id_membertracking
Returns additional information about a corporation's members which helps tracking their activities

---
Alternate route: `/dev/corporations/{corporation_id}/membertracking/`

Alternate route: `/legacy/corporations/{corporation_id}/membertracking/`

Alternate route: `/v1/corporations/{corporation_id}/membertracking/`

---
This route is cached for up to 3600 seconds

---
Requires one of the following EVE corporation role(s): Director



```js
evetech.get_corporations_corporation_id_membertracking({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * base_id `integer`: base_id integer
    * character_id **required** `integer`: character_id integer
    * location_id `integer`: location_id integer
    * logoff_date `string`: logoff_date string
    * logon_date `string`: logon_date string
    * ship_type_id `integer`: ship_type_id integer
    * start_date `string`: start_date string

### get_corporations_corporation_id_orders
List open market orders placed on behalf of a corporation

---
Alternate route: `/dev/corporations/{corporation_id}/orders/`

Alternate route: `/v2/corporations/{corporation_id}/orders/`

---
This route is cached for up to 1200 seconds

---
Requires one of the following EVE corporation role(s): Accountant, Trader



```js
evetech.get_corporations_corporation_id_orders({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * duration **required** `integer`: Number of days for which order is valid (starting from the issued date). An order expires at time issued + duration
    * escrow `number`: For buy orders, the amount of ISK in escrow
    * is_buy_order `boolean`: True if the order is a bid (buy) order
    * issued **required** `string`: Date and time when this order was issued
    * location_id **required** `integer`: ID of the location where order was placed
    * min_volume `integer`: For buy orders, the minimum quantity that will be accepted in a matching sell order
    * order_id **required** `integer`: Unique order ID
    * price **required** `number`: Cost per unit for this order
    * range **required** `string` (values: 1, 10, 2, 20, 3, 30, 4, 40, 5, region, solarsystem, station): Valid order range, numbers are ranges in jumps
    * region_id **required** `integer`: ID of the region where order was placed
    * type_id **required** `integer`: The type ID of the item transacted in this order
    * volume_remain **required** `integer`: Quantity of items still required or offered
    * volume_total **required** `integer`: Quantity of items required or offered at time order was placed
    * wallet_division **required** `integer`: The corporation wallet division used for this order.

### get_corporations_corporation_id_orders_history
List cancelled and expired market orders placed on behalf of a corporation up to 90 days in the past.

---
Alternate route: `/dev/corporations/{corporation_id}/orders/history/`

Alternate route: `/legacy/corporations/{corporation_id}/orders/history/`

Alternate route: `/v1/corporations/{corporation_id}/orders/history/`

---
This route is cached for up to 3600 seconds

---
Requires one of the following EVE corporation role(s): Accountant, Trader



```js
evetech.get_corporations_corporation_id_orders_history({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * duration **required** `integer`: Number of days the order was valid for (starting from the issued date). An order expires at time issued + duration
    * escrow `number`: For buy orders, the amount of ISK in escrow
    * is_buy_order `boolean`: True if the order is a bid (buy) order
    * issued **required** `string`: Date and time when this order was issued
    * location_id **required** `integer`: ID of the location where order was placed
    * min_volume `integer`: For buy orders, the minimum quantity that will be accepted in a matching sell order
    * order_id **required** `integer`: Unique order ID
    * price **required** `number`: Cost per unit for this order
    * range **required** `string` (values: 1, 10, 2, 20, 3, 30, 4, 40, 5, region, solarsystem, station): Valid order range, numbers are ranges in jumps
    * region_id **required** `integer`: ID of the region where order was placed
    * state **required** `string` (values: cancelled, expired): Current order state
    * type_id **required** `integer`: The type ID of the item transacted in this order
    * volume_remain **required** `integer`: Quantity of items still required or offered
    * volume_total **required** `integer`: Quantity of items required or offered at time order was placed
    * wallet_division **required** `integer`: The corporation wallet division used for this order.

### get_corporations_corporation_id_outposts
Get a list of corporation outpost IDs Note: This endpoint will be removed once outposts are migrated to Citadels as talked about in this blog: https://community.eveonline.com/news/dev-blogs/the-next-steps-in-structure-transition/

---
Alternate route: `/dev/corporations/{corporation_id}/outposts/`

Alternate route: `/legacy/corporations/{corporation_id}/outposts/`

Alternate route: `/v1/corporations/{corporation_id}/outposts/`

---
This route is cached for up to 3600 seconds

---
Requires one of the following EVE corporation role(s): Director



```js
evetech.get_corporations_corporation_id_outposts({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `integer`: 200 ok integer

### get_corporations_corporation_id_outposts_outpost_id
Get details about a given outpost. Note: This endpoint will be removed once outposts are migrated to Citadels as talked about in this blog: https://community.eveonline.com/news/dev-blogs/the-next-steps-in-structure-transition/

---
Alternate route: `/dev/corporations/{corporation_id}/outposts/{outpost_id}/`

Alternate route: `/legacy/corporations/{corporation_id}/outposts/{outpost_id}/`

Alternate route: `/v1/corporations/{corporation_id}/outposts/{outpost_id}/`

---
This route is cached for up to 3600 seconds

---
Requires one of the following EVE corporation role(s): Director



```js
evetech.get_corporations_corporation_id_outposts_outpost_id({
  "corporation_id": 0,
  "outpost_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * outpost_id **required** `integer`: A station (outpost) ID
  * token `string`: Access token to use if unable to set a header

#### Output
* output `object`: 200 ok object
  * coordinates **required** `object`: coordinates object
    * x **required** `number`: x number
    * y **required** `number`: y number
    * z **required** `number`: z number
  * docking_cost_per_ship_volume **required** `number`: docking_cost_per_ship_volume number
  * office_rental_cost **required** `integer`: office_rental_cost integer
  * owner_id **required** `integer`: The entity that owns the station (e.g. the entity whose logo is on the station services bar)
  * reprocessing_efficiency **required** `number`: reprocessing_efficiency number
  * reprocessing_station_take **required** `number`: reprocessing_station_take number
  * services **required** `array`: A list of services the given outpost provides
    * items `object`: service object
      * discount_per_good_standing **required** `number`: discount_per_good_standing number
      * minimum_standing **required** `number`: minimum_standing number
      * service_name **required** `string` (values: Bounty Missions, Assassination Missions, Courier Missions, Interbus, Reprocessing Plant, Refinery, Market, Black Market, Stock Exchange, Cloning, Surgery, DNA Therapy, Repair Facilities, Factory, Laboratory, Gambling, Fitting, Paintshop, News, Storage, Insurance, Docking, Office Rental, Jump Clone Facility, Loyalty Point Store, Navy Offices, Security Office): service_name string
      * surcharge_per_bad_standing **required** `number`: surcharge_per_bad_standing number
  * standing_owner_id **required** `integer`: The owner ID that sets the ability for someone to dock based on standings.
  * system_id **required** `integer`: The ID of the solar system the outpost rests in
  * type_id **required** `integer`: The type ID of the given outpost

### get_corporations_corporation_id_roles
Return the roles of all members if the character has the personnel manager role or any grantable role.

---
Alternate route: `/dev/corporations/{corporation_id}/roles/`

Alternate route: `/legacy/corporations/{corporation_id}/roles/`

Alternate route: `/v1/corporations/{corporation_id}/roles/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_corporations_corporation_id_roles({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * character_id **required** `integer`: character_id integer
    * grantable_roles `array`: grantable_roles array
      * items `string` (values: Account_Take_1, Account_Take_2, Account_Take_3, Account_Take_4, Account_Take_5, Account_Take_6, Account_Take_7, Accountant, Auditor, Communications_Officer, Config_Equipment, Config_Starbase_Equipment, Container_Take_1, Container_Take_2, Container_Take_3, Container_Take_4, Container_Take_5, Container_Take_6, Container_Take_7, Contract_Manager, Diplomat, Director, Factory_Manager, Fitting_Manager, Hangar_Query_1, Hangar_Query_2, Hangar_Query_3, Hangar_Query_4, Hangar_Query_5, Hangar_Query_6, Hangar_Query_7, Hangar_Take_1, Hangar_Take_2, Hangar_Take_3, Hangar_Take_4, Hangar_Take_5, Hangar_Take_6, Hangar_Take_7, Junior_Accountant, Personnel_Manager, Rent_Factory_Facility, Rent_Office, Rent_Research_Facility, Security_Officer, Starbase_Defense_Operator, Starbase_Fuel_Technician, Station_Manager, Terrestrial_Combat_Officer, Terrestrial_Logistics_Officer, Trader): grantable_role string
    * grantable_roles_at_base `array`: grantable_roles_at_base array
      * items `string` (values: Account_Take_1, Account_Take_2, Account_Take_3, Account_Take_4, Account_Take_5, Account_Take_6, Account_Take_7, Accountant, Auditor, Communications_Officer, Config_Equipment, Config_Starbase_Equipment, Container_Take_1, Container_Take_2, Container_Take_3, Container_Take_4, Container_Take_5, Container_Take_6, Container_Take_7, Contract_Manager, Diplomat, Director, Factory_Manager, Fitting_Manager, Hangar_Query_1, Hangar_Query_2, Hangar_Query_3, Hangar_Query_4, Hangar_Query_5, Hangar_Query_6, Hangar_Query_7, Hangar_Take_1, Hangar_Take_2, Hangar_Take_3, Hangar_Take_4, Hangar_Take_5, Hangar_Take_6, Hangar_Take_7, Junior_Accountant, Personnel_Manager, Rent_Factory_Facility, Rent_Office, Rent_Research_Facility, Security_Officer, Starbase_Defense_Operator, Starbase_Fuel_Technician, Station_Manager, Terrestrial_Combat_Officer, Terrestrial_Logistics_Officer, Trader): grantable_roles_at_base string
    * grantable_roles_at_hq `array`: grantable_roles_at_hq array
      * items `string` (values: Account_Take_1, Account_Take_2, Account_Take_3, Account_Take_4, Account_Take_5, Account_Take_6, Account_Take_7, Accountant, Auditor, Communications_Officer, Config_Equipment, Config_Starbase_Equipment, Container_Take_1, Container_Take_2, Container_Take_3, Container_Take_4, Container_Take_5, Container_Take_6, Container_Take_7, Contract_Manager, Diplomat, Director, Factory_Manager, Fitting_Manager, Hangar_Query_1, Hangar_Query_2, Hangar_Query_3, Hangar_Query_4, Hangar_Query_5, Hangar_Query_6, Hangar_Query_7, Hangar_Take_1, Hangar_Take_2, Hangar_Take_3, Hangar_Take_4, Hangar_Take_5, Hangar_Take_6, Hangar_Take_7, Junior_Accountant, Personnel_Manager, Rent_Factory_Facility, Rent_Office, Rent_Research_Facility, Security_Officer, Starbase_Defense_Operator, Starbase_Fuel_Technician, Station_Manager, Terrestrial_Combat_Officer, Terrestrial_Logistics_Officer, Trader): grantable_roles_at_hq string
    * grantable_roles_at_other `array`: grantable_roles_at_other array
      * items `string` (values: Account_Take_1, Account_Take_2, Account_Take_3, Account_Take_4, Account_Take_5, Account_Take_6, Account_Take_7, Accountant, Auditor, Communications_Officer, Config_Equipment, Config_Starbase_Equipment, Container_Take_1, Container_Take_2, Container_Take_3, Container_Take_4, Container_Take_5, Container_Take_6, Container_Take_7, Contract_Manager, Diplomat, Director, Factory_Manager, Fitting_Manager, Hangar_Query_1, Hangar_Query_2, Hangar_Query_3, Hangar_Query_4, Hangar_Query_5, Hangar_Query_6, Hangar_Query_7, Hangar_Take_1, Hangar_Take_2, Hangar_Take_3, Hangar_Take_4, Hangar_Take_5, Hangar_Take_6, Hangar_Take_7, Junior_Accountant, Personnel_Manager, Rent_Factory_Facility, Rent_Office, Rent_Research_Facility, Security_Officer, Starbase_Defense_Operator, Starbase_Fuel_Technician, Station_Manager, Terrestrial_Combat_Officer, Terrestrial_Logistics_Officer, Trader): grantable_roles_at_other string
    * roles `array`: roles array
      * items `string` (values: Account_Take_1, Account_Take_2, Account_Take_3, Account_Take_4, Account_Take_5, Account_Take_6, Account_Take_7, Accountant, Auditor, Communications_Officer, Config_Equipment, Config_Starbase_Equipment, Container_Take_1, Container_Take_2, Container_Take_3, Container_Take_4, Container_Take_5, Container_Take_6, Container_Take_7, Contract_Manager, Diplomat, Director, Factory_Manager, Fitting_Manager, Hangar_Query_1, Hangar_Query_2, Hangar_Query_3, Hangar_Query_4, Hangar_Query_5, Hangar_Query_6, Hangar_Query_7, Hangar_Take_1, Hangar_Take_2, Hangar_Take_3, Hangar_Take_4, Hangar_Take_5, Hangar_Take_6, Hangar_Take_7, Junior_Accountant, Personnel_Manager, Rent_Factory_Facility, Rent_Office, Rent_Research_Facility, Security_Officer, Starbase_Defense_Operator, Starbase_Fuel_Technician, Station_Manager, Terrestrial_Combat_Officer, Terrestrial_Logistics_Officer, Trader): role string
    * roles_at_base `array`: roles_at_base array
      * items `string` (values: Account_Take_1, Account_Take_2, Account_Take_3, Account_Take_4, Account_Take_5, Account_Take_6, Account_Take_7, Accountant, Auditor, Communications_Officer, Config_Equipment, Config_Starbase_Equipment, Container_Take_1, Container_Take_2, Container_Take_3, Container_Take_4, Container_Take_5, Container_Take_6, Container_Take_7, Contract_Manager, Diplomat, Director, Factory_Manager, Fitting_Manager, Hangar_Query_1, Hangar_Query_2, Hangar_Query_3, Hangar_Query_4, Hangar_Query_5, Hangar_Query_6, Hangar_Query_7, Hangar_Take_1, Hangar_Take_2, Hangar_Take_3, Hangar_Take_4, Hangar_Take_5, Hangar_Take_6, Hangar_Take_7, Junior_Accountant, Personnel_Manager, Rent_Factory_Facility, Rent_Office, Rent_Research_Facility, Security_Officer, Starbase_Defense_Operator, Starbase_Fuel_Technician, Station_Manager, Terrestrial_Combat_Officer, Terrestrial_Logistics_Officer, Trader): roles_at_base string
    * roles_at_hq `array`: roles_at_hq array
      * items `string` (values: Account_Take_1, Account_Take_2, Account_Take_3, Account_Take_4, Account_Take_5, Account_Take_6, Account_Take_7, Accountant, Auditor, Communications_Officer, Config_Equipment, Config_Starbase_Equipment, Container_Take_1, Container_Take_2, Container_Take_3, Container_Take_4, Container_Take_5, Container_Take_6, Container_Take_7, Contract_Manager, Diplomat, Director, Factory_Manager, Fitting_Manager, Hangar_Query_1, Hangar_Query_2, Hangar_Query_3, Hangar_Query_4, Hangar_Query_5, Hangar_Query_6, Hangar_Query_7, Hangar_Take_1, Hangar_Take_2, Hangar_Take_3, Hangar_Take_4, Hangar_Take_5, Hangar_Take_6, Hangar_Take_7, Junior_Accountant, Personnel_Manager, Rent_Factory_Facility, Rent_Office, Rent_Research_Facility, Security_Officer, Starbase_Defense_Operator, Starbase_Fuel_Technician, Station_Manager, Terrestrial_Combat_Officer, Terrestrial_Logistics_Officer, Trader): roles_at_hq string
    * roles_at_other `array`: roles_at_other array
      * items `string` (values: Account_Take_1, Account_Take_2, Account_Take_3, Account_Take_4, Account_Take_5, Account_Take_6, Account_Take_7, Accountant, Auditor, Communications_Officer, Config_Equipment, Config_Starbase_Equipment, Container_Take_1, Container_Take_2, Container_Take_3, Container_Take_4, Container_Take_5, Container_Take_6, Container_Take_7, Contract_Manager, Diplomat, Director, Factory_Manager, Fitting_Manager, Hangar_Query_1, Hangar_Query_2, Hangar_Query_3, Hangar_Query_4, Hangar_Query_5, Hangar_Query_6, Hangar_Query_7, Hangar_Take_1, Hangar_Take_2, Hangar_Take_3, Hangar_Take_4, Hangar_Take_5, Hangar_Take_6, Hangar_Take_7, Junior_Accountant, Personnel_Manager, Rent_Factory_Facility, Rent_Office, Rent_Research_Facility, Security_Officer, Starbase_Defense_Operator, Starbase_Fuel_Technician, Station_Manager, Terrestrial_Combat_Officer, Terrestrial_Logistics_Officer, Trader): roles_at_other string

### get_corporations_corporation_id_roles_history
Return how roles have changed for a coporation's members, up to a month

---
Alternate route: `/dev/corporations/{corporation_id}/roles/history/`

Alternate route: `/legacy/corporations/{corporation_id}/roles/history/`

Alternate route: `/v1/corporations/{corporation_id}/roles/history/`

---
This route is cached for up to 3600 seconds

---
Requires one of the following EVE corporation role(s): Director



```js
evetech.get_corporations_corporation_id_roles_history({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * changed_at **required** `string`: changed_at string
    * character_id **required** `integer`: The character whose roles are changed
    * issuer_id **required** `integer`: ID of the character who issued this change
    * new_roles **required** `array`: new_roles array
      * items `string` (values: Account_Take_1, Account_Take_2, Account_Take_3, Account_Take_4, Account_Take_5, Account_Take_6, Account_Take_7, Accountant, Auditor, Communications_Officer, Config_Equipment, Config_Starbase_Equipment, Container_Take_1, Container_Take_2, Container_Take_3, Container_Take_4, Container_Take_5, Container_Take_6, Container_Take_7, Contract_Manager, Diplomat, Director, Factory_Manager, Fitting_Manager, Hangar_Query_1, Hangar_Query_2, Hangar_Query_3, Hangar_Query_4, Hangar_Query_5, Hangar_Query_6, Hangar_Query_7, Hangar_Take_1, Hangar_Take_2, Hangar_Take_3, Hangar_Take_4, Hangar_Take_5, Hangar_Take_6, Hangar_Take_7, Junior_Accountant, Personnel_Manager, Rent_Factory_Facility, Rent_Office, Rent_Research_Facility, Security_Officer, Starbase_Defense_Operator, Starbase_Fuel_Technician, Station_Manager, Terrestrial_Combat_Officer, Terrestrial_Logistics_Officer, Trader): new_role string
    * old_roles **required** `array`: old_roles array
      * items `string` (values: Account_Take_1, Account_Take_2, Account_Take_3, Account_Take_4, Account_Take_5, Account_Take_6, Account_Take_7, Accountant, Auditor, Communications_Officer, Config_Equipment, Config_Starbase_Equipment, Container_Take_1, Container_Take_2, Container_Take_3, Container_Take_4, Container_Take_5, Container_Take_6, Container_Take_7, Contract_Manager, Diplomat, Director, Factory_Manager, Fitting_Manager, Hangar_Query_1, Hangar_Query_2, Hangar_Query_3, Hangar_Query_4, Hangar_Query_5, Hangar_Query_6, Hangar_Query_7, Hangar_Take_1, Hangar_Take_2, Hangar_Take_3, Hangar_Take_4, Hangar_Take_5, Hangar_Take_6, Hangar_Take_7, Junior_Accountant, Personnel_Manager, Rent_Factory_Facility, Rent_Office, Rent_Research_Facility, Security_Officer, Starbase_Defense_Operator, Starbase_Fuel_Technician, Station_Manager, Terrestrial_Combat_Officer, Terrestrial_Logistics_Officer, Trader): old_role string
    * role_type **required** `string` (values: grantable_roles, grantable_roles_at_base, grantable_roles_at_hq, grantable_roles_at_other, roles, roles_at_base, roles_at_hq, roles_at_other): role_type string

### get_corporations_corporation_id_shareholders
Return the current shareholders of a corporation.

---
Alternate route: `/dev/corporations/{corporation_id}/shareholders/`

Alternate route: `/legacy/corporations/{corporation_id}/shareholders/`

Alternate route: `/v1/corporations/{corporation_id}/shareholders/`

---
This route is cached for up to 3600 seconds

---
Requires one of the following EVE corporation role(s): Director



```js
evetech.get_corporations_corporation_id_shareholders({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: List of shareholders
  * items `object`: 200 ok object
    * share_count **required** `integer`: share_count integer
    * shareholder_id **required** `integer`: shareholder_id integer
    * shareholder_type **required** `string` (values: character, corporation): shareholder_type string

### get_corporations_corporation_id_standings
Return corporation standings from agents, NPC corporations, and factions

---
Alternate route: `/dev/corporations/{corporation_id}/standings/`

Alternate route: `/legacy/corporations/{corporation_id}/standings/`

Alternate route: `/v1/corporations/{corporation_id}/standings/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_corporations_corporation_id_standings({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * from_id **required** `integer`: from_id integer
    * from_type **required** `string` (values: agent, npc_corp, faction): from_type string
    * standing **required** `number`: standing number

### get_corporations_corporation_id_starbases
Returns list of corporation starbases (POSes)

---
Alternate route: `/dev/corporations/{corporation_id}/starbases/`

Alternate route: `/legacy/corporations/{corporation_id}/starbases/`

Alternate route: `/v1/corporations/{corporation_id}/starbases/`

---
This route is cached for up to 3600 seconds

---
Requires one of the following EVE corporation role(s): Director



```js
evetech.get_corporations_corporation_id_starbases({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * moon_id `integer`: The moon this starbase (POS) is anchored on, unanchored POSes do not have this information
    * onlined_since `string`: When the POS onlined, for starbases (POSes) in online state
    * reinforced_until `string`: When the POS will be out of reinforcement, for starbases (POSes) in reinforced state
    * starbase_id **required** `integer`: Unique ID for this starbase (POS)
    * state `string` (values: offline, online, onlining, reinforced, unanchoring): state string
    * system_id **required** `integer`: The solar system this starbase (POS) is in, unanchored POSes have this information
    * type_id **required** `integer`: Starbase (POS) type
    * unanchor_at `string`: When the POS started unanchoring, for starbases (POSes) in unanchoring state

### get_corporations_corporation_id_starbases_starbase_id
Returns various settings and fuels of a starbase (POS)

---
Alternate route: `/dev/corporations/{corporation_id}/starbases/{starbase_id}/`

Alternate route: `/legacy/corporations/{corporation_id}/starbases/{starbase_id}/`

Alternate route: `/v1/corporations/{corporation_id}/starbases/{starbase_id}/`

---
This route is cached for up to 3600 seconds

---
Requires one of the following EVE corporation role(s): Director



```js
evetech.get_corporations_corporation_id_starbases_starbase_id({
  "corporation_id": 0,
  "starbase_id": 0,
  "system_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * starbase_id **required** `integer`: An EVE starbase (POS) ID
  * system_id **required** `integer`: The solar system this starbase (POS) is located in,
  * token `string`: Access token to use if unable to set a header

#### Output
* output `object`: 200 ok object
  * allow_alliance_members **required** `boolean`: allow_alliance_members boolean
  * allow_corporation_members **required** `boolean`: allow_corporation_members boolean
  * anchor **required** `string` (values: alliance_member, config_starbase_equipment_role, corporation_member, starbase_fuel_technician_role): Who can anchor starbase (POS) and its structures
  * attack_if_at_war **required** `boolean`: attack_if_at_war boolean
  * attack_if_other_security_status_dropping **required** `boolean`: attack_if_other_security_status_dropping boolean
  * attack_security_status_threshold `number`: Starbase (POS) will attack if target's security standing is lower than this value
  * attack_standing_threshold `number`: Starbase (POS) will attack if target's standing is lower than this value
  * fuel_bay_take **required** `string` (values: alliance_member, config_starbase_equipment_role, corporation_member, starbase_fuel_technician_role): Who can take fuel blocks out of the starbase (POS)'s fuel bay
  * fuel_bay_view **required** `string` (values: alliance_member, config_starbase_equipment_role, corporation_member, starbase_fuel_technician_role): Who can view the starbase (POS)'s fule bay. Characters either need to have required role or belong to the starbase (POS) owner's corporation or alliance, as described by the enum, all other access settings follows the same scheme
  * fuels `array`: Fuel blocks and other things that will be consumed when operating a starbase (POS)
    * items `object`: fuel object
      * quantity **required** `integer`: quantity integer
      * type_id **required** `integer`: type_id integer
  * offline **required** `string` (values: alliance_member, config_starbase_equipment_role, corporation_member, starbase_fuel_technician_role): Who can offline starbase (POS) and its structures
  * online **required** `string` (values: alliance_member, config_starbase_equipment_role, corporation_member, starbase_fuel_technician_role): Who can online starbase (POS) and its structures
  * unanchor **required** `string` (values: alliance_member, config_starbase_equipment_role, corporation_member, starbase_fuel_technician_role): Who can unanchor starbase (POS) and its structures
  * use_alliance_standings **required** `boolean`: True if the starbase (POS) is using alliance standings, otherwise using corporation's

### get_corporations_corporation_id_structures
Get a list of corporation structures. This route's version includes the changes to structures detailed in this blog: https://www.eveonline.com/article/upwell-2.0-structures-changes-coming-on-february-13th

---
Alternate route: `/dev/corporations/{corporation_id}/structures/`

Alternate route: `/v2/corporations/{corporation_id}/structures/`

---
This route is cached for up to 3600 seconds

---
Requires one of the following EVE corporation role(s): StationManager



```js
evetech.get_corporations_corporation_id_structures({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * Accept-Language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response, takes precedence over Accept-Language
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * corporation_id **required** `integer`: ID of the corporation that owns the structure
    * fuel_expires `string`: Date on which the structure will run out of fuel
    * next_reinforce_apply `string`: The date and time when the structure's newly requested reinforcement times (e.g. next_reinforce_hour and next_reinforce_day) will take effect.
    * next_reinforce_hour `integer`: The requested change to reinforce_hour that will take effect at the time shown by next_reinforce_apply.
    * next_reinforce_weekday `integer`: The requested change to reinforce_weekday that will take effect at the time shown by next_reinforce_apply.
    * profile_id **required** `integer`: The id of the ACL profile for this citadel
    * reinforce_hour **required** `integer`: The hour of day that determines the four hour window when the structure will randomly exit its reinforcement periods and become vulnerable to attack against its armor and/or hull. The structure will become vulnerable at a random time that is +/- 2 hours centered on the value of this property.
    * reinforce_weekday **required** `integer`: The day of the week when the structure exits its final reinforcement period and becomes vulnerable to attack against its hull. Monday is 0 and Sunday is 6.
    * services `array`: Contains a list of service upgrades, and their state
      * items `object`: service object
        * name **required** `string`: name string
        * state **required** `string` (values: online, offline, cleanup): state string
    * state **required** `string` (values: anchor_vulnerable, anchoring, armor_reinforce, armor_vulnerable, fitting_invulnerable, hull_reinforce, hull_vulnerable, online_deprecated, onlining_vulnerable, shield_vulnerable, unanchored, unknown): state string
    * state_timer_end `string`: Date at which the structure will move to it's next state
    * state_timer_start `string`: Date at which the structure entered it's current state
    * structure_id **required** `integer`: The Item ID of the structure
    * system_id **required** `integer`: The solar system the structure is in
    * type_id **required** `integer`: The type id of the structure
    * unanchors_at `string`: Date at which the structure will unanchor

### get_corporations_corporation_id_titles
Returns a corporation's titles

---
Alternate route: `/dev/corporations/{corporation_id}/titles/`

Alternate route: `/legacy/corporations/{corporation_id}/titles/`

Alternate route: `/v1/corporations/{corporation_id}/titles/`

---
This route is cached for up to 3600 seconds

---
Requires one of the following EVE corporation role(s): Director



```js
evetech.get_corporations_corporation_id_titles({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * grantable_roles `array`: grantable_roles array
      * items `string` (values: Account_Take_1, Account_Take_2, Account_Take_3, Account_Take_4, Account_Take_5, Account_Take_6, Account_Take_7, Accountant, Auditor, Communications_Officer, Config_Equipment, Config_Starbase_Equipment, Container_Take_1, Container_Take_2, Container_Take_3, Container_Take_4, Container_Take_5, Container_Take_6, Container_Take_7, Contract_Manager, Diplomat, Director, Factory_Manager, Fitting_Manager, Hangar_Query_1, Hangar_Query_2, Hangar_Query_3, Hangar_Query_4, Hangar_Query_5, Hangar_Query_6, Hangar_Query_7, Hangar_Take_1, Hangar_Take_2, Hangar_Take_3, Hangar_Take_4, Hangar_Take_5, Hangar_Take_6, Hangar_Take_7, Junior_Accountant, Personnel_Manager, Rent_Factory_Facility, Rent_Office, Rent_Research_Facility, Security_Officer, Starbase_Defense_Operator, Starbase_Fuel_Technician, Station_Manager, Terrestrial_Combat_Officer, Terrestrial_Logistics_Officer, Trader): grantable_role string
    * grantable_roles_at_base `array`: grantable_roles_at_base array
      * items `string` (values: Account_Take_1, Account_Take_2, Account_Take_3, Account_Take_4, Account_Take_5, Account_Take_6, Account_Take_7, Accountant, Auditor, Communications_Officer, Config_Equipment, Config_Starbase_Equipment, Container_Take_1, Container_Take_2, Container_Take_3, Container_Take_4, Container_Take_5, Container_Take_6, Container_Take_7, Contract_Manager, Diplomat, Director, Factory_Manager, Fitting_Manager, Hangar_Query_1, Hangar_Query_2, Hangar_Query_3, Hangar_Query_4, Hangar_Query_5, Hangar_Query_6, Hangar_Query_7, Hangar_Take_1, Hangar_Take_2, Hangar_Take_3, Hangar_Take_4, Hangar_Take_5, Hangar_Take_6, Hangar_Take_7, Junior_Accountant, Personnel_Manager, Rent_Factory_Facility, Rent_Office, Rent_Research_Facility, Security_Officer, Starbase_Defense_Operator, Starbase_Fuel_Technician, Station_Manager, Terrestrial_Combat_Officer, Terrestrial_Logistics_Officer, Trader): grantable_roles_at_base string
    * grantable_roles_at_hq `array`: grantable_roles_at_hq array
      * items `string` (values: Account_Take_1, Account_Take_2, Account_Take_3, Account_Take_4, Account_Take_5, Account_Take_6, Account_Take_7, Accountant, Auditor, Communications_Officer, Config_Equipment, Config_Starbase_Equipment, Container_Take_1, Container_Take_2, Container_Take_3, Container_Take_4, Container_Take_5, Container_Take_6, Container_Take_7, Contract_Manager, Diplomat, Director, Factory_Manager, Fitting_Manager, Hangar_Query_1, Hangar_Query_2, Hangar_Query_3, Hangar_Query_4, Hangar_Query_5, Hangar_Query_6, Hangar_Query_7, Hangar_Take_1, Hangar_Take_2, Hangar_Take_3, Hangar_Take_4, Hangar_Take_5, Hangar_Take_6, Hangar_Take_7, Junior_Accountant, Personnel_Manager, Rent_Factory_Facility, Rent_Office, Rent_Research_Facility, Security_Officer, Starbase_Defense_Operator, Starbase_Fuel_Technician, Station_Manager, Terrestrial_Combat_Officer, Terrestrial_Logistics_Officer, Trader): grantable_roles_at_hq string
    * grantable_roles_at_other `array`: grantable_roles_at_other array
      * items `string` (values: Account_Take_1, Account_Take_2, Account_Take_3, Account_Take_4, Account_Take_5, Account_Take_6, Account_Take_7, Accountant, Auditor, Communications_Officer, Config_Equipment, Config_Starbase_Equipment, Container_Take_1, Container_Take_2, Container_Take_3, Container_Take_4, Container_Take_5, Container_Take_6, Container_Take_7, Contract_Manager, Diplomat, Director, Factory_Manager, Fitting_Manager, Hangar_Query_1, Hangar_Query_2, Hangar_Query_3, Hangar_Query_4, Hangar_Query_5, Hangar_Query_6, Hangar_Query_7, Hangar_Take_1, Hangar_Take_2, Hangar_Take_3, Hangar_Take_4, Hangar_Take_5, Hangar_Take_6, Hangar_Take_7, Junior_Accountant, Personnel_Manager, Rent_Factory_Facility, Rent_Office, Rent_Research_Facility, Security_Officer, Starbase_Defense_Operator, Starbase_Fuel_Technician, Station_Manager, Terrestrial_Combat_Officer, Terrestrial_Logistics_Officer, Trader): grantable_roles_at_other string
    * name `string`: name string
    * roles `array`: roles array
      * items `string` (values: Account_Take_1, Account_Take_2, Account_Take_3, Account_Take_4, Account_Take_5, Account_Take_6, Account_Take_7, Accountant, Auditor, Communications_Officer, Config_Equipment, Config_Starbase_Equipment, Container_Take_1, Container_Take_2, Container_Take_3, Container_Take_4, Container_Take_5, Container_Take_6, Container_Take_7, Contract_Manager, Diplomat, Director, Factory_Manager, Fitting_Manager, Hangar_Query_1, Hangar_Query_2, Hangar_Query_3, Hangar_Query_4, Hangar_Query_5, Hangar_Query_6, Hangar_Query_7, Hangar_Take_1, Hangar_Take_2, Hangar_Take_3, Hangar_Take_4, Hangar_Take_5, Hangar_Take_6, Hangar_Take_7, Junior_Accountant, Personnel_Manager, Rent_Factory_Facility, Rent_Office, Rent_Research_Facility, Security_Officer, Starbase_Defense_Operator, Starbase_Fuel_Technician, Station_Manager, Terrestrial_Combat_Officer, Terrestrial_Logistics_Officer, Trader): role string
    * roles_at_base `array`: roles_at_base array
      * items `string` (values: Account_Take_1, Account_Take_2, Account_Take_3, Account_Take_4, Account_Take_5, Account_Take_6, Account_Take_7, Accountant, Auditor, Communications_Officer, Config_Equipment, Config_Starbase_Equipment, Container_Take_1, Container_Take_2, Container_Take_3, Container_Take_4, Container_Take_5, Container_Take_6, Container_Take_7, Contract_Manager, Diplomat, Director, Factory_Manager, Fitting_Manager, Hangar_Query_1, Hangar_Query_2, Hangar_Query_3, Hangar_Query_4, Hangar_Query_5, Hangar_Query_6, Hangar_Query_7, Hangar_Take_1, Hangar_Take_2, Hangar_Take_3, Hangar_Take_4, Hangar_Take_5, Hangar_Take_6, Hangar_Take_7, Junior_Accountant, Personnel_Manager, Rent_Factory_Facility, Rent_Office, Rent_Research_Facility, Security_Officer, Starbase_Defense_Operator, Starbase_Fuel_Technician, Station_Manager, Terrestrial_Combat_Officer, Terrestrial_Logistics_Officer, Trader): roles_at_base string
    * roles_at_hq `array`: roles_at_hq array
      * items `string` (values: Account_Take_1, Account_Take_2, Account_Take_3, Account_Take_4, Account_Take_5, Account_Take_6, Account_Take_7, Accountant, Auditor, Communications_Officer, Config_Equipment, Config_Starbase_Equipment, Container_Take_1, Container_Take_2, Container_Take_3, Container_Take_4, Container_Take_5, Container_Take_6, Container_Take_7, Contract_Manager, Diplomat, Director, Factory_Manager, Fitting_Manager, Hangar_Query_1, Hangar_Query_2, Hangar_Query_3, Hangar_Query_4, Hangar_Query_5, Hangar_Query_6, Hangar_Query_7, Hangar_Take_1, Hangar_Take_2, Hangar_Take_3, Hangar_Take_4, Hangar_Take_5, Hangar_Take_6, Hangar_Take_7, Junior_Accountant, Personnel_Manager, Rent_Factory_Facility, Rent_Office, Rent_Research_Facility, Security_Officer, Starbase_Defense_Operator, Starbase_Fuel_Technician, Station_Manager, Terrestrial_Combat_Officer, Terrestrial_Logistics_Officer, Trader): roles_at_hq string
    * roles_at_other `array`: roles_at_other array
      * items `string` (values: Account_Take_1, Account_Take_2, Account_Take_3, Account_Take_4, Account_Take_5, Account_Take_6, Account_Take_7, Accountant, Auditor, Communications_Officer, Config_Equipment, Config_Starbase_Equipment, Container_Take_1, Container_Take_2, Container_Take_3, Container_Take_4, Container_Take_5, Container_Take_6, Container_Take_7, Contract_Manager, Diplomat, Director, Factory_Manager, Fitting_Manager, Hangar_Query_1, Hangar_Query_2, Hangar_Query_3, Hangar_Query_4, Hangar_Query_5, Hangar_Query_6, Hangar_Query_7, Hangar_Take_1, Hangar_Take_2, Hangar_Take_3, Hangar_Take_4, Hangar_Take_5, Hangar_Take_6, Hangar_Take_7, Junior_Accountant, Personnel_Manager, Rent_Factory_Facility, Rent_Office, Rent_Research_Facility, Security_Officer, Starbase_Defense_Operator, Starbase_Fuel_Technician, Station_Manager, Terrestrial_Combat_Officer, Terrestrial_Logistics_Officer, Trader): roles_at_other string
    * title_id `integer`: title_id integer

### get_corporations_corporation_id_wallets
Get a corporation's wallets

---
Alternate route: `/dev/corporations/{corporation_id}/wallets/`

Alternate route: `/legacy/corporations/{corporation_id}/wallets/`

Alternate route: `/v1/corporations/{corporation_id}/wallets/`

---
This route is cached for up to 300 seconds

---
Requires one of the following EVE corporation role(s): Accountant, Junior_Accountant



```js
evetech.get_corporations_corporation_id_wallets({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * balance **required** `number`: balance number
    * division **required** `integer`: division integer

### get_corporations_corporation_id_wallets_division_journal
Retrieve the given corporation's wallet journal for the given division going 30 days back

---
Alternate route: `/dev/corporations/{corporation_id}/wallets/{division}/journal/`

Alternate route: `/v3/corporations/{corporation_id}/wallets/{division}/journal/`

---
This route is cached for up to 3600 seconds

---
Requires one of the following EVE corporation role(s): Accountant, Junior_Accountant



```js
evetech.get_corporations_corporation_id_wallets_division_journal({
  "corporation_id": 0,
  "division": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * division **required** `integer`: Wallet key of the division to fetch journals from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: Journal entries
  * items `object`: 200 ok object
    * amount `number`: The amount of ISK given or taken from the wallet as a result of the given transaction. Positive when ISK is deposited into the wallet and negative when ISK is withdrawn
    * balance `number`: Wallet balance after transaction occurred
    * context_id `integer`: An ID that gives extra context to the particular transaction. Because of legacy reasons the context is completely different per ref_type and means different things. It is also possible to not have a context_id
    * context_id_type `string` (values: structure_id, station_id, market_transaction_id, character_id, corporation_id, alliance_id, eve_system, industry_job_id, contract_id, planet_id, system_id, type_id): The type of the given context_id if present
    * date **required** `string`: Date and time of transaction
    * description **required** `string`: The reason for the transaction, mirrors what is seen in the client
    * first_party_id `integer`: The id of the first party involved in the transaction. This attribute has no consistency and is different or non existant for particular ref_types. The description attribute will help make sense of what this attribute means. For more info about the given ID it can be dropped into the /universe/names/ ESI route to determine its type and name
    * id **required** `integer`: Unique journal reference ID
    * reason `string`: The user stated reason for the transaction. Only applies to some ref_types
    * ref_type **required** `string` (values: acceleration_gate_fee, advertisement_listing_fee, agent_donation, agent_location_services, agent_miscellaneous, agent_mission_collateral_paid, agent_mission_collateral_refunded, agent_mission_reward, agent_mission_reward_corporation_tax, agent_mission_time_bonus_reward, agent_mission_time_bonus_reward_corporation_tax, agent_security_services, agent_services_rendered, agents_preward, alliance_maintainance_fee, alliance_registration_fee, asset_safety_recovery_tax, bounty, bounty_prize, bounty_prize_corporation_tax, bounty_prizes, bounty_reimbursement, bounty_surcharge, brokers_fee, clone_activation, clone_transfer, contraband_fine, contract_auction_bid, contract_auction_bid_corp, contract_auction_bid_refund, contract_auction_sold, contract_brokers_fee, contract_brokers_fee_corp, contract_collateral, contract_collateral_deposited_corp, contract_collateral_payout, contract_collateral_refund, contract_deposit, contract_deposit_corp, contract_deposit_refund, contract_deposit_sales_tax, contract_price, contract_price_payment_corp, contract_reversal, contract_reward, contract_reward_deposited, contract_reward_deposited_corp, contract_reward_refund, contract_sales_tax, copying, corporate_reward_payout, corporate_reward_tax, corporation_account_withdrawal, corporation_bulk_payment, corporation_dividend_payment, corporation_liquidation, corporation_logo_change_cost, corporation_payment, corporation_registration_fee, courier_mission_escrow, cspa, cspaofflinerefund, datacore_fee, dna_modification_fee, docking_fee, duel_wager_escrow, duel_wager_payment, duel_wager_refund, factory_slot_rental_fee, gm_cash_transfer, industry_job_tax, infrastructure_hub_maintenance, inheritance, insurance, jump_clone_activation_fee, jump_clone_installation_fee, kill_right_fee, lp_store, manufacturing, market_escrow, market_fine_paid, market_transaction, medal_creation, medal_issued, mission_completion, mission_cost, mission_expiration, mission_reward, office_rental_fee, operation_bonus, opportunity_reward, planetary_construction, planetary_export_tax, planetary_import_tax, player_donation, player_trading, project_discovery_reward, project_discovery_tax, reaction, release_of_impounded_property, repair_bill, reprocessing_tax, researching_material_productivity, researching_technology, researching_time_productivity, resource_wars_reward, reverse_engineering, security_processing_fee, shares, sovereignity_bill, store_purchase, store_purchase_refund, transaction_tax, upkeep_adjustment_fee, war_ally_contract, war_fee, war_fee_surrender): The transaction type for the given transaction. Different transaction types will populate different attributes. Note: If you have an existing XML API application that is using ref_types, you will need to know which string ESI ref_type maps to which integer. You can look at the following file to see string->int mappings: https://github.com/ccpgames/eve-glue/blob/master/eve_glue/wallet_journal_ref.py
    * second_party_id `integer`: The id of the second party involved in the transaction. This attribute has no consistency and is different or non existant for particular ref_types. The description attribute will help make sense of what this attribute means. For more info about the given ID it can be dropped into the /universe/names/ ESI route to determine its type and name
    * tax `number`: Tax amount received. Only applies to tax related transactions
    * tax_receiver_id `integer`: The corporation ID receiving any tax paid. Only applies to tax related transactions

### get_corporations_corporation_id_wallets_division_transactions
Get wallet transactions of a corporation

---
Alternate route: `/dev/corporations/{corporation_id}/wallets/{division}/transactions/`

Alternate route: `/legacy/corporations/{corporation_id}/wallets/{division}/transactions/`

Alternate route: `/v1/corporations/{corporation_id}/wallets/{division}/transactions/`

---
This route is cached for up to 3600 seconds

---
Requires one of the following EVE corporation role(s): Accountant, Junior_Accountant



```js
evetech.get_corporations_corporation_id_wallets_division_transactions({
  "corporation_id": 0,
  "division": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * division **required** `integer`: Wallet key of the division to fetch journals from
  * from_id `integer`: Only show journal entries happened before the transaction referenced by this id
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: Wallet transactions
  * items `object`: wallet transaction
    * client_id **required** `integer`: client_id integer
    * date **required** `string`: Date and time of transaction
    * is_buy **required** `boolean`: is_buy boolean
    * journal_ref_id **required** `integer`: journal_ref_id integer
    * location_id **required** `integer`: location_id integer
    * quantity **required** `integer`: quantity integer
    * transaction_id **required** `integer`: Unique transaction ID
    * type_id **required** `integer`: type_id integer
    * unit_price **required** `number`: Amount paid per unit

### get_dogma_attributes
Get a list of dogma attribute ids

---
Alternate route: `/dev/dogma/attributes/`

Alternate route: `/legacy/dogma/attributes/`

Alternate route: `/v1/dogma/attributes/`

---
This route expires daily at 11:05


```js
evetech.get_dogma_attributes({}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: 200 ok array
  * items `integer`: 200 ok integer

### get_dogma_attributes_attribute_id
Get information on a dogma attribute

---
Alternate route: `/dev/dogma/attributes/{attribute_id}/`

Alternate route: `/legacy/dogma/attributes/{attribute_id}/`

Alternate route: `/v1/dogma/attributes/{attribute_id}/`

---
This route expires daily at 11:05


```js
evetech.get_dogma_attributes_attribute_id({
  "attribute_id": 0
}, context)
```

#### Input
* input `object`
  * attribute_id **required** `integer`: A dogma attribute ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `object`: 200 ok object
  * attribute_id **required** `integer`: attribute_id integer
  * default_value `number`: default_value number
  * description `string`: description string
  * display_name `string`: display_name string
  * high_is_good `boolean`: high_is_good boolean
  * icon_id `integer`: icon_id integer
  * name `string`: name string
  * published `boolean`: published boolean
  * stackable `boolean`: stackable boolean
  * unit_id `integer`: unit_id integer

### get_dogma_effects
Get a list of dogma effect ids

---
Alternate route: `/dev/dogma/effects/`

Alternate route: `/legacy/dogma/effects/`

Alternate route: `/v1/dogma/effects/`

---
This route expires daily at 11:05


```js
evetech.get_dogma_effects({}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: 200 ok array
  * items `integer`: 200 ok integer

### get_dogma_effects_effect_id
Get information on a dogma effect

---
Alternate route: `/dev/dogma/effects/{effect_id}/`

Alternate route: `/v2/dogma/effects/{effect_id}/`

---
This route expires daily at 11:05


```js
evetech.get_dogma_effects_effect_id({
  "effect_id": 0
}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * effect_id **required** `integer`: A dogma effect ID
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `object`: 200 ok object
  * description `string`: description string
  * disallow_auto_repeat `boolean`: disallow_auto_repeat boolean
  * discharge_attribute_id `integer`: discharge_attribute_id integer
  * display_name `string`: display_name string
  * duration_attribute_id `integer`: duration_attribute_id integer
  * effect_category `integer`: effect_category integer
  * effect_id **required** `integer`: effect_id integer
  * electronic_chance `boolean`: electronic_chance boolean
  * falloff_attribute_id `integer`: falloff_attribute_id integer
  * icon_id `integer`: icon_id integer
  * is_assistance `boolean`: is_assistance boolean
  * is_offensive `boolean`: is_offensive boolean
  * is_warp_safe `boolean`: is_warp_safe boolean
  * modifiers `array`: modifiers array
    * items `object`: modifier object
      * domain `string`: domain string
      * effect_id `integer`: effect_id integer
      * func **required** `string`: func string
      * modified_attribute_id `integer`: modified_attribute_id integer
      * modifying_attribute_id `integer`: modifying_attribute_id integer
      * operator `integer`: operator integer
  * name `string`: name string
  * post_expression `integer`: post_expression integer
  * pre_expression `integer`: pre_expression integer
  * published `boolean`: published boolean
  * range_attribute_id `integer`: range_attribute_id integer
  * range_chance `boolean`: range_chance boolean
  * tracking_speed_attribute_id `integer`: tracking_speed_attribute_id integer

### get_fleets_fleet_id
Return details about a fleet

---
Alternate route: `/dev/fleets/{fleet_id}/`

Alternate route: `/legacy/fleets/{fleet_id}/`

Alternate route: `/v1/fleets/{fleet_id}/`

---
This route is cached for up to 5 seconds


```js
evetech.get_fleets_fleet_id({
  "fleet_id": 0
}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * fleet_id **required** `integer`: ID for a fleet
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * token `string`: Access token to use if unable to set a header

#### Output
* output `object`: 200 ok object
  * is_free_move **required** `boolean`: Is free-move enabled
  * is_registered **required** `boolean`: Does the fleet have an active fleet advertisement
  * is_voice_enabled **required** `boolean`: Is EVE Voice enabled
  * motd **required** `string`: Fleet MOTD in CCP flavoured HTML

### put_fleets_fleet_id
Update settings about a fleet

---
Alternate route: `/dev/fleets/{fleet_id}/`

Alternate route: `/legacy/fleets/{fleet_id}/`

Alternate route: `/v1/fleets/{fleet_id}/`



```js
evetech.put_fleets_fleet_id({
  "fleet_id": 0,
  "new_settings": {}
}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * fleet_id **required** `integer`: ID for a fleet
  * new_settings **required** `object`: new_settings object
    * is_free_move `boolean`: Should free-move be enabled in the fleet
    * motd `string`: New fleet MOTD in CCP flavoured HTML
  * token `string`: Access token to use if unable to set a header

#### Output
*Output schema unknown*

### get_fleets_fleet_id_members
Return information about fleet members

---
Alternate route: `/dev/fleets/{fleet_id}/members/`

Alternate route: `/legacy/fleets/{fleet_id}/members/`

Alternate route: `/v1/fleets/{fleet_id}/members/`

---
This route is cached for up to 5 seconds


```js
evetech.get_fleets_fleet_id_members({
  "fleet_id": 0
}, context)
```

#### Input
* input `object`
  * Accept-Language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * fleet_id **required** `integer`: ID for a fleet
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response, takes precedence over Accept-Language
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * character_id **required** `integer`: character_id integer
    * join_time **required** `string`: join_time string
    * role **required** `string` (values: fleet_commander, wing_commander, squad_commander, squad_member): Member’s role in fleet
    * role_name **required** `string`: Localized role names
    * ship_type_id **required** `integer`: ship_type_id integer
    * solar_system_id **required** `integer`: Solar system the member is located in
    * squad_id **required** `integer`: ID of the squad the member is in. If not applicable, will be set to -1
    * station_id `integer`: Station in which the member is docked in, if applicable
    * takes_fleet_warp **required** `boolean`: Whether the member take fleet warps
    * wing_id **required** `integer`: ID of the wing the member is in. If not applicable, will be set to -1

### post_fleets_fleet_id_members
Invite a character into the fleet. If a character has a CSPA charge set it is not possible to invite them to the fleet using ESI

---
Alternate route: `/dev/fleets/{fleet_id}/members/`

Alternate route: `/legacy/fleets/{fleet_id}/members/`

Alternate route: `/v1/fleets/{fleet_id}/members/`



```js
evetech.post_fleets_fleet_id_members({
  "fleet_id": 0,
  "invitation": {
    "character_id": 0,
    "role": ""
  }
}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * fleet_id **required** `integer`: ID for a fleet
  * invitation **required** `object`: invitation object
    * character_id **required** `integer`: The character you want to invite
    * role **required** `string` (values: fleet_commander, wing_commander, squad_commander, squad_member): If a character is invited with the `fleet_commander` role, neither `wing_id` or `squad_id` should be specified. If a character is invited with the `wing_commander` role, only `wing_id` should be specified. If a character is invited with the `squad_commander` role, both `wing_id` and `squad_id` should be specified. If a character is invited with the `squad_member` role, `wing_id` and `squad_id` should either both be specified or not specified at all. If they aren’t specified, the invited character will join any squad with available positions.
    * squad_id `integer`: squad_id integer
    * wing_id `integer`: wing_id integer
  * token `string`: Access token to use if unable to set a header

#### Output
*Output schema unknown*

### delete_fleets_fleet_id_members_member_id
Kick a fleet member

---
Alternate route: `/dev/fleets/{fleet_id}/members/{member_id}/`

Alternate route: `/legacy/fleets/{fleet_id}/members/{member_id}/`

Alternate route: `/v1/fleets/{fleet_id}/members/{member_id}/`



```js
evetech.delete_fleets_fleet_id_members_member_id({
  "fleet_id": 0,
  "member_id": 0
}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * fleet_id **required** `integer`: ID for a fleet
  * member_id **required** `integer`: The character ID of a member in this fleet
  * token `string`: Access token to use if unable to set a header

#### Output
*Output schema unknown*

### put_fleets_fleet_id_members_member_id
Move a fleet member around

---
Alternate route: `/dev/fleets/{fleet_id}/members/{member_id}/`

Alternate route: `/legacy/fleets/{fleet_id}/members/{member_id}/`

Alternate route: `/v1/fleets/{fleet_id}/members/{member_id}/`



```js
evetech.put_fleets_fleet_id_members_member_id({
  "fleet_id": 0,
  "member_id": 0,
  "movement": {
    "role": ""
  }
}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * fleet_id **required** `integer`: ID for a fleet
  * member_id **required** `integer`: The character ID of a member in this fleet
  * movement **required** `object`: movement object
    * role **required** `string` (values: fleet_commander, wing_commander, squad_commander, squad_member): If a character is moved to the `fleet_commander` role, neither `wing_id` or `squad_id` should be specified. If a character is moved to the `wing_commander` role, only `wing_id` should be specified. If a character is moved to the `squad_commander` role, both `wing_id` and `squad_id` should be specified. If a character is moved to the `squad_member` role, both `wing_id` and `squad_id` should be specified.
    * squad_id `integer`: squad_id integer
    * wing_id `integer`: wing_id integer
  * token `string`: Access token to use if unable to set a header

#### Output
*Output schema unknown*

### delete_fleets_fleet_id_squads_squad_id
Delete a fleet squad, only empty squads can be deleted

---
Alternate route: `/dev/fleets/{fleet_id}/squads/{squad_id}/`

Alternate route: `/legacy/fleets/{fleet_id}/squads/{squad_id}/`

Alternate route: `/v1/fleets/{fleet_id}/squads/{squad_id}/`



```js
evetech.delete_fleets_fleet_id_squads_squad_id({
  "fleet_id": 0,
  "squad_id": 0
}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * fleet_id **required** `integer`: ID for a fleet
  * squad_id **required** `integer`: The squad to delete
  * token `string`: Access token to use if unable to set a header

#### Output
*Output schema unknown*

### put_fleets_fleet_id_squads_squad_id
Rename a fleet squad

---
Alternate route: `/dev/fleets/{fleet_id}/squads/{squad_id}/`

Alternate route: `/legacy/fleets/{fleet_id}/squads/{squad_id}/`

Alternate route: `/v1/fleets/{fleet_id}/squads/{squad_id}/`



```js
evetech.put_fleets_fleet_id_squads_squad_id({
  "fleet_id": 0,
  "naming": {
    "name": ""
  },
  "squad_id": 0
}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * fleet_id **required** `integer`: ID for a fleet
  * naming **required** `object`: naming object
    * name **required** `string`: name string
  * squad_id **required** `integer`: The squad to rename
  * token `string`: Access token to use if unable to set a header

#### Output
*Output schema unknown*

### get_fleets_fleet_id_wings
Return information about wings in a fleet

---
Alternate route: `/dev/fleets/{fleet_id}/wings/`

Alternate route: `/legacy/fleets/{fleet_id}/wings/`

Alternate route: `/v1/fleets/{fleet_id}/wings/`

---
This route is cached for up to 5 seconds


```js
evetech.get_fleets_fleet_id_wings({
  "fleet_id": 0
}, context)
```

#### Input
* input `object`
  * Accept-Language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * fleet_id **required** `integer`: ID for a fleet
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response, takes precedence over Accept-Language
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * id **required** `integer`: id integer
    * name **required** `string`: name string
    * squads **required** `array`: squads array
      * items `object`: squad object
        * id **required** `integer`: id integer
        * name **required** `string`: name string

### post_fleets_fleet_id_wings
Create a new wing in a fleet

---
Alternate route: `/dev/fleets/{fleet_id}/wings/`

Alternate route: `/legacy/fleets/{fleet_id}/wings/`

Alternate route: `/v1/fleets/{fleet_id}/wings/`



```js
evetech.post_fleets_fleet_id_wings({
  "fleet_id": 0
}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * fleet_id **required** `integer`: ID for a fleet
  * token `string`: Access token to use if unable to set a header

#### Output
* output `object`: 201 created object
  * wing_id **required** `integer`: The wing_id of the newly created wing

### delete_fleets_fleet_id_wings_wing_id
Delete a fleet wing, only empty wings can be deleted. The wing may contain squads, but the squads must be empty

---
Alternate route: `/dev/fleets/{fleet_id}/wings/{wing_id}/`

Alternate route: `/legacy/fleets/{fleet_id}/wings/{wing_id}/`

Alternate route: `/v1/fleets/{fleet_id}/wings/{wing_id}/`



```js
evetech.delete_fleets_fleet_id_wings_wing_id({
  "fleet_id": 0,
  "wing_id": 0
}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * fleet_id **required** `integer`: ID for a fleet
  * token `string`: Access token to use if unable to set a header
  * wing_id **required** `integer`: The wing to delete

#### Output
*Output schema unknown*

### put_fleets_fleet_id_wings_wing_id
Rename a fleet wing

---
Alternate route: `/dev/fleets/{fleet_id}/wings/{wing_id}/`

Alternate route: `/legacy/fleets/{fleet_id}/wings/{wing_id}/`

Alternate route: `/v1/fleets/{fleet_id}/wings/{wing_id}/`



```js
evetech.put_fleets_fleet_id_wings_wing_id({
  "fleet_id": 0,
  "naming": {
    "name": ""
  },
  "wing_id": 0
}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * fleet_id **required** `integer`: ID for a fleet
  * naming **required** `object`: naming object
    * name **required** `string`: name string
  * token `string`: Access token to use if unable to set a header
  * wing_id **required** `integer`: The wing to rename

#### Output
*Output schema unknown*

### post_fleets_fleet_id_wings_wing_id_squads
Create a new squad in a fleet

---
Alternate route: `/dev/fleets/{fleet_id}/wings/{wing_id}/squads/`

Alternate route: `/legacy/fleets/{fleet_id}/wings/{wing_id}/squads/`

Alternate route: `/v1/fleets/{fleet_id}/wings/{wing_id}/squads/`



```js
evetech.post_fleets_fleet_id_wings_wing_id_squads({
  "fleet_id": 0,
  "wing_id": 0
}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * fleet_id **required** `integer`: ID for a fleet
  * token `string`: Access token to use if unable to set a header
  * wing_id **required** `integer`: The wing_id to create squad in

#### Output
* output `object`: 201 created object
  * squad_id **required** `integer`: The squad_id of the newly created squad

### get_fw_leaderboards
Top 4 leaderboard of factions for kills and victory points separated by total, last week and yesterday.

---
Alternate route: `/dev/fw/leaderboards/`

Alternate route: `/legacy/fw/leaderboards/`

Alternate route: `/v1/fw/leaderboards/`

---
This route expires daily at 11:05


```js
evetech.get_fw_leaderboards({}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `object`: 200 ok object
  * kills **required** `object`: Top 4 rankings of factions by number of kills from yesterday, last week and in total.
    * active_total **required** `array`: Top 4 ranking of factions active in faction warfare by total kills. A faction is considered "active" if they have participated in faction warfare in the past 14 days.
      * items `object`: active_total object
        * amount `integer`: Amount of kills
        * faction_id `integer`: faction_id integer
    * last_week **required** `array`: Top 4 ranking of factions by kills in the past week
      * items `object`: last_week object
        * amount `integer`: Amount of kills
        * faction_id `integer`: faction_id integer
    * yesterday **required** `array`: Top 4 ranking of factions by kills in the past day
      * items `object`: yesterday object
        * amount `integer`: Amount of kills
        * faction_id `integer`: faction_id integer
  * victory_points **required** `object`: Top 4 rankings of factions by victory points from yesterday, last week and in total
    * active_total **required** `array`: Top 4 ranking of factions active in faction warfare by total victory points. A faction is considered "active" if they have participated in faction warfare in the past 14 days.
      * items `object`: active_total object
        * amount `integer`: Amount of victory points
        * faction_id `integer`: faction_id integer
    * last_week **required** `array`: Top 4 ranking of factions by victory points in the past week
      * items `object`: last_week object
        * amount `integer`: Amount of victory points
        * faction_id `integer`: faction_id integer
    * yesterday **required** `array`: Top 4 ranking of factions by victory points in the past day
      * items `object`: yesterday object
        * amount `integer`: Amount of victory points
        * faction_id `integer`: faction_id integer

### get_fw_leaderboards_characters
Top 100 leaderboard of pilots for kills and victory points separated by total, last week and yesterday.

---
Alternate route: `/dev/fw/leaderboards/characters/`

Alternate route: `/legacy/fw/leaderboards/characters/`

Alternate route: `/v1/fw/leaderboards/characters/`

---
This route expires daily at 11:05


```js
evetech.get_fw_leaderboards_characters({}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `object`: 200 ok object
  * kills **required** `object`: Top 100 rankings of pilots by number of kills from yesterday, last week and in total.
    * active_total **required** `array`: Top 100 ranking of pilots active in faction warfare by total kills. A pilot is considered "active" if they have participated in faction warfare in the past 14 days.
      * items `object`: active_total object
        * amount `integer`: Amount of kills
        * character_id `integer`: character_id integer
    * last_week **required** `array`: Top 100 ranking of pilots by kills in the past week
      * items `object`: last_week object
        * amount `integer`: Amount of kills
        * character_id `integer`: character_id integer
    * yesterday **required** `array`: Top 100 ranking of pilots by kills in the past day
      * items `object`: yesterday object
        * amount `integer`: Amount of kills
        * character_id `integer`: character_id integer
  * victory_points **required** `object`: Top 100 rankings of pilots by victory points from yesterday, last week and in total
    * active_total **required** `array`: Top 100 ranking of pilots active in faction warfare by total victory points. A pilot is considered "active" if they have participated in faction warfare in the past 14 days.
      * items `object`: active_total object
        * amount `integer`: Amount of victory points
        * character_id `integer`: character_id integer
    * last_week **required** `array`: Top 100 ranking of pilots by victory points in the past week
      * items `object`: last_week object
        * amount `integer`: Amount of victory points
        * character_id `integer`: character_id integer
    * yesterday **required** `array`: Top 100 ranking of pilots by victory points in the past day
      * items `object`: yesterday object
        * amount `integer`: Amount of victory points
        * character_id `integer`: character_id integer

### get_fw_leaderboards_corporations
Top 10 leaderboard of corporations for kills and victory points separated by total, last week and yesterday.

---
Alternate route: `/dev/fw/leaderboards/corporations/`

Alternate route: `/legacy/fw/leaderboards/corporations/`

Alternate route: `/v1/fw/leaderboards/corporations/`

---
This route expires daily at 11:05


```js
evetech.get_fw_leaderboards_corporations({}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `object`: 200 ok object
  * kills **required** `object`: Top 10 rankings of corporations by number of kills from yesterday, last week and in total.
    * active_total **required** `array`: Top 10 ranking of corporations active in faction warfare by total kills. A corporation is considered "active" if they have participated in faction warfare in the past 14 days.
      * items `object`: active_total object
        * amount `integer`: Amount of kills
        * corporation_id `integer`: corporation_id integer
    * last_week **required** `array`: Top 10 ranking of corporations by kills in the past week
      * items `object`: last_week object
        * amount `integer`: Amount of kills
        * corporation_id `integer`: corporation_id integer
    * yesterday **required** `array`: Top 10 ranking of corporations by kills in the past day
      * items `object`: yesterday object
        * amount `integer`: Amount of kills
        * corporation_id `integer`: corporation_id integer
  * victory_points **required** `object`: Top 10 rankings of corporations by victory points from yesterday, last week and in total
    * active_total **required** `array`: Top 10 ranking of corporations active in faction warfare by total victory points. A corporation is considered "active" if they have participated in faction warfare in the past 14 days.
      * items `object`: active_total object
        * amount `integer`: Amount of victory points
        * corporation_id `integer`: corporation_id integer
    * last_week **required** `array`: Top 10 ranking of corporations by victory points in the past week
      * items `object`: last_week object
        * amount `integer`: Amount of victory points
        * corporation_id `integer`: corporation_id integer
    * yesterday **required** `array`: Top 10 ranking of corporations by victory points in the past day
      * items `object`: yesterday object
        * amount `integer`: Amount of victory points
        * corporation_id `integer`: corporation_id integer

### get_fw_stats
Statistical overviews of factions involved in faction warfare

---
Alternate route: `/dev/fw/stats/`

Alternate route: `/legacy/fw/stats/`

Alternate route: `/v1/fw/stats/`

---
This route expires daily at 11:05


```js
evetech.get_fw_stats({}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * faction_id **required** `integer`: faction_id integer
    * kills **required** `object`: Summary of kills against an enemy faction for the given faction
      * last_week **required** `integer`: Last week's total number of kills against enemy factions
      * total **required** `integer`: Total number of kills against enemy factions since faction warfare began
      * yesterday **required** `integer`: Yesterday's total number of kills against enemy factions
    * pilots **required** `integer`: How many pilots fight for the given faction
    * systems_controlled **required** `integer`: The number of solar systems controlled by the given faction
    * victory_points **required** `object`: Summary of victory points gained for the given faction
      * last_week **required** `integer`: Last week's victory points gained
      * total **required** `integer`: Total victory points gained since faction warfare began
      * yesterday **required** `integer`: Yesterday's victory points gained

### get_fw_systems
An overview of the current ownership of faction warfare solar systems

---
Alternate route: `/legacy/fw/systems/`

Alternate route: `/v1/fw/systems/`

---
This route is cached for up to 1800 seconds

---
Warning: This route has an upgrade available.

---
[Diff of the upcoming changes](https://esi.evetech.net/diff/latest/dev/#GET-/fw/systems/)


```js
evetech.get_fw_systems({}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * contested **required** `boolean`: contested boolean
    * occupier_faction_id **required** `integer`: occupier_faction_id integer
    * owner_faction_id **required** `integer`: owner_faction_id integer
    * solar_system_id **required** `integer`: solar_system_id integer
    * victory_points **required** `integer`: victory_points integer
    * victory_points_threshold **required** `integer`: victory_points_threshold integer

### get_fw_wars
Data about which NPC factions are at war

---
Alternate route: `/dev/fw/wars/`

Alternate route: `/legacy/fw/wars/`

Alternate route: `/v1/fw/wars/`

---
This route expires daily at 11:05


```js
evetech.get_fw_wars({}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: List of factions at war
  * items `object`: 200 ok object
    * against_id **required** `integer`: The faction ID of the enemy faction.
    * faction_id **required** `integer`: faction_id integer

### get_incursions
Return a list of current incursions

---
Alternate route: `/dev/incursions/`

Alternate route: `/legacy/incursions/`

Alternate route: `/v1/incursions/`

---
This route is cached for up to 300 seconds


```js
evetech.get_incursions({}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * constellation_id **required** `integer`: The constellation id in which this incursion takes place
    * faction_id **required** `integer`: The attacking faction's id
    * has_boss **required** `boolean`: Whether the final encounter has boss or not
    * infested_solar_systems **required** `array`: A list of infested solar system ids that are a part of this incursion
      * items `integer`: infested_solar_system integer
    * influence **required** `number`: Influence of this incursion as a float from 0 to 1
    * staging_solar_system_id **required** `integer`: Staging solar system for this incursion
    * state **required** `string` (values: withdrawing, mobilizing, established): The state of this incursion
    * type **required** `string`: The type of this incursion

### get_industry_facilities
Return a list of industry facilities

---
Alternate route: `/dev/industry/facilities/`

Alternate route: `/legacy/industry/facilities/`

Alternate route: `/v1/industry/facilities/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_industry_facilities({}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * facility_id **required** `integer`: ID of the facility
    * owner_id **required** `integer`: Owner of the facility
    * region_id **required** `integer`: Region ID where the facility is
    * solar_system_id **required** `integer`: Solar system ID where the facility is
    * tax `number`: Tax imposed by the facility
    * type_id **required** `integer`: Type ID of the facility

### get_industry_systems
Return cost indices for solar systems

---
Alternate route: `/dev/industry/systems/`

Alternate route: `/legacy/industry/systems/`

Alternate route: `/v1/industry/systems/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_industry_systems({}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * cost_indices **required** `array`: cost_indices array
      * items `object`: cost_indice object
        * activity **required** `string` (values: copying, duplicating, invention, manufacturing, none, reaction, researching_material_efficiency, researching_technology, researching_time_efficiency, reverse_engineering): activity string
        * cost_index **required** `number`: cost_index number
    * solar_system_id **required** `integer`: solar_system_id integer

### get_insurance_prices
Return available insurance levels for all ship types

---
Alternate route: `/dev/insurance/prices/`

Alternate route: `/legacy/insurance/prices/`

Alternate route: `/v1/insurance/prices/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_insurance_prices({}, context)
```

#### Input
* input `object`
  * Accept-Language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response, takes precedence over Accept-Language

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * levels **required** `array`: A list of a available insurance levels for this ship type
      * items `object`: level object
        * cost **required** `number`: cost number
        * name **required** `string`: Localized insurance level
        * payout **required** `number`: payout number
    * type_id **required** `integer`: type_id integer

### get_killmails_killmail_id_killmail_hash
Return a single killmail from its ID and hash

---
Alternate route: `/dev/killmails/{killmail_id}/{killmail_hash}/`

Alternate route: `/legacy/killmails/{killmail_id}/{killmail_hash}/`

Alternate route: `/v1/killmails/{killmail_id}/{killmail_hash}/`

---
This route is cached for up to 1209600 seconds


```js
evetech.get_killmails_killmail_id_killmail_hash({
  "killmail_hash": "",
  "killmail_id": 0
}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * killmail_hash **required** `string`: The killmail hash for verification
  * killmail_id **required** `integer`: The killmail ID to be queried

#### Output
* output `object`: 200 ok object
  * attackers **required** `array`: attackers array
    * items `object`: attacker object
      * alliance_id `integer`: alliance_id integer
      * character_id `integer`: character_id integer
      * corporation_id `integer`: corporation_id integer
      * damage_done **required** `integer`: damage_done integer
      * faction_id `integer`: faction_id integer
      * final_blow **required** `boolean`: Was the attacker the one to achieve the final blow
      * security_status **required** `number`: Security status for the attacker
      * ship_type_id `integer`: What ship was the attacker flying
      * weapon_type_id `integer`: What weapon was used by the attacker for the kill
  * killmail_id **required** `integer`: ID of the killmail
  * killmail_time **required** `string`: Time that the victim was killed and the killmail generated
  * moon_id `integer`: Moon if the kill took place at one
  * solar_system_id **required** `integer`: Solar system that the kill took place in
  * victim **required** `object`: victim object
    * alliance_id `integer`: alliance_id integer
    * character_id `integer`: character_id integer
    * corporation_id `integer`: corporation_id integer
    * damage_taken **required** `integer`: How much total damage was taken by the victim
    * faction_id `integer`: faction_id integer
    * items `array`: items array
      * items `object`: item object
        * flag **required** `integer`: Flag for the location of the item
        * item_type_id **required** `integer`: item_type_id integer
        * items `array`: items array
          * items `object`: item object
            * flag **required** `integer`: flag integer
            * item_type_id **required** `integer`: item_type_id integer
            * quantity_destroyed `integer`: quantity_destroyed integer
            * quantity_dropped `integer`: quantity_dropped integer
            * singleton **required** `integer`: singleton integer
        * quantity_destroyed `integer`: How many of the item were destroyed if any
        * quantity_dropped `integer`: How many of the item were dropped if any
        * singleton **required** `integer`: singleton integer
    * position `object`: Coordinates of the victim in Cartesian space relative to the Sun
      * x **required** `number`: x number
      * y **required** `number`: y number
      * z **required** `number`: z number
    * ship_type_id **required** `integer`: The ship that the victim was piloting and was destroyed
  * war_id `integer`: War if the killmail is generated in relation to an official war

### get_loyalty_stores_corporation_id_offers
Return a list of offers from a specific corporation's loyalty store

---
Alternate route: `/dev/loyalty/stores/{corporation_id}/offers/`

Alternate route: `/legacy/loyalty/stores/{corporation_id}/offers/`

Alternate route: `/v1/loyalty/stores/{corporation_id}/offers/`

---
This route expires daily at 11:05


```js
evetech.get_loyalty_stores_corporation_id_offers({
  "corporation_id": 0
}, context)
```

#### Input
* input `object`
  * corporation_id **required** `integer`: An EVE corporation ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * ak_cost `integer`: Analysis kredit cost
    * isk_cost **required** `integer`: isk_cost integer
    * lp_cost **required** `integer`: lp_cost integer
    * offer_id **required** `integer`: offer_id integer
    * quantity **required** `integer`: quantity integer
    * required_items **required** `array`: required_items array
      * items `object`: required_item object
        * quantity **required** `integer`: quantity integer
        * type_id **required** `integer`: type_id integer
    * type_id **required** `integer`: type_id integer

### get_markets_groups
Get a list of item groups

---
Alternate route: `/dev/markets/groups/`

Alternate route: `/legacy/markets/groups/`

Alternate route: `/v1/markets/groups/`

---
This route expires daily at 11:05


```js
evetech.get_markets_groups({}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: 200 ok array
  * items `integer`: 200 ok integer

### get_markets_groups_market_group_id
Get information on an item group

---
Alternate route: `/dev/markets/groups/{market_group_id}/`

Alternate route: `/legacy/markets/groups/{market_group_id}/`

Alternate route: `/v1/markets/groups/{market_group_id}/`

---
This route expires daily at 11:05


```js
evetech.get_markets_groups_market_group_id({
  "market_group_id": 0
}, context)
```

#### Input
* input `object`
  * Accept-Language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response, takes precedence over Accept-Language
  * market_group_id **required** `integer`: An Eve item group ID

#### Output
* output `object`: 200 ok object
  * description **required** `string`: description string
  * market_group_id **required** `integer`: market_group_id integer
  * name **required** `string`: name string
  * parent_group_id `integer`: parent_group_id integer
  * types **required** `array`: types array
    * items `integer`: type integer

### get_markets_prices
Return a list of prices

---
Alternate route: `/dev/markets/prices/`

Alternate route: `/legacy/markets/prices/`

Alternate route: `/v1/markets/prices/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_markets_prices({}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * adjusted_price `number`: adjusted_price number
    * average_price `number`: average_price number
    * type_id **required** `integer`: type_id integer

### get_markets_structures_structure_id
Return all orders in a structure

---
Alternate route: `/dev/markets/structures/{structure_id}/`

Alternate route: `/legacy/markets/structures/{structure_id}/`

Alternate route: `/v1/markets/structures/{structure_id}/`

---
This route is cached for up to 300 seconds


```js
evetech.get_markets_structures_structure_id({
  "structure_id": 0
}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * structure_id **required** `integer`: Return orders in this structure
  * token `string`: Access token to use if unable to set a header

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * duration **required** `integer`: duration integer
    * is_buy_order **required** `boolean`: is_buy_order boolean
    * issued **required** `string`: issued string
    * location_id **required** `integer`: location_id integer
    * min_volume **required** `integer`: min_volume integer
    * order_id **required** `integer`: order_id integer
    * price **required** `number`: price number
    * range **required** `string` (values: station, region, solarsystem, 1, 2, 3, 4, 5, 10, 20, 30, 40): range string
    * type_id **required** `integer`: type_id integer
    * volume_remain **required** `integer`: volume_remain integer
    * volume_total **required** `integer`: volume_total integer

### get_markets_region_id_history
Return a list of historical market statistics for the specified type in a region

---
Alternate route: `/dev/markets/{region_id}/history/`

Alternate route: `/legacy/markets/{region_id}/history/`

Alternate route: `/v1/markets/{region_id}/history/`

---
This route expires daily at 11:05


```js
evetech.get_markets_region_id_history({
  "region_id": 0,
  "type_id": 0
}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * region_id **required** `integer`: Return statistics in this region
  * type_id **required** `integer`: Return statistics for this type

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * average **required** `number`: average number
    * date **required** `string`: The date of this historical statistic entry
    * highest **required** `number`: highest number
    * lowest **required** `number`: lowest number
    * order_count **required** `integer`: Total number of orders happened that day
    * volume **required** `integer`: Total

### get_markets_region_id_orders
Return a list of orders in a region

---
Alternate route: `/dev/markets/{region_id}/orders/`

Alternate route: `/legacy/markets/{region_id}/orders/`

Alternate route: `/v1/markets/{region_id}/orders/`

---
This route is cached for up to 300 seconds


```js
evetech.get_markets_region_id_orders({
  "order_type": "",
  "region_id": 0
}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * order_type **required** `string` (values: buy, sell, all): Filter buy/sell orders, return all orders by default. If you query without type_id, we always return both buy and sell orders.
  * page `integer`: Which page of results to return
  * region_id **required** `integer`: Return orders in this region
  * type_id `integer`: Return orders only for this type

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * duration **required** `integer`: duration integer
    * is_buy_order **required** `boolean`: is_buy_order boolean
    * issued **required** `string`: issued string
    * location_id **required** `integer`: location_id integer
    * min_volume **required** `integer`: min_volume integer
    * order_id **required** `integer`: order_id integer
    * price **required** `number`: price number
    * range **required** `string` (values: station, region, solarsystem, 1, 2, 3, 4, 5, 10, 20, 30, 40): range string
    * system_id **required** `integer`: The solar system this order was placed
    * type_id **required** `integer`: type_id integer
    * volume_remain **required** `integer`: volume_remain integer
    * volume_total **required** `integer`: volume_total integer

### get_markets_region_id_types
Return a list of type IDs that have active orders in the region, for efficient market indexing.

---
Alternate route: `/dev/markets/{region_id}/types/`

Alternate route: `/legacy/markets/{region_id}/types/`

Alternate route: `/v1/markets/{region_id}/types/`

---
This route is cached for up to 600 seconds


```js
evetech.get_markets_region_id_types({
  "region_id": 0
}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * region_id **required** `integer`: Return statistics in this region

#### Output
* output `array`: 200 ok array
  * items `integer`: 200 ok integer

### get_opportunities_groups
Return a list of opportunities groups

---
Alternate route: `/dev/opportunities/groups/`

Alternate route: `/legacy/opportunities/groups/`

Alternate route: `/v1/opportunities/groups/`

---
This route expires daily at 11:05


```js
evetech.get_opportunities_groups({}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: 200 ok array
  * items `integer`: 200 ok integer

### get_opportunities_groups_group_id
Return information of an opportunities group

---
Alternate route: `/dev/opportunities/groups/{group_id}/`

Alternate route: `/legacy/opportunities/groups/{group_id}/`

Alternate route: `/v1/opportunities/groups/{group_id}/`

---
This route expires daily at 11:05


```js
evetech.get_opportunities_groups_group_id({
  "group_id": 0
}, context)
```

#### Input
* input `object`
  * Accept-Language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * group_id **required** `integer`: ID of an opportunities group
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response, takes precedence over Accept-Language

#### Output
* output `object`: 200 ok object
  * connected_groups **required** `array`: The groups that are connected to this group on the opportunities map
    * items `integer`: connected_group integer
  * description **required** `string`: description string
  * group_id **required** `integer`: group_id integer
  * name **required** `string`: name string
  * notification **required** `string`: notification string
  * required_tasks **required** `array`: Tasks need to complete for this group
    * items `integer`: required_task integer

### get_opportunities_tasks
Return a list of opportunities tasks

---
Alternate route: `/dev/opportunities/tasks/`

Alternate route: `/legacy/opportunities/tasks/`

Alternate route: `/v1/opportunities/tasks/`

---
This route expires daily at 11:05


```js
evetech.get_opportunities_tasks({}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: 200 ok array
  * items `integer`: 200 ok integer

### get_opportunities_tasks_task_id
Return information of an opportunities task

---
Alternate route: `/dev/opportunities/tasks/{task_id}/`

Alternate route: `/legacy/opportunities/tasks/{task_id}/`

Alternate route: `/v1/opportunities/tasks/{task_id}/`

---
This route expires daily at 11:05


```js
evetech.get_opportunities_tasks_task_id({
  "task_id": 0
}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * task_id **required** `integer`: ID of an opportunities task

#### Output
* output `object`: 200 ok object
  * description **required** `string`: description string
  * name **required** `string`: name string
  * notification **required** `string`: notification string
  * task_id **required** `integer`: task_id integer

### get_route_origin_destination
Get the systems between origin and destination

---
Alternate route: `/dev/route/{origin}/{destination}/`

Alternate route: `/legacy/route/{origin}/{destination}/`

Alternate route: `/v1/route/{origin}/{destination}/`

---
This route is cached for up to 86400 seconds


```js
evetech.get_route_origin_destination({
  "destination": 0,
  "origin": 0
}, context)
```

#### Input
* input `object`
  * avoid `array`: avoid solar system ID(s)
  * connections `array`: connected solar system pairs
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * destination **required** `integer`: destination solar system ID
  * flag `string` (values: shortest, secure, insecure): route security preference
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * origin **required** `integer`: origin solar system ID

#### Output
* output `array`: Solar systems in route
  * items `integer`: Solar system in route

### get_search
Search for entities that match a given sub-string.

---
Alternate route: `/dev/search/`

Alternate route: `/v2/search/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_search({
  "categories": [],
  "search": ""
}, context)
```

#### Input
* input `object`
  * Accept-Language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response
  * categories **required** `array`: Type of entities to search for
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response, takes precedence over Accept-Language
  * search **required** `string`: The string to search on
  * strict `boolean`: Whether the search should be a strict match

#### Output
* output `object`: 200 ok object
  * agent `array`: agent array
    * items `integer`: agent integer
  * alliance `array`: alliance array
    * items `integer`: alliance integer
  * character `array`: character array
    * items `integer`: character integer
  * constellation `array`: constellation array
    * items `integer`: constellation integer
  * corporation `array`: corporation array
    * items `integer`: corporation integer
  * faction `array`: faction array
    * items `integer`: faction integer
  * inventory_type `array`: inventory_type array
    * items `integer`: inventory_type integer
  * region `array`: region array
    * items `integer`: region integer
  * solar_system `array`: solar_system array
    * items `integer`: solar_system integer
  * station `array`: station array
    * items `integer`: station integer

### get_sovereignty_campaigns
Shows sovereignty data for campaigns.

---
Alternate route: `/dev/sovereignty/campaigns/`

Alternate route: `/legacy/sovereignty/campaigns/`

Alternate route: `/v1/sovereignty/campaigns/`

---
This route is cached for up to 5 seconds


```js
evetech.get_sovereignty_campaigns({}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * attackers_score `number`: Score for all attacking parties, only present in Defense Events.
    * campaign_id **required** `integer`: Unique ID for this campaign.
    * constellation_id **required** `integer`: The constellation in which the campaign will take place.
    * defender_id `integer`: Defending alliance, only present in Defense Events
    * defender_score `number`: Score for the defending alliance, only present in Defense Events.
    * event_type **required** `string` (values: tcu_defense, ihub_defense, station_defense, station_freeport): Type of event this campaign is for. tcu_defense, ihub_defense and station_defense are referred to as "Defense Events", station_freeport as "Freeport Events".
    * participants `array`: Alliance participating and their respective scores, only present in Freeport Events.
      * items `object`: participant object
        * alliance_id **required** `integer`: alliance_id integer
        * score **required** `number`: score number
    * solar_system_id **required** `integer`: The solar system the structure is located in.
    * start_time **required** `string`: Time the event is scheduled to start.
    * structure_id **required** `integer`: The structure item ID that is related to this campaign.

### get_sovereignty_map
Shows sovereignty information for solar systems

---
Alternate route: `/dev/sovereignty/map/`

Alternate route: `/legacy/sovereignty/map/`

Alternate route: `/v1/sovereignty/map/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_sovereignty_map({}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * alliance_id `integer`: alliance_id integer
    * corporation_id `integer`: corporation_id integer
    * faction_id `integer`: faction_id integer
    * system_id **required** `integer`: system_id integer

### get_sovereignty_structures
Shows sovereignty data for structures.

---
Alternate route: `/dev/sovereignty/structures/`

Alternate route: `/legacy/sovereignty/structures/`

Alternate route: `/v1/sovereignty/structures/`

---
This route is cached for up to 120 seconds


```js
evetech.get_sovereignty_structures({}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * alliance_id **required** `integer`: The alliance that owns the structure.
    * solar_system_id **required** `integer`: Solar system in which the structure is located.
    * structure_id **required** `integer`: Unique item ID for this structure.
    * structure_type_id **required** `integer`: A reference to the type of structure this is.
    * vulnerability_occupancy_level `number`: The occupancy level for the next or current vulnerability window. This takes into account all development indexes and capital system bonuses. Also known as Activity Defense Multiplier from in the client. It increases the time that attackers must spend using their entosis links on the structure.
    * vulnerable_end_time `string`: The time at which the next or current vulnerability window ends. At the end of a vulnerability window the next window is recalculated and locked in along with the vulnerabilityOccupancyLevel. If the structure is not in 100% entosis control of the defender, it will go in to 'overtime' and stay vulnerable for as long as that situation persists. Only once the defenders have 100% entosis control and has the vulnerableEndTime passed does the vulnerability interval expire and a new one is calculated.
    * vulnerable_start_time `string`: The next time at which the structure will become vulnerable. Or the start time of the current window if current time is between this and vulnerableEndTime.

### get_status
EVE Server status

---
Alternate route: `/dev/status/`

Alternate route: `/legacy/status/`

Alternate route: `/v1/status/`

---
This route is cached for up to 30 seconds


```js
evetech.get_status({}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `object`: 200 ok object
  * players **required** `integer`: Current online player count
  * server_version **required** `string`: Running version as string
  * start_time **required** `string`: Server start timestamp
  * vip `boolean`: If the server is in VIP mode

### post_ui_autopilot_waypoint
Set a solar system as autopilot waypoint

---
Alternate route: `/dev/ui/autopilot/waypoint/`

Alternate route: `/v2/ui/autopilot/waypoint/`



```js
evetech.post_ui_autopilot_waypoint({
  "add_to_beginning": true,
  "clear_other_waypoints": true,
  "destination_id": 0
}, context)
```

#### Input
* input `object`
  * add_to_beginning **required** `boolean`: Whether this solar system should be added to the beginning of all waypoints
  * clear_other_waypoints **required** `boolean`: Whether clean other waypoints beforing adding this one
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * destination_id **required** `integer`: The destination to travel to, can be solar system, station or structure's id
  * token `string`: Access token to use if unable to set a header

#### Output
*Output schema unknown*

### post_ui_openwindow_contract
Open the contract window inside the client

---
Alternate route: `/dev/ui/openwindow/contract/`

Alternate route: `/legacy/ui/openwindow/contract/`

Alternate route: `/v1/ui/openwindow/contract/`



```js
evetech.post_ui_openwindow_contract({
  "contract_id": 0
}, context)
```

#### Input
* input `object`
  * contract_id **required** `integer`: The contract to open
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * token `string`: Access token to use if unable to set a header

#### Output
*Output schema unknown*

### post_ui_openwindow_information
Open the information window for a character, corporation or alliance inside the client

---
Alternate route: `/dev/ui/openwindow/information/`

Alternate route: `/legacy/ui/openwindow/information/`

Alternate route: `/v1/ui/openwindow/information/`



```js
evetech.post_ui_openwindow_information({
  "target_id": 0
}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * target_id **required** `integer`: The target to open
  * token `string`: Access token to use if unable to set a header

#### Output
*Output schema unknown*

### post_ui_openwindow_marketdetails
Open the market details window for a specific typeID inside the client

---
Alternate route: `/dev/ui/openwindow/marketdetails/`

Alternate route: `/legacy/ui/openwindow/marketdetails/`

Alternate route: `/v1/ui/openwindow/marketdetails/`



```js
evetech.post_ui_openwindow_marketdetails({
  "type_id": 0
}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * token `string`: Access token to use if unable to set a header
  * type_id **required** `integer`: The item type to open in market window

#### Output
*Output schema unknown*

### post_ui_openwindow_newmail
Open the New Mail window, according to settings from the request if applicable

---
Alternate route: `/dev/ui/openwindow/newmail/`

Alternate route: `/legacy/ui/openwindow/newmail/`

Alternate route: `/v1/ui/openwindow/newmail/`



```js
evetech.post_ui_openwindow_newmail({
  "new_mail": {
    "subject": "",
    "body": "",
    "recipients": []
  }
}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * new_mail **required** `object`: new_mail object
    * body **required** `string`: body string
    * recipients **required** `array`: recipients array
      * items `integer`: recipient integer
    * subject **required** `string`: subject string
    * to_corp_or_alliance_id `integer`: to_corp_or_alliance_id integer
    * to_mailing_list_id `integer`: Corporations, alliances and mailing lists are all types of mailing groups. You may only send to one mailing group, at a time, so you may fill out either this field or the to_corp_or_alliance_ids field
  * token `string`: Access token to use if unable to set a header

#### Output
*Output schema unknown*

### get_universe_ancestries
Get all character ancestries

---
Alternate route: `/dev/universe/ancestries/`

Alternate route: `/legacy/universe/ancestries/`

Alternate route: `/v1/universe/ancestries/`

---
This route expires daily at 11:05


```js
evetech.get_universe_ancestries({}, context)
```

#### Input
* input `object`
  * Accept-Language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response, takes precedence over Accept-Language

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * bloodline_id **required** `integer`: The bloodline associated with this ancestry
    * description **required** `string`: description string
    * icon_id `integer`: icon_id integer
    * id **required** `integer`: id integer
    * name **required** `string`: name string
    * short_description `string`: short_description string

### get_universe_asteroid_belts_asteroid_belt_id
Get information on an asteroid belt

---
Alternate route: `/dev/universe/asteroid_belts/{asteroid_belt_id}/`

Alternate route: `/legacy/universe/asteroid_belts/{asteroid_belt_id}/`

Alternate route: `/v1/universe/asteroid_belts/{asteroid_belt_id}/`

---
This route expires daily at 11:05


```js
evetech.get_universe_asteroid_belts_asteroid_belt_id({
  "asteroid_belt_id": 0
}, context)
```

#### Input
* input `object`
  * asteroid_belt_id **required** `integer`: asteroid_belt_id integer
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `object`: 200 ok object
  * name **required** `string`: name string
  * position **required** `object`: position object
    * x **required** `number`: x number
    * y **required** `number`: y number
    * z **required** `number`: z number
  * system_id **required** `integer`: The solar system this asteroid belt is in

### get_universe_bloodlines
Get a list of bloodlines

---
Alternate route: `/dev/universe/bloodlines/`

Alternate route: `/legacy/universe/bloodlines/`

Alternate route: `/v1/universe/bloodlines/`

---
This route expires daily at 11:05


```js
evetech.get_universe_bloodlines({}, context)
```

#### Input
* input `object`
  * Accept-Language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response, takes precedence over Accept-Language

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * bloodline_id **required** `integer`: bloodline_id integer
    * charisma **required** `integer`: charisma integer
    * corporation_id **required** `integer`: corporation_id integer
    * description **required** `string`: description string
    * intelligence **required** `integer`: intelligence integer
    * memory **required** `integer`: memory integer
    * name **required** `string`: name string
    * perception **required** `integer`: perception integer
    * race_id **required** `integer`: race_id integer
    * ship_type_id **required** `integer`: ship_type_id integer
    * willpower **required** `integer`: willpower integer

### get_universe_categories
Get a list of item categories

---
Alternate route: `/dev/universe/categories/`

Alternate route: `/legacy/universe/categories/`

Alternate route: `/v1/universe/categories/`

---
This route expires daily at 11:05


```js
evetech.get_universe_categories({}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: 200 ok array
  * items `integer`: 200 ok integer

### get_universe_categories_category_id
Get information of an item category

---
Alternate route: `/dev/universe/categories/{category_id}/`

Alternate route: `/legacy/universe/categories/{category_id}/`

Alternate route: `/v1/universe/categories/{category_id}/`

---
This route expires daily at 11:05


```js
evetech.get_universe_categories_category_id({
  "category_id": 0
}, context)
```

#### Input
* input `object`
  * Accept-Language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response
  * category_id **required** `integer`: An Eve item category ID
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response, takes precedence over Accept-Language

#### Output
* output `object`: 200 ok object
  * category_id **required** `integer`: category_id integer
  * groups **required** `array`: groups array
    * items `integer`: group integer
  * name **required** `string`: name string
  * published **required** `boolean`: published boolean

### get_universe_constellations
Get a list of constellations

---
Alternate route: `/dev/universe/constellations/`

Alternate route: `/legacy/universe/constellations/`

Alternate route: `/v1/universe/constellations/`

---
This route expires daily at 11:05


```js
evetech.get_universe_constellations({}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: 200 ok array
  * items `integer`: 200 ok integer

### get_universe_constellations_constellation_id
Get information on a constellation

---
Alternate route: `/dev/universe/constellations/{constellation_id}/`

Alternate route: `/legacy/universe/constellations/{constellation_id}/`

Alternate route: `/v1/universe/constellations/{constellation_id}/`

---
This route expires daily at 11:05


```js
evetech.get_universe_constellations_constellation_id({
  "constellation_id": 0
}, context)
```

#### Input
* input `object`
  * Accept-Language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response
  * constellation_id **required** `integer`: constellation_id integer
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response, takes precedence over Accept-Language

#### Output
* output `object`: 200 ok object
  * constellation_id **required** `integer`: constellation_id integer
  * name **required** `string`: name string
  * position **required** `object`: position object
    * x **required** `number`: x number
    * y **required** `number`: y number
    * z **required** `number`: z number
  * region_id **required** `integer`: The region this constellation is in
  * systems **required** `array`: systems array
    * items `integer`: system integer

### get_universe_factions
Get a list of factions

---
Alternate route: `/dev/universe/factions/`

Alternate route: `/v2/universe/factions/`

---
This route expires daily at 11:05


```js
evetech.get_universe_factions({}, context)
```

#### Input
* input `object`
  * Accept-Language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response, takes precedence over Accept-Language

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * corporation_id `integer`: corporation_id integer
    * description **required** `string`: description string
    * faction_id **required** `integer`: faction_id integer
    * is_unique **required** `boolean`: is_unique boolean
    * militia_corporation_id `integer`: militia_corporation_id integer
    * name **required** `string`: name string
    * size_factor **required** `number`: size_factor number
    * solar_system_id `integer`: solar_system_id integer
    * station_count **required** `integer`: station_count integer
    * station_system_count **required** `integer`: station_system_count integer

### get_universe_graphics
Get a list of graphics

---
Alternate route: `/dev/universe/graphics/`

Alternate route: `/legacy/universe/graphics/`

Alternate route: `/v1/universe/graphics/`

---
This route expires daily at 11:05


```js
evetech.get_universe_graphics({}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: 200 ok array
  * items `integer`: 200 ok integer

### get_universe_graphics_graphic_id
Get information on a graphic

---
Alternate route: `/dev/universe/graphics/{graphic_id}/`

Alternate route: `/legacy/universe/graphics/{graphic_id}/`

Alternate route: `/v1/universe/graphics/{graphic_id}/`

---
This route expires daily at 11:05


```js
evetech.get_universe_graphics_graphic_id({
  "graphic_id": 0
}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * graphic_id **required** `integer`: graphic_id integer
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `object`: 200 ok object
  * collision_file `string`: collision_file string
  * graphic_file `string`: graphic_file string
  * graphic_id **required** `integer`: graphic_id integer
  * icon_folder `string`: icon_folder string
  * sof_dna `string`: sof_dna string
  * sof_fation_name `string`: sof_fation_name string
  * sof_hull_name `string`: sof_hull_name string
  * sof_race_name `string`: sof_race_name string

### get_universe_groups
Get a list of item groups

---
Alternate route: `/dev/universe/groups/`

Alternate route: `/legacy/universe/groups/`

Alternate route: `/v1/universe/groups/`

---
This route expires daily at 11:05


```js
evetech.get_universe_groups({}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return

#### Output
* output `array`: 200 ok array
  * items `integer`: 200 ok integer

### get_universe_groups_group_id
Get information on an item group

---
Alternate route: `/dev/universe/groups/{group_id}/`

Alternate route: `/legacy/universe/groups/{group_id}/`

Alternate route: `/v1/universe/groups/{group_id}/`

---
This route expires daily at 11:05


```js
evetech.get_universe_groups_group_id({
  "group_id": 0
}, context)
```

#### Input
* input `object`
  * Accept-Language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * group_id **required** `integer`: An Eve item group ID
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response, takes precedence over Accept-Language

#### Output
* output `object`: 200 ok object
  * category_id **required** `integer`: category_id integer
  * group_id **required** `integer`: group_id integer
  * name **required** `string`: name string
  * published **required** `boolean`: published boolean
  * types **required** `array`: types array
    * items `integer`: type integer

### post_universe_ids
Resolve a set of names to IDs in the following categories: agents, alliances, characters, constellations, corporations factions, inventory_types, regions, stations, and systems. Only exact matches will be returned. All names searched for are cached for 12 hours.

---
Alternate route: `/dev/universe/ids/`

Alternate route: `/legacy/universe/ids/`

Alternate route: `/v1/universe/ids/`



```js
evetech.post_universe_ids({
  "names": []
}, context)
```

#### Input
* input `object`
  * Accept-Language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response, takes precedence over Accept-Language
  * names **required** `array`: names array
    * items `string`: name string

#### Output
* output `object`: 200 ok object
  * agents `array`: agents array
    * items `object`: agent object
      * id `integer`: id integer
      * name `string`: name string
  * alliances `array`: alliances array
    * items `object`: alliance object
      * id `integer`: id integer
      * name `string`: name string
  * characters `array`: characters array
    * items `object`: character object
      * id `integer`: id integer
      * name `string`: name string
  * constellations `array`: constellations array
    * items `object`: constellation object
      * id `integer`: id integer
      * name `string`: name string
  * corporations `array`: corporations array
    * items `object`: corporation object
      * id `integer`: id integer
      * name `string`: name string
  * factions `array`: factions array
    * items `object`: faction object
      * id `integer`: id integer
      * name `string`: name string
  * inventory_types `array`: inventory_types array
    * items `object`: inventory_type object
      * id `integer`: id integer
      * name `string`: name string
  * regions `array`: regions array
    * items `object`: region object
      * id `integer`: id integer
      * name `string`: name string
  * stations `array`: stations array
    * items `object`: station object
      * id `integer`: id integer
      * name `string`: name string
  * systems `array`: systems array
    * items `object`: system object
      * id `integer`: id integer
      * name `string`: name string

### get_universe_moons_moon_id
Get information on a moon

---
Alternate route: `/dev/universe/moons/{moon_id}/`

Alternate route: `/legacy/universe/moons/{moon_id}/`

Alternate route: `/v1/universe/moons/{moon_id}/`

---
This route expires daily at 11:05


```js
evetech.get_universe_moons_moon_id({
  "moon_id": 0
}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * moon_id **required** `integer`: moon_id integer

#### Output
* output `object`: 200 ok object
  * moon_id **required** `integer`: moon_id integer
  * name **required** `string`: name string
  * position **required** `object`: position object
    * x **required** `number`: x number
    * y **required** `number`: y number
    * z **required** `number`: z number
  * system_id **required** `integer`: The solar system this moon is in

### post_universe_names
Resolve a set of IDs to names and categories. Supported ID's for resolving are: Characters, Corporations, Alliances, Stations, Solar Systems, Constellations, Regions, Types.

---
Alternate route: `/dev/universe/names/`

Alternate route: `/v2/universe/names/`



```js
evetech.post_universe_names({
  "ids": []
}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * ids **required** `array`: ids array
    * items `integer`: id integer

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * category **required** `string` (values: alliance, character, constellation, corporation, inventory_type, region, solar_system, station): category string
    * id **required** `integer`: id integer
    * name **required** `string`: name string

### get_universe_planets_planet_id
Get information on a planet

---
Alternate route: `/dev/universe/planets/{planet_id}/`

Alternate route: `/legacy/universe/planets/{planet_id}/`

Alternate route: `/v1/universe/planets/{planet_id}/`

---
This route expires daily at 11:05


```js
evetech.get_universe_planets_planet_id({
  "planet_id": 0
}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * planet_id **required** `integer`: planet_id integer

#### Output
* output `object`: 200 ok object
  * name **required** `string`: name string
  * planet_id **required** `integer`: planet_id integer
  * position **required** `object`: position object
    * x **required** `number`: x number
    * y **required** `number`: y number
    * z **required** `number`: z number
  * system_id **required** `integer`: The solar system this planet is in
  * type_id **required** `integer`: type_id integer

### get_universe_races
Get a list of character races

---
Alternate route: `/dev/universe/races/`

Alternate route: `/legacy/universe/races/`

Alternate route: `/v1/universe/races/`

---
This route expires daily at 11:05


```js
evetech.get_universe_races({}, context)
```

#### Input
* input `object`
  * Accept-Language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response, takes precedence over Accept-Language

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * alliance_id **required** `integer`: The alliance generally associated with this race
    * description **required** `string`: description string
    * name **required** `string`: name string
    * race_id **required** `integer`: race_id integer

### get_universe_regions
Get a list of regions

---
Alternate route: `/dev/universe/regions/`

Alternate route: `/legacy/universe/regions/`

Alternate route: `/v1/universe/regions/`

---
This route expires daily at 11:05


```js
evetech.get_universe_regions({}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: 200 ok array
  * items `integer`: 200 ok integer

### get_universe_regions_region_id
Get information on a region

---
Alternate route: `/dev/universe/regions/{region_id}/`

Alternate route: `/legacy/universe/regions/{region_id}/`

Alternate route: `/v1/universe/regions/{region_id}/`

---
This route expires daily at 11:05


```js
evetech.get_universe_regions_region_id({
  "region_id": 0
}, context)
```

#### Input
* input `object`
  * Accept-Language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response, takes precedence over Accept-Language
  * region_id **required** `integer`: region_id integer

#### Output
* output `object`: 200 ok object
  * constellations **required** `array`: constellations array
    * items `integer`: constellation integer
  * description `string`: description string
  * name **required** `string`: name string
  * region_id **required** `integer`: region_id integer

### get_universe_schematics_schematic_id
Get information on a planetary factory schematic

---
Alternate route: `/dev/universe/schematics/{schematic_id}/`

Alternate route: `/legacy/universe/schematics/{schematic_id}/`

Alternate route: `/v1/universe/schematics/{schematic_id}/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_universe_schematics_schematic_id({
  "schematic_id": 0
}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * schematic_id **required** `integer`: A PI schematic ID

#### Output
* output `object`: 200 ok object
  * cycle_time **required** `integer`: Time in seconds to process a run
  * schematic_name **required** `string`: schematic_name string

### get_universe_stargates_stargate_id
Get information on a stargate

---
Alternate route: `/dev/universe/stargates/{stargate_id}/`

Alternate route: `/legacy/universe/stargates/{stargate_id}/`

Alternate route: `/v1/universe/stargates/{stargate_id}/`

---
This route expires daily at 11:05


```js
evetech.get_universe_stargates_stargate_id({
  "stargate_id": 0
}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * stargate_id **required** `integer`: stargate_id integer

#### Output
* output `object`: 200 ok object
  * destination **required** `object`: destination object
    * stargate_id **required** `integer`: The stargate this stargate connects to
    * system_id **required** `integer`: The solar system this stargate connects to
  * name **required** `string`: name string
  * position **required** `object`: position object
    * x **required** `number`: x number
    * y **required** `number`: y number
    * z **required** `number`: z number
  * stargate_id **required** `integer`: stargate_id integer
  * system_id **required** `integer`: The solar system this stargate is in
  * type_id **required** `integer`: type_id integer

### get_universe_stars_star_id
Get information on a star

---
Alternate route: `/dev/universe/stars/{star_id}/`

Alternate route: `/legacy/universe/stars/{star_id}/`

Alternate route: `/v1/universe/stars/{star_id}/`

---
This route expires daily at 11:05


```js
evetech.get_universe_stars_star_id({
  "star_id": 0
}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * star_id **required** `integer`: star_id integer

#### Output
* output `object`: 200 ok object
  * age **required** `integer`: Age of star in years
  * luminosity **required** `number`: luminosity number
  * name **required** `string`: name string
  * radius **required** `integer`: radius integer
  * solar_system_id **required** `integer`: solar_system_id integer
  * spectral_class **required** `string` (values: K2 V, K4 V, G2 V, G8 V, M7 V, K7 V, M2 V, K5 V, M3 V, G0 V, G7 V, G3 V, F9 V, G5 V, F6 V, K8 V, K9 V, K6 V, G9 V, G6 V, G4 VI, G4 V, F8 V, F2 V, F1 V, K3 V, F0 VI, G1 VI, G0 VI, K1 V, M4 V, M1 V, M6 V, M0 V, K2 IV, G2 VI, K0 V, K5 IV, F5 VI, G6 VI, F6 VI, F2 IV, G3 VI, M8 V, F1 VI, K1 IV, F7 V, G5 VI, M5 V, G7 VI, F5 V, F4 VI, F8 VI, K3 IV, F4 IV, F0 V, G7 IV, G8 VI, F2 VI, F4 V, F7 VI, F3 V, G1 V, G9 VI, F3 IV, F9 VI, M9 V, K0 IV, F1 IV, G4 IV, F3 VI, K4 IV, G5 IV, G3 IV, G1 IV, K7 IV, G0 IV, K6 IV, K9 IV, G2 IV, F9 IV, F0 IV, K8 IV, G8 IV, F6 IV, F5 IV, A0, A0IV, A0IV2): spectral_class string
  * temperature **required** `integer`: temperature integer
  * type_id **required** `integer`: type_id integer

### get_universe_stations_station_id
Get information on a station

---
Alternate route: `/dev/universe/stations/{station_id}/`

Alternate route: `/v2/universe/stations/{station_id}/`

---
This route expires daily at 11:05


```js
evetech.get_universe_stations_station_id({
  "station_id": 0
}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * station_id **required** `integer`: station_id integer

#### Output
* output `object`: 200 ok object
  * max_dockable_ship_volume **required** `number`: max_dockable_ship_volume number
  * name **required** `string`: name string
  * office_rental_cost **required** `number`: office_rental_cost number
  * owner `integer`: ID of the corporation that controls this station
  * position **required** `object`: position object
    * x **required** `number`: x number
    * y **required** `number`: y number
    * z **required** `number`: z number
  * race_id `integer`: race_id integer
  * reprocessing_efficiency **required** `number`: reprocessing_efficiency number
  * reprocessing_stations_take **required** `number`: reprocessing_stations_take number
  * services **required** `array`: services array
    * items `string` (values: bounty-missions, assasination-missions, courier-missions, interbus, reprocessing-plant, refinery, market, black-market, stock-exchange, cloning, surgery, dna-therapy, repair-facilities, factory, labratory, gambling, fitting, paintshop, news, storage, insurance, docking, office-rental, jump-clone-facility, loyalty-point-store, navy-offices, security-offices): service string
  * station_id **required** `integer`: station_id integer
  * system_id **required** `integer`: The solar system this station is in
  * type_id **required** `integer`: type_id integer

### get_universe_structures
List all public structures

---
Alternate route: `/dev/universe/structures/`

Alternate route: `/legacy/universe/structures/`

Alternate route: `/v1/universe/structures/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_universe_structures({}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: 200 ok array
  * items `integer`: 200 ok integer

### get_universe_structures_structure_id
Returns information on requested structure, if you are on the ACL. Otherwise, returns "Forbidden" for all inputs.

---
Alternate route: `/dev/universe/structures/{structure_id}/`

Alternate route: `/legacy/universe/structures/{structure_id}/`

Alternate route: `/v1/universe/structures/{structure_id}/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_universe_structures_structure_id({
  "structure_id": 0
}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * structure_id **required** `integer`: An Eve structure ID
  * token `string`: Access token to use if unable to set a header

#### Output
* output `object`: 200 ok object
  * name **required** `string`: The full name of the structure
  * position `object`: Coordinates of the structure in Cartesian space relative to the Sun, in metres.
    * x **required** `number`: x number
    * y **required** `number`: y number
    * z **required** `number`: z number
  * solar_system_id **required** `integer`: solar_system_id integer
  * type_id `integer`: type_id integer

### get_universe_system_jumps
Get the number of jumps in solar systems within the last hour ending at the timestamp of the Last-Modified header, excluding wormhole space. Only systems with jumps will be listed

---
Alternate route: `/dev/universe/system_jumps/`

Alternate route: `/legacy/universe/system_jumps/`

Alternate route: `/v1/universe/system_jumps/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_universe_system_jumps({}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * ship_jumps **required** `integer`: ship_jumps integer
    * system_id **required** `integer`: system_id integer

### get_universe_system_kills
Get the number of ship, pod and NPC kills per solar system within the last hour ending at the timestamp of the Last-Modified header, excluding wormhole space. Only systems with kills will be listed

---
Alternate route: `/dev/universe/system_kills/`

Alternate route: `/v2/universe/system_kills/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_universe_system_kills({}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * npc_kills **required** `integer`: Number of NPC ships killed in this system
    * pod_kills **required** `integer`: Number of pods killed in this system
    * ship_kills **required** `integer`: Number of player ships killed in this system
    * system_id **required** `integer`: system_id integer

### get_universe_systems
Get a list of solar systems

---
Alternate route: `/dev/universe/systems/`

Alternate route: `/legacy/universe/systems/`

Alternate route: `/v1/universe/systems/`

---
This route expires daily at 11:05


```js
evetech.get_universe_systems({}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag

#### Output
* output `array`: 200 ok array
  * items `integer`: 200 ok integer

### get_universe_systems_system_id
Get information on a solar system

---
Alternate route: `/dev/universe/systems/{system_id}/`

Alternate route: `/v3/universe/systems/{system_id}/`

---
This route expires daily at 11:05


```js
evetech.get_universe_systems_system_id({
  "system_id": 0
}, context)
```

#### Input
* input `object`
  * Accept-Language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response, takes precedence over Accept-Language
  * system_id **required** `integer`: system_id integer

#### Output
* output `object`: 200 ok object
  * constellation_id **required** `integer`: The constellation this solar system is in
  * name **required** `string`: name string
  * planets **required** `array`: planets array
    * items `object`: planet object
      * asteroid_belts `array`: asteroid_belts array
        * items `integer`: asteroid_belt integer
      * moons `array`: moons array
        * items `integer`: moon integer
      * planet_id **required** `integer`: planet_id integer
  * position **required** `object`: position object
    * x **required** `number`: x number
    * y **required** `number`: y number
    * z **required** `number`: z number
  * security_class `string`: security_class string
  * security_status **required** `number`: security_status number
  * star_id **required** `integer`: star_id integer
  * stargates `array`: stargates array
    * items `integer`: stargate integer
  * stations `array`: stations array
    * items `integer`: station integer
  * system_id **required** `integer`: system_id integer

### get_universe_types
Get a list of type ids

---
Alternate route: `/dev/universe/types/`

Alternate route: `/legacy/universe/types/`

Alternate route: `/v1/universe/types/`

---
This route expires daily at 11:05


```js
evetech.get_universe_types({}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return

#### Output
* output `array`: 200 ok array
  * items `integer`: 200 ok integer

### get_universe_types_type_id
Get information on a type

---
Alternate route: `/dev/universe/types/{type_id}/`

Alternate route: `/v3/universe/types/{type_id}/`

---
This route expires daily at 11:05


```js
evetech.get_universe_types_type_id({
  "type_id": 0
}, context)
```

#### Input
* input `object`
  * Accept-Language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * language `string` (values: de, en-us, fr, ja, ru, zh): Language to use in the response, takes precedence over Accept-Language
  * type_id **required** `integer`: An Eve item type ID

#### Output
* output `object`: 200 ok object
  * capacity `number`: capacity number
  * description **required** `string`: description string
  * dogma_attributes `array`: dogma_attributes array
    * items `object`: dogma_attribute object
      * attribute_id **required** `integer`: attribute_id integer
      * value **required** `number`: value number
  * dogma_effects `array`: dogma_effects array
    * items `object`: dogma_effect object
      * effect_id **required** `integer`: effect_id integer
      * is_default **required** `boolean`: is_default boolean
  * graphic_id `integer`: graphic_id integer
  * group_id **required** `integer`: group_id integer
  * icon_id `integer`: icon_id integer
  * market_group_id `integer`: This only exists for types that can be put on the market
  * mass `number`: mass number
  * name **required** `string`: name string
  * packaged_volume `number`: packaged_volume number
  * portion_size `integer`: portion_size integer
  * published **required** `boolean`: published boolean
  * radius `number`: radius number
  * type_id **required** `integer`: type_id integer
  * volume `number`: volume number

### get_wars
Return a list of wars

---
Alternate route: `/dev/wars/`

Alternate route: `/legacy/wars/`

Alternate route: `/v1/wars/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_wars({}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * max_war_id `integer`: Only return wars with ID smaller than this.

#### Output
* output `array`: 200 ok array
  * items `integer`: 200 ok integer

### get_wars_war_id
Return details about a war

---
Alternate route: `/dev/wars/{war_id}/`

Alternate route: `/legacy/wars/{war_id}/`

Alternate route: `/v1/wars/{war_id}/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_wars_war_id({
  "war_id": 0
}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * war_id **required** `integer`: ID for a war

#### Output
* output `object`: 200 ok object
  * aggressor **required** `object`: The aggressor corporation or alliance that declared this war, only contains either corporation_id or alliance_id
    * alliance_id `integer`: Alliance ID if and only if the aggressor is an alliance
    * corporation_id `integer`: Corporation ID if and only if the aggressor is a corporation
    * isk_destroyed **required** `number`: ISK value of ships the aggressor has destroyed
    * ships_killed **required** `integer`: The number of ships the aggressor has killed
  * allies `array`: allied corporations or alliances, each object contains either corporation_id or alliance_id
    * items `object`: ally object
      * alliance_id `integer`: Alliance ID if and only if this ally is an alliance
      * corporation_id `integer`: Corporation ID if and only if this ally is a corporation
  * declared **required** `string`: Time that the war was declared
  * defender **required** `object`: The defending corporation or alliance that declared this war, only contains either corporation_id or alliance_id
    * alliance_id `integer`: Alliance ID if and only if the defender is an alliance
    * corporation_id `integer`: Corporation ID if and only if the defender is a corporation
    * isk_destroyed **required** `number`: ISK value of ships the defender has killed
    * ships_killed **required** `integer`: The number of ships the defender has killed
  * finished `string`: Time the war ended and shooting was no longer allowed
  * id **required** `integer`: ID of the specified war
  * mutual **required** `boolean`: Was the war declared mutual by both parties
  * open_for_allies **required** `boolean`: Is the war currently open for allies or not
  * retracted `string`: Time the war was retracted but both sides could still shoot each other
  * started `string`: Time when the war started and both sides could shoot each other

### get_wars_war_id_killmails
Return a list of kills related to a war

---
Alternate route: `/dev/wars/{war_id}/killmails/`

Alternate route: `/legacy/wars/{war_id}/killmails/`

Alternate route: `/v1/wars/{war_id}/killmails/`

---
This route is cached for up to 3600 seconds


```js
evetech.get_wars_war_id_killmails({
  "war_id": 0
}, context)
```

#### Input
* input `object`
  * datasource `string` (values: tranquility, singularity): The server name you would like data from
  * If-None-Match `string`: ETag from a previous request. A 304 will be returned if this matches the current ETag
  * page `integer`: Which page of results to return
  * war_id **required** `integer`: A valid war ID

#### Output
* output `array`: 200 ok array
  * items `object`: 200 ok object
    * killmail_hash **required** `string`: A hash of this killmail
    * killmail_id **required** `integer`: ID of this killmail



## Definitions

### bad_request
* Bad request `object`: Bad request model
  * error **required** `string`: Bad request message

### error_limited
* Error limited `object`: Error limited model
  * error **required** `string`: Error limited message

### forbidden
* Forbidden `object`: Forbidden model
  * error **required** `string`: Forbidden message
  * sso_status `integer`: status code received from SSO

### gateway_timeout
* Gateway timeout `object`: Gateway timeout model
  * error **required** `string`: Gateway timeout message
  * timeout `integer`: number of seconds the request was given

### internal_server_error
* Internal server error `object`: Internal server error model
  * error **required** `string`: Internal server error message

### service_unavailable
* Service unavailable `object`: Service unavailable model
  * error **required** `string`: Service unavailable message

### unauthorized
* Unauthorized `object`: Unauthorized model
  * error **required** `string`: Unauthorized message


