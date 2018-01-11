# @datafire/haloapi_profile

Client library for Profile

## Installation and Usage
```bash
npm install --save @datafire/haloapi_profile
```
```js
let haloapi_profile = require('@datafire/haloapi_profile').create({
  apiKeyHeader: "",
  apiKeyQuery: ""
});

haloapi_profile.h5.profiles.player.appearance.get({}).then(data => {
  console.log(data);
})
```

## Description

API that provides Profile information about Players.

## Actions

### h5.profiles.player.appearance.get
<p>This Endpoint retrieves appearance information for a player.</p>
<p>If the player is a member of a Company, the Company's ID and Name will be provided. Additional Company information is available via the Stats API.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>July 14, 2017:</strong></p>
    <ul>
        <li>Added Endpoint.</li>
    </ul>
</div>



```js
haloapi_profile.h5.profiles.player.appearance.get({
  "player": ""
}, context)
```

#### Input
* input `object`
  * player **required** `string`: The Player's Gamertag

#### Output
*Output schema unknown*

### h5.profiles.player.emblem.get
<p>This Endpoint returns an HTTP Redirect (302 Found) response to the caller with the URL of an image of the Player's Emblem. The initial request to this API that returns the HTTP Redirect is throttled and requires a Subscription Key. However, the image itself (at hostname "image.halocdn.com") is not throttled and does not require a Subscription Key. Note that if the Player later changes their Emblem, the image itself is not refreshed and will need to be refreshed via a new request to this API.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>July 14, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Halo 5 - Emblem Image" to "Halo 5 - Player Emblem Image".</li>
    </ul>
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Emblem Image" to "Halo 5 - Emblem Image".</li>
        <li>Removed "{title}" Request Parameter.</li>
    </ul>
</div>



```js
haloapi_profile.h5.profiles.player.emblem.get({
  "player": ""
}, context)
```

#### Input
* input `object`
  * player **required** `string`: The Player's Gamertag.
  * size `number`: An optional size (specified in pixels) of the image requested. When specified, this value must be one of the following values: 95, 128, 190, 256, 512. If a value is specified that is not in this list, the API returns HTTP 400 ("Bad Request"). If the size is empty or missing, the API will use 256.

#### Output
*Output schema unknown*

### h5.profiles.player.spartan.get
<p>This Endpoint returns an HTTP Redirect (302 Found) response to the caller with the URL of an image of the Player's Spartan's appearance. The initial request to this API that returns the HTTP Redirect is throttled and requires a Subscription Key. However, the image itself (at hostname "image.halocdn.com") is not throttled and does not require a Subscription Key. Note that if the Player later changes their Spartan's appearance, the image itself is not refreshed and will need to be refreshed via a new request to this API.</p>
<br />
<h4>Changelog</h4>
<div class="panel-body">
    <p><strong>July 14, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Halo 5 - Spartan Image" to "Halo 5 - Player Spartan Image".</li>
    </ul>
    <p><strong>February 21, 2017:</strong></p>
    <ul>
        <li>Renamed Endpoint from "Spartan Image" to "Halo 5 - Spartan Image".</li>
        <li>Removed "{title}" Request Parameter.</li>
    </ul>
</div>



```js
haloapi_profile.h5.profiles.player.spartan.get({
  "player": ""
}, context)
```

#### Input
* input `object`
  * player **required** `string`: The Player's Gamertag.
  * size `number`: An optional size (specified in pixels) of the image requested. When specified, this value must be one of the following values: 95, 128, 190, 256, 512. If a value is specified that is not in this list, the API returns HTTP 400 ("Bad Request"). If the size is empty or missing, the API will use 256.
  * crop `string`: An optional crop that will be used to determine what portion of the Spartan is returned in the image. The value must be either "full" or "portrait". If no value is specified "full" is used. If an unsupported value is provided, the API returns HTTP 400 ("Bad Request").

#### Output
*Output schema unknown*



## Definitions

*This integration has no definitions*
