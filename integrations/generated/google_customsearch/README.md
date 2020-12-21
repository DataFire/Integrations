# @datafire/google_customsearch

Client library for Custom Search API

## Installation and Usage
```bash
npm install --save @datafire/google_customsearch
```
```js
let google_customsearch = require('@datafire/google_customsearch').create();

.then(data => {
  console.log(data);
});
```

## Description

Searches over a website or collection of websites

## Actions

### search.cse.list
Returns metadata about the search performed, metadata about the engine used for the search, and the search results.


```js
google_customsearch.search.cse.list({}, context)
```

#### Input
* input `object`
  * c2coff `string`: Enables or disables [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/xml_results#chineseSearch). The default value for this parameter is 0 (zero), meaning that the feature is enabled. Supported values are: * `1`: Disabled * `0`: Enabled (default)
  * cr `string`: Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/xml_results_appendices#booleanOperators) in the cr parameter's value. Google Search determines the country of a document by analyzing: * the top-level domain (TLD) of the document's URL * the geographic location of the Web server's IP address See the [Country Parameter Values](https://developers.google.com/custom-search/docs/xml_results_appendices#countryCollections) page for a list of valid values for this parameter.
  * cx `string`: The Programmable Search Engine ID to use for this request.
  * dateRestrict `string`: Restricts results to URLs based on date. Supported values include: * `d[number]`: requests results from the specified number of past days. * `w[number]`: requests results from the specified number of past weeks. * `m[number]`: requests results from the specified number of past months. * `y[number]`: requests results from the specified number of past years.
  * exactTerms `string`: Identifies a phrase that all documents in the search results must contain.
  * excludeTerms `string`: Identifies a word or phrase that should not appear in any documents in the search results.
  * fileType `string`: Restricts results to files of a specified extension. A list of file types indexable by Google can be found in Search Console [Help Center](https://support.google.com/webmasters/answer/35287).
  * filter `string`: Controls turning on or off the duplicate content filter. * See [Automatic Filtering](https://developers.google.com/custom-search/docs/xml_results#automaticFiltering) for more information about Google's search results filters. Note that host crowding filtering applies only to multi-site searches. * By default, Google applies filtering to all search results to improve the quality of those results. Acceptable values are: * `0`: Turns off duplicate content filter. * `1`: Turns on duplicate content filter.
  * gl `string`: Geolocation of end user. * The `gl` parameter value is a two-letter country code. The `gl` parameter boosts search results whose country of origin matches the parameter value. See the [Country Codes](https://developers.google.com/custom-search/docs/xml_results_appendices#countryCodes) page for a list of valid values. * Specifying a `gl` parameter value should lead to more relevant results. This is particularly true for international customers and, even more specifically, for customers in English- speaking countries other than the United States.
  * googlehost `string`: **Deprecated**. Use the `gl` parameter for a similar effect. The local Google domain (for example, google.com, google.de, or google.fr) to use to perform the search.
  * highRange `string`: Specifies the ending value for a search range. * Use `lowRange` and `highRange` to append an inclusive search range of `lowRange...highRange` to the query.
  * hl `string`: Sets the user interface language. * Explicitly setting this parameter improves the performance and the quality of your search results. * See the [Interface Languages](https://developers.google.com/custom-search/docs/xml_results#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/xml_results#wsInternationalizing) for more information, and (Supported Interface Languages)[https://developers.google.com/custom-search/docs/xml_results_appendices#interfaceLanguages] for a list of supported languages.
  * hq `string`: Appends the specified query terms to the query, as if they were combined with a logical AND operator.
  * imgColorType `string` (values: imgColorTypeUndefined, mono, gray, color, trans): Returns black and white, grayscale, transparent, or color images. Acceptable values are: * `"color"` * `"gray"` * `"mono"`: black and white * `"trans"`: transparent background
  * imgDominantColor `string` (values: imgDominantColorUndefined, black, blue, brown, gray, green, orange, pink, purple, red, teal, white, yellow): Returns images of a specific dominant color. Acceptable values are: * `"black"` * `"blue"` * `"brown"` * `"gray"` * `"green"` * `"orange"` * `"pink"` * `"purple"` * `"red"` * `"teal"` * `"white"` * `"yellow"`
  * imgSize `string` (values: imgSizeUndefined, HUGE, ICON, LARGE, MEDIUM, SMALL, XLARGE, XXLARGE): Returns images of a specified size. Acceptable values are: * `"huge"` * `"icon"` * `"large"` * `"medium"` * `"small"` * `"xlarge"` * `"xxlarge"`
  * imgType `string` (values: imgTypeUndefined, clipart, face, lineart, stock, photo, animated): Returns images of a type. Acceptable values are: * `"clipart"` * `"face"` * `"lineart"` * `"stock"` * `"photo"` * `"animated"`
  * linkSite `string`: Specifies that all search results should contain a link to a particular URL.
  * lowRange `string`: Specifies the starting value for a search range. Use `lowRange` and `highRange` to append an inclusive search range of `lowRange...highRange` to the query.
  * lr `string`: Restricts the search to documents written in a particular language (e.g., `lr=lang_ja`). Acceptable values are: * `"lang_ar"`: Arabic * `"lang_bg"`: Bulgarian * `"lang_ca"`: Catalan * `"lang_cs"`: Czech * `"lang_da"`: Danish * `"lang_de"`: German * `"lang_el"`: Greek * `"lang_en"`: English * `"lang_es"`: Spanish * `"lang_et"`: Estonian * `"lang_fi"`: Finnish * `"lang_fr"`: French * `"lang_hr"`: Croatian * `"lang_hu"`: Hungarian * `"lang_id"`: Indonesian * `"lang_is"`: Icelandic * `"lang_it"`: Italian * `"lang_iw"`: Hebrew * `"lang_ja"`: Japanese * `"lang_ko"`: Korean * `"lang_lt"`: Lithuanian * `"lang_lv"`: Latvian * `"lang_nl"`: Dutch * `"lang_no"`: Norwegian * `"lang_pl"`: Polish * `"lang_pt"`: Portuguese * `"lang_ro"`: Romanian * `"lang_ru"`: Russian * `"lang_sk"`: Slovak * `"lang_sl"`: Slovenian * `"lang_sr"`: Serbian * `"lang_sv"`: Swedish * `"lang_tr"`: Turkish * `"lang_zh-CN"`: Chinese (Simplified) * `"lang_zh-TW"`: Chinese (Traditional)
  * num `integer`: Number of search results to return. * Valid values are integers between 1 and 10, inclusive.
  * orTerms `string`: Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms.
  * q `string`: Query
  * relatedSite `string`: Specifies that all search results should be pages that are related to the specified URL.
  * rights `string`: Filters based on licensing. Supported values include: `cc_publicdomain`, `cc_attribute`, `cc_sharealike`, `cc_noncommercial`, `cc_nonderived` and combinations of these. See [typical combinations](https://wiki.creativecommons.org/wiki/CC_Search_integration).
  * safe `string` (values: safeUndefined, active, high, medium, off): Search safety level. Acceptable values are: * `"active"`: Enables SafeSearch filtering. * `"off"`: Disables SafeSearch filtering. (default)
  * searchType `string` (values: searchTypeUndefined, image): Specifies the search type: `image`. If unspecified, results are limited to webpages. Acceptable values are: * `"image"`: custom image search.
  * siteSearch `string`: Specifies a given site which should always be included or excluded from results (see `siteSearchFilter` parameter, below).
  * siteSearchFilter `string` (values: siteSearchFilterUndefined, e, i): Controls whether to include or exclude results from the site named in the `siteSearch` parameter. Acceptable values are: * `"e"`: exclude * `"i"`: include
  * sort `string`: The sort expression to apply to the results. The sort parameter specifies that the results be sorted according to the specified expression i.e. sort by date. [Example: sort=date](https://developers.google.com/custom-search/docs/structured_search#sort-by-attribute).
  * start `integer`: The index of the first result to return. The default number of results per page is 10, so `&start=11` would start at the top of the second page of results. **Note**: The JSON API will never return more than 100 results, even if more than 100 documents match the query, so setting the sum of `start + num` to a number greater than 100 will produce an error. Also note that the maximum value for `num` is 10.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Search](#search)

### search.cse.siterestrict.list
Returns metadata about the search performed, metadata about the engine used for the search, and the search results. Uses a small set of url patterns.


```js
google_customsearch.search.cse.siterestrict.list({}, context)
```

#### Input
* input `object`
  * c2coff `string`: Enables or disables [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/xml_results#chineseSearch). The default value for this parameter is 0 (zero), meaning that the feature is enabled. Supported values are: * `1`: Disabled * `0`: Enabled (default)
  * cr `string`: Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/xml_results_appendices#booleanOperators) in the cr parameter's value. Google Search determines the country of a document by analyzing: * the top-level domain (TLD) of the document's URL * the geographic location of the Web server's IP address See the [Country Parameter Values](https://developers.google.com/custom-search/docs/xml_results_appendices#countryCollections) page for a list of valid values for this parameter.
  * cx `string`: The Programmable Search Engine ID to use for this request.
  * dateRestrict `string`: Restricts results to URLs based on date. Supported values include: * `d[number]`: requests results from the specified number of past days. * `w[number]`: requests results from the specified number of past weeks. * `m[number]`: requests results from the specified number of past months. * `y[number]`: requests results from the specified number of past years.
  * exactTerms `string`: Identifies a phrase that all documents in the search results must contain.
  * excludeTerms `string`: Identifies a word or phrase that should not appear in any documents in the search results.
  * fileType `string`: Restricts results to files of a specified extension. A list of file types indexable by Google can be found in Search Console [Help Center](https://support.google.com/webmasters/answer/35287).
  * filter `string`: Controls turning on or off the duplicate content filter. * See [Automatic Filtering](https://developers.google.com/custom-search/docs/xml_results#automaticFiltering) for more information about Google's search results filters. Note that host crowding filtering applies only to multi-site searches. * By default, Google applies filtering to all search results to improve the quality of those results. Acceptable values are: * `0`: Turns off duplicate content filter. * `1`: Turns on duplicate content filter.
  * gl `string`: Geolocation of end user. * The `gl` parameter value is a two-letter country code. The `gl` parameter boosts search results whose country of origin matches the parameter value. See the [Country Codes](https://developers.google.com/custom-search/docs/xml_results_appendices#countryCodes) page for a list of valid values. * Specifying a `gl` parameter value should lead to more relevant results. This is particularly true for international customers and, even more specifically, for customers in English- speaking countries other than the United States.
  * googlehost `string`: **Deprecated**. Use the `gl` parameter for a similar effect. The local Google domain (for example, google.com, google.de, or google.fr) to use to perform the search.
  * highRange `string`: Specifies the ending value for a search range. * Use `lowRange` and `highRange` to append an inclusive search range of `lowRange...highRange` to the query.
  * hl `string`: Sets the user interface language. * Explicitly setting this parameter improves the performance and the quality of your search results. * See the [Interface Languages](https://developers.google.com/custom-search/docs/xml_results#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/xml_results#wsInternationalizing) for more information, and (Supported Interface Languages)[https://developers.google.com/custom-search/docs/xml_results_appendices#interfaceLanguages] for a list of supported languages.
  * hq `string`: Appends the specified query terms to the query, as if they were combined with a logical AND operator.
  * imgColorType `string` (values: imgColorTypeUndefined, mono, gray, color, trans): Returns black and white, grayscale, transparent, or color images. Acceptable values are: * `"color"` * `"gray"` * `"mono"`: black and white * `"trans"`: transparent background
  * imgDominantColor `string` (values: imgDominantColorUndefined, black, blue, brown, gray, green, orange, pink, purple, red, teal, white, yellow): Returns images of a specific dominant color. Acceptable values are: * `"black"` * `"blue"` * `"brown"` * `"gray"` * `"green"` * `"orange"` * `"pink"` * `"purple"` * `"red"` * `"teal"` * `"white"` * `"yellow"`
  * imgSize `string` (values: imgSizeUndefined, HUGE, ICON, LARGE, MEDIUM, SMALL, XLARGE, XXLARGE): Returns images of a specified size. Acceptable values are: * `"huge"` * `"icon"` * `"large"` * `"medium"` * `"small"` * `"xlarge"` * `"xxlarge"`
  * imgType `string` (values: imgTypeUndefined, clipart, face, lineart, stock, photo, animated): Returns images of a type. Acceptable values are: * `"clipart"` * `"face"` * `"lineart"` * `"stock"` * `"photo"` * `"animated"`
  * linkSite `string`: Specifies that all search results should contain a link to a particular URL.
  * lowRange `string`: Specifies the starting value for a search range. Use `lowRange` and `highRange` to append an inclusive search range of `lowRange...highRange` to the query.
  * lr `string`: Restricts the search to documents written in a particular language (e.g., `lr=lang_ja`). Acceptable values are: * `"lang_ar"`: Arabic * `"lang_bg"`: Bulgarian * `"lang_ca"`: Catalan * `"lang_cs"`: Czech * `"lang_da"`: Danish * `"lang_de"`: German * `"lang_el"`: Greek * `"lang_en"`: English * `"lang_es"`: Spanish * `"lang_et"`: Estonian * `"lang_fi"`: Finnish * `"lang_fr"`: French * `"lang_hr"`: Croatian * `"lang_hu"`: Hungarian * `"lang_id"`: Indonesian * `"lang_is"`: Icelandic * `"lang_it"`: Italian * `"lang_iw"`: Hebrew * `"lang_ja"`: Japanese * `"lang_ko"`: Korean * `"lang_lt"`: Lithuanian * `"lang_lv"`: Latvian * `"lang_nl"`: Dutch * `"lang_no"`: Norwegian * `"lang_pl"`: Polish * `"lang_pt"`: Portuguese * `"lang_ro"`: Romanian * `"lang_ru"`: Russian * `"lang_sk"`: Slovak * `"lang_sl"`: Slovenian * `"lang_sr"`: Serbian * `"lang_sv"`: Swedish * `"lang_tr"`: Turkish * `"lang_zh-CN"`: Chinese (Simplified) * `"lang_zh-TW"`: Chinese (Traditional)
  * num `integer`: Number of search results to return. * Valid values are integers between 1 and 10, inclusive.
  * orTerms `string`: Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms.
  * q `string`: Query
  * relatedSite `string`: Specifies that all search results should be pages that are related to the specified URL.
  * rights `string`: Filters based on licensing. Supported values include: `cc_publicdomain`, `cc_attribute`, `cc_sharealike`, `cc_noncommercial`, `cc_nonderived` and combinations of these. See [typical combinations](https://wiki.creativecommons.org/wiki/CC_Search_integration).
  * safe `string` (values: safeUndefined, active, high, medium, off): Search safety level. Acceptable values are: * `"active"`: Enables SafeSearch filtering. * `"off"`: Disables SafeSearch filtering. (default)
  * searchType `string` (values: searchTypeUndefined, image): Specifies the search type: `image`. If unspecified, results are limited to webpages. Acceptable values are: * `"image"`: custom image search.
  * siteSearch `string`: Specifies a given site which should always be included or excluded from results (see `siteSearchFilter` parameter, below).
  * siteSearchFilter `string` (values: siteSearchFilterUndefined, e, i): Controls whether to include or exclude results from the site named in the `siteSearch` parameter. Acceptable values are: * `"e"`: exclude * `"i"`: include
  * sort `string`: The sort expression to apply to the results. The sort parameter specifies that the results be sorted according to the specified expression i.e. sort by date. [Example: sort=date](https://developers.google.com/custom-search/docs/structured_search#sort-by-attribute).
  * start `integer`: The index of the first result to return. The default number of results per page is 10, so `&start=11` would start at the top of the second page of results. **Note**: The JSON API will never return more than 100 results, even if more than 100 documents match the query, so setting the sum of `start + num` to a number greater than 100 will produce an error. Also note that the maximum value for `num` is 10.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Search](#search)



## Definitions

### Promotion
* Promotion `object`: Promotion result.
  * bodyLines `array`: An array of block objects for this promotion. See [Google WebSearch Protocol reference](https://developers.google.com/custom-search/docs/xml_results) for more information.
    * items `object`: Block object belonging to a promotion.
      * htmlTitle `string`: The block object's text in HTML, if it has text.
      * link `string`: The anchor text of the block object's link, if it has a link.
      * title `string`: The block object's text, if it has text.
      * url `string`: The URL of the block object's link, if it has one.
  * displayLink `string`: An abridged version of this search's result URL, e.g. www.example.com.
  * htmlTitle `string`: The title of the promotion, in HTML.
  * image `object`: Image belonging to a promotion.
    * height `integer`: Image height in pixels.
    * source `string`: URL of the image for this promotion link.
    * width `integer`: Image width in pixels.
  * link `string`: The URL of the promotion.
  * title `string`: The title of the promotion.

### Result
* Result `object`: A custom search result.
  * cacheId `string`: Indicates the ID of Google's cached version of the search result.
  * displayLink `string`: An abridged version of this search result’s URL, e.g. www.example.com.
  * fileFormat `string`: The file format of the search result.
  * formattedUrl `string`: The URL displayed after the snippet for each search result.
  * htmlFormattedUrl `string`: The HTML-formatted URL displayed after the snippet for each search result.
  * htmlSnippet `string`: The snippet of the search result, in HTML.
  * htmlTitle `string`: The title of the search result, in HTML.
  * image `object`: Image belonging to a custom search result.
    * byteSize `integer`: The size of the image, in pixels.
    * contextLink `string`: A URL pointing to the webpage hosting the image.
    * height `integer`: The height of the image, in pixels.
    * thumbnailHeight `integer`: The height of the thumbnail image, in pixels.
    * thumbnailLink `string`: A URL to the thumbnail image.
    * thumbnailWidth `integer`: The width of the thumbnail image, in pixels.
    * width `integer`: The width of the image, in pixels.
  * kind `string`: A unique identifier for the type of current object. For this API, it is `customsearch#result.`
  * labels `array`: Encapsulates all information about [refinement labels](https://developers.google.com/custom-search/docs/xml_results).
    * items `object`: Refinement label associated with a custom search result.
      * displayName `string`: The display name of a refinement label. This is the name you should display in your user interface.
      * label_with_op `string`: Refinement label and the associated refinement operation.
      * name `string`: The name of a refinement label, which you can use to refine searches. Don't display this in your user interface; instead, use displayName.
  * link `string`: The full URL to which the search result is pointing, e.g. http://www.example.com/foo/bar.
  * mime `string`: The MIME type of the search result.
  * pagemap `object`: Contains [PageMap](https://developers.google.com/custom-search/docs/structured_data#pagemaps) information for this search result.
  * snippet `string`: The snippet of the search result, in plain text.
  * title `string`: The title of the search result, in plain text.

### Search
* Search `object`: Response to a custom search request.
  * context `object`: Metadata and refinements associated with the given search engine, including: * The name of the search engine that was used for the query. * A set of [facet objects](https://developers.google.com/custom-search/docs/refinements#create) (refinements) you can use for refining a search.
  * items `array`: The current set of custom search results.
    * items [Result](#result)
  * kind `string`: Unique identifier for the type of current object. For this API, it is customsearch#search.
  * promotions `array`: The set of [promotions](https://developers.google.com/custom-search/docs/promotions). Present only if the custom search engine's configuration files define any promotions for the given query.
    * items [Promotion](#promotion)
  * queries `object`: Query metadata for the previous, current, and next pages of results.
    * nextPage `array`: Metadata representing the next page of results, if applicable.
      * items `object`: Custom search request metadata.
        * count `integer`: Number of search results returned in this set.
        * cr `string`: Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/xml_results#booleanOperators) in the `cr` parameter's value. Google WebSearch determines the country of a document by analyzing the following: * The top-level domain (TLD) of the document's URL. * The geographic location of the web server's IP address. See [Country (cr) Parameter Values](https://developers.google.com/custom-search/docs/xml_results#countryCollections) for a list of valid values for this parameter.
        * cx `string`: The identifier of an engine created using the Programmable Search Engine [Control Panel](https://programmablesearchengine.google.com/). This is a custom property not defined in the OpenSearch spec. This parameter is **required**.
        * dateRestrict `string`: Restricts results to URLs based on date. Supported values include: * `d[number]`: requests results from the specified number of past days. * `w[number]`: requests results from the specified number of past weeks. * `m[number]`: requests results from the specified number of past months. * `y[number]`: requests results from the specified number of past years.
        * disableCnTwTranslation `string`: Enables or disables the [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/xml_results#chineseSearch) feature. Supported values are: * `0`: enabled (default) * `1`: disabled
        * exactTerms `string`: Identifies a phrase that all documents in the search results must contain.
        * excludeTerms `string`: Identifies a word or phrase that should not appear in any documents in the search results.
        * fileType `string`: Restricts results to files of a specified extension. Filetypes supported by Google include: * Adobe Portable Document Format (`pdf`) * Adobe PostScript (`ps`) * Lotus 1-2-3 (`wk1`, `wk2`, `wk3`, `wk4`, `wk5`, `wki`, `wks`, `wku`) * Lotus WordPro (`lwp`) * Macwrite (`mw`) * Microsoft Excel (`xls`) * Microsoft PowerPoint (`ppt`) * Microsoft Word (`doc`) * Microsoft Works (`wks`, `wps`, `wdb`) * Microsoft Write (`wri`) * Rich Text Format (`rtf`) * Shockwave Flash (`swf`) * Text (`ans`, `txt`). Additional filetypes may be added in the future. An up-to-date list can always be found in Google's [file type FAQ](https://support.google.com/webmasters/answer/35287).
        * filter `string`: Activates or deactivates the automatic filtering of Google search results. See [Automatic Filtering](https://developers.google.com/custom-search/docs/xml_results#automaticFiltering) for more information about Google's search results filters. Valid values for this parameter are: * `0`: Disabled * `1`: Enabled (default) **Note**: By default, Google applies filtering to all search results to improve the quality of those results.
        * gl `string`: Boosts search results whose country of origin matches the parameter value. See [Country Codes](https://developers.google.com/custom-search/docs/xml_results#countryCodes) for a list of valid values. Specifying a `gl` parameter value in WebSearch requests should improve the relevance of results. This is particularly true for international customers and, even more specifically, for customers in English-speaking countries other than the United States.
        * googleHost `string`: Specifies the Google domain (for example, google.com, google.de, or google.fr) to which the search should be limited.
        * highRange `string`: Specifies the ending value for a search range. Use `cse:lowRange` and `cse:highrange` to append an inclusive search range of `lowRange...highRange` to the query.
        * hl `string`: Specifies the interface language (host language) of your user interface. Explicitly setting this parameter improves the performance and the quality of your search results. See the [Interface Languages](https://developers.google.com/custom-search/docs/xml_results#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/xml_results#wsInternationalizing) for more information, and [Supported Interface Languages](https://developers.google.com/custom-search/docs/xml_results_appendices#interfaceLanguages) for a list of supported languages.
        * hq `string`: Appends the specified query terms to the query, as if they were combined with a logical `AND` operator.
        * imgColorType `string`: Restricts results to images of a specified color type. Supported values are: * `mono` (black and white) * `gray` (grayscale) * `color` (color)
        * imgDominantColor `string`: Restricts results to images with a specific dominant color. Supported values are: * `red` * `orange` * `yellow` * `green` * `teal` * `blue` * `purple` * `pink` * `white` * `gray` * `black` * `brown`
        * imgSize `string`: Restricts results to images of a specified size. Supported values are: * `icon` (small) * `small | medium | large | xlarge` (medium) * `xxlarge` (large) * `huge` (extra-large)
        * imgType `string`: Restricts results to images of a specified type. Supported values are: * `clipart` (Clip art) * `face` (Face) * `lineart` (Line drawing) * `photo` (Photo) * `animated` (Animated) * `stock` (Stock)
        * inputEncoding `string`: The character encoding supported for search requests.
        * language `string`: The language of the search results.
        * linkSite `string`: Specifies that all results should contain a link to a specific URL.
        * lowRange `string`: Specifies the starting value for a search range. Use `cse:lowRange` and `cse:highrange` to append an inclusive search range of `lowRange...highRange` to the query.
        * orTerms `string`: Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms. You can also use the [Boolean OR](https://developers.google.com/custom-search/docs/xml_results#BooleanOrqt) query term for this type of query.
        * outputEncoding `string`: The character encoding supported for search results.
        * relatedSite `string`: Specifies that all search results should be pages that are related to the specified URL. The parameter value should be a URL.
        * rights `string`: Filters based on licensing. Supported values include: * `cc_publicdomain` * `cc_attribute` * `cc_sharealike` * `cc_noncommercial` * `cc_nonderived`
        * safe `string`: Specifies the [SafeSearch level](https://developers.google.com/custom-search/docs/xml_results#safeSearchLevels) used for filtering out adult results. This is a custom property not defined in the OpenSearch spec. Valid parameter values are: * `"off"`: Disable SafeSearch * `"active"`: Enable SafeSearch
        * searchTerms `string`: The search terms entered by the user.
        * searchType `string`: Allowed values are `web` or `image`. If unspecified, results are limited to webpages.
        * siteSearch `string`: Restricts results to URLs from a specified site.
        * siteSearchFilter `string`: Specifies whether to include or exclude results from the site named in the `sitesearch` parameter. Supported values are: * `i`: include content from site * `e`: exclude content from site
        * sort `string`: Specifies that results should be sorted according to the specified expression. For example, sort by date.
        * startIndex `integer`: The index of the current set of search results into the total set of results, where the index of the first result is 1.
        * startPage `integer`: The page number of this set of results, where the page length is set by the `count` property.
        * title `string`: A description of the query.
        * totalResults `string`: Estimated number of total search results. May not be accurate.
    * previousPage `array`: Metadata representing the previous page of results, if applicable.
      * items `object`: Custom search request metadata.
        * count `integer`: Number of search results returned in this set.
        * cr `string`: Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/xml_results#booleanOperators) in the `cr` parameter's value. Google WebSearch determines the country of a document by analyzing the following: * The top-level domain (TLD) of the document's URL. * The geographic location of the web server's IP address. See [Country (cr) Parameter Values](https://developers.google.com/custom-search/docs/xml_results#countryCollections) for a list of valid values for this parameter.
        * cx `string`: The identifier of an engine created using the Programmable Search Engine [Control Panel](https://programmablesearchengine.google.com/). This is a custom property not defined in the OpenSearch spec. This parameter is **required**.
        * dateRestrict `string`: Restricts results to URLs based on date. Supported values include: * `d[number]`: requests results from the specified number of past days. * `w[number]`: requests results from the specified number of past weeks. * `m[number]`: requests results from the specified number of past months. * `y[number]`: requests results from the specified number of past years.
        * disableCnTwTranslation `string`: Enables or disables the [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/xml_results#chineseSearch) feature. Supported values are: * `0`: enabled (default) * `1`: disabled
        * exactTerms `string`: Identifies a phrase that all documents in the search results must contain.
        * excludeTerms `string`: Identifies a word or phrase that should not appear in any documents in the search results.
        * fileType `string`: Restricts results to files of a specified extension. Filetypes supported by Google include: * Adobe Portable Document Format (`pdf`) * Adobe PostScript (`ps`) * Lotus 1-2-3 (`wk1`, `wk2`, `wk3`, `wk4`, `wk5`, `wki`, `wks`, `wku`) * Lotus WordPro (`lwp`) * Macwrite (`mw`) * Microsoft Excel (`xls`) * Microsoft PowerPoint (`ppt`) * Microsoft Word (`doc`) * Microsoft Works (`wks`, `wps`, `wdb`) * Microsoft Write (`wri`) * Rich Text Format (`rtf`) * Shockwave Flash (`swf`) * Text (`ans`, `txt`). Additional filetypes may be added in the future. An up-to-date list can always be found in Google's [file type FAQ](https://support.google.com/webmasters/answer/35287).
        * filter `string`: Activates or deactivates the automatic filtering of Google search results. See [Automatic Filtering](https://developers.google.com/custom-search/docs/xml_results#automaticFiltering) for more information about Google's search results filters. Valid values for this parameter are: * `0`: Disabled * `1`: Enabled (default) **Note**: By default, Google applies filtering to all search results to improve the quality of those results.
        * gl `string`: Boosts search results whose country of origin matches the parameter value. See [Country Codes](https://developers.google.com/custom-search/docs/xml_results#countryCodes) for a list of valid values. Specifying a `gl` parameter value in WebSearch requests should improve the relevance of results. This is particularly true for international customers and, even more specifically, for customers in English-speaking countries other than the United States.
        * googleHost `string`: Specifies the Google domain (for example, google.com, google.de, or google.fr) to which the search should be limited.
        * highRange `string`: Specifies the ending value for a search range. Use `cse:lowRange` and `cse:highrange` to append an inclusive search range of `lowRange...highRange` to the query.
        * hl `string`: Specifies the interface language (host language) of your user interface. Explicitly setting this parameter improves the performance and the quality of your search results. See the [Interface Languages](https://developers.google.com/custom-search/docs/xml_results#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/xml_results#wsInternationalizing) for more information, and [Supported Interface Languages](https://developers.google.com/custom-search/docs/xml_results_appendices#interfaceLanguages) for a list of supported languages.
        * hq `string`: Appends the specified query terms to the query, as if they were combined with a logical `AND` operator.
        * imgColorType `string`: Restricts results to images of a specified color type. Supported values are: * `mono` (black and white) * `gray` (grayscale) * `color` (color)
        * imgDominantColor `string`: Restricts results to images with a specific dominant color. Supported values are: * `red` * `orange` * `yellow` * `green` * `teal` * `blue` * `purple` * `pink` * `white` * `gray` * `black` * `brown`
        * imgSize `string`: Restricts results to images of a specified size. Supported values are: * `icon` (small) * `small | medium | large | xlarge` (medium) * `xxlarge` (large) * `huge` (extra-large)
        * imgType `string`: Restricts results to images of a specified type. Supported values are: * `clipart` (Clip art) * `face` (Face) * `lineart` (Line drawing) * `photo` (Photo) * `animated` (Animated) * `stock` (Stock)
        * inputEncoding `string`: The character encoding supported for search requests.
        * language `string`: The language of the search results.
        * linkSite `string`: Specifies that all results should contain a link to a specific URL.
        * lowRange `string`: Specifies the starting value for a search range. Use `cse:lowRange` and `cse:highrange` to append an inclusive search range of `lowRange...highRange` to the query.
        * orTerms `string`: Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms. You can also use the [Boolean OR](https://developers.google.com/custom-search/docs/xml_results#BooleanOrqt) query term for this type of query.
        * outputEncoding `string`: The character encoding supported for search results.
        * relatedSite `string`: Specifies that all search results should be pages that are related to the specified URL. The parameter value should be a URL.
        * rights `string`: Filters based on licensing. Supported values include: * `cc_publicdomain` * `cc_attribute` * `cc_sharealike` * `cc_noncommercial` * `cc_nonderived`
        * safe `string`: Specifies the [SafeSearch level](https://developers.google.com/custom-search/docs/xml_results#safeSearchLevels) used for filtering out adult results. This is a custom property not defined in the OpenSearch spec. Valid parameter values are: * `"off"`: Disable SafeSearch * `"active"`: Enable SafeSearch
        * searchTerms `string`: The search terms entered by the user.
        * searchType `string`: Allowed values are `web` or `image`. If unspecified, results are limited to webpages.
        * siteSearch `string`: Restricts results to URLs from a specified site.
        * siteSearchFilter `string`: Specifies whether to include or exclude results from the site named in the `sitesearch` parameter. Supported values are: * `i`: include content from site * `e`: exclude content from site
        * sort `string`: Specifies that results should be sorted according to the specified expression. For example, sort by date.
        * startIndex `integer`: The index of the current set of search results into the total set of results, where the index of the first result is 1.
        * startPage `integer`: The page number of this set of results, where the page length is set by the `count` property.
        * title `string`: A description of the query.
        * totalResults `string`: Estimated number of total search results. May not be accurate.
    * request `array`: Metadata representing the current request.
      * items `object`: Custom search request metadata.
        * count `integer`: Number of search results returned in this set.
        * cr `string`: Restricts search results to documents originating in a particular country. You may use [Boolean operators](https://developers.google.com/custom-search/docs/xml_results#booleanOperators) in the `cr` parameter's value. Google WebSearch determines the country of a document by analyzing the following: * The top-level domain (TLD) of the document's URL. * The geographic location of the web server's IP address. See [Country (cr) Parameter Values](https://developers.google.com/custom-search/docs/xml_results#countryCollections) for a list of valid values for this parameter.
        * cx `string`: The identifier of an engine created using the Programmable Search Engine [Control Panel](https://programmablesearchengine.google.com/). This is a custom property not defined in the OpenSearch spec. This parameter is **required**.
        * dateRestrict `string`: Restricts results to URLs based on date. Supported values include: * `d[number]`: requests results from the specified number of past days. * `w[number]`: requests results from the specified number of past weeks. * `m[number]`: requests results from the specified number of past months. * `y[number]`: requests results from the specified number of past years.
        * disableCnTwTranslation `string`: Enables or disables the [Simplified and Traditional Chinese Search](https://developers.google.com/custom-search/docs/xml_results#chineseSearch) feature. Supported values are: * `0`: enabled (default) * `1`: disabled
        * exactTerms `string`: Identifies a phrase that all documents in the search results must contain.
        * excludeTerms `string`: Identifies a word or phrase that should not appear in any documents in the search results.
        * fileType `string`: Restricts results to files of a specified extension. Filetypes supported by Google include: * Adobe Portable Document Format (`pdf`) * Adobe PostScript (`ps`) * Lotus 1-2-3 (`wk1`, `wk2`, `wk3`, `wk4`, `wk5`, `wki`, `wks`, `wku`) * Lotus WordPro (`lwp`) * Macwrite (`mw`) * Microsoft Excel (`xls`) * Microsoft PowerPoint (`ppt`) * Microsoft Word (`doc`) * Microsoft Works (`wks`, `wps`, `wdb`) * Microsoft Write (`wri`) * Rich Text Format (`rtf`) * Shockwave Flash (`swf`) * Text (`ans`, `txt`). Additional filetypes may be added in the future. An up-to-date list can always be found in Google's [file type FAQ](https://support.google.com/webmasters/answer/35287).
        * filter `string`: Activates or deactivates the automatic filtering of Google search results. See [Automatic Filtering](https://developers.google.com/custom-search/docs/xml_results#automaticFiltering) for more information about Google's search results filters. Valid values for this parameter are: * `0`: Disabled * `1`: Enabled (default) **Note**: By default, Google applies filtering to all search results to improve the quality of those results.
        * gl `string`: Boosts search results whose country of origin matches the parameter value. See [Country Codes](https://developers.google.com/custom-search/docs/xml_results#countryCodes) for a list of valid values. Specifying a `gl` parameter value in WebSearch requests should improve the relevance of results. This is particularly true for international customers and, even more specifically, for customers in English-speaking countries other than the United States.
        * googleHost `string`: Specifies the Google domain (for example, google.com, google.de, or google.fr) to which the search should be limited.
        * highRange `string`: Specifies the ending value for a search range. Use `cse:lowRange` and `cse:highrange` to append an inclusive search range of `lowRange...highRange` to the query.
        * hl `string`: Specifies the interface language (host language) of your user interface. Explicitly setting this parameter improves the performance and the quality of your search results. See the [Interface Languages](https://developers.google.com/custom-search/docs/xml_results#wsInterfaceLanguages) section of [Internationalizing Queries and Results Presentation](https://developers.google.com/custom-search/docs/xml_results#wsInternationalizing) for more information, and [Supported Interface Languages](https://developers.google.com/custom-search/docs/xml_results_appendices#interfaceLanguages) for a list of supported languages.
        * hq `string`: Appends the specified query terms to the query, as if they were combined with a logical `AND` operator.
        * imgColorType `string`: Restricts results to images of a specified color type. Supported values are: * `mono` (black and white) * `gray` (grayscale) * `color` (color)
        * imgDominantColor `string`: Restricts results to images with a specific dominant color. Supported values are: * `red` * `orange` * `yellow` * `green` * `teal` * `blue` * `purple` * `pink` * `white` * `gray` * `black` * `brown`
        * imgSize `string`: Restricts results to images of a specified size. Supported values are: * `icon` (small) * `small | medium | large | xlarge` (medium) * `xxlarge` (large) * `huge` (extra-large)
        * imgType `string`: Restricts results to images of a specified type. Supported values are: * `clipart` (Clip art) * `face` (Face) * `lineart` (Line drawing) * `photo` (Photo) * `animated` (Animated) * `stock` (Stock)
        * inputEncoding `string`: The character encoding supported for search requests.
        * language `string`: The language of the search results.
        * linkSite `string`: Specifies that all results should contain a link to a specific URL.
        * lowRange `string`: Specifies the starting value for a search range. Use `cse:lowRange` and `cse:highrange` to append an inclusive search range of `lowRange...highRange` to the query.
        * orTerms `string`: Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms. You can also use the [Boolean OR](https://developers.google.com/custom-search/docs/xml_results#BooleanOrqt) query term for this type of query.
        * outputEncoding `string`: The character encoding supported for search results.
        * relatedSite `string`: Specifies that all search results should be pages that are related to the specified URL. The parameter value should be a URL.
        * rights `string`: Filters based on licensing. Supported values include: * `cc_publicdomain` * `cc_attribute` * `cc_sharealike` * `cc_noncommercial` * `cc_nonderived`
        * safe `string`: Specifies the [SafeSearch level](https://developers.google.com/custom-search/docs/xml_results#safeSearchLevels) used for filtering out adult results. This is a custom property not defined in the OpenSearch spec. Valid parameter values are: * `"off"`: Disable SafeSearch * `"active"`: Enable SafeSearch
        * searchTerms `string`: The search terms entered by the user.
        * searchType `string`: Allowed values are `web` or `image`. If unspecified, results are limited to webpages.
        * siteSearch `string`: Restricts results to URLs from a specified site.
        * siteSearchFilter `string`: Specifies whether to include or exclude results from the site named in the `sitesearch` parameter. Supported values are: * `i`: include content from site * `e`: exclude content from site
        * sort `string`: Specifies that results should be sorted according to the specified expression. For example, sort by date.
        * startIndex `integer`: The index of the current set of search results into the total set of results, where the index of the first result is 1.
        * startPage `integer`: The page number of this set of results, where the page length is set by the `count` property.
        * title `string`: A description of the query.
        * totalResults `string`: Estimated number of total search results. May not be accurate.
  * searchInformation `object`: Metadata about a search operation.
    * formattedSearchTime `string`: The time taken for the server to return search results, formatted according to locale style.
    * formattedTotalResults `string`: The total number of search results, formatted according to locale style.
    * searchTime `number`: The time taken for the server to return search results.
    * totalResults `string`: The total number of search results returned by the query.
  * spelling `object`: Spell correction information for a query.
    * correctedQuery `string`: The corrected query.
    * htmlCorrectedQuery `string`: The corrected query, formatted in HTML.
  * url `object`: OpenSearch template and URL.
    * template `string`: The actual [OpenSearch template](http://www.opensearch.org/specifications/opensearch/1.1#opensearch_url_template_syntax) for this API.
    * type `string`: The MIME type of the OpenSearch URL template for the Custom Search JSON API.


