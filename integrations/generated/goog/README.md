# @datafire/goog

Client library for goog.io | Unoffical Google Search API

## Installation and Usage
```bash
npm install --save @datafire/goog
```
```js
let goog = require('@datafire/goog').create({
  apikey: ""
});

.then(data => {
  console.log(data);
});
```

## Description

# Intoduction

This is the OpenAPI V3 documentation for https://api.goog.io

An API to perform Google Searches. Extremely fast and accurate. Zero proxies. Clean USA IPs.

Simple to use API, but advance enough to support special parameters such as languages, country and geographic locality.

Googio is the ultimate search API for Google Searches, Google News, and Google SERP.
# Docs

> An Unofficial Google Search API

An API to perform Google Searches. Extremely fast and accurate. Zero proxies. Clean USA IPs.

Simple to use API, but advance enough to support special parameters such as languages, country and geographic locality.

# Example Code

 Check out [Github repo](https://github.com/googio/googio_examples) for example code for calling the API with various languages.

# Authentication

### API Key

Optional API key for authenticated access. Note that we use "API key" interchangably in these docs.

Authenticated requests must include an `apikey` header containing your subscription's API Key.

| Security Schema Type | Header Name | Example Token |
| --- | --- | --- |
| API Key | `apikey` | c5bfb018-ab46-4e61-9271-4ec7e9c04a6e |

In the following example, `YOU_APIKEY` represents the auth token for your account.

```
curl --header 'apikey: YOU_APIKEY'
```

You can view and manage your API keys in the [Dashboard](/dashboard).

Be sure to keep your API keys secure. Do not share them in publicly accessible areas such as GitHub, client-side code, and so forth.

Also note that all API requests must be made over **HTTPS**. Calls made over plain HTTP will attempt to be automatically upgraded to HTTPS, though this use cases is discouraged.


## Rate Limits

API requests may be rate limited depending on your subscription plan and traffic patterns. The following response headers will be present in these cases:

| Header | Description |
| ------ | ----------- |
| `X-RateLimit-Limit` | The maximum number of requests that the consumer is permitted to make. |
| `X-RateLimit-Remaining` | The number of requests remaining in the current rate limit window. |
| `X-RateLimit-Reset` | The time at which the current rate limit window resets in UTC epoch seconds. |

When the rate limit is **exceeded**, an error is returned with the status "**429 Too Many Requests**":

```json
{
  "error": {
    "code": "too_many_requests",
    "message": "Rate limit exceeded"
  }
}
```



## Errors

This API uses conventional HTTP response codes to indicate the success or failure of API requests. In general: Codes in the `2xx` range indicate success. Codes in the `4xx` range indicate an error that failed given the information provided (e.g., a required parameter was omitted, endpoint not found, etc.). Codes in the `5xx` range indicate an error with our API (these are rare).




## Actions

### .get
It "status" == true then API is up, else the API is down


```js
goog..get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * status `boolean`

### Crawl
Perform Google Search

 Parameters
----------
query : the string query to perform search. supports advance queries. Check out https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters guide for formating

Returns
-------
json: a the html source of the results page


```js
goog.Crawl({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: A url encoded query string, for reference checkout https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters

#### Output
* output `object`
  * answer `string`
  * results `array`
    * items `string`
  * total `string`

### Images
Perform Google Image Search

Parameters
----------
query : the string query to perform search. supports advance queries.

Returns
-------
json: a list of results with the link, description, and title for each result


```js
goog.Images({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`

#### Output
* output `object`
  * answers `array`
    * items `string`
  * image_results `array`
    * items `object`
      * image `object`
        * alt `string`
        * src `string`
      * link `object`
        * domain `string`
        * href `string`
        * title `string`
  * results `array`
    * items `object`
  * total `integer`

### News
Perform Google News Search

 Parameters
----------
query : the string query to perform search for Google news. A simple query for `president` will be `q=president`. An example of multiple keyword would be `q=news+about+presdient+trump`. News can also be filtered by country and language. For `US` news and in English the query will be `q=trump&ceid=US:en` for news in Great Britian the query will be `q=trump&ceid=GB:en`

Returns
-------
json: {"feed": { "title" : "trump" ...} , "entites": [ {"title" : "Trump doubles down on divisive messaging in speech to honor Independence Day - CNN", "links": []} ...]}


```js
goog.News({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`

#### Output
* output `object`
  * entries `array`
    * items `object`
      * guidislink `string`
      * id `string`
      * link `string`
      * links `string`
      * published `string`
      * published_parsed `string`
      * source `string`
      * sub_articles `string`
      * summary `string`
      * summary_detail `string`
      * title `string`
      * title_detail `string`
  * feed `object`
    * generator `string`
    * generator_detail `string`
    * language `string`
    * link `string`
    * links `string`
    * publisher `string`
    * publisher_detail `string`
    * rights `string`
    * rights_detail `string`
    * subtitle `string`
    * subtitle_detail `string`
    * title `string`
    * updated `string`
    * updated_parsed `string`

### Search
Perform Google Search

Parameters
----------
query : the string query to perform search. supports advance queries. Check out https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters guide for formating

Returns
-------
json: a list of results with the link, description, and title for each result


```js
goog.Search({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: A url encoded query string, for reference checkout https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters

#### Output
* output `object`: results
  * answer `string`
  * results `array`
    * items `object`
      * description `string`
      * link `string`
      * title `string`
  * total `string`

### serp
Perform Google Search and search for website in Search Engine Results Pages (SERP)

Parameters
----------
query : the string query to perform search. supports advance queries. Check out https://moz.com/blog/the-ultimate-guide-to-the-google-search-parameters guide for formatting, it is recommended to set the query `&num=100`

Returns
-------
json: a list of results with the query, website, searched_results, and position. json["position"] will be set to -1 if website is not found in results


```js
goog.serp({
  "body": {
    "query": "",
    "website": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [SerpData](#serpdata)

#### Output
* output `object`
  * position `integer`
  * query `string`
  * searched_results `integer`
  * website `string`



## Definitions

### HTTPValidationError
* HTTPValidationError `object`
  * detail `array`
    * items [ValidationError](#validationerror)

### SerpData
* SerpData `object`
  * query **required** `string`
  * website **required** `string`

### ValidationError
* ValidationError `object`
  * loc **required** `array`
    * items `string`
  * msg **required** `string`
  * type **required** `string`


