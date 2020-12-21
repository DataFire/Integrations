# @datafire/languagetool

Client library for LanguageTool API

## Installation and Usage
```bash
npm install --save @datafire/languagetool
```
```js
let languagetool = require('@datafire/languagetool').create();

.then(data => {
  console.log(data);
});
```

## Description

Check texts for style and grammar issues with LanguageTool. Please consider the following default limitations:<ul><li>your daily request limit depending on <a href='https://languagetool.org/editor/settings/api'>your plan</a> <li>maximum number of requests per minute: 20 (free) / 80 (Premium) <li>maximum number of characters per minute: 75,000 (free) / 300,000 (Premium) <li>maximum number of characters per request: 20,000 (free) / 40,000 (Premium) <li>for the free version, also consider the <a href='https://dev.languagetool.org/public-http-api'>limitations documented here</a> <li><b>Note:</b> any parameters or outputs not part of this documentation are internal and must not be relied on</ul> Need more generous limits? Just <a href='https://languagetool.org/proofreading-api'>contact us</a>.

## Actions

### check.post
The main feature - check a text with LanguageTool for possible style and grammar issues.


```js
languagetool.check.post({
  "language": ""
}, context)
```

#### Input
* input `object`
  * text `string`: The text to be checked. This or 'data' is required.
  * data `string`: The text to be checked, given as a JSON document that specifies what's text and what's markup. This or 'text' is required. Markup will be ignored when looking for errors. Example text: <pre>A &lt;b>test&lt;/b></pre>JSON for the example text: <pre>{"annotation":[
  * language **required** `string`: A language code like `en-US`, `de-DE`, `fr`, or `auto` to guess the language automatically (see `preferredVariants` below). For languages with variants (English, German, Portuguese) spell checking will only be activated when you specify the variant, e.g. `en-GB` instead of just `en`.
  * username `string`: Set to get Premium API access: Your username/email as used to log in at languagetool.org.
  * apiKey `string`: Set to get Premium API access: <a target='_blank' href='https://languagetool.org/editor/settings/api'>your API key</a>
  * dicts `string`: Comma-separated list of dictionaries to include words from; uses special default dictionary if this is unset
  * motherTongue `string`: A language code of the user's native language, enabling false friends checks for some language pairs.
  * preferredVariants `string`: Comma-separated list of preferred language variants. The language detector used with `language=auto` can detect e.g. English, but it cannot decide whether British English or American English is used. Thus this parameter can be used to specify the preferred variants like `en-GB` and `de-AT`. Only available with `language=auto`. You should set variants for at least German and English, as otherwise the spell checking will not work for those, as no spelling dictionary can be selected for just `en` or `de`.
  * enabledRules `string`: IDs of rules to be enabled, comma-separated
  * disabledRules `string`: IDs of rules to be disabled, comma-separated
  * enabledCategories `string`: IDs of categories to be enabled, comma-separated
  * disabledCategories `string`: IDs of categories to be disabled, comma-separated
  * enabledOnly `boolean`: If true, only the rules and categories whose IDs are specified with `enabledRules` or `enabledCategories` are enabled.
  * level `string` (values: default, picky): If set to `picky`, additional rules will be activated, i.e. rules that you might only find useful when checking formal text.

#### Output
* output `object`
  * language `object`: The language used for checking the text.
    * code **required** `string`: ISO 639-1 code like 'en', 'en-US', or 'ca-ES-valencia'
    * detectedLanguage **required** `object`: The automatically detected text language (might be different from the language actually used for checking).
      * code **required** `string`: ISO 639-1 code like 'en', 'en-US', or 'ca-ES-valencia'.
      * name **required** `string`: Language name like 'French' or 'English (US)'.
    * name **required** `string`: Language name like 'French' or 'English (US)'.
  * matches `array`
    * items `object`
      * context **required** `object`
        * length **required** `integer`: The length of the error in characters in the context.
        * offset **required** `integer`: The 0-based character offset of the error in the context text.
        * text **required** `string`: Context of the error, i.e. the error and some text to the left and to the left.
      * length **required** `integer`: The length of the error in characters.
      * message **required** `string`: Message about the error displayed to the user.
      * offset **required** `integer`: The 0-based character offset of the error in the text.
      * replacements **required** `array`: Replacements that might correct the error. The array can be empty, in this case there is no suggested replacement.
        * items `object`
          * value `string`: the replacement string
      * rule `object`
        * category **required** `object`
          * id `string`: A category's identifier that's unique for this language.
          * name `string`: A short description of the category.
        * description **required** `string`
        * id **required** `string`: An rule's identifier that's unique for this language.
        * issueType `string`: The <a href="http://www.w3.org/International/multilingualweb/lt/drafts/its20/its20.html#lqissue-typevalues">Localization Quality Issue Type</a>. This is not defined for all languages, in which case it will always be 'Uncategorized'.
        * subId `string`: An optional sub identifier of the rule, used when several rules are grouped.
        * urls `array`: An optional array of URLs with a more detailed description of the error.
          * items `object`
      * sentence **required** `string`: The sentence the error occurred in (since LanguageTool 4.0 or later)
      * shortMessage `string`: An optional shorter version of 'message'.
  * software `object`
    * apiVersion **required** `integer`: Version of this API response. We don't expect to make incompatible changes, so this can also be increased for newly added fields.
    * buildDate **required** `string`: Date when the software was built, e.g. '2016-05-25'.
    * name **required** `string`: Usually 'LanguageTool'.
    * premium `boolean`: true if you're using a Premium account with all the premium text checks (since LanguageTool 4.2)
    * status `string`: An optional warning, e.g. when the API format is not stable.
    * version **required** `string`: A version string like '3.3' or '3.4-SNAPSHOT'.

### languages.get
Get a list of supported languages.


```js
languagetool.languages.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `object`
    * code **required** `string`: a language code like 'en'
    * longCode **required** `string`: a language code like 'en-US' or 'ca-ES-valencia'
    * name **required** `string`: a language name like 'French' or 'English (Australia)'

### words.get
List words in the user's personal dictionaries.


```js
languagetool.words.get({
  "username": "",
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * offset `integer`: Offset of where to start in the list of words. Defaults to 0.
  * limit `integer`: Maximum number of words to return. Defaults to 10.
  * username **required** `string`: Your username as used to log in at languagetool.org.
  * apiKey **required** `string`: Your API key.
  * dicts `string`: Comma-separated list of dictionaries to include words from; uses special default dictionary if this is unset

#### Output
* output `object`
  * words `array`: array of words
    * items `string`

### words.add.post
Add a word to one of the user's personal dictionaries. Please note that this feature is considered to be used for personal dictionaries which typically contain not more than a few hundred items per user. Adding more can have adverse effects on performance for every single text check. If this becomes an issue for you, contact us. Experimental user dictionary caching can be enabled by us on a per-account basis.


```js
languagetool.words.add.post({
  "word": "",
  "username": "",
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * word **required** `string`: The word to be added. Must not be a phrase, i.e. cannot contain white space. The word is added to a global dictionary that applies to all languages.
  * username **required** `string`: Your username as used to log in at languagetool.org.
  * apiKey **required** `string`: Your API key.
  * dict `string`: Name of the dictionary to add the word to; non-existent dictionaries are created after calling this; if unset, adds to special default dictionary

#### Output
* output `object`
  * added `boolean`: true if the word has been added. false means the word hasn't been added because it had been added before.

### words.delete.post
Remove a word from one of the user's personal dictionaries.


```js
languagetool.words.delete.post({
  "word": "",
  "username": "",
  "apiKey": ""
}, context)
```

#### Input
* input `object`
  * word **required** `string`: The word to be removed.
  * username **required** `string`: Your username as used to log in at languagetool.org.
  * apiKey **required** `string`: Your API key.
  * dict `string`: Name of the dictionary to remove the word from; if the dictionary is empty upon calling this, it is deleted; if unset, removes from special default dictionary

#### Output
* output `object`
  * deleted `boolean`: true if the word has been removed. false means the word hasn't been removed because it was not in the dictionary.



## Definitions

*This integration has no definitions*
