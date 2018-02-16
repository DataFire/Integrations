# @datafire/link_fish

Client library for link.fish

## Installation and Usage
```bash
npm install --save @datafire/link_fish
```
```js
let link_fish = require('@datafire/link_fish').create({
  username: "",
  password: ""
});

link_fish.Urls.apps.get({
  "url": ""
}).then(data => {
  console.log(data);
});
```

## Description

API to easily extract data from websites.


# Base URL


All URLs referenced in the documentation have the following base:


```
https://api.link.fish
```


The REST API is only served over HTTPS. To ensure data privacy, unencrypted HTTP is not supported.


# Authentication
HTTP requests to the REST API are protected with [HTTP Basic authentication](https://en.wikipedia.org/wiki/Basic_access_authentication). You will use the email address of your link.fish account as the username and your API access token as the password for HTTP Basic authentication.

If you do not have an account yet, go to [https://link.fish/api](https://link.fish/api) and create one first.

You will receive the API access token automatically via email after you signed up. To generate a new token and invalidate the current one log into your link.fish  account at [https://app.link.fish](https://app.link.fish) and go to: "Plugins" -> "API Dashboard"

There you can also see how many credits you used already.


# Errors
The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be JSON in the following format:
```
{

  "status": {HTTP STATUS CODE}
  "message": "{ERROR MESSAGE}"
}
```
Like for example when the authorization is not provided or wrong:
```
{

  "status": 401
  "message": "Unauthorized"
}
```

# Request IDs

Each API request has an associated request identifier. You can find it in the response headers, under X-LF-Request-Id. In case you have problems please provide this identifier that we can help you as good and fast as possible.


Example:
```
X-LF-Request-Id: f7f0036f-5277-421a-b143-f7a151571d18
```


# Item format

The data is by default deeply nested. So if it should be checked if there is an offer with a price, the whole tree has to be checked. To make that simpler, it is also possible to return the data "flat". If selected it will flatten the tree by copying all the data to the main level under a property with the name of its type and link the data internally.

Information: We created a node module which allows converting between the two formats. It did not get open sourced yet. If you are in need, simply contact us via api@link.fish.


# Response Content Type
By default, all data gets returned as JSON. If the data should be returned as XML add the following header:

```
Accept: application/xml
```

# Credits

Depending on the request made a different amount of credits get charged. How many which request costs can be found on the [API pricing page](http://link.fish/api/#pricing). Additionally, does a  header named "X-LF-Credits-Charged" get added to each successful response with the amount of credits charged.

Example:
```
X-LF-Credits-Charged: 1
```
You can check anytime how many credits you did use already by logging into your link.fish  account at [https://app.link.fish](https://app.link.fish) and checking under:  "Plugins" -> "API Dashboard"


If you have problems, questions or improvement advice please send us an email to api@link.fish


## Actions

### Urls.apps.get
Visits the URL and checks if there are mobile apps on them and returns the found ones.

Will by default return the app identifiers and not the full URL to the apps. To return URLs instead set the parameter "return_urls" to true.

The URLs can also be created manually like this:

| Property | URL                                                |
| -------- | -------------------------------------------------- |
| android  | https://play.google.com/store/apps/details?id={ID} |
| ios      | https://itunes.apple.com/us/app/app-name/id{ID}    |

Properties only get set when a value for it has been found. That means that if no app has been found only the property "url" will be set.



```js
link_fish.Urls.apps.get({
  "url": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: The URL of the website to query
  * return_urls `boolean`: Returns app URLs instead of the identifiers
  * browser_render `boolean`: If the page should be fully rendered with a browser to extract data. The request will then cost 5 credits instead of 1!

#### Output
* output [Apps](#apps)

### Urls.browser_data.get
Visits the URL with a full browser and extracts the data. This request costs 5 credits.


```js
link_fish.Urls.browser_data.get({
  "url": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: The URL of the website to query
  * item_format `string` (values: normal, flat): If the items should be return "normal" with multiple levels or "flat" with just one level and linked instead.
  * simplify_special_types `boolean`: Some types like "PropertyValue" do save key and value in separate properties which makes the data harder to process. If this option gets set it converts them automatically into the regular key -> value format.
  * screenshot `string` (values: none, normal, full): If and what kind of screenshot should be returned. Do only request screenshot generation when really needed because it will increase the response time significantly.
  * screenshot_width `integer`: The widh of the screenshot in pixel.
  * screenshot_file_format `string` (values: png, jpg): The file format of the screenshot

#### Output
* output [UrlBrowser](#urlbrowser)

### Urls.browser_screenshot.get
Visits the URL with full browser and creates a screenshot. This request costs 5 credits.


```js
link_fish.Urls.browser_screenshot.get({
  "url": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: The URL of the website to create screenshot of
  * type `string` (values: normal, full): What kind of screenshot should be returned. If it should be a regular 16:9 screenshot or one with the full page height
  * file_format `string` (values: png, jpg): The file format of the screenshot
  * width `integer`: The widh of the screenshot in pixel.

#### Output
*Output schema unknown*

### Urls.data.get
Visits the URL and extracts the data.


```js
link_fish.Urls.data.get({
  "url": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: The URL of the website to query
  * item_format `string` (values: normal, flat): If the items should be return "normal" with multiple levels or "flat" with just one level and linked instead.
  * simplify_special_types `boolean`: Some types like "PropertyValue" do save key and value in separate properties which makes the data harder to process. If this option gets set it converts them automatically into the regular key -> value format.
  * browser_render `boolean`: If the page should be fully rendered with a browser to extract data. The request will then cost 5 credits instead of 1!

#### Output
* output [Url](#url)

### Urls.geo_coordinates.get
Visits the URL and checks if there are Geo Coordinates on them and returns the found ones.

Properties only get set when a value for both latitude and longitude have been found. That means that if no geo coordinates have been found only the property "url" will be set.


```js
link_fish.Urls.geo_coordinates.get({
  "url": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: The URL of the website to query
  * browser_render `boolean`: If the page should be fully rendered with a browser to extract data. The request will then cost 5 credits instead of 1!

#### Output
* output [GeoCoordinates](#geocoordinates)

### Urls.social_media.get
Visits the URL and checks if there are any social media accounts and returns the found ones.

Will by default return the account identifiers and not the full URL to the profiles. To return URLs instead set the parameter "return_urls" to true.

The URLs can also be created manually like this:

| Property        | URL                                    |
| --------------- | -------------------------------------- |
| facebookPage    | https://facebook.com/{ID}              |
| githubUser      | https://github.com/{ID}                |
| googlePlus      | https://plus.google.com/+{ID}          |
| instagram       | https://instagram.com/{ID}             |
| linkedInCompany | https://linkedin.com/company/{ID}      |
| pinterest       | https://pinterest.com/{ID}             |
| twitter         | https://twitter.com/{ID}               |
| youTubeUser     | https://youtube.com/user/{ID}          |

Properties only get set when a value for it has been found. That means that if no social media account has been found only the property "url" will be set.



```js
link_fish.Urls.social_media.get({
  "url": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: The URL of the website to query
  * return_urls `boolean`: Returns profile URLs instead of the profile names/ids
  * browser_render `boolean`: If the page should be fully rendered with a browser to extract data. The request will then cost 5 credits instead of 1!

#### Output
* output [SocialMedia](#socialmedia)



## Definitions

### ApiResponsError
* ApiResponsError `object`
  * message **required** `string`: The error message.
  * status **required** `string`: The HTTP status code for the error.

### Apps
* Apps `object`
  * android **required** `string`: Android app
  * ios **required** `string`: iOS app
  * url **required** `string`: The url of the website. Can be different to requested one if there were redirects

### GeoCoordinates
* GeoCoordinates `object`
  * latitude **required** `number`: The latitude
  * longitude **required** `number`: The longitude
  * url **required** `string`: The url of the website. Can be different to requested one if there were redirects

### SocialMedia
* SocialMedia `object`
  * facebookPage **required** `string`: The facebook page name
  * githubUser **required** `string`: The Github user name
  * linkedInCompany **required** `string`: The LinkedIn page name
  * twitter **required** `string`: The Twitter handle
  * url **required** `string`: The url of the website. Can be different to requested one if there were redirects

### Url
* Url `object`
  * additionalData **required** `object`
    * locality `object`
      * country `string`: The recognized country of the website determined by TLD.
      * language `string`: The language of website. Recognized by header information if supplied or text analysis.
  * favicon `string`: Url of website favicon
  * items **required** `array`: The found data items on the website.
    * items `object`: The properties depend on the type of the item. The field "@type" exists for all.
      * @type `string`: The item type
  * statusCode **required** `string`: The HTTP status code the URL returned
  * title **required** `string`: The title of the page
  * url **required** `string`: The url of the website. Can be different to requested one if there were redirects

### UrlBrowser
* UrlBrowser `object`
  * additionalData **required** `object`
    * locality `object`
      * country `string`: The recognized country of the website determined by TLD.
      * language `string`: The language of website. Recognized by header information if supplied or text analysis.
  * favicon `string`: Url of website favicon
  * items **required** `array`: The found data items on the website.
    * items `object`: The properties depend on the type of the item. The field "@type" exists for all.
      * @type `string`: The item type
  * screenshot `string`: Base64 encoded PNG screenshot of website (if generation got requested)
  * statusCode **required** `string`: The HTTP status code the URL returned
  * title **required** `string`: The title of the page
  * url **required** `string`: The url of the website. Can be different to requested one if there were redirects


