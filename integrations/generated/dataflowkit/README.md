# @datafire/dataflowkit

Client library for Dataflow Kit Web Scraper

## Installation and Usage
```bash
npm install --save @datafire/dataflowkit
```
```js
let dataflowkit = require('@datafire/dataflowkit').create({
  ApiKeyAuth: ""
});

.then(data => {
  console.log(data);
});
```

## Description

Render Javascript driven pages, while we internally manage Headless Chrome and proxies for you. 

- Build a custom web scraper with our Visual point-and-click toolkit.
- Scrape the most popular Search engines result pages (SERP).
- Convert web pages to PDF and capture screenshots.
***
### Authentication
Dataflow Kit API require you to sign up for an API key in order to use the API. 

The API key can be found in the [DFK Dashboard](https://account.dataflowkit.com) after _free registration_.

Pass a secret API Key to all API requests to the server as the `api_key` query parameter. 


## Actions

### convert.url.pdf.post
Automate URL to PDF Conversion right in your application.

Specify request parameters like URL, Proxy, and actions to render web pages to PDF using Headless Chrome.

Get resulted PDF even from websites blocked in your area for some reason utilizing our worldwide pool of proxies.

Simulate real-world human interaction with the page. For example, before saving a web page to PDF, you may need to scroll it.

Generate ready-to-run code for your favorite language at [https://dataflowkit.com/url-to-pdf](https://dataflowkit.com/url-to-pdf)


```js
dataflowkit.convert.url.pdf.post({
  "body": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [url2pdfrequest](#url2pdfrequest)

#### Output
* output `string`

### convert.url.screenshot.post
Automate URL to Screenshot Conversion right in your application.

Specify request parameters like URL, Proxy, and actions to convert web pages to screenshots using Headless Chrome.

Get resulted pictures in JPG or PNG formats even from websites blocked in your area for some reason utilizing our worldwide pool of proxies.

Simulate real-world human interaction with the page. For example, before capturing a web page, you may need to scroll it.

Generate ready-to-run code for your favorite language at [https://dataflowkit.com/url-to-screenshot](https://dataflowkit.com/url-to-screenshot)


```js
dataflowkit.convert.url.screenshot.post({
  "body": {
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [url2screenshotrequest](#url2screenshotrequest)

#### Output
* output `string`

### fetch
Use fetch endpoint to download web pages.


```js
dataflowkit.fetch({
  "body": {
    "type": "",
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [fetchrequest](#fetchrequest)

#### Output
*Output schema unknown*

### parse
Dataflow kit uses CSS selectors to find HTML elements in web pages for later data extraction.

Open [visual point-and-click toolkit](https://dataflowkit.com/dfk) and click desired elements on a page to specify extracting data. 


 Then you can send generated payload to `/parse` endpoint. We crawl web pages and extract data like text, links, or images for you following the specified rules. 


Extracted data is returned in CSV, MS Excel, JSON, JSON(Lines) or XML format.



```js
dataflowkit.parse({
  "body": {
    "fields": [],
    "format": "",
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [parserequest](#parserequest)

#### Output
* output `object`

### serp
To crawl search engine result pages, you can use `/serp` endpoint. SERP collection service extracts a list of organic results, news, images, and more.  Specify configuration parameters, such as country or languages, to customize output SERP data.
The following search engines are supported

- google
- google-image
- google-news
- google-shopping
- bing
- duckduckgo
- baidu
- yandex


Generate ready-to-run code for your favorite language at [https://dataflowkit.com/serp](https://dataflowkit.com/serp)


```js
dataflowkit.serp({
  "body": {
    "format": "",
    "name": "",
    "proxy": "",
    "type": "",
    "url": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [serprequest](#serprequest)

#### Output
* output `object`



## Definitions

### Paginator
* Paginator `object`: Specify _Next link_ paginator on pages containing a link pointing to the next page. The next page link is extracted from a document by querying href attribute of a given element's CSS selector.
  * nextPageSelector `string`
  * pageNum `integer`

### action
* Action `object`

### fetchrequest
* Fetch request `object`
  * actions `array`: Use actions to automate manual workflows while rendering web pages. They simulate real-world human interaction with pages. _(Chrome fetcher type only)_
    * items [action](#action)
  * initialCookies `array`: The "Initial Cookies" option is useful for crawling websites that require a login. The simplest solution to get an array of cookies for specific websites is to use a web browser "EditThisCookie" extension. Copy a cookie array with "EditThisCookie" and paste it into the "Initial cookie" field.
    * items [initialCookie](#initialcookie)
  * output `string` (values: buffer, file): If set to _file_, the content of downloaded HTML is uploaded to Dataflow Kit Storage first. Then the link to this file is returned. Overwise, downloaded content is returned in the response body.
  * proxy `string`: Specify proxy by adding [country ISO code](https://en.wikipedia.org/wiki/ISO_3166-2) to `country-` value to send requests through a proxy in the specified country. Use `country-any` to use random geo-targets.
  * type **required** `string` (values: base, chrome): If set to `base`, the Base fetcher is used for downloading web page content. Use `chrome` for fetching content with a Headless chrome browser. If omitted `base` fetcher is used by default.
  * url **required** `string`: Specify URL to download.
  * waitDelay `number`: Specify a wait delay (in seconds). This may be useful if certain elements of the web site need to be rendered after the initial page load. _(Chrome fetcher type only)_

### field
* Field `object`
  * attrs **required** `array`: A set of attributes to extract from a Field. Find more information about attributes
    * items `string` (values: text, href, src, alt)
  * details: Details themself represent independent Parse request that extracts data from linked pages.
    * commonParent `string`: Specifies common ancestor block for a set of fields used to extract data from a web page. _(CSS Selector)_
    * fields **required** `array`: Define a  set of fields used to extract data from a web page. A Field represents a given chunk of extracted data from every block on each page.
      * items [field](#field)
    * format **required** `string` (values: csv, json, jsonl, excel, xml): Extracted data is returned either in CSV, MS Excel, JSON, JSON(Lines) or XML format.
    * name **required** `string`: Collection name.
    * paginator [Paginator](#paginator)
    * path `boolean`: Path is a special parameter specifying navigation pages only. It collects information from detailed pages. No results from the current page return. Defaults to false.
    * request [fetchrequest](#fetchrequest)
  * filters `array`: Filters are used to pre-processing of text data when extracting.
  * name **required** `string`: Field name is used to aggregate results.
  * selector **required** `string`: Selector represents a CSS selector for data extraction within the given block.
  * type **required** `integer` (values: 0, 1, 2): Selector type. ( 0 - image, 1 - text, 2 - link)

### initialCookie
* initialCookie `object`: InitialCookie structure keep cookies that optionally can be passed to the new fetcher crawl a website that requires a login. Generate Cookies array with EditThisCookie chrome extension.
  * domain `string`
  * expirationDate `number`
  * hostOnly `boolean`
  * httpOnly `boolean`
  * id `number`
  * name `string`
  * path `string`
  * sameSite `string` (values: unspecified, strict, lax, no_restriction)
  * secure `boolean`
  * session `boolean`
  * storeID `string`
  * value `string`

### parserequest
* Parse request `object`
  * commonParent `string`: Specifies common ancestor block for a set of fields used to extract data from a web page. _(CSS Selector)_
  * fields **required** `array`: Define a  set of fields used to extract data from a web page. A Field represents a given chunk of extracted data from every block on each page.
    * items [field](#field)
  * format **required** `string` (values: csv, json, jsonl, excel, xml): Extracted data is returned either in CSV, MS Excel, JSON, JSON(Lines) or XML format.
  * name **required** `string`: Collection name.
  * paginator [Paginator](#paginator)
  * path `boolean`: Path is a special parameter specifying navigation pages only. It collects information from detailed pages. No results from the current page return. Defaults to false.
  * request [fetchrequest](#fetchrequest)

### serprequest
* SERP request `object`
  * fields `array`: Specify CSS selectors (patterns) used to gather data from Search Engine Result Pages.
    * items [field](#field)
  * format **required** `string` (values: csv, json, jsonl, excel, xml): Extracted data is returned either in CSV, MS Excel, JSON, JSON(Lines) or XML format.
  * name **required** `string`: Collection name.
  * pageNum `integer`: Specify number of pages to crawl.
  * proxy **required** `string`: Always specify proxy for sending SERP requests. Add choosen [country ISO code](https://en.wikipedia.org/wiki/ISO_3166-2) to `country-` value to send requests through a proxy in the specified country. Use `country-any` to use random geo-targets.
  * type **required** `string`: For SERP requests you should _always_ use `chrome` type to fetch content with a Headless chrome browser
  * url **required** `string`: url holds the link to a Search Engine to use, and other optional parameters like languages or country.

### url2pdfrequest
* URL to PDF request `object`
  * actions `array`: Use actions to automate manual workflows while rendering web pages. They simulate real-world human interaction with pages.
    * items [action](#action)
  * initialCookies `array`: The "Initial Cookies" option is useful for crawling websites that require a login. The simplest solution to get an array of cookies for specific websites is to use a web browser "EditThisCookie" extension. Copy a cookie array with "EditThisCookie" and paste it into the "Initial cookie" field.
    * items [initialCookie](#initialcookie)
  * landscape `boolean`: Paper orientation. Parameter landscape = false means portrait orientation. Set landscape to true for landscape page oriantation.
  * marginBottom `number`: Bottom Margin of the PDF (in inches)
  * marginLeft `number`: Left Margin of the PDF (in inches)
  * marginRight `number`: Right Margin of the PDF (in inches)
  * marginTop `number`: Top Margin of the PDF (in inches)
  * output `string` (values: buffer, file): If set to _file_, the resulted PDF is uploaded to Dataflow Kit Storage first. Then the link to this file is returned. Overwise, PDF content is returned in the response body.
  * pageRanges `string`: Specify page ranges to convert. Defaults to the empty value, which means convert all pages.
  * paperSize `string` (values: A3, A4, A5, A6, Letter, Legal, Tabloid): Page size parameter consists of the most popular page formats.
  * printBackground `boolean`: Print background graphics in the PDF.
  * printHeaderFooter `boolean`: printHeaderFooter  parameter consists of the date, name of the web page, the page URL, and how many pages the document you are printing.
  * proxy `string`: Specify proxy by adding [country ISO code](https://en.wikipedia.org/wiki/ISO_3166-2) to `country-` value to send requests through a proxy in the specified country. Use `country-any` to use random geo-targets.
  * scale `number`: By default, PDF document content is generated according to dimensions of the original web page content. Using the `scale` parameter, you can specify a custom zoom factor from 0.1 to 5.0 of the webpage rendering.
  * url **required** `string`: The full URL address (including HTTP/HTTPS) of a web page that you want to save as PDF
  * waitDelay `number`: Specify a wait delay (in seconds). This may be useful if certain elements of the web site need to be rendered after the initial page load.

### url2screenshotrequest
* URL to Screenshot request `object`
  * actions `array`: Use actions to automate manual workflows while rendering web pages. They simulate real-world human interaction with pages.
    * items [action](#action)
  * clipSelector `string`: Captures a screenshot of specified CSS element on a web page.
  * format `string` (values: png, jpeg): Sets the Format of output image
  * fullPage `boolean`: takes a screenshot of a full web page. It ignores offsetX, offsety, width and height argument values.
  * height `integer`: Rectangle height in device independent pixels (dip).
  * initialCookies `array`: The "Initial Cookies" option is useful for crawling websites that require a login. The simplest solution to get an array of cookies for specific websites is to use a web browser "EditThisCookie" extension. Copy a cookie array with "EditThisCookie" and paste it into the "Initial cookie" field.
    * items [initialCookie](#initialcookie)
  * offsetx `integer`: X offset in device independent pixels (dip).
  * offsety `integer`: Y offset in device independent pixels (dip).
  * output `string` (values: buffer, file): If set to _file_, the resulted screenshot is uploaded to Dataflow Kit Storage first. Then the link to this file is returned. Overwise, web site screenshot is returned in the response body.
  * printBackground `boolean`: Print background graphics in the PDF.
  * proxy `string`: Specify proxy by adding [country ISO code](https://en.wikipedia.org/wiki/ISO_3166-2) to `country-` value to send requests through a proxy in the specified country. Use `country-any` to use random geo-targets.
  * quality `integer`: Sets the Quality of output image. Compression quality from range [0..100] (jpeg only).
  * scale `number`: Image scale factor. range [0.1 .. 3]
  * url **required** `string`: The full URL address (including HTTP/HTTPS) of a web page that you want to capture
  * waitDelay `number`: Specify a wait delay (in seconds). This may be useful if certain elements of the web site need to be rendered after the initial page load.
  * width `integer`: Rectangle width in device independent pixels (dip).


