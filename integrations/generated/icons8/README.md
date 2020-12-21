# @datafire/icons8

Client library for Use a [New Version](https://icons8.github.io/icons8-docs/) Instead

## Installation and Usage
```bash
npm install --save @datafire/icons8
```
```js
let icons8 = require('@datafire/icons8').create();

.then(data => {
  console.log(data);
});
```

## Description

# Icons8 API

Icons8 API allows us to search and obtain [our icons](https://icons8.com/web-app).

You're welcome to use our icons to extend the functionality of your web and mobile applications, website templates, and even tattoos.

![Tattoos](https://cdn.rawgit.com/icons8/api-docs/cff6fdf0/tattoos.svg)

## Usage Examples

Some examples of what you can do with our icons:

* **Template customization.** This way, [Canva](https://www.canva.com/) uses our icons to customize their layouts.

* **Graphics and text editors.** [Gravit](https://gravit.io/) allows to insert our icons into the mockups.

* **Any application with customization.** [TimeTune](http://timetune.center/) uses our icons to customize the activities.

## Getting Started

To get started, please [contact us](https://icons8.com/contact) to obtain an API key.

## Pricing

Our API license starts at $100/month.

## Actions

### api.iconsets.v3.categories_platform_platform_language_language.get
The operation will not return the categories that have less than 10 icons.
We need it to test the categories without showing garbage on the production website.


```js
icons8.api.iconsets.v3.categories_platform_platform_language_language.get({
  "platform": "",
  "language": ""
}, context)
```

#### Input
* input `object`
  * platform **required** `string` (values: ios7, win8, win10, android, androidL, color, office): the platform that we are searching icons for
  * language **required** `string` (values: en-US, fr-FR, de-DE, it-IT, pt-BR, pl-PL, ru-RU, es-ES): the language code to get localized result

#### Output
* output `object`
  * parameters `object`: copy of the input parameters from the request
    * language `string`
    * platform `string`
  * result `object`: the result of operation
    * categories `array`

### api.iconsets.v3.category_category_category_subcategory_subcategory_amount_amount_offset_offset_platform_platform_language_language.get
By Category


```js
icons8.api.iconsets.v3.category_category_category_subcategory_subcategory_amount_amount_offset_offset_platform_platform_language_language.get({
  "category": "",
  "subcategory": "",
  "amount": 0,
  "offset": 0,
  "platform": "",
  "language": ""
}, context)
```

#### Input
* input `object`
  * category **required** `string`: the code of category
  * subcategory **required** `string`: the code of subcategory
  * amount **required** `number`: the maximum number of icons which you'd like to receive
  * offset **required** `number`: the offset from the first received result
  * platform **required** `string` (values: ios7, win8, win10, android, androidL, color, office): the style of the icons
  * language **required** `string` (values: en-US, fr-FR, de-DE, it-IT, pt-BR, pl-PL, ru-RU, es-ES): the language code to get localized result

#### Output
* output `object`
  * parameters `object`: copy of the input parameters from the request
    * amount `number`
    * category `string`
    * language `string`
    * offset `string`
    * platform `string`
    * subcategory `string`
  * result `object`: the result of operation
    * category `array`

### api.iconsets.v3.latest_term_term_amount_amount_offset_offset_platform_platform_language_language.get
Latest


```js
icons8.api.iconsets.v3.latest_term_term_amount_amount_offset_offset_platform_platform_language_language.get({
  "amount": 0,
  "offset": 0,
  "platform": "",
  "language": ""
}, context)
```

#### Input
* input `object`
  * amount **required** `number`: the maximum number of icons which you'd like to receive
  * offset **required** `number`: the offset from the first received result
  * platform **required** `string` (values: ios7, win8, win10, android, androidL, color, office): the style of the icons
  * language **required** `string` (values: en-US, fr-FR, de-DE, it-IT, pt-BR, pl-PL, ru-RU, es-ES): the language code to get localized result

#### Output
* output `object`
  * parameters `object`: copy of the input parameters from the request
    * amount `number`
    * language `string`
    * offset `string`
    * platform `string`
    * term `string`
  * result `object`: the result of operation
    * latest `array`

### api.iconsets.v3.search_term_term_amount_amount_offset_offset_platform_platform_language_language_exact_amount_exact_amount.get
By Keyword v3


```js
icons8.api.iconsets.v3.search_term_term_amount_amount_offset_offset_platform_platform_language_language_exact_amount_exact_amount.get({
  "term": "",
  "amount": 0,
  "exact_amount": true,
  "offset": 0,
  "platform": "",
  "language": ""
}, context)
```

#### Input
* input `object`
  * term **required** `string`: the name or tag of the icon or any other phrase.
  * amount **required** `number`: the maximum number of icons which you'd like to receive (will be multiplied by platforms count, if you didn't specify the platform and didn't set the 'exact_amount' parameter)
  * exact_amount **required** `boolean`: set it to 'true' if you'd like to receive the exact amount of icons, not multiplied by platforms count
  * offset **required** `number`: the offset from the first received result
  * platform **required** `string` (values: ios7, win8, win10, android, androidL, color, office): the style of the icons
  * language **required** `string` (values: en-US, fr-FR, de-DE, it-IT, pt-BR, pl-PL, ru-RU, es-ES): the language code to get localized result

#### Output
* output `object`
  * parameters `object`: copy of the input parameters from the request
    * amount `number`
    * language `string`
    * offset `string`
    * platform `string`
    * term `string`
  * result `object`: the result of operation
    * search `array`

### api.iconsets.v3.total_since_since.get
Totals


```js
icons8.api.iconsets.v3.total_since_since.get({
  "since": ""
}, context)
```

#### Input
* input `object`
  * since **required** `string`: the optional date to calculate the total number of icons that were created after it.

#### Output
* output `object`
  * parameters `object`: copy of the input parameters from the request
    * since `string`
  * result `object`: the result of operation
    * total `array`

### api.iconsets.v4.search_term_term_amount_amount_offset_offset_platform_platform_language_language_exact_amount_exact_amount.get
By Keyword v4


```js
icons8.api.iconsets.v4.search_term_term_amount_amount_offset_offset_platform_platform_language_language_exact_amount_exact_amount.get({
  "term": "",
  "amount": 0,
  "offset": 0,
  "platform": "",
  "language": ""
}, context)
```

#### Input
* input `object`
  * term **required** `string`: the name or tag of the icon or any other phrase.
  * amount **required** `number`: the maximum number of icons which you'd like to receive (will be multiplied by platforms count, if you didn't specify the platform and didn't set the 'exact_amount' parameter)
  * offset **required** `number`: the offset from the first received result
  * platform **required** `string` (values: all, ios7, ios11, win8, win10, android, androidL, color, office, ultraviolet, nolan, p1em, dotty, dusk, Dusk_Wired, cotton, doodle, flat_round): the style of the icons
  * language **required** `string` (values: en-US, fr-FR, de-DE, it-IT, pt-BR, pl-PL, ru-RU, es-ES, zh-CN, ja-JP): the language code to get localized result

#### Output
* output `object`
  * parameters `object`: copy of the input parameters from the request
    * amount `50` `string`
    * language `string`
    * offset `string`
    * platform `string`
    * term `string`
  * icons `array`: the result of operation

### api.task.web_font.collection.post
From a Collection


```js
icons8.api.task.web_font.collection.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * auth `object`
      * hash **required** `string`: Authorization hash
    * task `object`
      * arguments `object`
        * collection **required** `string`: collection identifier
        * css_prefix `string`: prefix for CSS rules, used to generate LESS/SCSS
        * css_rules_case `string` (values: lowercase, as_is): glyph names conversion rule
        * css_selector `string`: template for glyph selector; placeholder {{glyph}} will be replaced with glyph names
        * font_name **required** `string`: name of iconic webfont

#### Output
* output `object`
  * messages `array`
  * result `object`
    * description `string`: human readable description
    * id **required** `string`: task identifier
    * results `object`
      * zip `string`
    * status **required** `string`: task status
    * type **required** `string`: task type

### api.task.web_font.icons.post
From Separate Icons


```js
icons8.api.task.web_font.icons.post({}, context)
```

#### Input
* input `object`
  * body `object`
    * auth `object`
      * hash **required** `string`: Authorization hash
    * task `object`
      * arguments `object`
        * collection **required** `string`: collection identifier
        * css_prefix `string`: prefix for CSS rules, used to generate LESS/SCSS
        * css_rules_case `string` (values: lowercase, as_is): glyph names conversion rule
        * css_selector `string`: template for glyph selector; placeholder {{glyph}} will be replaced with glyph names
        * font_name **required** `string`: name of iconic webfont

#### Output
* output `object`
  * messages `array`
  * result `object`
    * description `string`: human readable description
    * id **required** `string`: task identifier
    * results `object`
      * zip `string`
    * status **required** `string`: task status
    * type **required** `string`: task type



## Definitions

### AuthArgument
* AuthArgument `object`
  * hash **required** `string`: Authorization hash

### CategoryV3Item
* CategoryV3Item `object`
  * category_code `string`
  * category_name `string`
  * subcategory `array`

### CollectionWebFontTaskArguments
* CollectionWebFontTaskArguments `object`
  * arguments `object`
    * collection **required** `string`: collection identifier
    * css_prefix `string`: prefix for CSS rules, used to generate LESS/SCSS
    * css_rules_case `string` (values: lowercase, as_is): glyph names conversion rule
    * css_selector `string`: template for glyph selector; placeholder {{glyph}} will be replaced with glyph names
    * font_name **required** `string`: name of iconic webfont

### CompactCategoryV3Item
* CompactCategoryV3Item `object`
  * api_code **required** `string`
  * name **required** `string`

### CompactIconV3Item
* CompactIconV3Item `object`
  * category `string`
  * common_icon_id **required** `number`: identifier for group of the same icons in different styles; i.e. id of all "home" icons
  * created **required** `string`: date (ISO8601 format) of icon was published
  * features **required** `object`: internal service attribute; internal information about icon features; private; depend on the rights of the current user
    * bitmap **required** `number`: "Could user use images in bitmap / raster formats in any size ?"
    * nolink **required** `number`: "Could user use images without any link to Icons8 ?"
    * vector **required** `number`: "Could user use images in vector formats ?"
  * id **required** `number`: unique icon identifier
  * name **required** `string`: icon name
  * platform_code **required** `string`: icon style
  * share `object`: internal service attribute; some links to spread the world
    * png `array`: some raster images for share the icon
    * url `string`: short URL to use in twitter
  * subcategory `object`
    * api_code **required** `string`
    * name **required** `string`
  * svg **required** `string`: plain SVG content of icon
  * url `string`: internal service attribute; the meaning of this attribute is "Identifier of thread at Disquss"
  * vector `object`: URLs to icon sources in different vector formats; private; depend on the current user and could be opened in user's browser only
    * eps `string`: absolute URL to file in EPS format
    * pdf `string`: absolute URL to file in PDF format
    * svg-editable `string`: absolute URL to original SVG file
    * svg-simplified `string`: absolute URL to compressed and simplified SVG file

### IconV3Item
* IconV3Item
  * category `string`
  * common_icon_id **required** `number`: identifier for group of the same icons in different styles; i.e. id of all "home" icons
  * created **required** `string`: date (ISO8601 format) of icon was published
  * features **required** `object`: internal service attribute; internal information about icon features; private; depend on the rights of the current user
    * bitmap **required** `number`: "Could user use images in bitmap / raster formats in any size ?"
    * nolink **required** `number`: "Could user use images without any link to Icons8 ?"
    * vector **required** `number`: "Could user use images in vector formats ?"
  * id **required** `number`: unique icon identifier
  * name **required** `string`: icon name
  * platform_code **required** `string`: icon style
  * share `object`: internal service attribute; some links to spread the world
    * png `array`: some raster images for share the icon
    * url `string`: short URL to use in twitter
  * subcategory `object`
    * api_code **required** `string`
    * name **required** `string`
  * svg **required** `string`: plain SVG content of icon
  * url `string`: internal service attribute; the meaning of this attribute is "Identifier of thread at Disquss"
  * vector `object`: URLs to icon sources in different vector formats; private; depend on the current user and could be opened in user's browser only
    * eps `string`: absolute URL to file in EPS format
    * pdf `string`: absolute URL to file in PDF format
    * svg-editable `string`: absolute URL to original SVG file
    * svg-simplified `string`: absolute URL to compressed and simplified SVG file
  * category `string`
  * common_icon_id **required** `number`: identifier for group of the same icons in different styles; i.e. id of all "home" icons
  * created **required** `string`: date (ISO8601 format) of icon was published
  * features **required** `object`: internal service attribute; internal information about icon features; private; depend on the rights of the current user
    * bitmap **required** `number`: "Could user use images in bitmap / raster formats in any size ?"
    * nolink **required** `number`: "Could user use images without any link to Icons8 ?"
    * vector **required** `number`: "Could user use images in vector formats ?"
  * id **required** `number`: unique icon identifier
  * name **required** `string`: icon name
  * platform_code **required** `string`: icon style
  * share `object`: internal service attribute; some links to spread the world
    * png `array`: some raster images for share the icon
    * url `string`: short URL to use in twitter
  * subcategory `object`
    * api_code **required** `string`
    * name **required** `string`
  * svg **required** `string`: plain SVG content of icon
  * url `string`: internal service attribute; the meaning of this attribute is "Identifier of thread at Disquss"
  * vector `object`: URLs to icon sources in different vector formats; private; depend on the current user and could be opened in user's browser only
    * eps `string`: absolute URL to file in EPS format
    * pdf `string`: absolute URL to file in PDF format
    * svg-editable `string`: absolute URL to original SVG file
    * svg-simplified `string`: absolute URL to compressed and simplified SVG file

### Meta


### Search


### TaskError
* TaskError `object`
  * code **required** `string` (values: json_not_valid, auth_required, auth_failed, access_denied, io_fail, database_fail, argument_is_missed, argument_is_wrong, paid_feature, not_possible): error code
  * description **required** `string`: human readable error message

### TaskResult
* TaskResult `object`
  * description `string`: human readable description
  * id **required** `string`: task identifier
  * results `object`
    * zip `string`: URL to webfont files in ZIP format
  * status **required** `string` (values: `preparing+, idle, in_progress, timeout, complete, failed): task status
  * type **required** `string` (values: create_web_font, create_svg_set): task type

### TotalV3Item
* TotalV3Item `object`
  * api_code **required** `string` (values: ios7, win8, win10, android, androidL, color, office): icons style code; in other places it named `plarform` or `platform_api_code`
  * name **required** `string`
  * total **required** `number`

### Web_Fonts



