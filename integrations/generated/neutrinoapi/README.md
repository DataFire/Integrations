# @datafire/neutrinoapi

Client library for NeutrinoAPI

## Installation and Usage
```bash
npm install --save @datafire/neutrinoapi
```
```js
let neutrinoapi = require('@datafire/neutrinoapi').create({
  "api-key": "",
  "user-id": ""
});

neutrinoapi.bad_word_filter.post({
  "content": ""
}).then(data => {
  console.log(data);
});
```

## Description

The general-purpose API

## Actions

### bad_word_filter.post
Detect bad words, swear words and profanity in a given text


```js
neutrinoapi.bad_word_filter.post({
  "content": ""
}, context)
```

#### Input
* input `object`
  * output-case `string` (values: camel)
  * content **required** `string`: The text content to check. This can be either a URL to load content from or an actual content string
  * censor-character `string`: The character to use to censor out the bad words found

#### Output
* output [BadWordFilterResponse](#badwordfilterresponse)

### bin_lookup.post
Perform a BIN (Bank Identification Number) or IIN (Issuer Identification Number) lookup. See: https://www.neutrinoapi.com/api/bin-lookup/


```js
neutrinoapi.bin_lookup.post({
  "bin-number": ""
}, context)
```

#### Input
* input `object`
  * output-case `string` (values: camel)
  * bin-number **required** `string`: The BIN or IIN number (the first 6 digits of a credit card number)
  * customer-ip `string`: Pass in a customers remote IP address. The API will then determine the country of the IP address and match it against the BIN country. This feature is designed for fraud prevention and detection checks.

#### Output
* output [BinLookupResponse](#binlookupresponse)

### code_highlight.post
Code highlight will take raw source code and convert into nicely formatted HTML with syntax and keyword highlighting


```js
neutrinoapi.code_highlight.post({
  "content": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * content **required** `string`: The source content. This can be either a URL to load from or an actual content string
  * type **required** `string`: The code type. See the API docs for all supported types
  * add-keyword-links `boolean`: Add links on source code keywords to the relevant language documentation

#### Output
* output `string`

### Convert
A powerful unit and currency conversion tool


```js
neutrinoapi.Convert({
  "from-value": "",
  "from-type": "",
  "to-type": ""
}, context)
```

#### Input
* input `object`
  * output-case `string` (values: camel)
  * from-value **required** `string`: The value to convert from
  * from-type **required** `string`: The type of the value to convert from
  * to-type **required** `string`: The type to convert to

#### Output
* output [ConvertResponse](#convertresponse)

### email_validate.post
Parse, validate and clean an email address


```js
neutrinoapi.email_validate.post({
  "email": ""
}, context)
```

#### Input
* input `object`
  * output-case `string` (values: camel)
  * email **required** `string`: The email address
  * fix-typos `boolean`: Automatically attempt to fix typos in the address

#### Output
* output [EmailValidateResponse](#emailvalidateresponse)

### geocode_address.post
Geocode an address, partial address or the name of a location


```js
neutrinoapi.geocode_address.post({
  "address": ""
}, context)
```

#### Input
* input `object`
  * output-case `string` (values: camel)
  * address **required** `string`: The address or partial address to try and locate
  * country-code `string`: The ISO 2-letter country code to be biased towards (default is no country bias)
  * language-code `string`: The language to display results in, available languages are: de, en, es, fr, it, pt, ru
  * fuzzy-search `boolean`: If no matches are found for the given address, start performing a recursive fuzzy search until a geolocation is found. We use a combination of approximate string matching and data cleansing to find possible location matches

#### Output
* output [GeocodeAddressResponse](#geocodeaddressresponse)

### geocode_reverse.post
Convert a geographic coordinate (latitude and longitude) into a real world address or location.


```js
neutrinoapi.geocode_reverse.post({
  "latitude": 0,
  "longitude": 0
}, context)
```

#### Input
* input `object`
  * output-case `string` (values: camel)
  * latitude **required** `number`: The location latitude
  * longitude **required** `number`: The location longitude
  * language-code `string`: The language to display results in, available languages are: de, en, es, fr, it, pt, ru

#### Output
* output [GeocodeReverseResponse](#geocodereverseresponse)

### hlr_lookup.post
Connect to the global mobile cellular network and retrieve the status of a mobile device


```js
neutrinoapi.hlr_lookup.post({
  "number": ""
}, context)
```

#### Input
* input `object`
  * output-case `string` (values: camel)
  * number **required** `string`: A phone number
  * country-code `string`: ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign)

#### Output
* output [HlrLookupResponse](#hlrlookupresponse)

### host_reputation.post
Check the reputation of an IP address or domain against a comprehensive list of blacklists and blocklists (DNSBLs)


```js
neutrinoapi.host_reputation.post({
  "host": ""
}, context)
```

#### Input
* input `object`
  * output-case `string` (values: camel)
  * host **required** `string`: An IPv4 address or a domain name. If you supply a domain name it will be checked against the URI DNSBL list

#### Output
* output [HostReputationResponse](#hostreputationresponse)

### html_clean.post
Clean and sanitize untrusted HTML


```js
neutrinoapi.html_clean.post({
  "content": "",
  "output-type": ""
}, context)
```

#### Input
* input `object`
  * content **required** `string`: The HTML content. This can be either a URL to load HTML from or an actual HTML content string
  * output-type **required** `string`: The level of sanitization, possible values are: plain-text, simple-text, basic-html, basic-html-with-images, advanced-html

#### Output
* output `string`

### html_extract_tags.post
Extract specific HTML tag contents or attributes from complex HTML or XHTML content


```js
neutrinoapi.html_extract_tags.post({
  "content": "",
  "tag": ""
}, context)
```

#### Input
* input `object`
  * output-case `string` (values: camel)
  * content **required** `string`: The HTML content. This can be either a URL to load HTML from or an actual HTML content string
  * tag **required** `string`: The HTML tag(s) to extract data from. This can just be a simple tag name like 'img' OR a CSS/jQuery style selector
  * attribute `string`: If set, then extract data from the specified tag attribute. If not set, then data will be extracted from the tags inner content
  * base-url `string`: The base URL to replace into realive links

#### Output
* output [HtmlExtractResponse](#htmlextractresponse)

### html5_render.post
Render HTML and HTML5 content to PDF, JPG or PNG


```js
neutrinoapi.html5_render.post({
  "content": ""
}, context)
```

#### Input
* input `object`
  * output-case `string` (values: camel)
  * content **required** `string`: The HTML content. This can be either a URL to load HTML from or an actual HTML content string
  * format `string`: Which format to output, available options are: PDF, PNG, JPG
  * page-size `string`: Set the document page size, can be one of: A0 - A9, B0 - B10, Comm10E, DLE or Letter
  * title `string`: The document title
  * margin `integer`: The document margin (in mm)
  * margin-left `integer`: The document left margin (in mm)
  * margin-right `integer`: The document right margin (in mm)
  * margin-top `integer`: The document top margin (in mm)
  * margin-bottom `integer`: The document bottom margin (in mm)
  * landscape `boolean`: Set the document to lanscape orientation
  * zoom `number`: Set the zoom factor when rendering the page (2.0 for double size, 0.5 for half size)
  * grayscale `boolean`: Render the final document in grayscale
  * media-print `boolean`: Use @media print CSS styles to render the document
  * media-queries `boolean`: Activate all @media queries before rendering. This can be useful if you wan't to render the mobile version of a responsive website
  * forms `boolean`: Generate real (fillable) PDF forms from HTML forms
  * css `string`: Inject custom CSS into the HTML. e.g. 'body { background-color: red;}'
  * image-width `integer`: If rendering to an image format (PNG or JPG) use this image width (in pixels)
  * image-height `integer`: If rendering to an image format (PNG or JPG) use this image height (in pixels). The default is automatic which dynamically sets the image height based on the content

#### Output
* output `string`

### image_resize.post
Resize an image and output as either JPEG or PNG. See: https://www.neutrinoapi.com/api/image-resize/


```js
neutrinoapi.image_resize.post({
  "image-url": "",
  "width": 0,
  "height": 0
}, context)
```

#### Input
* input `object`
  * image-url **required** `string`: The URL to the source image
  * width **required** `integer`: Width to resize to (in px)
  * height **required** `integer`: Height to resize to (in px)
  * format `string`: The output image format, can be either png or jpg

#### Output
* output `string`

### image_watermark.post
Watermark one image with another image. See: https://www.neutrinoapi.com/api/image-watermark/


```js
neutrinoapi.image_watermark.post({
  "image-url": "",
  "watermark-url": ""
}, context)
```

#### Input
* input `object`
  * image-url **required** `string`: The URL to the source image
  * watermark-url **required** `string`: The URL to the watermark image
  * opacity `integer`: The opacity of the watermark (0 to 100)
  * format `string`: The output image format, can be either png or jpg
  * position `string`: The position of the watermark image, possible values are: center, top-left, top-center, top-right, bottom-left, bottom-center, bottom-right
  * width `integer`: If set resize the resulting image to this width (preserving aspect ratio)
  * height `integer`: If set resize the resulting image to this height (preserving aspect ratio)

#### Output
* output `string`

### ip_blocklist.post
The IP Blocklist API will detect potentially malicious or dangerous IP addresses


```js
neutrinoapi.ip_blocklist.post({
  "ip": ""
}, context)
```

#### Input
* input `object`
  * output-case `string` (values: camel)
  * ip **required** `string`: An IPv4 address

#### Output
* output [IpBlocklistResponse](#ipblocklistresponse)

### ip_info.post
Get location information about an IP address and do reverse DNS (PTR) lookups.


```js
neutrinoapi.ip_info.post({
  "ip": ""
}, context)
```

#### Input
* input `object`
  * output-case `string` (values: camel)
  * ip **required** `string`: The IP address
  * reverse-lookup `boolean`: Do a reverse DNS (PTR) lookup. This option can add extra delay to the request so only use it if you need it

#### Output
* output [IpInfoResponse](#ipinforesponse)

### ip_probe.post
Analyze and extract provider information for an IP address


```js
neutrinoapi.ip_probe.post({
  "ip": ""
}, context)
```

#### Input
* input `object`
  * output-case `string` (values: camel)
  * ip **required** `string`: IPv4 or IPv6 address

#### Output
* output [IpProbeResponse](#ipproberesponse)

### phone_playback.post
Make an automated call to any valid phone number and playback an audio message


```js
neutrinoapi.phone_playback.post({
  "number": "",
  "audio-url": ""
}, context)
```

#### Input
* input `object`
  * output-case `string` (values: camel)
  * number **required** `string`: The phone number to call. Must be valid international format
  * audio-url **required** `string`: A URL to a valid audio file. Accepted audio formats are: MP3, WAV, OGG

#### Output
* output [PhonePlaybackResponse](#phoneplaybackresponse)

### phone_validate.post
Parse, validate and get location information about a phone number


```js
neutrinoapi.phone_validate.post({
  "number": ""
}, context)
```

#### Input
* input `object`
  * output-case `string` (values: camel)
  * number **required** `string`: The phone number
  * country-code `string`: ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign)
  * ip `string`: Pass in a users IP address and we will assume numbers are based in the country of the IP address

#### Output
* output [PhoneValidateResponse](#phonevalidateresponse)

### phone_verify.post
Make an automated call to any valid phone number and playback a unique security code


```js
neutrinoapi.phone_verify.post({
  "number": ""
}, context)
```

#### Input
* input `object`
  * output-case `string` (values: camel)
  * number **required** `string`: The phone number to send the verification code to
  * code-length `integer`: The number of digits to use in the security code (between 4 and 12)
  * security-code `integer`: Pass in your own security code. This is useful if you have implemented TOTP or similar 2FA methods. If not set then we will generate a secure random code (only numerical security codes are currently supported)
  * playback-delay `integer`: The delay in milliseconds between the playback of each security code
  * country-code `string`: ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign)
  * language-code `string`: The language to playback the verification code in, available languages are: de - German, en - English, es - Spanish, fr - Fench, it - Italian, pt - Portuguese, ru - Russian

#### Output
* output [PhoneVerifyResponse](#phoneverifyresponse)

### qr_code.post
Generate a QR code as a PNG image. See: https://www.neutrinoapi.com/api/qr-code/


```js
neutrinoapi.qr_code.post({
  "content": ""
}, context)
```

#### Input
* input `object`
  * content **required** `string`: The content to encode into the QR code (e.g. a URL or a phone number)
  * width `integer`: The width of the QR code (in px)
  * height `integer`: The height of the QR code (in px)
  * fg-color `string`: The QR code foreground color (you should always use a dark color for this)
  * bg-color `string`: The QR code background color (you should always use a light color for this)

#### Output
* output `string`

### sms_verify.post
Send a unique security code to any mobile device via SMS


```js
neutrinoapi.sms_verify.post({
  "number": ""
}, context)
```

#### Input
* input `object`
  * output-case `string` (values: camel)
  * number **required** `string`: The phone number to send a verification code to
  * code-length `integer`: The number of digits to use in the security code (must be between 4 and 12)
  * security-code `integer`: ass in your own security code. This is useful if you have implemented TOTP or similar 2FA methods. If not set then we will generate a secure random code (only numerical security codes are currently supported)
  * country-code `string`: ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign)
  * language-code `string`: The language to send the verification code in, available languages are: de - German, en - English, es - Spanish, fr - Fench, it - Italian, pt - Portuguese, ru - Russian

#### Output
* output [SmsVerifyResponse](#smsverifyresponse)

### url_info.post
Parse, analyze and retrieve content from the supplied URL


```js
neutrinoapi.url_info.post({
  "url": "",
  "fetch-content": true
}, context)
```

#### Input
* input `object`
  * output-case `string` (values: camel)
  * url **required** `string`: The URL to process
  * fetch-content **required** `boolean`: If this URL responds with html, text, json or xml then return the response. This option is useful if you want to perform further processing on the URL content

#### Output
* output [UrlInfoResponse](#urlinforesponse)

### user_agent_info.post
Parse, validate and get detailed user-agent information from a user agent string


```js
neutrinoapi.user_agent_info.post({
  "user-agent": ""
}, context)
```

#### Input
* input `object`
  * output-case `string` (values: camel)
  * user-agent **required** `string`: A user-agent string

#### Output
* output [UserAgentInfoResponse](#useragentinforesponse)

### verify_security_code.post
Check if a security code from one of the verify APIs is valid


```js
neutrinoapi.verify_security_code.post({
  "security-code": 0
}, context)
```

#### Input
* input `object`
  * output-case `string` (values: camel)
  * security-code **required** `integer`: The security code to verify

#### Output
* output [VerifySecurityCodeResponse](#verifysecuritycoderesponse)



## Definitions

### ApiError
* API Error `object`
  * apiError **required** `integer`: API error code. If set and > 0 then an API error has occurred your request could not be completed
  * apiErrorMsg **required** `string`: API error message

### BadWordFilterResponse
* Bad Word Filter Response `object`
  * badWordsList **required** `array`: Array of the bad words found
    * items `string`
  * badWordsTotal **required** `integer`: Total number of bad words detected
  * censoredContent **required** `string`: The censored content (only set if censor-character has been set)
  * isBad **required** `boolean`: Does the text contain bad words

### BinLookupResponse
* BIN Lookup Response `object`
  * cardBrand **required** `string`: The card brand (e.g. Visa or Mastercard)
  * cardCategory **required** `string`: The card category (if known)
  * cardType **required** `string`: The card type, will always be one of: DEBIT, CREDIT, CHARGE CARD
  * country **required** `string`: Full country name of the issuer
  * countryCode **required** `string`: ISO 2-letter country code of the issuer
  * ipBlocklisted **required** `boolean`: True if the customer IP is listed on one of our blocklists, see the IP Blocklist API for more details
  * ipBlocklists **required** `array`: An array of strings indicating which blocklists this IP is listed on
    * items `string`
  * ipCity **required** `string`: The city name (if detectable) from the customer IP
  * ipCountry **required** `string`: The country detected from the customer IP
  * ipCountryCode **required** `string`: The ISO 2-letter country code detected from the customer IP
  * ipMatchesBin **required** `boolean`: True if the customer IP address country matches the BIN country
  * ipRegion **required** `string`: The region name (if detectable) from the customer IP
  * issuer **required** `string`: The card issuer (if known)
  * issuerPhone **required** `string`: The card issuer phone number (if known)
  * issuerWebsite **required** `string`: The card issuer website (if known)
  * valid **required** `boolean`: Is this a valid BIN or IIN number

### Blacklist
* Blacklist `object`
  * isListed **required** `boolean`: true if listed, false if not
  * listHost **required** `string`: the domain/hostname of the DNSBL
  * listName **required** `string`: the name of the DNSBL
  * listRating **required** `integer`: the list rating [1-3] with 1 being the best rating and 3 the lowest rating
  * responseTime **required** `integer`: the DNSBL server response time in milliseconds
  * txtRecord **required** `string`: the TXT record returned for this listing (if listed)

### ConvertResponse
* Convert Response `object`
  * fromType **required** `string`: The type of the value being converted from
  * fromValue **required** `string`: The value being converted from
  * result **required** `string`: The result of the conversion
  * toType **required** `string`: The type being converted to
  * valid **required** `boolean`: Was the coversion successful and produced a valid result

### EmailValidateResponse
* Email Validate Response `object`
  * domain **required** `string`: The email domain
  * domainError **required** `boolean`: True if this address has a domain error (e.g. no valid mail server records)
  * email **required** `string`: The full email address (this could be different to the supplied address if fix-typos is used)
  * isDisposable **required** `boolean`: True if this address is a disposable, temporary or darknet related email address
  * isFreemail **required** `boolean`: True if this address is a free-mail address
  * syntaxError **required** `boolean`: True if this address has a syntax error
  * typosFixed **required** `boolean`: True if typos have been fixed
  * valid **required** `boolean`: Is this a valid email

### GeocodeAddressResponse
* Geocode Address Response `object`
  * found **required** `integer`: The number of possible matching locations found
  * locations **required** `array`: Array of matching location objects
    * items [Location](#location)

### GeocodeReverseResponse
* Geocode Reverse Response `object`
  * address **required** `string`: The fully formatted address
  * addressComponents **required** `object`: The components which make up the address such as road, city, state etc. May also include additional metadata about the address
  * city **required** `string`: The city of the location
  * country **required** `string`: The country of the location
  * countryCode **required** `string`: The ISO 2-letter country code of the location
  * found **required** `boolean`: True if these coordinates map to a real location
  * postalCode **required** `string`: The postal code for the location
  * state **required** `string`: The state of the location

### HlrLookupResponse
* HLR Lookup Response `object`
  * countryCode **required** `string`: Number location ISO 2-letter country code
  * hlrStatus **required** `string`: The HLR lookup status. See API docs for specific status details
  * hlrValid **required** `boolean`: Was the HLR lookup successful. If true then this is a working and registered cell-phone or mobile device (SMS and phone calls will be delivered)
  * imsi **required** `string`: The mobile IMSI number (only set if HLR lookup valid)
  * internationalCallingCode **required** `string`: Numbers international calling code
  * internationalNumber **required** `string`: Number represented in international format
  * isMobile **required** `boolean`: Is this a mobile number
  * isPorted **required** `boolean`: Has this number been ported to another network
  * isRoaming **required** `boolean`: Is this number currently roaming from its origin country
  * localNumber **required** `string`: Number represented in local format
  * location **required** `string`: Number location (could be a city, region or country)
  * mcc **required** `string`: The mobile MCC number (only set if HLR lookup valid)
  * mnc **required** `string`: The mobile MNC number (only set if HLR lookup valid)
  * msin **required** `string`: The mobile MSIN number (only set if HLR lookup valid)
  * numberType **required** `string`: The number type, possible values are: mobile, fixed-line, premium-rate, toll-free, voip, unknown
  * numberValid **required** `boolean`: Is this a valid phone number (mobile or otherwise)
  * originNetwork **required** `string`: The origin mobile carrier name (only set if HLR lookup valid)
  * portedNetwork **required** `string`: If the number has been ported, the ported to mobile carrier name (only set if HLR lookup valid)

### HostReputationResponse
* Host Reputation Response `object`
  * isListed **required** `boolean`: Is this host blacklisted
  * listCount **required** `integer`: The number of DNSBL's the host is listed on
  * lists **required** `array`: An array of objects for each DNSBL checked
    * items [Blacklist](#blacklist)

### HtmlExtractResponse
* HTML Extract Response `object`
  * total **required** `integer`: The total number of values extracted
  * values **required** `array`: Array of extracted values
    * items `string`

### IpBlocklistResponse
* IP Blocklist Response `object`
  * isBot **required** `boolean`: IP is hosting a malicious bot or is part of a botnet
  * isDshield **required** `boolean`: IP has been flagged on DShield (dshield.org)
  * isExploitBot **required** `boolean`: IP is hosting an exploit finding bot or exploit scanning software
  * isHijacked **required** `boolean`: hijacked netblocks or netblocks controlled by criminal organizations
  * isListed **required** `boolean`: Is this IP on a blocklist
  * isMalware **required** `boolean`: IP is involved in distributing malware
  * isProxy **required** `boolean`: IP has been detected as an anonymous web proxy or anonymous HTTP proxy
  * isSpamBot **required** `boolean`: IP address is hosting a spam bot, comment spamming or other spamming software
  * isSpider **required** `boolean`: IP is a hostile spider or crawler
  * isSpyware **required** `boolean`: IP is being used by spyware, malware, botnets or for other malicious activities
  * isTor **required** `boolean`: IP is coming from a Tor node
  * isVpn **required** `boolean`: IP has been detected as coming from a VPN hosting provider
  * lastSeen **required** `integer`: The last time this IP was seen on a blocklist (in Unix time or 0 if not listed recently)
  * listCount **required** `integer`: The number of blocklists the IP is listed on

### IpInfoResponse
* IP Info Response `object`
  * city **required** `string`: Full city name (if detectable)
  * country **required** `string`: Full country name
  * countryCode **required** `string`: ISO 2-letter country code
  * hostname **required** `string`: The IPs hostname (only set if reverse-lookup has been used)
  * latitude **required** `number`: Location latitude
  * longitude **required** `number`: Location longitude
  * region **required** `string`: Full region name (if detectable)
  * valid **required** `boolean`: Is this a valid IP address

### IpProbeResponse
* IP Probe Response `object`
  * city **required** `string`: Full city name (if detectable)
  * country **required** `string`: Full country name
  * country-code **required** `string`: ISO 2-letter country code
  * hostname **required** `string`: The IPs hostname (PTR)
  * ip **required** `string`: The IP address
  * provider-description **required** `string`: A description of the provider, usually extracted from the providers website or WHOIS record
  * provider-domain **required** `string`: The domain name of the provider
  * provider-type **required** `string`: The detected provider type. See API docs for specific provider type details
  * provider-website **required** `string`: The website URL for the provider
  * region **required** `string`: Full region name (if detectable)
  * valid **required** `boolean`: Is this a valid IPv4 or IPv6 address

### Location
* Location `object`
  * address **required** `string`: The fully formatted address
  * addressComponents **required** `object`: The components which make up the address such as road, city, state etc. May also include additional metadata about the address
  * city **required** `string`: The city of the location
  * country **required** `string`: The country of the location
  * countryCode **required** `string`: The ISO 2-letter country code of the location
  * latitude **required** `number`: The location latitude
  * longitude **required** `number`: The location longitude
  * postalCode **required** `string`: The postal code for the location
  * state **required** `string`: The state of the location (if applicable)

### PhonePlaybackResponse
* Phone Playback Response `object`
  * calling **required** `boolean`: True if the call is being made now
  * number-valid **required** `boolean`: Is this a valid phone number

### PhoneValidateResponse
* Phone Validate Response `object`
  * countryCode **required** `string`: Number location ISO 2-letter country code
  * internationalCallingCode **required** `string`: Numbers international calling code
  * internationalNumber **required** `string`: Number represented in international format
  * isMobile **required** `boolean`: Is this a mobile number
  * localNumber **required** `string`: Number represented in local format
  * location **required** `string`: Number location (could be a city, region or country)
  * type **required** `string`: The number type, possible values are: mobile, fixed-line, premium-rate, toll-free, voip, unknown
  * valid **required** `boolean`: Is this a valid phone number

### PhoneVerifyResponse
* Phone Verify Response `object`
  * calling **required** `boolean`: True if the call is being made now
  * numberValid **required** `boolean`: Is this a valid phone number
  * securityCode **required** `string`: The security code generated, you can save this code to perform your own verification or you can use the Verify Security Code API

### SmsVerifyResponse
* SMS Verify Response `object`
  * numberValid **required** `boolean`: Is this a valid phone number
  * securityCode **required** `string`: The security code generated, you can save this code to perform your own verification or you can use the Verify Security Code API
  * sent **required** `boolean`: True if the SMS has been sent

### UrlInfoResponse
* URL Info Response `object`
  * content **required** `string`: The actual content this URL responded with. Only set if the 'fetch-content' option was used
  * contentEncoding **required** `string`: The encoding type the URL uses
  * contentSize **required** `integer`: The size of the URL content in bytes
  * contentType **required** `string`: The content-type the URL points to
  * httpOk **required** `boolean`: True if this URL responded with an HTTP OK (200) status
  * httpRedirect **required** `boolean`: True if this URL responded with a HTTP redirect
  * httpStatus **required** `integer`: The HTTP status code this URL responded with
  * httpStatusMessage **required** `string`: The HTTP status message assoicated with the status code
  * loadTime **required** `number`: The time taken to load the URL content (in seconds)
  * query **required** `object`: A key:value map of the URL query paramaters
  * real **required** `boolean`: Is this URL actually serving real content
  * serverCity **required** `string`: Server IP geo-location: full city name (if detectable)
  * serverCountry **required** `string`: Server IP geo-location: full country name
  * serverCountryCode **required** `string`: Server IP geo-location: ISO 2-letter country code
  * serverHostname **required** `string`: The server hostname (PTR)
  * serverIp **required** `string`: The IP address of the server hosting this URL
  * serverName **required** `string`: The name of the server software hosting this URL
  * serverRegion **required** `string`: Server IP geo-location: full region name (if detectable)
  * url **required** `string`: The fully qualified URL. This may be different to the URL requested if http-redirect is True
  * urlPath **required** `string`: The URL path
  * urlPort **required** `integer`: The URL port
  * urlProtocol **required** `string`: The URL protocol (usually http or https)
  * valid **required** `boolean`: Is this a valid well-formed URL

### UserAgentInfoResponse
* User Agent Info Response `object`
  * browserName **required** `string`: Browser software name
  * isAndroid **required** `boolean`: True if this is an Android based mobile user agent
  * isIos **required** `boolean`: True if this is an iOS based mobile user agent
  * isMobile **required** `boolean`: True if this is a mobile user-agent
  * mobileBrand **required** `string`: Mobile device brand
  * mobileBrowser **required** `string`: Mobile device browser
  * mobileModel **required** `string`: Mobile device model
  * mobileScreenHeight **required** `integer`: Mobile device screen height (in px)
  * mobileScreenWidth **required** `integer`: Mobile device screen width (in px)
  * operatingSystem **required** `string`: Operating system
  * operatingSystemFamily **required** `string`: The operating system family name, this is the OS name without any version information
  * operatingSystemVersion **required** `string`: The operating system version number (if detectable)
  * producer **required** `string`: Producer or manufacturer
  * type **required** `string`: The user-agent type, possible values are: desktop-browser, email-client, feed-reader, software-library, media-player, mobile-browser, robot, unknown
  * version **required** `string`: Software version

### VerifySecurityCodeResponse
* Verify Security Code Response `object`
  * verified **required** `boolean`: True if the code is valid


