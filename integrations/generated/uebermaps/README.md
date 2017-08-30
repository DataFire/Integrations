# @datafire/uebermaps

Client library for uebermaps API endpoints

## Installation and Usage
```bash
npm install --save datafire @datafire/uebermaps
```

```js
let datafire = require('datafire');
let uebermaps = require('@datafire/uebermaps').create();

uebermaps.users.search.get({}).then(data => {
  console.log(data);
})
```

## Description
Enable people to store spots on public and private maps

## Actions
### account.patch
Update account. Wrap map parameters in [user].


```js
uebermaps.account.patch({}, context)
```

#### Parameters
* user (undefined)

### attachments.id.delete
Delete attachment.


```js
uebermaps.attachments.id.delete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Attachment id

### authentication.post
Sign in user. Wrap authentication parameters in [user].


```js
uebermaps.authentication.post({
  "user": null
}, context)
```

#### Parameters
* user (undefined) **required**

### collaborator_invitations.get
List your collaborator invitations.


```js
uebermaps.collaborator_invitations.get(null, context)
```

#### Parameters
*This action has no parameters*

### collaborator_invitations.post
Invite user to collaborate on map.


```js
uebermaps.collaborator_invitations.post({}, context)
```

#### Parameters
* body (undefined)

### collaborator_invitations.id.delete
Delete collaborator invitation.


```js
uebermaps.collaborator_invitations.id.delete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Collaborator invitation id

### collaborator_invitations.id.get
Show collaborator invitation


