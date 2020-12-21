# @datafire/neutrinoapi

Client library for Neutrino API

## Installation and Usage
```bash
npm install --save @datafire/neutrinoapi
```
```js
let neutrinoapi = require('@datafire/neutrinoapi').create({
  "api-key": "",
  "user-id": ""
});

.then(data => {
  console.log(data);
});
```

## Description

The general-purpose API

## Actions

### BadWordFilter
Detect bad words, swear words and profanity in a given text


```js
neutrinoapi.BadWordFilter({
  "content": ""
}, context)
```

#### Input
* input `object`
  * catalog `string`: Which catalog of bad words to use, we currently maintain two bad word catalogs: <ul> <li>strict - the largest database of bad words which includes profanity, obscenity, sexual, rude, cuss, dirty, swear and objectionable words and phrases. This catalog is suitable for environments of all ages including educational or children's content</li> <li>obscene - like the strict catalog but does not include any mild profanities, idiomatic phrases or words which are considered formal terminology. This catalog is suitable for adult environments where certain types of bad words are considered OK</li> </ul>
  * censor-character `string`: The character to use to censor out the bad words found
  * content **required** `string`: The content to scan. This can be either a URL to load from, a file upload or an HTML content string
  * output-case `string` (values: camel): The output case style

#### Output
* output [BadWordFilterResponse](#badwordfilterresponse)

### BINListDownload
Download our entire BIN database for direct use on your own systems


```js
neutrinoapi.BINListDownload({}, context)
```

#### Input
* input `object`
  * include-8digit `boolean`: Include 8-digit and higher BIN codes. Use this option if you want to download BINs with more than 6-digits
  * include-iso3 `boolean`: Include ISO 3-letter country codes and ISO 3-letter currency codes in the data. These will be added to columns 10 and 11 respectively

#### Output
* output `string`

### BINLookup
Perform a BIN (Bank Identification Number) or IIN (Issuer Identification Number) lookup


```js
neutrinoapi.BINLookup({
  "bin-number": ""
}, context)
```

#### Input
* input `object`
  * bin-number **required** `string`: The BIN or IIN number. This is the first 6, 8 or 10 digits of a card number, use 8 (or more) digits for the highest level of accuracy
  * customer-ip `string`: Pass in the customers IP address and we will return some extra information about them
  * output-case `string` (values: camel): The output case style

#### Output
* output [BINLookupResponse](#binlookupresponse)

### BrowserBot
Browser bot can extract content, interact with keyboard and mouse events, and execute JavaScript on a website


```js
neutrinoapi.BrowserBot({
  "url": ""
}, context)
```

#### Input
* input `object`
  * delay `integer`: Delay in seconds to wait before capturing any page data, executing selectors or JavaScript
  * exec `array`: Execute JavaScript on the page. Each array element should contain a valid JavaScript statement in string form. If a statement returns any kind of value it will be returned in the 'exec-results' response. For your convenience you can also use the following special shortcut functions: <div> sleep(seconds); Just wait/sleep for the specified number of seconds. click('selector'); Click on the first element matching the given selector. focus('selector'); Focus on the first element matching the given selector. keys('characters'); Send the specified keyboard characters. Use click() or focus() first to send keys to a specific element. enter(); Send the Enter key. tab(); Send the Tab key. </div> Example: <div> [ "click('#button-id')", "sleep(1)", "click('.field-class')", "keys('1234')", "enter()" ] </div>
  * ignore-certificate-errors `boolean`: Ignore any TLS/SSL certificate errors and load the page anyway
  * output-case `string` (values: camel): The output case style
  * selector `string`: Extract content from the page DOM using this selector. Commonly known as a CSS selector, you can find a good reference <a href="https://www.w3schools.com/cssref/css_selectors.asp">here</a>
  * timeout `integer`: Timeout in seconds. Give up if still trying to load the page after this number of seconds
  * url **required** `string`: The URL to load
  * user-agent `string`: Override the browsers default user-agent string with this one

#### Output
* output [BrowserBotResponse](#browserbotresponse)

### Convert
A powerful unit conversion tool


```js
neutrinoapi.Convert({
  "from-type": "",
  "from-value": "",
  "to-type": ""
}, context)
```

#### Input
* input `object`
  * from-type **required** `string`: The type of the value to convert from (e.g. USD)
  * from-value **required** `string`: The value to convert from (e.g. 10.95)
  * output-case `string` (values: camel): The output case style
  * to-type **required** `string`: The type to convert to (e.g. EUR)

#### Output
* output [ConvertResponse](#convertresponse)

### EmailValidate
Parse, validate and clean an email address


```js
neutrinoapi.EmailValidate({
  "email": ""
}, context)
```

#### Input
* input `object`
  * email **required** `string`: An email address
  * fix-typos `boolean`: Automatically attempt to fix typos in the address
  * output-case `string` (values: camel): The output case style

#### Output
* output [EmailValidateResponse](#emailvalidateresponse)

### EmailVerify
SMTP based email address verification


```js
neutrinoapi.EmailVerify({
  "email": ""
}, context)
```

#### Input
* input `object`
  * email **required** `string`: An email address
  * fix-typos `boolean`: Automatically attempt to fix typos in the address
  * output-case `string` (values: camel): The output case style

#### Output
* output [EmailVerifyResponse](#emailverifyresponse)

### GeocodeAddress
Geocode an address, partial address or just the name of a place


```js
neutrinoapi.GeocodeAddress({}, context)
```

#### Input
* input `object`
  * address `string`: The full address, partial address or name of a place to try and locate. Comma separated address components are preferred.
  * city `string`: The city/town name to locate
  * country-code `string`: Limit result to this country (the default is no country bias)
  * county `string`: The county/region name to locate
  * fuzzy-search `boolean`: If no matches are found for the given address, start performing a recursive fuzzy search until a geolocation is found. This option is recommended for processing user input or implementing auto-complete. We use a combination of approximate string matching and data cleansing to find possible location matches
  * house-number `string`: The house/building number to locate
  * language-code `string`: The language to display results in, available languages are: <ul> <li>de, en, es, fr, it, pt, ru, zh</li> </ul>
  * output-case `string` (values: camel): The output case style
  * postal-code `string`: The postal code to locate
  * state `string`: The state name to locate
  * street `string`: The street/road name to locate

#### Output
* output [GeocodeAddressResponse](#geocodeaddressresponse)

### GeocodeReverse
Convert a geographic coordinate (latitude and longitude) into a real world address


```js
neutrinoapi.GeocodeReverse({
  "latitude": "",
  "longitude": ""
}, context)
```

#### Input
* input `object`
  * language-code `string`: The language to display results in, available languages are: <ul> <li>de, en, es, fr, it, pt, ru</li> </ul>
  * latitude **required** `string`: The location latitude in decimal degrees format
  * longitude **required** `string`: The location longitude in decimal degrees format
  * output-case `string` (values: camel): The output case style
  * zoom `string`: The zoom level to respond with: <ul> <li>address - the most precise address available</li> <li>street - the street level</li> <li>city - the city level</li> <li>state - the state level</li> <li>country - the country level</li> </ul>

#### Output
* output [GeocodeReverseResponse](#geocodereverseresponse)

### HLRLookup
Connect to the global mobile cellular network and retrieve the status of a mobile device


```js
neutrinoapi.HLRLookup({
  "number": ""
}, context)
```

#### Input
* input `object`
  * country-code `string`: ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign)
  * number **required** `string`: A phone number
  * output-case `string` (values: camel): The output case style

#### Output
* output [HLRLookupResponse](#hlrlookupresponse)

### HostReputation
Check the reputation of an IP address, domain name, FQDN or URL against a comprehensive list of blacklists and blocklists


```js
neutrinoapi.HostReputation({
  "host": ""
}, context)
```

#### Input
* input `object`
  * host **required** `string`: An IP address, domain name, FQDN or URL. If you supply a domain/URL it will be checked against the URI DNSBL lists
  * list-rating `integer`: Only check lists with this rating or better
  * output-case `string` (values: camel): The output case style

#### Output
* output [HostReputationResponse](#hostreputationresponse)

### HTMLClean
Clean and sanitize untrusted HTML


```js
neutrinoapi.HTMLClean({
  "content": "",
  "output-type": ""
}, context)
```

#### Input
* input `object`
  * content **required** `string`: The HTML content. This can be either a URL to load from, a file upload or an HTML content string
  * output-type **required** `string`: The level of sanitization, possible values are: <b>plain-text</b>: reduce the content to plain text only (no HTML tags at all) <b>simple-text</b>: allow only very basic text formatting tags like b, em, i, strong, u <b>basic-html</b>: allow advanced text formatting and hyper links <b>basic-html-with-images</b>: same as basic html but also allows image tags <b>advanced-html</b>: same as basic html with images but also allows many more common HTML tags like table, ul, dl, pre

#### Output
* output `string`

### HTML5Render
Render HTML content to PDF, JPG or PNG


```js
neutrinoapi.HTML5Render({
  "content": ""
}, context)
```

#### Input
* input `object`
  * content **required** `string`: The HTML content. This can be either a URL to load from, a file upload or an HTML content string
  * css `string`: Inject custom CSS into the HTML. e.g. 'body { background-color: red;}'
  * footer-font `string`: Set the footer font. Fonts available: Times, Courier, Helvetica, Arial
  * footer-font-size `integer`: Set the footer font size (in pt)
  * footer-line `boolean`: Draw a full page width horizontal line above your footer
  * footer-size `integer`: The height of your footer (in mm)
  * footer-text-center `string`: Text to print to the center header of each page
  * footer-text-left `string`: Text to print to the left-hand side footer of each page. e.g. 'My footer - Page {page_number} of {total_pages}'
  * footer-text-right `string`: Text to print to the right-hand side header of each page
  * format `string`: Which format to output, available options are: PDF, PNG, JPG
  * forms `boolean`: Generate real (fillable) PDF forms from HTML forms
  * grayscale `boolean`: Render the final document in grayscale
  * header-font `string`: Set the header font. Fonts available: Times, Courier, Helvetica, Arial
  * header-font-size `integer`: Set the header font size (in pt)
  * header-line `boolean`: Draw a full page width horizontal line under your header
  * header-size `integer`: The height of your header (in mm)
  * header-text-center `string`: Text to print to the center header of each page
  * header-text-left `string`: Text to print to the left-hand side header of each page. e.g. 'My header - Page {page_number} of {total_pages}'
  * header-text-right `string`: Text to print to the right-hand side header of each page
  * image-height `integer`: If rendering to an image format (PNG or JPG) use this image height (in pixels). The default is automatic which dynamically sets the image height based on the content
  * image-width `integer`: If rendering to an image format (PNG or JPG) use this image width (in pixels)
  * landscape `boolean`: Set the document to lanscape orientation
  * margin `integer`: The document margin (in mm)
  * margin-bottom `integer`: The document bottom margin (in mm)
  * margin-left `integer`: The document left margin (in mm)
  * margin-right `integer`: The document right margin (in mm)
  * margin-top `integer`: The document top margin (in mm)
  * media-print `boolean`: Use @media print CSS styles to render the document
  * media-queries `boolean`: Activate all @media queries before rendering. This can be useful if you wan't to render the mobile version of a responsive website
  * page-height `integer`: Set the PDF page height explicitly (in mm)
  * page-size `string`: Set the document page size, can be one of: A0 - A9, B0 - B10, Comm10E, DLE or Letter
  * page-width `integer`: Set the PDF page width explicitly (in mm)
  * render-delay `integer`: Number of milliseconds to wait before rendering the page (can be useful for pages with animations etc)
  * title `string`: The document title
  * zoom `integer`: Set the zoom factor when rendering the page (2.0 for double size, 0.5 for half size)

#### Output
* output `string`

### ImageResize
Resize an image and output as either JPEG or PNG


```js
neutrinoapi.ImageResize({
  "height": 0,
  "image-url": "",
  "width": 0
}, context)
```

#### Input
* input `object`
  * format `string`: The output image format, can be either png or jpg
  * height **required** `integer`: The height to resize to (in px) while preserving aspect ratio
  * image-url **required** `string`: The URL to the source image (you can also upload an image file directly in which case this field is ignored)
  * width **required** `integer`: The width to resize to (in px) while preserving aspect ratio

#### Output
* output `string`

### ImageWatermark
Watermark one image with another image


```js
neutrinoapi.ImageWatermark({
  "image-url": "",
  "watermark-url": ""
}, context)
```

#### Input
* input `object`
  * format `string`: The output image format, can be either png or jpg
  * height `integer`: If set resize the resulting image to this height (in px) while preserving aspect ratio
  * image-url **required** `string`: The URL to the source image (you can also upload an image file directly in which case this field is ignored)
  * opacity `integer`: The opacity of the watermark (0 to 100)
  * position `string`: The position of the watermark image, possible values are: center, top-left, top-center, top-right, bottom-left, bottom-center, bottom-right
  * watermark-url **required** `string`: The URL to the watermark image (you can also upload an image file directly in which case this field is ignored)
  * width `integer`: If set resize the resulting image to this width (in px) while preserving aspect ratio

#### Output
* output `string`

### IPBlocklist
The IP Blocklist API will detect potentially malicious or dangerous IP addresses


```js
neutrinoapi.IPBlocklist({
  "ip": ""
}, context)
```

#### Input
* input `object`
  * ip **required** `string`: An IPv4 or IPv6 address
  * output-case `string` (values: camel): The output case style
  * vpn-lookup `boolean`: Include public VPN provider IP addresses. <b>NOTE</b>: For more advanced VPN detection including the ability to identify private and stealth VPNs use the <a href="https://www.neutrinoapi.com/api/ip-probe/">IP Probe API</a>

#### Output
* output [IPBlocklistResponse](#ipblocklistresponse)

### IPBlocklistDownload
This API is a direct feed to our IP blocklist data


```js
neutrinoapi.IPBlocklistDownload({}, context)
```

#### Input
* input `object`
  * format `string`: The data format. Can be either CSV or TXT
  * include-vpn `boolean`: Include public VPN provider IP addresses, this option is only available for Tier 3 or higher accounts. <b>WARNING</b>: This option will add at least an additional 8 million IP addresses to the download

#### Output
* output `string`

### IPInfo
Get location information about an IP address and do reverse DNS (PTR) lookups


```js
neutrinoapi.IPInfo({
  "ip": ""
}, context)
```

#### Input
* input `object`
  * ip **required** `string`: IPv4 or IPv6 address
  * output-case `string` (values: camel): The output case style
  * reverse-lookup `boolean`: Do a reverse DNS (PTR) lookup. This option can add extra delay to the request so only use it if you need it

#### Output
* output [IPInfoResponse](#ipinforesponse)

### IPProbe
Analyze and extract provider information for an IP address


```js
neutrinoapi.IPProbe({
  "ip": ""
}, context)
```

#### Input
* input `object`
  * ip **required** `string`: IPv4 or IPv6 address
  * output-case `string` (values: camel): The output case style

#### Output
* output [IPProbeResponse](#ipproberesponse)

### PhonePlayback
Make an automated call to any valid phone number and playback an audio message


```js
neutrinoapi.PhonePlayback({
  "audio-url": "",
  "number": ""
}, context)
```

#### Input
* input `object`
  * audio-url **required** `string`: A URL to a valid audio file. Accepted audio formats are: <ul> <li>MP3</li> <li>WAV</li> <li>OGG</li> </ul>You can use the following MP3 URL for testing: https://www.neutrinoapi.com/test-files/test1.mp3
  * limit `integer`: Limit the total number of calls allowed to the supplied phone number, if the limit is reached error code 14 will be returned (the default is no limit)
  * limit-ttl `integer`: Set the TTL in number of days that the 'limit' option will remember a phone number (the default is 1 day and the maximum is 365 days)
  * number **required** `string`: The phone number to call. Must be in valid international format
  * output-case `string` (values: camel): The output case style

#### Output
* output [PhonePlaybackResponse](#phoneplaybackresponse)

### PhoneValidate
Parse, validate and get location information about a phone number


```js
neutrinoapi.PhoneValidate({
  "number": ""
}, context)
```

#### Input
* input `object`
  * country-code `string`: ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign)
  * ip `string`: Pass in a users IP address and we will assume numbers are based in the country of the IP address
  * number **required** `string`: A phone number. This can be in international format (E.164) or local format. If passing local format you must also set either the 'country-code' OR 'ip' options as well
  * output-case `string` (values: camel): The output case style

#### Output
* output [PhoneValidateResponse](#phonevalidateresponse)

### PhoneVerify
Make an automated call to any valid phone number and playback a unique security code


```js
neutrinoapi.PhoneVerify({
  "number": ""
}, context)
```

#### Input
* input `object`
  * code-length `integer`: The number of digits to use in the security code (between 4 and 12)
  * country-code `string`: ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign)
  * language-code `string`: The language to playback the verification code in, available languages are: <ul> <li>de - German</li> <li>en - English</li> <li>es - Spanish</li> <li>fr - French</li> <li>it - Italian</li> <li>pt - Portuguese</li> <li>ru - Russian</li> </ul>
  * limit `integer`: Limit the total number of calls allowed to the supplied phone number, if the limit is reached error code 14 will be returned (the default is no limit)
  * limit-ttl `integer`: Set the TTL in number of days that the 'limit' option will remember a phone number (the default is 1 day and the maximum is 365 days)
  * number **required** `string`: The phone number to send the verification code to
  * output-case `string` (values: camel): The output case style
  * playback-delay `integer`: The delay in milliseconds between the playback of each security code
  * security-code `integer`: Pass in your own security code. This is useful if you have implemented TOTP or similar 2FA methods. If not set then we will generate a secure random code

#### Output
* output [PhoneVerifyResponse](#phoneverifyresponse)

### QRCode
Generate a QR code as a PNG image


```js
neutrinoapi.QRCode({
  "content": ""
}, context)
```

#### Input
* input `object`
  * bg-color `string`: The QR code background color
  * content **required** `string`: The content to encode into the QR code (e.g. a URL or a phone number)
  * fg-color `string`: The QR code foreground color
  * height `integer`: The height of the QR code (in px)
  * width `integer`: The width of the QR code (in px)

#### Output
* output `string`

### SMSMessage
Send a free-form message to any mobile device via SMS


```js
neutrinoapi.SMSMessage({
  "message": "",
  "number": ""
}, context)
```

#### Input
* input `object`
  * country-code `string`: ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign)
  * limit `integer`: Limit the total number of SMS allowed to the supplied phone number, if the limit is reached error code 14 will be returned (the default is no limit)
  * limit-ttl `integer`: Set the TTL in number of days that the 'limit' option will remember a phone number (the default is 1 day and the maximum is 365 days)
  * message **required** `string`: The SMS message to send. Messages are truncated to a maximum of 150 characters for ASCII content OR 70 characters for UTF content
  * number **required** `string`: The phone number to send a message to
  * output-case `string` (values: camel): The output case style

#### Output
* output [SMSMessageResponse](#smsmessageresponse)

### SMSVerify
Send a unique security code to any mobile device via SMS


```js
neutrinoapi.SMSVerify({
  "number": ""
}, context)
```

#### Input
* input `object`
  * code-length `integer`: The number of digits to use in the security code (must be between 4 and 12)
  * country-code `string`: ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign)
  * language-code `string`: The language to send the verification code in, available languages are: <ul> <li>de - German</li> <li>en - English</li> <li>es - Spanish</li> <li>fr - French</li> <li>it - Italian</li> <li>pt - Portuguese</li> <li>ru - Russian</li> </ul>
  * limit `integer`: Limit the total number of SMS allowed to the supplied phone number, if the limit is reached error code 14 will be returned (the default is no limit)
  * limit-ttl `integer`: Set the TTL in number of days that the 'limit' option will remember a phone number (the default is 1 day and the maximum is 365 days)
  * number **required** `string`: The phone number to send a verification code to
  * output-case `string` (values: camel): The output case style
  * security-code `integer`: Pass in your own security code. This is useful if you have implemented TOTP or similar 2FA methods. If not set then we will generate a secure random code

#### Output
* output [SMSVerifyResponse](#smsverifyresponse)

### URLInfo
Parse, analyze and retrieve content from the supplied URL


```js
neutrinoapi.URLInfo({
  "url": ""
}, context)
```

#### Input
* input `object`
  * fetch-content `boolean`: If this URL responds with html, text, json or xml then return the response. This option is useful if you want to perform further processing on the URL content (e.g. with the HTML Extract or HTML Clean APIs)
  * ignore-certificate-errors `boolean`: Ignore any TLS/SSL certificate errors and load the URL anyway
  * output-case `string` (values: camel): The output case style
  * retry `integer`: If the request fails for any reason try again this many times
  * timeout `integer`: Timeout in seconds. Give up if still trying to load the URL after this number of seconds
  * url **required** `string`: The URL to probe

#### Output
* output [URLInfoResponse](#urlinforesponse)

### UserAgentInfo
Parse, validate and get detailed user-agent information from a user agent string


```js
neutrinoapi.UserAgentInfo({
  "user-agent": ""
}, context)
```

#### Input
* input `object`
  * output-case `string` (values: camel): The output case style
  * user-agent **required** `string`: A user agent string

#### Output
* output [UserAgentInfoResponse](#useragentinforesponse)

### VerifySecurityCode
Check if a security code sent via SMS Verify or Phone Verify is valid


```js
neutrinoapi.VerifySecurityCode({
  "security-code": ""
}, context)
```

#### Input
* input `object`
  * limit-by `string`: If set then enable additional brute-force protection by limiting the number of attempts by the supplied value. This can be set to any unique identifier you would like to limit by, for example a hash of the users email, phone number or IP address. Requests to this API will be ignored after approximately 10 failed verification attempts
  * output-case `string` (values: camel): The output case style
  * security-code **required** `string`: The security code to verify

#### Output
* output [VerifySecurityCodeResponse](#verifysecuritycoderesponse)



## Definitions

### APIError
* APIError `object`
  * apiError **required** `integer`: API error code. If set and > 0 then an API error has occurred your request could not be completed
  * apiErrorMsg **required** `string`: API error message

### BINLookupResponse
* BINLookupResponse `object`
  * cardBrand **required** `string`: The card brand (e.g. Visa or Mastercard)
  * cardCategory **required** `string`: The card category. There are many different card categories the most common card categories are: CLASSIC, BUSINESS, CORPORATE, PLATINUM, PREPAID
  * cardType **required** `string`: The card type, will always be one of: DEBIT, CREDIT, CHARGE CARD
  * country **required** `string`: The full country name of the issuer
  * countryCode **required** `string`: The ISO 2-letter country code of the issuer
  * countryCode3 **required** `string`: The ISO 3-letter country code of the issuer
  * currencyCode **required** `string`: ISO 4217 currency code associated with the country of the issuer
  * ipBlocklisted **required** `boolean`: True if the customers IP is listed on one of our blocklists, see the <a href="http://www.neutrinoapi.com/api/ip-blocklist/">IP Blocklist API</a>
  * ipBlocklists **required** `array`: An array of strings indicating which blocklists this IP is listed on
    * items `string`
  * ipCity **required** `string`: The city of the customers IP (if detectable)
  * ipCountry **required** `string`: The country of the customers IP
  * ipCountryCode **required** `string`: The ISO 2-letter country code of the customers IP
  * ipCountryCode3 **required** `string`: The ISO 3-letter country code of the customers IP
  * ipMatchesBin **required** `boolean`: True if the customers IP country matches the BIN country
  * ipRegion **required** `string`: The region of the customers IP (if detectable)
  * isCommercial **required** `boolean`: Is this a commercial/business use card
  * isPrepaid **required** `boolean`: Is this a prepaid or prepaid reloadable card
  * issuer **required** `string`: The card issuer
  * issuerPhone **required** `string`: The card issuers phone number
  * issuerWebsite **required** `string`: The card issuers website
  * valid **required** `boolean`: Is this a valid BIN or IIN number

### BadWordFilterResponse
* BadWordFilterResponse `object`
  * badWordsList **required** `array`: An array of the bad words found
    * items `string`
  * badWordsTotal **required** `integer`: Total number of bad words detected
  * censoredContent **required** `string`: The censored content (only set if censor-character has been set)
  * isBad **required** `boolean`: Does the text contain bad words

### Blacklist
* Blacklist `object`
  * isListed **required** `boolean`: true if listed, false if not
  * listHost **required** `string`: the domain/hostname of the DNSBL
  * listName **required** `string`: the name of the DNSBL
  * listRating **required** `integer`: the list rating [1-3] with 1 being the best rating and 3 the lowest rating
  * responseTime **required** `integer`: the DNSBL server response time in milliseconds
  * returnCode **required** `string`: the specific return code for this listing (if listed)
  * txtRecord **required** `string`: the TXT record returned for this listing (if listed)

### BrowserBotResponse
* BrowserBotResponse `object`
  * content **required** `string`: The complete raw, decompressed and decoded page content. Usually will be either HTML, JSON or XML
  * elements **required** `array`: Array containing all the elements matching the supplied selector. Each element object will contain the text content, HTML content and all current element attributes
    * items `string`
  * errorMessage **required** `string`: Contains the error message if an error has occurred ('is-error' will be true)
  * execResults **required** `array`: If you executed any JavaScript this array holds the results as objects
    * items `string`
  * httpRedirectUrl **required** `string`: The redirected URL if the URL responded with an HTTP redirect
  * httpStatusCode **required** `integer`: The HTTP status code the URL returned
  * httpStatusMessage **required** `string`: The HTTP status message the URL returned
  * isError **required** `boolean`: True if an error has occurred loading the page. Check the 'error-message' field for details
  * isHttpOk **required** `boolean`: True if the HTTP status is OK (200)
  * isHttpRedirect **required** `boolean`: True if the URL responded with an HTTP redirect
  * isSecure **required** `boolean`: True if the page is secured using TLS/SSL
  * isTimeout **required** `boolean`: True if a timeout occurred while loading the page. You can set the timeout with the request parameter 'timeout'
  * languageCode **required** `string`: The ISO 2-letter language code of the page. Extracted from either the HTML document or via HTTP headers
  * loadTime **required** `integer`: The number of seconds taken to load the page (from initial request until DOM ready)
  * mimeType **required** `string`: The document MIME type
  * responseHeaders **required** `object`: Map containing all the HTTP response headers the URL responded with
  * securityDetails **required** `object`: Map containing details of the TLS/SSL setup
  * serverIp **required** `string`: The HTTP servers IP address
  * title **required** `string`: The document title
  * url **required** `string`: The page URL

### ConvertResponse
* ConvertResponse `object`
  * fromType **required** `string`: The type of the value being converted from
  * fromValue **required** `string`: The value being converted from
  * result **required** `string`: The result of the conversion in string format
  * resultFloat **required** `integer`: The result of the conversion as a floating-point number
  * toType **required** `string`: The type being converted to
  * valid **required** `boolean`: True if the coversion was successful and produced a valid result

### EmailValidateResponse
* EmailValidateResponse `object`
  * domain **required** `string`: The email domain
  * domainError **required** `boolean`: True if this address has a domain error (e.g. no valid mail server records)
  * email **required** `string`: The email address. If you have used the fix-typos option then this will be the fixed address
  * isDisposable **required** `boolean`: True if this address is a disposable, temporary or darknet related email address
  * isFreemail **required** `boolean`: True if this address is a free-mail address
  * isPersonal **required** `boolean`: True if this address belongs to a person. False if this is a role based address, e.g. admin@, help@, office@, etc.
  * provider **required** `string`: The email service provider domain
  * syntaxError **required** `boolean`: True if this address has a syntax error
  * typosFixed **required** `boolean`: True if typos have been fixed
  * valid **required** `boolean`: Is this a valid email

### EmailVerifyResponse
* EmailVerifyResponse `object`
  * domain **required** `string`: The email domain
  * domainError **required** `boolean`: True if this address has a domain error (e.g. no valid mail server records)
  * email **required** `string`: The email address. If you have used the fix-typos option then this will be the fixed address
  * isCatchAll **required** `boolean`: True if this email domain has a catch-all policy (it will accept mail for any username)
  * isDeferred **required** `boolean`: True if the mail server responded with a temporary failure (either a 4xx response code or unresponsive server). You can retry this address later, we recommend waiting at least 15 minutes before retrying
  * isDisposable **required** `boolean`: True if this address is a disposable, temporary or darknet related email address
  * isFreemail **required** `boolean`: True if this address is a free-mail address
  * isPersonal **required** `boolean`: True if this address is for a person. False if this is a role based address, e.g. admin@, help@, office@, etc.
  * provider **required** `string`: The email service provider domain
  * smtpResponse **required** `string`: The raw SMTP response message received during verification
  * smtpStatus **required** `string`: The SMTP verification status for the address: <ul> <li>ok - SMTP verification was successful, this is a real address that can receive mail</li> <li>invalid - this is not a valid email address (has either a domain or syntax error)</li> <li>absent - this address is not registered with the email service provider</li> <li>unresponsive - the mail server(s) for this address timed-out or refused to open an SMTP connection</li> <li>unknown - sorry, we could not reliably determine the real status of this address (this address may or may not exist)</li> </ul>
  * syntaxError **required** `boolean`: True if this address has a syntax error
  * typosFixed **required** `boolean`: True if typos have been fixed
  * valid **required** `boolean`: Is this a valid email address (syntax and domain is valid)
  * verified **required** `boolean`: True if this address has passed SMTP verification. Check the smtp-status and smtp-response fields for specific verification details

### GeocodeAddressResponse
* GeocodeAddressResponse `object`
  * found **required** `integer`: The number of possible matching locations found
  * locations **required** `array`: Array of matching location objects
    * items [Location](#location)

### GeocodeReverseResponse
* GeocodeReverseResponse `object`
  * address **required** `string`: The fully formatted address
  * addressComponents **required** `object`: The components which make up the address such as road, city, state, etc
  * city **required** `string`: The city of the location
  * country **required** `string`: The country of the location
  * countryCode **required** `string`: The ISO 2-letter country code of the location
  * countryCode3 **required** `string`: The ISO 3-letter country code of the location
  * currencyCode **required** `string`: ISO 4217 currency code associated with the country
  * found **required** `boolean`: True if these coordinates map to a real location
  * latitude **required** `integer`: The location latitude
  * locationTags **required** `array`: Array of strings containing any location tags associated with the address. Tags are additional pieces of metadata about a specific location, there are thousands of different tags. Some examples of tags: shop, office, cafe, bank, pub
    * items `string`
  * locationType **required** `string`: The detected location type ordered roughly from most to least precise, possible values are: <ul> <li>address - indicates a precise street address</li> <li>street - accurate to the street level but may not point to the exact location of the house/building number</li> <li>city - accurate to the city level, this includes villages, towns, suburbs, etc</li> <li>postal-code - indicates a postal code area (no house or street information present)</li> <li>railway - location is part of a rail network such as a station or railway track</li> <li>natural - indicates a natural feature, for example a mountain peak or a waterway</li> <li>island - location is an island or archipelago</li> <li>administrative - indicates an administrative boundary such as a country, state or province</li> </ul>
  * longitude **required** `integer`: The location longitude
  * postalCode **required** `string`: The postal code for the location
  * state **required** `string`: The state of the location
  * timezone **required** `object`: Map containing timezone details for the location: <ul> <li>id - the time zone ID as per the IANA time zone database (tzdata)</li> <li>name - the time zone name</li> <li>abbr - the time zone abbreviation</li> <li>date - the current date within the time zone (ISO format)</li> <li>time - the current time within the time zone (ISO format)</li> </ul>

### HLRLookupResponse
* HLRLookupResponse `object`
  * country **required** `string`: The phone number country
  * countryCode **required** `string`: The number location as an ISO 2-letter country code
  * countryCode3 **required** `string`: The number location as an ISO 3-letter country code
  * currencyCode **required** `string`: ISO 4217 currency code associated with the country
  * currentNetwork **required** `string`: The currently used network/carrier name
  * hlrStatus **required** `string`: The HLR lookup status, possible values are: <ul> <li>ok - the HLR lookup was successful and the device is connected</li> <li>absent - the number was once registered but the device has been switched off or out of network range for some time</li> <li>unknown - the number is not known by the mobile network</li> <li>invalid - the number is not a valid mobile MSISDN number</li> <li>fixed-line - the number is a registered fixed-line not mobile</li> <li>voip - the number has been detected as a VOIP line</li> <li>failed - the HLR lookup has failed, we could not determine the real status of this number</li> </ul>
  * hlrValid **required** `boolean`: Was the HLR lookup successful. If true then this is a working and registered cell-phone or mobile device (SMS and phone calls will be delivered)
  * imsi **required** `string`: The mobile IMSI number (International Mobile Subscriber Identity)
  * internationalCallingCode **required** `integer`: The numbers international calling code
  * internationalNumber **required** `string`: The number represented in full international format
  * isMobile **required** `boolean`: True if this is a mobile number (only true with 100% certainty, if the number type is unknown this value will be false)
  * isPorted **required** `boolean`: Has this number been ported to another network
  * isRoaming **required** `boolean`: Is this number currently roaming from its origin country
  * localNumber **required** `string`: The number represented in local dialing format
  * location **required** `string`: The number location. Could be a city, region or country depending on the type of number
  * mcc **required** `string`: The mobile MCC number (Mobile Country Code)
  * mnc **required** `string`: The mobile MNC number (Mobile Network Code)
  * msc **required** `string`: The mobile MSC number (Mobile Switching Center)
  * msin **required** `string`: The mobile MSIN number (Mobile Subscription Identification Number)
  * numberType **required** `string`: The number type, possible values are: <ul> <li>mobile</li> <li>fixed-line</li> <li>premium-rate</li> <li>toll-free</li> <li>voip</li> <li>unknown</li> </ul>
  * numberValid **required** `boolean`: True if this a valid phone number
  * originNetwork **required** `string`: The origin network/carrier name
  * portedNetwork **required** `string`: The ported to network/carrier name (only set if the number has been ported)
  * roamingCountryCode **required** `string`: If the number is currently roaming, the ISO 2-letter country code of the roaming in country

### HostReputationResponse
* HostReputationResponse `object`
  * host **required** `string`: The IP address or host name
  * isListed **required** `boolean`: Is this host blacklisted
  * listCount **required** `integer`: The number of DNSBLs the host is listed on
  * lists **required** `array`: An array of objects for each DNSBL checked, with the following keys: <ul> <li>is-listed - true if listed, false if not</li> <li>list-name - the name of the DNSBL</li> <li>list-host - the domain/hostname of the DNSBL</li> <li>list-rating - the list rating [1-3] with 1 being the best rating and 3 the lowest rating</li> <li>txt-record - the TXT record returned for this listing (if listed)</li> <li>return-code - the specific return code for this listing (if listed)</li> <li>response-time - the DNSBL server response time in milliseconds</li> </ul>
    * items [Blacklist](#blacklist)

### IPBlocklistResponse
* IPBlocklistResponse `object`
  * blocklists **required** `array`: An array of strings indicating which blocklists this IP is listed on (empty if not listed)
    * items `string`
  * ip **required** `string`: The IP address
  * isBot **required** `boolean`: IP is hosting a malicious bot or is part of a botnet. Includes brute-force crackers
  * isDshield **required** `boolean`: IP has been flagged as an attack source on DShield (dshield.org)
  * isExploitBot **required** `boolean`: IP is hosting an exploit finding bot or is running exploit scanning software
  * isHijacked **required** `boolean`: IP is part of a hijacked netblock or a netblock controlled by a criminal organization
  * isListed **required** `boolean`: Is this IP on a blocklist
  * isMalware **required** `boolean`: IP is involved in distributing or is running malware
  * isProxy **required** `boolean`: IP has been detected as an anonymous web proxy or anonymous HTTP proxy
  * isSpamBot **required** `boolean`: IP address is hosting a spam bot, comment spamming or any other spamming type software
  * isSpider **required** `boolean`: IP is running a hostile web spider / web crawler
  * isSpyware **required** `boolean`: IP is involved in distributing or is running spyware
  * isTor **required** `boolean`: IP is a Tor node or running a Tor related service
  * isVpn **required** `boolean`: IP belongs to a public VPN provider (only set if the 'vpn-lookup' option is enabled)
  * lastSeen **required** `integer`: The last time this IP was seen on a blocklist (in Unix time or 0 if not listed recently)
  * listCount **required** `integer`: The number of blocklists the IP is listed on
  * sensors **required** `array`: An array of objects containing details on which sensors were used to detect this IP
    * items `string`

### IPInfoResponse
* IPInfoResponse `object`
  * city **required** `string`: Name of the city (if detectable)
  * continentCode **required** `string`: ISO 2-letter continent code
  * country **required** `string`: Full country name
  * countryCode **required** `string`: ISO 2-letter country code
  * countryCode3 **required** `string`: ISO 3-letter country code
  * currencyCode **required** `string`: ISO 4217 currency code associated with the country
  * hostDomain **required** `string`: The IPs host domain (only set if reverse-lookup has been used)
  * hostname **required** `string`: The IPs full hostname (only set if reverse-lookup has been used)
  * ip **required** `string`: The IP address
  * isBogon **required** `boolean`: True if this is a bogon IP address such as a private network, local network or reserved address
  * isV4Mapped **required** `boolean`: True if this is a <a href="https://en.wikipedia.org/wiki/IPv6#IPv4-mapped_IPv6_addresses">IPv4 mapped IPv6 address</a>
  * isV6 **required** `boolean`: True if this is a IPv6 address. False if IPv4
  * latitude **required** `integer`: Location latitude
  * longitude **required** `integer`: Location longitude
  * region **required** `string`: Name of the region (if detectable)
  * timezone **required** `object`: Map containing timezone details for the location: <ul> <li>id - the time zone ID as per the IANA time zone database (tzdata)</li> <li>name - the time zone name</li> <li>abbr - the time zone abbreviation</li> <li>date - the current date within the time zone (ISO format)</li> <li>time - the current time within the time zone (ISO format)</li> </ul>
  * valid **required** `boolean`: True if this is a valid IPv4 or IPv6 address

### IPProbeResponse
* IPProbeResponse `object`
  * asAge **required** `integer`: The age of the autonomous system (AS) in number of years since registration
  * asCidr **required** `string`: The autonomous system (AS) CIDR range
  * asCountryCode **required** `string`: The autonomous system (AS) ISO 2-letter country code
  * asCountryCode3 **required** `string`: The autonomous system (AS) ISO 3-letter country code
  * asDescription **required** `string`: The autonomous system (AS) description / company name
  * asDomains **required** `array`: Array of all the domains associated with the autonomous system (AS)
    * items `string`
  * asn **required** `string`: The autonomous system (AS) number
  * city **required** `string`: Full city name (if detectable)
  * continentCode **required** `string`: ISO 2-letter continent code
  * country **required** `string`: Full country name
  * countryCode **required** `string`: ISO 2-letter country code
  * countryCode3 **required** `string`: ISO 3-letter country code
  * currencyCode **required** `string`: ISO 4217 currency code associated with the country
  * hostDomain **required** `string`: The IPs host domain
  * hostname **required** `string`: The IPs full hostname (PTR)
  * ip **required** `string`: The IP address
  * isBogon **required** `boolean`: True if this is a bogon IP address such as a private network, local network or reserved address
  * isHosting **required** `boolean`: True if this IP belongs to a hosting company. Note that this can still be true even if the provider type is VPN/proxy, this occurs in the case that the IP is detected as both types
  * isIsp **required** `boolean`: True if this IP belongs to an internet service provider. Note that this can still be true even if the provider type is VPN/proxy, this occurs in the case that the IP is detected as both types
  * isProxy **required** `boolean`: True if this IP ia a proxy
  * isV4Mapped **required** `boolean`: True if this is a <a href="https://en.wikipedia.org/wiki/IPv6#IPv4-mapped_IPv6_addresses">IPv4 mapped IPv6 address</a>
  * isV6 **required** `boolean`: True if this is a IPv6 address. False if IPv4
  * isVpn **required** `boolean`: True if this IP ia a VPN
  * providerDescription **required** `string`: A description of the provider (usually extracted from the providers website)
  * providerDomain **required** `string`: The domain name of the provider
  * providerType **required** `string`: The detected provider type, possible values are: <ul> <li>isp - IP belongs to an internet service provider. This includes both mobile, home and business internet providers</li> <li>hosting - IP belongs to a hosting company. This includes website hosting, cloud computing platforms and colocation facilities</li> <li>vpn - IP belongs to a VPN provider</li> <li>proxy - IP belongs to a proxy service. This includes HTTP/SOCKS proxies and browser based proxies</li> <li>university - IP belongs to a university/college/campus</li> <li>government - IP belongs to a government department. This includes military facilities</li> <li>commercial - IP belongs to a commercial entity such as a corporate headquarters or company office</li> <li>unknown - could not identify the provider type</li> </ul>
  * providerWebsite **required** `string`: The website URL for the provider
  * region **required** `string`: Full region name (if detectable)
  * valid **required** `boolean`: True if this is a valid IPv4 or IPv6 address
  * vpnDomain **required** `string`: The domain of the VPN provider (may be empty if the VPN domain is not detectable)

### Location
* Location `object`
  * address **required** `string`: The fully formatted address
  * addressComponents **required** `object`: The components which make up the address such as road, city, state etc. May also include additional metadata about the address
  * city **required** `string`: The city of the location
  * country **required** `string`: The country of the location
  * countryCode **required** `string`: The ISO 2-letter country code of the location
  * countryCode3 **required** `string`: The ISO 3-letter country code of the location
  * latitude **required** `number`: The location latitude
  * longitude **required** `number`: The location longitude
  * postalCode **required** `string`: The postal code for the location
  * state **required** `string`: The state of the location (if applicable)

### PhonePlaybackResponse
* PhonePlaybackResponse `object`
  * calling **required** `boolean`: True if the call is being made now
  * numberValid **required** `boolean`: True if this a valid phone number

### PhoneValidateResponse
* PhoneValidateResponse `object`
  * country **required** `string`: The phone number country
  * countryCode **required** `string`: The phone number country as an ISO 2-letter country code
  * countryCode3 **required** `string`: The phone number country as an ISO 3-letter country code
  * currencyCode **required** `string`: ISO 4217 currency code associated with the country
  * internationalCallingCode **required** `integer`: The international calling code
  * internationalNumber **required** `string`: The number represented in full international format (E.164)
  * isMobile **required** `boolean`: True if this is a mobile number. If the number type is unknown this value will be false
  * localNumber **required** `string`: The number represented in local dialing format
  * location **required** `string`: The phone number location. Could be the city, region or country depending on the type of number
  * prefixNetwork **required** `string`: The network/carrier who owns the prefix (this only works for some countries, use HLR lookup for global network detection)
  * type **required** `string`: The number type based on the number prefix. Possible values are: <ul> <li>mobile</li> <li>fixed-line</li> <li>premium-rate</li> <li>toll-free</li> <li>voip</li> <li>unknown (use HLR lookup)</li> </ul>
  * valid **required** `boolean`: Is this a valid phone number

### PhoneVerifyResponse
* PhoneVerifyResponse `object`
  * calling **required** `boolean`: True if the call is being made now
  * numberValid **required** `boolean`: True if this a valid phone number
  * securityCode **required** `string`: The security code generated, you can save this code to perform your own verification or you can use the <a href="https://www.neutrinoapi.com/api/verify-security-code/">Verify Security Code API</a>

### SMSMessageResponse
* SMSMessageResponse `object`
  * numberValid **required** `boolean`: True if this a valid phone number
  * sent **required** `boolean`: True if the SMS has been sent

### SMSVerifyResponse
* SMSVerifyResponse `object`
  * numberValid **required** `boolean`: True if this a valid phone number
  * securityCode **required** `string`: The security code generated, you can save this code to perform your own verification or you can use the <a href="https://www.neutrinoapi.com/api/verify-security-code/">Verify Security Code API</a>
  * sent **required** `boolean`: True if the SMS has been sent

### URLInfoResponse
* URLInfoResponse `object`
  * content **required** `string`: The actual content this URL responded with. Only set if the 'fetch-content' option was used
  * contentEncoding **required** `string`: The encoding format the URL uses
  * contentSize **required** `integer`: The size of the URL content in bytes
  * contentType **required** `string`: The content-type this URL serves
  * httpOk **required** `boolean`: True if this URL responded with an HTTP OK (200) status
  * httpRedirect **required** `boolean`: True if this URL responded with an HTTP redirect
  * httpStatus **required** `integer`: The HTTP status code this URL responded with. An HTTP status of 0 indicates a network level issue
  * httpStatusMessage **required** `integer`: The HTTP status message assoicated with the status code
  * isError **required** `boolean`: True if an error occurred while loading the URL. This includes network errors, TLS errors and timeouts
  * isTimeout **required** `boolean`: True if a timeout occurred while loading the URL. You can set the timeout with the request parameter 'timeout'
  * languageCode **required** `string`: The ISO 2-letter language code of the page. Extracted from either the HTML document or via HTTP headers
  * loadTime **required** `integer`: The time taken to load the URL content in seconds
  * query **required** `object`: A key-value map of the URL query paramaters
  * real **required** `boolean`: Is this URL actually serving real content
  * serverCity **required** `string`: The servers IP geo-location: full city name (if detectable)
  * serverCountry **required** `string`: The servers IP geo-location: full country name
  * serverCountryCode **required** `string`: The servers IP geo-location: ISO 2-letter country code
  * serverHostname **required** `string`: The servers hostname (PTR record)
  * serverIp **required** `string`: The IP address of the server hosting this URL
  * serverName **required** `string`: The name of the server software hosting this URL
  * serverRegion **required** `string`: The servers IP geo-location: full region name (if detectable)
  * title **required** `string`: The document title
  * url **required** `string`: The fully qualified URL. This may be different to the URL requested if http-redirect is true
  * urlPath **required** `string`: The URL path
  * urlPort **required** `integer`: The URL port
  * urlProtocol **required** `string`: The URL protocol, usually http or https
  * valid **required** `boolean`: Is this a valid well-formed URL

### UserAgentInfoResponse
* UserAgentInfoResponse `object`
  * browserName **required** `string`: The browser software name
  * engine **required** `string`: The browser engine name
  * engineVersion **required** `string`: The browser engine version (if detectable)
  * isAndroid **required** `boolean`: True if this is an Android based mobile user agent
  * isIos **required** `boolean`: True if this is an iOS based mobile user agent
  * isMobile **required** `boolean`: True if this is a mobile user agent
  * mobileBrand **required** `string`: The mobile device brand
  * mobileBrowser **required** `string`: The mobile device browser name (this is usually the same as the browser name)
  * mobileModel **required** `string`: The mobile device model
  * mobileScreenHeight **required** `integer`: The estimated mobile device screen height in CSS 'px'
  * mobileScreenWidth **required** `integer`: The estimated mobile device screen width in CSS 'px'
  * operatingSystem **required** `string`: The full operating system name which may include the major version number or code name
  * operatingSystemFamily **required** `string`: The operating system family name, this is the OS name without any version information
  * operatingSystemVersion **required** `string`: The operating system version number (if detectable)
  * producer **required** `string`: The producer or manufacturer of the user agent
  * type **required** `string`: The user agent type, possible values are: <ul> <li>desktop-browser</li> <li>mobile-browser</li> <li>email-client</li> <li>feed-reader</li> <li>software-library</li> <li>media-player (includes smart TVs)</li> <li>robot</li> <li>unknown</li> </ul>
  * version **required** `string`: The browser software version

### VerifySecurityCodeResponse
* VerifySecurityCodeResponse `object`
  * verified **required** `boolean`: True if the code is valid


