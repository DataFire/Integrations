# @datafire/microsoft_cognitiveservices_newssearch

Client library for News Search

## Installation and Usage
```bash
npm install --save @datafire/microsoft_cognitiveservices_newssearch
```
```js
let microsoft_cognitiveservices_newssearch = require('@datafire/microsoft_cognitiveservices_newssearch').create({
  apiKeyHeader: ""
});

microsoft_cognitiveservices_newssearch.News_Category({
  "X-BingApis-SDK": ""
}).then(data => {
  console.log(data);
});
```

## Description

The News Search API lets you send a search query to Bing and get back a list of news that are relevant to the search query. This section provides technical details about the query parameters and headers that you use to request news and the JSON response objects that contain them. For examples that show how to make requests, see [Searching the web for news](https://docs.microsoft.com/en-us/azure/cognitive-services/bing-news-search/search-the-web).

## Actions

### News_Category
The News Category API lets lets you search on Bing and get back a list of top news articles by category. This section provides technical details about the query parameters and headers that you use to request news and the JSON response objects that contain them.  For examples that show how to make requests, see [Searching the web for news](https://docs.microsoft.com/en-us/azure/cognitive-services/bing-news-search/search-the-web).


```js
microsoft_cognitiveservices_newssearch.News_Category({
  "X-BingApis-SDK": ""
}, context)
```

#### Input
* input `object`
  * X-BingApis-SDK **required** `string` (values: true): Activate swagger compliance
  * Accept `string`: The default media type is application/json. To specify that the response use [JSON-LD](http://json-ld.org/), set the Accept header to application/ld+json.
  * Accept-Language `string`: A comma-delimited list of one or more languages to use for user interface strings. The list is in decreasing order of preference. For additional information, including expected format, see [RFC2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html). This header and the [setLang](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#setlang) query parameter are mutually exclusive; do not specify both. If you set this header, you must also specify the [cc](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#cc) query parameter. To determine the market to return results for, Bing uses the first supported language it finds from the list and combines it with the cc parameter value. If the list does not include a supported language, Bing finds the closest language and market that supports the request or it uses an aggregated or default market for the results. To determine the market that Bing used, see the BingAPIs-Market header. Use this header and the cc query parameter only if you specify multiple languages. Otherwise, use the [mkt](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#mkt) and [setLang](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#setlang) query parameters. A user interface string is a string that's used as a label in a user interface. There are few user interface strings in the JSON response objects. Any links to Bing.com properties in the response objects apply the specified language.
  * User-Agent `string`: The user agent originating the request. Bing uses the user agent to provide mobile users with an optimized experience. Although optional, you are encouraged to always specify this header. The user-agent should be the same string that any commonly used browser sends. For information about user agents, see [RFC 2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html). The following are examples of user-agent strings. Windows Phone: Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 822). Android: Mozilla / 5.0 (Linux; U; Android 2.3.5; en - us; SCH - I500 Build / GINGERBREAD) AppleWebKit / 533.1 (KHTML; like Gecko) Version / 4.0 Mobile Safari / 533.1. iPhone: Mozilla / 5.0 (iPhone; CPU iPhone OS 6_1 like Mac OS X) AppleWebKit / 536.26 (KHTML; like Gecko) Mobile / 10B142 iPhone4; 1 BingWeb / 3.03.1428.20120423. PC: Mozilla / 5.0 (Windows NT 6.3; WOW64; Trident / 7.0; Touch; rv:11.0) like Gecko. iPad: Mozilla / 5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit / 537.51.1 (KHTML, like Gecko) Version / 7.0 Mobile / 11A465 Safari / 9537.53
  * X-MSEdge-ClientID `string`: Bing uses this header to provide users with consistent behavior across Bing API calls. Bing often flights new features and improvements, and it uses the client ID as a key for assigning traffic on different flights. If you do not use the same client ID for a user across multiple requests, then Bing may assign the user to multiple conflicting flights. Being assigned to multiple conflicting flights can lead to an inconsistent user experience. For example, if the second request has a different flight assignment than the first, the experience may be unexpected. Also, Bing can use the client ID to tailor web results to that client ID’s search history, providing a richer experience for the user. Bing also uses this header to help improve result rankings by analyzing the activity generated by a client ID. The relevance improvements help with better quality of results delivered by Bing APIs and in turn enables higher click-through rates for the API consumer. IMPORTANT: Although optional, you should consider this header required. Persisting the client ID across multiple requests for the same end user and device combination enables 1) the API consumer to receive a consistent user experience, and 2) higher click-through rates via better quality of results from the Bing APIs. Each user that uses your application on the device must have a unique, Bing generated client ID. If you do not include this header in the request, Bing generates an ID and returns it in the X-MSEdge-ClientID response header. The only time that you should NOT include this header in a request is the first time the user uses your app on that device. Use the client ID for each Bing API request that your app makes for this user on the device. Persist the client ID. To persist the ID in a browser app, use a persistent HTTP cookie to ensure the ID is used across all sessions. Do not use a session cookie. For other apps such as mobile apps, use the device's persistent storage to persist the ID. The next time the user uses your app on that device, get the client ID that you persisted. Bing responses may or may not include this header. If the response includes this header, capture the client ID and use it for all subsequent Bing requests for the user on that device. If you include the X-MSEdge-ClientID, you must not include cookies in the request.
  * X-MSEdge-ClientIP `string`: The IPv4 or IPv6 address of the client device. The IP address is used to discover the user's location. Bing uses the location information to determine safe search behavior. Although optional, you are encouraged to always specify this header and the X-Search-Location header. Do not obfuscate the address (for example, by changing the last octet to 0). Obfuscating the address results in the location not being anywhere near the device's actual location, which may result in Bing serving erroneous results.
  * X-Search-Location `string`: A semicolon-delimited list of key/value pairs that describe the client's geographical location. Bing uses the location information to determine safe search behavior and to return relevant local content. Specify the key/value pair as <key>:<value>. The following are the keys that you use to specify the user's location. lat (required): The latitude of the client's location, in degrees. The latitude must be greater than or equal to -90.0 and less than or equal to +90.0. Negative values indicate southern latitudes and positive values indicate northern latitudes. long (required): The longitude of the client's location, in degrees. The longitude must be greater than or equal to -180.0 and less than or equal to +180.0. Negative values indicate western longitudes and positive values indicate eastern longitudes. re (required): The radius, in meters, which specifies the horizontal accuracy of the coordinates. Pass the value returned by the device's location service. Typical values might be 22m for GPS/Wi-Fi, 380m for cell tower triangulation, and 18,000m for reverse IP lookup. ts (optional): The UTC UNIX timestamp of when the client was at the location. (The UNIX timestamp is the number of seconds since January 1, 1970.) head (optional): The client's relative heading or direction of travel. Specify the direction of travel as degrees from 0 through 360, counting clockwise relative to true north. Specify this key only if the sp key is nonzero. sp (optional): The horizontal velocity (speed), in meters per second, that the client device is traveling. alt (optional): The altitude of the client device, in meters. are (optional): The radius, in meters, that specifies the vertical accuracy of the coordinates. Specify this key only if you specify the alt key. Although many of the keys are optional, the more information that you provide, the more accurate the location results are. Although optional, you are encouraged to always specify the user's geographical location. Providing the location is especially important if the client's IP address does not accurately reflect the user's physical location (for example, if the client uses VPN). For optimal results, you should include this header and the X-MSEdge-ClientIP header, but at a minimum, you should include this header.
  * cc `string`: A 2-character country code of the country where the results come from. This API supports only the United States market. If you specify this query parameter, it must be set to us. If you set this parameter, you must also specify the Accept-Language header. Bing uses the first supported language it finds from the languages list, and combine that language with the country code that you specify to determine the market to return results for. If the languages list does not include a supported language, Bing finds the closest language and market that supports the request, or it may use an aggregated or default market for the results instead of a specified one. You should use this query parameter and the Accept-Language query parameter only if you specify multiple languages; otherwise, you should use the mkt and setLang query parameters. This parameter and the mkt query parameter are mutually exclusive—do not specify both.
  * category `string`: The category of articles to return. For example, Sports articles or Entertainment articles. For a list of possible categories, see [News Categories by Market](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#categories-by-market). Use this parameter only with News Category API. If you do not specify this parameter, the response includes both: Headline articles typically published in the last 24 hours from any category and articles from each parent category (up to four articles). If the article is a headline, the article's headline field is set to true. By default, the response includes up to 12 headline articles. To specify the number of headline articles to return, set the [headlineCount](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#headlineCount) query parameter.
  * count `integer`: The number of news articles to return in the response. The actual number delivered may be less than requested. The default is 10 and the maximum value is 100. The actual number delivered may be less than requested.You may use this parameter along with the offset parameter to page results. For example, if your user interface displays 20 articles per page, set count to 20 and offset to 0 to get the first page of results. For each subsequent page, increment offset by 20 (for example, 0, 20, 40). It is possible for multiple pages to include some overlap in results. If you do not specify the [category](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#category) parameter, Bing ignores this paramter.
  * headlineCount `integer`: The number of headline articles to return in the response. The default is 12. Specify this parameter only if you do not specify the [category](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#category) parameter.
  * mkt `string`: The market where the results come from. Typically, mkt is the country where the user is making the request from. However, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form <language code>-<country code>. For example, en-US. The string is case insensitive. For a list of possible market values, see [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#market-codes). NOTE: If known, you are encouraged to always specify the market. Specifying the market helps Bing route the request and return an appropriate and optimal response. If you specify a market that is not listed in [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#market-codes), Bing uses a best fit market code based on an internal mapping that is subject to change. This parameter and the [cc](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#cc) query parameter are mutually exclusive—do not specify both.
  * offset `integer`: The zero-based offset that indicates the number of news to skip before returning news. The default is 0. The offset should be less than ([totalEstimatedMatches](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#news-totalmatches) - count). Use this parameter along with the count parameter to page results. For example, if your user interface displays 20 news per page, set count to 20 and offset to 0 to get the first page of results. For each subsequent page, increment offset by 20 (for example, 0, 20, 40). It is possible for multiple pages to include some overlap in results. If you do not specify the [category](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#category) parameter, Bing ignores this paramter.
  * originalImg `boolean`: A Boolean value that determines whether the image's contentUrl contains a URL that points to a thumbnail of the original article's image or the image itself. If the article includes an image, and this parameter is set to true, the image's contentUrl property contains a URL that you may use to download the original image from the publisher's website. Otherwise, if this parameter is false, the image's contentUrl and thumbnailUrl URLs both point to the same thumbnail image. Use this parameter only with the News Search API or News Category API. Trending Topics API ignore this parameter.
  * safeSearch `string` (values: Off, Moderate, Strict): Filter news for adult content. The following are the possible filter values. Off: Return news articles with adult text, images, or videos. Moderate: Return news articles with adult text but not adult images or videos. Strict: Do not return news articles with adult text, images, or videos. If the request comes from a market that Bing's adult policy requires that safeSearch is set to Strict, Bing ignores the safeSearch value and uses Strict. If you use the site: query operator, there is the chance that the response may contain adult content regardless of what the safeSearch query parameter is set to. Use site: only if you are aware of the content on the site and your scenario supports the possibility of adult content.
  * setLang `string`: The language to use for user interface strings. Specify the language using the ISO 639-1 2-letter language code. For example, the language code for English is EN. The default is EN (English). Although optional, you should always specify the language. Typically, you set setLang to the same language specified by mkt unless the user wants the user interface strings displayed in a different language. This parameter and the [Accept-Language](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#acceptlanguage) header are mutually exclusive; do not specify both. A user interface string is a string that's used as a label in a user interface. There are few user interface strings in the JSON response objects. Also, any links to Bing.com properties in the response objects apply the specified language.
  * textDecorations `boolean`: A Boolean value that determines whether display strings contain decoration markers such as hit highlighting characters. If true, the strings may include markers. The default is false. To specify whether to use Unicode characters or HTML tags as the markers, see the [textFormat](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#textformat) query parameter. For information about hit highlighting, see [Hit Highlighting](https://docs.microsoft.com/azure/cognitive-services/bing-news-search/hit-highlighting).
  * textFormat `string` (values: Raw, Html): The type of markers to use for text decorations (see the textDecorations query parameter). Possible values are Raw—Use Unicode characters to mark content that needs special formatting. The Unicode characters are in the range E000 through E019. For example, Bing uses E000 and E001 to mark the beginning and end of query terms for hit highlighting. HTML—Use HTML tags to mark content that needs special formatting. For example, use <b> tags to highlight query terms in display strings. The default is Raw. For display strings that contain escapable HTML characters such as <, >, and &, if textFormat is set to HTML, Bing escapes the characters as appropriate (for example, < is escaped to &lt;).

#### Output
* output [News](#news)

### News_Search
The News Search API lets you send a search query to Bing and get back a list of news that are relevant to the search query. This section provides technical details about the query parameters and headers that you use to request news and the JSON response objects that contain them.  For examples that show how to make requests, see [Searching the web for news](https://docs.microsoft.com/en-us/azure/cognitive-services/bing-news-search/search-the-web).


```js
microsoft_cognitiveservices_newssearch.News_Search({
  "X-BingApis-SDK": "",
  "q": ""
}, context)
```

#### Input
* input `object`
  * X-BingApis-SDK **required** `string` (values: true): Activate swagger compliance
  * Accept `string`: The default media type is application/json. To specify that the response use [JSON-LD](http://json-ld.org/), set the Accept header to application/ld+json.
  * Accept-Language `string`: A comma-delimited list of one or more languages to use for user interface strings. The list is in decreasing order of preference. For additional information, including expected format, see [RFC2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html). This header and the [setLang](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#setlang) query parameter are mutually exclusive; do not specify both. If you set this header, you must also specify the [cc](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#cc) query parameter. To determine the market to return results for, Bing uses the first supported language it finds from the list and combines it with the cc parameter value. If the list does not include a supported language, Bing finds the closest language and market that supports the request or it uses an aggregated or default market for the results. To determine the market that Bing used, see the BingAPIs-Market header. Use this header and the cc query parameter only if you specify multiple languages. Otherwise, use the [mkt](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#mkt) and [setLang](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#setlang) query parameters. A user interface string is a string that's used as a label in a user interface. There are few user interface strings in the JSON response objects. Any links to Bing.com properties in the response objects apply the specified language.
  * User-Agent `string`: The user agent originating the request. Bing uses the user agent to provide mobile users with an optimized experience. Although optional, you are encouraged to always specify this header. The user-agent should be the same string that any commonly used browser sends. For information about user agents, see [RFC 2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html). The following are examples of user-agent strings. Windows Phone: Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 822). Android: Mozilla / 5.0 (Linux; U; Android 2.3.5; en - us; SCH - I500 Build / GINGERBREAD) AppleWebKit / 533.1 (KHTML; like Gecko) Version / 4.0 Mobile Safari / 533.1. iPhone: Mozilla / 5.0 (iPhone; CPU iPhone OS 6_1 like Mac OS X) AppleWebKit / 536.26 (KHTML; like Gecko) Mobile / 10B142 iPhone4; 1 BingWeb / 3.03.1428.20120423. PC: Mozilla / 5.0 (Windows NT 6.3; WOW64; Trident / 7.0; Touch; rv:11.0) like Gecko. iPad: Mozilla / 5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit / 537.51.1 (KHTML, like Gecko) Version / 7.0 Mobile / 11A465 Safari / 9537.53
  * X-MSEdge-ClientID `string`: Bing uses this header to provide users with consistent behavior across Bing API calls. Bing often flights new features and improvements, and it uses the client ID as a key for assigning traffic on different flights. If you do not use the same client ID for a user across multiple requests, then Bing may assign the user to multiple conflicting flights. Being assigned to multiple conflicting flights can lead to an inconsistent user experience. For example, if the second request has a different flight assignment than the first, the experience may be unexpected. Also, Bing can use the client ID to tailor web results to that client ID’s search history, providing a richer experience for the user. Bing also uses this header to help improve result rankings by analyzing the activity generated by a client ID. The relevance improvements help with better quality of results delivered by Bing APIs and in turn enables higher click-through rates for the API consumer. IMPORTANT: Although optional, you should consider this header required. Persisting the client ID across multiple requests for the same end user and device combination enables 1) the API consumer to receive a consistent user experience, and 2) higher click-through rates via better quality of results from the Bing APIs. Each user that uses your application on the device must have a unique, Bing generated client ID. If you do not include this header in the request, Bing generates an ID and returns it in the X-MSEdge-ClientID response header. The only time that you should NOT include this header in a request is the first time the user uses your app on that device. Use the client ID for each Bing API request that your app makes for this user on the device. Persist the client ID. To persist the ID in a browser app, use a persistent HTTP cookie to ensure the ID is used across all sessions. Do not use a session cookie. For other apps such as mobile apps, use the device's persistent storage to persist the ID. The next time the user uses your app on that device, get the client ID that you persisted. Bing responses may or may not include this header. If the response includes this header, capture the client ID and use it for all subsequent Bing requests for the user on that device. If you include the X-MSEdge-ClientID, you must not include cookies in the request.
  * X-MSEdge-ClientIP `string`: The IPv4 or IPv6 address of the client device. The IP address is used to discover the user's location. Bing uses the location information to determine safe search behavior. Although optional, you are encouraged to always specify this header and the X-Search-Location header. Do not obfuscate the address (for example, by changing the last octet to 0). Obfuscating the address results in the location not being anywhere near the device's actual location, which may result in Bing serving erroneous results.
  * X-Search-Location `string`: A semicolon-delimited list of key/value pairs that describe the client's geographical location. Bing uses the location information to determine safe search behavior and to return relevant local content. Specify the key/value pair as <key>:<value>. The following are the keys that you use to specify the user's location. lat (required): The latitude of the client's location, in degrees. The latitude must be greater than or equal to -90.0 and less than or equal to +90.0. Negative values indicate southern latitudes and positive values indicate northern latitudes. long (required): The longitude of the client's location, in degrees. The longitude must be greater than or equal to -180.0 and less than or equal to +180.0. Negative values indicate western longitudes and positive values indicate eastern longitudes. re (required): The radius, in meters, which specifies the horizontal accuracy of the coordinates. Pass the value returned by the device's location service. Typical values might be 22m for GPS/Wi-Fi, 380m for cell tower triangulation, and 18,000m for reverse IP lookup. ts (optional): The UTC UNIX timestamp of when the client was at the location. (The UNIX timestamp is the number of seconds since January 1, 1970.) head (optional): The client's relative heading or direction of travel. Specify the direction of travel as degrees from 0 through 360, counting clockwise relative to true north. Specify this key only if the sp key is nonzero. sp (optional): The horizontal velocity (speed), in meters per second, that the client device is traveling. alt (optional): The altitude of the client device, in meters. are (optional): The radius, in meters, that specifies the vertical accuracy of the coordinates. Specify this key only if you specify the alt key. Although many of the keys are optional, the more information that you provide, the more accurate the location results are. Although optional, you are encouraged to always specify the user's geographical location. Providing the location is especially important if the client's IP address does not accurately reflect the user's physical location (for example, if the client uses VPN). For optimal results, you should include this header and the X-MSEdge-ClientIP header, but at a minimum, you should include this header.
  * cc `string`: A 2-character country code of the country where the results come from. This API supports only the United States market. If you specify this query parameter, it must be set to us. If you set this parameter, you must also specify the Accept-Language header. Bing uses the first supported language it finds from the languages list, and combine that language with the country code that you specify to determine the market to return results for. If the languages list does not include a supported language, Bing finds the closest language and market that supports the request, or it may use an aggregated or default market for the results instead of a specified one. You should use this query parameter and the Accept-Language query parameter only if you specify multiple languages; otherwise, you should use the mkt and setLang query parameters. This parameter and the mkt query parameter are mutually exclusive—do not specify both.
  * count `integer`: The number of news articles to return in the response. The actual number delivered may be less than requested. The default is 10 and the maximum value is 100. The actual number delivered may be less than requested.You may use this parameter along with the offset parameter to page results. For example, if your user interface displays 20 articles per page, set count to 20 and offset to 0 to get the first page of results. For each subsequent page, increment offset by 20 (for example, 0, 20, 40). It is possible for multiple pages to include some overlap in results.
  * freshness `string` (values: Day, Week, Month): Filter news by the date and time that Bing discovered the news. The following are the possible filter values. Day: Return news discovered within the last 24 hours. Week: Return news discovered within the last 7 days. Month: Return news discovered within the last 30 days. Use this parameter only with the News Search API. Do not specify this parameter when calling the News Category API or the Trending Topics API.
  * mkt `string`: The market where the results come from. Typically, mkt is the country where the user is making the request from. However, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form <language code>-<country code>. For example, en-US. The string is case insensitive. For a list of possible market values, see [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#market-codes). NOTE: If known, you are encouraged to always specify the market. Specifying the market helps Bing route the request and return an appropriate and optimal response. If you specify a market that is not listed in [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#market-codes), Bing uses a best fit market code based on an internal mapping that is subject to change. This parameter and the [cc](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#cc) query parameter are mutually exclusive—do not specify both.
  * offset `integer`: The zero-based offset that indicates the number of news to skip before returning news. The default is 0. The offset should be less than ([totalEstimatedMatches](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#news-totalmatches) - count). Use this parameter along with the count parameter to page results. For example, if your user interface displays 20 news per page, set count to 20 and offset to 0 to get the first page of results. For each subsequent page, increment offset by 20 (for example, 0, 20, 40). It is possible for multiple pages to include some overlap in results.
  * originalImg `boolean`: A Boolean value that determines whether the image's contentUrl contains a URL that points to a thumbnail of the original article's image or the image itself. If the article includes an image, and this parameter is set to true, the image's contentUrl property contains a URL that you may use to download the original image from the publisher's website. Otherwise, if this parameter is false, the image's contentUrl and thumbnailUrl URLs both point to the same thumbnail image. Use this parameter only with the News Search API. Do not specify this parameter when calling the Trending Topics API or News Category API.
  * q **required** `string`: The user's search query string. The query string cannot be empty. The query string may contain [Bing Advanced Operators](http://msdn.microsoft.com/library/ff795620.aspx). For example, to limit news to a specific domain, use the [site:](http://msdn.microsoft.com/library/ff795613.aspx) operator. Use this parameter only with the News Search API. Do not specify this parameter when calling the Trending Topics API or News Category API.
  * safeSearch `string` (values: Off, Moderate, Strict): Filter news for adult content. The following are the possible filter values. Off: Return news articles with adult text, images, or videos. Moderate: Return news articles with adult text but not adult images or videos. Strict: Do not return news articles with adult text, images, or videos. If the request comes from a market that Bing's adult policy requires that safeSearch is set to Strict, Bing ignores the safeSearch value and uses Strict. If you use the site: query operator, there is the chance that the response may contain adult content regardless of what the safeSearch query parameter is set to. Use site: only if you are aware of the content on the site and your scenario supports the possibility of adult content.
  * setLang `string`: The language to use for user interface strings. Specify the language using the ISO 639-1 2-letter language code. For example, the language code for English is EN. The default is EN (English). Although optional, you should always specify the language. Typically, you set setLang to the same language specified by mkt unless the user wants the user interface strings displayed in a different language. This parameter and the [Accept-Language](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#acceptlanguage) header are mutually exclusive; do not specify both. A user interface string is a string that's used as a label in a user interface. There are few user interface strings in the JSON response objects. Also, any links to Bing.com properties in the response objects apply the specified language.
  * sortBy `string`: The order to return the news in. The following are the possible case-insensitive values. Date: If the request is through the News Search API, the response returns news articles sorted by date from the most recent to the oldest. If the request is through the News Trending Topics API, the response returns trending topics sorted by date from the most recent to the oldest.
  * textDecorations `boolean`: A Boolean value that determines whether display strings contain decoration markers such as hit highlighting characters. If true, the strings may include markers. The default is false. To specify whether to use Unicode characters or HTML tags as the markers, see the [textFormat](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#textformat) query parameter. For information about hit highlighting, see [Hit Highlighting](https://docs.microsoft.com/azure/cognitive-services/bing-news-search/hit-highlighting).
  * textFormat `string` (values: Raw, Html): The type of markers to use for text decorations (see the textDecorations query parameter). Possible values are Raw—Use Unicode characters to mark content that needs special formatting. The Unicode characters are in the range E000 through E019. For example, Bing uses E000 and E001 to mark the beginning and end of query terms for hit highlighting. HTML—Use HTML tags to mark content that needs special formatting. For example, use <b> tags to highlight query terms in display strings. The default is Raw. For display strings that contain escapable HTML characters such as <, >, and &, if textFormat is set to HTML, Bing escapes the characters as appropriate (for example, < is escaped to &lt;).

#### Output
* output [News](#news)

### News_Trending
The News Trending Topics API lets lets you search on Bing and get back a list of trending news topics that are currently trending on Bing. This section provides technical details about the query parameters and headers that you use to request news and the JSON response objects that contain them.  For examples that show how to make requests, see [Searching the web for news](https://docs.microsoft.com/en-us/azure/cognitive-services/bing-news-search/search-the-web).


```js
microsoft_cognitiveservices_newssearch.News_Trending({
  "X-BingApis-SDK": ""
}, context)
```

#### Input
* input `object`
  * X-BingApis-SDK **required** `string` (values: true): Activate swagger compliance
  * Accept `string`: The default media type is application/json. To specify that the response use [JSON-LD](http://json-ld.org/), set the Accept header to application/ld+json.
  * Accept-Language `string`: A comma-delimited list of one or more languages to use for user interface strings. The list is in decreasing order of preference. For additional information, including expected format, see [RFC2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html). This header and the [setLang](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#setlang) query parameter are mutually exclusive; do not specify both. If you set this header, you must also specify the [cc](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#cc) query parameter. To determine the market to return results for, Bing uses the first supported language it finds from the list and combines it with the cc parameter value. If the list does not include a supported language, Bing finds the closest language and market that supports the request or it uses an aggregated or default market for the results. To determine the market that Bing used, see the BingAPIs-Market header. Use this header and the cc query parameter only if you specify multiple languages. Otherwise, use the [mkt](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#mkt) and [setLang](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#setlang) query parameters. A user interface string is a string that's used as a label in a user interface. There are few user interface strings in the JSON response objects. Any links to Bing.com properties in the response objects apply the specified language.
  * User-Agent `string`: The user agent originating the request. Bing uses the user agent to provide mobile users with an optimized experience. Although optional, you are encouraged to always specify this header. The user-agent should be the same string that any commonly used browser sends. For information about user agents, see [RFC 2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html). The following are examples of user-agent strings. Windows Phone: Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 822). Android: Mozilla / 5.0 (Linux; U; Android 2.3.5; en - us; SCH - I500 Build / GINGERBREAD) AppleWebKit / 533.1 (KHTML; like Gecko) Version / 4.0 Mobile Safari / 533.1. iPhone: Mozilla / 5.0 (iPhone; CPU iPhone OS 6_1 like Mac OS X) AppleWebKit / 536.26 (KHTML; like Gecko) Mobile / 10B142 iPhone4; 1 BingWeb / 3.03.1428.20120423. PC: Mozilla / 5.0 (Windows NT 6.3; WOW64; Trident / 7.0; Touch; rv:11.0) like Gecko. iPad: Mozilla / 5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit / 537.51.1 (KHTML, like Gecko) Version / 7.0 Mobile / 11A465 Safari / 9537.53
  * X-MSEdge-ClientID `string`: Bing uses this header to provide users with consistent behavior across Bing API calls. Bing often flights new features and improvements, and it uses the client ID as a key for assigning traffic on different flights. If you do not use the same client ID for a user across multiple requests, then Bing may assign the user to multiple conflicting flights. Being assigned to multiple conflicting flights can lead to an inconsistent user experience. For example, if the second request has a different flight assignment than the first, the experience may be unexpected. Also, Bing can use the client ID to tailor web results to that client ID’s search history, providing a richer experience for the user. Bing also uses this header to help improve result rankings by analyzing the activity generated by a client ID. The relevance improvements help with better quality of results delivered by Bing APIs and in turn enables higher click-through rates for the API consumer. IMPORTANT: Although optional, you should consider this header required. Persisting the client ID across multiple requests for the same end user and device combination enables 1) the API consumer to receive a consistent user experience, and 2) higher click-through rates via better quality of results from the Bing APIs. Each user that uses your application on the device must have a unique, Bing generated client ID. If you do not include this header in the request, Bing generates an ID and returns it in the X-MSEdge-ClientID response header. The only time that you should NOT include this header in a request is the first time the user uses your app on that device. Use the client ID for each Bing API request that your app makes for this user on the device. Persist the client ID. To persist the ID in a browser app, use a persistent HTTP cookie to ensure the ID is used across all sessions. Do not use a session cookie. For other apps such as mobile apps, use the device's persistent storage to persist the ID. The next time the user uses your app on that device, get the client ID that you persisted. Bing responses may or may not include this header. If the response includes this header, capture the client ID and use it for all subsequent Bing requests for the user on that device. If you include the X-MSEdge-ClientID, you must not include cookies in the request.
  * X-MSEdge-ClientIP `string`: The IPv4 or IPv6 address of the client device. The IP address is used to discover the user's location. Bing uses the location information to determine safe search behavior. Although optional, you are encouraged to always specify this header and the X-Search-Location header. Do not obfuscate the address (for example, by changing the last octet to 0). Obfuscating the address results in the location not being anywhere near the device's actual location, which may result in Bing serving erroneous results.
  * X-Search-Location `string`: A semicolon-delimited list of key/value pairs that describe the client's geographical location. Bing uses the location information to determine safe search behavior and to return relevant local content. Specify the key/value pair as <key>:<value>. The following are the keys that you use to specify the user's location. lat (required): The latitude of the client's location, in degrees. The latitude must be greater than or equal to -90.0 and less than or equal to +90.0. Negative values indicate southern latitudes and positive values indicate northern latitudes. long (required): The longitude of the client's location, in degrees. The longitude must be greater than or equal to -180.0 and less than or equal to +180.0. Negative values indicate western longitudes and positive values indicate eastern longitudes. re (required): The radius, in meters, which specifies the horizontal accuracy of the coordinates. Pass the value returned by the device's location service. Typical values might be 22m for GPS/Wi-Fi, 380m for cell tower triangulation, and 18,000m for reverse IP lookup. ts (optional): The UTC UNIX timestamp of when the client was at the location. (The UNIX timestamp is the number of seconds since January 1, 1970.) head (optional): The client's relative heading or direction of travel. Specify the direction of travel as degrees from 0 through 360, counting clockwise relative to true north. Specify this key only if the sp key is nonzero. sp (optional): The horizontal velocity (speed), in meters per second, that the client device is traveling. alt (optional): The altitude of the client device, in meters. are (optional): The radius, in meters, that specifies the vertical accuracy of the coordinates. Specify this key only if you specify the alt key. Although many of the keys are optional, the more information that you provide, the more accurate the location results are. Although optional, you are encouraged to always specify the user's geographical location. Providing the location is especially important if the client's IP address does not accurately reflect the user's physical location (for example, if the client uses VPN). For optimal results, you should include this header and the X-MSEdge-ClientIP header, but at a minimum, you should include this header.
  * cc `string`: A 2-character country code of the country where the results come from. This API supports only the United States market. If you specify this query parameter, it must be set to us. If you set this parameter, you must also specify the Accept-Language header. Bing uses the first supported language it finds from the languages list, and combine that language with the country code that you specify to determine the market to return results for. If the languages list does not include a supported language, Bing finds the closest language and market that supports the request, or it may use an aggregated or default market for the results instead of a specified one. You should use this query parameter and the Accept-Language query parameter only if you specify multiple languages; otherwise, you should use the mkt and setLang query parameters. This parameter and the mkt query parameter are mutually exclusive—do not specify both.
  * count `integer`: The number of news articles to return in the response. The actual number delivered may be less than requested. The default is 10 and the maximum value is 100. The actual number delivered may be less than requested.You may use this parameter along with the offset parameter to page results. For example, if your user interface displays 20 articles per page, set count to 20 and offset to 0 to get the first page of results. For each subsequent page, increment offset by 20 (for example, 0, 20, 40). It is possible for multiple pages to include some overlap in results.
  * mkt `string`: The market where the results come from. Typically, mkt is the country where the user is making the request from. However, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form <language code>-<country code>. For example, en-US. The string is case insensitive. For a list of possible market values, see [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#market-codes). NOTE: If known, you are encouraged to always specify the market. Specifying the market helps Bing route the request and return an appropriate and optimal response. If you specify a market that is not listed in [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#market-codes), Bing uses a best fit market code based on an internal mapping that is subject to change. This parameter and the [cc](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#cc) query parameter are mutually exclusive—do not specify both.
  * offset `integer`: The zero-based offset that indicates the number of news to skip before returning news. The default is 0. The offset should be less than ([totalEstimatedMatches](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#news-totalmatches) - count). Use this parameter along with the count parameter to page results. For example, if your user interface displays 20 news per page, set count to 20 and offset to 0 to get the first page of results. For each subsequent page, increment offset by 20 (for example, 0, 20, 40). It is possible for multiple pages to include some overlap in results.
  * safeSearch `string` (values: Off, Moderate, Strict): Filter news for adult content. The following are the possible filter values. Off: Return news articles with adult text, images, or videos. Moderate: Return news articles with adult text but not adult images or videos. Strict: Do not return news articles with adult text, images, or videos. If the request comes from a market that Bing's adult policy requires that safeSearch is set to Strict, Bing ignores the safeSearch value and uses Strict. If you use the site: query operator, there is the chance that the response may contain adult content regardless of what the safeSearch query parameter is set to. Use site: only if you are aware of the content on the site and your scenario supports the possibility of adult content.
  * setLang `string`: The language to use for user interface strings. Specify the language using the ISO 639-1 2-letter language code. For example, the language code for English is EN. The default is EN (English). Although optional, you should always specify the language. Typically, you set setLang to the same language specified by mkt unless the user wants the user interface strings displayed in a different language. This parameter and the [Accept-Language](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#acceptlanguage) header are mutually exclusive; do not specify both. A user interface string is a string that's used as a label in a user interface. There are few user interface strings in the JSON response objects. Also, any links to Bing.com properties in the response objects apply the specified language.
  * since `integer`: The Unix epoch time (Unix timestamp) that Bing uses to select the trending topics. Bing returns trending topics that it discovered on or after the specified date and time, not the date the topic was published. To use this parameter, also specify the sortBy parameter. Use this parameter only with the News Trending Topics API. Do not specify this parameter when calling the News Search API or News Category API.
  * sortBy `string`: The order to return the news in. The following are the possible case-insensitive values. Date: If the request is through the News Search API, the response returns news articles sorted by date from the most recent to the oldest. If the request is through the News Trending Topics API, the response returns trending topics sorted by date from the most recent to the oldest.
  * textDecorations `boolean`: A Boolean value that determines whether display strings contain decoration markers such as hit highlighting characters. If true, the strings may include markers. The default is false. To specify whether to use Unicode characters or HTML tags as the markers, see the [textFormat](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-news-api-v7-reference#textformat) query parameter. For information about hit highlighting, see [Hit Highlighting](https://docs.microsoft.com/azure/cognitive-services/bing-news-search/hit-highlighting).
  * textFormat `string` (values: Raw, Html): The type of markers to use for text decorations (see the textDecorations query parameter). Possible values are Raw—Use Unicode characters to mark content that needs special formatting. The Unicode characters are in the range E000 through E019. For example, Bing uses E000 and E001 to mark the beginning and end of query terms for hit highlighting. HTML—Use HTML tags to mark content that needs special formatting. For example, use <b> tags to highlight query terms in display strings. The default is Raw. For display strings that contain escapable HTML characters such as <, >, and &, if textFormat is set to HTML, Bing escapes the characters as appropriate (for example, < is escaped to &lt;).

#### Output
* output [TrendingTopics](#trendingtopics)



## Definitions

### Answer
* Answer `object`: Defines an answer.
  * followUpQueries `array`
    * items [Query](#query)
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### Article
* Article `object`
  * wordCount `integer`: The number of words in the text of the Article.
  * datePublished `string`: The date on which the CreativeWork was published.
  * provider `array`: The source of the creative work.
    * items [Thing](#thing)
  * thumbnailUrl `string`: The URL to a thumbnail of the item.
  * video [VideoObject](#videoobject)
  * alternateName `string`: An alias for the item
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### CreativeWork
* CreativeWork `object`: The most generic kind of creative work, including books, movies, photographs, software programs, etc.
  * datePublished `string`: The date on which the CreativeWork was published.
  * provider `array`: The source of the creative work.
    * items [Thing](#thing)
  * thumbnailUrl `string`: The URL to a thumbnail of the item.
  * video [VideoObject](#videoobject)
  * alternateName `string`: An alias for the item
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### Error
* Error `object`: Defines the error that occurred.
  * code **required** `string` (values: None, ServerError, InvalidRequest, RateLimitExceeded, InvalidAuthorization, InsufficientAuthorization): The error code that identifies the category of error.
  * message **required** `string`: A description of the error.
  * moreDetails `string`: A description that provides additional information about the error.
  * parameter `string`: The parameter in the request that caused the error.
  * subCode `string` (values: UnexpectedError, ResourceError, NotImplemented, ParameterMissing, ParameterInvalidValue, HttpNotAllowed, Blocked, AuthorizationMissing, AuthorizationRedundancy, AuthorizationDisabled, AuthorizationExpired): The error code that further helps to identify the error.
  * value `string`: The parameter's value in the request that was not valid.

### ErrorResponse
* ErrorResponse `object`: The top-level response that represents a failed request.
  * errors **required** `array`: A list of errors that describe the reasons why the request failed.
    * items [Error](#error)
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### Identifiable
* Identifiable `object`: Defines the identity of a resource.
  * id `string`: A String identifier.
  * _type **required** `string`

### ImageObject
* ImageObject `object`: Defines an image
  * thumbnail [ImageObject](#imageobject)
  * contentUrl `string`: Original URL to retrieve the source (file) for the media object (e.g the source URL for the image).
  * height `integer`: The height of the source media object, in pixels.
  * width `integer`: The width of the source media object, in pixels.
  * datePublished `string`: The date on which the CreativeWork was published.
  * provider `array`: The source of the creative work.
    * items [Thing](#thing)
  * thumbnailUrl `string`: The URL to a thumbnail of the item.
  * video [VideoObject](#videoobject)
  * alternateName `string`: An alias for the item
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### MediaObject
* MediaObject `object`: Defines a media object.
  * contentUrl `string`: Original URL to retrieve the source (file) for the media object (e.g the source URL for the image).
  * height `integer`: The height of the source media object, in pixels.
  * width `integer`: The width of the source media object, in pixels.
  * datePublished `string`: The date on which the CreativeWork was published.
  * provider `array`: The source of the creative work.
    * items [Thing](#thing)
  * thumbnailUrl `string`: The URL to a thumbnail of the item.
  * video [VideoObject](#videoobject)
  * alternateName `string`: An alias for the item
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### News
* News `object`: Defines a news answer.
  * location `string`: Location of local news
  * value **required** `array`: An array of NewsArticle objects that contain information about news articles that are relevant to the query. If there are no results to return for the request, the array is empty.
    * items [NewsArticle](#newsarticle)
  * totalEstimatedMatches `integer`: The estimated number of webpages that are relevant to the query. Use this number along with the count and offset query parameters to page the results.
  * followUpQueries `array`
    * items [Query](#query)
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### NewsArticle
* NewsArticle `object`: Defines a news article.
  * category `string`: The news category that the article belongs to. For example, Sports. If the news category cannot be determined, the article does not include this field.
  * clusteredArticles `array`: A list of related news articles.
    * items [NewsArticle](#newsarticle)
  * headline `boolean`: A Boolean value that indicates whether the news article is a headline. If true, the article is a headline. The article includes this field only for news categories requests that do not specify the category query parameter.
  * wordCount `integer`: The number of words in the text of the Article.
  * datePublished `string`: The date on which the CreativeWork was published.
  * provider `array`: The source of the creative work.
    * items [Thing](#thing)
  * thumbnailUrl `string`: The URL to a thumbnail of the item.
  * video [VideoObject](#videoobject)
  * alternateName `string`: An alias for the item
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### NewsTopic
* NewsTopic `object`
  * isBreakingNews `boolean`: A Boolean value that indicates whether the topic is considered breaking news. If the topic is considered breaking news, the value is true.
  * newsSearchUrl `string`: The URL to the Bing News search results for the search query term
  * query [Query](#query)
  * alternateName `string`: An alias for the item
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### Organization
* Organization `object`: Defines an organization.
  * alternateName `string`: An alias for the item
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### Query
* Query `object`: Defines a search query.
  * displayText `string`: The display version of the query term. This version of the query term may contain special characters that highlight the search term found in the query string. The string contains the highlighting characters only if the query enabled hit highlighting
  * searchLink `string`: The URL that you use to get the results of the related search. Before using the URL, you must append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header. Use this URL if you're displaying the results in your own user interface. Otherwise, use the webSearchUrl URL.
  * text **required** `string`: The query string. Use this string as the query term in a new search request.
  * thumbnail [ImageObject](#imageobject)
  * webSearchUrl `string`: The URL that takes the user to the Bing search results page for the query.Only related search results include this field.

### Response
* Response `object`: Defines a response. All schemas that could be returned at the root of a response should inherit from this
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### ResponseBase
* ResponseBase `object`: Response base
  * _type **required** `string`

### SearchResultsAnswer
* SearchResultsAnswer `object`: Defines a search result answer.
  * totalEstimatedMatches `integer`: The estimated number of webpages that are relevant to the query. Use this number along with the count and offset query parameters to page the results.
  * followUpQueries `array`
    * items [Query](#query)
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### Thing
* Thing `object`: Defines a thing.
  * alternateName `string`: An alias for the item
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### TrendingTopics
* TrendingTopics `object`
  * value **required** `array`: A list of trending news topics on Bing
    * items [NewsTopic](#newstopic)
  * followUpQueries `array`
    * items [Query](#query)
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### VideoObject
* VideoObject `object`: Defines a video object that is relevant to the query.
  * allowHttpsEmbed `boolean`
  * allowMobileEmbed `boolean`
  * embedHtml `string`
  * isSuperfresh `boolean`
  * motionThumbnailId `string`
  * motionThumbnailUrl `string`
  * thumbnail [ImageObject](#imageobject)
  * videoId `string`
  * viewCount `integer`
  * contentUrl `string`: Original URL to retrieve the source (file) for the media object (e.g the source URL for the image).
  * height `integer`: The height of the source media object, in pixels.
  * width `integer`: The width of the source media object, in pixels.
  * datePublished `string`: The date on which the CreativeWork was published.
  * provider `array`: The source of the creative work.
    * items [Thing](#thing)
  * thumbnailUrl `string`: The URL to a thumbnail of the item.
  * video [VideoObject](#videoobject)
  * alternateName `string`: An alias for the item
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`