```js
uebermaps.collaborator_invitations.id.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Collaborator invitation id

### collaborator_invitations.id.patch
Accept collaborator invitation.


```js
uebermaps.collaborator_invitations.id.patch({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Collaborator invitation id

### comments.id.delete
Delete comment.


```js
uebermaps.comments.id.delete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Comment id

### comments.id.patch
Update comment. Wrap comment parameters in [comment].


```js
uebermaps.comments.id.patch({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Comment id
* comment (undefined)

### events.get
List your own events.


```js
uebermaps.events.get({}, context)
```

#### Parameters
* timeframe_start (string) - Begin of time range of event (ISO 8601 date format).
* timeframe_end (string) - End of time range of event (ISO 8601 date format).
* bounds (string) - To refine your event index request to contain only events within                                                             a geographical box pass the followng bounds parameters.                                                             F. e. to get events within 'Hamburg, St. Pauli':                                                             bounds[sw_lat]=53.54831449741324                                                             bounds[sw_lon]=9.943227767944336                                                             bounds[ne_lat]=53.5571103674878                                                             bounds[ne_lon]=9.9776029586792

### events.id.delete
Delete event.


```js
uebermaps.events.id.delete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Event id

### events.id.get
Get basic information about an event


```js
uebermaps.events.id.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Id of event

### events.id.patch
Update event. Wrap event parameters in [event].


```js
uebermaps.events.id.patch({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Event id
* event (undefined)

### maps.get
List your own maps.


```js
uebermaps.maps.get(null, context)
```

#### Parameters
*This action has no parameters*

### maps.post
Create map. Wrap map parameters in [map]. To add a map header picture pass a base64 encoded string to [map][picture].


```js
uebermaps.maps.post({}, context)
```

#### Parameters
* map (undefined)

### maps.search.get
Search maps


```js
uebermaps.maps.search.get({}, context)
```

#### Parameters
* q (string) - Query
* d (integer) - Distance. Diameter of search radius in meter (default: 2000 meter)
* lat (number) - Latitude for search radius (default distance: 2000 meter)
* lon (number) - Longitude for search radius (default distance: 2000 meter)

### maps.id.delete
Delete map.


```js
uebermaps.maps.id.delete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - map id

### maps.id.get
Get basic information about a map


```js
uebermaps.maps.id.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Id of map

### maps.id.patch
Update map. Wrap map parameters in [map]. To update the map header picture pass a base64 encoded string to [map][picture].


```js
uebermaps.maps.id.patch({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - map id
* map (undefined)

### maps.id.attachments.get
List attachments for a given map.


```js
uebermaps.maps.id.attachments.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Map id

### maps.id.attachments.post
Upload map attachment. Wrap attachment parameters in [attachment]


```js
uebermaps.maps.id.attachments.post({
  "id": 0,
  "image": ""
}, context)
```

#### Parameters
* id (integer) **required** - Map id
* image (string) **required**

### maps.id.collaborators.get
List collaborators of a map.


```js
uebermaps.maps.id.collaborators.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Map id

### maps.id.collaborators.user_id.delete
Delete collaboration.


```js
uebermaps.maps.id.collaborators.user_id.delete({
  "id": 0,
  "user_id": 0
}, context)
```

#### Parameters
* id (integer) **required** - map id
* user_id (integer) **required** - user id

### maps.id.collaborators.user_id.patch
Update collaborator. Wrap collaborator parameters in [collaborator]


```js
uebermaps.maps.id.collaborators.user_id.patch({
  "id": 0,
  "user_id": 0
}, context)
```

#### Parameters
* id (integer) **required** - map id
* user_id (integer) **required** - user id
* collaborator (undefined)

### maps.id.comments.get
List comments for a given map.


```js
uebermaps.maps.id.comments.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Id of map

### maps.id.comments.post
Create map comment. Wrap comment parameters in [comment].


```js
uebermaps.maps.id.comments.post({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - map id
* comment (undefined)

### maps.id.respots.get
List respots of a map.


```js
uebermaps.maps.id.respots.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Map Id

### maps.id.spots.get
List spots for a given map.


```js
uebermaps.maps.id.spots.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Id of map
* order (string) - Order of spots

### maps.id.spots.post
Create spot. Wrap parameters in [spot]. To add a spot picture pass a base64 encoded string to [spot][picture].


```js
uebermaps.maps.id.spots.post({
  "id": 0,
  "spot": null
}, context)
```

#### Parameters
* id (integer) **required** - Id of map
* spot (undefined) **required**

### maps.id.subscriptions.delete
Unsubscribe from map.


```js
uebermaps.maps.id.subscriptions.delete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - map id

### maps.id.subscriptions.get
List subscriptions for a given map.


```js
uebermaps.maps.id.subscriptions.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Id of map

### maps.map_id.spots.id.get
Get basic information about a spot


```js
uebermaps.maps.map_id.spots.id.get({
  "id": 0,
  "map_id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Id of spot
* map_id (integer) **required** - Id of map

### maps.map_id.spots.spot_id.respot.delete
Delete respot from map by spot id.


```js
uebermaps.maps.map_id.spots.spot_id.respot.delete({
  "map_id": 0,
  "spot_id": 0
}, context)
```

#### Parameters
* map_id (integer) **required** - Map Id
* spot_id (integer) **required** - Spot Id

### respot_maps.get
List maps that user can respot to.


```js
uebermaps.respot_maps.get(null, context)
```

#### Parameters
*This action has no parameters*

### respots.id.delete
Delete respot.


```js
uebermaps.respots.id.delete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Respot Id

### respots.id.get
Get basic information about a respot


```js
uebermaps.respots.id.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Id of respot

### spots.search.get
Search spots


```js
uebermaps.spots.search.get({}, context)
```

#### Parameters
* q (string) - Query
* d (integer) - Distance. Diameter of search radius in meter (default: 2000 meter)
* lat (number) - Latitude for search radius (2 km)
* lon (number) - Longitude for search radius (2 km)

### spots.id.delete
Delete spot.


```js
uebermaps.spots.id.delete({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - spot id

### spots.id.patch
Update spot. Wrap parameters in [spot]. To update the spot picture pass a base64 encoded string to [spot][picture].


```js
uebermaps.spots.id.patch({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - spot id
* spot (undefined)

### spots.id.attachments.get
List attachments for a given spot.


```js
uebermaps.spots.id.attachments.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Spot id

### spots.id.attachments.post
Upload spot attachment. Wrap attachment parameters in [attachment]


```js
uebermaps.spots.id.attachments.post({
  "id": 0,
  "image": ""
}, context)
```

#### Parameters
* id (integer) **required** - Spot id
* image (string) **required**

### spots.id.comments.get
List comments for a given spot.


```js
uebermaps.spots.id.comments.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Id of spot

### spots.id.comments.post
Create spot comment. Wrap comment parameters in [comment].


```js
uebermaps.spots.id.comments.post({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - spot id
* comment (undefined)

### spots.id.events.get
List maps for a given spot.


```js
uebermaps.spots.id.events.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Id of spot
* timeframe_start (string) - Begin of time range of event (ISO 8601 date format).
* timeframe_end (string) - End of time range of event (ISO 8601 date format).
* bounds (string) - To refine your event index request to contain only events within                                                             a geographical box pass the followng bounds parameters.                                                             F. e. to get events within 'Hamburg, St. Pauli':                                                             bounds[sw_lat]=53.54831449741324                                                             bounds[sw_lon]=9.943227767944336                                                             bounds[ne_lat]=53.5571103674878                                                             bounds[ne_lon]=9.9776029586792

### spots.id.events.post
Create event. Wrap map parameters in [event].


```js
uebermaps.spots.id.events.post({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Spot id
* event (undefined)

### spots.id.respots.post
Respot a spot onto a map.


```js
uebermaps.spots.id.respots.post({
  "id": 0,
  "map_id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Spot Id
* map_id (number) **required**

### subscriptions.get
List subscriptions.


```js
uebermaps.subscriptions.get({}, context)
```

#### Parameters
* user_id (integer) - Id of user
* map_id (integer) - Id of map

### subscriptions.post
Create map subscription.


```js
uebermaps.subscriptions.post({
  "map_id": 0
}, context)
```

#### Parameters
* map_id (number) **required**

### trends.latest.get
List latest maps.


```js
uebermaps.trends.latest.get(null, context)
```

#### Parameters
*This action has no parameters*

### trends.recommended.get
List recommended maps.


```js
uebermaps.trends.recommended.get(null, context)
```

#### Parameters
*This action has no parameters*

### users.search.get
Search users


```js
uebermaps.users.search.get({}, context)
```

#### Parameters
* q (string) - Query

### users.id.get
Get profile a user


```js
uebermaps.users.id.get({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Id of user

### users.user_id.maps.get
List maps for a given user.


```js
uebermaps.users.user_id.maps.get({
  "user_id": 0
}, context)
```

#### Parameters
* user_id (integer) **required** - Id of user

