# @datafire/greenpeace

Client library for Greenwire Public API

## Installation and Usage
```bash
npm install --save @datafire/greenpeace
```
```js
let greenpeace = require('@datafire/greenpeace').create();

.then(data => {
  console.log(data);
});
```

## Description

Greenpeace Greenwire allows you connect with other volunteers, activists and groups working on environmental campaigns all across the world!

## Actions

### events.get
Return the upcoming events (e.g. start date >= today). Gets an array of `Event` object. Mandatory query param of **domain** determines the site / country the event belongs to.


```js
greenpeace.events.get({
  "domain": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`: the site the groups belongs to, example: netherlands
  * limit `string`: the number of desired records

#### Output
* output `object`
  * body `array`
    * items [Event](#event)
  * header [HeaderSuccess](#headersuccess)

### events.UUID.get
Get one `Event` object by specifying its UUID in the url path.


```js
greenpeace.events.UUID.get({
  "UUID": ""
}, context)
```

#### Input
* input `object`
  * UUID **required** `string`

#### Output
* output `object`
  * data [Event](#event)
  * header [HeaderSuccess](#headersuccess)

### groups.get
Gets an array of `Group` object. Mandatory query param of **domain** determines the site / country the group belongs to.


```js
greenpeace.groups.get({
  "domain": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`: the site the groups belongs to, example: netherlands
  * limit `string`: the number of desired records

#### Output
* output `object`
  * body `array`
    * items [Group](#group)
  * header [HeaderSuccess](#headersuccess)

### groups.UUID.get
Get one `Group` object by specifying its UUID in the url path.


```js
greenpeace.groups.UUID.get({
  "UUID": ""
}, context)
```

#### Input
* input `object`
  * UUID **required** `string`

#### Output
* output `object`
  * data [Group](#group)
  * header [HeaderSuccess](#headersuccess)

### volunteers.get
Gets an array of `Volunteer` object. Mandatory query param of **domain** determines the site / country the volunteers are from.


```js
greenpeace.volunteers.get({
  "domain": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`: the site the users are registered on, example: netherlands
  * limit `string`: the number of desired records. Default is 5.
  * must_have_default_avatar `boolean`: 1 or 0. filter on people that have the default avatar or not.

#### Output
* output `object`
  * body `array`
    * items [Volunteer](#volunteer)
  * header [HeaderSuccess](#headersuccess)

### volunteers.UUID.get
Get one specific `Volunteer` object by specifying its UUID in the url path.


```js
greenpeace.volunteers.UUID.get({
  "UUID": ""
}, context)
```

#### Input
* input `object`
  * UUID **required** `string`

#### Output
* output `object`
  * body [Volunteer](#volunteer)
  * header [HeaderSuccess](#headersuccess)



## Definitions

### Coordinates
* Coordinates `object`
  * latitude `string`: Signed decimal format, example: 52.1234
  * longitude `string`: Signed decimal format, example -77.022223

### DateTime
* DateTime `string`: The date in YYYY-MM-DD HH:MM:SS format, example: 2015-12-31 23:59:59

### Event
* Event `object`
  * created [DateTime](#datetime)
  * description [HTML](#html)
  * end_date [DateTime](#datetime)
  * groups `array`
    * items [GroupLite](#grouplite)
  * location [Location](#location)
  * modified [DateTime](#datetime)
  * name `string`
  * organizers `array`
    * items [VolunteerLite](#volunteerlite)
  * picture [URL](#url)
  * serial [Serial](#serial)
  * start_date [DateTime](#datetime)
  * uuid [UUID](#uuid)

### Group
* Group `object`
  * created [DateTime](#datetime)
  * description [HTML](#html)
  * group_type [GroupType](#grouptype)
  * location [Location](#location)
  * mission `string`
  * modified [DateTime](#datetime)
  * name `string`
  * picture [URL](#url)
  * serial [Serial](#serial)
  * uuid [UUID](#uuid)

### GroupLite
* GroupLite `object`
  * name `string`
  * serial [Serial](#serial)
  * uuid [UUID](#uuid)

### GroupType
* GroupType `string` (values: Country group, Campaign Project group, Local group, Discussion group, Interest group, Skills-based group)

### HTML
* HTML `string`: A string containing sanitized HTML code

### HTTP_Code
* HTTP_Code `string`: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

### HTTP_Status
* HTTP_Status `integer`: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

### HeaderError
* HeaderError `object`
  * code [HTTP_Code](#http_code)
  * error `string`: the error message
  * id `integer`: transaction nonce
  * pagination `object`
  * resources [ResourceType](#resourcetype)
  * status [HTTP_Status](#http_status)

### HeaderSuccess
* HeaderSuccess `object`
  * code [HTTP_Code](#http_code)
  * error `null`
  * id `integer`: transaction nonce
  * pagination [Pagination](#pagination)
  * resources [ResourceType](#resourcetype)
  * status [HTTP_Status](#http_status)

### ISO_3166-1_alpha-2
* ISO_3166-1_alpha-2 `string`: Country code see. https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2

### Location
* Location `object`
  * city `string`
  * coordinates [Coordinates](#coordinates)
  * country `string`
  * postcode `string`
  * state `string`
  * streetname `string`

### LocationSimple
* LocationSimple `object`
  * country [ISO_3166-1_alpha-2](#iso_3166-1_alpha-2)

### Pagination
* Pagination `object`
  * limit `integer`: the nubmer of items per page
  * page `integer`: the current page
  * total `integer`: the total number of pages

### ResourceType
* ResourceType `string` (values: group, groups, event, events, volunteer, volunteers): The name of the requested object/model/resource. Plural if a collection.

### Serial
* Serial `string`: The primary key in Drupal, e.g the entity/node id

### URL
* URL `string`: A resource location, example: https://greenwire.greenpeace.org

### UUID
* UUID `string`: Universally unique identifier in canonical format, example: de305d54-75b4-431b-adb2-eb6b9e546014

### Volunteer
* Volunteer `object`
  * avatar [URL](#url)
  * locations `array`
    * items [LocationSimple](#locationsimple)
  * uuid [UUID](#uuid)

### VolunteerLite
* VolunteerLite `object`
  * serial [Serial](#serial)
  * uuid [UUID](#uuid)


