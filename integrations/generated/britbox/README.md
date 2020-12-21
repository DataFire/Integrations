# @datafire/britbox

Client library for Rocket Services

## Installation and Usage
```bash
npm install --save @datafire/britbox
```
```js
let britbox = require('@datafire/britbox').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
  resetPasswordAuth: "",
  verifyEmailAuth: ""
});

.then(data => {
  console.log(data);
});
```

## Description

An Orchestration Layer that takes ISL services and packages them in a more targeted way for front-end applications.
This in turn makes client integration easier and reduces the complexity and size of front-end applications.

Rocket is also customisable - allowing UI engineers to ‘remix’ the existing back-end services into something that
best suits the application they are developing.


## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
britbox.oauthCallback({
  "code": ""
}, context)
```

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
britbox.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### getAccount
Get the details of an account along with the profiles and entitlements under it.


```js
britbox.getAccount({}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [Account](#account)

### updateAccount
Update the details of an account.

With the exception of the address, this supports partial updates, so you can send just the
properties you wish to update.

When the address is provided any properties which are omitted from the address will be cleared.



```js
britbox.updateAccount({
  "body": {}
}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [AccountUpdateRequest](#accountupdaterequest)

#### Output
*Output schema unknown*

### getPaymentMethods
Get the available payment methods under an account.


```js
britbox.getPaymentMethods({}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output `array`
  * items [PaymentMethod](#paymentmethod)

### addPaymentMethod
Add a new payment method to an account.


```js
britbox.addPaymentMethod({
  "body": {
    "token": "",
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [AddPaymentMethodRequest](#addpaymentmethodrequest)

#### Output
* output [PaymentMethod](#paymentmethod)

### removePaymentMethod
Remove a payment method from an account.


```js
britbox.removePaymentMethod({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the payment method to remove.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
*Output schema unknown*

### getPaymentMethod
Get a payment method under an account.


```js
britbox.getPaymentMethod({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The id of the payment method to get.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [PaymentMethod](#paymentmethod)

### getPurchases
Get a list of all purchases made under an account.


```js
britbox.getPurchases({}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output `array`
  * items [Purchase](#purchase)

### makePurchase
Purchase a plan or item offer.
The result of a successful transaction is a new entitlement.



```js
britbox.makePurchase({
  "body": {}
}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [PurchaseRequest](#purchaserequest)

#### Output
* output [Entitlement](#entitlement)

### cancelSubscription
Cancel a plan subscription.

A cancelled subscription will continue to be valid until the subscription
expiry date or next renewal date.



```js
britbox.cancelSubscription({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The identifier of the current active subscription membership of the account.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
*Output schema unknown*

### updateSubscription
Renew a cancelled subscription or switch subscription to a different plan.

When renewing a cancelled subscription membership, hit this endpoint with
the id of subscription to renew.

To switch plans provide the id of the current active subscription membership
of the account, and in the query specify the id of the plan to switch to.



```js
britbox.updateSubscription({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The identifier of the current subscription membership
  * planId `string`: The id of the plan to switch to if switching plans.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
*Output schema unknown*

### getDevices
Get all devices registered under this account.

Also includes information around device registration and deregistration limits.



```js
britbox.getDevices({}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [AccountDevices](#accountdevices)

### registerDevice
Register a playback device under an account.

If a device with the same id already exists a `409` conflict will be returned.



```js
britbox.registerDevice({
  "body": {
    "id": "",
    "name": "",
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [DeviceRegistrationRequest](#deviceregistrationrequest)

#### Output
* output [Device](#device)

### authorizeDevice
Authorize a device from a generated device authorization code.

This is the second step in the process of authorizing a device by pin code.

Firstly the device must request a generated authorization code via the
`/authorization/device/code` endpoint.

This endpoint then authorizes the device associated with the code to sign in
to a user account. Typically this endpoint will be called from a page
presented in the web app under the account section.

Once authorized, the device will then be able to sign in to that account
via the `/authorization/device` endpoint, without needing to provide the
credentials of the user.



```js
britbox.authorizeDevice({
  "body": {
    "code": ""
  }
}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [DeviceAuthorizationCode](#deviceauthorizationcode)

#### Output
*Output schema unknown*

### deregisterDevice
Deregister a playback device from an account.


```js
britbox.deregisterDevice({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique identifier for the registered device e.g. serial number.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
*Output schema unknown*

### getDevice
Get a registered device.


```js
britbox.getDevice({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique identifier for the registered device e.g. serial number.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [Device](#device)

### renameDevice
Rename a device


```js
britbox.renameDevice({
  "id": "",
  "name": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The unique identifier for this registered device e.g. serial number.
  * name **required** `string`: The new name for the device.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
*Output schema unknown*

### getEntitlements
Get all entitlements under the account.

This list is returned under the call to get account information so a call here is
only required when wishing to refresh a local copy of entitlements.



```js
britbox.getEntitlements({}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output `array`
  * items [Entitlement](#entitlement)

### getItemMediaFiles
Get the video files associated with an item given maximum resolution, device type
and one or more delivery types.

This endpoint accepts an Account Catalog token, however if when requesting
playback files you receive an *403 status code with error code 1* then the file
you're requesting is classification restricted. This means you should switch
to target the `/account/items/{id}/videos-guarded` endpoint, passing it an Account
Playback token. If not already obtained, this token can be requested via the
`/itv/pinauthorization` endpoint with an account level pin.

For convenience you may also access free / public files through this endpoint
instead of the /items/{id}/videos endpoint, when authenticated.

Returns an array of video file objects which each include a url to a video.

The first entry in the array contains what is predicted to be the best match.
The remainder of the entries, if any, may contain resolutions below what was
requests. For example if you request HD-720 the response may also contain
SD entries.

If you specify multiple delivery types, then the response array will insert
types in the order you specify them in the query. For example `stream,progressive`
would return an array with 0 or more stream files followed by 0 or more progressive files.

If no files are found a 404 is returned.



```js
britbox.getItemMediaFiles({
  "id": "",
  "delivery": [],
  "resolution": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The identifier of the item whose video files to load.
  * delivery **required** `array`: The video delivery type you require.
  * resolution **required** `string` (values: HD-4K, HD-1080, HD-720, SD, External): The maximum resolution the device to playback the media can present.
  * formats `array`: The set of media file formats that the device supports, in the order of preference.
  * device `string`: The type of device the content is targeting.
  * sub `string`: The active subscription code.
  * segments `array`: The list of segments to filter the response by.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output `array`
  * items [MediaFile](#mediafile)

### getItemMediaFilesGuarded
Get the video files associated with an item given maximum resolution, device type
and one or more delivery types.

This endpoint is identical to the `/account/items/{id}/videos` however it expects
an Account Playback token. This token, and in association this endpoint, is specifically
for use when playback files are classification restricted and require an account
level pin to access them.

Returns an array of video file objects which each include a url to a video.

The first entry in the array contains what is predicted to be the best match.
The remainder of the entries, if any, may contain resolutions below what was
requests. For example if you request HD-720 the response may also contain
SD entries.

If you specify multiple delivery types, then the response array will insert
types in the order you specify them in the query. For example `stream,progressive`
would return an array with 0 or more stream files followed by 0 or more progressive files.

If no files are found a 404 is returned.



```js
britbox.getItemMediaFilesGuarded({
  "id": "",
  "delivery": [],
  "resolution": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The identifier of the item whose video files to load.
  * delivery **required** `array`: The video delivery type you require.
  * resolution **required** `string` (values: HD-4K, HD-1080, HD-720, SD, External): The maximum resolution the device to playback the media can present.
  * formats `array`: The set of media file formats that the device supports, in the order of preference.
  * device `string`: The type of device the content is targeting.
  * sub `string`: The active subscription code.
  * segments `array`: The list of segments to filter the response by.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output `array`
  * items [MediaFile](#mediafile)

### generateNonce
Generate a new account nonce.

A nonce may be required to help sign a response from a third party
service which will be passed back to these services.

For example a Facebook single-sign-on request initiated by a client
application may first get a nonce from here to include in the request.
Facebook will then include the nonce in the auth token it issues. This
token can be passed back to our services and the nonce checked for validity.



```js
britbox.generateNonce({}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [AccountNonce](#accountnonce)

### changePassword
Change the password of an account.

The expected token scope is Settings.



```js
britbox.changePassword({
  "body": {
    "password": "",
    "profileToken": ""
  }
}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [ChangePasswordRequest](#changepasswordrequest)

#### Output
*Output schema unknown*

### changePin
Change the pin of an account.


```js
britbox.changePin({
  "body": {
    "pin": ""
  }
}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [ChangePinRequest](#changepinrequest)

#### Output
*Output schema unknown*

### getProfile
Get the details of the active profile, including watched, bookmarked and rated items.


```js
britbox.getProfile({}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [ProfileDetail](#profiledetail)

### getBookmarks
Get the map of bookmarked item ids (itemId => creationDate) under the active profile.


```js
britbox.getBookmarks({}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output `object`

### getBookmarkList
Returns the list of bookmarked items under the active profile.


```js
britbox.getBookmarkList({}, context)
```

#### Input
* input `object`
  * page `integer`: The page of items to load. Starts from page 1.
  * page_size `integer`: The number of items to return in a page.
  * order `string` (values: asc, desc): The list sort order, either 'asc' or 'desc'.
  * item_type `string` (values: movie, show, season, episode, program, link, trailer, channel, customAsset): The item type to filter by. Defaults to unspecified.
  * device `string`: The type of device the content is targeting.
  * sub `string`: The active subscription code.
  * segments `array`: The list of segments to filter the response by.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [ItemList](#itemlist)

### deleteItemBookmark
Unbookmark an item under the active profile.


```js
britbox.deleteItemBookmark({
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * itemId **required** `string`: The identifier of the bookmark to delete.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
*Output schema unknown*

### getItemBookmark
Get the bookmark for an item under the active profile.


```js
britbox.getItemBookmark({
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * itemId **required** `string`: The id of the item to get the bookmark for.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [Bookmark](#bookmark)

### bookmarkItem
Bookmark an item under the active profile.

Creates one if it doesn't exist, overwrites one if it does.



```js
britbox.bookmarkItem({
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * itemId **required** `string`: The id of the item to bookmark.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [Bookmark](#bookmark)

### getContinueWatchingList
Returns a list of items which have been watched but not completed under the active
profile.

Multiple episodes under the same show may be watched or in progress, however only a
single item belonging to a particular show will be included in the returned list.

The next episode to continue watching for a particular show will be the most recent
incompletely watched episode, or the next episode following the most recently
completely watched episode. Based on the specified `show_item_type` type, either the next
episode, the season of the next episode, or the show will be included in the list.



```js
britbox.getContinueWatchingList({}, context)
```

#### Input
* input `object`
  * show_item_type `string` (values: episode, season, show): The item type to be returned for continue watching items belonging to a show.
  * include `array`: Include one opr more ancestor/children for items belonging to a show. Extra items
  * page `integer`: The page of items to load. Starts from page 1.
  * page_size `integer`: The number of items to return in a page.
  * max_rating `string`: The maximum rating (inclusive) of an item returned, e.g. 'auoflc-pg'.
  * device `string`: The type of device the content is targeting.
  * sub `string`: The active subscription code.
  * segments `array`: The list of segments to filter the response by.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [ItemList](#itemlist)

### getNextPlaybackItem
Returns the next item to play given a source item id.

For an unwatched show it returns the first episode available to the account.

For a watched show it returns the last incompletely watched episode by the profile,
or the episode that immediately follows the last completely watched episode
or nothing.

For an episode it always returns the immediately following episode, if available to
the account, or nothing.

If the response does not contain a `next` property then no item was found.



```js
britbox.getNextPlaybackItem({
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * itemId **required** `string`: The identifier of the source item to base the next to watch item off.
  * max_rating `string`: The maximum rating (inclusive) of an item returned, e.g. 'auoflc-pg'.
  * expand `string` (values: parent, ancestors): If no value is specified no dependencies are expanded.
  * device `string`: The type of device the content is targeting.
  * sub `string`: The active subscription code.
  * segments `array`: The list of segments to filter the response by.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [NextPlaybackItem](#nextplaybackitem)

### getRatings
Get the map of rated item ids (itemId => rating out of 10) under the active profile.


```js
britbox.getRatings({}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output `object`

### getRatingsList
Returns the list of rated items under the active profile.


```js
britbox.getRatingsList({}, context)
```

#### Input
* input `object`
  * page `integer`: The page of items to load. Starts from page 1.
  * page_size `integer`: The number of items to return in a page.
  * order `string` (values: asc, desc): The list sort order, either 'asc' or 'desc'.
  * order_by `string` (values: date-added, date-modified): What to order by.
  * item_type `string` (values: movie, show, season, episode, program, link, trailer, channel, customAsset): The item type to filter by. Defaults to unspecified.
  * device `string`: The type of device the content is targeting.
  * sub `string`: The active subscription code.
  * segments `array`: The list of segments to filter the response by.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [ItemList](#itemlist)

### getItemRating
Get the rating info for an item under the active profile.


```js
britbox.getItemRating({
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * itemId **required** `string`: The id of the item to get the rating info for.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [UserRating](#userrating)

### rateItem
Rate an item under the active profile.

Creates one if it doesn't exist, overwrites one if it does.



```js
britbox.rateItem({
  "itemId": "",
  "rating": 0
}, context)
```

#### Input
* input `object`
  * itemId **required** `string`: The id of the item to rate.
  * rating **required** `integer`: The item rating between 1 and 10 inclusive.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [UserRating](#userrating)

### deleteWatched
Remove the watched status of items under the active profile. Passing in
specific `itemId`s to the `item_ids` query parameter will cause only these
items to be removed. **If this list is missing all watched items will be
removed**



```js
britbox.deleteWatched({}, context)
```

#### Input
* input `object`
  * item_ids `array`: List of `itemId`s to delete. Omit this parameter to delete all items
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
*Output schema unknown*

### getWatched
Get the map of watched item ids (itemId => last playhead position) under the active profile.


```js
britbox.getWatched({}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output `object`

### getWatchedList
Returns the list of watched items under the active profile.


```js
britbox.getWatchedList({}, context)
```

#### Input
* input `object`
  * page `integer`: The page of items to load. Starts from page 1.
  * page_size `integer`: The number of items to return in a page.
  * completed `boolean`: Filter by whether an item has been fully watched (completed) or not.
  * order `string` (values: asc, desc): The list sort order, either 'asc' or 'desc'.
  * order_by `string` (values: date-added, date-modified): What to order by.
  * item_type `string` (values: movie, show, season, episode, program, link, trailer, channel, customAsset): The item type to filter by. Defaults to unspecified.
  * device `string`: The type of device the content is targeting.
  * sub `string`: The active subscription code.
  * segments `array`: The list of segments to filter the response by.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [ItemList](#itemlist)

### getItemWatchedStatus
Get the watched status info for an item under the active profile.


```js
britbox.getItemWatchedStatus({
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * itemId **required** `string`: The id of the item to get the watched status for.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [Watched](#watched)

### setItemWatchedStatus
Record the watched playhead position of a video under the active profile.

Can be used later to resume a video from where it was last watched.

Creates one if it doesn't exist, overwrites one if it does.



```js
britbox.setItemWatchedStatus({
  "itemId": "",
  "position": 0
}, context)
```

#### Input
* input `object`
  * itemId **required** `string`: The id of the item being watched.
  * position **required** `integer`: The playhead position to record.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [Watched](#watched)

### createProfile
Create a new profile under the active account.


```js
britbox.createProfile({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [ProfileCreationRequest](#profilecreationrequest)

#### Output
* output [ProfileDetail](#profiledetail)

### deleteProfileWithId
Delete a profile with a specific id under the active account.

Note that you cannot delete the primary profile.



```js
britbox.deleteProfileWithId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The identifier of the profile to delete.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
*Output schema unknown*

### getProfileWithId
Get the summary of a profile with a specific id under the active account.


```js
britbox.getProfileWithId({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The identifier of the profile to return.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [ProfileSummary](#profilesummary)

### updateProfileWithId
Update the summary of a profile with a specific id under the active account.

This supports partial updates so you can send just the properties you wish to update.



```js
britbox.updateProfileWithId({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The identifier of the profile to update.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [ProfileUpdateRequest](#profileupdaterequest)

#### Output
*Output schema unknown*

### requestEmailVerification
Request that the email address tied to an account be verified.

This will send a verification email to the email address of the primary profile containing
a link which, once clicked, completes the verification process via the /verify-email endpoint.

Note that when an account is created this email is sent automatically so there's no need
to call this directly.

If the user doesn't click the link before it expires then this endpoint can be called
to request a new verification email. In the future it may also be used if we add support
for changing an account email address.



```js
britbox.requestEmailVerification({}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
*Output schema unknown*

### signOut
When a user signs out of an application we need to clear some
basic cookies we assigned them during token authorization.



```js
britbox.signOut({}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
*Output schema unknown*

### getAccountToken
Request one or more `Account` level authorization tokens each with a chosen scope.

Tokens are used to access restricted service endpoints. These restricted endpoints
will require a specific token type (e.g Account) with a specific scope (e.g. Catalog)
before access is granted.

For convenience, where a Profile level token with the same scope exists it will also be returned.

Authorization with pin is not supported on this endpoint anymore. Use `/itv/pinauthorization`
endpoint instead.



```js
britbox.getAccountToken({
  "body": {
    "email": "",
    "password": "",
    "scopes": []
  }
}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [AccountTokenRequest](#accounttokenrequest)

#### Output
* output `array`
  * items [AccessToken](#accesstoken)

### getAccountTokenByCode
Get Catalog tokens for an account using a device authorization code.
Where a Profile level token of Catalog scope exists it will also be returned.

This is the final step in the process of authorizing a device by pin code.

Firstly the device must request a generated authorization code via the
`/authorization/device/code` endpoint.

The code is subsequently used to authorize the device to sign in to a given
account via the `/account/devices/authorization` endpoint. Typically this
will be from a page presented in the web app under the account section.

Once authorized, this endpoint will allow the device to sign in without
needing to provide the credentials of the user.



```js
britbox.getAccountTokenByCode({
  "body": {
    "id": "",
    "code": "",
    "scopes": []
  }
}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [AccountTokenByCodeRequest](#accounttokenbycoderequest)

#### Output
* output `array`
  * items [AccessToken](#accesstoken)

### generateDeviceAuthorizationCode
Get a generated device authorization code.

This is the first step in the process of authorizing a device by pin code.
The device will make a request to this endpoint providing a unique identifier
for the device such as a serial number. This endpoint will then return a
generated code which is tied to the given device.

The code may subsequently be used to authorize the device to sign in to an
account via the `/account/devices/authorization` endpoint. Typically this
will be from a page presented in the web app under the account section.

Once authorized, the device will then be able to sign in to that account
via the `/authorization/device` endpoint, without needing to provide the
credentials of the user.



```js
britbox.generateDeviceAuthorizationCode({
  "body": {
    "id": "",
    "name": "",
    "type": ""
  }
}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [DeviceRegistrationRequest](#deviceregistrationrequest)

#### Output
* output [DeviceAuthorizationCode](#deviceauthorizationcode)

### getProfileToken
Request one or more `Profile` level authorization tokens each with a chosen scope.

Tokens are used to access restricted service endpoints. These restriced endpoints
will require a specific token type (e.g Profile) with a specific scope (e.g. Catalog)
before access is granted.



```js
britbox.getProfileToken({
  "body": {
    "profileId": "",
    "scopes": []
  }
}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [ProfileTokenRequest](#profiletokenrequest)

#### Output
* output `array`
  * items [AccessToken](#accesstoken)

### refreshToken
Refresh an account or profile level authorization token which is marked as refreshable.


```js
britbox.refreshToken({
  "body": {
    "token": ""
  }
}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [TokenRefreshRequest](#tokenrefreshrequest)

#### Output
* output [AccessToken](#accesstoken)

### singleSignOn
Exchange a third party single-sign-on token for our own authorization tokens.


```js
britbox.singleSignOn({
  "body": {
    "provider": "",
    "token": ""
  }
}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [SingleSignOnRequest](#singlesignonrequest)

#### Output
* output `array`
  * items [AccessToken](#accesstoken)

### getPlansBT
Returns all the plans available for BT flow including additional description data.


```js
britbox.getPlansBT({}, context)
```

#### Input
* input `object`
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [BtPlans](#btplans)

### assignToken
Assigns an UserToken to a profile on the ITV side. Currently throws an exception.


```js
britbox.assignToken({
  "body": {
    "token": "",
    "profileToken": ""
  }
}, context)
```

#### Input
* input `object`
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [ItvAssignBtTokenRequest](#itvassignbttokenrequest)

#### Output
*Output schema unknown*

### checkUserToken
Checks a provided token for BT eligible user.



```js
britbox.checkUserToken({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: User token provided by BT.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
*Output schema unknown*

### getSubscriptionData
Returns the details of subscription data for a user with specified id.


```js
britbox.getSubscriptionData({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The identifier of the user to load.

#### Output
* output [SubscriptionDetails](#subscriptiondetails)

### getAppConfig
Get the global configuration for an application. Should be called during app statup.

This includes things like device and playback rules, classifications,
sitemap and subscriptions.

You have the option to select specific configuration objects using the 'include'
parameter, or if unspecified, getting all configuration.



```js
britbox.getAppConfig({}, context)
```

#### Input
* input `object`
  * include `array`: A comma delimited list of config objects to return.
  * system `string`: Classification system to load in case include = classification.
  * device `string`: The type of device the content is targeting.
  * sub `string`: The active subscription code.
  * segments `array`: The list of segments to filter the response by.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [AppConfig](#appconfig)

### checkEeBtEligibility
Check whether or not a user is eligible for switching to Bt or EE offers.


```js
britbox.checkEeBtEligibility({}, context)
```

#### Input
* input `object`
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [EeBtEligibility](#eebteligibility)

### assignMsisdn
Assigns a msisdn to a profile on ITV side.


```js
britbox.assignMsisdn({
  "body": {
    "msisdn": "",
    "profileToken": "",
    "trackingHeader": "",
    "eeProductId": ""
  }
}, context)
```

#### Input
* input `object`
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [ItvAssignMsisdnRequest](#itvassignmsisdnrequest)

#### Output
*Output schema unknown*

### getEligibleOffers
Returns eligible partner specific offers for the querying partner for an EE MSISDN.
This call is supposed to be called after we have MSISDN accired.
This call should be followed by POST /ee/msisdn.



```js
britbox.getEligibleOffers({
  "body": {
    "msisdn": "",
    "accessToken": ""
  }
}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [EeOffersRequest](#eeoffersrequest)

#### Output
* output [EeOffersResponse](#eeoffersresponse)

### validatePinRequest
Validate PIN request created by calling POST /ee/pin This call is to validate MSISDN entered by a user not comming through EE network. This call should be called after PUT /ee/pin. This call should be followed by POST /ee/offers.


```js
britbox.validatePinRequest({
  "body": {
    "pinReference": "",
    "pin": "",
    "accessToken": ""
  }
}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [EeValidatePinRequest](#eevalidatepinrequest)

#### Output
* output [EeValidatePinResponse](#eevalidatepinresponse)

### createPinRequest
Creates a PIN request that will send an SMS to the given msisdn.
This call is to validate MSISDN entered by a user not comming through EE network.
This call should be followed by POST ee/pin.



```js
britbox.createPinRequest({
  "body": {
    "msisdn": "",
    "accessToken": ""
  }
}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [EeCreatePinRequest](#eecreatepinrequest)

#### Output
* output [EeCreatePinResponse](#eecreatepinresponse)

### getPlansEE
Returns all the plans available for EE flow including additional description data.


```js
britbox.getPlansEE({}, context)
```

#### Input
* input `object`
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [EePlans](#eeplans)

### getPlanEE
Returns the plan description for EE flow including additional description data.


```js
britbox.getPlanEE({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The identifier of the plan received from ee/offers.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [EePlanListItem](#eeplanlistitem)

### createToken
Returns a token for later calls to EE API. TTL is one hour. Recommended is FE refreshes this token before each call.


```js
britbox.createToken(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [EeCreateTokenResponse](#eecreatetokenresponse)

### getItem
Returns the details of an item with the specified id.


```js
britbox.getItem({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The identifier of the item to load.
  * max_rating `string`: The maximum rating (inclusive) of items returned, e.g. 'auoflc-pg'.
  * expand `string` (values: all, children, ancestors, parent): If no value is specified no dependencies are expanded.
  * select_season `string` (values: first, latest): Given a provided show id, it can be useful to get the details of a child season. This option
  * use_custom_id `boolean`: Set to true when passing a custom Id as the `id` path parameter.
  * device `string`: The type of device the content is targeting.
  * sub `string`: The active subscription code.
  * segments `array`: The list of segments to filter the response by.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [ItemDetail](#itemdetail)

### getItemChildrenList
Returns the List of child summary items under an item.

If the item is a Season then the children will be episodes and ordered by episode number.

If the item is a Show then the children will be Seasons and ordered by season number.

Returns 404 if no children found.



```js
britbox.getItemChildrenList({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The identifier of the item whose children to load.
  * page `integer`: The page of items to load. Starts from page 1.
  * page_size `integer`: The number of items to return in a page.
  * max_rating `string`: The maximum rating (inclusive) of items returned, e.g. 'auoflc-pg'.
  * order `string` (values: asc, desc): The list sort order, either 'asc' or 'desc'.
  * device `string`: The type of device the content is targeting.
  * sub `string`: The active subscription code.
  * segments `array`: The list of segments to filter the response by.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [ItemList](#itemlist)

### getItemRelatedList
Returns the list of items related to the parent item.

Note for now, due to the size of the list being unknown, only a single page will be returned.



```js
britbox.getItemRelatedList({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The identifier of the item to based related items off.
  * page `integer`: The page of items to load. Starts from page 1.
  * page_size `integer`: The number of items to return in a page.
  * max_rating `string`: The maximum rating (inclusive) of items returned, e.g. 'auoflc-pg'.
  * device `string`: The type of device the content is targeting.
  * sub `string`: The active subscription code.
  * segments `array`: The list of segments to filter the response by.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [ItemList](#itemlist)

### getPublicItemMediaFiles
Get the free / public video files associated with an item given maximum resolution,
device type and one or more delivery types.

Returns an array of video file objects which each include a url to a video.

The first entry in the array contains what is predicted to be the best match.
The remainder of the entries, if any, may contain resolutions below what was
requests. For example if you request HD-720 the response may also contain
SD entries.

If you specify multiple delivery types, then the response array will insert
types in the order you specify them in the query. For example `stream,progressive`
would return an array with 0 or more stream files followed by 0 or more progressive files.

If no files are found a 404 is returned.



```js
britbox.getPublicItemMediaFiles({
  "id": "",
  "delivery": [],
  "resolution": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The identifier of the item whose video files to load.
  * delivery **required** `array`: The video delivery type you require.
  * resolution **required** `string` (values: HD-4K, HD-1080, HD-720, SD, External): The maximum resolution the device to playback the media can present.
  * formats `array`: The set of media file formats that the device supports, in the order of preference.
  * device `string`: The type of device the content is targeting.
  * sub `string`: The active subscription code.
  * segments `array`: The list of segments to filter the response by.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output `array`
  * items [MediaFile](#mediafile)

### getAnonNextPlaybackItem
Identical to GET /account/profile/items/{itemId}/next route but for users
that are not logged in i.e. this endpoint does not require authorisation



```js
britbox.getAnonNextPlaybackItem({
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * itemId **required** `string`: The identifier of the source item to base the next to watch item off.
  * max_rating `string`: The maximum rating (inclusive) of an item returned, e.g. 'auoflc-pg'.
  * expand `string` (values: parent, ancestors): If no value is specified no dependencies are expanded.
  * device `string`: The type of device the content is targeting.
  * segments `array`: The list of segments to filter the response by.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [NextPlaybackItem](#nextplaybackitem)

### getBillingHistory
Returns the list of billing records for specified payment platform.


```js
britbox.getBillingHistory({
  "platform": "",
  "body": {
    "profileToken": ""
  }
}, context)
```

#### Input
* input `object`
  * platform **required** `string`: The identifier of the payment platform (stripe/itunes).
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [ItvBillingHistoryRequest](#itvbillinghistoryrequest)

#### Output
* output [ItvBillingHistory](#itvbillinghistory)

### getCardDetails
Get payment card details.


```js
britbox.getCardDetails({
  "platform": "",
  "body": {
    "profileToken": ""
  }
}, context)
```

#### Input
* input `object`
  * platform **required** `string`: The identifier of the payment platform (stripe/itunes).
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [ItvGetCardDetailsRequest](#itvgetcarddetailsrequest)

#### Output
* output [ItvCardDetails](#itvcarddetails)

### changeCardDetails
Change payment card details.


```js
britbox.changeCardDetails({
  "platform": "",
  "body": {
    "profileToken": "",
    "cardToken": ""
  }
}, context)
```

#### Input
* input `object`
  * platform **required** `string`: The identifier of the payment platform (stripe/itunes).
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [ItvChangeCardDetailsRequest](#itvchangecarddetailsrequest)

#### Output
*Output schema unknown*

### changeEmail
Change email address related to account/profile.

The expected token scope is Settings.



```js
britbox.changeEmail({
  "body": {
    "email": "",
    "profileToken": ""
  }
}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [ItvChangeEmailRequest](#itvchangeemailrequest)

#### Output
*Output schema unknown*

### changeMarketing
Change marketing preferences related to account/profile.

The expected token scope is Settings.



```js
britbox.changeMarketing({
  "body": {
    "emailOptIn": true,
    "profileToken": ""
  }
}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [ItvChangeMarketingRequest](#itvchangemarketingrequest)

#### Output
*Output schema unknown*

### deleteAccount
Delete account in compliance with GDPR.

The expected token scope is Settings.



```js
britbox.deleteAccount({
  "body": {
    "profileToken": ""
  }
}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [ItvDeleteAccountRequest](#itvdeleteaccountrequest)

#### Output
*Output schema unknown*

### getEntitlementsHistory
Returns the state of subscription for any payment platform.


```js
britbox.getEntitlementsHistory({}, context)
```

#### Input
* input `object`
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [ItvEntitlementsHistory](#itventitlementshistory)

### getFeatureFlag
Gets info whether or not a feature is enabled or disabled using a feature flag. Feature flags are set as a custom field within PM. It also supports custom feature flag data if needed. Such data can be return as well.


```js
britbox.getFeatureFlag({
  "feature": ""
}, context)
```

#### Input
* input `object`
  * feature **required** `string`: The identifier of the feature to check for feature flag.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [ItvFeatureFlag](#itvfeatureflag)

### getItemDownloadables
Returns the details of an item with the specified id.


```js
britbox.getItemDownloadables({
  "body": {
    "ids": ""
  }
}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [ItemDownloadableRequest](#itemdownloadablerequest)

#### Output
* output [ItemDownloadableList](#itemdownloadablelist)

### getItemItv
Redirects to corresponding Axis Item details page.


```js
britbox.getItemItv({
  "externalId": ""
}, context)
```

#### Input
* input `object`
  * externalId **required** `string`: The external identifier of the item.

#### Output
* output `object`

### getItvPage
Returns a page with the specified id.

This is a cut down version for low memory devices.123

If targeting the search page you must url encode the search term as a parameter
using the `q` key. For example if your browser path looks like `/search?q=the`
then what you pass to this endpoint would look like `/itv/page?path=/search%3Fq%3Dthe`.



```js
britbox.getItvPage({
  "path": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: The path of the page to load, e.g. '/movies'.
  * list_page_size `integer`: The number of items to load when prefetching and paging each list in the page row.
  * list_page_size_large `integer`: The number of items to load when prefetching a continuous scroll list entry in a page.
  * max_list_prefetch `integer`: The maximum number of lists to prefetch in the page.
  * item_detail_expand `string` (values: all, children, ancestors): Only relevant when loading item detail pages as these embed a detailed item in the main page entry.
  * item_detail_select_season `string` (values: first, latest): Only relevant when loading show detail pages as these embed a detailed item in the main page entry.
  * text_entry_format `string` (values: markdown, html): Only relevant to page entries of type `TextEntry`.
  * max_rating `string`: The maximum rating (inclusive) of items returned, e.g. 'auoflc-pg'.
  * device `string`: The type of device the content is targeting.
  * sub `string`: The active subscription code.
  * segments `array`: The list of segments to filter the response by.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [Page](#page)

### getAccountTokenWithPin
Provides authorization with parental control pin.

Returns an array containing account token with Playback scope.

Requires access token with Catalog scope.

Pin must be a 4-digit string



```js
britbox.getAccountTokenWithPin({
  "body": {
    "pin": ""
  }
}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [ItvPinAuthRequest](#itvpinauthrequest)

#### Output
* output `array`
  * items [AccessToken](#accesstoken)

### upgradePlan
Upgrades the plan for the current user.


```js
britbox.upgradePlan({
  "platform": "",
  "body": {
    "planId": ""
  }
}, context)
```

#### Input
* input `object`
  * platform **required** `string`: The identifier of the payment platform (stripe/itunes). Only Stripe is supported
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [ItvUpgradePlanRequest](#itvupgradeplanrequest)

#### Output
*Output schema unknown*

### getPlansITV
Returns the plans available for specified payment platform.


```js
britbox.getPlansITV({
  "platform": ""
}, context)
```

#### Input
* input `object`
  * platform **required** `string`: The identifier of the payment platform (stripe/itunes).
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [ItvPlans](#itvplans)

### getProfileItv
Returns the ITV profile object.


```js
britbox.getProfileItv({}, context)
```

#### Input
* input `object`
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output `object`

### updateProfile
Update ITV profile.

The expected token scope is Settings.



```js
britbox.updateProfile({
  "body": {
    "profileToken": ""
  }
}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [ItvUpdateProfileRequest](#itvupdateprofilerequest)

#### Output
*Output schema unknown*

### getItvProfileToken
Returns the ITV profile token.


```js
britbox.getItvProfileToken({
  "body": {
    "password": ""
  }
}, context)
```

#### Input
* input `object`
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [ItvProfileTokenRequest](#itvprofiletokenrequest)

#### Output
* output [ItvProfileToken](#itvprofiletoken)

### cancelSubscriptionItv
Cancel a plan subscription.

A cancelled subscription will continue to be valid until the subscription
expiry date or next renewal date.



```js
britbox.cancelSubscriptionItv({
  "platform": "",
  "body": {
    "profileToken": ""
  }
}, context)
```

#### Input
* input `object`
  * platform **required** `string`: The identifier of the payment platform (stripe/itunes).
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [ItvCancelSubscriptionRequest](#itvcancelsubscriptionrequest)

#### Output
*Output schema unknown*

### getCurrentSubscription
Returns the details of current subscription for specified payment platform.


```js
britbox.getCurrentSubscription({
  "platform": ""
}, context)
```

#### Input
* input `object`
  * platform **required** `string`: The identifier of the payment platform (stripe/itunes).
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [ItvCurrentSubscription](#itvcurrentsubscription)

### confirmPurchase
Confirms purchase and returns the details of purchased subscription for specified payment platform.


```js
britbox.confirmPurchase({
  "platform": "",
  "body": {
    "planId": "",
    "profileToken": "",
    "cardToken": ""
  }
}, context)
```

#### Input
* input `object`
  * platform **required** `string`: The identifier of the payment platform (stripe/itunes).
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [ItvPurchaseRequest](#itvpurchaserequest)

#### Output
* output [ItvPurchase](#itvpurchase)

### getSaveOffer
Checks the provided coupon id for a user. Only Stripe platform is currently supported.


```js
britbox.getSaveOffer({}, context)
```

#### Input
* input `object`
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [ItvGetDiscountResponse](#itvgetdiscountresponse)

### activateSaveOffer
Activates the discount for a user. Only Stripe platform is currently supported.


```js
britbox.activateSaveOffer({
  "body": ""
}, context)
```

#### Input
* input `object`
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** `string`

#### Output
*Output schema unknown*

### getSubscriptionState
Returns the state of subscription for any payment platform.


```js
britbox.getSubscriptionState({}, context)
```

#### Input
* input `object`
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [ItvSubscriptionState](#itvsubscriptionstate)

### getUpcomingInvoice
Returns an upcoming invoice


```js
britbox.getUpcomingInvoice({}, context)
```

#### Input
* input `object`
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [ItvGetDiscountResponse](#itvgetdiscountresponse)

### checkVoucher
Validates the coupon/voucher for specified payment platform.


```js
britbox.checkVoucher({
  "platform": "",
  "body": {
    "voucher": ""
  }
}, context)
```

#### Input
* input `object`
  * platform **required** `string`: The identifier of the payment platform (stripe/itunes).
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [ItvVoucherRequest](#itvvoucherrequest)

#### Output
* output [ItvVoucher](#itvvoucher)

### getLists
Returns an array of item lists with their first page of content resolved.


```js
britbox.getLists({
  "ids": []
}, context)
```

#### Input
* input `object`
  * ids **required** `array`: A comma delimited list of item list identifiers.
  * page_size `integer`: The number of items to return in a page.
  * max_rating `string`: The maximum rating (inclusive) of items returned, e.g. 'auoflc-pg'.
  * order `string` (values: asc, desc): The list sort order, either 'asc' or 'desc'.
  * order_by `string` (values: a-z, release-year, date-added): What to order by.
  * item_type `string` (values: movie, show, season, episode, program, link, trailer, channel, customAsset): The item type to filter by. Defaults to unspecified.
  * device `string`: The type of device the content is targeting.
  * sub `string`: The active subscription code.
  * segments `array`: The list of segments to filter the response by.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output `array`
  * items [ItemList](#itemlist)

### getList
Returns a list of items under the specified item list


```js
britbox.getList({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The identifier of the list to load.
  * page `integer`: The page of items to load. Starts from page 1.
  * page_size `integer`: The number of items to return in a page.
  * max_rating `string`: The maximum rating (inclusive) of items returned, e.g. 'auoflc-pg'.
  * order `string` (values: asc, desc): The list sort order, either 'asc' or 'desc'.
  * order_by `string` (values: a-z, release-year, date-added): What to order by.
  * param `string`: The list parameter in format 'key:value', e.g. 'genre:action'.
  * item_type `string` (values: movie, show, season, episode, program, link, trailer, channel, customAsset): The item type to filter by. Defaults to unspecified.
  * device `string`: The type of device the content is targeting.
  * sub `string`: The active subscription code.
  * segments `array`: The list of segments to filter the response by.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [ItemList](#itemlist)

### getPage
Returns a page with the specified id.

If targeting the search page you must url encode the search term as a parameter
using the `q` key. For example if your browser path looks like `/search?q=the`
then what you pass to this endpoint would look like `/page?path=/search%3Fq%3Dthe`.



```js
britbox.getPage({
  "path": ""
}, context)
```

#### Input
* input `object`
  * path **required** `string`: The path of the page to load, e.g. '/movies'.
  * list_page_size `integer`: The number of items to load when prefetching and paging each list in the page row.
  * list_page_size_large `integer`: The number of items to load when prefetching a continuous scroll list entry in a page.
  * max_list_prefetch `integer`: The maximum number of lists to prefetch in the page.
  * item_detail_expand `string` (values: all, children, ancestors): Only relevant when loading item detail pages as these embed a detailed item in the main page entry.
  * item_detail_select_season `string` (values: first, latest): Only relevant when loading show detail pages as these embed a detailed item in the main page entry.
  * text_entry_format `string` (values: markdown, html): Only relevant to page entries of type `TextEntry`.
  * max_rating `string`: The maximum rating (inclusive) of items returned, e.g. 'auoflc-pg'.
  * device `string`: The type of device the content is targeting.
  * sub `string`: The active subscription code.
  * segments `array`: The list of segments to filter the response by.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [Page](#page)

### getPlan
Returns the details of a Plan with the specified id.


```js
britbox.getPlan({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The identifier of the Plan to load.
  * device `string`: The type of device the content is targeting.
  * sub `string`: The active subscription code.
  * segments `array`: The list of segments to filter the response by.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [Plan](#plan)

### register
Register a new user, creating them an account.

Registration, when successful, will return an array of access tokens so the user is
immediately signed in.

It returns Catalog and Commerce scoped tokens for both Account and Profile.
The Commerce ones are intended to allow the purchase of a subscription plan
in the step after registration, without the user being prompted to enter
their username and password again.

An email will also be sent with a link they need to click to confirm their
email address. This confirmation is done via the /verify-email endpoint.



```js
britbox.register({
  "body": {
    "email": "",
    "password": ""
  }
}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [RegistrationRequest](#registrationrequest)

#### Output
* output `array`
  * items [AccessToken](#accesstoken)

### forgotPassword
Request the password of an account's primary profile be reset.

Should be called when a user has forgotten their password.

This will send an email with a password reset link to the email address of the
primary profile of an account.

The link, once clicked, should take the user to the "reset-password" page of the
website. Here they will enter their new password and submit to the /reset-password
endpoint here, along with the password reset token provided in the original link.



```js
britbox.forgotPassword({
  "body": {
    "email": ""
  }
}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [PasswordResetEmailRequest](#passwordresetemailrequest)

#### Output
*Output schema unknown*

### resetPassword
When a user requests to reset their password via the /request-password-reset endpoint, an
email is sent to the email address of the primary profile of the account. This email contains a link
with a reset token as query parameter. The link should take the user to the "reset-password"
page of the website.

From the reset-password page a user should enter the new password they wish to use.
It should then be submitted to this endpoint,
along with the reset token from the email link.
The token should be provided in the body as resetToken property.



```js
britbox.resetPassword({
  "body": {
    "resetToken": "",
    "password": ""
  }
}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.
  * body **required** [PasswordResetRequest](#passwordresetrequest)

#### Output
*Output schema unknown*

### getPublicPreview
Returns public preview for Samsung based on the page '/samsung-preview' configured in PresentationManager.
There is a hard limit of max 40 items to be returned. It splits evenly items count into the page rows, remaining items are added into the first row.



```js
britbox.getPublicPreview(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [SamsungPreview](#samsungpreview)

### getSchedules
Returns schedules for a defined set of channels over a requested period.

Schedules are requested in hour blocks and returned grouped by the channel
they belong to.

For example, to load 12 hours of schedules for channels `4343` and `5234`,
on 21/2/2017 starting from 08:00.

```
channels=4343,5234
date=2017-02-21
hour=8
duration=12
```

Please remember that `date` and `hour` combined represent a normal datetime,
so they should be converted to UTC on the client - this will help to avoid
issues with EPG schedules near midnight.

If a channel id is passed which doesn't exist then this endpoint will
return an empty schedule list for it. If instead we returned 404,
this would invalidate all other channel schedules in the same request
which would be unfriendly for clients presenting these channel schedules.



```js
britbox.getSchedules({
  "channels": [],
  "date": "",
  "hour": 0,
  "duration": 0
}, context)
```

#### Input
* input `object`
  * channels **required** `array`: The list of channel ids to get schedules for.
  * date **required** `string`: The date to target in ISO format, e.g. `2017-05-23` (converted to UTC - see main description).
  * hour **required** `integer`: The base hour in the day, defined by the `date` parameter, you wish to load schedules for
  * duration **required** `integer`: The number of hours of schedules to load from the base `hour` parameter.
  * intersect `boolean`: Flag indicating whether schedules should intersect or be contained in the
  * device `string`: The type of device the content is targeting.
  * sub `string`: The active subscription code.
  * segments `array`: The list of segments to filter the response by.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output `array`
  * items [ItemScheduleList](#itemschedulelist)

### search
Search the catalog of items and people.


```js
britbox.search({
  "term": ""
}, context)
```

#### Input
* input `object`
  * term **required** `string`: The search term to query.
  * include `array`: By default people, movies and tv (shows + programs) will be included
  * group `boolean`: When this option is set, instead of all search result items being returned
  * max_results `integer`: The maximum number of results to return.
  * max_rating `string`: The maximum rating (inclusive) of items returned, e.g. 'auoflc-pg'.
  * device `string`: The type of device the content is targeting.
  * sub `string`: The active subscription code.
  * segments `array`: The list of segments to filter the response by.
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
* output [SearchResults](#searchresults)

### verifyEmail
When an account is created an email is sent to the email address of the new account.
This contains a link, which once clicked, verifies the email address of the account is correct.

The link contains a token as a query parameter which should be passed as the authorization
bearer token to this endpoint to complete email verification.

The token has en expiry, so if the link is not clicked before it expires, the account holder
may need to request a new verification email be sent. This can be done via the endpoint
/account/request-email-verification.



```js
britbox.verifyEmail({}, context)
```

#### Input
* input `object`
  * ff `array`: The set of opt in feature flags which cause breaking changes to responses.
  * lang `string`: Language code for the preferred language to be returned in the response.

#### Output
*Output schema unknown*



## Definitions

### AccessToken
* AccessToken `object`
  * accountCreated `boolean`: When a `UserAccount` token is issued during a single-sign-on flow
  * expirationDate **required** `string`: The timestamp this token expires.
  * refreshable **required** `boolean`: True if this token can be refreshed, false if not.
  * type **required** `string` (values: UserAccount, UserProfile): The type of the token.
  * value **required** `string`: The token value used for authenticated requests.

### Account
* Account `object`
  * address [Address](#address)
  * defaultPaymentInstrumentId `string`: The id of the payment instrument to use by default for account transactions.
  * defaultPaymentMethodId `string`: The id of the payment method to use by default for account transactions.
  * email **required** `string`: The email address belonging to the account.
  * emailVerified `boolean`: Whether the email address has been verified.
  * entitlements `array`: The list of entitlements to playback specific items.
    * items [Entitlement](#entitlement)
  * firstName `string`: The first name of the account holder.
  * id **required** `string`: The id of the account.
  * isFirstTimeSubscriber `boolean`: Whether the account has the very first subscription.
  * lastName `string`: The last name of the account holder.
  * marketingEnabled **required** `boolean`: Whether the account has opted in or out of marketing material.
  * minRatingPlaybackGuard `string`: The classification rating defining the minimum rating level a user should be
  * pinEnabled **required** `boolean`: When an account level pin is defined this will be true.
  * primaryProfileId **required** `string`: The id of the primary profile.
  * profiles **required** `array`: The list of profiles under this account.
    * items [ProfileSummary](#profilesummary)
  * segments `array`: The segments an account has been placed under
    * items `string`
  * subscriptionCode **required** `string`: The active subscription code for an account.
  * subscriptions `array`: The list of subscriptions, if any, the account has signed up to.
    * items [Subscription](#subscription)
  * trackingEnabled **required** `boolean`: Whether usage tracking is associated with the account or anonymous.
  * usedFreeTrial `boolean`: Whether the account has used up their free trial period of a plan.

### AccountDevices
* AccountDevices `object`
  * deregistrationWindow [DeviceRegistrationWindow](#deviceregistrationwindow)
  * devices **required** `array`: The array of registered playack devices.
    * items [Device](#device)
  * maxRegistered **required** `integer`: The maximum number of playback devices that can be registered
  * registrationWindow [DeviceRegistrationWindow](#deviceregistrationwindow)

### AccountNonce
* AccountNonce `object`
  * value **required** `string`: The nonce value.

### AccountTokenByCodeRequest
* AccountTokenByCodeRequest `object`
  * code **required** `string`: The generated device authorization code.
  * id **required** `string`: The unique identifier for the device e.g. serial number.
  * scopes **required** `array`: The scope(s) of the token(s) required.
    * items `string` (values: Catalog, Commerce, Settings, Playback)

### AccountTokenRequest
* AccountTokenRequest `object`
  * cookieType `string` (values: Session, Persistent): If you specify a cookie type then a content filter cookie will be returned
  * email **required** `string`: The email associated with the account.
  * password **required** `string`: The password associated with the account.
  * scopes **required** `array`: The scope(s) of the tokens required.
    * items `string` (values: Catalog, Commerce, Settings, Playback)

### AccountUpdateRequest
* AccountUpdateRequest `object`
  * address [Address](#address)
  * defaultPaymentInstrumentId `string`: The id of the payment instrument to use by default for account transactions.
  * defaultPaymentMethodId `string`: The id of the payment method to use by default for account transactions.
  * firstName `string`: The first name of the account holder.
  * lastName `string`: The last name of the account holder.
  * minRatingPlaybackGuard `string`: The classification rating defining the minimum rating level a user should be
  * segments `array`: The segments an account should be placed under
    * items `string`
  * trackingEnabled `boolean`: Whether usage tracking is associated with an account or anonymous.

### AddPaymentMethodRequest
* AddPaymentMethodRequest `object`
  * makeDefault `boolean`: Whether this payment method should become the account default when
  * token **required** `string`: The payment provider token representing a payment method, obtained by
  * type **required** `string` (values: Card): The type of payment method.

### Address
* Address `object`
  * addressLine1 `string`: The first line of the street address.
  * addressLine2 `string`: The second line of the street address.
  * city `string`: The city name.
  * country `string`: The country name or code.
  * postcode `string`: The postal or zip code.
  * state `string`: The state name or abbreviation.

### AppConfig
* AppConfig `object`
  * classification `object`: The map of classification ratings.
  * display [AppConfigDisplay](#appconfigdisplay)
  * general [AppConfigGeneral](#appconfiggeneral)
  * i18n [AppConfigI18n](#appconfigi18n)
  * linear [AppConfigLinear](#appconfiglinear)
  * navigation [Navigation](#navigation)
  * playback [AppConfigPlayback](#appconfigplayback)
  * sitemap `array`
    * items [PageSummary](#pagesummary)
  * subscription [AppConfigSubscription](#appconfigsubscription)

### AppConfigDisplay
* AppConfigDisplay `object`
  * themes **required** `array`: An array of globally configured themes.
    * items [Theme](#theme)

### AppConfigGeneral
* AppConfigGeneral `object`
  * currencyCode `string`: The currency code to target.
  * customFields `object`: A map of custom configuration fields.
  * defaultTimeZone `string`: The default time zone of the site. e.g. "Etc/GMT"
  * facebookAppId `string`: The Facebook application id associated with an environment.
  * gaToken `string`: A Google Analytics token to track applicaton user events.
  * itemImageTypes `object`: A map of default item image types where the key is the item types.
  * mandatorySignIn `boolean`: Whether to require sign in for customers to access content.
  * maxUserRating `integer`: The maximum value allowed for user ratings.
  * stripeKey `string`: The public Stripe key to use for payment transactions.
  * websiteUrl `string`: The url of the primary website.

### AppConfigI18n
* AppConfigI18n `object`
  * languages **required** `array`: An array of available languages.
    * items [Language](#language)

### AppConfigLinear
* AppConfigLinear `object`
  * viewingWindowDaysAfter `integer`: Number of available upcoming day schedules.
  * viewingWindowDaysBefore `integer`: Number of available day schedules in the past.

### AppConfigPlayback
* AppConfigPlayback `object`
  * chainPlayCountdown **required** `integer`: The number of seconds before autoplay of next video.
  * chainPlaySqueezeback **required** `integer`: The number of seconds before the end of playback when the current video
  * chainPlayTimeout **required** `integer`: The number of minutes of user inactivity before autoplay is paused.
  * heartbeatFrequency **required** `integer`: How often a heartbeat should be renewed during playback.
  * viewEventPoints **required** `array`: An array of percentage points in which to fire off plabyack view events.
    * items `number`

### AppConfigSubscription
* AppConfigSubscription `object`
  * plans `array`: The available public plans a user can subscribe to.
    * items [Plan](#plan)

### Bookmark
* Bookmark `object`
  * creationDate **required** `string`: The date the bookmark was created.
  * itemId **required** `string`: The id of the item bookmarked.

### BtPlanListItem
* BtPlanListItem `object`
  * amount `number`: The price of a plan. If a free plan then undefined.
  * ctaText **required** `string`: The textual description.
  * currency **required** `string`: The currency a plan is offered in.
  * description **required** `string`: The textual description.
  * ees07PlanDescription `string`
  * ees07PlanTitle `string`
  * ees07Title `string`
  * headerText **required** `string`: The textual description.
  * heroText **required** `string`: The textual description.
  * id **required** `string`: The identifier of a plan.
  * interval `string` (values: day, week, month, year, none): The type of billing period used.
  * intervalCount `integer`: Given the `interval` this is how frequently it will run. e.g. every 2 weeks.
  * longText **required** `string`: The textual description.
  * nickname **required** `string`: The title of a plan.
  * noThanksText `string`
  * product **required** `string`: The product of a plan.
  * switchingText `string`
  * termsAndConditionsItunes `string`
  * termsAndConditionsStripe `string`
  * trialPeriodDays **required** `integer`: How many days a trial period runs for a plan. Only valid if `hasTrialPeriod` is true.

### BtPlans
* BtPlans `object`
  * plans **required** `array`: The list of available plans.
    * items [BtPlanListItem](#btplanlistitem)

### BtValidateTokenResponse
* BtValidateTokenResponse `object`

### ChangePasswordRequest
* ChangePasswordRequest `object`
  * password **required** `string`: The new password for the account.
  * profileToken **required** `string`: The ITV profile token.

### ChangePinRequest
* ChangePinRequest `object`
  * pin **required** `string`: The new pin to set.

### Classification
* Classification
  * code **required** `string`: The unique code for a classification.
  * name **required** `string`: The name of the classification for display.
  * advisoryText `string`: Parental advisort text.
  * images **required** `object`
  * level **required** `integer`: The level of this classification when compared with its siblings.
  * system **required** `string`: The parent system code of the classification.

### ClassificationSummary
* ClassificationSummary `object`
  * code **required** `string`: The unique code for a classification.
  * name **required** `string`: The name of the classification for display.

### ContinueWatchingListData
* ContinueWatchingListData `object`: List data for ContinueWatching List
  * itemInclusions `object`: Object where keys are itemIds for the items in the list and values are objects

### ContinueWatchingListDataExpansion
* ContinueWatchingListDataExpansion `object`
  * episode [ItemSummary](#itemsummary)
  * season [ItemSummary](#itemsummary)
  * show [ItemSummary](#itemsummary)

### Credit
* Credit
  * name **required** `string`: The name of the person.
  * path **required** `string`: The path to the person
  * character `string`: The name of the character.
  * role **required** `string` (values: actor, associateproducer, coactor, director, executiveproducer, filminglocation, guest, narrator, other, presenter, producer, productmanager, thememusicby, voice, writer): The type of role the credit performed, e.g. actor.

### Device
* Device `object`
  * id **required** `string`: The unique identifier for this device e.g. serial number.
  * name **required** `string`: The human recognisable name for this device.
  * registrationDate **required** `string`: The date this device was registered.
  * type **required** `string`: The device type e.g. web_browser.

### DeviceAuthorizationCode
* DeviceAuthorizationCode `object`
  * code **required** `string`: The generated device authorization code.

### DeviceRegistrationRequest
* DeviceRegistrationRequest `object`
  * id **required** `string`: The unique identifier for this device e.g. serial number.
  * name **required** `string`: A human recognisable name for this device.
  * type **required** `string`: The device type e.g. web_browser.

### DeviceRegistrationWindow
* DeviceRegistrationWindow `object`
  * endDate **required** `string`: The end date of the current period.
  * limit **required** `integer`: The maximum de/registrations that can be made in a period.
  * periodDays **required** `integer`: The number of days a de/registration period runs for.
  * remaining **required** `integer`: The remaining de/registrations that can be made in the current period.
  * startDate **required** `string`: The start date of the current period.

### EeBtEligibility
* EeBtEligibility `object`
  * eligible **required** `boolean`: Whether or not user is eligible
  * plan `string`: The identifier of a plan.
  * source `string`: Stripe etc.

### EeCreatePinRequest
* EeCreatePinRequest `object`
  * accessToken **required** `string`: EE API authorization Token received from GET /ee/token/create.
  * msisdn **required** `string`: The msisdn.
  * trackingHeader `string`: trackingHeader

### EeCreatePinResponse
* EeCreatePinResponse `object`
  * pinReference **required** `string`: The pinReference.
  * trackingHeader **required** `string`: trackingHeader

### EeCreateTokenResponse
* EeCreateTokenResponse `object`
  * accessToken `string`: The authentication token for later use to call EE endpoints.
  * expiresIn `number`
  * tokenType `string`

### EeIdentityRequest
* EeIdentityRequest `object`
  * accessToken **required** `string`: EE API authorization Token received from GET /ee/token/create.
  * sessionId **required** `string`: The sessionId returned in the ee/session response.

### EeIdentityResponse
* EeIdentityResponse `object`
  * brand `string`: The operator brand.
  * brandCode `string`: The brand code.
  * msisdn **required** `string`: The msisdn.
  * trackingHeader **required** `string`: trackingHeader

### EeOfferItem
* EeOfferItem `object`
  * name **required** `string`: The identifier of an offer.

### EeOffersRequest
* EeOffersRequest `object`
  * accessToken **required** `string`: EE API authorization Token received from GET /ee/token/create.
  * msisdn **required** `string`: The msisdn.
  * trackingHeader `string`: trackingHeader.

### EeOffersResponse
* EeOffersResponse `object`
  * eligibleOffers **required** `array`: The list of eligible offers.
    * items [EeOfferItem](#eeofferitem)

### EePlanListItem
* EePlanListItem `object`
  * amount `number`: The price of a plan. If a free plan then undefined.
  * ctaText **required** `string`: The textual description.
  * currency **required** `string`: The currency a plan is offered in.
  * description **required** `string`: The textual description.
  * headerText **required** `string`: The textual description.
  * heroText **required** `string`: The textual description.
  * id **required** `string`: The identifier of a plan.
  * interval `string` (values: day, week, month, year, none): The type of billing period used.
  * intervalCount `integer`: Given the `interval` this is how frequently it will run. e.g. every 2 weeks.
  * longText **required** `string`: The textual description.
  * nickname **required** `string`: The title of a plan.
  * product **required** `string`: The product of a plan.
  * trialPeriodDays **required** `integer`: How many days a trial period runs for a plan. Only valid if `hasTrialPeriod` is true.

### EePlans
* EePlans `object`
  * plans **required** `array`: The list of available plans.
    * items [EePlanListItem](#eeplanlistitem)

### EeSessionIdRequest
* EeSessionIdRequest `object`
  * accessToken **required** `string`: EE API authorization Token received from GET /ee/token/create.
  * clientIP **required** `string`: The IP address of the requesting device.

### EeSessionIdResponse
* EeSessionIdResponse `object`
  * sessionId **required** `string`: The assigned SessionId.

### EeValidatePinRequest
* EeValidatePinRequest `object`
  * accessToken **required** `string`: EE API authorization Token received from GET /ee/token/create.
  * pin **required** `string`: The pin entered by a user. 6 digits
  * pinReference **required** `string`: The pinReference.
  * trackingHeader `string`: Tracking header to be able to search logs for a specific user requests. If not provided it will be generated. FE should store it for later user.

### EeValidatePinResponse
* EeValidatePinResponse `object`
  * pinValid `string`: The validation status.
  * trackingHeader **required** `string`: trackingHeader

### Entitlement
* Entitlement
  * deliveryType **required** `string` (values: Stream, Download, StreamOrDownload, ProgressiveDownload, None)
  * exclusionRules `array`: Any specific playback exclusion rules.
    * items [ExclusionRule](#exclusionrule)
  * maxDownloads `integer`: The maximum number of allowed downloads.
  * maxPlays `integer`: The maximum number of allowed plays.
  * ownership **required** `string` (values: Subscription, Free, Rent, Own, None)
  * playPeriod `integer`: The length of time in minutes which the rental will last once played for the first time.
  * rentalPeriod `integer`: The length of time in minutes which the rental will last once purchased.
  * resolution **required** `string` (values: SD, HD-720, HD-1080, HD-4K, External, Unknown)
  * scopes **required** `array`
    * items `string`
  * activationDate `string`: The date of activation. If no date is defined the entitlement has not be activated.
  * classification [ClassificationSummary](#classificationsummary)
  * creationDate `string`: The date the entitlement was created.
  * expirationDate `string`: The date the entitlement expires.
  * itemId `string`: The id of the item this entitlement is for.
  * itemType `string` (values: movie, show, season, episode, program, link, trailer, channel, customAsset): The type of item this entitlement is for.
  * mediaDuration `integer`: The duration of the entitled media.
  * planId `string`: The id of the plan this entitlement is for.
  * playCount `integer`: How many times the media has been played.
  * remainingDownloads `integer`: How many more downloads of this media are available.

### ExclusionRule
* ExclusionRule `object`: Defines playback exclusion rules for an Offer or Entitlement.
  * description `string`
  * device `string`: The device type that the exclusion rules apply to.
  * excludeAirplay `boolean`: Prevent airplay from an apple device.
  * excludeChromecast `boolean`: Prevent chromecasting.
  * excludeDelivery `string` (values: Stream, Download, StreamOrDownload, ProgressiveDownload, None)
  * excludeMinResolution `string` (values: SD, HD-720, HD-1080, HD-4K, External, Unknown)

### ItemCustomMetadata
* ItemCustomMetadata `object`: Custom metadata associated with an item.
  * name **required** `string`: The name of the custom metadata.
  * value **required** `string`: The value of the custom metadata.

### ItemDetail
* ItemDetail
  * advisoryText `string`: Advisory text about this item, related to the classification
  * availableEpisodeCount `integer`: The number of available episodes in the season, if the item is a season.
  * availableSeasonCount `integer`: The number of available seasons in the show, if the item is a show.
  * averageUserRating `number`: The average user rating.
  * badge `string`: The badge this item has.
  * channelShortCode `string`: The channel short code, if the item is a channel.
  * classification [ClassificationSummary](#classificationsummary)
  * contextualTitle `string`: A contextually relative title to display after a parent title.
  * customFields `object`: A map of custom fields defined by a curator for an item.
  * customId `string`: A custom identifier for this item.
  * duration `integer`: The duration of the media in seconds.
  * episodeCount `integer`: The number of episodes in the season, if the item is a season.
  * episodeName `string`: The full name of an episode.
  * episodeNumber `integer`: The number of an episode, if the item is an episode.
  * genres `array`: The array of genres this item belongs to.
    * items `string`
  * hasClosedCaptions `boolean`: Whether closed captioning is available.
  * id **required** `string`: Unique identifier for an Item
  * images `object`
  * offers `array`: The array of available offers for this item.
    * items [Offer](#offer)
  * path **required** `string`: The path to the detail page of this item. Can be used to load the item detail page via the /page endpoint.
  * releaseYear `integer`: The year this item was released
  * scopes `array`: The scopes for this item
    * items `string`
  * seasonId `string`: The identifier of the season this item belongs to, if the item is an episode.
  * seasonNumber `integer`: The number of a season, if the item is a season.
  * shortDescription `string`: A truncated description of the item
  * showId `string`: The identifier of the show this item belongs to, if the item is a season or episode.
  * showTitle `string`: The title of the show this item belongs to, if the item is a season or episode.
  * subtype `string`: Subtype of the item. Mainly used to identify different types when `type`
  * tagline `string`: The tagline of the item
  * themes `array`: Gets themes associated with the item
    * items [Theme](#theme)
  * title **required** `string`: The display title of the item.
  * type **required** `string` (values: movie, show, season, episode, program, link, trailer, channel, customAsset): The type of item
  * watchPath `string`: The path to watch this item, if the item is a watchable type, e.g. a `movie`, `program` and `episode`.
  * copyright `string`: Copyright information about this item
  * credits `array`: A list of credits associated with this item.
    * items [Credit](#credit)
  * customMetadata `array`: An ordered list of custom name-value-pair item metadata.
    * items [ItemCustomMetadata](#itemcustommetadata)
  * description `string`: The description of this item.
  * distributor `string`: The distributor of this item.
  * episodes [ItemList](#itemlist)
  * eventDate `string`: The optional date of an event.
  * genrePaths `array`: An array of genre paths mapping to the values within the `genres` array from ItemSummary.
    * items `string`
  * location `string`: The optional location (e.g. city) of an event.
  * season [ItemDetail](#itemdetail)
  * seasons [ItemList](#itemlist)
  * show [ItemDetail](#itemdetail)
  * totalUserRatings `integer`: The total number of users who have rated this item.
  * trailers `array`: A list of trailers associated with this item.
    * items [ItemSummary](#itemsummary)
  * venue `string`: The optional venue of an event.

### ItemDownloadable
* ItemDownloadable `object`
  * downloadable **required** `boolean`: is the item downloadable?
  * id **required** `string`: Unique identifier for an Item

### ItemDownloadableList
* ItemDownloadableList `object`: A list of items downloadable data.
  * items **required** `array`: A list of items
    * items [ItemDownloadable](#itemdownloadable)

### ItemDownloadableRequest
* ItemDownloadableRequest `object`
  * ids **required** `string`: Comma-separated list of AXIS item ids.

### ItemList
* ItemList `object`: A pageable list of items.
  * customFields `object`: A map of custom fields defined by a curator for a list.
  * description `string`: A full description of this list.
  * id **required** `string`: The id of this list
  * images `object`
  * itemTypes `array`: The types of items in the list
    * items `string` (values: movie, show, season, episode, program, link, trailer, channel, customAsset)
  * items **required** `array`: A list of items
    * items [ItemSummary](#itemsummary)
  * listData [ListData](#listdata)
  * paging **required** [Pagination](#pagination)
  * parameter `string`: If this list is parameterized, then this contains the parameter of the list in the format `name:value`.
  * path **required** `string`: The path of this list
  * shortDescription `string`: A short description of this list.
  * size **required** `integer`: The total size of the list
  * tagline `string`: The tagline of the item.
  * themes `array`
    * items [Theme](#theme)
  * title `string`: The title of this list

### ItemPurchase
* ItemPurchase `object`
  * id **required** `string`: The identifier of the purchased item.
  * ownership **required** `string` (values: Subscription, Free, Rent, Own, None): The ownership of the purchased item.
  * resolution **required** `string` (values: SD, HD-720, HD-1080, HD-4K, External, Unknown): The resolution of the purchased item.
  * title **required** `string`: The title of the purchased item.
  * type **required** `string` (values: movie, show, season, episode, program, link, trailer, channel, customAsset): The type of item purchased.

### ItemSchedule
* ItemSchedule `object`
  * blackout `boolean`: True if this schedule represents time when the channel is completely off air.
  * channelId **required** `string`: The id of the channel item this schedule belongs to.
  * endDate **required** `string`: The date and time this schedule ends.
  * featured `boolean`: True if this is a featured item schedule.
  * id **required** `string`
  * item [ItemSummary](#itemsummary)
  * live `boolean`: True if this is a live event.
  * repeat `boolean`: True if this has been aired previously on the same channel.
  * startDate **required** `string`: The date and time this schedule starts.

### ItemScheduleList
* ItemScheduleList `object`
  * channelId **required** `string`: The id of the channel the schedules belong to.
  * endDate **required** `string`: The date and time this list of schedules ends.
  * schedules **required** `array`: The list of item schedules.
    * items [ItemSchedule](#itemschedule)
  * startDate **required** `string`: The date and time this list of schedules starts.

### ItemSummary
* ItemSummary `object`
  * advisoryText `string`: Advisory text about this item, related to the classification
  * availableEpisodeCount `integer`: The number of available episodes in the season, if the item is a season.
  * availableSeasonCount `integer`: The number of available seasons in the show, if the item is a show.
  * averageUserRating `number`: The average user rating.
  * badge `string`: The badge this item has.
  * channelShortCode `string`: The channel short code, if the item is a channel.
  * classification [ClassificationSummary](#classificationsummary)
  * contextualTitle `string`: A contextually relative title to display after a parent title.
  * customFields `object`: A map of custom fields defined by a curator for an item.
  * customId `string`: A custom identifier for this item.
  * duration `integer`: The duration of the media in seconds.
  * episodeCount `integer`: The number of episodes in the season, if the item is a season.
  * episodeName `string`: The full name of an episode.
  * episodeNumber `integer`: The number of an episode, if the item is an episode.
  * genres `array`: The array of genres this item belongs to.
    * items `string`
  * hasClosedCaptions `boolean`: Whether closed captioning is available.
  * id **required** `string`: Unique identifier for an Item
  * images `object`
  * offers `array`: The array of available offers for this item.
    * items [Offer](#offer)
  * path **required** `string`: The path to the detail page of this item. Can be used to load the item detail page via the /page endpoint.
  * releaseYear `integer`: The year this item was released
  * scopes `array`: The scopes for this item
    * items `string`
  * seasonId `string`: The identifier of the season this item belongs to, if the item is an episode.
  * seasonNumber `integer`: The number of a season, if the item is a season.
  * shortDescription `string`: A truncated description of the item
  * showId `string`: The identifier of the show this item belongs to, if the item is a season or episode.
  * showTitle `string`: The title of the show this item belongs to, if the item is a season or episode.
  * subtype `string`: Subtype of the item. Mainly used to identify different types when `type`
  * tagline `string`: The tagline of the item
  * themes `array`: Gets themes associated with the item
    * items [Theme](#theme)
  * title **required** `string`: The display title of the item.
  * type **required** `string` (values: movie, show, season, episode, program, link, trailer, channel, customAsset): The type of item
  * watchPath `string`: The path to watch this item, if the item is a watchable type, e.g. a `movie`, `program` and `episode`.

### ItvAssignBtTokenRequest
* ItvAssignBtTokenRequest `object`
  * profileToken **required** `string`: The ITV profile token
  * token **required** `string`: The validated userToken.

### ItvAssignMsisdnRequest
* ItvAssignMsisdnRequest `object`
  * eeProductId **required** `string`: Product id from /ee/offers
  * msisdn **required** `string`: The validated msisdn.
  * profileToken **required** `string`: The ITV profile token
  * trackingHeader **required** `string`: trackingHeader

### ItvBillingHistory
* ItvBillingHistory `object`
  * payment_history **required** `array`: The array of objects with subscription payment details.
    * items [ItvBillingHistoryRecord](#itvbillinghistoryrecord)

### ItvBillingHistoryRecord
* ItvBillingHistoryRecord `object`
  * card **required** `object`: The card info.
  * charge **required** `object`: The amount charged.
  * invoice **required** `object`: The object with invoice details.
  * subscription **required** `object`: The object with subscription payment details.

### ItvBillingHistoryRequest
* ItvBillingHistoryRequest `object`
  * profileToken **required** `string`: The ITV profile token.

### ItvCancelSubscriptionRequest
* ItvCancelSubscriptionRequest `object`
  * profileToken **required** `string`: The ITV profile token.

### ItvCardDetails
* ItvCardDetails `object`
  * card_type **required** `string`: The payment card type (Visa/Mastercard/etc).
  * exp_month **required** `integer`: Expiry date month.
  * exp_year **required** `integer`: Expiry date year.
  * last4 **required** `string`: The last 4 digit of card number.

### ItvChangeCardDetailsRequest
* ItvChangeCardDetailsRequest `object`
  * cardToken **required** `string`: The credit card token.
  * profileToken **required** `string`: The ITV profile token.

### ItvChangeEmailRequest
* ItvChangeEmailRequest `object`
  * email **required** `string`: New email address for account/profile.
  * profileToken **required** `string`: The ITV profile token.

### ItvChangeMarketingRequest
* ItvChangeMarketingRequest `object`
  * emailOptIn **required** `boolean`: Updated marketing preferences for account/profile.
  * profileToken **required** `string`: The ITV profile token.

### ItvCurrentSubscription
* ItvCurrentSubscription `object`
  * cancelAtPeriodEnd **required** `boolean`: The cancellation period end flag.
  * collectionMethod **required** `string`: The description of payment collection method.
  * created **required** `integer`: The creation timestamp.
  * currentPeriodEnd **required** `integer`: The end of period timestamp.
  * currentPeriodStart **required** `integer`: The start of period timestamp.
  * plan **required** `object`: The plan used during subsribing.
  * status **required** `string`: The status of subscription.

### ItvDeleteAccountRequest
* ItvDeleteAccountRequest `object`
  * profileToken **required** `string`: The ITV profile token.

### ItvEntitlement
* ItvEntitlement `object`
  * card_type `string`: Start of subscription.
  * expiry **required** `string`: Expiry of subscription.
  * plan **required** `object`: Purchased plan data.
  * source **required** `string`: Source platform of purchase.
  * subscriptionId **required** `string`: Id of subscription.

### ItvEntitlementCancelation
* ItvEntitlementCancelation `object`
  * cancelled_at **required** `string`: Cancelation datetime.
  * itvId **required** `string`: Itv internal id.
  * source **required** `string`: Source platform of cancelation.
  * subscriptionId **required** `string`: Id of subscription.

### ItvEntitlementPlan
* ItvEntitlementPlan `object`
  * cost **required** `integer`: Source platform of purchase.
  * interval **required** `string` (values: day, week, month, year, none): The type of billing period used.
  * trialLength **required** `integer`: Given the `interval` this is how frequently it will run. e.g. every 2 weeks.
  * type **required** `string`: Type of the plan.

### ItvEntitlementsHistory
* ItvEntitlementsHistory `object`
  * cancellations **required** `array`: The results of availability checks.
    * items [ItvEntitlementCancelation](#itventitlementcancelation)
  * entitlements **required** `array`: The results of availability checks.
    * items [ItvEntitlement](#itventitlement)

### ItvFeatureFlag
* ItvFeatureFlag `object`
  * enabled **required** `boolean`: Is the feature enabled?
  * flag `string`: Feature flag data.

### ItvGetCardDetailsRequest
* ItvGetCardDetailsRequest `object`
  * profileToken **required** `string`: The ITV profile token.

### ItvGetDiscountResponse
* ItvGetDiscountResponse `object`
  * currency `string`: Payment currency.
  * description `string`: Description
  * headline `string`: Headline
  * id **required** `string`: The if of a discount for a user.
  * initialCost `number`: The initial cost.
  * longDescription `string`: Long description
  * nickname `string`: Discount nickname.
  * offerdurationperiod `string`: How long the descount will be valid for.
  * shortDescription `string`: Short description

### ItvPinAuthRequest
* ItvPinAuthRequest `object`
  * cookieType `string` (values: Session, Persistent): If you specify a cookie type then a content filter cookie will be returned
  * pin **required** `string`: The 4-digit parental control pin.
  * scopes `array`: The scope(s) of the token(s) required.
    * items `string` (values: Catalog, Commerce, Settings, Playback)

### ItvPlanListItem
* ItvPlanListItem `object`
  * amount **required** `number`: The price of a plan. If a free plan then undefined.
  * currency **required** `string`: The currency a plan is offered in.
  * description **required** `string`: The textual description.
  * id **required** `string`: The identifier of a plan.
  * interval **required** `string` (values: day, week, month, year, none): The type of billing period used.
  * intervalCount **required** `integer`: Given the `interval` this is how frequently it will run. e.g. every 2 weeks.
  * nickname **required** `string`: The title of a plan.
  * product **required** `string`: The product description.
  * switchingText `string`: The text to switch for.
  * trialPeriodDays `integer`: How many days a trial period runs for a plan. Only valid if `hasTrialPeriod` is true.

### ItvPlans
* ItvPlans `object`
  * plans **required** `array`: The list of available plans.
    * items [ItvPlanListItem](#itvplanlistitem)

### ItvProfileToken
* ItvProfileToken `object`
  * profileToken **required** `string`: The ITV profile token.

### ItvProfileTokenRequest
* ItvProfileTokenRequest `object`
  * password **required** `string`: The password.

### ItvPurchase
* ItvPurchase `object`
  * customerId `string`: The identifier of user in payment system.
  * planId **required** `string`: The identifier of subscription plan.
  * subscriptionId `string`: The identifier of subscription in payment system.

### ItvPurchaseRequest
* ItvPurchaseRequest `object`
  * cardToken **required** `string`: The credit card token.
  * planId **required** `string`: The identifier of the plan to purchase.
  * profileToken **required** `string`: The ITV profile token.
  * voucher `string`: A coupon/voucher for a discount.

### ItvSubscriptionState
* ItvSubscriptionState `object`
  * effective_entitlements **required** `array`: The array of entitlement objects.
    * items `object`
  * failed_availability_checks **required** `array`: The results of availability checks.
    * items `string`
  * purchased **required** `array`: The array of entitlement names.
    * items `string`
  * source **required** `string`: The payment provider (stripe/itunes)

### ItvUpdateProfileRequest
* ItvUpdateProfileRequest `object`
  * dateOfBirth `string`: The date of birth.
  * email `string`: The email address.
  * firstName `string`: Last name.
  * lastName `string`: First name.
  * postcode `string`: The postal code.
  * profileToken **required** `string`: The ITV profile token.
  * title `string`: The title.

### ItvUpgradePlanRequest
* ItvUpgradePlanRequest `object`
  * planId **required** `string`: The identifier of the plan to purchase.

### ItvVoucher
* ItvVoucher `object`
  * amountOff **required** `number`: The absolute amount off.
  * currency **required** `string`: The currency of a given discount.
  * duration **required** `string`: The duration descriptor for a given discount.
  * durationInMonths **required** `integer`: The duration in months for a given discount.
  * id **required** `string`: The coupon/voucher.
  * longDescription **required** `string`: The coupon/voucher long description.
  * percentOff **required** `number`: The percentage off.
  * shortDescription **required** `string`: The coupon/voucher short description.
  * valid **required** `boolean`: The coupon/voucher validity.

### ItvVoucherRequest
* ItvVoucherRequest `object`
  * voucher **required** `string`: The voucher.

### Language
* Language `object`
  * code **required** `string`: The ISO language code of the language e.g. "en-US".
  * label **required** `string`: Display label for the language.
  * title **required** `string`: Display title for the language.

### ListData
* ListData `object`: Extra data to accompany ItemList content. The (single) key in the object is
  * ContinueWatching [ContinueWatchingListData](#continuewatchinglistdata)

### MediaFile
* MediaFile `object`
  * channels `integer`: The number of audio channels.
  * deliveryType **required** `string` (values: Stream, Progressive, Download): The way in which the media file is delivered.
  * drm **required** `string`: The type of drm used to encrypt the media. 'None' if unencrypted.
  * format **required** `string`: The format the media was encoded in.
  * height **required** `integer`: The height of the video media.
  * language **required** `string`: The language code for the media, e.g. 'en'.
  * name **required** `string`: The name of the media file.
  * resolution **required** `string` (values: SD, HD-720, HD-1080, HD-4K, External, Unknown): The resolution of the video media.
  * url **required** `string`: The url to access the media file.
  * width **required** `integer`: The width of the video media.

### NavContent
* NavContent `object`
  * imageType `string`: The image type to target when rendering items of the list.
  * list [ItemList](#itemlist)
  * title `string`: The title of the embedded navigation content.

### NavEntry
* NavEntry `object`
  * children `array`: Child nav entries.
    * items [NavEntry](#naventry)
  * content [NavContent](#navcontent)
  * customFields `object`: A map of custom fields defined by a curator for a nav entry.
  * depth **required** `integer`: The depth of the NavEntry (top level is 0)
  * featured `boolean`: True if this is a featured menu item.
  * label `string`: The text label for this nav entry.
  * path `string`: The path this nav entry links to.

### Navigation
* Navigation `object`
  * account [NavEntry](#naventry)
  * copyright `string`: Copyright information.
  * customFields `object`: A map of custom fields defined by a curator for navigation.
  * footer [NavEntry](#naventry)
  * header **required** `array`: The header navigation.
    * items [NavEntry](#naventry)

### NextPlaybackItem
* NextPlaybackItem `object`
  * firstWatchedDate `string`: Time when the item corresponding to the itemId passed in by the client was
  * lastWatchedDate `string`: Time when the item corresponding to the itemId passed in by the client was
  * next [ItemDetail](#itemdetail)
  * sourceItemId **required** `string`: The id of the item used to determine the next item to play.
  * suggestionType `string` (values: StartWatching, ContinueWatching, RestartWatching, Sequential, None): Field indicating the type or reason behind the suggestion.

### Offer
* Offer
  * deliveryType **required** `string` (values: Stream, Download, StreamOrDownload, ProgressiveDownload, None)
  * exclusionRules `array`: Any specific playback exclusion rules.
    * items [ExclusionRule](#exclusionrule)
  * maxDownloads `integer`: The maximum number of allowed downloads.
  * maxPlays `integer`: The maximum number of allowed plays.
  * ownership **required** `string` (values: Subscription, Free, Rent, Own, None)
  * playPeriod `integer`: The length of time in minutes which the rental will last once played for the first time.
  * rentalPeriod `integer`: The length of time in minutes which the rental will last once purchased.
  * resolution **required** `string` (values: SD, HD-720, HD-1080, HD-4K, External, Unknown)
  * scopes **required** `array`
    * items `string`
  * availability **required** `string` (values: Available, ComingSoon)
  * customFields `object`: A map of custom fields defined by a curator for an offer.
  * endDate `string`
  * id `string`
  * name `string`
  * price **required** `number`
  * startDate `string`
  * subscriptionCode `string`: The code of the subscription this offer is offered under, if any.

### OfferRights
* OfferRights `object`: The base type for both Offer and Entitlement.
  * deliveryType **required** `string` (values: Stream, Download, StreamOrDownload, ProgressiveDownload, None)
  * exclusionRules `array`: Any specific playback exclusion rules.
    * items [ExclusionRule](#exclusionrule)
  * maxDownloads `integer`: The maximum number of allowed downloads.
  * maxPlays `integer`: The maximum number of allowed plays.
  * ownership **required** `string` (values: Subscription, Free, Rent, Own, None)
  * playPeriod `integer`: The length of time in minutes which the rental will last once played for the first time.
  * rentalPeriod `integer`: The length of time in minutes which the rental will last once purchased.
  * resolution **required** `string` (values: SD, HD-720, HD-1080, HD-4K, External, Unknown)
  * scopes **required** `array`
    * items `string`

### Page
* Page
  * id **required** `string`: Unique identifier for the page.
  * isStatic **required** `boolean`: True if this page is static and doesn't have any dynamic content to load.
  * isSystemPage **required** `boolean`: True if this page is a system page type.
  * key `string`: Key used to lookup a known page.
  * path **required** `string`: Unique path for the page.
  * template **required** `string`: Identifier for of the page template to render this page.
  * title **required** `string`: Title of the page.
  * customFields `object`: A map of custom fields defined by a curator for a page.
  * entries **required** `array`: Entries of a page
    * items [PageEntry](#pageentry)
  * item [ItemDetail](#itemdetail)
  * list [ItemList](#itemlist)
  * metadata [PageMetadata](#pagemetadata)
  * themes `array`
    * items [Theme](#theme)

### PageEntry
* PageEntry `object`: Represents an entry of a Page.
  * customFields `object`: A map of custom fields defined by a curator for a page entry.
  * id **required** `string`: The unique identifier for a page entry.
  * images `object`: The images for the page entry if any.
  * item [ItemSummary](#itemsummary)
  * list [ItemList](#itemlist)
  * people `array`: If 'type' is 'PeopleEntry' then this is the array of people to present.
    * items [Person](#person)
  * template **required** `string`: Template type used to present the content of the PageEntry.
  * text `string`: If 'type' is 'TextEntry' then this is the text to be represented.
  * title **required** `string`: The name of the Page Entry.
  * type **required** `string` (values: ItemEntry, ItemDetailEntry, ListEntry, ListDetailEntry, UserEntry, TextEntry, ImageEntry, CustomEntry, PeopleEntry): The type of PageEntry. Used to help identify what type of content will be presented.

### PageMetadata
* PageMetadata `object`: Metadata associated with a page. Primarily intended for SEO usage.
  * description `string`
  * keywords `array`
    * items `string`

### PageSummary
* PageSummary `object`
  * id **required** `string`: Unique identifier for the page.
  * isStatic **required** `boolean`: True if this page is static and doesn't have any dynamic content to load.
  * isSystemPage **required** `boolean`: True if this page is a system page type.
  * key `string`: Key used to lookup a known page.
  * path **required** `string`: Unique path for the page.
  * template **required** `string`: Identifier for of the page template to render this page.
  * title **required** `string`: Title of the page.

### Pagination
* Pagination `object`
  * authorization [PaginationAuth](#paginationauth)
  * next `string`: Path to load next page of data, or null if not available
  * options [PaginationOptions](#paginationoptions)
  * page **required** `integer`: The current page number.
  * previous `string`: Path to load previous page of data, or null if not available.
  * size `integer`: The current page size.
  * total **required** `integer`: The total number of pages available given the current page size.

### PaginationAuth
* PaginationAuth `object`
  * scope **required** `string` (values: Catalog, Commerce, Settings): The token scope required.
  * type **required** `string` (values: UserAccount, UserProfile): The token type required to load the list.

### PaginationOptions
* PaginationOptions `object`
  * completed `boolean`: Items filtered by whether they've been fully watched or not.
  * itemType `string` (values: movie, show, season, episode, program, link, trailer, channel, customAsset): Specific item type filter.
  * maxRating `string`: The maximum rating (inclusive) of items returned, e.g. 'AUOFLC-PG'.
  * order `string` (values: asc, desc): The applied sort order if any.
  * orderBy `string` (values: a-z, release-year, date-added): The applied sort ordering property if any.
  * pageSize `integer`: The number of items to return in a list page.

### PasswordResetEmailRequest
* PasswordResetEmailRequest `object`
  * email **required** `string`: The email address of the primary account profile to reset the password for.

### PasswordResetRequest
* PasswordResetRequest `object`
  * password **required** `string`: The new password for the account.
  * resetToken **required** `string`: The ITV reset token.

### PaymentMethod
* PaymentMethod `object`
  * balance `number`: The balance of the wallet if the payment method is a wallet.
  * brand `string` (values: Visa, MasterCard, AmericanExpress, Other): The brand of the card if the payment method is a card.
  * currency `string`: The currency code of the wallet if the payment method is a wallet.
  * description **required** `string`: A short description of a payment method.
  * expiryMonth `number`: The expiry month of the card if the payment method is a card.
  * expiryYear `number`: The expiry year of the card if the payment method is a card.
  * id **required** `string`: The unique identifier of a payment method.
  * lastDigits `number`: The last digits of the card if the payment method is a card.
  * type **required** `string` (values: Card, Wallet): The type of payment method.

### Person
* Person `object`
  * name **required** `string`: The name of the person.
  * path **required** `string`: The path to the person

### Plan
* Plan `object`
  * alias **required** `string`: An alias for a plan.
  * benefits **required** `array`: The list of benefits to display for a plan.
    * items `string`
  * billingPeriodFrequency **required** `integer`: Given the `billingPeriodType` this is how frequently it will run. e.g. every 2 weeks.
  * billingPeriodType **required** `string` (values: day, week, month, year, none): The type of billing period used.
  * currency **required** `string`: The currency a plan is offered in.
  * customFields `object`: A map of custom fields defined by a curator for a plan.
  * hasTrialPeriod **required** `boolean`: True if a plan has a trial period, false if not.
  * id **required** `string`: The identifier of a plan.
  * isActive **required** `boolean`: True if a plan is active, false if its retired.
  * isFeatured **required** `boolean`: True if a plan should be highlighted as featured, false if not.
  * isPrivate **required** `boolean`: True if a plan should not be presented in the primary plan options, false if not.
  * price `number`: The price of a plan. If a free plan then undefined.
  * revenueType **required** `string` (values: TVOD, SVOD): The revenue type a plan targets.
  * subscriptionCode **required** `string`: The subscription code a plan targets.
  * tagline **required** `string`: The short tagline for a plan.
  * termsAndConditions **required** `string`: The terms and conditions for a plan.
  * title **required** `string`: The title of a plan.
  * trialPeriodDays **required** `integer`: How many days a trial period runs for a plan. Only valid if `hasTrialPeriod` is true.
  * type **required** `string` (values: Free, Subscription): The type of plan.

### PlanPurchase
* PlanPurchase `object`
  * id `string`: The identifier of the purchased plan.
  * price `number`: The price of the purchased plan.
  * subscriptionId `string`: The identifier of the subscription membership to the plan.
  * title **required** `string`: The title of the purchased plan.
  * type **required** `string` (values: Free, Subscription): The type of plan purchased.

### ProfileCreationRequest
* ProfileCreationRequest `object`
  * languageCode `string`: The code of the preferred language for the profile.
  * name **required** `string`: The unique name of the profile.
  * pinEnabled `boolean`: Whether an account pin is required to enter the profile.
  * purchaseEnabled `boolean`: Whether the profile can make purchases with the account payment options.
  * segments `array`: The segments a profile should be placed under
    * items `string`

### ProfileDetail
* ProfileDetail
  * color `string`: Hex color value assigned to the profile.
  * id **required** `string`: The id of the profile.
  * isActive **required** `boolean`: Whether the profile is active or not.
  * languageCode `string`: The code of the preferred language for the profile.
  * marketingEnabled **required** `boolean`: Whether the profile has opted in or out of marketing material.
  * maxRatingContentFilter [ClassificationSummary](#classificationsummary)
  * minRatingPlaybackGuard [ClassificationSummary](#classificationsummary)
  * name **required** `string`: The unique name of the profile.
  * pinEnabled **required** `boolean`: Whether a pin is required to enter the profile.
  * purchaseEnabled **required** `boolean`: Whether the profile can make purchases with the account payment options.
  * segments **required** `array`: The segments a profile has been placed under
    * items `string`
  * bookmarked **required** `object`: A map of bookmarked itemIds => created date
  * rated **required** `object`: A map of rated itemIds => rating out of 10
  * watched **required** `object`: A map of watched itemIds => last watched position

### ProfileSummary
* ProfileSummary `object`
  * color `string`: Hex color value assigned to the profile.
  * id **required** `string`: The id of the profile.
  * isActive **required** `boolean`: Whether the profile is active or not.
  * languageCode `string`: The code of the preferred language for the profile.
  * marketingEnabled **required** `boolean`: Whether the profile has opted in or out of marketing material.
  * maxRatingContentFilter [ClassificationSummary](#classificationsummary)
  * minRatingPlaybackGuard [ClassificationSummary](#classificationsummary)
  * name **required** `string`: The unique name of the profile.
  * pinEnabled **required** `boolean`: Whether a pin is required to enter the profile.
  * purchaseEnabled **required** `boolean`: Whether the profile can make purchases with the account payment options.
  * segments **required** `array`: The segments a profile has been placed under
    * items `string`

### ProfileTokenRequest
* ProfileTokenRequest `object`
  * cookieType `string` (values: Session, Persistent): If you specify a cookie type then a content filter cookie will be returned
  * pin `string`: The pin associated with this profile, if any.
  * profileId **required** `string`: The id of the profile the token should grant access rights to.
  * scopes **required** `array`: The scope(s) of the token(s) required.
    * items `string` (values: Catalog, Commerce, Settings)

### ProfileUpdateRequest
* ProfileUpdateRequest `object`
  * languageCode `string`: The code of the preferred language for the profile.
  * name `string`: The unique name of the profile.
  * pinEnabled `boolean`: Whether an account pin is required to enter the profile.
  * purchaseEnabled `boolean`: Whether the profile can make purchases with the account payment options.
  * segments `array`: The segments a profile should be placed under
    * items `string`

### Purchase
* Purchase `object`
  * authorizationDate `string`: The date the purchase was authorized.
  * creationDate **required** `string`: The date the purchase was created.
  * currency **required** `string`: The currency code used to make the purchase.
  * id **required** `string`: The identifier of the purchase.
  * item [ItemPurchase](#itempurchase)
  * paymentMethodId `string`: The identifier of the payment method used to make the purchase.
  * plan [PlanPurchase](#planpurchase)
  * total **required** `number`: The total cost of the purchase.

### PurchaseRequest
* PurchaseRequest `object`
  * itemId `string`: The identifier of the item to purchase.
  * offerId `string`: The identifier of the item offer to purchase.
  * paymentMethodId `string`: The identifier of the payment method to use.
  * planId `string`: The identifier of the plan to purchase.

### RegistrationRequest
* RegistrationRequest `object`
  * email **required** `string`
  * firstName `string`
  * languageCode `string`: The code of the preferred language for the primary profile.
  * lastName `string`
  * marketing `boolean`: Whether to receive marketing material or not. Default to true.
  * password **required** `string`
  * pin `string`: The primary account pin.
  * segments `array`: The segments to apply to the primary profile.
    * items `string`

### SamsungPreview
* SamsungPreview `object`
  * expires `integer`: For public preview only
  * expires_only `boolean`: For public preview only
  * sections **required** `array`: Preview sections
    * items `object`
      * position `integer`: Section position. If specified, sections are shown in ascending position order.
      * tiles **required** `array`: Tiles within the section
        * items `object`
          * action_data **required** `string`: Data to send to the application when the tile is clicked
          * display_from `string`: Time to begin showing the tile
          * display_until `string`: Time to stop showing the tile
          * image_ratio **required** `string`: Thumbnail image aspect ratio
          * image_url **required** `string`: Thumbnail image URL
          * is_playable **required** `boolean`: If "true", a "Play" icon is shown over the thumbnail image
          * position `integer`: Section position. If specified, sections are shown in ascending position order
          * subtitle `string`: Tile subtitle
          * title `string`: Tile title
      * title `string`: Section title

### SearchResults
* SearchResults `object`
  * items [ItemList](#itemlist)
  * movies [ItemList](#itemlist)
  * other [ItemList](#itemlist)
  * people `array`: The list of people relevant to the search term.
    * items [Person](#person)
  * term **required** `string`: The search term.
  * total **required** `integer`: The total number of results.
  * tv [ItemList](#itemlist)

### ServiceError
* ServiceError `object`
  * code `integer`: An optional code classifying the error. Should be taken in the context of the http status code.
  * message **required** `string`: A description of the error.

### SingleSignOnRequest
* SingleSignOnRequest `object`
  * cookieType `string` (values: Session, Persistent): If you specify a cookie type then a content filter cookie will be returned
  * linkAccounts `boolean`: When a user attempts to sign in using single-sign-on, we may find an account created
  * provider **required** `string` (values: Facebook): The third party single-sign-on provider.
  * scopes `array`: The scope(s) of the tokens required.
    * items `string` (values: Catalog, Commerce, Settings, Playback)
  * token **required** `string`: A token from the third party single-sign-on provider e.g. an identity token from Facebook.

### Subscription
* Subscription `object`
  * code **required** `string`: The unique subscription code.
  * endDate `string`: The end date of a subscription.
  * id `string`: Unique identifier for the subscription.
  * isTrialPeriod **required** `boolean`: True if a subscription is in its trial period, false if not.
  * planId **required** `string`: The plan a subscription belongs to.
  * startDate **required** `string`: The start date of a subscription.
  * status **required** `string` (values: Active, Cancelled, Lapsed, Expired, None): The status of a subscription.

### SubscriptionDetails
* SubscriptionDetails `object`
  * itvData_purchased **required** `object`: The ITV purchased subscription data.

### Theme
* Theme `object`
  * colors **required** `array`: The list of colors defined for the theme.
    * items [ThemeColor](#themecolor)
  * type **required** `string` (values: Background, Text, Custom): The type of theme.

### ThemeColor
* ThemeColor `object`
  * name **required** `string`: The name of the theme color.
  * opacity `number`: The opacity of the theme color from 0 to 1.
  * value **required** `string`: The hex value of the theme color.

### TokenRefreshRequest
* TokenRefreshRequest `object`
  * cookieType `string` (values: Session, Persistent): If you specify a cookie type then a content filter cookie will be returned
  * token **required** `string`: The token to refresh.

### UserRating
* UserRating `object`
  * itemId **required** `string`: The id of the item rated.
  * rating **required** `integer`: The rating out of 10

### Watched
* Watched `object`
  * firstWatchedDate **required** `string`
  * isFullyWatched `boolean`: True - if the item is fully watched, False - otherwise.
  * itemId `string`: The id of the item watched.
  * lastWatchedDate **required** `string`
  * position **required** `integer`: The last playhead position watched for the item.


