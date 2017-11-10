# @datafire/google_customsearch

Client library for CustomSearch

## Installation and Usage
```bash
npm install --save datafire @datafire/google_customsearch
```

```js
let datafire = require('datafire');
let google_customsearch = require('@datafire/google_customsearch').create();

google_customsearch.cse.list({}).then(data => {
  console.log(data);
})
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

#### Parameters
* c2coff (string) - Turns off the translation between zh-CN and zh-TW.
* cr (string) - Country restrict(s).
* cx (string) - The custom search engine ID to scope this search query
* dateRestrict (string) - Specifies all search results are from a time period
* exactTerms (string) - Identifies a phrase that all documents in the search results must contain
* excludeTerms (string) - Identifies a word or phrase that should not appear in any documents in the search results
* fileType (string) - Returns images of a specified type. Some of the allowed values are: bmp, gif, png, jpg, svg, pdf, ...
* filter (string) - Controls turning on or off the duplicate content filter.
* gl (string) - Geolocation of end user.
* googlehost (string) - The local Google domain to use to perform the search.
* highRange (string) - Creates a range in form as_nlo value..as_nhi value and attempts to append it to query
* hl (string) - Sets the user interface language.
* hq (string) - Appends the extra query terms to the query.
* imgColorType (string) - Returns black and white, grayscale, or color images: mono, gray, and color.
* imgDominantColor (string) - Returns images of a specific dominant color: yellow, green, teal, blue, purple, pink, white, gray, black and brown.
* imgSize (string) - Returns images of a specified size, where size can be one of: icon, small, medium, large, xlarge, xxlarge, and huge.
* imgType (string) - Returns images of a type, which can be one of: clipart, face, lineart, news, and photo.
* linkSite (string) - Specifies that all search results should contain a link to a particular URL
* lowRange (string) - Creates a range in form as_nlo value..as_nhi value and attempts to append it to query
* lr (string) - The language restriction for the search results
* num (integer) - Number of search results to return
* orTerms (string) - Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms
* q (string) **required** - Query
* relatedSite (string) - Specifies that all search results should be pages that are related to the specified URL
* rights (string) - Filters based on licensing. Supported values include: cc_publicdomain, cc_attribute, cc_sharealike, cc_noncommercial, cc_nonderived and combinations of these.
* safe (string) - Search safety level
* searchType (string) - Specifies the search type: image.
* siteSearch (string) - Specifies all search results should be pages from a given site
* siteSearchFilter (string) - Controls whether to include or exclude results from the site named in the as_sitesearch parameter
* sort (string) - The sort expression to apply to the results
* start (integer) - The index of the first result to return
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

