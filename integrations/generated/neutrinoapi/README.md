# @datafire/neutrinoapi
The general-purpose API

## Operation: bad_word_filter.post
Detect bad words, swear words and profanity in a given text

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "output-case": {
      "type": "string",
      "enum": [
        "camel"
      ]
    },
    "content": {
      "type": "string",
      "description": "The text content to check. This can be either a URL to load content from or an actual content string"
    },
    "censor-character": {
      "type": "string",
      "description": "The character to use to censor out the bad words found"
    }
  },
  "additionalProperties": false,
  "required": [
    "content"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BadWordFilterResponse"
}
```
## Operation: bin_lookup.post
Perform a BIN (Bank Identification Number) or IIN (Issuer Identification Number) lookup. See: https://www.neutrinoapi.com/api/bin-lookup/

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "output-case": {
      "type": "string",
      "enum": [
        "camel"
      ]
    },
    "bin-number": {
      "type": "string",
      "description": "The BIN or IIN number (the first 6 digits of a credit card number)"
    },
    "customer-ip": {
      "type": "string",
      "description": "Pass in a customers remote IP address. The API will then determine the country of the IP address and match it against the BIN country. This feature is designed for fraud prevention and detection checks."
    }
  },
  "additionalProperties": false,
  "required": [
    "bin-number"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/BinLookupResponse"
}
```
## Operation: code_highlight.post
Code highlight will take raw source code and convert into nicely formatted HTML with syntax and keyword highlighting

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "content": {
      "type": "string",
      "description": "The source content. This can be either a URL to load from or an actual content string"
    },
    "type": {
      "type": "string",
      "description": "The code type. See the API docs for all supported types"
    },
    "add-keyword-links": {
      "type": "boolean",
      "description": "Add links on source code keywords to the relevant language documentation"
    }
  },
  "additionalProperties": false,
  "required": [
    "content",
    "type"
  ]
}
```
### Output Schema
```json
{
  "format": "binary",
  "type": "string"
}
```
## Operation: Convert
A powerful unit and currency conversion tool

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "output-case": {
      "type": "string",
      "enum": [
        "camel"
      ]
    },
    "from-value": {
      "type": "string",
      "description": "The value to convert from"
    },
    "from-type": {
      "type": "string",
      "description": "The type of the value to convert from"
    },
    "to-type": {
      "type": "string",
      "description": "The type to convert to"
    }
  },
  "additionalProperties": false,
  "required": [
    "from-value",
    "from-type",
    "to-type"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ConvertResponse"
}
```
## Operation: email_validate.post
Parse, validate and clean an email address

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "output-case": {
      "type": "string",
      "enum": [
        "camel"
      ]
    },
    "email": {
      "type": "string",
      "description": "The email address"
    },
    "fix-typos": {
      "type": "boolean",
      "description": "Automatically attempt to fix typos in the address"
    }
  },
  "additionalProperties": false,
  "required": [
    "email"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/EmailValidateResponse"
}
```
## Operation: geocode_address.post
Geocode an address, partial address or the name of a location

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "output-case": {
      "type": "string",
      "enum": [
        "camel"
      ]
    },
    "address": {
      "type": "string",
      "description": "The address or partial address to try and locate"
    },
    "country-code": {
      "type": "string",
      "description": "The ISO 2-letter country code to be biased towards (default is no country bias)"
    },
    "language-code": {
      "type": "string",
      "description": "The language to display results in, available languages are: de, en, es, fr, it, pt, ru"
    },
    "fuzzy-search": {
      "type": "boolean",
      "description": "If no matches are found for the given address, start performing a recursive fuzzy search until a geolocation is found. We use a combination of approximate string matching and data cleansing to find possible location matches"
    }
  },
  "additionalProperties": false,
  "required": [
    "address"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GeocodeAddressResponse"
}
```
## Operation: geocode_reverse.post
Convert a geographic coordinate (latitude and longitude) into a real world address or location.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "output-case": {
      "type": "string",
      "enum": [
        "camel"
      ]
    },
    "latitude": {
      "type": "number",
      "format": "double",
      "description": "The location latitude"
    },
    "longitude": {
      "type": "number",
      "format": "double",
      "description": "The location longitude"
    },
    "language-code": {
      "type": "string",
      "description": "The language to display results in, available languages are: de, en, es, fr, it, pt, ru"
    }
  },
  "additionalProperties": false,
  "required": [
    "latitude",
    "longitude"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GeocodeReverseResponse"
}
```
## Operation: hlr_lookup.post
Connect to the global mobile cellular network and retrieve the status of a mobile device

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "output-case": {
      "type": "string",
      "enum": [
        "camel"
      ]
    },
    "number": {
      "type": "string",
      "description": "A phone number"
    },
    "country-code": {
      "type": "string",
      "description": "ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign)"
    }
  },
  "additionalProperties": false,
  "required": [
    "number"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/HlrLookupResponse"
}
```
## Operation: host_reputation.post
Check the reputation of an IP address or domain against a comprehensive list of blacklists and blocklists (DNSBLs)

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "output-case": {
      "type": "string",
      "enum": [
        "camel"
      ]
    },
    "host": {
      "type": "string",
      "description": "An IPv4 address or a domain name. If you supply a domain name it will be checked against the URI DNSBL list"
    }
  },
  "additionalProperties": false,
  "required": [
    "host"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/HostReputationResponse"
}
```
## Operation: html_clean.post
Clean and sanitize untrusted HTML

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "content": {
      "type": "string",
      "description": "The HTML content. This can be either a URL to load HTML from or an actual HTML content string"
    },
    "output-type": {
      "type": "string",
      "description": "The level of sanitization, possible values are: plain-text, simple-text, basic-html, basic-html-with-images, advanced-html"
    }
  },
  "additionalProperties": false,
  "required": [
    "content",
    "output-type"
  ]
}
```
### Output Schema
```json
{
  "format": "binary",
  "type": "string"
}
```
## Operation: html_extract_tags.post
Extract specific HTML tag contents or attributes from complex HTML or XHTML content

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "output-case": {
      "type": "string",
      "enum": [
        "camel"
      ]
    },
    "content": {
      "type": "string",
      "description": "The HTML content. This can be either a URL to load HTML from or an actual HTML content string"
    },
    "tag": {
      "type": "string",
      "description": "The HTML tag(s) to extract data from. This can just be a simple tag name like 'img' OR a CSS/jQuery style selector"
    },
    "attribute": {
      "type": "string",
      "description": "If set, then extract data from the specified tag attribute. If not set, then data will be extracted from the tags inner content"
    },
    "base-url": {
      "type": "string",
      "description": "The base URL to replace into realive links"
    }
  },
  "additionalProperties": false,
  "required": [
    "content",
    "tag"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/HtmlExtractResponse"
}
```
## Operation: html5_render.post
Render HTML and HTML5 content to PDF, JPG or PNG

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "output-case": {
      "type": "string",
      "description": "",
      "enum": [
        "camel"
      ]
    },
    "content": {
      "type": "string",
      "description": "The HTML content. This can be either a URL to load HTML from or an actual HTML content string"
    },
    "format": {
      "type": "string",
      "description": "Which format to output, available options are: PDF, PNG, JPG"
    },
    "page-size": {
      "type": "string",
      "description": "Set the document page size, can be one of: A0 - A9, B0 - B10, Comm10E, DLE or Letter"
    },
    "title": {
      "type": "string",
      "description": "The document title"
    },
    "margin": {
      "type": "integer",
      "format": "int32",
      "description": "The document margin (in mm)"
    },
    "margin-left": {
      "type": "integer",
      "format": "int32",
      "description": "The document left margin (in mm)"
    },
    "margin-right": {
      "type": "integer",
      "format": "int32",
      "description": "The document right margin (in mm)"
    },
    "margin-top": {
      "type": "integer",
      "format": "int32",
      "description": "The document top margin (in mm)"
    },
    "margin-bottom": {
      "type": "integer",
      "format": "int32",
      "description": "The document bottom margin (in mm)"
    },
    "landscape": {
      "type": "boolean",
      "description": "Set the document to lanscape orientation"
    },
    "zoom": {
      "type": "number",
      "format": "double",
      "description": "Set the zoom factor when rendering the page (2.0 for double size, 0.5 for half size)"
    },
    "grayscale": {
      "type": "boolean",
      "description": "Render the final document in grayscale"
    },
    "media-print": {
      "type": "boolean",
      "description": "Use @media print CSS styles to render the document"
    },
    "media-queries": {
      "type": "boolean",
      "description": "Activate all @media queries before rendering. This can be useful if you wan't to render the mobile version of a responsive website"
    },
    "forms": {
      "type": "boolean",
      "description": "Generate real (fillable) PDF forms from HTML forms"
    },
    "css": {
      "type": "string",
      "description": "Inject custom CSS into the HTML. e.g. 'body { background-color: red;}'"
    },
    "image-width": {
      "type": "integer",
      "format": "int32",
      "description": "If rendering to an image format (PNG or JPG) use this image width (in pixels)"
    },
    "image-height": {
      "type": "integer",
      "format": "int32",
      "description": "If rendering to an image format (PNG or JPG) use this image height (in pixels). The default is automatic which dynamically sets the image height based on the content"
    }
  },
  "additionalProperties": false,
  "required": [
    "content"
  ]
}
```
### Output Schema
```json
{
  "format": "binary",
  "type": "string"
}
```
## Operation: image_resize.post
Resize an image and output as either JPEG or PNG. See: https://www.neutrinoapi.com/api/image-resize/

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "image-url": {
      "type": "string",
      "description": "The URL to the source image"
    },
    "width": {
      "type": "integer",
      "format": "int32",
      "description": "Width to resize to (in px)"
    },
    "height": {
      "type": "integer",
      "format": "int32",
      "description": "Height to resize to (in px)"
    },
    "format": {
      "type": "string",
      "description": "The output image format, can be either png or jpg"
    }
  },
  "additionalProperties": false,
  "required": [
    "image-url",
    "width",
    "height"
  ]
}
```
### Output Schema
```json
{
  "format": "binary",
  "type": "string"
}
```
## Operation: image_watermark.post
Watermark one image with another image. See: https://www.neutrinoapi.com/api/image-watermark/

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "image-url": {
      "type": "string",
      "description": "The URL to the source image"
    },
    "watermark-url": {
      "type": "string",
      "description": "The URL to the watermark image"
    },
    "opacity": {
      "type": "integer",
      "format": "int32",
      "description": "The opacity of the watermark (0 to 100)"
    },
    "format": {
      "type": "string",
      "description": "The output image format, can be either png or jpg"
    },
    "position": {
      "type": "string",
      "description": "The position of the watermark image, possible values are: center, top-left, top-center, top-right, bottom-left, bottom-center, bottom-right"
    },
    "width": {
      "type": "integer",
      "format": "int32",
      "description": "If set resize the resulting image to this width (preserving aspect ratio)"
    },
    "height": {
      "type": "integer",
      "format": "int32",
      "description": "If set resize the resulting image to this height (preserving aspect ratio)"
    }
  },
  "additionalProperties": false,
  "required": [
    "image-url",
    "watermark-url"
  ]
}
```
### Output Schema
```json
{
  "format": "binary",
  "type": "string"
}
```
## Operation: ip_blocklist.post
The IP Blocklist API will detect potentially malicious or dangerous IP addresses

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "output-case": {
      "type": "string",
      "enum": [
        "camel"
      ]
    },
    "ip": {
      "type": "string",
      "description": "An IPv4 address"
    }
  },
  "additionalProperties": false,
  "required": [
    "ip"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IpBlocklistResponse"
}
```
## Operation: ip_info.post
Get location information about an IP address and do reverse DNS (PTR) lookups.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "output-case": {
      "type": "string",
      "enum": [
        "camel"
      ]
    },
    "ip": {
      "type": "string",
      "description": "The IP address"
    },
    "reverse-lookup": {
      "type": "boolean",
      "description": "Do a reverse DNS (PTR) lookup. This option can add extra delay to the request so only use it if you need it"
    }
  },
  "additionalProperties": false,
  "required": [
    "ip"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IpInfoResponse"
}
```
## Operation: ip_probe.post
Analyze and extract provider information for an IP address

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "output-case": {
      "type": "string",
      "description": "",
      "enum": [
        "camel"
      ]
    },
    "ip": {
      "type": "string",
      "description": "IPv4 or IPv6 address"
    }
  },
  "additionalProperties": false,
  "required": [
    "ip"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/IpProbeResponse"
}
```
## Operation: phone_playback.post
Make an automated call to any valid phone number and playback an audio message

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "output-case": {
      "type": "string",
      "enum": [
        "camel"
      ]
    },
    "number": {
      "type": "string",
      "description": "The phone number to call. Must be valid international format"
    },
    "audio-url": {
      "type": "string",
      "description": "A URL to a valid audio file. Accepted audio formats are: MP3, WAV, OGG"
    }
  },
  "additionalProperties": false,
  "required": [
    "number",
    "audio-url"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PhonePlaybackResponse"
}
```
## Operation: phone_validate.post
Parse, validate and get location information about a phone number

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "output-case": {
      "type": "string",
      "enum": [
        "camel"
      ]
    },
    "number": {
      "type": "string",
      "description": "The phone number"
    },
    "country-code": {
      "type": "string",
      "description": "ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign)"
    },
    "ip": {
      "type": "string",
      "description": "Pass in a users IP address and we will assume numbers are based in the country of the IP address"
    }
  },
  "additionalProperties": false,
  "required": [
    "number"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PhoneValidateResponse"
}
```
## Operation: phone_verify.post
Make an automated call to any valid phone number and playback a unique security code

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "output-case": {
      "type": "string",
      "enum": [
        "camel"
      ]
    },
    "number": {
      "type": "string",
      "description": "The phone number to send the verification code to"
    },
    "code-length": {
      "type": "integer",
      "format": "int32",
      "description": "The number of digits to use in the security code (between 4 and 12)"
    },
    "security-code": {
      "type": "integer",
      "format": "int32",
      "description": "Pass in your own security code. This is useful if you have implemented TOTP or similar 2FA methods. If not set then we will generate a secure random code (only numerical security codes are currently supported)"
    },
    "playback-delay": {
      "type": "integer",
      "format": "int32",
      "description": "The delay in milliseconds between the playback of each security code"
    },
    "country-code": {
      "type": "string",
      "description": "ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign)"
    },
    "language-code": {
      "type": "string",
      "description": "The language to playback the verification code in, available languages are: de - German, en - English, es - Spanish, fr - Fench, it - Italian, pt - Portuguese, ru - Russian"
    }
  },
  "additionalProperties": false,
  "required": [
    "number"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PhoneVerifyResponse"
}
```
## Operation: qr_code.post
Generate a QR code as a PNG image. See: https://www.neutrinoapi.com/api/qr-code/

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "content": {
      "type": "string",
      "description": "The content to encode into the QR code (e.g. a URL or a phone number)"
    },
    "width": {
      "type": "integer",
      "format": "int32",
      "description": "The width of the QR code (in px)"
    },
    "height": {
      "type": "integer",
      "format": "int32",
      "description": "The height of the QR code (in px)"
    },
    "fg-color": {
      "type": "string",
      "description": "The QR code foreground color (you should always use a dark color for this)"
    },
    "bg-color": {
      "type": "string",
      "description": "The QR code background color (you should always use a light color for this)"
    }
  },
  "additionalProperties": false,
  "required": [
    "content"
  ]
}
```
### Output Schema
```json
{
  "format": "binary",
  "type": "string"
}
```
## Operation: sms_verify.post
Send a unique security code to any mobile device via SMS

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "output-case": {
      "type": "string",
      "enum": [
        "camel"
      ]
    },
    "number": {
      "type": "string",
      "description": "The phone number to send a verification code to"
    },
    "code-length": {
      "type": "integer",
      "format": "int32",
      "description": "The number of digits to use in the security code (must be between 4 and 12)"
    },
    "security-code": {
      "type": "integer",
      "format": "int32",
      "description": "ass in your own security code. This is useful if you have implemented TOTP or similar 2FA methods. If not set then we will generate a secure random code (only numerical security codes are currently supported)"
    },
    "country-code": {
      "type": "string",
      "description": "ISO 2-letter country code, assume numbers are based in this country. If not set numbers are assumed to be in international format (with or without the leading + sign)"
    },
    "language-code": {
      "type": "string",
      "description": "The language to send the verification code in, available languages are: de - German, en - English, es - Spanish, fr - Fench, it - Italian, pt - Portuguese, ru - Russian"
    }
  },
  "additionalProperties": false,
  "required": [
    "number"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SmsVerifyResponse"
}
```
## Operation: url_info.post
Parse, analyze and retrieve content from the supplied URL

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "output-case": {
      "type": "string",
      "enum": [
        "camel"
      ]
    },
    "url": {
      "type": "string",
      "description": "The URL to process"
    },
    "fetch-content": {
      "type": "boolean",
      "description": "If this URL responds with html, text, json or xml then return the response. This option is useful if you want to perform further processing on the URL content"
    }
  },
  "additionalProperties": false,
  "required": [
    "url",
    "fetch-content"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UrlInfoResponse"
}
```
## Operation: user_agent_info.post
Parse, validate and get detailed user-agent information from a user agent string

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "output-case": {
      "type": "string",
      "enum": [
        "camel"
      ]
    },
    "user-agent": {
      "type": "string",
      "description": "A user-agent string"
    }
  },
  "additionalProperties": false,
  "required": [
    "user-agent"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserAgentInfoResponse"
}
```
## Operation: verify_security_code.post
Check if a security code from one of the verify APIs is valid

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "output-case": {
      "type": "string",
      "enum": [
        "camel"
      ]
    },
    "security-code": {
      "type": "integer",
      "format": "int32",
      "description": "The security code to verify"
    }
  },
  "additionalProperties": false,
  "required": [
    "security-code"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/VerifySecurityCodeResponse"
}
```
