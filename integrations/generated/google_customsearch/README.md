# @datafire/google_customsearch
Searches over a website or collection of websites

## Operation: cse.list
Returns metadata about the search performed, metadata about the custom search engine used for the search, and the search results.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "q": {
      "type": "string",
      "description": "Query"
    },
    "c2coff": {
      "type": "string",
      "description": "Turns off the translation between zh-CN and zh-TW."
    },
    "cr": {
      "type": "string",
      "description": "Country restrict(s)."
    },
    "cref": {
      "type": "string",
      "description": "The URL of a linked custom search engine"
    },
    "cx": {
      "type": "string",
      "description": "The custom search engine ID to scope this search query"
    },
    "dateRestrict": {
      "type": "string",
      "description": "Specifies all search results are from a time period"
    },
    "exactTerms": {
      "type": "string",
      "description": "Identifies a phrase that all documents in the search results must contain"
    },
    "excludeTerms": {
      "type": "string",
      "description": "Identifies a word or phrase that should not appear in any documents in the search results"
    },
    "fileType": {
      "type": "string",
      "description": "Returns images of a specified type. Some of the allowed values are: bmp, gif, png, jpg, svg, pdf, ..."
    },
    "filter": {
      "type": "string",
      "description": "Controls turning on or off the duplicate content filter.",
      "enum": [
        "0",
        "1"
      ]
    },
    "gl": {
      "type": "string",
      "description": "Geolocation of end user."
    },
    "googlehost": {
      "type": "string",
      "description": "The local Google domain to use to perform the search."
    },
    "highRange": {
      "type": "string",
      "description": "Creates a range in form as_nlo value..as_nhi value and attempts to append it to query"
    },
    "hl": {
      "type": "string",
      "description": "Sets the user interface language."
    },
    "hq": {
      "type": "string",
      "description": "Appends the extra query terms to the query."
    },
    "imgColorType": {
      "type": "string",
      "description": "Returns black and white, grayscale, or color images: mono, gray, and color.",
      "enum": [
        "color",
        "gray",
        "mono"
      ]
    },
    "imgDominantColor": {
      "type": "string",
      "description": "Returns images of a specific dominant color: yellow, green, teal, blue, purple, pink, white, gray, black and brown.",
      "enum": [
        "black",
        "blue",
        "brown",
        "gray",
        "green",
        "pink",
        "purple",
        "teal",
        "white",
        "yellow"
      ]
    },
    "imgSize": {
      "type": "string",
      "description": "Returns images of a specified size, where size can be one of: icon, small, medium, large, xlarge, xxlarge, and huge.",
      "enum": [
        "huge",
        "icon",
        "large",
        "medium",
        "small",
        "xlarge",
        "xxlarge"
      ]
    },
    "imgType": {
      "type": "string",
      "description": "Returns images of a type, which can be one of: clipart, face, lineart, news, and photo.",
      "enum": [
        "clipart",
        "face",
        "lineart",
        "news",
        "photo"
      ]
    },
    "linkSite": {
      "type": "string",
      "description": "Specifies that all search results should contain a link to a particular URL"
    },
    "lowRange": {
      "type": "string",
      "description": "Creates a range in form as_nlo value..as_nhi value and attempts to append it to query"
    },
    "lr": {
      "type": "string",
      "description": "The language restriction for the search results",
      "enum": [
        "lang_ar",
        "lang_bg",
        "lang_ca",
        "lang_cs",
        "lang_da",
        "lang_de",
        "lang_el",
        "lang_en",
        "lang_es",
        "lang_et",
        "lang_fi",
        "lang_fr",
        "lang_hr",
        "lang_hu",
        "lang_id",
        "lang_is",
        "lang_it",
        "lang_iw",
        "lang_ja",
        "lang_ko",
        "lang_lt",
        "lang_lv",
        "lang_nl",
        "lang_no",
        "lang_pl",
        "lang_pt",
        "lang_ro",
        "lang_ru",
        "lang_sk",
        "lang_sl",
        "lang_sr",
        "lang_sv",
        "lang_tr",
        "lang_zh-CN",
        "lang_zh-TW"
      ]
    },
    "num": {
      "type": "integer",
      "description": "Number of search results to return"
    },
    "orTerms": {
      "type": "string",
      "description": "Provides additional search terms to check for in a document, where each document in the search results must contain at least one of the additional search terms"
    },
    "relatedSite": {
      "type": "string",
      "description": "Specifies that all search results should be pages that are related to the specified URL"
    },
    "rights": {
      "type": "string",
      "description": "Filters based on licensing. Supported values include: cc_publicdomain, cc_attribute, cc_sharealike, cc_noncommercial, cc_nonderived and combinations of these."
    },
    "safe": {
      "type": "string",
      "description": "Search safety level",
      "enum": [
        "high",
        "medium",
        "off"
      ]
    },
    "searchType": {
      "type": "string",
      "description": "Specifies the search type: image.",
      "enum": [
        "image"
      ]
    },
    "siteSearch": {
      "type": "string",
      "description": "Specifies all search results should be pages from a given site"
    },
    "siteSearchFilter": {
      "type": "string",
      "description": "Controls whether to include or exclude results from the site named in the as_sitesearch parameter",
      "enum": [
        "e",
        "i"
      ]
    },
    "sort": {
      "type": "string",
      "description": "The sort expression to apply to the results"
    },
    "start": {
      "type": "integer",
      "description": "The index of the first result to return"
    },
    "alt": {
      "type": "string",
      "description": "Data format for the response.",
      "enum": [
        "atom",
        "json"
      ]
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided."
    },
    "userIp": {
      "type": "string",
      "description": "IP address of the site where the request originates. Use this if you want to enforce per-user limits."
    }
  },
  "additionalProperties": false,
  "required": [
    "q"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Search"
}
```
