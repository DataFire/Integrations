# @datafire/webscraping_ai

Client library for WebScraping.AI

## Installation and Usage
```bash
npm install --save @datafire/webscraping_ai
```
```js
let webscraping_ai = require('@datafire/webscraping_ai').create({
  api_key: ""
});

.then(data => {
  console.log(data);
});
```

## Description

A client for https://webscraping.ai API. It provides a web scaping automation API with Chrome JS rendering, rotating proxies and builtin HTML parsing.

## Actions

### getHTML
Returns just HTML on success, JSON on error


```js
webscraping_ai.getHTML({
  "url": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: URL of the target page
  * headers `object`: HTTP headers to pass to the target page. Can be specified either via a nested query parameter (...&headers[One]=value1&headers=[Another]=value2) or as a JSON encoded object (...&headers={"One": "value1", "Another": "value2"})
  * timeout `integer`: Maximum processing time in ms. Increase it in case of timeout errors (5000 by default, maximum is 30000)
  * js `boolean`: Execute on-page JavaScript using a headless browser (true by default)
  * proxy `string` (values: datacenter, residential): Type of proxy, use residential proxies if your site restricts traffic from datacenters (datacenter by default). Note that residential proxy requests are more expensive than datacenter, see the pricing page for details.

#### Output
* output `string`

### postHTML
Returns just HTML on success, JSON on error. Request body will be passed to the target page.


```js
webscraping_ai.postHTML({
  "url": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: URL of the target page
  * headers `object`: HTTP headers to pass to the target page. Can be specified either via a nested query parameter (...&headers[One]=value1&headers=[Another]=value2) or as a JSON encoded object (...&headers={"One": "value1", "Another": "value2"})
  * timeout `integer`: Maximum processing time in ms. Increase it in case of timeout errors (5000 by default, maximum is 30000)
  * js `boolean`: Execute on-page JavaScript using a headless browser (true by default)
  * proxy `string` (values: datacenter, residential): Type of proxy, use residential proxies if your site restricts traffic from datacenters (datacenter by default). Note that residential proxy requests are more expensive than datacenter, see the pricing page for details.
  * body `object`

#### Output
* output `string`

### getSelected
Returns just HTML on success, JSON on error


```js
webscraping_ai.getSelected({
  "url": ""
}, context)
```

#### Input
* input `object`
  * selector `string`: CSS selector (null by default, returns whole page HTML)
  * url **required** `string`: URL of the target page
  * headers `object`: HTTP headers to pass to the target page. Can be specified either via a nested query parameter (...&headers[One]=value1&headers=[Another]=value2) or as a JSON encoded object (...&headers={"One": "value1", "Another": "value2"})
  * timeout `integer`: Maximum processing time in ms. Increase it in case of timeout errors (5000 by default, maximum is 30000)
  * js `boolean`: Execute on-page JavaScript using a headless browser (true by default)
  * proxy `string` (values: datacenter, residential): Type of proxy, use residential proxies if your site restricts traffic from datacenters (datacenter by default). Note that residential proxy requests are more expensive than datacenter, see the pricing page for details.

#### Output
* output `string`

### postSelected
Returns just HTML on success, JSON on error. Request body will be passed to the target page.


```js
webscraping_ai.postSelected({
  "url": ""
}, context)
```

#### Input
* input `object`
  * selector `string`: CSS selector (null by default, returns whole page HTML)
  * url **required** `string`: URL of the target page
  * headers `object`: HTTP headers to pass to the target page. Can be specified either via a nested query parameter (...&headers[One]=value1&headers=[Another]=value2) or as a JSON encoded object (...&headers={"One": "value1", "Another": "value2"})
  * timeout `integer`: Maximum processing time in ms. Increase it in case of timeout errors (5000 by default, maximum is 30000)
  * js `boolean`: Execute on-page JavaScript using a headless browser (true by default)
  * proxy `string` (values: datacenter, residential): Type of proxy, use residential proxies if your site restricts traffic from datacenters (datacenter by default). Note that residential proxy requests are more expensive than datacenter, see the pricing page for details.
  * body `object`

#### Output
* output `string`

### getSelectedMultiple
Always returns JSON


```js
webscraping_ai.getSelectedMultiple({
  "url": ""
}, context)
```

#### Input
* input `object`
  * selectors `array`: Multiple CSS selectors (null by default, returns whole page HTML)
  * url **required** `string`: URL of the target page
  * headers `object`: HTTP headers to pass to the target page. Can be specified either via a nested query parameter (...&headers[One]=value1&headers=[Another]=value2) or as a JSON encoded object (...&headers={"One": "value1", "Another": "value2"})
  * timeout `integer`: Maximum processing time in ms. Increase it in case of timeout errors (5000 by default, maximum is 30000)
  * js `boolean`: Execute on-page JavaScript using a headless browser (true by default)
  * proxy `string` (values: datacenter, residential): Type of proxy, use residential proxies if your site restricts traffic from datacenters (datacenter by default). Note that residential proxy requests are more expensive than datacenter, see the pricing page for details.

#### Output
* output [SelectedAreas](#selectedareas)

### postSelectedMultiple
Always returns JSON. Request body will be passed to the target page.


```js
webscraping_ai.postSelectedMultiple({
  "url": ""
}, context)
```

#### Input
* input `object`
  * selectors `array`: Multiple CSS selectors (null by default, returns whole page HTML)
  * url **required** `string`: URL of the target page
  * headers `object`: HTTP headers to pass to the target page. Can be specified either via a nested query parameter (...&headers[One]=value1&headers=[Another]=value2) or as a JSON encoded object (...&headers={"One": "value1", "Another": "value2"})
  * timeout `integer`: Maximum processing time in ms. Increase it in case of timeout errors (5000 by default, maximum is 30000)
  * js `boolean`: Execute on-page JavaScript using a headless browser (true by default)
  * proxy `string` (values: datacenter, residential): Type of proxy, use residential proxies if your site restricts traffic from datacenters (datacenter by default). Note that residential proxy requests are more expensive than datacenter, see the pricing page for details.
  * body `object`

#### Output
* output [SelectedAreas](#selectedareas)



## Definitions

### Error
* Generic error `object`
  * message `string`: Error description

### PageError
* Non-2xx and non-404 HTTP status code on the target page `object`
  * status_code `integer`: Response HTTP status code (403, 500, etc)
  * status_message `string`: Response HTTP status message

### SelectedAreas
* HTML for selected page areas `array`: Array of elements matched by selectors
  * items `string`


