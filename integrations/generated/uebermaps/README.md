# @datafire/uebermaps

Client library for uebermaps API endpoints

## Installation and Usage
```bash
npm install --save @datafire/uebermaps
```
```js
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

#### Input
* input `object`
  * user [UserEditable](#usereditable)

#### Output
* output [User](#user)

### attachments.id.delete
Delete attachment.


```js
uebermaps.attachments.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Attachment id

#### Output
* output [Attachment](#attachment)

### authentication.post
Sign in user. Wrap authentication parameters in [user].


```js
uebermaps.authentication.post({
  "user": null
}, context)
```

#### Input
* input `object`
  * user **required** [UserAuthentication](#userauthentication)

#### Output
* output [UserFullProfile](#userfullprofile)

### collaborator_invitations.get
List your collaborator invitations.


```js
uebermaps.collaborator_invitations.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [CollaboratorInvitation](#collaboratorinvitation)

### collaborator_invitations.post
Invite user to collaborate on map.


```js
uebermaps.collaborator_invitations.post({}, context)
```

#### Input
* input `object`
  * body [CollaboratorInvitationCreate](#collaboratorinvitationcreate)

#### Output
* output [CollaboratorInvitation](#collaboratorinvitation)

### collaborator_invitations.id.delete
Delete collaborator invitation.


```js
uebermaps.collaborator_invitations.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Collaborator invitation id

#### Output
* output [CollaboratorInvitation](#collaboratorinvitation)

### collaborator_invitations.id.get
Show collaborator invitation


```js
uebermaps.collaborator_invitations.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Collaborator invitation id

#### Output
* output [CollaboratorInvitation](#collaboratorinvitation)

### collaborator_invitations.id.patch
Accept collaborator invitation.


```js
uebermaps.collaborator_invitations.id.patch({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Collaborator invitation id

#### Output
* output [CollaboratorInvitation](#collaboratorinvitation)

### comments.id.delete
Delete comment.


```js
uebermaps.comments.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Comment id

#### Output
* output [Comment](#comment)

### comments.id.patch
Update comment. Wrap comment parameters in [comment].


```js
uebermaps.comments.id.patch({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Comment id
  * comment [CommentEditable](#commenteditable)

#### Output
* output [Comment](#comment)

### events.get
List your own events.


```js
uebermaps.events.get({}, context)
```

#### Input
* input `object`
  * timeframe_start `string`: Begin of time range of event (ISO 8601 date format).
  * timeframe_end `string`: End of time range of event (ISO 8601 date format).
  * bounds `string`: To refine your event index request to contain only events within                                                             a geographical box pass the followng bounds parameters.                                                             F. e. to get events within 'Hamburg, St. Pauli':                                                             bounds[sw_lat]=53.54831449741324                                                             bounds[sw_lon]=9.943227767944336                                                             bounds[ne_lat]=53.5571103674878                                                             bounds[ne_lon]=9.9776029586792

#### Output
* output `array`
  * items [Event](#event)

### events.id.delete
Delete event.


```js
uebermaps.events.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Event id

#### Output
* output [Event](#event)

### events.id.get
Get basic information about an event


```js
uebermaps.events.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of event

#### Output
* output [Event](#event)

### events.id.patch
Update event. Wrap event parameters in [event].


```js
uebermaps.events.id.patch({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Event id
  * event [EventEditable](#eventeditable)

#### Output
* output [Map](#map)

### maps.get
List your own maps.


```js
uebermaps.maps.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Map](#map)

### maps.post
Create map. Wrap map parameters in [map]. To add a map header picture pass a base64 encoded string to [map][picture].


```js
uebermaps.maps.post({}, context)
```

#### Input
* input `object`
  * map [MapEditable](#mapeditable)

#### Output
* output [Map](#map)

### maps.search.get
Search maps


```js
uebermaps.maps.search.get({}, context)
```

#### Input
* input `object`
  * q `string`: Query
  * d `integer`: Distance. Diameter of search radius in meter (default: 2000 meter)
  * lat `number`: Latitude for search radius (default distance: 2000 meter)
  * lon `number`: Longitude for search radius (default distance: 2000 meter)

#### Output
* output [Map](#map)

### maps.id.delete
Delete map.


```js
uebermaps.maps.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: map id

#### Output
* output [Map](#map)

### maps.id.get
Get basic information about a map


```js
uebermaps.maps.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of map

#### Output
* output [MapWithRelation](#mapwithrelation)

### maps.id.patch
Update map. Wrap map parameters in [map]. To update the map header picture pass a base64 encoded string to [map][picture].


```js
uebermaps.maps.id.patch({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: map id
  * map [MapEditable](#mapeditable)

#### Output
* output [Map](#map)

### maps.id.attachments.get
List attachments for a given map.


```js
uebermaps.maps.id.attachments.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Map id

#### Output
* output `array`
  * items [Attachment](#attachment)

### maps.id.attachments.post
Upload map attachment. Wrap attachment parameters in [attachment]


```js
uebermaps.maps.id.attachments.post({
  "id": 0,
  "image": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Map id
  * image **required** `string`

#### Output
* output [Attachment](#attachment)

### maps.id.collaborators.get
List collaborators of a map.


```js
uebermaps.maps.id.collaborators.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Map id

#### Output
* output `array`
  * items [Collaborator](#collaborator)

### maps.id.collaborators.user_id.delete
Delete collaboration.


```js
uebermaps.maps.id.collaborators.user_id.delete({
  "id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: map id
  * user_id **required** `integer`: user id

#### Output
* output [Collaborator](#collaborator)

### maps.id.collaborators.user_id.patch
Update collaborator. Wrap collaborator parameters in [collaborator]


```js
uebermaps.maps.id.collaborators.user_id.patch({
  "id": 0,
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: map id
  * user_id **required** `integer`: user id
  * collaborator [CollaboratorEditable](#collaboratoreditable)

#### Output
* output [Collaborator](#collaborator)

### maps.id.comments.get
List comments for a given map.


```js
uebermaps.maps.id.comments.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of map

#### Output
* output `array`
  * items [Comment](#comment)

### maps.id.comments.post
Create map comment. Wrap comment parameters in [comment].


```js
uebermaps.maps.id.comments.post({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: map id
  * comment [CommentEditable](#commenteditable)

#### Output
* output [Comment](#comment)

### maps.id.respots.get
List respots of a map.


```js
uebermaps.maps.id.respots.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Map Id

#### Output
* output `array`
  * items [Respot](#respot)

### maps.id.spots.get
List spots for a given map.


```js
uebermaps.maps.id.spots.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of map
  * order `string` (values: created_at_asc, created_at_desc, updated_at_asc, updated_at_desc, title_asc, title_desc): Order of spots

#### Output
* output `array`
  * items [Spot](#spot)

### maps.id.spots.post
Create spot. Wrap parameters in [spot]. To add a spot picture pass a base64 encoded string to [spot][picture].


```js
uebermaps.maps.id.spots.post({
  "id": 0,
  "spot": null
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of map
  * spot **required** [SpotEditable](#spoteditable)

#### Output
* output [Spot](#spot)

### maps.id.subscriptions.delete
Unsubscribe from map.


```js
uebermaps.maps.id.subscriptions.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: map id

#### Output
* output [Subscription](#subscription)

### maps.id.subscriptions.get
List subscriptions for a given map.


```js
uebermaps.maps.id.subscriptions.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of map

#### Output
* output `array`
  * items [Subscription](#subscription)

### maps.map_id.spots.id.get
Get basic information about a spot


```js
uebermaps.maps.map_id.spots.id.get({
  "id": 0,
  "map_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of spot
  * map_id **required** `integer`: Id of map

#### Output
* output [Spot](#spot)

### maps.map_id.spots.spot_id.respot.delete
Delete respot from map by spot id.


```js
uebermaps.maps.map_id.spots.spot_id.respot.delete({
  "map_id": 0,
  "spot_id": 0
}, context)
```

#### Input
* input `object`
  * map_id **required** `integer`: Map Id
  * spot_id **required** `integer`: Spot Id

#### Output
* output [Respot](#respot)

### respot_maps.get
List maps that user can respot to.


```js
uebermaps.respot_maps.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Map](#map)

### respots.id.delete
Delete respot.


```js
uebermaps.respots.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Respot Id

#### Output
* output [Respot](#respot)

### respots.id.get
Get basic information about a respot


```js
uebermaps.respots.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of respot

#### Output
* output [Respot](#respot)

### share.map.id.get
Get secret access token of an uebermap with access set to 'Secret link'. Pass the 'token' on every request you make to access this uebermap and its resources. F.e. token=1-x_gqu7eLBe3uKoAGAGXy


```js
uebermaps.share.map.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of map

#### Output
* output [MapWithAuthToken](#mapwithauthtoken)

### spots.get
List your own spots.


```js
uebermaps.spots.get({}, context)
```

#### Input
* input `object`
  * order `string` (values: created_at_asc, created_at_desc, updated_at_asc, updated_at_desc, title_asc, title_desc): Order of spots

#### Output
* output `array`
  * items [Spot](#spot)

### spots.search.get
Search spots


```js
uebermaps.spots.search.get({}, context)
```

#### Input
* input `object`
  * q `string`: Query
  * d `integer`: Distance. Diameter of search radius in meter (default: 2000 meter)
  * lat `number`: Latitude for search radius (2 km)
  * lon `number`: Longitude for search radius (2 km)

#### Output
* output [Spot](#spot)

### spots.id.delete
Delete spot.


```js
uebermaps.spots.id.delete({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: spot id

#### Output
* output [Spot](#spot)

### spots.id.patch
Update spot. Wrap parameters in [spot]. To update the spot picture pass a base64 encoded string to [spot][picture].


```js
uebermaps.spots.id.patch({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: spot id
  * spot [SpotEditable](#spoteditable)

#### Output
* output [Spot](#spot)

### spots.id.attachments.get
List attachments for a given spot.


```js
uebermaps.spots.id.attachments.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Spot id

#### Output
* output `array`
  * items [Attachment](#attachment)

### spots.id.attachments.post
Upload spot attachment. Wrap attachment parameters in [attachment]


```js
uebermaps.spots.id.attachments.post({
  "id": 0,
  "image": ""
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Spot id
  * image **required** `string`

#### Output
* output [Attachment](#attachment)

### spots.id.comments.get
List comments for a given spot.


```js
uebermaps.spots.id.comments.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of spot

#### Output
* output `array`
  * items [Comment](#comment)

### spots.id.comments.post
Create spot comment. Wrap comment parameters in [comment].


```js
uebermaps.spots.id.comments.post({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: spot id
  * comment [CommentEditable](#commenteditable)

#### Output
* output [Comment](#comment)

### spots.id.events.get
List maps for a given spot.


```js
uebermaps.spots.id.events.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of spot
  * timeframe_start `string`: Begin of time range of event (ISO 8601 date format).
  * timeframe_end `string`: End of time range of event (ISO 8601 date format).
  * bounds `string`: To refine your event index request to contain only events within                                                             a geographical box pass the followng bounds parameters.                                                             F. e. to get events within 'Hamburg, St. Pauli':                                                             bounds[sw_lat]=53.54831449741324                                                             bounds[sw_lon]=9.943227767944336                                                             bounds[ne_lat]=53.5571103674878                                                             bounds[ne_lon]=9.9776029586792

#### Output
* output `array`
  * items [Event](#event)

### spots.id.events.post
Create event. Wrap map parameters in [event].


```js
uebermaps.spots.id.events.post({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Spot id
  * event [EventEditable](#eventeditable)

#### Output
* output [Event](#event)

### spots.id.respots.post
Respot a spot onto a map.


```js
uebermaps.spots.id.respots.post({
  "id": 0,
  "map_id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Spot Id
  * map_id **required** `number`

#### Output
* output [Respot](#respot)

### subscriptions.get
List subscriptions.


```js
uebermaps.subscriptions.get({}, context)
```

#### Input
* input `object`
  * user_id `integer`: Id of user
  * map_id `integer`: Id of map

#### Output
* output `array`
  * items [Subscription](#subscription)

### subscriptions.post
Create map subscription.


```js
uebermaps.subscriptions.post({
  "map_id": 0
}, context)
```

#### Input
* input `object`
  * map_id **required** `number`

#### Output
* output [Subscription](#subscription)

### trends.latest.get
List latest maps.


```js
uebermaps.trends.latest.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Map](#map)

### trends.recommended.get
List recommended maps.


```js
uebermaps.trends.recommended.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Map](#map)

### users.search.get
Search users


```js
uebermaps.users.search.get({}, context)
```

#### Input
* input `object`
  * q `string`: Query

#### Output
* output [User](#user)

### users.id.get
Get profile a user


```js
uebermaps.users.id.get({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Id of user

#### Output
* output [User](#user)

### users.user_id.maps.get
List maps for a given user.


```js
uebermaps.users.user_id.maps.get({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `integer`: Id of user

#### Output
* output `array`
  * items [Map](#map)



## Definitions

### Attachment
* Attachment `object`
  * attachable_id `integer`
  * attachable_type `string`
  * created_at `string`
  * description `string`
  * file_url `string`
  * id `integer`
  * map_id `integer`
  * sizes `object`
  * spot [Spot](#spot)
  * status `string` (values: approved, unapproved)
  * user [User](#user)

### Collaborator
* Collaborator `object`
  * created_at `string`
  * group `string` (values: admin, editor)
  * id `integer`
  * is_admin `boolean`
  * map [Map](#map)
  * map_id `integer`
  * updated_at `string`
  * user [User](#user)
  * user_id `integer`

### CollaboratorEditable
* CollaboratorEditable `object`
  * group `string` (values: admin, editor)

### CollaboratorInvitation
* CollaboratorInvitation `object`
  * accepted `boolean`
  * created_at `string`
  * email `string`
  * group `string` (values: admin, editor)
  * id `integer`
  * invited_by_user [User](#user)
  * map [Map](#map)
  * sent `boolean`
  * updated_at `string`
  * user [User](#user)

### CollaboratorInvitationCreate
* CollaboratorInvitationCreate `object`
  * emails `string`
  * is_admin `boolean`
  * map_id `integer`
  * user_ids `string`

### Comment
* Comment `object`
  * body `string`
  * created_at `string`
  * id `integer`
  * status `string` (values: approved, unapproved)
  * updated_at `string`
  * user [User](#user)

### CommentEditable
* CommentEditable `object`
  * body `string`

### Event
* Event `object`
  * counts [EventCounts](#eventcounts)
  * created_at `string`
  * description `string`
  * ends_at `string`
  * id `integer`
  * lat `number`
  * lon `number`
  * owner_id `integer`
  * picture_url `string`
  * spot [Spot](#spot)
  * starts_at `string`
  * time_zone `string`
  * title `string`
  * updated_at `string`
  * user [User](#user)

### EventCounts
* EventCounts `object`
  * attachments `integer`
  * comments `integer`

### EventEditable
* EventEditable `object`
  * description `string`
  * ends_at `string`
  * lat `number`
  * lon `number`
  * picture `string`
  * starts_at `string`
  * time_zone `string`
  * title `string`
  * user_id `integer`

### Map
* Map `object`
  * counts [MapCounts](#mapcounts)
  * created_at `string`
  * description `string`
  * id `integer`
  * map_settings [MapSettings](#mapsettings)
  * owner_id `integer`
  * picture_url `string`
  * title `string`
  * updated_at `string`
  * visibility `string` (values: public, link, private)

### MapCounts
* MapCounts `object`
  * attachments `integer`
  * comments `integer`
  * impressions `integer`
  * respots `integer`
  * spots `integer`
  * subscriptions `integer`

### MapEditable
* MapEditable `object`
  * description `string`
  * map_settings [MapSettings](#mapsettings)
  * picture `string`
  * title `string`
  * visibility `string` (values: public, link, private)

### MapRelation
* MapRelation `object`
  * access `string`
  * access_group `string` (values: visitor, editor, admin)
  * subscribed `boolean`

### MapSettings
* MapSettings `object`
  * editor_access `string`
  * respotting_to_this_map `boolean`
  * visitor_access `string`

### MapWithAuthToken
* MapWithAuthToken `object`
  * counts [MapCounts](#mapcounts)
  * created_at `string`
  * description `string`
  * id `integer`
  * owner_id `integer`
  * picture_url `string`
  * title `string`
  * token `string`
  * updated_at `string`
  * visibility `string` (values: public, link, private)

### MapWithRelation
* MapWithRelation `object`
  * counts [MapCounts](#mapcounts)
  * created_at `string`
  * description `string`
  * id `integer`
  * map_settings [MapSettings](#mapsettings)
  * owner_id `integer`
  * picture_url `string`
  * relation [MapRelation](#maprelation)
  * title `string`
  * updated_at `string`
  * visibility `string` (values: public, link, private)

### Respot
* Respot `object`
  * created_at `string`
  * id `integer`
  * map [Map](#map)
  * map_id `integer`
  * spot [Spot](#spot)
  * updated_at `string`
  * user [User](#user)

### Spot
* Spot `object`
  * counts [SpotCounts](#spotcounts)
  * created_at `string`
  * description `string`
  * id `integer`
  * lat `number`
  * lon `number`
  * map_id `integer`
  * picture_url `string`
  * status `string` (values: approved, unapproved)
  * time_zone `string`
  * title `string`
  * updated_at `string`
  * user [User](#user)

### SpotCounts
* SpotCounts `object`
  * attachments `integer`
  * comments `integer`
  * respot `integer`

### SpotEditable
* SpotEditable `object`
  * description `string`
  * lat `number`
  * lon `number`
  * picture `string`
  * time_zone `string`
  * title `string`

### Subscription
* Subscription `object`
  * created_at `string`
  * id `integer`
  * map [Map](#map)
  * updated_at `string`
  * user [User](#user)
  * user_id `integer`

### User
* User `object`
  * about `string`
  * counts `object`
    * maps `integer`
  * header_picture `string`
  * id `integer`
  * location `string`
  * name `string`
  * picture_url `string`
  * screen_name `string`
  * url `string`

### UserAuthentication
* UserAuthentication `object`
  * email `string`
  * password `string`

### UserEditable
* UserEditable `object`
  * about `string`
  * header `string`
  * language `string`
  * location `string`
  * name `string`
  * picture `string`
  * screen_name `string`
  * time_zone `string`
  * url `string`

### UserFullProfile
* UserFullProfile `object`
  * auth_token `string`
  * language `string`
  * time_zone `string`
  * about `string`
  * counts `object`
    * maps `integer`
  * header_picture `string`
  * id `integer`
  * location `string`
  * name `string`
  * picture_url `string`
  * screen_name `string`
  * url `string`


