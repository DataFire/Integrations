# @datafire/ritekit

Client library for RiteKit API

## Installation and Usage
```bash
npm install --save @datafire/ritekit
```
```js
let ritekit = require('@datafire/ritekit').create();

.then(data => {
  console.log(data);
});
```

## Description

RiteKit API is based on REST principles.

Authentication uses standard OAuth 2.0 process

##Getting started

1. Sign up for [RiteKit](https://ritekit.com/)

1. Go to [developer dashboard](https://ritekit.com/developer/dashboard/)

1. Click "Create a token" button to get your **Client ID** and **Client secret**

1. When you reach your free limit of calls per month, [upgrade to paid tiers](https://ritekit.com/developer/)

## Options for authorizing API Calls

#### Using Client ID directly

You can directly connect to our API using your **client ID** by sending it as a GET query parameter. This option is simple (no need for oAuth) but it should be used only in case the Client ID is not exposed publicly.

GET  https://api.ritekit.com/v1/stats/multiple-hashtags?tags=php&client_id=292c6912e7710c838347ae178b4a

## Actions

### v1.emoji.auto_emojify.get
Returns text of the post with emoji added


```js
ritekit.v1.emoji.auto_emojify.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text of the post

#### Output
*Output schema unknown*

### v1.emoji.suggestions.get
Returns list of emoji suggestions for a given text of the post


```js
ritekit.v1.emoji.suggestions.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Text of the post

#### Output
*Output schema unknown*

### v1.images.animate.get
Returns URL of an animated GIF.


```js
ritekit.v1.images.animate.get({
  "url": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: URL of the company
  * type **required** `string`: URL of the company

#### Output
*Output schema unknown*

### v1.images.logo.get
Returns a company logo based on website domain. If the logo is not in our database yet, it will be extracted from the site on the fly. White logo background is automatically removed to make the logo look better on color backgrounds.

Note: It is not possible to access our company logo API publicly without authentication. If you wish to do so, you have to create proxy on your own server that calls our API from the server side.


```js
ritekit.v1.images.logo.get({
  "domain": ""
}, context)
```

#### Input
* input `object`
  * domain **required** `string`: URL of the company

#### Output
*Output schema unknown*

### v1.images.quote.get
Returns URL of an image created from text according to given style parameters


```js
ritekit.v1.images.quote.get({
  "quote": "",
  "author": "",
  "fontSize": 0,
  "quoteFont": "",
  "quoteFontColor": "",
  "authorFont": "",
  "authorFontColor": "",
  "enableHighlight": 0,
  "highlightColor": "",
  "bgType": "",
  "backgroundColor": "",
  "gradientType": "",
  "gradientColor1": "",
  "gradientColor2": "",
  "brandLogo": "",
  "animation": ""
}, context)
```

#### Input
* input `object`
  * quote **required** `string`: Text of the quote
  * author **required** `string`: Name of the author/source
  * fontSize **required** `integer`: Font size for the quote (author font size is calculated automatically)
  * quoteFont **required** `string`: Font-family used for quote text
  * quoteFontColor **required** `string`: Font color of the quote text
  * authorFont **required** `string`: Font-family used for author name
  * authorFontColor **required** `string`: Font color of the author
  * enableHighlight **required** `integer`: Enable highlight on quote text
  * highlightColor **required** `string`: Color used for highlight
  * bgType **required** `string`: Background type (gradient/solid)
  * backgroundColor **required** `string`: Background color for solid background type
  * gradientType **required** `string`: Type of gradient background (linear/radial)
  * gradientColor1 **required** `string`: First color for gradient background type
  * gradientColor2 **required** `string`: Second color for gradient background type
  * brandLogo **required** `string`: URL of the brand logo
  * animation **required** `string`: Animation type: none, rays, glint, circle
  * showQuoteMark `integer`: showing/hiding quote mark

#### Output
*Output schema unknown*

### v1.link.cta.get
Returns list of available CTA for current user. Requires each user to authenticate with RiteKit


```js
ritekit.v1.link.cta.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### v1.link.short_link.get
Returns a shorten link with a given CTA.


```js
ritekit.v1.link.short_link.get({
  "url": "",
  "cta": 0
}, context)
```

#### Input
* input `object`
  * url **required** `string`: URL
  * cta **required** `integer`: cta id

#### Output
*Output schema unknown*

### v1.search.trending.get
Returns list of hashtags currently trending on Twitter


```js
ritekit.v1.search.trending.get({}, context)
```

#### Input
* input `object`
  * green `boolean`: Restrict results only to green hashtags. Hides overused (red) hashtags.
  * latin `boolean`: Restrict results only to hashtags with latin characters

#### Output
*Output schema unknown*

### v1.stats.auto_hashtag.get
Returns auto-hashtagged text of the post.


```js
ritekit.v1.stats.auto_hashtag.get({
  "post": ""
}, context)
```

#### Input
* input `object`
  * post **required** `string`: Text of the post
  * maxHashtags `integer`: Max number of hashtags.
  * hashtagPosition `string`: Position of hashtags: end => at the end, auto => anywhere

#### Output
*Output schema unknown*

### v1.stats.hashtag_suggestions.get
Returns list of hashtag suggestions for a single-word topic or a shorter text up to 1000 characters. Takes into account both semantic relevancy and real-time hashtag popularity.


```js
ritekit.v1.stats.hashtag_suggestions.get({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`: Topic

#### Output
*Output schema unknown*

### v1.stats.history.hashtag.get
Returns historical stats for a given hashtag from the last 30 days


```js
ritekit.v1.stats.history.hashtag.get({
  "hashtag": ""
}, context)
```

#### Input
* input `object`
  * hashtag **required** `string`: Hashtag without # mark

#### Output
*Output schema unknown*

### v1.stats.multiple_hashtags.get
Returns real-time stats for up to 100 hashtags (updated hourly).


```js
ritekit.v1.stats.multiple_hashtags.get({
  "tags": []
}, context)
```

#### Input
* input `object`
  * tags **required** `array`: Hashtag(s) without # mark

#### Output
*Output schema unknown*

### v2.instagram.hashtags_cleaner.get
Remove banned hashtags before posting to Instagram


```js
ritekit.v2.instagram.hashtags_cleaner.get({
  "post": ""
}, context)
```

#### Input
* input `object`
  * post **required** `string`: post

#### Output
*Output schema unknown*



## Definitions

### Emojis


### Hashtags


### Images


### Instagram


### Link_shortening



