# @datafire/ccp_is

Client library for EVE Swagger Interface

## Installation and Usage
```bash
npm install --save datafire @datafire/ccp_is
```

```js
let datafire = require('datafire');
let ccp_is = require('@datafire/ccp_is').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

ccp_is.get_wars({}).then(data => {
  console.log(data);
})
```

## Description
An OpenAPI for EVE Online

## Actions
### get_alliances
List all active player alliances

---
Alternate route: `/v1/alliances/`

Alternate route: `/legacy/alliances/`

Alternate route: `/dev/alliances/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_alliances({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_alliances_names
Resolve a set of alliance IDs to alliance names

---
Alternate route: `/v1/alliances/names/`

Alternate route: `/legacy/alliances/names/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_alliances_names({
  "alliance_ids": []
}, context)
```

#### Parameters
* alliance_ids (array) **required** - A comma separated list of alliance IDs
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_alliances_alliance_id
Public information about an alliance

---
Alternate route: `/v2/alliances/{alliance_id}/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_alliances_alliance_id({
  "alliance_id": 0
}, context)
```

#### Parameters
* alliance_id (integer) **required** - An EVE alliance ID
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_alliances_alliance_id_corporations
List all current member corporations of an alliance

---
Alternate route: `/v1/alliances/{alliance_id}/corporations/`

Alternate route: `/legacy/alliances/{alliance_id}/corporations/`

Alternate route: `/dev/alliances/{alliance_id}/corporations/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_alliances_alliance_id_corporations({
  "alliance_id": 0
}, context)
```

#### Parameters
* alliance_id (integer) **required** - An EVE alliance ID
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_alliances_alliance_id_icons
Get the icon urls for a alliance

---
Alternate route: `/v1/alliances/{alliance_id}/icons/`

Alternate route: `/legacy/alliances/{alliance_id}/icons/`

Alternate route: `/dev/alliances/{alliance_id}/icons/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_alliances_alliance_id_icons({
  "alliance_id": 0
}, context)
```

#### Parameters
* alliance_id (integer) **required** - An EVE alliance ID
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### post_characters_affiliation
Bulk lookup of character IDs to corporation, alliance and faction

---
Alternate route: `/v1/characters/affiliation/`

Alternate route: `/legacy/characters/affiliation/`

Alternate route: `/dev/characters/affiliation/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.post_characters_affiliation({
  "characters": []
}, context)
```

#### Parameters
* characters (array) **required** - characters array
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_names
Resolve a set of character IDs to character names

---
Alternate route: `/v1/characters/names/`

Alternate route: `/legacy/characters/names/`

Alternate route: `/dev/characters/names/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_characters_names({
  "character_ids": []
}, context)
```

#### Parameters
* character_ids (array) **required** - A comma separated list of character IDs
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id
Public information about a character

---
Alternate route: `/v4/characters/{character_id}/`

Alternate route: `/dev/characters/{character_id}/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_characters_character_id({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_agents_research
Return a list of agents research information for a character. The formula for finding the current research points with an agent is: currentPoints = remainderPoints + pointsPerDay * days(currentTime - researchStartDate)

---
Alternate route: `/v1/characters/{character_id}/agents_research/`

Alternate route: `/legacy/characters/{character_id}/agents_research/`

Alternate route: `/dev/characters/{character_id}/agents_research/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_characters_character_id_agents_research({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_assets
Return a list of the characters assets

---
Alternate route: `/v1/characters/{character_id}/assets/`

Alternate route: `/legacy/characters/{character_id}/assets/`

Alternate route: `/dev/characters/{character_id}/assets/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_characters_character_id_assets({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* page (integer) - Which page of results to return
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### post_characters_character_id_assets_locations
Return locations for a set of item ids, which you can get from character assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)

---
Alternate route: `/v1/characters/{character_id}/assets/locations/`

Alternate route: `/legacy/characters/{character_id}/assets/locations/`

Alternate route: `/dev/characters/{character_id}/assets/locations/`



```js
ccp_is.post_characters_character_id_assets_locations({
  "character_id": 0,
  "item_ids": []
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* item_ids (array) **required** - item_ids array
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### post_characters_character_id_assets_names
Return names for a set of item ids, which you can get from character assets endpoint. Typically used for items that can customize names, like containers or ships.

---
Alternate route: `/v1/characters/{character_id}/assets/names/`

Alternate route: `/legacy/characters/{character_id}/assets/names/`

Alternate route: `/dev/characters/{character_id}/assets/names/`



```js
ccp_is.post_characters_character_id_assets_names({
  "character_id": 0,
  "item_ids": []
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* item_ids (array) **required** - item_ids array
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_attributes
Return attributes of a character

---
Alternate route: `/v1/characters/{character_id}/attributes/`

Alternate route: `/legacy/characters/{character_id}/attributes/`

Alternate route: `/dev/characters/{character_id}/attributes/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_characters_character_id_attributes({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_blueprints
Return a list of blueprints the character owns

---
Alternate route: `/v2/characters/{character_id}/blueprints/`

Alternate route: `/dev/characters/{character_id}/blueprints/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_characters_character_id_blueprints({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* page (integer) - Which page of results to return
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_bookmarks
List your character's personal bookmarks

---
Alternate route: `/v1/characters/{character_id}/bookmarks/`

Alternate route: `/legacy/characters/{character_id}/bookmarks/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_characters_character_id_bookmarks({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_bookmarks_folders
List your character's personal bookmark folders

---
Alternate route: `/v1/characters/{character_id}/bookmarks/folders/`

Alternate route: `/legacy/characters/{character_id}/bookmarks/folders/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_characters_character_id_bookmarks_folders({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_calendar
Get 50 event summaries from the calendar. If no from_event ID is given, the resource will return the next 50 chronological event summaries from now. If a from_event ID is specified, it will return the next 50 chronological event summaries from after that event.

---
Alternate route: `/v1/characters/{character_id}/calendar/`

Alternate route: `/legacy/characters/{character_id}/calendar/`

Alternate route: `/dev/characters/{character_id}/calendar/`

---
This route is cached for up to 5 seconds


```js
ccp_is.get_characters_character_id_calendar({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* from_event (integer) - The event ID to retrieve events from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_calendar_event_id
Get all the information for a specific event

---
Alternate route: `/v3/characters/{character_id}/calendar/{event_id}/`

Alternate route: `/dev/characters/{character_id}/calendar/{event_id}/`

---
This route is cached for up to 5 seconds


```js
ccp_is.get_characters_character_id_calendar_event_id({
  "character_id": 0,
  "event_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* event_id (integer) **required** - The id of the event requested
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### put_characters_character_id_calendar_event_id
Set your response status to an event

---
Alternate route: `/v3/characters/{character_id}/calendar/{event_id}/`

Alternate route: `/dev/characters/{character_id}/calendar/{event_id}/`



```js
ccp_is.put_characters_character_id_calendar_event_id({
  "character_id": 0,
  "event_id": 0,
  "response": null
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* event_id (integer) **required** - The ID of the event requested
* response (undefined) **required** - response schema
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_calendar_event_id_attendees
Get all invited attendees for a given event

---
Alternate route: `/v1/characters/{character_id}/calendar/{event_id}/attendees/`

Alternate route: `/dev/characters/{character_id}/calendar/{event_id}/attendees/`

Alternate route: `/legacy/characters/{character_id}/calendar/{event_id}/attendees/`

---
This route is cached for up to 600 seconds


```js
ccp_is.get_characters_character_id_calendar_event_id_attendees({
  "character_id": 0,
  "event_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* event_id (integer) **required** - The id of the event requested
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_chat_channels
Return chat channels that a character is the owner or operator of

---
Alternate route: `/v1/characters/{character_id}/chat_channels/`

Alternate route: `/legacy/characters/{character_id}/chat_channels/`

Alternate route: `/dev/characters/{character_id}/chat_channels/`

---
This route is cached for up to 300 seconds


```js
ccp_is.get_characters_character_id_chat_channels({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_clones
A list of the character's clones

---
Alternate route: `/v2/characters/{character_id}/clones/`

Alternate route: `/legacy/characters/{character_id}/clones/`

---
This route is cached for up to 120 seconds


```js
ccp_is.get_characters_character_id_clones({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### delete_characters_character_id_contacts
Bulk delete contacts

---
Alternate route: `/v1/characters/{character_id}/contacts/`

Alternate route: `/legacy/characters/{character_id}/contacts/`



```js
ccp_is.delete_characters_character_id_contacts({
  "character_id": 0,
  "contact_ids": []
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* contact_ids (array) **required** - contact_ids array
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_contacts
Return contacts of a character

---
Alternate route: `/v1/characters/{character_id}/contacts/`

Alternate route: `/legacy/characters/{character_id}/contacts/`

Alternate route: `/dev/characters/{character_id}/contacts/`

---
This route is cached for up to 300 seconds


```js
ccp_is.get_characters_character_id_contacts({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* page (integer) - Which page of results to return
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### post_characters_character_id_contacts
Bulk add contacts with same settings

---
Alternate route: `/v1/characters/{character_id}/contacts/`

Alternate route: `/legacy/characters/{character_id}/contacts/`

Alternate route: `/dev/characters/{character_id}/contacts/`



```js
ccp_is.post_characters_character_id_contacts({
  "character_id": 0,
  "contact_ids": [],
  "standing": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* contact_ids (array) **required** - contact_ids array
* datasource (string) - The server name you would like data from
* label_id (integer) - Add a custom label to the new contact
* standing (number) **required** - Standing for the new contact
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* watched (boolean) - Whether the new contact should be watched, note this is only effective on characters
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### put_characters_character_id_contacts
Bulk edit contacts with same settings

---
Alternate route: `/v1/characters/{character_id}/contacts/`

Alternate route: `/legacy/characters/{character_id}/contacts/`

Alternate route: `/dev/characters/{character_id}/contacts/`



```js
ccp_is.put_characters_character_id_contacts({
  "character_id": 0,
  "contact_ids": [],
  "standing": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* contact_ids (array) **required** - contact_ids array
* datasource (string) - The server name you would like data from
* label_id (integer) - Add a custom label to the contact, use 0 for clearing label
* standing (number) **required** - Standing for the contact
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* watched (boolean) - Whether the contact should be watched, note this is only effective on characters
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_contacts_labels
Return custom labels for contacts the character defined

---
Alternate route: `/v1/characters/{character_id}/contacts/labels/`

Alternate route: `/legacy/characters/{character_id}/contacts/labels/`

Alternate route: `/dev/characters/{character_id}/contacts/labels/`

---
This route is cached for up to 300 seconds


```js
ccp_is.get_characters_character_id_contacts_labels({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_contracts
Returns contracts available to a character, only if the character is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is "in_progress".

---
Alternate route: `/v1/characters/{character_id}/contracts/`

Alternate route: `/legacy/characters/{character_id}/contracts/`

Alternate route: `/dev/characters/{character_id}/contracts/`

---
This route is cached for up to 300 seconds


```js
ccp_is.get_characters_character_id_contracts({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_contracts_contract_id_bids
Lists bids on a particular auction contract

---
Alternate route: `/v1/characters/{character_id}/contracts/{contract_id}/bids/`

Alternate route: `/legacy/characters/{character_id}/contracts/{contract_id}/bids/`

Alternate route: `/dev/characters/{character_id}/contracts/{contract_id}/bids/`

---
This route is cached for up to 300 seconds


```js
ccp_is.get_characters_character_id_contracts_contract_id_bids({
  "character_id": 0,
  "contract_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* contract_id (integer) **required** - ID of a contract
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_contracts_contract_id_items
Lists items of a particular contract

---
Alternate route: `/v1/characters/{character_id}/contracts/{contract_id}/items/`

Alternate route: `/legacy/characters/{character_id}/contracts/{contract_id}/items/`

Alternate route: `/dev/characters/{character_id}/contracts/{contract_id}/items/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_characters_character_id_contracts_contract_id_items({
  "character_id": 0,
  "contract_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* contract_id (integer) **required** - ID of a contract
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_corporationhistory
Get a list of all the corporations a character has been a member of

---
Alternate route: `/v1/characters/{character_id}/corporationhistory/`

Alternate route: `/legacy/characters/{character_id}/corporationhistory/`

Alternate route: `/dev/characters/{character_id}/corporationhistory/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_characters_character_id_corporationhistory({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### post_characters_character_id_cspa
Takes a source character ID in the url and a set of target character ID's in the body, returns a CSPA charge cost

---
Alternate route: `/v3/characters/{character_id}/cspa/`

Alternate route: `/legacy/characters/{character_id}/cspa/`



```js
ccp_is.post_characters_character_id_cspa({
  "character_id": 0,
  "characters": {
    "characters": []
  }
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* characters (object) **required** - characters object
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_fatigue
Return a character's jump activation and fatigue information

---
Alternate route: `/v1/characters/{character_id}/fatigue/`

Alternate route: `/legacy/characters/{character_id}/fatigue/`

Alternate route: `/dev/characters/{character_id}/fatigue/`

---
This route is cached for up to 300 seconds


```js
ccp_is.get_characters_character_id_fatigue({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_fittings
Return fittings of a character

---
Alternate route: `/v1/characters/{character_id}/fittings/`

Alternate route: `/legacy/characters/{character_id}/fittings/`

Alternate route: `/dev/characters/{character_id}/fittings/`

---
This route is cached for up to 300 seconds


```js
ccp_is.get_characters_character_id_fittings({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### post_characters_character_id_fittings
Save a new fitting for a character

---
Alternate route: `/v1/characters/{character_id}/fittings/`

Alternate route: `/legacy/characters/{character_id}/fittings/`

Alternate route: `/dev/characters/{character_id}/fittings/`



```js
ccp_is.post_characters_character_id_fittings({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* fitting (object) - fitting object
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### delete_characters_character_id_fittings_fitting_id
Delete a fitting from a character

---
Alternate route: `/v1/characters/{character_id}/fittings/{fitting_id}/`

Alternate route: `/legacy/characters/{character_id}/fittings/{fitting_id}/`

Alternate route: `/dev/characters/{character_id}/fittings/{fitting_id}/`



```js
ccp_is.delete_characters_character_id_fittings_fitting_id({
  "character_id": 0,
  "fitting_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* fitting_id (integer) **required** - ID for a fitting of this character
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_fleet
Return the fleet ID the character is in, if any.

---
Alternate route: `/v1/characters/{character_id}/fleet/`

Alternate route: `/legacy/characters/{character_id}/fleet/`

Alternate route: `/dev/characters/{character_id}/fleet/`

---
This route is cached for up to 60 seconds


```js
ccp_is.get_characters_character_id_fleet({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_implants
Return implants on the active clone of a character

---
Alternate route: `/v1/characters/{character_id}/implants/`

Alternate route: `/legacy/characters/{character_id}/implants/`

Alternate route: `/dev/characters/{character_id}/implants/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_characters_character_id_implants({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_industry_jobs
List industry jobs placed by a character

---
Alternate route: `/v1/characters/{character_id}/industry/jobs/`

Alternate route: `/legacy/characters/{character_id}/industry/jobs/`

Alternate route: `/dev/characters/{character_id}/industry/jobs/`

---
This route is cached for up to 300 seconds


```js
ccp_is.get_characters_character_id_industry_jobs({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* include_completed (boolean) - Whether retrieve completed character industry jobs as well
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_killmails_recent
Return a list of character's recent kills and losses

---
Alternate route: `/v1/characters/{character_id}/killmails/recent/`

Alternate route: `/legacy/characters/{character_id}/killmails/recent/`

Alternate route: `/dev/characters/{character_id}/killmails/recent/`

---
This route is cached for up to 120 seconds


```js
ccp_is.get_characters_character_id_killmails_recent({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* max_count (integer) - How many killmails to return at maximum
* max_kill_id (integer) - Only return killmails with ID smaller than this.
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_location
Information about the characters current location. Returns the current solar system id, and also the current station or structure ID if applicable.

---
Alternate route: `/v1/characters/{character_id}/location/`

Alternate route: `/legacy/characters/{character_id}/location/`

Alternate route: `/dev/characters/{character_id}/location/`

---
This route is cached for up to 5 seconds


```js
ccp_is.get_characters_character_id_location({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_loyalty_points
Return a list of loyalty points for all corporations the character has worked for

---
Alternate route: `/v1/characters/{character_id}/loyalty/points/`

Alternate route: `/legacy/characters/{character_id}/loyalty/points/`

Alternate route: `/dev/characters/{character_id}/loyalty/points/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_characters_character_id_loyalty_points({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_mail
Return the 50 most recent mail headers belonging to the character that match the query criteria. Queries can be filtered by label, and last_mail_id can be used to paginate backwards.

---
Alternate route: `/v1/characters/{character_id}/mail/`

Alternate route: `/legacy/characters/{character_id}/mail/`

Alternate route: `/dev/characters/{character_id}/mail/`

---
This route is cached for up to 30 seconds


```js
ccp_is.get_characters_character_id_mail({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* labels (array) - Fetch only mails that match one or more of the given labels
* last_mail_id (integer) - List only mail with an ID lower than the given ID, if present
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### post_characters_character_id_mail
Create and send a new mail

---
Alternate route: `/v1/characters/{character_id}/mail/`

Alternate route: `/legacy/characters/{character_id}/mail/`

Alternate route: `/dev/characters/{character_id}/mail/`



```js
ccp_is.post_characters_character_id_mail({
  "character_id": 0,
  "mail": null
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* mail (undefined) **required** - mail schema
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_mail_labels
Return a list of the users mail labels, unread counts for each label and a total unread count.

---
Alternate route: `/v3/characters/{character_id}/mail/labels/`

Alternate route: `/dev/characters/{character_id}/mail/labels/`

---
This route is cached for up to 30 seconds


```js
ccp_is.get_characters_character_id_mail_labels({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### post_characters_character_id_mail_labels
Create a mail label

---
Alternate route: `/v2/characters/{character_id}/mail/labels/`

Alternate route: `/legacy/characters/{character_id}/mail/labels/`

Alternate route: `/dev/characters/{character_id}/mail/labels/`



```js
ccp_is.post_characters_character_id_mail_labels({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* label (object) - label object
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### delete_characters_character_id_mail_labels_label_id
Delete a mail label

---
Alternate route: `/v1/characters/{character_id}/mail/labels/{label_id}/`

Alternate route: `/legacy/characters/{character_id}/mail/labels/{label_id}/`

Alternate route: `/dev/characters/{character_id}/mail/labels/{label_id}/`



```js
ccp_is.delete_characters_character_id_mail_labels_label_id({
  "character_id": 0,
  "label_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* label_id (integer) **required** - An EVE label id
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_mail_lists
Return all mailing lists that the character is subscribed to

---
Alternate route: `/v1/characters/{character_id}/mail/lists/`

Alternate route: `/legacy/characters/{character_id}/mail/lists/`

Alternate route: `/dev/characters/{character_id}/mail/lists/`

---
This route is cached for up to 120 seconds


```js
ccp_is.get_characters_character_id_mail_lists({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### delete_characters_character_id_mail_mail_id
Delete a mail

---
Alternate route: `/v1/characters/{character_id}/mail/{mail_id}/`

Alternate route: `/legacy/characters/{character_id}/mail/{mail_id}/`

Alternate route: `/dev/characters/{character_id}/mail/{mail_id}/`



```js
ccp_is.delete_characters_character_id_mail_mail_id({
  "character_id": 0,
  "mail_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* mail_id (integer) **required** - An EVE mail ID
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_mail_mail_id
Return the contents of an EVE mail

---
Alternate route: `/v1/characters/{character_id}/mail/{mail_id}/`

Alternate route: `/legacy/characters/{character_id}/mail/{mail_id}/`

Alternate route: `/dev/characters/{character_id}/mail/{mail_id}/`

---
This route is cached for up to 30 seconds


```js
ccp_is.get_characters_character_id_mail_mail_id({
  "character_id": 0,
  "mail_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* mail_id (integer) **required** - An EVE mail ID
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### put_characters_character_id_mail_mail_id
Update metadata about a mail

---
Alternate route: `/v1/characters/{character_id}/mail/{mail_id}/`

Alternate route: `/legacy/characters/{character_id}/mail/{mail_id}/`

Alternate route: `/dev/characters/{character_id}/mail/{mail_id}/`



```js
ccp_is.put_characters_character_id_mail_mail_id({
  "character_id": 0,
  "contents": {},
  "mail_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* contents (object) **required** - contents object
* datasource (string) - The server name you would like data from
* mail_id (integer) **required** - An EVE mail ID
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_medals
Return a list of medals the character has

---
Alternate route: `/v1/characters/{character_id}/medals/`

Alternate route: `/legacy/characters/{character_id}/medals/`

Alternate route: `/dev/characters/{character_id}/medals/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_characters_character_id_medals({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_mining
Paginated record of all mining done by a character for the past 30 days


---
Alternate route: `/v1/characters/{character_id}/mining/`

Alternate route: `/legacy/characters/{character_id}/mining/`

Alternate route: `/dev/characters/{character_id}/mining/`

---
This route is cached for up to 600 seconds


```js
ccp_is.get_characters_character_id_mining({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* page (integer) - Which page of results to return
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_notifications
Return character notifications

---
Alternate route: `/v1/characters/{character_id}/notifications/`

Alternate route: `/legacy/characters/{character_id}/notifications/`

Alternate route: `/dev/characters/{character_id}/notifications/`

---
This route is cached for up to 600 seconds


```js
ccp_is.get_characters_character_id_notifications({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_notifications_contacts
Return notifications about having been added to someone's contact list

---
Alternate route: `/v1/characters/{character_id}/notifications/contacts/`

Alternate route: `/legacy/characters/{character_id}/notifications/contacts/`

Alternate route: `/dev/characters/{character_id}/notifications/contacts/`

---
This route is cached for up to 600 seconds


```js
ccp_is.get_characters_character_id_notifications_contacts({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_online
Checks if the character is currently online

---
Alternate route: `/v1/characters/{character_id}/online/`

Alternate route: `/legacy/characters/{character_id}/online/`

---
This route is cached for up to 60 seconds


```js
ccp_is.get_characters_character_id_online({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_opportunities
Return a list of tasks finished by a character

---
Alternate route: `/v1/characters/{character_id}/opportunities/`

Alternate route: `/legacy/characters/{character_id}/opportunities/`

Alternate route: `/dev/characters/{character_id}/opportunities/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_characters_character_id_opportunities({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_orders
List market orders placed by a character

---
Alternate route: `/v1/characters/{character_id}/orders/`

Alternate route: `/legacy/characters/{character_id}/orders/`

Alternate route: `/dev/characters/{character_id}/orders/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_characters_character_id_orders({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_planets
Returns a list of all planetary colonies owned by a character.

---
Alternate route: `/v1/characters/{character_id}/planets/`

Alternate route: `/legacy/characters/{character_id}/planets/`

Alternate route: `/dev/characters/{character_id}/planets/`

---
This route is cached for up to 600 seconds


```js
ccp_is.get_characters_character_id_planets({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_planets_planet_id
Returns full details on the layout of a single planetary colony, including links, pins and routes. Note: Planetary information is only recalculated when the colony is viewed through the client. Information will not update until this criteria is met.

---
Alternate route: `/v3/characters/{character_id}/planets/{planet_id}/`

Alternate route: `/dev/characters/{character_id}/planets/{planet_id}/`

---
This route is cached for up to 600 seconds


```js
ccp_is.get_characters_character_id_planets_planet_id({
  "character_id": 0,
  "planet_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* planet_id (integer) **required** - Planet id of the target planet
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_portrait
Get portrait urls for a character

---
Alternate route: `/v2/characters/{character_id}/portrait/`

Alternate route: `/dev/characters/{character_id}/portrait/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_characters_character_id_portrait({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_roles
Returns a character's corporation roles

---
Alternate route: `/v1/characters/{character_id}/roles/`

Alternate route: `/legacy/characters/{character_id}/roles/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_characters_character_id_roles({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_search
Search for entities that match a given sub-string.

---
Alternate route: `/v2/characters/{character_id}/search/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_characters_character_id_search({
  "categories": [],
  "character_id": 0,
  "search": ""
}, context)
```

#### Parameters
* categories (array) **required** - Type of entities to search for
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* language (string) - Language to use in the response
* search (string) **required** - The string to search on
* strict (boolean) - Whether the search should be a strict match
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_ship
Get the current ship type, name and id

---
Alternate route: `/v1/characters/{character_id}/ship/`

Alternate route: `/legacy/characters/{character_id}/ship/`

Alternate route: `/dev/characters/{character_id}/ship/`

---
This route is cached for up to 5 seconds


```js
ccp_is.get_characters_character_id_ship({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_skillqueue
List the configured skill queue for the given character

---
Alternate route: `/v2/characters/{character_id}/skillqueue/`

Alternate route: `/legacy/characters/{character_id}/skillqueue/`

Alternate route: `/dev/characters/{character_id}/skillqueue/`

---
This route is cached for up to 120 seconds


```js
ccp_is.get_characters_character_id_skillqueue({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_skills
List all trained skills for the given character

---
Alternate route: `/v3/characters/{character_id}/skills/`

---
This route is cached for up to 120 seconds


```js
ccp_is.get_characters_character_id_skills({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_standings
Return character standings from agents, NPC corporations, and factions

---
Alternate route: `/v1/characters/{character_id}/standings/`

Alternate route: `/legacy/characters/{character_id}/standings/`

Alternate route: `/dev/characters/{character_id}/standings/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_characters_character_id_standings({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_wallet
Returns a character's wallet balance

---
Alternate route: `/v1/characters/{character_id}/wallet/`

Alternate route: `/legacy/characters/{character_id}/wallet/`

Alternate route: `/dev/characters/{character_id}/wallet/`

---
This route is cached for up to 120 seconds


```js
ccp_is.get_characters_character_id_wallet({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_wallet_journal
Retrieve character wallet journal

---
Alternate route: `/v2/characters/{character_id}/wallet/journal/`

Alternate route: `/dev/characters/{character_id}/wallet/journal/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_characters_character_id_wallet_journal({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* from_id (integer) - Only show journal entries happened before the transaction referenced by this id
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_characters_character_id_wallet_transactions
Get wallet transactions of a character

---
Alternate route: `/v1/characters/{character_id}/wallet/transactions/`

Alternate route: `/legacy/characters/{character_id}/wallet/transactions/`

Alternate route: `/dev/characters/{character_id}/wallet/transactions/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_characters_character_id_wallet_transactions({
  "character_id": 0
}, context)
```

#### Parameters
* character_id (integer) **required** - An EVE character ID
* datasource (string) - The server name you would like data from
* from_id (integer) - Only show transactions happened before the one referenced by this id
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_corporation_corporation_id_mining_extractions
Extraction timers for all moon chunks being extracted by refineries belonging to a corporation.


---
Alternate route: `/v1/corporation/{corporation_id}/mining/extractions/`

Alternate route: `/legacy/corporation/{corporation_id}/mining/extractions/`

Alternate route: `/dev/corporation/{corporation_id}/mining/extractions/`

---
This route is cached for up to 1800 seconds


```js
ccp_is.get_corporation_corporation_id_mining_extractions({
  "corporation_id": 0
}, context)
```

#### Parameters
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_corporation_corporation_id_mining_observers
Paginated list of all entities capable of observing and recording mining for a corporation


---
Alternate route: `/v1/corporation/{corporation_id}/mining/observers/`

Alternate route: `/legacy/corporation/{corporation_id}/mining/observers/`

Alternate route: `/dev/corporation/{corporation_id}/mining/observers/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_corporation_corporation_id_mining_observers({
  "corporation_id": 0
}, context)
```

#### Parameters
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* page (integer) - Which page of results to return
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_corporation_corporation_id_mining_observers_observer_id
Paginated record of all mining seen by an observer


---
Alternate route: `/v1/corporation/{corporation_id}/mining/observers/{observer_id}/`

Alternate route: `/legacy/corporation/{corporation_id}/mining/observers/{observer_id}/`

Alternate route: `/dev/corporation/{corporation_id}/mining/observers/{observer_id}/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_corporation_corporation_id_mining_observers_observer_id({
  "corporation_id": 0,
  "observer_id": 0
}, context)
```

#### Parameters
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* observer_id (integer) **required** - A mining observer id
* page (integer) - Which page of results to return
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_corporations_names
Resolve a set of corporation IDs to corporation names

---
Alternate route: `/v1/corporations/names/`

Alternate route: `/legacy/corporations/names/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_corporations_names({
  "corporation_ids": []
}, context)
```

#### Parameters
* corporation_ids (array) **required** - A comma separated list of corporation IDs
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_corporations_npccorps
Get a list of npc corporations

---
Alternate route: `/v1/corporations/npccorps/`

Alternate route: `/legacy/corporations/npccorps/`

Alternate route: `/dev/corporations/npccorps/`

---
This route expires daily at 11:05


```js
ccp_is.get_corporations_npccorps({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_corporations_corporation_id
Public information about a corporation

---
Alternate route: `/v3/corporations/{corporation_id}/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_corporations_corporation_id({
  "corporation_id": 0
}, context)
```

#### Parameters
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_corporations_corporation_id_alliancehistory
Get a list of all the alliances a corporation has been a member of

---
Alternate route: `/v2/corporations/{corporation_id}/alliancehistory/`

Alternate route: `/dev/corporations/{corporation_id}/alliancehistory/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_corporations_corporation_id_alliancehistory({
  "corporation_id": 0
}, context)
```

#### Parameters
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_corporations_corporation_id_assets
Return a list of the corporation assets

---
Alternate route: `/v1/corporations/{corporation_id}/assets/`

Alternate route: `/legacy/corporations/{corporation_id}/assets/`

Alternate route: `/dev/corporations/{corporation_id}/assets/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_corporations_corporation_id_assets({
  "corporation_id": 0
}, context)
```

#### Parameters
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* page (integer) - Which page of results to return
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### post_corporations_corporation_id_assets_locations
Return locations for a set of item ids, which you can get from corporation assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)

---
Alternate route: `/v1/corporations/{corporation_id}/assets/locations/`

Alternate route: `/legacy/corporations/{corporation_id}/assets/locations/`

Alternate route: `/dev/corporations/{corporation_id}/assets/locations/`



```js
ccp_is.post_corporations_corporation_id_assets_locations({
  "corporation_id": 0,
  "item_ids": []
}, context)
```

#### Parameters
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* item_ids (array) **required** - item_ids array
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### post_corporations_corporation_id_assets_names
Return names for a set of item ids, which you can get from corporation assets endpoint. Only valid for items that can customize names, like containers or ships.

---
Alternate route: `/v1/corporations/{corporation_id}/assets/names/`

Alternate route: `/legacy/corporations/{corporation_id}/assets/names/`

Alternate route: `/dev/corporations/{corporation_id}/assets/names/`



```js
ccp_is.post_corporations_corporation_id_assets_names({
  "corporation_id": 0,
  "item_ids": []
}, context)
```

#### Parameters
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* item_ids (array) **required** - item_ids array
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_corporations_corporation_id_blueprints
Returns a list of blueprints the corporation owns

---
Alternate route: `/v1/corporations/{corporation_id}/blueprints/`

Alternate route: `/legacy/corporations/{corporation_id}/blueprints/`

Alternate route: `/dev/corporations/{corporation_id}/blueprints/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_corporations_corporation_id_blueprints({
  "corporation_id": 0
}, context)
```

#### Parameters
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* page (integer) - Which page of results to return
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_corporations_corporation_id_bookmarks
A list of your corporation's bookmarks

---
Alternate route: `/v1/corporations/{corporation_id}/bookmarks/`

Alternate route: `/legacy/corporations/{corporation_id}/bookmarks/`

Alternate route: `/dev/corporations/{corporation_id}/bookmarks/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_corporations_corporation_id_bookmarks({
  "corporation_id": 0
}, context)
```

#### Parameters
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* page (integer) - Which page of results to return
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_corporations_corporation_id_bookmarks_folders
A list of your corporation's bookmark folders

---
Alternate route: `/v1/corporations/{corporation_id}/bookmarks/folders/`

Alternate route: `/legacy/corporations/{corporation_id}/bookmarks/folders/`

Alternate route: `/dev/corporations/{corporation_id}/bookmarks/folders/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_corporations_corporation_id_bookmarks_folders({
  "corporation_id": 0
}, context)
```

#### Parameters
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* page (integer) - Which page of results to return
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_corporations_corporation_id_contacts
Return contacts of a corporation

---
Alternate route: `/v1/corporations/{corporation_id}/contacts/`

Alternate route: `/legacy/corporations/{corporation_id}/contacts/`

Alternate route: `/dev/corporations/{corporation_id}/contacts/`

---
This route is cached for up to 300 seconds


```js
ccp_is.get_corporations_corporation_id_contacts({
  "corporation_id": 0
}, context)
```

#### Parameters
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* page (integer) - Which page of results to return
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_corporations_corporation_id_containers_logs
Returns logs recorded in the past seven days from all audit log secure containers (ALSC) owned by a given corporation

---
Alternate route: `/v1/corporations/{corporation_id}/containers/logs/`

Alternate route: `/legacy/corporations/{corporation_id}/containers/logs/`

Alternate route: `/dev/corporations/{corporation_id}/containers/logs/`

---
This route is cached for up to 600 seconds


```js
ccp_is.get_corporations_corporation_id_containers_logs({
  "corporation_id": 0
}, context)
```

#### Parameters
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* page (integer) - Which page of results to return
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_corporations_corporation_id_contracts
Returns contracts available to a coporation, only if the corporation is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is "in_progress".

---
Alternate route: `/v1/corporations/{corporation_id}/contracts/`

Alternate route: `/legacy/corporations/{corporation_id}/contracts/`

Alternate route: `/dev/corporations/{corporation_id}/contracts/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_corporations_corporation_id_contracts({
  "corporation_id": 0
}, context)
```

#### Parameters
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_corporations_corporation_id_contracts_contract_id_bids
Lists bids on a particular auction contract

---
Alternate route: `/v1/corporations/{corporation_id}/contracts/{contract_id}/bids/`

Alternate route: `/legacy/corporations/{corporation_id}/contracts/{contract_id}/bids/`

Alternate route: `/dev/corporations/{corporation_id}/contracts/{contract_id}/bids/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_corporations_corporation_id_contracts_contract_id_bids({
  "contract_id": 0,
  "corporation_id": 0
}, context)
```

#### Parameters
* contract_id (integer) **required** - ID of a contract
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* page (integer) - Which page of results to return
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_corporations_corporation_id_contracts_contract_id_items
Lists items of a particular contract

---
Alternate route: `/v1/corporations/{corporation_id}/contracts/{contract_id}/items/`

Alternate route: `/legacy/corporations/{corporation_id}/contracts/{contract_id}/items/`

Alternate route: `/dev/corporations/{corporation_id}/contracts/{contract_id}/items/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_corporations_corporation_id_contracts_contract_id_items({
  "contract_id": 0,
  "corporation_id": 0
}, context)
```

#### Parameters
* contract_id (integer) **required** - ID of a contract
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_corporations_corporation_id_divisions
Return corporation hangar and wallet division names, only show if a division is not using the default name

---
Alternate route: `/v1/corporations/{corporation_id}/divisions/`

Alternate route: `/legacy/corporations/{corporation_id}/divisions/`

Alternate route: `/dev/corporations/{corporation_id}/divisions/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_corporations_corporation_id_divisions({
  "corporation_id": 0
}, context)
```

#### Parameters
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_corporations_corporation_id_icons
Get the icon urls for a corporation

---
Alternate route: `/v1/corporations/{corporation_id}/icons/`

Alternate route: `/legacy/corporations/{corporation_id}/icons/`

Alternate route: `/dev/corporations/{corporation_id}/icons/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_corporations_corporation_id_icons({
  "corporation_id": 0
}, context)
```

#### Parameters
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_corporations_corporation_id_industry_jobs
List industry jobs run by a corporation

---
Alternate route: `/v1/corporations/{corporation_id}/industry/jobs/`

Alternate route: `/legacy/corporations/{corporation_id}/industry/jobs/`

Alternate route: `/dev/corporations/{corporation_id}/industry/jobs/`

---
This route is cached for up to 300 seconds


```js
ccp_is.get_corporations_corporation_id_industry_jobs({
  "corporation_id": 0
}, context)
```

#### Parameters
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* include_completed (boolean) - Whether retrieve completed industry jobs as well
* page (integer) - Which page of results to return
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_corporations_corporation_id_killmails_recent
Get a list of corporation's recent kills and losses

---
Alternate route: `/v1/corporations/{corporation_id}/killmails/recent/`

Alternate route: `/legacy/corporations/{corporation_id}/killmails/recent/`

Alternate route: `/dev/corporations/{corporation_id}/killmails/recent/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_corporations_corporation_id_killmails_recent({
  "corporation_id": 0
}, context)
```

#### Parameters
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* max_kill_id (integer) - Only return killmails with ID smaller than this
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_corporations_corporation_id_members
Read the current list of members if the calling character is a member.

---
Alternate route: `/v2/corporations/{corporation_id}/members/`

Alternate route: `/legacy/corporations/{corporation_id}/members/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_corporations_corporation_id_members({
  "corporation_id": 0
}, context)
```

#### Parameters
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_corporations_corporation_id_members_limit
Return a corporation's member limit, not including CEO himself

---
Alternate route: `/v1/corporations/{corporation_id}/members/limit/`

Alternate route: `/legacy/corporations/{corporation_id}/members/limit/`

Alternate route: `/dev/corporations/{corporation_id}/members/limit/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_corporations_corporation_id_members_limit({
  "corporation_id": 0
}, context)
```

#### Parameters
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_corporations_corporation_id_membertracking
Returns additional information about a corporation's members which helps tracking their activities

---
Alternate route: `/v1/corporations/{corporation_id}/membertracking/`

Alternate route: `/legacy/corporations/{corporation_id}/membertracking/`

Alternate route: `/dev/corporations/{corporation_id}/membertracking/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_corporations_corporation_id_membertracking({
  "corporation_id": 0
}, context)
```

#### Parameters
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_corporations_corporation_id_orders
List market orders placed on behalf of a corporation

---
Alternate route: `/v1/corporations/{corporation_id}/orders/`

Alternate route: `/legacy/corporations/{corporation_id}/orders/`

Alternate route: `/dev/corporations/{corporation_id}/orders/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_corporations_corporation_id_orders({
  "corporation_id": 0
}, context)
```

#### Parameters
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* page (integer) - Which page of results to return
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_corporations_corporation_id_roles
Return the roles of all members if the character has the personnel manager role or any grantable role.

---
Alternate route: `/v1/corporations/{corporation_id}/roles/`

Alternate route: `/legacy/corporations/{corporation_id}/roles/`

Alternate route: `/dev/corporations/{corporation_id}/roles/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_corporations_corporation_id_roles({
  "corporation_id": 0
}, context)
```

#### Parameters
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_corporations_corporation_id_shareholders
Return the current member list of a corporation, the token's character need to be a member of the corporation.

---
Alternate route: `/v1/corporations/{corporation_id}/shareholders/`

Alternate route: `/legacy/corporations/{corporation_id}/shareholders/`

Alternate route: `/dev/corporations/{corporation_id}/shareholders/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_corporations_corporation_id_shareholders({
  "corporation_id": 0
}, context)
```

#### Parameters
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* page (integer) - Which page of results to return
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_corporations_corporation_id_standings
Return corporation standings from agents, NPC corporations, and factions

---
Alternate route: `/v1/corporations/{corporation_id}/standings/`

Alternate route: `/legacy/corporations/{corporation_id}/standings/`

Alternate route: `/dev/corporations/{corporation_id}/standings/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_corporations_corporation_id_standings({
  "corporation_id": 0
}, context)
```

#### Parameters
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* page (integer) - Which page of results to return
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_corporations_corporation_id_structures
Get a list of corporation structures

---
Alternate route: `/v1/corporations/{corporation_id}/structures/`

Alternate route: `/legacy/corporations/{corporation_id}/structures/`

Alternate route: `/dev/corporations/{corporation_id}/structures/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_corporations_corporation_id_structures({
  "corporation_id": 0
}, context)
```

#### Parameters
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* language (string) - Language to use in the response
* page (integer) - Which page of results to return
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### put_corporations_corporation_id_structures_structure_id
Update the vulnerability window schedule of a corporation structure

---
Alternate route: `/v1/corporations/{corporation_id}/structures/{structure_id}/`

Alternate route: `/legacy/corporations/{corporation_id}/structures/{structure_id}/`

Alternate route: `/dev/corporations/{corporation_id}/structures/{structure_id}/`



```js
ccp_is.put_corporations_corporation_id_structures_structure_id({
  "corporation_id": 0,
  "new_schedule": [],
  "structure_id": 0
}, context)
```

#### Parameters
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* new_schedule (array) **required** - new_schedule array
* structure_id (integer) **required** - A structure ID
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_corporations_corporation_id_titles
Returns a corporation's titles

---
Alternate route: `/v1/corporations/{corporation_id}/titles/`

Alternate route: `/legacy/corporations/{corporation_id}/titles/`

Alternate route: `/dev/corporations/{corporation_id}/titles/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_corporations_corporation_id_titles({
  "corporation_id": 0
}, context)
```

#### Parameters
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_corporations_corporation_id_wallets
Get a corporation's wallets

---
Alternate route: `/v1/corporations/{corporation_id}/wallets/`

Alternate route: `/legacy/corporations/{corporation_id}/wallets/`

Alternate route: `/dev/corporations/{corporation_id}/wallets/`

---
This route is cached for up to 300 seconds


```js
ccp_is.get_corporations_corporation_id_wallets({
  "corporation_id": 0
}, context)
```

#### Parameters
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_corporations_corporation_id_wallets_division_journal
Retrieve corporation wallet journal

---
Alternate route: `/v1/corporations/{corporation_id}/wallets/{division}/journal/`

Alternate route: `/legacy/corporations/{corporation_id}/wallets/{division}/journal/`

Alternate route: `/dev/corporations/{corporation_id}/wallets/{division}/journal/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_corporations_corporation_id_wallets_division_journal({
  "corporation_id": 0,
  "division": 0
}, context)
```

#### Parameters
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* division (integer) **required** - Wallet key of the division to fetch journals from
* from_id (integer) - Only show journal entries happened before the transaction referenced by this id
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_corporations_corporation_id_wallets_division_transactions
Get wallet transactions of a corporation

---
Alternate route: `/v1/corporations/{corporation_id}/wallets/{division}/transactions/`

Alternate route: `/legacy/corporations/{corporation_id}/wallets/{division}/transactions/`

Alternate route: `/dev/corporations/{corporation_id}/wallets/{division}/transactions/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_corporations_corporation_id_wallets_division_transactions({
  "corporation_id": 0,
  "division": 0
}, context)
```

#### Parameters
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* division (integer) **required** - Wallet key of the division to fetch journals from
* from_id (integer) - Only show journal entries happened before the transaction referenced by this id
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_dogma_attributes
Get a list of dogma attribute ids

---
Alternate route: `/v1/dogma/attributes/`

Alternate route: `/legacy/dogma/attributes/`

Alternate route: `/dev/dogma/attributes/`

---
This route expires daily at 11:05


```js
ccp_is.get_dogma_attributes({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_dogma_attributes_attribute_id
Get information on a dogma attribute

---
Alternate route: `/v1/dogma/attributes/{attribute_id}/`

Alternate route: `/legacy/dogma/attributes/{attribute_id}/`

Alternate route: `/dev/dogma/attributes/{attribute_id}/`

---
This route expires daily at 11:05


```js
ccp_is.get_dogma_attributes_attribute_id({
  "attribute_id": 0
}, context)
```

#### Parameters
* attribute_id (integer) **required** - A dogma attribute ID
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_dogma_effects
Get a list of dogma effect ids

---
Alternate route: `/v1/dogma/effects/`

Alternate route: `/legacy/dogma/effects/`

Alternate route: `/dev/dogma/effects/`

---
This route expires daily at 11:05


```js
ccp_is.get_dogma_effects({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_dogma_effects_effect_id
Get information on a dogma effect

---
Alternate route: `/v2/dogma/effects/{effect_id}/`

Alternate route: `/dev/dogma/effects/{effect_id}/`

---
This route expires daily at 11:05


```js
ccp_is.get_dogma_effects_effect_id({
  "effect_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* effect_id (integer) **required** - A dogma effect ID
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_fleets_fleet_id
Return details about a fleet

---
Alternate route: `/v1/fleets/{fleet_id}/`

Alternate route: `/legacy/fleets/{fleet_id}/`

Alternate route: `/dev/fleets/{fleet_id}/`

---
This route is cached for up to 5 seconds


```js
ccp_is.get_fleets_fleet_id({
  "fleet_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* fleet_id (integer) **required** - ID for a fleet
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### put_fleets_fleet_id
Update settings about a fleet

---
Alternate route: `/v1/fleets/{fleet_id}/`

Alternate route: `/legacy/fleets/{fleet_id}/`

Alternate route: `/dev/fleets/{fleet_id}/`



```js
ccp_is.put_fleets_fleet_id({
  "fleet_id": 0,
  "new_settings": {}
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* fleet_id (integer) **required** - ID for a fleet
* new_settings (object) **required** - new_settings object
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_fleets_fleet_id_members
Return information about fleet members

---
Alternate route: `/v1/fleets/{fleet_id}/members/`

Alternate route: `/legacy/fleets/{fleet_id}/members/`

Alternate route: `/dev/fleets/{fleet_id}/members/`

---
This route is cached for up to 5 seconds


```js
ccp_is.get_fleets_fleet_id_members({
  "fleet_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* fleet_id (integer) **required** - ID for a fleet
* language (string) - Language to use in the response
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### post_fleets_fleet_id_members
Invite a character into the fleet. If a character has a CSPA charge set it is not possible to invite them to the fleet using ESI

---
Alternate route: `/v1/fleets/{fleet_id}/members/`

Alternate route: `/legacy/fleets/{fleet_id}/members/`

Alternate route: `/dev/fleets/{fleet_id}/members/`



```js
ccp_is.post_fleets_fleet_id_members({
  "fleet_id": 0,
  "invitation": {
    "character_id": 0,
    "role": ""
  }
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* fleet_id (integer) **required** - ID for a fleet
* invitation (object) **required** - invitation object
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### delete_fleets_fleet_id_members_member_id
Kick a fleet member

---
Alternate route: `/v1/fleets/{fleet_id}/members/{member_id}/`

Alternate route: `/legacy/fleets/{fleet_id}/members/{member_id}/`

Alternate route: `/dev/fleets/{fleet_id}/members/{member_id}/`



```js
ccp_is.delete_fleets_fleet_id_members_member_id({
  "fleet_id": 0,
  "member_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* fleet_id (integer) **required** - ID for a fleet
* member_id (integer) **required** - The character ID of a member in this fleet
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### put_fleets_fleet_id_members_member_id
Move a fleet member around

---
Alternate route: `/v1/fleets/{fleet_id}/members/{member_id}/`

Alternate route: `/legacy/fleets/{fleet_id}/members/{member_id}/`

Alternate route: `/dev/fleets/{fleet_id}/members/{member_id}/`



```js
ccp_is.put_fleets_fleet_id_members_member_id({
  "fleet_id": 0,
  "member_id": 0,
  "movement": {
    "role": ""
  }
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* fleet_id (integer) **required** - ID for a fleet
* member_id (integer) **required** - The character ID of a member in this fleet
* movement (object) **required** - movement object
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### delete_fleets_fleet_id_squads_squad_id
Delete a fleet squad, only empty squads can be deleted

---
Alternate route: `/v1/fleets/{fleet_id}/squads/{squad_id}/`

Alternate route: `/legacy/fleets/{fleet_id}/squads/{squad_id}/`

Alternate route: `/dev/fleets/{fleet_id}/squads/{squad_id}/`



```js
ccp_is.delete_fleets_fleet_id_squads_squad_id({
  "fleet_id": 0,
  "squad_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* fleet_id (integer) **required** - ID for a fleet
* squad_id (integer) **required** - The squad to delete
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### put_fleets_fleet_id_squads_squad_id
Rename a fleet squad

---
Alternate route: `/v1/fleets/{fleet_id}/squads/{squad_id}/`

Alternate route: `/legacy/fleets/{fleet_id}/squads/{squad_id}/`

Alternate route: `/dev/fleets/{fleet_id}/squads/{squad_id}/`



```js
ccp_is.put_fleets_fleet_id_squads_squad_id({
  "fleet_id": 0,
  "naming": {
    "name": ""
  },
  "squad_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* fleet_id (integer) **required** - ID for a fleet
* naming (object) **required** - naming object
* squad_id (integer) **required** - The squad to rename
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_fleets_fleet_id_wings
Return information about wings in a fleet

---
Alternate route: `/v1/fleets/{fleet_id}/wings/`

Alternate route: `/legacy/fleets/{fleet_id}/wings/`

Alternate route: `/dev/fleets/{fleet_id}/wings/`

---
This route is cached for up to 5 seconds


```js
ccp_is.get_fleets_fleet_id_wings({
  "fleet_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* fleet_id (integer) **required** - ID for a fleet
* language (string) - Language to use in the response
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### post_fleets_fleet_id_wings
Create a new wing in a fleet

---
Alternate route: `/v1/fleets/{fleet_id}/wings/`

Alternate route: `/legacy/fleets/{fleet_id}/wings/`

Alternate route: `/dev/fleets/{fleet_id}/wings/`



```js
ccp_is.post_fleets_fleet_id_wings({
  "fleet_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* fleet_id (integer) **required** - ID for a fleet
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### delete_fleets_fleet_id_wings_wing_id
Delete a fleet wing, only empty wings can be deleted. The wing may contain squads, but the squads must be empty

---
Alternate route: `/v1/fleets/{fleet_id}/wings/{wing_id}/`

Alternate route: `/legacy/fleets/{fleet_id}/wings/{wing_id}/`

Alternate route: `/dev/fleets/{fleet_id}/wings/{wing_id}/`



```js
ccp_is.delete_fleets_fleet_id_wings_wing_id({
  "fleet_id": 0,
  "wing_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* fleet_id (integer) **required** - ID for a fleet
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* wing_id (integer) **required** - The wing to delete
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### put_fleets_fleet_id_wings_wing_id
Rename a fleet wing

---
Alternate route: `/v1/fleets/{fleet_id}/wings/{wing_id}/`

Alternate route: `/legacy/fleets/{fleet_id}/wings/{wing_id}/`

Alternate route: `/dev/fleets/{fleet_id}/wings/{wing_id}/`



```js
ccp_is.put_fleets_fleet_id_wings_wing_id({
  "fleet_id": 0,
  "naming": {
    "name": ""
  },
  "wing_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* fleet_id (integer) **required** - ID for a fleet
* naming (object) **required** - naming object
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* wing_id (integer) **required** - The wing to rename
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### post_fleets_fleet_id_wings_wing_id_squads
Create a new squad in a fleet

---
Alternate route: `/v1/fleets/{fleet_id}/wings/{wing_id}/squads/`

Alternate route: `/legacy/fleets/{fleet_id}/wings/{wing_id}/squads/`

Alternate route: `/dev/fleets/{fleet_id}/wings/{wing_id}/squads/`



```js
ccp_is.post_fleets_fleet_id_wings_wing_id_squads({
  "fleet_id": 0,
  "wing_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* fleet_id (integer) **required** - ID for a fleet
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* wing_id (integer) **required** - The wing_id to create squad in
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_fw_leaderboards
Top 4 leaderboard of factions for kills and victory points separated by total, last week and yesterday.

---
Alternate route: `/v1/fw/leaderboards/`

Alternate route: `/legacy/fw/leaderboards/`

Alternate route: `/dev/fw/leaderboards/`

---
This route expires daily at 11:05


```js
ccp_is.get_fw_leaderboards({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_fw_leaderboards_characters
Top 100 leaderboard of pilots for kills and victory points separated by total, last week and yesterday.

---
Alternate route: `/v1/fw/leaderboards/characters/`

Alternate route: `/legacy/fw/leaderboards/characters/`

Alternate route: `/dev/fw/leaderboards/characters/`

---
This route expires daily at 11:05


```js
ccp_is.get_fw_leaderboards_characters({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_fw_leaderboards_corporations
Top 10 leaderboard of corporations for kills and victory points separated by total, last week and yesterday.

---
Alternate route: `/v1/fw/leaderboards/corporations/`

Alternate route: `/legacy/fw/leaderboards/corporations/`

Alternate route: `/dev/fw/leaderboards/corporations/`

---
This route expires daily at 11:05


```js
ccp_is.get_fw_leaderboards_corporations({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_fw_stats
Statistical overviews of factions involved in faction warfare

---
Alternate route: `/v1/fw/stats/`

Alternate route: `/legacy/fw/stats/`

Alternate route: `/dev/fw/stats/`

---
This route expires daily at 11:05


```js
ccp_is.get_fw_stats({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_fw_systems
An overview of the current ownership of faction warfare solar systems

---
Alternate route: `/v1/fw/systems/`

Alternate route: `/legacy/fw/systems/`

Alternate route: `/dev/fw/systems/`

---
This route is cached for up to 1800 seconds


```js
ccp_is.get_fw_systems({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_fw_wars
Data about which NPC factions are at war

---
Alternate route: `/v1/fw/wars/`

Alternate route: `/legacy/fw/wars/`

Alternate route: `/dev/fw/wars/`

---
This route expires daily at 11:05


```js
ccp_is.get_fw_wars({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_incursions
Return a list of current incursions

---
Alternate route: `/v1/incursions/`

Alternate route: `/legacy/incursions/`

Alternate route: `/dev/incursions/`

---
This route is cached for up to 300 seconds


```js
ccp_is.get_incursions({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_industry_facilities
Return a list of industry facilities

---
Alternate route: `/v1/industry/facilities/`

Alternate route: `/legacy/industry/facilities/`

Alternate route: `/dev/industry/facilities/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_industry_facilities({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_industry_systems
Return cost indices for solar systems

---
Alternate route: `/v1/industry/systems/`

Alternate route: `/legacy/industry/systems/`

Alternate route: `/dev/industry/systems/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_industry_systems({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_insurance_prices
Return available insurance levels for all ship types

---
Alternate route: `/v1/insurance/prices/`

Alternate route: `/legacy/insurance/prices/`

Alternate route: `/dev/insurance/prices/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_insurance_prices({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* language (string) - Language to use in the response
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_killmails_killmail_id_killmail_hash
Return a single killmail from its ID and hash

---
Alternate route: `/v1/killmails/{killmail_id}/{killmail_hash}/`

Alternate route: `/legacy/killmails/{killmail_id}/{killmail_hash}/`

Alternate route: `/dev/killmails/{killmail_id}/{killmail_hash}/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_killmails_killmail_id_killmail_hash({
  "killmail_hash": "",
  "killmail_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* killmail_hash (string) **required** - The killmail hash for verification
* killmail_id (integer) **required** - The killmail ID to be queried
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_loyalty_stores_corporation_id_offers
Return a list of offers from a specific corporation's loyalty store

---
Alternate route: `/v1/loyalty/stores/{corporation_id}/offers/`

Alternate route: `/legacy/loyalty/stores/{corporation_id}/offers/`

Alternate route: `/dev/loyalty/stores/{corporation_id}/offers/`

---
This route expires daily at 11:05


```js
ccp_is.get_loyalty_stores_corporation_id_offers({
  "corporation_id": 0
}, context)
```

#### Parameters
* corporation_id (integer) **required** - An EVE corporation ID
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_markets_groups
Get a list of item groups

---
Alternate route: `/v1/markets/groups/`

Alternate route: `/legacy/markets/groups/`

Alternate route: `/dev/markets/groups/`

---
This route expires daily at 11:05


```js
ccp_is.get_markets_groups({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_markets_groups_market_group_id
Get information on an item group

---
Alternate route: `/v1/markets/groups/{market_group_id}/`

Alternate route: `/legacy/markets/groups/{market_group_id}/`

Alternate route: `/dev/markets/groups/{market_group_id}/`

---
This route expires daily at 11:05


```js
ccp_is.get_markets_groups_market_group_id({
  "market_group_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* language (string) - Language to use in the response
* market_group_id (integer) **required** - An Eve item group ID
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_markets_prices
Return a list of prices

---
Alternate route: `/v1/markets/prices/`

Alternate route: `/legacy/markets/prices/`

Alternate route: `/dev/markets/prices/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_markets_prices({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_markets_structures_structure_id
Return all orders in a structure

---
Alternate route: `/v1/markets/structures/{structure_id}/`

Alternate route: `/legacy/markets/structures/{structure_id}/`

Alternate route: `/dev/markets/structures/{structure_id}/`

---
This route is cached for up to 300 seconds


```js
ccp_is.get_markets_structures_structure_id({
  "structure_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* page (integer) - Which page of results to return
* structure_id (integer) **required** - Return orders in this structure
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_markets_region_id_history
Return a list of historical market statistics for the specified type in a region

---
Alternate route: `/v1/markets/{region_id}/history/`

Alternate route: `/legacy/markets/{region_id}/history/`

Alternate route: `/dev/markets/{region_id}/history/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_markets_region_id_history({
  "region_id": 0,
  "type_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* region_id (integer) **required** - Return statistics in this region
* type_id (integer) **required** - Return statistics for this type
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_markets_region_id_orders
Return a list of orders in a region

---
Alternate route: `/v1/markets/{region_id}/orders/`

Alternate route: `/legacy/markets/{region_id}/orders/`

Alternate route: `/dev/markets/{region_id}/orders/`

---
This route is cached for up to 300 seconds


```js
ccp_is.get_markets_region_id_orders({
  "order_type": "",
  "region_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* order_type (string) **required** - Filter buy/sell orders, return all orders by default. If you query without type_id, we always return both buy and sell orders.
* page (integer) - Which page of results to return
* region_id (integer) **required** - Return orders in this region
* type_id (integer) - Return orders only for this type
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_markets_region_id_types
Return a list of type IDs that have active orders in the region, for efficient market indexing.

---
Alternate route: `/v1/markets/{region_id}/types/`

Alternate route: `/legacy/markets/{region_id}/types/`

Alternate route: `/dev/markets/{region_id}/types/`

---
This route is cached for up to 600 seconds


```js
ccp_is.get_markets_region_id_types({
  "region_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* page (integer) - Which page of results to return
* region_id (integer) **required** - Return statistics in this region
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_opportunities_groups
Return a list of opportunities groups

---
Alternate route: `/v1/opportunities/groups/`

Alternate route: `/legacy/opportunities/groups/`

Alternate route: `/dev/opportunities/groups/`

---
This route expires daily at 11:05


```js
ccp_is.get_opportunities_groups({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_opportunities_groups_group_id
Return information of an opportunities group

---
Alternate route: `/v1/opportunities/groups/{group_id}/`

Alternate route: `/legacy/opportunities/groups/{group_id}/`

Alternate route: `/dev/opportunities/groups/{group_id}/`

---
This route expires daily at 11:05


```js
ccp_is.get_opportunities_groups_group_id({
  "group_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* group_id (integer) **required** - ID of an opportunities group
* language (string) - Language to use in the response
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_opportunities_tasks
Return a list of opportunities tasks

---
Alternate route: `/v1/opportunities/tasks/`

Alternate route: `/legacy/opportunities/tasks/`

Alternate route: `/dev/opportunities/tasks/`

---
This route expires daily at 11:05


```js
ccp_is.get_opportunities_tasks({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_opportunities_tasks_task_id
Return information of an opportunities task

---
Alternate route: `/v1/opportunities/tasks/{task_id}/`

Alternate route: `/legacy/opportunities/tasks/{task_id}/`

Alternate route: `/dev/opportunities/tasks/{task_id}/`

---
This route expires daily at 11:05


```js
ccp_is.get_opportunities_tasks_task_id({
  "task_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* task_id (integer) **required** - ID of an opportunities task
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_route_origin_destination
Get the systems between origin and destination

---
Alternate route: `/legacy/route/{origin}/{destination}/`

Alternate route: `/dev/route/{origin}/{destination}/`

Alternate route: `/v1/route/{origin}/{destination}/`

---
This route is cached for up to 86400 seconds


```js
ccp_is.get_route_origin_destination({
  "destination": 0,
  "origin": 0
}, context)
```

#### Parameters
* avoid (array) - avoid solar system ID(s)
* connections (array) - connected solar system pairs
* datasource (string) - The server name you would like data from
* destination (integer) **required** - destination solar system ID
* flag (string) - route security preference
* origin (integer) **required** - origin solar system ID
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_search
Search for entities that match a given sub-string.

---
Alternate route: `/v1/search/`

Alternate route: `/legacy/search/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_search({
  "categories": [],
  "search": ""
}, context)
```

#### Parameters
* categories (array) **required** - Type of entities to search for
* datasource (string) - The server name you would like data from
* language (string) - Language to use in the response
* search (string) **required** - The string to search on
* strict (boolean) - Whether the search should be a strict match
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_sovereignty_campaigns
Shows sovereignty data for campaigns.

---
Alternate route: `/v1/sovereignty/campaigns/`

Alternate route: `/legacy/sovereignty/campaigns/`

Alternate route: `/dev/sovereignty/campaigns/`

---
This route is cached for up to 5 seconds


```js
ccp_is.get_sovereignty_campaigns({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_sovereignty_map
Shows sovereignty information for solar systems

---
Alternate route: `/v1/sovereignty/map/`

Alternate route: `/legacy/sovereignty/map/`

Alternate route: `/dev/sovereignty/map/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_sovereignty_map({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_sovereignty_structures
Shows sovereignty data for structures.

---
Alternate route: `/v1/sovereignty/structures/`

Alternate route: `/legacy/sovereignty/structures/`

Alternate route: `/dev/sovereignty/structures/`

---
This route is cached for up to 120 seconds


```js
ccp_is.get_sovereignty_structures({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_status
EVE Server status

---
Alternate route: `/v1/status/`

Alternate route: `/legacy/status/`

Alternate route: `/dev/status/`

---
This route is cached for up to 30 seconds


```js
ccp_is.get_status({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### post_ui_autopilot_waypoint
Set a solar system as autopilot waypoint

---
Alternate route: `/v2/ui/autopilot/waypoint/`

Alternate route: `/dev/ui/autopilot/waypoint/`



```js
ccp_is.post_ui_autopilot_waypoint({
  "add_to_beginning": true,
  "clear_other_waypoints": true,
  "destination_id": 0
}, context)
```

#### Parameters
* add_to_beginning (boolean) **required** - Whether this solar system should be added to the beginning of all waypoints
* clear_other_waypoints (boolean) **required** - Whether clean other waypoints beforing adding this one
* datasource (string) - The server name you would like data from
* destination_id (integer) **required** - The destination to travel to, can be solar system, station or structure's id
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### post_ui_openwindow_contract
Open the contract window inside the client

---
Alternate route: `/v1/ui/openwindow/contract/`

Alternate route: `/legacy/ui/openwindow/contract/`

Alternate route: `/dev/ui/openwindow/contract/`



```js
ccp_is.post_ui_openwindow_contract({
  "contract_id": 0
}, context)
```

#### Parameters
* contract_id (integer) **required** - The contract to open
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### post_ui_openwindow_information
Open the information window for a character, corporation or alliance inside the client

---
Alternate route: `/v1/ui/openwindow/information/`

Alternate route: `/legacy/ui/openwindow/information/`

Alternate route: `/dev/ui/openwindow/information/`



```js
ccp_is.post_ui_openwindow_information({
  "target_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* target_id (integer) **required** - The target to open
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### post_ui_openwindow_marketdetails
Open the market details window for a specific typeID inside the client

---
Alternate route: `/v1/ui/openwindow/marketdetails/`

Alternate route: `/legacy/ui/openwindow/marketdetails/`

Alternate route: `/dev/ui/openwindow/marketdetails/`



```js
ccp_is.post_ui_openwindow_marketdetails({
  "type_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* token (string) - Access token to use if unable to set a header
* type_id (integer) **required** - The item type to open in market window
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### post_ui_openwindow_newmail
Open the New Mail window, according to settings from the request if applicable

---
Alternate route: `/v1/ui/openwindow/newmail/`

Alternate route: `/legacy/ui/openwindow/newmail/`

Alternate route: `/dev/ui/openwindow/newmail/`



```js
ccp_is.post_ui_openwindow_newmail({
  "new_mail": {
    "subject": "",
    "body": "",
    "recipients": []
  }
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* new_mail (object) **required** - new_mail object
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_universe_bloodlines
Get a list of bloodlines

---
Alternate route: `/v1/universe/bloodlines/`

Alternate route: `/legacy/universe/bloodlines/`

Alternate route: `/dev/universe/bloodlines/`

---
This route expires daily at 11:05


```js
ccp_is.get_universe_bloodlines({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* language (string) - Language to use in the response
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_universe_categories
Get a list of item categories

---
Alternate route: `/v1/universe/categories/`

Alternate route: `/legacy/universe/categories/`

Alternate route: `/dev/universe/categories/`

---
This route expires daily at 11:05


```js
ccp_is.get_universe_categories({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_universe_categories_category_id
Get information of an item category

---
Alternate route: `/v1/universe/categories/{category_id}/`

Alternate route: `/legacy/universe/categories/{category_id}/`

Alternate route: `/dev/universe/categories/{category_id}/`

---
This route expires daily at 11:05


```js
ccp_is.get_universe_categories_category_id({
  "category_id": 0
}, context)
```

#### Parameters
* category_id (integer) **required** - An Eve item category ID
* datasource (string) - The server name you would like data from
* language (string) - Language to use in the response
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_universe_constellations
Get a list of constellations

---
Alternate route: `/v1/universe/constellations/`

Alternate route: `/legacy/universe/constellations/`

Alternate route: `/dev/universe/constellations/`

---
This route expires daily at 11:05


```js
ccp_is.get_universe_constellations({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_universe_constellations_constellation_id
Get information on a constellation

---
Alternate route: `/v1/universe/constellations/{constellation_id}/`

Alternate route: `/legacy/universe/constellations/{constellation_id}/`

Alternate route: `/dev/universe/constellations/{constellation_id}/`

---
This route expires daily at 11:05


```js
ccp_is.get_universe_constellations_constellation_id({
  "constellation_id": 0
}, context)
```

#### Parameters
* constellation_id (integer) **required** - constellation_id integer
* datasource (string) - The server name you would like data from
* language (string) - Language to use in the response
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_universe_factions
Get a list of factions

---
Alternate route: `/v1/universe/factions/`

Alternate route: `/legacy/universe/factions/`

Alternate route: `/dev/universe/factions/`

---
This route expires daily at 11:05


```js
ccp_is.get_universe_factions({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* language (string) - Language to use in the response
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_universe_graphics
Get a list of graphics

---
Alternate route: `/v1/universe/graphics/`

Alternate route: `/legacy/universe/graphics/`

Alternate route: `/dev/universe/graphics/`

---
This route expires daily at 11:05


```js
ccp_is.get_universe_graphics({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_universe_graphics_graphic_id
Get information on a graphic

---
Alternate route: `/v1/universe/graphics/{graphic_id}/`

Alternate route: `/legacy/universe/graphics/{graphic_id}/`

Alternate route: `/dev/universe/graphics/{graphic_id}/`

---
This route expires daily at 11:05


```js
ccp_is.get_universe_graphics_graphic_id({
  "graphic_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* graphic_id (integer) **required** - graphic_id integer
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_universe_groups
Get a list of item groups

---
Alternate route: `/v1/universe/groups/`

Alternate route: `/legacy/universe/groups/`

Alternate route: `/dev/universe/groups/`

---
This route expires daily at 11:05


```js
ccp_is.get_universe_groups({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* page (integer) - Which page of results to return
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_universe_groups_group_id
Get information on an item group

---
Alternate route: `/v1/universe/groups/{group_id}/`

Alternate route: `/legacy/universe/groups/{group_id}/`

Alternate route: `/dev/universe/groups/{group_id}/`

---
This route expires daily at 11:05


```js
ccp_is.get_universe_groups_group_id({
  "group_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* group_id (integer) **required** - An Eve item group ID
* language (string) - Language to use in the response
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_universe_moons_moon_id
Get information on a moon

---
Alternate route: `/v1/universe/moons/{moon_id}/`

Alternate route: `/legacy/universe/moons/{moon_id}/`

Alternate route: `/dev/universe/moons/{moon_id}/`

---
This route expires daily at 11:05


```js
ccp_is.get_universe_moons_moon_id({
  "moon_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* moon_id (integer) **required** - moon_id integer
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### post_universe_names
Resolve a set of IDs to names and categories. Supported ID's for resolving are: Characters, Corporations, Alliances, Stations, Solar Systems, Constellations, Regions, Types.

---
Alternate route: `/v2/universe/names/`

Alternate route: `/dev/universe/names/`



```js
ccp_is.post_universe_names({
  "ids": []
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* ids (array) **required** - ids array
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_universe_planets_planet_id
Get information on a planet

---
Alternate route: `/v1/universe/planets/{planet_id}/`

Alternate route: `/legacy/universe/planets/{planet_id}/`

Alternate route: `/dev/universe/planets/{planet_id}/`

---
This route expires daily at 11:05


```js
ccp_is.get_universe_planets_planet_id({
  "planet_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* planet_id (integer) **required** - planet_id integer
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_universe_races
Get a list of character races

---
Alternate route: `/v1/universe/races/`

Alternate route: `/legacy/universe/races/`

Alternate route: `/dev/universe/races/`

---
This route expires daily at 11:05


```js
ccp_is.get_universe_races({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* language (string) - Language to use in the response
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_universe_regions
Get a list of regions

---
Alternate route: `/v1/universe/regions/`

Alternate route: `/legacy/universe/regions/`

Alternate route: `/dev/universe/regions/`

---
This route expires daily at 11:05


```js
ccp_is.get_universe_regions({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_universe_regions_region_id
Get information on a region

---
Alternate route: `/v1/universe/regions/{region_id}/`

Alternate route: `/legacy/universe/regions/{region_id}/`

Alternate route: `/dev/universe/regions/{region_id}/`

---
This route expires daily at 11:05


```js
ccp_is.get_universe_regions_region_id({
  "region_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* language (string) - Language to use in the response
* region_id (integer) **required** - region_id integer
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_universe_schematics_schematic_id
Get information on a planetary factory schematic

---
Alternate route: `/v1/universe/schematics/{schematic_id}/`

Alternate route: `/legacy/universe/schematics/{schematic_id}/`

Alternate route: `/dev/universe/schematics/{schematic_id}/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_universe_schematics_schematic_id({
  "schematic_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* schematic_id (integer) **required** - A PI schematic ID
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_universe_stargates_stargate_id
Get information on a stargate

---
Alternate route: `/v1/universe/stargates/{stargate_id}/`

Alternate route: `/legacy/universe/stargates/{stargate_id}/`

Alternate route: `/dev/universe/stargates/{stargate_id}/`

---
This route expires daily at 11:05


```js
ccp_is.get_universe_stargates_stargate_id({
  "stargate_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* stargate_id (integer) **required** - stargate_id integer
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_universe_stars_star_id
Get information on a star

---
Alternate route: `/v1/universe/stars/{star_id}/`

Alternate route: `/legacy/universe/stars/{star_id}/`

Alternate route: `/dev/universe/stars/{star_id}/`

---
This route expires daily at 11:05


```js
ccp_is.get_universe_stars_star_id({
  "star_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* star_id (integer) **required** - star_id integer
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_universe_stations_station_id
Get information on a station

---
Alternate route: `/v2/universe/stations/{station_id}/`

Alternate route: `/dev/universe/stations/{station_id}/`

---
This route is cached for up to 300 seconds


```js
ccp_is.get_universe_stations_station_id({
  "station_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* station_id (integer) **required** - station_id integer
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_universe_structures
List all public structures

---
Alternate route: `/v1/universe/structures/`

Alternate route: `/legacy/universe/structures/`

Alternate route: `/dev/universe/structures/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_universe_structures({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_universe_structures_structure_id
Returns information on requested structure, if you are on the ACL. Otherwise, returns "Forbidden" for all inputs.

---
Alternate route: `/v1/universe/structures/{structure_id}/`

Alternate route: `/legacy/universe/structures/{structure_id}/`

Alternate route: `/dev/universe/structures/{structure_id}/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_universe_structures_structure_id({
  "structure_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* structure_id (integer) **required** - An Eve structure ID
* token (string) - Access token to use if unable to set a header
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_universe_system_jumps
Get the number of jumps in solar systems within the last hour ending at the timestamp of the Last-Modified header, excluding wormhole space. Only systems with jumps will be listed

---
Alternate route: `/v1/universe/system_jumps/`

Alternate route: `/legacy/universe/system_jumps/`

Alternate route: `/dev/universe/system_jumps/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_universe_system_jumps({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_universe_system_kills
Get the number of ship, pod and NPC kills per solar system within the last hour ending at the timestamp of the Last-Modified header, excluding wormhole space. Only systems with kills will be listed

---
Alternate route: `/v2/universe/system_kills/`

Alternate route: `/dev/universe/system_kills/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_universe_system_kills({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_universe_systems
Get a list of solar systems

---
Alternate route: `/v1/universe/systems/`

Alternate route: `/legacy/universe/systems/`

Alternate route: `/dev/universe/systems/`

---
This route expires daily at 11:05


```js
ccp_is.get_universe_systems({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_universe_systems_system_id
Get information on a solar system

---
Alternate route: `/v3/universe/systems/{system_id}/`

Alternate route: `/dev/universe/systems/{system_id}/`

---
This route expires daily at 11:05


```js
ccp_is.get_universe_systems_system_id({
  "system_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* language (string) - Language to use in the response
* system_id (integer) **required** - system_id integer
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_universe_types
Get a list of type ids

---
Alternate route: `/v1/universe/types/`

Alternate route: `/legacy/universe/types/`

Alternate route: `/dev/universe/types/`

---
This route expires daily at 11:05


```js
ccp_is.get_universe_types({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* page (integer) - Which page of results to return
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_universe_types_type_id
Get information on a type

---
Alternate route: `/v3/universe/types/{type_id}/`

Alternate route: `/dev/universe/types/{type_id}/`

---
This route expires daily at 11:05


```js
ccp_is.get_universe_types_type_id({
  "type_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* language (string) - Language to use in the response
* type_id (integer) **required** - An Eve item type ID
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_wars
Return a list of wars

---
Alternate route: `/v1/wars/`

Alternate route: `/legacy/wars/`

Alternate route: `/dev/wars/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_wars({}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* max_war_id (integer) - Only return wars with ID smaller than this.
* user_agent (string) - Client identifier, takes precedence over headers
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_wars_war_id
Return details about a war

---
Alternate route: `/v1/wars/{war_id}/`

Alternate route: `/legacy/wars/{war_id}/`

Alternate route: `/dev/wars/{war_id}/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_wars_war_id({
  "war_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* user_agent (string) - Client identifier, takes precedence over headers
* war_id (integer) **required** - ID for a war
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

### get_wars_war_id_killmails
Return a list of kills related to a war

---
Alternate route: `/v1/wars/{war_id}/killmails/`

Alternate route: `/legacy/wars/{war_id}/killmails/`

Alternate route: `/dev/wars/{war_id}/killmails/`

---
This route is cached for up to 3600 seconds


```js
ccp_is.get_wars_war_id_killmails({
  "war_id": 0
}, context)
```

#### Parameters
* datasource (string) - The server name you would like data from
* page (integer) - Which page of results to return
* user_agent (string) - Client identifier, takes precedence over headers
* war_id (integer) **required** - A valid war ID
* X-User-Agent (string) - Client identifier, takes precedence over User-Agent

