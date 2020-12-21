# @datafire/npr_rss

Client library for www.npr.org

## Installation and Usage
```bash
npm install --save @datafire/npr_rss
```
```js
let npr_rss = require('@datafire/npr_rss').create();

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### news
Assorted stories from NPR


```js
npr_rss.news(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Feed](#feed)



## Definitions

### Feed
* Feed `object`
  * feed `object`
    * link `string`
    * title `string`
    * feedUrl `string`
    * entries `array`
      * items `object`
        * id `string`
        * link `string`
        * title `string`
        * pubDate `string`
        * author `string`
        * content `string`
        * contentSnippet `string`


