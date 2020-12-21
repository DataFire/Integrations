# @datafire/microsoft_cognitiveservices_visualsearch

Client library for Visual Search Client

## Installation and Usage
```bash
npm install --save @datafire/microsoft_cognitiveservices_visualsearch
```
```js
let microsoft_cognitiveservices_visualsearch = require('@datafire/microsoft_cognitiveservices_visualsearch').create({
  apiKeyHeader: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Visual Search API lets you discover insights about an image such as visually similar images, shopping sources, and related searches. The API can also perform text recognition, identify entities (people, places, things), return other topical content for the user to explore, and more. For more information, see [Visual Search Overview](https://docs.microsoft.com/azure/cognitive-services/bing-visual-search/overview).  **NOTE:** To comply with the new EU Copyright Directive in France, the Bing Visual Search API must omit some content from certain EU News sources for French users. The removed content may include thumbnail images and videos, video previews, and snippets which accompany search results from these sources. As a consequence, the Bing APIs may serve fewer results with thumbnail images and videos, video previews, and snippets to French users.

## Actions

### Images_VisualSearch
Visual Search API lets you discover insights about an image such as visually similar images, shopping sources, and related searches. The API can also perform text recognition, identify entities (people, places, things), return other topical content for the user to explore, and more. For more information, see [Visual Search Overview](https://docs.microsoft.com/azure/cognitive-services/bing-visual-search/overview).


```js
microsoft_cognitiveservices_visualsearch.Images_VisualSearch({
  "X-BingApis-SDK": ""
}, context)
```

#### Input
* input `object`
  * X-BingApis-SDK **required** `string` (values: true): Activate swagger compliance.
  * Accept `string`: The default media type is application/json. To specify that the response use [JSON-LD](http://json-ld.org/), set the Accept header to application/ld+json.
  * Accept-Language `string`: A comma-delimited list of one or more languages to use for user interface strings. The list is in decreasing order of preference. For additional information, including expected format, see [RFC2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html). This header and the [setLang](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-visual-search-api-v7-reference#setlang) query parameter are mutually exclusive; do not specify both. If you set this header, you must also specify the [cc](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-visual-search-api-v7-reference#cc) query parameter. To determine the market to return results for, Bing uses the first supported language it finds from the list and combines it with the cc parameter value. If the list does not include a supported language, Bing finds the closest language and market that supports the request or it uses an aggregated or default market for the results. To determine the market that Bing used, see the BingAPIs-Market header. Use this header and the cc query parameter only if you specify multiple languages. Otherwise, use the [mkt](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-visual-search-api-v7-reference#mkt) and [setLang](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-visual-search-api-v7-reference#setlang) query parameters. A user interface string is a string that's used as a label in a user interface. There are few user interface strings in the JSON response objects. Any links to Bing.com properties in the response objects apply the specified language.
  * Content-Type `string`: Must be set to multipart/form-data and include a boundary parameter (for example, multipart/form-data; boundary=<boundary string>). For more details, see [Content form types]( https://docs.microsoft.com/en-us/azure/cognitive-services/bing-visual-search/overview#content-form-types).
  * User-Agent `string`: The user agent originating the request. Bing uses the user agent to provide mobile users with an optimized experience. Although optional, you are encouraged to always specify this header. The user-agent should be the same string that any commonly used browser sends. For information about user agents, see [RFC 2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html). The following are examples of user-agent strings. Windows Phone: Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 822). Android: Mozilla / 5.0 (Linux; U; Android 2.3.5; en - us; SCH - I500 Build / GINGERBREAD) AppleWebKit / 533.1 (KHTML; like Gecko) Version / 4.0 Mobile Safari / 533.1. iPhone: Mozilla / 5.0 (iPhone; CPU iPhone OS 6_1 like Mac OS X) AppleWebKit / 536.26 (KHTML; like Gecko) Mobile / 10B142 iPhone4; 1 BingWeb / 3.03.1428.20120423. PC: Mozilla / 5.0 (Windows NT 6.3; WOW64; Trident / 7.0; Touch; rv:11.0) like Gecko. iPad: Mozilla / 5.0 (iPad; CPU OS 7_0 like Mac OS X) AppleWebKit / 537.51.1 (KHTML, like Gecko) Version / 7.0 Mobile / 11A465 Safari / 9537.53.
  * X-MSEdge-ClientID `string`: Bing uses this header to provide users with consistent behavior across Bing API calls. Bing often flights new features and improvements, and it uses the client ID as a key for assigning traffic on different flights. If you do not use the same client ID for a user across multiple requests, then Bing may assign the user to multiple conflicting flights. Being assigned to multiple conflicting flights can lead to an inconsistent user experience. For example, if the second request has a different flight assignment than the first, the experience may be unexpected. Also, Bing can use the client ID to tailor web results to that client ID’s search history, providing a richer experience for the user. Bing also uses this header to help improve result rankings by analyzing the activity generated by a client ID. The relevance improvements help with better quality of results delivered by Bing APIs and in turn enables higher click-through rates for the API consumer. IMPORTANT: Although optional, you should consider this header required. Persisting the client ID across multiple requests for the same end user and device combination enables 1) the API consumer to receive a consistent user experience, and 2) higher click-through rates via better quality of results from the Bing APIs. Each user that uses your application on the device must have a unique, Bing generated client ID. If you do not include this header in the request, Bing generates an ID and returns it in the X-MSEdge-ClientID response header. The only time that you should NOT include this header in a request is the first time the user uses your app on that device. Use the client ID for each Bing API request that your app makes for this user on the device. Persist the client ID. To persist the ID in a browser app, use a persistent HTTP cookie to ensure the ID is used across all sessions. Do not use a session cookie. For other apps such as mobile apps, use the device's persistent storage to persist the ID. The next time the user uses your app on that device, get the client ID that you persisted. Bing responses may or may not include this header. If the response includes this header, capture the client ID and use it for all subsequent Bing requests for the user on that device. ATTENTION: You must ensure that this Client ID is not linkable to any authenticatable user account information. If you include the X-MSEdge-ClientID, you must not include cookies in the request.
  * X-MSEdge-ClientIP `string`: The IPv4 or IPv6 address of the client device. The IP address is used to discover the user's location. Bing uses the location information to determine safe search behavior. Although optional, you are encouraged to always specify this header and the X-Search-Location header. Do not obfuscate the address (for example, by changing the last octet to 0). Obfuscating the address results in the location not being anywhere near the device's actual location, which may result in Bing serving erroneous results.
  * X-Search-Location `string`: A semicolon-delimited list of key/value pairs that describe the client's geographical location. Bing uses the location information to determine safe search behavior and to return relevant local content. Specify the key/value pair as <key>:<value>. The following are the keys that you use to specify the user's location. lat (required): The latitude of the client's location, in degrees. The latitude must be greater than or equal to -90.0 and less than or equal to +90.0. Negative values indicate southern latitudes and positive values indicate northern latitudes. long (required): The longitude of the client's location, in degrees. The longitude must be greater than or equal to -180.0 and less than or equal to +180.0. Negative values indicate western longitudes and positive values indicate eastern longitudes. re (required): The radius, in meters, which specifies the horizontal accuracy of the coordinates. Pass the value returned by the device's location service. Typical values might be 22m for GPS/Wi-Fi, 380m for cell tower triangulation, and 18,000m for reverse IP lookup. ts (optional): The UTC UNIX timestamp of when the client was at the location. (The UNIX timestamp is the number of seconds since January 1, 1970.) head (optional): The client's relative heading or direction of travel. Specify the direction of travel as degrees from 0 through 360, counting clockwise relative to true north. Specify this key only if the sp key is nonzero. sp (optional): The horizontal velocity (speed), in meters per second, that the client device is traveling. alt (optional): The altitude of the client device, in meters. are (optional): The radius, in meters, that specifies the vertical accuracy of the coordinates. Specify this key only if you specify the alt key. Although many of the keys are optional, the more information that you provide, the more accurate the location results are. Although optional, you are encouraged to always specify the user's geographical location. Providing the location is especially important if the client's IP address does not accurately reflect the user's physical location (for example, if the client uses VPN). For optimal results, you should include this header and the X-MSEdge-ClientIP header, but at a minimum, you should include this header.
  * mkt `string`: The market where the results come from. Typically, mkt is the country where the user is making the request from. However, it could be a different country if the user is not located in a country where Bing delivers results. The market must be in the form <language code>-<country code>. For example, en-US. The string is case insensitive. For a list of possible market values, see [Market Codes](https://docs.microsoft.com/en-us/azure/cognitive-services/bing-visual-search/supported-countries-markets). NOTE: If known, you are encouraged to always specify the market. Specifying the market helps Bing route the request and return an appropriate and optimal response. If you specify a market that is not listed in [Market Codes](https://docs.microsoft.com/en-us/azure/cognitive-services/bing-visual-search/supported-countries-markets), Bing uses a best fit market code based on an internal mapping that is subject to change.
  * safeSearch `string` (values: Off, Moderate, Strict): Filter the image results in actions with type 'VisualSearch' for adult content. The following are the possible filter values. Off: May return images with adult content. Moderate: Do not return images with adult content. Strict: Do not return images with adult content. The default is Moderate. If the request comes from a market that Bing's adult policy requires that safeSearch is set to Strict, Bing ignores the safeSearch value and uses Strict. If you use the site: filter in the knowledge request, there is the chance that the response may contain adult content regardless of what the safeSearch query parameter is set to. Use site: only if you are aware of the content on the site and your scenario supports the possibility of adult content.
  * setLang `string`: The language to use for user interface strings. Specify the language using the ISO 639-1 2-letter language code. For example, the language code for English is EN. The default is EN (English). Although optional, you should always specify the language. Typically, you set setLang to the same language specified by mkt unless the user wants the user interface strings displayed in a different language. A user interface string is a string that's used as a label in a user interface. There are few user interface strings in the JSON response objects. Also, any links to Bing.com properties in the response objects apply the specified language.
  * knowledgeRequest `string`: The form data is a JSON object that identifies the image using an insights token or URL to the image. The object may also include an optional crop area that identifies an area of interest in the image. The insights token and URL are mutually exclusive – do not specify both. You may specify knowledgeRequest form data and image form data in the same request only if knowledgeRequest form data specifies the cropArea field only (it must not include an insights token or URL).
  * image `string`, `object`: The form data is an image binary. The Content-Disposition header's name parameter must be set to "image". You must specify an image binary if you do not use knowledgeRequest form data to specify the image; you may not use both forms to specify an image. You may specify knowledgeRequest form data and image form data in the same request only if knowledgeRequest form data specifies the cropArea field only  (it must not include an insights token or URL).
    * content `string`
    * encoding `string` (values: ascii, utf8, utf16le, base64, binary, hex)
    * contentType `string`
    * filename `string`

#### Output
* output [ImageKnowledge](#imageknowledge)



## Definitions

### Action
* Action `object`: Defines an action.
  * displayName `string`: A display name for the action.
  * isTopAction `boolean`: A Boolean representing whether this result is the top action.
  * result `array`: The result produced in the action.
    * items [Thing](#thing)
  * serviceUrl `string`: Use this URL to get additional data to determine how to take the appropriate action. For example, the serviceUrl might return JSON along with an image URL.
  * datePublished `string`: The date on which the CreativeWork was published.
  * provider `array`: The source of the creative work.
    * items [Thing](#thing)
  * text `string`: Text content of this creative work.
  * thumbnailUrl `string`: The URL to a thumbnail of the item.
  * alternateName `string`: An alias for the item.
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource. To use the URL, append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header.
  * webSearchUrl `string`: The URL to Bing's search result for this item.
  * id `string`: A String identifier.
  * _type `string`

### AggregateOffer
* AggregateOffer `object`: Defines a list of offers from merchants that are related to the image.
  * offers `array`: A list of offers from merchants that have offerings related to the image.
    * items [Offer](#offer)
  * aggregateRating [AggregateRating](#aggregaterating)
  * availability `string` (values: Discontinued, InStock, InStoreOnly, LimitedAvailability, OnlineOnly, OutOfStock, PreOrder, SoldOut): The item's availability. The following are the possible values: Discontinued, InStock, InStoreOnly, LimitedAvailability, OnlineOnly, OutOfStock, PreOrder, SoldOut.
  * lastUpdated `string`: The last date that the offer was updated. The date is in the form YYYY-MM-DD.
  * price `number`: The item's price.
  * priceCurrency `string` (values: USD, CAD, GBP, EUR, COP, JPY, CNY, AUD, INR, AED, AFN, ALL, AMD, ANG, AOA, ARS, AWG, AZN, BAM, BBD, BDT, BGN, BHD, BIF, BMD, BND, BOB, BOV, BRL, BSD, BTN, BWP, BYR, BZD, CDF, CHE, CHF, CHW, CLF, CLP, COU, CRC, CUC, CUP, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ERN, ETB, FJD, FKP, GEL, GHS, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HRK, HTG, HUF, IDR, ILS, IQD, IRR, ISK, JMD, JOD, KES, KGS, KHR, KMF, KPW, KRW, KWD, KYD, KZT, LAK, LBP, LKR, LRD, LSL, LYD, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MRO, MUR, MVR, MWK, MXN, MXV, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, OMR, PAB, PEN, PGK, PHP, PKR, PLN, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SDG, SEK, SGD, SHP, SLL, SOS, SRD, SSP, STD, SYP, SZL, THB, TJS, TMT, TND, TOP, TRY, TTD, TWD, TZS, UAH, UGX, UYU, UZS, VEF, VND, VUV, WST, XAF, XCD, XOF, XPF, YER, ZAR, ZMW): The monetary currency. For example, USD.
  * seller [Organization](#organization)
  * alternateName `string`: An alias for the item.
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource. To use the URL, append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header.
  * webSearchUrl `string`: The URL to Bing's search result for this item.
  * id `string`: A String identifier.
  * _type `string`

### AggregateRating
* AggregateRating `object`: Defines the metrics that indicate how well an item was rated by others.
  * reviewCount `integer`: The number of times the recipe has been rated or reviewed.
  * bestRating `number`: The highest rated review. The possible values are 1.0 through 5.0.
  * ratingValue **required** `number`: The mean (average) rating. The possible values are 1.0 through 5.0.
  * _type **required** `string`
  * text `string`: Text representation of an item.

### CreativeWork
* CreativeWork `object`: The most generic kind of creative work, including books, movies, photographs, software programs, etc.
  * datePublished `string`: The date on which the CreativeWork was published.
  * provider `array`: The source of the creative work.
    * items [Thing](#thing)
  * text `string`: Text content of this creative work.
  * thumbnailUrl `string`: The URL to a thumbnail of the item.
  * alternateName `string`: An alias for the item.
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource. To use the URL, append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header.
  * webSearchUrl `string`: The URL to Bing's search result for this item.
  * id `string`: A String identifier.
  * _type `string`

### CropArea
* CropArea `object`: A JSON object consisting of coordinates specifying the four corners of a cropped rectangle within the input image.
  * bottom **required** `number`: The bottom coordinate of the region to be cropped. The coordinate is a fractional value of the original image's height and is measured from the top edge of the image. Specify the coordinate as a value from 0.0 through 1.0.
  * left **required** `number`: The left coordinate of the region to be cropped. The coordinate is a fractional value of the original image's width and is measured from the left edge of the image. Specify the coordinate as a value from 0.0 through 1.0.
  * right **required** `number`: The right coordinate of the region to be cropped. The coordinate is a fractional value of the original image's width and is measured from the left edge of the image. Specify the coordinate as a value from 0.0 through 1.0.
  * top **required** `number`: The top coordinate of the region to be cropped. The coordinate is a fractional value of the original image's height and is measured from the top edge of the image. Specify the coordinate as a value from 0.0 through 1.0.

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
  * readLink `string`: The URL that returns this resource. To use the URL, append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header.
  * webSearchUrl `string`: The URL to Bing's search result for this item.
  * id `string`: A String identifier.
  * _type `string`

### Filters
* Filters `object`: A key-value object consisting of filters that may be specified to limit the results returned by the API. Current available filters: site.
  * site `string`: The URL of the site to return similar images and similar products from. (e.g., "www.bing.com", "bing.com").

### Identifiable
* Identifiable `object`: Defines the identity of a resource.
  * id `string`: A String identifier.
  * _type `string`

### ImageAction
* ImageAction `object`: Defines an image action.
  * _type `string` (values: ImageEntityAction, ImageModuleAction, ImageRecipesAction, ImageRelatedSearchesAction, ImageShoppingSourcesAction): Specifies the sub-class of the action.
  * actionType `string`: A string representing the type of action.
  * displayName `string`: A display name for the action.
  * isTopAction `boolean`: A Boolean representing whether this result is the top action.
  * result `array`: The result produced in the action.
    * items [Thing](#thing)
  * serviceUrl `string`: Use this URL to get additional data to determine how to take the appropriate action. For example, the serviceUrl might return JSON along with an image URL.
  * datePublished `string`: The date on which the CreativeWork was published.
  * provider `array`: The source of the creative work.
    * items [Thing](#thing)
  * text `string`: Text content of this creative work.
  * thumbnailUrl `string`: The URL to a thumbnail of the item.
  * alternateName `string`: An alias for the item.
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource. To use the URL, append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header.
  * webSearchUrl `string`: The URL to Bing's search result for this item.
  * id `string`: A String identifier.
  * _type `string`

### ImageEntityAction
* ImageEntityAction `object`: Defines an entity action.
  * _type `string` (values: ImageEntityAction, ImageModuleAction, ImageRecipesAction, ImageRelatedSearchesAction, ImageShoppingSourcesAction): Specifies the sub-class of the action.
  * actionType `string`: A string representing the type of action.
  * displayName `string`: A display name for the action.
  * isTopAction `boolean`: A Boolean representing whether this result is the top action.
  * result `array`: The result produced in the action.
    * items [Thing](#thing)
  * serviceUrl `string`: Use this URL to get additional data to determine how to take the appropriate action. For example, the serviceUrl might return JSON along with an image URL.
  * datePublished `string`: The date on which the CreativeWork was published.
  * provider `array`: The source of the creative work.
    * items [Thing](#thing)
  * text `string`: Text content of this creative work.
  * thumbnailUrl `string`: The URL to a thumbnail of the item.
  * alternateName `string`: An alias for the item.
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource. To use the URL, append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header.
  * webSearchUrl `string`: The URL to Bing's search result for this item.
  * id `string`: A String identifier.
  * _type `string`

### ImageInfo
* ImageInfo `object`: A JSON object that identities the image to get insights of . It also includes the optional crop area that you use to identify the region of interest in the image.
  * cropArea [CropArea](#croparea)
  * imageInsightsToken `string`: An image insights token. To get the insights token, call one of the Image Search APIs (for example, /images/search). In the search results, the [Image](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#image) object's [imageInsightsToken](https://docs.microsoft.com/en-us/rest/api/cognitiveservices/bing-images-api-v7-reference#image-imageinsightstoken) field contains the token. The imageInsightsToken and url fields mutually exclusive; do not specify both. Do not specify an insights token if the request includes the image form data.
  * url `string`: The URL of the input image. The imageInsightsToken and url fields are mutually exclusive; do not specify both. Do not specify the URL if the request includes the image form data.

### ImageKnowledge
* ImageKnowledge `object`: Defines a visual search API response.
  * image [ImageObject](#imageobject)
  * tags `array`: A list of visual search tags.
    * items [ImageTag](#imagetag)
  * readLink `string`: The URL that returns this resource. To use the URL, append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header.
  * webSearchUrl `string`: The URL to Bing's search result for this item.
  * id `string`: A String identifier.
  * _type `string`

### ImageModuleAction
* ImageModuleAction `object`: Defines an image list action.
  * data [ImagesModule](#imagesmodule)
  * _type `string` (values: ImageEntityAction, ImageModuleAction, ImageRecipesAction, ImageRelatedSearchesAction, ImageShoppingSourcesAction): Specifies the sub-class of the action.
  * actionType `string`: A string representing the type of action.
  * displayName `string`: A display name for the action.
  * isTopAction `boolean`: A Boolean representing whether this result is the top action.
  * result `array`: The result produced in the action.
    * items [Thing](#thing)
  * serviceUrl `string`: Use this URL to get additional data to determine how to take the appropriate action. For example, the serviceUrl might return JSON along with an image URL.
  * datePublished `string`: The date on which the CreativeWork was published.
  * provider `array`: The source of the creative work.
    * items [Thing](#thing)
  * text `string`: Text content of this creative work.
  * thumbnailUrl `string`: The URL to a thumbnail of the item.
  * alternateName `string`: An alias for the item.
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource. To use the URL, append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header.
  * webSearchUrl `string`: The URL to Bing's search result for this item.
  * id `string`: A String identifier.
  * _type `string`

### ImageObject
* ImageObject `object`: Defines an image.
  * accentColor `string`: A three-byte hexadecimal number that represents the color that dominates the image. Use the color as the temporary background in your client until the image is loaded.
  * imageId `string`: Unique Id for the image.
  * imageInsightsToken `string`: The token that you use in a subsequent call to Visual Search API to get additional information about the image. For information about using this token, see the imageInsightsToken field inside the knowledgeRequest request parameter.
  * insightsMetadata [ImagesImageMetadata](#imagesimagemetadata)
  * thumbnail [ImageObject](#imageobject)
  * visualWords `string`: For internal use only.
  * contentSize `string`: Size of the media object content. Use format "value unit" (e.g., "1024 B").
  * contentUrl `string`: Original URL to retrieve the source (file) for the media object (e.g., the source URL for the image).
  * encodingFormat `string`: Encoding format (e.g., png, gif, jpeg, etc).
  * height `integer`: The height of the media object, in pixels.
  * hostPageDisplayUrl `string`: Display URL of the page that hosts the media object.
  * hostPageUrl `string`: URL of the page that hosts the media object.
  * width `integer`: The width of the media object, in pixels.
  * datePublished `string`: The date on which the CreativeWork was published.
  * provider `array`: The source of the creative work.
    * items [Thing](#thing)
  * text `string`: Text content of this creative work.
  * thumbnailUrl `string`: The URL to a thumbnail of the item.
  * alternateName `string`: An alias for the item.
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource. To use the URL, append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header.
  * webSearchUrl `string`: The URL to Bing's search result for this item.
  * id `string`: A String identifier.
  * _type `string`

### ImageRecipesAction
* ImageRecipesAction `object`: Defines an recipe action.
  * data [RecipesModule](#recipesmodule)
  * _type `string` (values: ImageEntityAction, ImageModuleAction, ImageRecipesAction, ImageRelatedSearchesAction, ImageShoppingSourcesAction): Specifies the sub-class of the action.
  * actionType `string`: A string representing the type of action.
  * displayName `string`: A display name for the action.
  * isTopAction `boolean`: A Boolean representing whether this result is the top action.
  * result `array`: The result produced in the action.
    * items [Thing](#thing)
  * serviceUrl `string`: Use this URL to get additional data to determine how to take the appropriate action. For example, the serviceUrl might return JSON along with an image URL.
  * datePublished `string`: The date on which the CreativeWork was published.
  * provider `array`: The source of the creative work.
    * items [Thing](#thing)
  * text `string`: Text content of this creative work.
  * thumbnailUrl `string`: The URL to a thumbnail of the item.
  * alternateName `string`: An alias for the item.
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource. To use the URL, append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header.
  * webSearchUrl `string`: The URL to Bing's search result for this item.
  * id `string`: A String identifier.
  * _type `string`

### ImageRelatedSearchesAction
* ImageRelatedSearchesAction `object`: Defines an related search action.
  * data [RelatedSearchesModule](#relatedsearchesmodule)
  * _type `string` (values: ImageEntityAction, ImageModuleAction, ImageRecipesAction, ImageRelatedSearchesAction, ImageShoppingSourcesAction): Specifies the sub-class of the action.
  * actionType `string`: A string representing the type of action.
  * displayName `string`: A display name for the action.
  * isTopAction `boolean`: A Boolean representing whether this result is the top action.
  * result `array`: The result produced in the action.
    * items [Thing](#thing)
  * serviceUrl `string`: Use this URL to get additional data to determine how to take the appropriate action. For example, the serviceUrl might return JSON along with an image URL.
  * datePublished `string`: The date on which the CreativeWork was published.
  * provider `array`: The source of the creative work.
    * items [Thing](#thing)
  * text `string`: Text content of this creative work.
  * thumbnailUrl `string`: The URL to a thumbnail of the item.
  * alternateName `string`: An alias for the item.
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource. To use the URL, append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header.
  * webSearchUrl `string`: The URL to Bing's search result for this item.
  * id `string`: A String identifier.
  * _type `string`

### ImageShoppingSourcesAction
* ImageShoppingSourcesAction `object`: Defines a shopping sources action.
  * data [AggregateOffer](#aggregateoffer)
  * _type `string` (values: ImageEntityAction, ImageModuleAction, ImageRecipesAction, ImageRelatedSearchesAction, ImageShoppingSourcesAction): Specifies the sub-class of the action.
  * actionType `string`: A string representing the type of action.
  * displayName `string`: A display name for the action.
  * isTopAction `boolean`: A Boolean representing whether this result is the top action.
  * result `array`: The result produced in the action.
    * items [Thing](#thing)
  * serviceUrl `string`: Use this URL to get additional data to determine how to take the appropriate action. For example, the serviceUrl might return JSON along with an image URL.
  * datePublished `string`: The date on which the CreativeWork was published.
  * provider `array`: The source of the creative work.
    * items [Thing](#thing)
  * text `string`: Text content of this creative work.
  * thumbnailUrl `string`: The URL to a thumbnail of the item.
  * alternateName `string`: An alias for the item.
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource. To use the URL, append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header.
  * webSearchUrl `string`: The URL to Bing's search result for this item.
  * id `string`: A String identifier.
  * _type `string`

### ImageTag
* ImageTag `object`: A visual search tag.
  * actions `array`: Actions within this tag. The order of the items denotes the default ranking order of these actions, with the first action being the most likely user intent.
    * items [ImageAction](#imageaction)
  * boundingBox [ImageTagRegion](#imagetagregion)
  * displayName `string`: Display name for this tag. For the default tag, the display name is empty.
  * alternateName `string`: An alias for the item.
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource. To use the URL, append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header.
  * webSearchUrl `string`: The URL to Bing's search result for this item.
  * id `string`: A String identifier.
  * _type `string`

### ImageTagRegion
* ImageTagRegion `object`: Defines an image region relevant to the ImageTag.
  * displayRectangle **required** [NormalizedQuadrilateral](#normalizedquadrilateral)
  * queryRectangle **required** [NormalizedQuadrilateral](#normalizedquadrilateral)

### ImagesImageMetadata
* ImagesImageMetadata `object`: Defines a count of the number of websites where you can shop or perform other actions related to the image.
  * aggregateOffer [AggregateOffer](#aggregateoffer)
  * recipeSourcesCount `integer`: The number of websites that offer recipes of the food seen in the image.
  * shoppingSourcesCount `integer`: The number of websites that sell the products seen in the image.

### ImagesModule
* ImagesModule `object`: Defines a list of images.
  * value `array`: A list of images.
    * items [ImageObject](#imageobject)

### Intangible
* Intangible `object`: A utility class that serves as the umbrella for a number of 'intangible' things such as quantities, structured values, etc.
  * alternateName `string`: An alias for the item.
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource. To use the URL, append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header.
  * webSearchUrl `string`: The URL to Bing's search result for this item.
  * id `string`: A String identifier.
  * _type `string`

### KnowledgeRequest
* KnowledgeRequest `object`: A JSON object containing information about the request, such as filters for the resulting actions.
  * filters [Filters](#filters)

### MediaObject
* MediaObject `object`: Defines a media object.
  * contentSize `string`: Size of the media object content. Use format "value unit" (e.g., "1024 B").
  * contentUrl `string`: Original URL to retrieve the source (file) for the media object (e.g., the source URL for the image).
  * encodingFormat `string`: Encoding format (e.g., png, gif, jpeg, etc).
  * height `integer`: The height of the media object, in pixels.
  * hostPageDisplayUrl `string`: Display URL of the page that hosts the media object.
  * hostPageUrl `string`: URL of the page that hosts the media object.
  * width `integer`: The width of the media object, in pixels.
  * datePublished `string`: The date on which the CreativeWork was published.
  * provider `array`: The source of the creative work.
    * items [Thing](#thing)
  * text `string`: Text content of this creative work.
  * thumbnailUrl `string`: The URL to a thumbnail of the item.
  * alternateName `string`: An alias for the item.
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource. To use the URL, append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header.
  * webSearchUrl `string`: The URL to Bing's search result for this item.
  * id `string`: A String identifier.
  * _type `string`

### NormalizedQuadrilateral
* NormalizedQuadrilateral `object`: Defines a region of an image. The region is a convex quadrilateral defined by coordinates of its top left, top right, bottom left, and bottom right points. The coordinates are fractional values of the original image's width and height in the range 0.0 through 1.0.
  * bottomLeft **required** [Point2D](#point2d)
  * bottomRight **required** [Point2D](#point2d)
  * topLeft **required** [Point2D](#point2d)
  * topRight **required** [Point2D](#point2d)
  * alternateName `string`: An alias for the item.
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource. To use the URL, append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header.
  * webSearchUrl `string`: The URL to Bing's search result for this item.
  * id `string`: A String identifier.
  * _type `string`

### Offer
* Offer `object`: Defines a merchant's offer.
  * aggregateRating [AggregateRating](#aggregaterating)
  * availability `string` (values: Discontinued, InStock, InStoreOnly, LimitedAvailability, OnlineOnly, OutOfStock, PreOrder, SoldOut): The item's availability. The following are the possible values: Discontinued, InStock, InStoreOnly, LimitedAvailability, OnlineOnly, OutOfStock, PreOrder, SoldOut.
  * lastUpdated `string`: The last date that the offer was updated. The date is in the form YYYY-MM-DD.
  * price `number`: The item's price.
  * priceCurrency `string` (values: USD, CAD, GBP, EUR, COP, JPY, CNY, AUD, INR, AED, AFN, ALL, AMD, ANG, AOA, ARS, AWG, AZN, BAM, BBD, BDT, BGN, BHD, BIF, BMD, BND, BOB, BOV, BRL, BSD, BTN, BWP, BYR, BZD, CDF, CHE, CHF, CHW, CLF, CLP, COU, CRC, CUC, CUP, CVE, CZK, DJF, DKK, DOP, DZD, EGP, ERN, ETB, FJD, FKP, GEL, GHS, GIP, GMD, GNF, GTQ, GYD, HKD, HNL, HRK, HTG, HUF, IDR, ILS, IQD, IRR, ISK, JMD, JOD, KES, KGS, KHR, KMF, KPW, KRW, KWD, KYD, KZT, LAK, LBP, LKR, LRD, LSL, LYD, MAD, MDL, MGA, MKD, MMK, MNT, MOP, MRO, MUR, MVR, MWK, MXN, MXV, MYR, MZN, NAD, NGN, NIO, NOK, NPR, NZD, OMR, PAB, PEN, PGK, PHP, PKR, PLN, PYG, QAR, RON, RSD, RUB, RWF, SAR, SBD, SCR, SDG, SEK, SGD, SHP, SLL, SOS, SRD, SSP, STD, SYP, SZL, THB, TJS, TMT, TND, TOP, TRY, TTD, TWD, TZS, UAH, UGX, UYU, UZS, VEF, VND, VUV, WST, XAF, XCD, XOF, XPF, YER, ZAR, ZMW): The monetary currency. For example, USD.
  * seller [Organization](#organization)
  * alternateName `string`: An alias for the item.
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource. To use the URL, append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header.
  * webSearchUrl `string`: The URL to Bing's search result for this item.
  * id `string`: A String identifier.
  * _type `string`

### Organization
* Organization `object`: Defines an organization.
  * alternateName `string`: An alias for the item.
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource. To use the URL, append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header.
  * webSearchUrl `string`: The URL to Bing's search result for this item.
  * id `string`: A String identifier.
  * _type `string`

### Person
* Person `object`: Defines a person.
  * jobTitle `string`: The person's job title.
  * twitterProfile `string`: The URL of the person's twitter profile.
  * alternateName `string`: An alias for the item.
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource. To use the URL, append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header.
  * webSearchUrl `string`: The URL to Bing's search result for this item.
  * id `string`: A String identifier.
  * _type `string`

### Point2D
* Point2D `object`: Defines a 2D point with X and Y coordinates.
  * x **required** `number`: The x-coordinate of the point.
  * y **required** `number`: The y-coordinate of the point.
  * alternateName `string`: An alias for the item.
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource. To use the URL, append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header.
  * webSearchUrl `string`: The URL to Bing's search result for this item.
  * id `string`: A String identifier.
  * _type `string`

### PropertiesItem
* PropertiesItem `object`: Defines an item.
  * _type **required** `string`
  * text `string`: Text representation of an item.

### Query
* Query `object`: Defines a search query.
  * displayText `string`: The display version of the query term.
  * searchLink `string`: The URL that you use to get the results of the related search. Before using the URL, you must append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header. Use this URL if you're displaying the results in your own user interface. Otherwise, use the webSearchUrl URL.
  * text **required** `string`: The query string. Use this string as the query term in a new search request.
  * thumbnail [ImageObject](#imageobject)
  * webSearchUrl `string`: The URL that takes the user to the Bing search results page for the query.

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
  * text `string`: Text content of this creative work.
  * thumbnailUrl `string`: The URL to a thumbnail of the item.
  * alternateName `string`: An alias for the item.
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource. To use the URL, append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header.
  * webSearchUrl `string`: The URL to Bing's search result for this item.
  * id `string`: A String identifier.
  * _type `string`

### RecipesModule
* RecipesModule `object`: Defines a list of recipes.
  * value `array`: A list of recipes.
    * items [Recipe](#recipe)

### RelatedSearchesModule
* RelatedSearchesModule `object`: Defines a list of related searches.
  * value `array`: A list of related searches.
    * items [Query](#query)

### Response
* Response `object`: Defines a response. All schemas that return at the root of the response must inherit from this object.
  * readLink `string`: The URL that returns this resource. To use the URL, append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header.
  * webSearchUrl `string`: The URL to Bing's search result for this item.
  * id `string`: A String identifier.
  * _type `string`

### ResponseBase
* ResponseBase `object`: Response base.
  * _type `string`

### StructuredValue
* StructuredValue `object`
  * alternateName `string`: An alias for the item.
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource. To use the URL, append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header.
  * webSearchUrl `string`: The URL to Bing's search result for this item.
  * id `string`: A String identifier.
  * _type `string`

### Thing
* Thing `object`: Defines a thing.
  * alternateName `string`: An alias for the item.
  * bingId `string`: An ID that uniquely identifies this item.
  * description `string`: A short description of the item.
  * image [ImageObject](#imageobject)
  * name `string`: The name of the thing represented by this object.
  * url `string`: The URL to get more information about the thing represented by this object.
  * readLink `string`: The URL that returns this resource. To use the URL, append query parameters as appropriate and include the Ocp-Apim-Subscription-Key header.
  * webSearchUrl `string`: The URL to Bing's search result for this item.
  * id `string`: A String identifier.
  * _type `string`

### VisualSearchRequest
* VisualSearchRequest `object`: A JSON object that contains information about the image to get insights of. Specify this object only in a knowledgeRequest form data.
  * imageInfo [ImageInfo](#imageinfo)
  * knowledgeRequest [KnowledgeRequest](#knowledgerequest)


