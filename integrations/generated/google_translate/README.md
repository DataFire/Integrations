# @datafire/google_translate

Client library for Google Cloud Translation

## Installation and Usage
```bash
npm install --save datafire @datafire/google_translate
```

```js
let datafire = require('datafire');
let google_translate = require('@datafire/google_translate').actions;
let context = new datafire.Context();

google_translate.languages.list({}, context).then(data => {
  console.log(data);
})
```

## Description
The Google Cloud Translation API lets websites and programs integrate with
    Google Translate programmatically.

## Actions
### translations.list
Returns text translations from one language to another.


```js
google_translate.translations.list({
  "q": [],
  "target": ""
}, context)
```

#### Parameters
* q (array) **required** - The text to translate
* target (string) **required** - The target language into which the text should be translated
* cid (array) - The customization id for translate
* format (string) - The format of the text
* source (string) - The source language of the text
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### detections.list
Detect the language of text.


```js
google_translate.detections.list({
  "q": []
}, context)
```

#### Parameters
* q (array) **required** - The text to detect
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

### languages.list
List the source/target languages supported by the API


```js
google_translate.languages.list({}, context)
```

#### Parameters
* target (string) - the language and collation in which the localized results should be returned
* alt (string) - Data format for the response.
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. Overrides userIp if both are provided.
* userIp (string) - IP address of the site where the request originates. Use this if you want to enforce per-user limits.

