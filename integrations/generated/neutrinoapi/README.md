# @datafire/neutrinoapi

Client library for NeutrinoAPI

## Installation and Usage
```bash
npm install --save datafire @datafire/neutrinoapi
```

```js
let datafire = require('datafire');
let neutrinoapi = require('@datafire/neutrinoapi').actions;

let account = {
  api-key: "",
  user-id: "",
}
let context = new datafire.Context({
  accounts: {
    neutrinoapi: account,
  }
})


neutrinoapi.bad_word_filter.post({}, context).then(data => {
  console.log(data);
})
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

#### Parameters
* output-case (string)
* content (string) **required** - The text content to check. This can be either a URL to load content from or an actual content string
* censor-character (string) - The character to use to censor out the bad words found

### bin_lookup.post
Perform a BIN (Bank Identification Number) or IIN (Issuer Identification Number) lookup. See: https://www.neutrinoapi.com/api/bin-lookup/


```js
neutrinoapi.bin_lookup.post({
  "bin-number": ""
}, context)
```

#### Parameters
* output-case (string)
* bin-number (string) **required** - The BIN or IIN number (the first 6 digits of a credit card number)
* customer-ip (string) - Pass in a customers remote IP address. The API will then determine the country of the IP address and match it against the BIN country. This feature is designed for fraud prevention and detection checks.

### code_highlight.post
Code highlight will take raw source code and convert into nicely formatted HTML with syntax and keyword highlighting


```js
neutrinoapi.code_highlight.post({
  "content": "",
  "type": ""
}, context)
```

#### Parameters
* content (string) **required** - The source content. This can be either a URL to load from or an actual content string
* type (string) **required** - The code type. See the API docs for all supported types
* add-keyword-links (boolean) - Add links on source code keywords to the relevant language documentation

### Convert
A powerful unit and currency conversion tool


```js
neutrinoapi.Convert({
  "from-value": "",
  "from-type": "",
  "to-type": ""
}, context)
```

#### Parameters
* output-case (string)
* from-value (string) **required** - The value to convert from
* from-type (string) **required** - The type of the value to convert from
* to-type (string) **required** - The type to convert to

### email_validate.post
Parse, validate and clean an email address


```js
neutrinoapi.email_validate.post({
  "email": ""
}, context)
```

#### Parameters
* output-case (string)
* email (string) **required** - The email address
* fix-typos (boolean) - Automatically attempt to fix typos in the address

### geocode_address.post
Geocode an address, partial address or the name of a location


```js
neutrinoapi.geocode_address.post({
  "address": ""
}, context)
```

#### Parameters
* output-case (string)
* address (string) **required** - The address or partial address to try and locate
* country-code (string) - The ISO 2-letter country code to be biased towards (default is no country bias)
* language-code (string) - The language to display results in, available languages are: de, en, es, fr, it, pt, ru
* fuzzy-search (boolean) - If no matches are found for the given address, start performing a recursive fuzzy search until a geolocation is found. We use a combination of approximate string matching and data cleansing to find possible location matches

### geocode_reverse.post
Convert a geographic coordinate (latitude and longitude) into a real world address or location.


```js
neutrinoapi.geocode_reverse.post({
  "latitude": 0,
  "longitude": 0
}, context)
```

#### Parameters
* output-case (string)
* latitude (number) **required** - The location latitude
* longitude (number) **required** - The location longitude
* language-code (string) - The language to display results in, available languages are: de, en, es, fr, it, pt, ru

### hlr_lookup.post
Connect to the global mobile cellular network and retrieve the status of a mobile device


```js
neutrinoapi.hlr_lookup.post({
  "number": ""
}, context)
```

#### Parameters
* output-case (string)
* number (string) **required** - A phone number
* country-code (string) - ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign)

### host_reputation.post
Check the reputation of an IP address or domain against a comprehensive list of blacklists and blocklists (DNSBLs)


```js
neutrinoapi.host_reputation.post({
  "host": ""
}, context)
```

#### Parameters
* output-case (string)
* host (string) **required** - An IPv4 address or a domain name. If you supply a domain name it will be checked against the URI DNSBL list

### html_clean.post
Clean and sanitize untrusted HTML


```js
neutrinoapi.html_clean.post({
  "content": "",
  "output-type": ""
}, context)
```

#### Parameters
* content (string) **required** - The HTML content. This can be either a URL to load HTML from or an actual HTML content string
* output-type (string) **required** - The level of sanitization, possible values are: plain-text, simple-text, basic-html, basic-html-with-images, advanced-html

### html_extract_tags.post
Extract specific HTML tag contents or attributes from complex HTML or XHTML content


```js
neutrinoapi.html_extract_tags.post({
  "content": "",
  "tag": ""
}, context)
```

#### Parameters
* output-case (string)
* content (string) **required** - The HTML content. This can be either a URL to load HTML from or an actual HTML content string
* tag (string) **required** - The HTML tag(s) to extract data from. This can just be a simple tag name like 'img' OR a CSS/jQuery style selector
* attribute (string) - If set, then extract data from the specified tag attribute. If not set, then data will be extracted from the tags inner content
* base-url (string) - The base URL to replace into realive links

### html5_render.post
Render HTML and HTML5 content to PDF, JPG or PNG


```js
neutrinoapi.html5_render.post({
  "content": ""
}, context)
```

#### Parameters
* output-case (string)
* content (string) **required** - The HTML content. This can be either a URL to load HTML from or an actual HTML content string
* format (string) - Which format to output, available options are: PDF, PNG, JPG
* page-size (string) - Set the document page size, can be one of: A0 - A9, B0 - B10, Comm10E, DLE or Letter
* title (string) - The document title
* margin (integer) - The document margin (in mm)
* margin-left (integer) - The document left margin (in mm)
* margin-right (integer) - The document right margin (in mm)
* margin-top (integer) - The document top margin (in mm)
* margin-bottom (integer) - The document bottom margin (in mm)
* landscape (boolean) - Set the document to lanscape orientation
* zoom (number) - Set the zoom factor when rendering the page (2.0 for double size, 0.5 for half size)
* grayscale (boolean) - Render the final document in grayscale
* media-print (boolean) - Use @media print CSS styles to render the document
* media-queries (boolean) - Activate all @media queries before rendering. This can be useful if you wan't to render the mobile version of a responsive website
* forms (boolean) - Generate real (fillable) PDF forms from HTML forms
* css (string) - Inject custom CSS into the HTML. e.g. 'body { background-color: red;}'
* image-width (integer) - If rendering to an image format (PNG or JPG) use this image width (in pixels)
* image-height (integer) - If rendering to an image format (PNG or JPG) use this image height (in pixels). The default is automatic which dynamically sets the image height based on the content

### image_resize.post
Resize an image and output as either JPEG or PNG. See: https://www.neutrinoapi.com/api/image-resize/


```js
neutrinoapi.image_resize.post({
  "image-url": "",
  "width": 0,
  "height": 0
}, context)
```

#### Parameters
* image-url (string) **required** - The URL to the source image
* width (integer) **required** - Width to resize to (in px)
* height (integer) **required** - Height to resize to (in px)
* format (string) - The output image format, can be either png or jpg

### image_watermark.post
Watermark one image with another image. See: https://www.neutrinoapi.com/api/image-watermark/


```js
neutrinoapi.image_watermark.post({
  "image-url": "",
  "watermark-url": ""
}, context)
```

#### Parameters
* image-url (string) **required** - The URL to the source image
* watermark-url (string) **required** - The URL to the watermark image
* opacity (integer) - The opacity of the watermark (0 to 100)
* format (string) - The output image format, can be either png or jpg
* position (string) - The position of the watermark image, possible values are: center, top-left, top-center, top-right, bottom-left, bottom-center, bottom-right
* width (integer) - If set resize the resulting image to this width (preserving aspect ratio)
* height (integer) - If set resize the resulting image to this height (preserving aspect ratio)

### ip_blocklist.post
The IP Blocklist API will detect potentially malicious or dangerous IP addresses


```js
neutrinoapi.ip_blocklist.post({
  "ip": ""
}, context)
```

#### Parameters
* output-case (string)
* ip (string) **required** - An IPv4 address

### ip_info.post
Get location information about an IP address and do reverse DNS (PTR) lookups.


```js
neutrinoapi.ip_info.post({
  "ip": ""
}, context)
```

#### Parameters
* output-case (string)
* ip (string) **required** - The IP address
* reverse-lookup (boolean) - Do a reverse DNS (PTR) lookup. This option can add extra delay to the request so only use it if you need it

### ip_probe.post
Analyze and extract provider information for an IP address


```js
neutrinoapi.ip_probe.post({
  "ip": ""
}, context)
```

#### Parameters
* output-case (string)
* ip (string) **required** - IPv4 or IPv6 address

### phone_playback.post
Make an automated call to any valid phone number and playback an audio message


```js
neutrinoapi.phone_playback.post({
  "number": "",
  "audio-url": ""
}, context)
```

#### Parameters
* output-case (string)
* number (string) **required** - The phone number to call. Must be valid international format
* audio-url (string) **required** - A URL to a valid audio file. Accepted audio formats are: MP3, WAV, OGG

### phone_validate.post
Parse, validate and get location information about a phone number


```js
neutrinoapi.phone_validate.post({
  "number": ""
}, context)
```

#### Parameters
* output-case (string)
* number (string) **required** - The phone number
* country-code (string) - ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign)
* ip (string) - Pass in a users IP address and we will assume numbers are based in the country of the IP address

### phone_verify.post
Make an automated call to any valid phone number and playback a unique security code


```js
neutrinoapi.phone_verify.post({
  "number": ""
}, context)
```

#### Parameters
* output-case (string)
* number (string) **required** - The phone number to send the verification code to
* code-length (integer) - The number of digits to use in the security code (between 4 and 12)
* security-code (integer) - Pass in your own security code. This is useful if you have implemented TOTP or similar 2FA methods. If not set then we will generate a secure random code (only numerical security codes are currently supported)
* playback-delay (integer) - The delay in milliseconds between the playback of each security code
* country-code (string) - ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign)
* language-code (string) - The language to playback the verification code in, available languages are: de - German, en - English, es - Spanish, fr - Fench, it - Italian, pt - Portuguese, ru - Russian

### qr_code.post
Generate a QR code as a PNG image. See: https://www.neutrinoapi.com/api/qr-code/


```js
neutrinoapi.qr_code.post({
  "content": ""
}, context)
```

#### Parameters
* content (string) **required** - The content to encode into the QR code (e.g. a URL or a phone number)
* width (integer) - The width of the QR code (in px)
* height (integer) - The height of the QR code (in px)
* fg-color (string) - The QR code foreground color (you should always use a dark color for this)
* bg-color (string) - The QR code background color (you should always use a light color for this)

### sms_verify.post
Send a unique security code to any mobile device via SMS


```js
neutrinoapi.sms_verify.post({
  "number": ""
}, context)
```

#### Parameters
* output-case (string)
* number (string) **required** - The phone number to send a verification code to
* code-length (integer) - The number of digits to use in the security code (must be between 4 and 12)
* security-code (integer) - ass in your own security code. This is useful if you have implemented TOTP or similar 2FA methods. If not set then we will generate a secure random code (only numerical security codes are currently supported)
* country-code (string) - ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign)
* language-code (string) - The language to send the verification code in, available languages are: de - German, en - English, es - Spanish, fr - Fench, it - Italian, pt - Portuguese, ru - Russian

### url_info.post
Parse, analyze and retrieve content from the supplied URL


```js
neutrinoapi.url_info.post({
  "url": "",
  "fetch-content": true
}, context)
```

#### Parameters
* output-case (string)
* url (string) **required** - The URL to process
* fetch-content (boolean) **required** - If this URL responds with html, text, json or xml then return the response. This option is useful if you want to perform further processing on the URL content

### user_agent_info.post
Parse, validate and get detailed user-agent information from a user agent string


```js
neutrinoapi.user_agent_info.post({
  "user-agent": ""
}, context)
```

#### Parameters
* output-case (string)
* user-agent (string) **required** - A user-agent string

### verify_security_code.post
Check if a security code from one of the verify APIs is valid


```js
neutrinoapi.verify_security_code.post({
  "security-code": 0
}, context)
```

#### Parameters
* output-case (string)
* security-code (integer) **required** - The security code to verify

