# @datafire/google_customsearch

Client library for CustomSearch

## Installation and Usage
```bash
npm install --save @datafire/google_customsearch
```
```js
let google_customsearch = require('@datafire/google_customsearch').create();

google_customsearch.cse.list({
  "q": ""
}).then(data => {
  console.log(data);
});
```

## Description

Searches over a website or collection of websites

## Actions

### cse.list
Returns metadata about the search performed, metadata about the custom search engine used for the search, and the search results.


```js
google_customsearch.cse.list({
  "q": ""
}, context)
```

#### Input
* input `object`
  * c2coff `string`: Turns off the translation between zh-CN and zh-TW.
  * cr `string`: Country restrict(s).
  * cx `string`: The custom search engine ID to scope this search query
  * dateRestrict `string`: Specifies all search results are from a time period
  * exactTerms `string`: Identifies a phrase that all documents in the search results must contain
  * excludeTerms `string`: Identifies a word or phrase that should not appear in any documents in the search results
  * fileType `string`: Returns images of a specified type. Some of the allowed values are: bmp, gif, png, jpg, svg, pdf, ...
  * filter `string` (values: 0, 1): Controls turning on or off the duplicate content filter.
  * gl `string`: Geolocation of end user.
  * googlehost `string`: The local Google domain to use to perform the search.
  * highRange `string`: Creates a range in form as_nlo value..as_nhi value and attempts to append it to query
  * hl `string`: Sets the user interface language.
  * hq `string`: Appends the extra query terms to the query.
  * imgColorType `string` (values: color, gray, mono): Returns black and white, grayscale, or color images: mono, gray, and color.
  * imgDominantColor `string` (values: black, blue, brown, gray, green, pink, purple, teal, white, yellow): Returns images of a specific dominant color: yellow, green, teal, blue, purple, pink, white, gray, black and brown.
  * imgSize `string` (values: huge, icon, large, medium, small, xlarge, xxlarge): Returns images of a specified size, where size can be one of: icon, small, medium, large, xlarge, xxlarge, and huge.
  * imgType `string` (values: clipart, face, lineart, news, photo): Returns images of a type, which can be one of: clipart, face, lineart, news, and photo.
  * linkSite `string`: Specifies that all search results should contain a link to a particular URL
  * lowRange `string`: Creates a range in form as_nlo value..as_nhi value and attempts to append it to query
  * lr `string` (values: lang_ar, lang_bg, lang_ca, lang_cs, lang_da, lang_de, lang_el, lang_en, lang_es, lang_et, lang_fi, lang_fr, lang_hr, lang_hu, lang_id, lang_is, lang_it, lang_iw, lang_ja, lang_ko, lang_lt, lang_lv, lang_nl, lang_no, lang_pl, lang_pt, lang_ro, lang_ru, lang_sk, lang_sl, lang_sr, lang_sv, lang_tr, lang_zh-CN, lang_zh-TW): The language restriction for the search results
  * num `integer`: Number of search results to return
  * orTerms `string`: Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms
  * q **required** `string`: Query
  * relatedSite `string`: Specifies that all search results should be pages that are related to the specified URL
  * rights `string`: Filters based on licensing. Supported values include: cc_publicdomain, cc_attribute, cc_sharealike, cc_noncommercial, cc_nonderived and combinations of these.
  * safe `string` (values: high, medium, off): Search safety level
  * searchType `string` (values: image): Specifies the search type: image.
  * siteSearch `string`: Specifies all search results should be pages from a given site
  * siteSearchFilter `string` (values: e, i): Controls whether to include or exclude results from the site named in the as_sitesearch parameter
  * sort `string`: The sort expression to apply to the results
  * start `integer`: The index of the first result to return
  * alt `string` (values: atom, json): Data format for the response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
  * userIp `string`: IP address of the site where the request originates. Use this if you want to enforce per-user limits.

#### Output
* output [Search](#search)



## Definitions

### Context
* Context `object`
  * facets `array`
    * items `array`
      * items `object`
        * anchor `string`
        * label `string`
        * label_with_op `string`
  * title `string`

### Promotion
* Promotion `object`
  * bodyLines `array`
    * items `object`
      * htmlTitle `string`
      * link `string`
      * title `string`
      * url `string`
  * displayLink `string`
  * htmlTitle `string`
  * image `object`
    * height `integer`
    * source `string`
    * width `integer`
  * link `string`
  * title `string`

### Query
* Query `object`
  * count `integer`
  * cr `string`
  * cx `string`
  * dateRestrict `string`
  * disableCnTwTranslation `string`
  * exactTerms `string`
  * excludeTerms `string`
  * fileType `string`
  * filter `string`
  * gl `string`
  * googleHost `string`
  * highRange `string`
  * hl `string`
  * hq `string`
  * imgColorType `string`
  * imgDominantColor `string`
  * imgSize `string`
  * imgType `string`
  * inputEncoding `string`
  * language `string`
  * linkSite `string`
  * lowRange `string`
  * orTerms `string`
  * outputEncoding `string`
  * relatedSite `string`
  * rights `string`
  * safe `string`
  * searchTerms `string`
  * searchType `string`
  * siteSearch `string`
  * siteSearchFilter `string`
  * sort `string`
  * startIndex `integer`
  * startPage `integer`
  * title `string`
  * totalResults `string`

### Result
* Result `object`
  * cacheId `string`
  * displayLink `string`
  * fileFormat `string`
  * formattedUrl `string`
  * htmlFormattedUrl `string`
  * htmlSnippet `string`
  * htmlTitle `string`
  * image `object`
    * byteSize `integer`
    * contextLink `string`
    * height `integer`
    * thumbnailHeight `integer`
    * thumbnailLink `string`
    * thumbnailWidth `integer`
    * width `integer`
  * kind `string`
  * labels `array`
    * items `object`
      * displayName `string`
      * label_with_op `string`
      * name `string`
  * link `string`
  * mime `string`
  * pagemap `object`
  * snippet `string`
  * title `string`

### Search
* Search `object`
  * context [Context](#context)
  * items `array`
    * items [Result](#result)
  * kind `string`
  * promotions `array`
    * items [Promotion](#promotion)
  * queries `object`
  * searchInformation `object`
    * formattedSearchTime `string`
    * formattedTotalResults `string`
    * searchTime `number`
    * totalResults `string`
  * spelling `object`
    * correctedQuery `string`
    * htmlCorrectedQuery `string`
  * url `object`
    * template `string`
    * type `string`


