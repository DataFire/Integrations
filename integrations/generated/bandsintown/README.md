# @datafire/bandsintown

Client library for Bandsintown

## Installation and Usage
```bash
npm install --save @datafire/bandsintown
```
```js
let bandsintown = require('@datafire/bandsintown').create();

bandsintown.artist({
  "artistname": "",
  "app_id": ""
}).then(data => {
  console.log(data);
});
```

## Description

# What is the Bandsintown API?
The Bandsintown API is designed for enterprise partners and artists with websites, media players, and/or mobile applications that would like to list an artist's events and provide their users with the ability to buy tickets and RSVP to these events.

It offers read-only access to artist info and artist events:
- artist info: returns the link to the Bandsintown artist page, the link to the artist photo, the current number of trackers and more
- artist events: returns the list of upcoming events including their date and time, venue name and location, ticket links, lineup, description and the link to the Bandsintown event page

Note you can also search for events on a given date or within a given date range, including past dates.

# Getting Started
- In order to use the Bandsintown API, you must have written consent from Bandsintown Inc. Any other use of the Bandsintown API is prohibited. [Contact Bandsintown](http://help.bandsintown.com/) to tell us what you plan to do and request your personal application ID.
- Find out about the API methods available and the format of the API responses below. Select the method you wish to use and try it out online with the app ID provided to you.
- Call our Bandsintown API with the app ID provided straight from your website or back-end platform and choose which element of the API response you wish to display. Scroll to the bottom of this page to find out about the Models used.


## Actions

### artist
Get artist information



```js
bandsintown.artist({
  "artistname": "",
  "app_id": ""
}, context)
```

#### Input
* input `object`
  * artistname **required** `string`: The name of the artist. If it contains one of the special characters below, please be sure to replace it by the corresponding code: for / use %252F, for ? use %253F, for * use %252A, and for " use %27C
  * app_id **required** `string`: The application ID assigned to you by Bandsintown

#### Output
* output [ArtistData](#artistdata)

### artistEvents
artist events



```js
bandsintown.artistEvents({
  "artistname": "",
  "app_id": ""
}, context)
```

#### Input
* input `object`
  * artistname **required** `string`: The name of the artist. If it contains one of the special characters below, please be sure to replace it by the corresponding code: for / use %252F, for ? use %253F, for * use %252A, and for " use %27C
  * app_id **required** `string`: The application ID assigned to you by Bandsintown
  * date `string`: Date range of requested shows e.g. 2015-05-05,2017-05-05

#### Output
* output `array`
  * items [EventData](#eventdata)



## Definitions

### ArtistData
* ArtistData `object`
  * facebook_page_url **required** `string`
  * id `integer`
  * image_url **required** `string`
  * mbid **required** `string`
  * name **required** `string`
  * thumb_url **required** `string`
  * tracker_count **required** `integer`
  * upcoming_event_count **required** `integer`
  * url **required** `string`

### EventData
* EventData `object`
  * artist_id **required** `string`
  * datetime **required** `string`
  * description `string`
  * id **required** `string`
  * lineup **required** `array`
    * items `string`
  * offers **required** `array`
    * items [OfferData](#offerdata)
  * on_sale_datetime **required** `string`
  * url **required** `string`
  * venue **required** [VenueData](#venuedata)

### OfferData
* OfferData `object`
  * status **required** `string`
  * type **required** `string`
  * url **required** `string`

### VenueData
* VenueData `object`
  * city **required** `string`
  * country **required** `string`
  * latitude **required** `string`
  * longitude **required** `string`
  * name **required** `string`
  * region **required** `string`


