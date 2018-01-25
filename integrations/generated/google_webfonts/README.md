# @datafire/google_webfonts

Client library for Google Fonts Developer

## Installation and Usage
```bash
npm install --save @datafire/google_webfonts
```
```js
let google_webfonts = require('@datafire/google_webfonts').create();

google_webfonts.webfonts.list({}).then(data => {
  console.log(data);
});
```

## Description

Accesses the metadata for all families served by Google Fonts, providing a list of families currently available (including available styles and a list of supported script subsets).

## Actions

### webfonts.list
Retrieves the list of fonts currently served by the Google Fonts Developer API


```js
google_webfonts.webfonts.list({}, context)
```

#### Input
* input `object`
  * sort `string` (values: alpha, date, popularity, style, trending): Enables sorting of the list
  * alt `string` (values: json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [WebfontList](#webfontlist)



## Definitions

### Webfont
* Webfont `object`
  * category `string`: The category of the font.
  * family `string`: The name of the font.
  * files `object`: The font files (with all supported scripts) for each one of the available variants, as a key : value map.
  * kind `string`: This kind represents a webfont object in the webfonts service.
  * lastModified `string`: The date (format "yyyy-MM-dd") the font was modified for the last time.
  * subsets `array`: The scripts supported by the font.
    * items `string`
  * variants `array`: The available variants for the font.
    * items `string`
  * version `string`: The font version.

### WebfontList
* WebfontList `object`
  * items `array`: The list of fonts currently served by the Google Fonts API.
    * items [Webfont](#webfont)
  * kind `string`: This kind represents a list of webfont objects in the webfonts service.


