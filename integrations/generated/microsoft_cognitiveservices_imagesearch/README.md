# @datafire/microsoft_cognitiveservices_imagesearch

Client library for Image Search

## Installation and Usage
```bash
npm install --save @datafire/microsoft_cognitiveservices_imagesearch
```
```js
let microsoft_cognitiveservices_imagesearch = require('@datafire/microsoft_cognitiveservices_imagesearch').create({
  apiKeyHeader: ""
});

microsoft_cognitiveservices_imagesearch.Images_Details({
  "X-BingApis-SDK": "",
  "q": ""
}).then(data => {
  console.log(data);
});
```

## Description

The Image Search API lets you send a search query to Bing and get back a list of relevant images. This section provides technical details about the query parameters and headers that you use to request images and the JSON response objects that contain them. For examples that show how to make requests, see [Searching the Web for Images](https://docs.microsoft.com/azure/cognitive-services/bing-image-search/search-the-web).

## Actions

### Images_Details
The Image Detail Search API lets you search on Bing and get back insights about an image, such as webpages that include the image. This section provides technical details about the query parameters and headers that you use to request insights of images and the JSON response objects that contain them. For examples that show how to make requests, see [Searching the Web for Images](https://docs.microsoft.com/azure/cognitive-services/bing-image-search/search-the-web).


```js
microsoft_cognitiveservices_imagesearch.Images_Details({
  "X-BingApis-SDK": "",
  "q": ""
}, context)
```

#### Input
* input `object`
  * X-BingApis-SDK **required** `string` (values: true): Activate swagger compliance
  * Accept `string`: The default media type is application/json. To specify that the response use [JSON-LD](http://json-ld.org/), set the Accept header to application/ld+json.
  * Accept-Language `string`: A comma-delimited list of one or more languages to use for user interface strings. The list is in decreasing order of preference. For additional information, including expected format, see [RFC2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html). This header and the [setLang](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#setlang) query parameter are mutually exclusive; do not specify both. If you set this header, you must also specify the [cc](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#cc) query parameter. To determine the market to return results for, Bing uses the first supported language it finds from the list and combines it with the cc parameter value. If the list does not include a supported language, Bing finds the closest language and market that supports the request or it uses an aggregated or default market for the results. To determine the market that Bing used, see the BingAPIs-Market header. Use this header and the cc query parameter only if you specify multiple languages. Otherwise, use the [mkt](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#mkt) and [setLang](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#setlang) query parameters. A user interface string is a string that's used as a label in a user interface. There are few user interface strings in the JSON response objects. Any links to Bing.com properties in the response objects apply the specified language.
  * Content-Type `string`: Optional request header. If you set the [modules](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#modulesrequested) query parameter to RecognizedEntities, you may specify the binary of an image in the body of a POST request. If you specify the image in the body of a POST request, you must specify this header and set its value to multipart/form-data. The maximum image size is 1 MB.
  * User-Agent `string`: The user agent originating the request. Bing uses the user agent to provide mobile users with an optimized experience. Although optional, you are encouraged to always specify this header. The user-agent should be the same string that any commonly used browser sends. For information about user agents, see [RFC 2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html). The following are examples of user-agent strings. Windows Phone: Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 822). Android: Mozilla / 5.0 (Linux; U; Android 2.3.5; en - us; SCH - I500 Build / GINGERBREAD) AppleWebKit / 533.1 (KHTML; like Gecko) Version / 4.0 Mobile Safari / 533.1. iPhone: Mozilla / 5.0 (iPhone; CPU iPhone OS 6_1 like Mac OS X) AppleWebKit / 536.26 (KHTML; like Gecko) Mobile / 10B142 iPhone4; 1 BingWeb / 3.03.1428.20120423. PC: Mozilla / 5.0 (Windows NT 6.3; WOW64; Trident / 7.0; Touch; rv:11.0) like Gecko. iPad: Mozilla / 5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit / 537.51.1 (KHTML, like Gecko) Version / 7.0 Mobile / 11A465 Safari / 9537.53
  * X-MSEdge-ClientID `string`: Bing uses this header to provide users with consistent behavior across Bing API calls. Bing often flights new features and improvements, and it uses the client ID as a key for assigning traffic on different flights. If you do not use the same client ID for a user across multiple requests, then Bing may assign the user to multiple conflicting flights. Being assigned to multiple conflicting flights can lead to an inconsistent user experience. For example, if the second request has a different flight assignment than the first, the experience may be unexpected. Also, Bing can use the client ID to tailor web results to that client ID’s search history, providing a richer experience for the user. Bing also uses this header to help improve result rankings by analyzing the activity generated by a client ID. The relevance improvements help with better quality of results delivered by Bing APIs and in turn enables higher click-through rates for the API consumer. IMPORTANT: Although optional, you should consider this header required. Persisting the client ID across multiple requests for the same end user and device combination enables 1) the API consumer to receive a consistent user experience, and 2) higher click-through rates via better quality of results from the Bing APIs. Each user that uses your application on the device must have a unique, Bing generated client ID. If you do not include this header in the request, Bing generates an ID and returns it in the X-MSEdge-ClientID response header. The only time that you should NOT include this header in a request is the first time the user uses your app on that device. Use the client ID for each Bing API request that your app makes for this user on the device. Persist the client ID. To persist the ID in a browser app, use a persistent HTTP cookie to ensure the ID is used across all sessions. Do not use a session cookie. For other apps such as mobile apps, use the device's persistent storage to persist the ID. The next time the user uses your app on that device, get the client ID that you persisted. Bing responses may or may not include this header. If the response includes this header, capture the client ID and use it for all subsequent Bing requests for the user on that device. If you include the X-MSEdge-ClientID, you must not include cookies in the request.
  * X-MSEdge-ClientIP `string`: The IPv4 or IPv6 address of the client device. The IP address is used to discover the user's location. Bing uses the location information to determine safe search behavior. Although optional, you are encouraged to always specify this header and the X-Search-Location header. Do not obfuscate the address (for example, by changing the last octet to 0). Obfuscating the address results in the location not being anywhere near the device's actual location, which may result in Bing serving erroneous results.
  * X-Search-Location `string`: A semicolon-delimited list of key/value pairs that describe the client's geographical location. Bing uses the location information to determine safe search behavior and to return relevant local content. Specify the key/value pair as <key>:<value>. The following are the keys that you use to specify the user's location. lat (required): The latitude of the client's location, in degrees. The latitude must be greater than or equal to -90.0 and less than or equal to +90.0. Negative values indicate southern latitudes and positive values indicate northern latitudes. long (required): The longitude of the client's location, in degrees. The longitude must be greater than or equal to -180.0 and less than or equal to +180.0. Negative values indicate western longitudes and positive values indicate eastern longitudes. re (required): The radius, in meters, which specifies the horizontal accuracy of the coordinates. Pass the value returned by the device's location service. Typical values might be 22m for GPS/Wi-Fi, 380m for cell tower triangulation, and 18,000m for reverse IP lookup. ts (optional): The UTC UNIX timestamp of when the client was at the location. (The UNIX timestamp is the number of seconds since January 1, 1970.) head (optional): The client's relative heading or direction of travel. Specify the direction of travel as degrees from 0 through 360, counting clockwise relative to true north. Specify this key only if the sp key is nonzero. sp (optional): The horizontal velocity (speed), in meters per second, that the client device is traveling. alt (optional): The altitude of the client device, in meters. are (optional): The radius, in meters, that specifies the vertical accuracy of the coordinates. Specify this key only if you specify the alt key. Although many of the keys are optional, the more information that you provide, the more accurate the location results are. Although optional, you are encouraged to always specify the user's geographical location. Providing the location is especially important if the client's IP address does not accurately reflect the user's physical location (for example, if the client uses VPN). For optimal results, you should include this header and the X-MSEdge-ClientIP header, but at a minimum, you should include this header.
  * cab `number`: The bottom coordinate of the region to crop. The coordinate is a fractional value of the original image's height and is measured from the top, left corner of the image. Specify the coordinate as a value from 0.0 through 1.0. Use this parameter only with the Insights API. Do not specify this parameter when calling the Images, Trending Images, or Web Search APIs.
  * cal `number`: The left coordinate of the region to crop. The coordinate is a fractional value of the original image's height and is measured from the top, left corner of the image. Specify the coordinate as a value from 0.0 through 1.0. Use this parameter only with the Insights API. Do not specify this parameter when calling the Images, Trending Images, or Web Search APIs.
  * car `number`: The right coordinate of the region to crop. The coordinate is a fractional value of the original image's height and is measured from the top, left corner of the image. Specify the coordinate as a value from 0.0 through 1.0. Use this parameter only with the Insights API. Do not specify this parameter when calling the Images, Trending Images, or Web Search APIs.
  * cat `number`: The top coordinate of the region to crop. The coordinate is a fractional value of the original image's height and is measured from the top, left corner of the image. Specify the coordinate as a value from 0.0 through 1.0. Use this parameter only with the Insights API. Do not specify this parameter when calling the Images, Trending Images, or Web Search APIs.
  * ct `string` (values: Rectangular): The crop type to use when cropping the image based on the coordinates specified in the cal, cat, car, and cab parameters. The following are the possible values. 0: Rectangular (default). Use this parameter only with the Insights API. Do not specify this parameter when calling the Images, Trending Images, or Web Search APIs.
  * cc `string`: A 2-character country code of the country where the results come from. For a list of possible values, see [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#market-codes). If you set this parameter, you must also specify the [Accept-Language](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#acceptlanguage) header. Bing uses the first supported language it finds from the languages list, and combine that language with the country code that you specify to determine the market to return results for. If the languages list does not include a supported language, Bing finds the closest language and market that supports the request, or it may use an aggregated or default market for the results instead of a specified one. You should use this query parameter and the Accept-Language query parameter only if you specify multiple languages; otherwise, you should use the mkt and setLang query parameters. This parameter and the [mkt](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#mkt) query parameter are mutually exclusive—do not specify both.
  * id `string`: An ID that uniquely identifies an image. Use this parameter to ensure that the specified image is the first image in the list of images that Bing returns. The [Image](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#image) object's imageId field contains the ID that you set this parameter to.
  * imgUrl `string`: The URL of an image that you want to get insights of. Use this parameter as an alternative to using the insightsToken parameter to specify the image. You may also specify the image by placing the binary of the image in the body of a POST request. If you use the binary option, see the [Content-Type](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#contenttype) header. The maximum supported image size is 1 MB. Use this parameter only with the Insights API. Do not specify this parameter when calling the Images, Trending Images, or Web Search APIs.
  * insightsToken `string`: An image token. The [Image](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#image) object's [imageInsightsToken](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#image-imageinsightstoken) contains the token. Specify this parameter to get additional information about an image, such as a caption or shopping source. For a list of the additional information about an image that you can get, see the [modules](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#modulesrequested) query parameter. Use this parameter only with the Insights API. Do not specify this parameter when calling the Images, Trending Images, or Web Search APIs.
  * modules `array`: A comma-delimited list of insights to request. The following are the possible case-insensitive values. All: Return all insights, if available, except RecognizedEntities. BRQ: Best representative query. The query term that best describes the image. Caption: A caption that provides information about the image. If the caption contains entities, the response may include links to images of those entities. Collections: A list of related images. Recipes: A list of recipes for cooking the food shown in the images. PagesIncluding: A list of webpages that include the image. RecognizedEntities: A list of entities (people) that were recognized in the image. NOTE: You may not specify this module with any other module. If you specify it with other modules, the response doesn't include recognized entities. RelatedSearches: A list of related searches made by others. ShoppingSources: A list of merchants where you can buy related offerings. SimilarImages: A list of images that are visually similar to the original image. SimilarProducts: A list of images that contain a product that is similar to a product found in the original image. Tags: Provides characteristics of the type of content found in the image. For example, if the image is of a person, the tags might indicate the person's gender and type of clothes they're wearing. If you specify a module and there is no data for the module, the response object doesn't include the related field. For example, if you specify Caption and it does not exist, the response doesn't include the imageCaption field. To include related searches, the request must include the original query string. Although the original query string is not required for similar images or products, you should always include it because it can help improve relevance and the results. Use this parameter only with the Insights API. Do not specify this parameter when calling the Images, Trending Images, or Web Search APIs.
  * mkt `string`: The market where the results come from. Typically, mkt is the country where the user is making the request from. However, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form <language code>-<country code>. For example, en-US. The string is case insensitive. For a list of possible market values, see [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#market-codes). NOTE: If known, you are encouraged to always specify the market. Specifying the market helps Bing route the request and return an appropriate and optimal response. If you specify a market that is not listed in [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#market-codes), Bing uses a best fit market code based on an internal mapping that is subject to change. This parameter and the [cc](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#cc) query parameter are mutually exclusive—do not specify both.
  * q **required** `string`: The user's search query term. The term cannot be empty. The term may contain [Bing Advanced Operators](http://msdn.microsoft.com/library/ff795620.aspx). For example, to limit images to a specific domain, use the [site:](http://msdn.microsoft.com/library/ff795613.aspx) operator. To help improve relevance of an insights query (see [insightsToken](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#insightstoken)), you should always include the user's query term. Use this parameter only with the Image Search API.Do not specify this parameter when calling the Trending Images API.
  * safeSearch `string` (values: Off, Moderate, Strict): Filter images for adult content. The following are the possible filter values. Off: May return images with adult content. If the request is through the Image Search API, the response includes thumbnail images that are clear (non-fuzzy). However, if the request is through the Web Search API, the response includes thumbnail images that are pixelated (fuzzy). Moderate: If the request is through the Image Search API, the response doesn't include images with adult content. If the request is through the Web Search API, the response may include images with adult content (the thumbnail images are pixelated (fuzzy)). Strict: Do not return images with adult content. The default is Moderate. If the request comes from a market that Bing's adult policy requires that safeSearch is set to Strict, Bing ignores the safeSearch value and uses Strict. If you use the site: query operator, there is the chance that the response may contain adult content regardless of what the safeSearch query parameter is set to. Use site: only if you are aware of the content on the site and your scenario supports the possibility of adult content.
  * setLang `string`: The language to use for user interface strings. Specify the language using the ISO 639-1 2-letter language code. For example, the language code for English is EN. The default is EN (English). Although optional, you should always specify the language. Typically, you set setLang to the same language specified by mkt unless the user wants the user interface strings displayed in a different language. This parameter and the [Accept-Language](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#acceptlanguage) header are mutually exclusive; do not specify both. A user interface string is a string that's used as a label in a user interface. There are few user interface strings in the JSON response objects. Also, any links to Bing.com properties in the response objects apply the specified language.

#### Output
* output [ImageInsights](#imageinsights)

### Images_Search
The Image Search API lets you send a search query to Bing and get back a list of relevant images. This section provides technical details about the query parameters and headers that you use to request images and the JSON response objects that contain them. For examples that show how to make requests, see [Searching the Web for Images](https://docs.microsoft.com/azure/cognitive-services/bing-image-search/search-the-web).


```js
microsoft_cognitiveservices_imagesearch.Images_Search({
  "X-BingApis-SDK": "",
  "q": ""
}, context)
```

#### Input
* input `object`
  * X-BingApis-SDK **required** `string` (values: true): Activate swagger compliance
  * Accept `string`: The default media type is application/json. To specify that the response use [JSON-LD](http://json-ld.org/), set the Accept header to application/ld+json.
  * Accept-Language `string`: A comma-delimited list of one or more languages to use for user interface strings. The list is in decreasing order of preference. For additional information, including expected format, see [RFC2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html). This header and the [setLang](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#setlang) query parameter are mutually exclusive; do not specify both. If you set this header, you must also specify the [cc](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#cc) query parameter. To determine the market to return results for, Bing uses the first supported language it finds from the list and combines it with the cc parameter value. If the list does not include a supported language, Bing finds the closest language and market that supports the request or it uses an aggregated or default market for the results. To determine the market that Bing used, see the BingAPIs-Market header. Use this header and the cc query parameter only if you specify multiple languages. Otherwise, use the [mkt](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#mkt) and [setLang](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#setlang) query parameters. A user interface string is a string that's used as a label in a user interface. There are few user interface strings in the JSON response objects. Any links to Bing.com properties in the response objects apply the specified language.
  * User-Agent `string`: The user agent originating the request. Bing uses the user agent to provide mobile users with an optimized experience. Although optional, you are encouraged to always specify this header. The user-agent should be the same string that any commonly used browser sends. For information about user agents, see [RFC 2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html). The following are examples of user-agent strings. Windows Phone: Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 822). Android: Mozilla / 5.0 (Linux; U; Android 2.3.5; en - us; SCH - I500 Build / GINGERBREAD) AppleWebKit / 533.1 (KHTML; like Gecko) Version / 4.0 Mobile Safari / 533.1. iPhone: Mozilla / 5.0 (iPhone; CPU iPhone OS 6_1 like Mac OS X) AppleWebKit / 536.26 (KHTML; like Gecko) Mobile / 10B142 iPhone4; 1 BingWeb / 3.03.1428.20120423. PC: Mozilla / 5.0 (Windows NT 6.3; WOW64; Trident / 7.0; Touch; rv:11.0) like Gecko. iPad: Mozilla / 5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit / 537.51.1 (KHTML, like Gecko) Version / 7.0 Mobile / 11A465 Safari / 9537.53
  * X-MSEdge-ClientID `string`: Bing uses this header to provide users with consistent behavior across Bing API calls. Bing often flights new features and improvements, and it uses the client ID as a key for assigning traffic on different flights. If you do not use the same client ID for a user across multiple requests, then Bing may assign the user to multiple conflicting flights. Being assigned to multiple conflicting flights can lead to an inconsistent user experience. For example, if the second request has a different flight assignment than the first, the experience may be unexpected. Also, Bing can use the client ID to tailor web results to that client ID’s search history, providing a richer experience for the user. Bing also uses this header to help improve result rankings by analyzing the activity generated by a client ID. The relevance improvements help with better quality of results delivered by Bing APIs and in turn enables higher click-through rates for the API consumer. IMPORTANT: Although optional, you should consider this header required. Persisting the client ID across multiple requests for the same end user and device combination enables 1) the API consumer to receive a consistent user experience, and 2) higher click-through rates via better quality of results from the Bing APIs. Each user that uses your application on the device must have a unique, Bing generated client ID. If you do not include this header in the request, Bing generates an ID and returns it in the X-MSEdge-ClientID response header. The only time that you should NOT include this header in a request is the first time the user uses your app on that device. Use the client ID for each Bing API request that your app makes for this user on the device. Persist the client ID. To persist the ID in a browser app, use a persistent HTTP cookie to ensure the ID is used across all sessions. Do not use a session cookie. For other apps such as mobile apps, use the device's persistent storage to persist the ID. The next time the user uses your app on that device, get the client ID that you persisted. Bing responses may or may not include this header. If the response includes this header, capture the client ID and use it for all subsequent Bing requests for the user on that device. If you include the X-MSEdge-ClientID, you must not include cookies in the request.
  * X-MSEdge-ClientIP `string`: The IPv4 or IPv6 address of the client device. The IP address is used to discover the user's location. Bing uses the location information to determine safe search behavior. Although optional, you are encouraged to always specify this header and the X-Search-Location header. Do not obfuscate the address (for example, by changing the last octet to 0). Obfuscating the address results in the location not being anywhere near the device's actual location, which may result in Bing serving erroneous results.
  * X-Search-Location `string`: A semicolon-delimited list of key/value pairs that describe the client's geographical location. Bing uses the location information to determine safe search behavior and to return relevant local content. Specify the key/value pair as <key>:<value>. The following are the keys that you use to specify the user's location. lat (required): The latitude of the client's location, in degrees. The latitude must be greater than or equal to -90.0 and less than or equal to +90.0. Negative values indicate southern latitudes and positive values indicate northern latitudes. long (required): The longitude of the client's location, in degrees. The longitude must be greater than or equal to -180.0 and less than or equal to +180.0. Negative values indicate western longitudes and positive values indicate eastern longitudes. re (required): The radius, in meters, which specifies the horizontal accuracy of the coordinates. Pass the value returned by the device's location service. Typical values might be 22m for GPS/Wi-Fi, 380m for cell tower triangulation, and 18,000m for reverse IP lookup. ts (optional): The UTC UNIX timestamp of when the client was at the location. (The UNIX timestamp is the number of seconds since January 1, 1970.) head (optional): The client's relative heading or direction of travel. Specify the direction of travel as degrees from 0 through 360, counting clockwise relative to true north. Specify this key only if the sp key is nonzero. sp (optional): The horizontal velocity (speed), in meters per second, that the client device is traveling. alt (optional): The altitude of the client device, in meters. are (optional): The radius, in meters, that specifies the vertical accuracy of the coordinates. Specify this key only if you specify the alt key. Although many of the keys are optional, the more information that you provide, the more accurate the location results are. Although optional, you are encouraged to always specify the user's geographical location. Providing the location is especially important if the client's IP address does not accurately reflect the user's physical location (for example, if the client uses VPN). For optimal results, you should include this header and the X-MSEdge-ClientIP header, but at a minimum, you should include this header.
  * aspect `string` (values: All, Square, Wide, Tall): Filter images by the following aspect ratios. All: Do not filter by aspect.Specifying this value is the same as not specifying the aspect parameter. Square: Return images with standard aspect ratio. Wide: Return images with wide screen aspect ratio. Tall: Return images with tall aspect ratio.
  * color `string` (values: ColorOnly, Monochrome, Black, Blue, Brown, Gray, Green, Orange, Pink, Purple, Red, Teal, White, Yellow): Filter images by the following color options. ColorOnly: Return color images. Monochrome: Return black and white images. Return images with one of the following dominant colors: Black, Blue, Brown, Gray, Green, Orange, Pink, Purple, Red, Teal, White, Yellow
  * cc `string`: A 2-character country code of the country where the results come from. For a list of possible values, see [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#market-codes). If you set this parameter, you must also specify the [Accept-Language](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#acceptlanguage) header. Bing uses the first supported language it finds from the languages list, and combine that language with the country code that you specify to determine the market to return results for. If the languages list does not include a supported language, Bing finds the closest language and market that supports the request, or it may use an aggregated or default market for the results instead of a specified one. You should use this query parameter and the Accept-Language query parameter only if you specify multiple languages; otherwise, you should use the mkt and setLang query parameters. This parameter and the [mkt](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#mkt) query parameter are mutually exclusive—do not specify both.
  * count `integer`: The number of images to return in the response. The actual number delivered may be less than requested. The default is 35. The maximum value is 150. You use this parameter along with the offset parameter to page results.For example, if your user interface displays 20 images per page, set count to 20 and offset to 0 to get the first page of results.For each subsequent page, increment offset by 20 (for example, 0, 20, 40). Use this parameter only with the Image Search API.Do not specify this parameter when calling the Insights, Trending Images, or Web Search APIs.
  * freshness `string` (values: Day, Week, Month): Filter images by the following discovery options. Day: Return images discovered by Bing within the last 24 hours. Week: Return images discovered by Bing within the last 7 days. Month: Return images discovered by Bing within the last 30 days.
  * height `integer`: Filter images that have the specified height, in pixels. You may use this filter with the size filter to return small images that have a height of 150 pixels.
  * id `string`: An ID that uniquely identifies an image. Use this parameter to ensure that the specified image is the first image in the list of images that Bing returns. The [Image](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#image) object's imageId field contains the ID that you set this parameter to.
  * imageContent `string` (values: Face, Portrait): Filter images by the following content types. Face: Return images that show only a person's face. Portrait: Return images that show only a person's head and shoulders.
  * imageType `string` (values: AnimatedGif, Clipart, Line, Photo, Shopping, Transparent): Filter images by the following image types. AnimatedGif: Return only animated GIFs. Clipart: Return only clip art images. Line: Return only line drawings. Photo: Return only photographs(excluding line drawings, animated Gifs, and clip art). Shopping: Return only images that contain items where Bing knows of a merchant that is selling the items. This option is valid in the en - US market only.Transparent: Return only images with a transparent background.
  * license `string` (values: All, Any, Public, Share, ShareCommercially, Modify, ModifyCommercially): Filter images by the following license types. All: Do not filter by license type.Specifying this value is the same as not specifying the license parameter. Any: Return images that are under any license type. The response doesn't include images that do not specify a license or the license is unknown. Public: Return images where the creator has waived their exclusive rights, to the fullest extent allowed by law. Share: Return images that may be shared with others. Changing or editing the image might not be allowed. Also, modifying, sharing, and using the image for commercial purposes might not be allowed. Typically, this option returns the most images. ShareCommercially: Return images that may be shared with others for personal or commercial purposes. Changing or editing the image might not be allowed. Modify: Return images that may be modified, shared, and used. Changing or editing the image might not be allowed. Modifying, sharing, and using the image for commercial purposes might not be allowed. ModifyCommercially: Return images that may be modified, shared, and used for personal or commercial purposes. Typically, this option returns the fewest images. For more information about these license types, see [Filter Images By License Type](http://go.microsoft.com/fwlink/?LinkId=309768).
  * mkt `string`: The market where the results come from. Typically, mkt is the country where the user is making the request from. However, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form <language code>-<country code>. For example, en-US. The string is case insensitive. For a list of possible market values, see [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#market-codes). NOTE: If known, you are encouraged to always specify the market. Specifying the market helps Bing route the request and return an appropriate and optimal response. If you specify a market that is not listed in [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#market-codes), Bing uses a best fit market code based on an internal mapping that is subject to change. This parameter and the [cc](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#cc) query parameter are mutually exclusive—do not specify both.
  * maxFileSize `integer`: Filter images that are less than or equal to the specified file size. The maximum file size that you may specify is 520,192 bytes. If you specify a larger value, the API uses 520,192. It is possible that the response may include images that are slightly larger than the specified maximum. You may specify this filter and minFileSize to filter images within a range of file sizes.
  * maxHeight `integer`: Filter images that have a height that is less than or equal to the specified height. Specify the height in pixels. You may specify this filter and minHeight to filter images within a range of heights. This filter and the height filter are mutually exclusive.
  * maxWidth `integer`: Filter images that have a width that is less than or equal to the specified width. Specify the width in pixels. You may specify this filter and maxWidth to filter images within a range of widths. This filter and the width filter are mutually exclusive.
  * minFileSize `integer`: Filter images that are greater than or equal to the specified file size. The maximum file size that you may specify is 520,192 bytes. If you specify a larger value, the API uses 520,192. It is possible that the response may include images that are slightly smaller than the specified minimum. You may specify this filter and maxFileSize to filter images within a range of file sizes.
  * minHeight `integer`: Filter images that have a height that is greater than or equal to the specified height. Specify the height in pixels. You may specify this filter and maxHeight to filter images within a range of heights. This filter and the height filter are mutually exclusive.
  * minWidth `integer`: Filter images that have a width that is greater than or equal to the specified width. Specify the width in pixels. You may specify this filter and maxWidth to filter images within a range of widths. This filter and the width filter are mutually exclusive.
  * offset `integer`: The zero-based offset that indicates the number of images to skip before returning images. The default is 0. The offset should be less than ([totalEstimatedMatches](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#totalestimatedmatches) - count). Use this parameter along with the count parameter to page results. For example, if your user interface displays 20 images per page, set count to 20 and offset to 0 to get the first page of results. For each subsequent page, increment offset by 20 (for example, 0, 20, 40). It is possible for multiple pages to include some overlap in results. To prevent duplicates, see [nextOffset](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#nextoffset). Use this parameter only with the Image API. Do not specify this parameter when calling the Trending Images API or the Web Search API.
  * q **required** `string`: The user's search query term. The term cannot be empty. The term may contain [Bing Advanced Operators](http://msdn.microsoft.com/library/ff795620.aspx). For example, to limit images to a specific domain, use the [site:](http://msdn.microsoft.com/library/ff795613.aspx) operator. To help improve relevance of an insights query (see [insightsToken](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#insightstoken)), you should always include the user's query term. Use this parameter only with the Image Search API.Do not specify this parameter when calling the Trending Images API.
  * safeSearch `string` (values: Off, Moderate, Strict): Filter images for adult content. The following are the possible filter values. Off: May return images with adult content. If the request is through the Image Search API, the response includes thumbnail images that are clear (non-fuzzy). However, if the request is through the Web Search API, the response includes thumbnail images that are pixelated (fuzzy). Moderate: If the request is through the Image Search API, the response doesn't include images with adult content. If the request is through the Web Search API, the response may include images with adult content (the thumbnail images are pixelated (fuzzy)). Strict: Do not return images with adult content. The default is Moderate. If the request comes from a market that Bing's adult policy requires that safeSearch is set to Strict, Bing ignores the safeSearch value and uses Strict. If you use the site: query operator, there is the chance that the response may contain adult content regardless of what the safeSearch query parameter is set to. Use site: only if you are aware of the content on the site and your scenario supports the possibility of adult content.
  * size `string` (values: All, Small, Medium, Large, Wallpaper): Filter images by the following sizes. All: Do not filter by size. Specifying this value is the same as not specifying the size parameter. Small: Return images that are less than 200x200 pixels. Medium: Return images that are greater than or equal to 200x200 pixels but less than 500x500 pixels. Large: Return images that are 500x500 pixels or larger. Wallpaper: Return wallpaper images. You may use this parameter along with the height or width parameters. For example, you may use height and size to request small images that are 150 pixels tall.
  * setLang `string`: The language to use for user interface strings. Specify the language using the ISO 639-1 2-letter language code. For example, the language code for English is EN. The default is EN (English). Although optional, you should always specify the language. Typically, you set setLang to the same language specified by mkt unless the user wants the user interface strings displayed in a different language. This parameter and the [Accept-Language](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#acceptlanguage) header are mutually exclusive; do not specify both. A user interface string is a string that's used as a label in a user interface. There are few user interface strings in the JSON response objects. Also, any links to Bing.com properties in the response objects apply the specified language.
  * width `integer`: Filter images that have the specified width, in pixels. You may use this filter with the size filter to return small images that have a width of 150 pixels.

#### Output
* output [Images](#images)

### Images_Trending
The Image Trending Search API lets you search on Bing and get back a list of images that are trending based on search requests made by others. The images are broken out into different categories. For example, Popular People Searches. For a list of markets that support trending images, see [Trending Images](https://docs.microsoft.com/en-us/azure/cognitive-services/bing-image-search/trending-images).


```js
microsoft_cognitiveservices_imagesearch.Images_Trending({
  "X-BingApis-SDK": ""
}, context)
```

#### Input
* input `object`
  * X-BingApis-SDK **required** `string` (values: true): Activate swagger compliance
  * Accept `string`: The default media type is application/json. To specify that the response use [JSON-LD](http://json-ld.org/), set the Accept header to application/ld+json.
  * Accept-Language `string`: A comma-delimited list of one or more languages to use for user interface strings. The list is in decreasing order of preference. For additional information, including expected format, see [RFC2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html). This header and the [setLang](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#setlang) query parameter are mutually exclusive; do not specify both. If you set this header, you must also specify the [cc](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#cc) query parameter. To determine the market to return results for, Bing uses the first supported language it finds from the list and combines it with the cc parameter value. If the list does not include a supported language, Bing finds the closest language and market that supports the request or it uses an aggregated or default market for the results. To determine the market that Bing used, see the BingAPIs-Market header. Use this header and the cc query parameter only if you specify multiple languages. Otherwise, use the [mkt](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#mkt) and [setLang](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#setlang) query parameters. A user interface string is a string that's used as a label in a user interface. There are few user interface strings in the JSON response objects. Any links to Bing.com properties in the response objects apply the specified language.
  * User-Agent `string`: The user agent originating the request. Bing uses the user agent to provide mobile users with an optimized experience. Although optional, you are encouraged to always specify this header. The user-agent should be the same string that any commonly used browser sends. For information about user agents, see [RFC 2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html). The following are examples of user-agent strings. Windows Phone: Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 822). Android: Mozilla / 5.0 (Linux; U; Android 2.3.5; en - us; SCH - I500 Build / GINGERBREAD) AppleWebKit / 533.1 (KHTML; like Gecko) Version / 4.0 Mobile Safari / 533.1. iPhone: Mozilla / 5.0 (iPhone; CPU iPhone OS 6_1 like Mac OS X) AppleWebKit / 536.26 (KHTML; like Gecko) Mobile / 10B142 iPhone4; 1 BingWeb / 3.03.1428.20120423. PC: Mozilla / 5.0 (Windows NT 6.3; WOW64; Trident / 7.0; Touch; rv:11.0) like Gecko. iPad: Mozilla / 5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit / 537.51.1 (KHTML, like Gecko) Version / 7.0 Mobile / 11A465 Safari / 9537.53
  * X-MSEdge-ClientID `string`: Bing uses this header to provide users with consistent behavior across Bing API calls. Bing often flights new features and improvements, and it uses the client ID as a key for assigning traffic on different flights. If you do not use the same client ID for a user across multiple requests, then Bing may assign the user to multiple conflicting flights. Being assigned to multiple conflicting flights can lead to an inconsistent user experience. For example, if the second request has a different flight assignment than the first, the experience may be unexpected. Also, Bing can use the client ID to tailor web results to that client ID’s search history, providing a richer experience for the user. Bing also uses this header to help improve result rankings by analyzing the activity generated by a client ID. The relevance improvements help with better quality of results delivered by Bing APIs and in turn enables higher click-through rates for the API consumer. IMPORTANT: Although optional, you should consider this header required. Persisting the client ID across multiple requests for the same end user and device combination enables 1) the API consumer to receive a consistent user experience, and 2) higher click-through rates via better quality of results from the Bing APIs. Each user that uses your application on the device must have a unique, Bing generated client ID. If you do not include this header in the request, Bing generates an ID and returns it in the X-MSEdge-ClientID response header. The only time that you should NOT include this header in a request is the first time the user uses your app on that device. Use the client ID for each Bing API request that your app makes for this user on the device. Persist the client ID. To persist the ID in a browser app, use a persistent HTTP cookie to ensure the ID is used across all sessions. Do not use a session cookie. For other apps such as mobile apps, use the device's persistent storage to persist the ID. The next time the user uses your app on that device, get the client ID that you persisted. Bing responses may or may not include this header. If the response includes this header, capture the client ID and use it for all subsequent Bing requests for the user on that device. If you include the X-MSEdge-ClientID, you must not include cookies in the request.
  * X-MSEdge-ClientIP `string`: The IPv4 or IPv6 address of the client device. The IP address is used to discover the user's location. Bing uses the location information to determine safe search behavior. Although optional, you are encouraged to always specify this header and the X-Search-Location header. Do not obfuscate the address (for example, by changing the last octet to 0). Obfuscating the address results in the location not being anywhere near the device's actual location, which may result in Bing serving erroneous results.
  * X-Search-Location `string`: A semicolon-delimited list of key/value pairs that describe the client's geographical location. Bing uses the location information to determine safe search behavior and to return relevant local content. Specify the key/value pair as <key>:<value>. The following are the keys that you use to specify the user's location. lat (required): The latitude of the client's location, in degrees. The latitude must be greater than or equal to -90.0 and less than or equal to +90.0. Negative values indicate southern latitudes and positive values indicate northern latitudes. long (required): The longitude of the client's location, in degrees. The longitude must be greater than or equal to -180.0 and less than or equal to +180.0. Negative values indicate western longitudes and positive values indicate eastern longitudes. re (required): The radius, in meters, which specifies the horizontal accuracy of the coordinates. Pass the value returned by the device's location service. Typical values might be 22m for GPS/Wi-Fi, 380m for cell tower triangulation, and 18,000m for reverse IP lookup. ts (optional): The UTC UNIX timestamp of when the client was at the location. (The UNIX timestamp is the number of seconds since January 1, 1970.) head (optional): The client's relative heading or direction of travel. Specify the direction of travel as degrees from 0 through 360, counting clockwise relative to true north. Specify this key only if the sp key is nonzero. sp (optional): The horizontal velocity (speed), in meters per second, that the client device is traveling. alt (optional): The altitude of the client device, in meters. are (optional): The radius, in meters, that specifies the vertical accuracy of the coordinates. Specify this key only if you specify the alt key. Although many of the keys are optional, the more information that you provide, the more accurate the location results are. Although optional, you are encouraged to always specify the user's geographical location. Providing the location is especially important if the client's IP address does not accurately reflect the user's physical location (for example, if the client uses VPN). For optimal results, you should include this header and the X-MSEdge-ClientIP header, but at a minimum, you should include this header.
  * cc `string`: A 2-character country code of the country where the results come from. This API supports only the United States, Canada, Australia, and China markets. If you specify this query parameter, it must be set to us, ca, au, or cn. If you set this parameter, you must also specify the Accept-Language header. Bing uses the first supported language it finds from the languages list, and combine that language with the country code that you specify to determine the market to return results for. If the languages list does not include a supported language, Bing finds the closest language and market that supports the request, or it may use an aggregated or default market for the results instead of a specified one. You should use this query parameter and the Accept-Language query parameter only if you specify multiple languages; otherwise, you should use the mkt and setLang query parameters. This parameter and the mkt query parameter are mutually exclusive—do not specify both.
  * mkt `string`: The market where the results come from. Typically, mkt is the country where the user is making the request from. However, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form <language code>-<country code>. For example, en-US. The string is case insensitive. For a list of possible market values, see [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#market-codes). NOTE: If known, you are encouraged to always specify the market. Specifying the market helps Bing route the request and return an appropriate and optimal response. If you specify a market that is not listed in [Market Codes](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#market-codes), Bing uses a best fit market code based on an internal mapping that is subject to change. This parameter and the [cc](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#cc) query parameter are mutually exclusive—do not specify both.
  * safeSearch `string` (values: Off, Moderate, Strict): Filter images for adult content. The following are the possible filter values. Off: May return images with adult content. If the request is through the Image Search API, the response includes thumbnail images that are clear (non-fuzzy). However, if the request is through the Web Search API, the response includes thumbnail images that are pixelated (fuzzy). Moderate: If the request is through the Image Search API, the response doesn't include images with adult content. If the request is through the Web Search API, the response may include images with adult content (the thumbnail images are pixelated (fuzzy)). Strict: Do not return images with adult content. The default is Moderate. If the request comes from a market that Bing's adult policy requires that safeSearch is set to Strict, Bing ignores the safeSearch value and uses Strict. If you use the site: query operator, there is the chance that the response may contain adult content regardless of what the safeSearch query parameter is set to. Use site: only if you are aware of the content on the site and your scenario supports the possibility of adult content.
  * setLang `string`: The language to use for user interface strings. Specify the language using the ISO 639-1 2-letter language code. For example, the language code for English is EN. The default is EN (English). Although optional, you should always specify the language. Typically, you set setLang to the same language specified by mkt unless the user wants the user interface strings displayed in a different language. This parameter and the [Accept-Language](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#acceptlanguage) header are mutually exclusive; do not specify both. A user interface string is a string that's used as a label in a user interface. There are few user interface strings in the JSON response objects. Also, any links to Bing.com properties in the response objects apply the specified language.

#### Output
* output [TrendingImages](#trendingimages)



## Definitions

### AggregateOffer
* AggregateOffer `object`: Defines a list of offers from merchants that are related to the image.
  * offers `array`: A list of offers from merchants that have offerings related to the image.
    * items [Offer](#offer)
  * aggregateRating [AggregateRating](#aggregaterating)
  * availability `string` (values: Discontinued, InStock, InStoreOnly, LimitedAvailability, OnlineOnly, OutOfStock, PreOrder, SoldOut): The item's availability. The following are the possible values: Discontinued, InStock, InStoreOnly, LimitedAvailability, OnlineOnly, OutOfStock, PreOrder, SoldOut
  * lastUpdated `string`: The last date that the offer was updated. The date is in the form YYYY-MM-DD.
  * price `number`: The item's price.
  * priceCurrency `string` (values: USD, CAD, GBP, EUR, COP, JPY, CNY, AUD, INR, AED, AFN, ALL, AMD, ANG, AOA, ARS, AWG, AZN, BAM, BBD, BDT, BGN, BHD, BIF, BMD, BND, BOB, BOV, BRL, BSD, BTN, BWP, BYR, BZD, CDF, CHE, CHF, CHW, CLF, CLP, COU, CRC, CUC, CUP, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ERN, ETB, FJD, FKP, GEL, GHS, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HRK, HTG, HUF, IDR, ILS, IQD, IRR, ISK, JMD, JOD, KES, KGS, KHR, KMF, KPW, KRW, KWD, KYD, KZT, LAK, LBP, LKR, LRD, LSL, LYD, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MRO, MUR, MVR, MWK, MXN, MXV, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, OMR, PAB, PEN, PGK, PHP, PKR, PLN, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SDG, SEK, SGD, SHP, SLL, SOS, SRD, SSP, STD, SYP, SZL, THB, TJS, TMT, TND, TOP, TRY, TTD, TWD, TZS, UAH, UGX, UYU, UZS, VEF, VND, VUV, WST, XAF, XCD, XOF, XPF, YER, ZAR, ZMW): The monetary currency. For example, USD.
  * seller [Organization](#organization)
  * alternateName `string`: An alias for the item
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource.
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### AggregateRating
* AggregateRating `object`: Defines the metrics that indicate how well an item was rated by others.
  * reviewCount `integer`: The number of times the recipe has been rated or reviewed.
  * bestRating `number`: The highest rated review. The possible values are 1.0 through 5.0.
  * ratingValue **required** `number`: The mean (average) rating. The possible values are 1.0 through 5.0.
  * _type **required** `string`
  * text `string`: Text representation of an item.

### Answer
* Answer `object`: Defines an answer.
  * readLink `string`: The URL that returns this resource.
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### CollectionPage
* CollectionPage `object`: Defines a link to a webpage that contains a collection.
  * datePublished `string`: The date on which the CreativeWork was published.
  * provider `array`: The source of the creative work.
    * items [Thing](#thing)
  * text `string`: Text content of this creative work
  * thumbnailUrl `string`: The URL to a thumbnail of the item.
  * alternateName `string`: An alias for the item
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource.
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### CreativeWork
* CreativeWork `object`: The most generic kind of creative work, including books, movies, photographs, software programs, etc.
  * datePublished `string`: The date on which the CreativeWork was published.
  * provider `array`: The source of the creative work.
    * items [Thing](#thing)
  * text `string`: Text content of this creative work
  * thumbnailUrl `string`: The URL to a thumbnail of the item.
  * alternateName `string`: An alias for the item
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource.
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
  * readLink `string`: The URL that returns this resource.
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### Identifiable
* Identifiable `object`: Defines the identity of a resource.
  * id `string`: A String identifier.
  * _type **required** `string`

### ImageGallery
* ImageGallery `object`: Defines a link to a webpage that contains a collection of related images.
  * followersCount `integer`: The number of users on the social network that follow the creator.
  * imagesCount `integer`: The number of related images found in the collection.
  * source `string`: The publisher or social network where the images were found. You must attribute the publisher as the source where the collection was found.
  * datePublished `string`: The date on which the CreativeWork was published.
  * provider `array`: The source of the creative work.
    * items [Thing](#thing)
  * text `string`: Text content of this creative work
  * thumbnailUrl `string`: The URL to a thumbnail of the item.
  * alternateName `string`: An alias for the item
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource.
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### ImageInsights
* ImageInsights `object`: The top-level object that the response includes when an image insights request succeeds. For information about requesting image insights, see the [insightsToken](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#insightstoken) query parameter. The modules query parameter affects the fields that Bing includes in the response. If you set [modules](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#modulesrequested) to only Caption, then this object includes only the imageCaption field.
  * bestRepresentativeQuery [Query](#query)
  * imageCaption [ImageInsightsImageCaption](#imageinsightsimagecaption)
  * imageInsightsToken `string`: A token that you use in a subsequent call to the Image Search API to get more information about the image. For information about using this token, see the insightsToken query parameter. This token has the same usage as the token in the Image object.
  * imageTags [ImageTagsModule](#imagetagsmodule)
  * pagesIncluding [ImagesModule](#imagesmodule)
  * recipes [RecipesModule](#recipesmodule)
  * recognizedEntityGroups [RecognizedEntitiesModule](#recognizedentitiesmodule)
  * relatedCollections [RelatedCollectionsModule](#relatedcollectionsmodule)
  * relatedSearches [RelatedSearchesModule](#relatedsearchesmodule)
  * shoppingSources [AggregateOffer](#aggregateoffer)
  * visuallySimilarImages [ImagesModule](#imagesmodule)
  * visuallySimilarProducts [ImagesModule](#imagesmodule)
  * readLink `string`: The URL that returns this resource.
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### ImageInsightsImageCaption
* ImageInsightsImageCaption `object`: Defines an image's caption.
  * caption **required** `string`: A caption about the image.
  * dataSourceUrl **required** `string`: The URL to the website where the caption was found. You must attribute the caption to the source. For example, by displaying the domain name from the URL next to the caption and using the URL to link to the source website.
  * relatedSearches **required** `array`: A list of entities found in the caption. Use the contents of the Query object to find the entity in the caption and create a link. The link takes the user to images of the entity.
    * items [Query](#query)

### ImageObject
* ImageObject `object`: Defines an image
  * accentColor `string`: A three-byte hexadecimal number that represents the color that dominates the image. Use the color as the temporary background in your client until the image is loaded.
  * imageId `string`: Unique Id for the image
  * imageInsightsToken `string`: The token that you use in a subsequent call to the Image Search API to get additional information about the image. For information about using this token, see the insightsToken query parameter.
  * insightsMetadata [ImagesImageMetadata](#imagesimagemetadata)
  * thumbnail [ImageObject](#imageobject)
  * visualWords `string`: Visual representation of the image. Used for getting more sizes
  * contentSize `string`: Size of the media object content (use format "value unit" e.g "1024 B").
  * contentUrl `string`: Original URL to retrieve the source (file) for the media object (e.g the source URL for the image).
  * encodingFormat `string`: Encoding format (e.g mp3, mp4, jpeg, etc).
  * height `integer`: The height of the source media object, in pixels.
  * hostPageDisplayUrl `string`: Display URL of the page that hosts the media object.
  * hostPageUrl `string`: URL of the page that hosts the media object.
  * width `integer`: The width of the source media object, in pixels.
  * datePublished `string`: The date on which the CreativeWork was published.
  * provider `array`: The source of the creative work.
    * items [Thing](#thing)
  * text `string`: Text content of this creative work
  * thumbnailUrl `string`: The URL to a thumbnail of the item.
  * alternateName `string`: An alias for the item
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource.
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### ImageTagsModule
* ImageTagsModule `object`: Defines the characteristics of content found in an image.
  * value **required** `array`: A list of tags that describe the characteristics of the content found in the image. For example, if the image is of a musical artist, the list might include Female, Dress, and Music to indicate the person is female music artist that's wearing a dress.
    * items [InsightsTag](#insightstag)

### Images
* Images `object`: Defines an image answer
  * nextOffset `integer`: Used as part of deduping. Tells client the next offset that client should use in the next pagination request
  * pivotSuggestions `array`: A list of segments in the original query. For example, if the query was Red Flowers, Bing might segment the query into Red and Flowers. The Flowers pivot may contain query suggestions such as Red Peonies and Red Daisies, and the Red pivot may contain query suggestions such as Green Flowers and Yellow Flowers.
    * items [PivotSuggestions](#pivotsuggestions)
  * queryExpansions `array`: A list of expanded queries that narrows the original query. For example, if the query was Microsoft Surface, the expanded queries might be: Microsoft Surface Pro 3, Microsoft Surface RT, Microsoft Surface Phone, and Microsoft Surface Hub.
    * items [Query](#query)
  * similarTerms `array`: A list of terms that are similar in meaning to the user's query term.
    * items [Query](#query)
  * value **required** `array`: A list of image objects that are relevant to the query. If there are no results, the List is empty.
    * items [ImageObject](#imageobject)
  * totalEstimatedMatches `integer`: The estimated number of webpages that are relevant to the query. Use this number along with the count and offset query parameters to page the results.
  * readLink `string`: The URL that returns this resource.
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### ImagesImageMetadata
* ImagesImageMetadata `object`: Defines a count of the number of websites where you can shop or perform other actions related to the image.
  * aggregateOffer [AggregateOffer](#aggregateoffer)
  * recipeSourcesCount `integer`: The number of websites that offer recipes of the food seen in the image.
  * shoppingSourcesCount `integer`: The number of websites that offer goods of the products seen in the image.

### ImagesModule
* ImagesModule `object`: Defines a list of images.
  * value `array`: A list of images.
    * items [ImageObject](#imageobject)

### InsightsTag
* InsightsTag `object`: Defines a characteristic of the content found in the image.
  * name `string`: The name of the characteristic. For example, cat, kitty, calico cat.

### Intangible
* Intangible `object`: A utility class that serves as the umbrella for a number of 'intangible' things such as quantities, structured values, etc.
  * alternateName `string`: An alias for the item
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource.
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### MediaObject
* MediaObject `object`: Defines a media object.
  * contentSize `string`: Size of the media object content (use format "value unit" e.g "1024 B").
  * contentUrl `string`: Original URL to retrieve the source (file) for the media object (e.g the source URL for the image).
  * encodingFormat `string`: Encoding format (e.g mp3, mp4, jpeg, etc).
  * height `integer`: The height of the source media object, in pixels.
  * hostPageDisplayUrl `string`: Display URL of the page that hosts the media object.
  * hostPageUrl `string`: URL of the page that hosts the media object.
  * width `integer`: The width of the source media object, in pixels.
  * datePublished `string`: The date on which the CreativeWork was published.
  * provider `array`: The source of the creative work.
    * items [Thing](#thing)
  * text `string`: Text content of this creative work
  * thumbnailUrl `string`: The URL to a thumbnail of the item.
  * alternateName `string`: An alias for the item
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource.
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### NormalizedRectangle
* NormalizedRectangle `object`: Defines a region of an image. The region is defined by the coordinates of the top, left corner and bottom, right corner of the region. The coordinates are fractional values of the original image's width and height in the range 0.0 through 1.0.
  * bottom **required** `number`: The bottom coordinate
  * left **required** `number`: The left coordinate.
  * right **required** `number`: The right coordinate
  * top **required** `number`: The top coordinate
  * alternateName `string`: An alias for the item
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource.
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### Offer
* Offer `object`: Defines a merchant's offer.
  * aggregateRating [AggregateRating](#aggregaterating)
  * availability `string` (values: Discontinued, InStock, InStoreOnly, LimitedAvailability, OnlineOnly, OutOfStock, PreOrder, SoldOut): The item's availability. The following are the possible values: Discontinued, InStock, InStoreOnly, LimitedAvailability, OnlineOnly, OutOfStock, PreOrder, SoldOut
  * lastUpdated `string`: The last date that the offer was updated. The date is in the form YYYY-MM-DD.
  * price `number`: The item's price.
  * priceCurrency `string` (values: USD, CAD, GBP, EUR, COP, JPY, CNY, AUD, INR, AED, AFN, ALL, AMD, ANG, AOA, ARS, AWG, AZN, BAM, BBD, BDT, BGN, BHD, BIF, BMD, BND, BOB, BOV, BRL, BSD, BTN, BWP, BYR, BZD, CDF, CHE, CHF, CHW, CLF, CLP, COU, CRC, CUC, CUP, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ERN, ETB, FJD, FKP, GEL, GHS, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HRK, HTG, HUF, IDR, ILS, IQD, IRR, ISK, JMD, JOD, KES, KGS, KHR, KMF, KPW, KRW, KWD, KYD, KZT, LAK, LBP, LKR, LRD, LSL, LYD, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MRO, MUR, MVR, MWK, MXN, MXV, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, OMR, PAB, PEN, PGK, PHP, PKR, PLN, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SDG, SEK, SGD, SHP, SLL, SOS, SRD, SSP, STD, SYP, SZL, THB, TJS, TMT, TND, TOP, TRY, TTD, TWD, TZS, UAH, UGX, UYU, UZS, VEF, VND, VUV, WST, XAF, XCD, XOF, XPF, YER, ZAR, ZMW): The monetary currency. For example, USD.
  * seller [Organization](#organization)
  * alternateName `string`: An alias for the item
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource.
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
  * readLink `string`: The URL that returns this resource.
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### Person
* Person `object`: Defines a person.
  * jobTitle `string`: The person's job title.
  * twitterProfile `string`: The URL of the person's twitter profile.
  * alternateName `string`: An alias for the item
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource.
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### PivotSuggestions
* PivotSuggestions `object`: Defines the pivot segment.
  * pivot **required** `string`: The segment from the original query to pivot on.
  * suggestions **required** `array`: A list of suggested queries for the pivot.
    * items [Query](#query)

### PropertiesItem
* PropertiesItem `object`: Defines an item.
  * _type **required** `string`
  * text `string`: Text representation of an item.

### Query
* Query `object`: Defines a search query.
  * displayText `string`: The display version of the query term. This version of the query term may contain special characters that highlight the search term found in the query string. The string contains the highlighting characters only if the query enabled hit highlighting
  * searchLink `string`: The URL that you use to get the results of the related search. Before using the URL, you must append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header. Use this URL if you're displaying the results in your own user interface. Otherwise, use the webSearchUrl URL.
  * text **required** `string`: The query string. Use this string as the query term in a new search request.
  * thumbnail [ImageObject](#imageobject)
  * webSearchUrl `string`: The URL that takes the user to the Bing search results page for the query.Only related search results include this field.

### Rating
* Rating `object`: Defines a rating.
  * bestRating `number`: The highest rated review. The possible values are 1.0 through 5.0.
  * ratingValue **required** `number`: The mean (average) rating. The possible values are 1.0 through 5.0.
  * _type **required** `string`
  * text `string`: Text representation of an item.

### Recipe
* Recipe `object`: Defines a cooking recipe.
  * cookTime `string`: The amount of time the food takes to cook. For example, PT25M. For information about the time format, see http://en.wikipedia.org/wiki/ISO_8601#Durations.
  * prepTime `string`: The amount of time required to prepare the ingredients. For example, PT15M. For information about the time format, see http://en.wikipedia.org/wiki/ISO_8601#Durations.
  * totalTime `string`: The total amount of time it takes to prepare and cook the recipe. For example, PT45M. For information about the time format, see http://en.wikipedia.org/wiki/ISO_8601#Durations.
  * datePublished `string`: The date on which the CreativeWork was published.
  * provider `array`: The source of the creative work.
    * items [Thing](#thing)
  * text `string`: Text content of this creative work
  * thumbnailUrl `string`: The URL to a thumbnail of the item.
  * alternateName `string`: An alias for the item
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource.
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### RecipesModule
* RecipesModule `object`: Defines a list of recipes.
  * value `array`: A list of recipes.
    * items [Recipe](#recipe)

### RecognizedEntitiesModule
* RecognizedEntitiesModule `object`: Defines a list of previously recognized entities.
  * value `array`: A list of recognized entities.
    * items [RecognizedEntityGroup](#recognizedentitygroup)

### RecognizedEntity
* RecognizedEntity `object`: Defines a recognized entity.
  * entity [Thing](#thing)
  * matchConfidence `number`: The confidence that Bing has that the entity in the image matches this entity. The confidence ranges from 0.0 through 1.0 with 1.0 being very confident.
  * readLink `string`: The URL that returns this resource.
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### RecognizedEntityGroup
* RecognizedEntityGroup `object`: Defines a group of previously recognized entities.
  * name **required** `string`: The name of the group where images of the entity were also found. The following are possible groups. CelebRecognitionAnnotations: Similar to CelebrityAnnotations but provides a higher probability of an accurate match. CelebrityAnnotations: Contains celebrities such as actors, politicians, athletes, and historical figures.
  * recognizedEntityRegions **required** `array`: The regions of the image that contain entities.
    * items [RecognizedEntityRegion](#recognizedentityregion)

### RecognizedEntityRegion
* RecognizedEntityRegion `object`: Defines a region of the image where an entity was found and a list of entities that might match it.
  * matchingEntities `array`: A list of entities that Bing believes match the entity found in the region. The entities are in descending order of confidence (see the matchConfidence field of RecognizedEntity).
    * items [RecognizedEntity](#recognizedentity)
  * region [NormalizedRectangle](#normalizedrectangle)
  * readLink `string`: The URL that returns this resource.
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### RelatedCollectionsModule
* RelatedCollectionsModule `object`: Defines a list of webpages that contain related images.
  * value `array`: A list of webpages that contain related images.
    * items [ImageGallery](#imagegallery)

### RelatedSearchesModule
* RelatedSearchesModule `object`: Defines a list of related searches.
  * value `array`: A list of related searches.
    * items [Query](#query)

### Response
* Response `object`: Defines a response. All schemas that could be returned at the root of a response should inherit from this
  * readLink `string`: The URL that returns this resource.
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### ResponseBase
* ResponseBase `object`: Response base
  * _type **required** `string`

### SearchResultsAnswer
* SearchResultsAnswer `object`: Defines a search result answer.
  * totalEstimatedMatches `integer`: The estimated number of webpages that are relevant to the query. Use this number along with the count and offset query parameters to page the results.
  * readLink `string`: The URL that returns this resource.
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### StructuredValue
* StructuredValue `object`
  * alternateName `string`: An alias for the item
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource.
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
  * readLink `string`: The URL that returns this resource.
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### TrendingImages
* TrendingImages `object`: The top-level object that the response includes when a trending images request succeeds.
  * categories **required** `array`: A list that identifies categories of images and a list of trending images in that category.
    * items [TrendingImagesCategory](#trendingimagescategory)
  * readLink `string`: The URL that returns this resource.
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`

### TrendingImagesCategory
* TrendingImagesCategory `object`: Defines the category of trending images.
  * tiles **required** `array`: A list of images that are trending in the category. Each tile contains an image and a URL that returns more images of the subject. For example, if the category is Popular People Searches, the image is of a popular person and the URL would return more images of that person.
    * items [TrendingImagesTile](#trendingimagestile)
  * title **required** `string`: The name of the image category. For example, Popular People Searches.

### TrendingImagesTile
* TrendingImagesTile `object`: Defines an image tile.
  * image **required** [ImageObject](#imageobject)
  * query **required** [Query](#query)

### WebPage
* WebPage `object`: Defines a webpage that is relevant to the query.
  * datePublished `string`: The date on which the CreativeWork was published.
  * provider `array`: The source of the creative work.
    * items [Thing](#thing)
  * text `string`: Text content of this creative work
  * thumbnailUrl `string`: The URL to a thumbnail of the item.
  * alternateName `string`: An alias for the item
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource.
  * webSearchUrl `string`: The URL To Bing's search result for this item.
  * id `string`: A String identifier.
  * _type **required** `string`


