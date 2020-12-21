# @datafire/bbc_rss

Client library for feeds.bbci.co.uk

## Installation and Usage
```bash
npm install --save @datafire/bbc_rss
```
```js
let bbc_rss = require('@datafire/bbc_rss').create();

.then(data => {
  console.log(data);
});
```

## Description



## Actions

### topStories
BBC News - Home


```js
bbc_rss.topStories(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Feed](#feed)

### world
BBC News - World


```js
bbc_rss.world(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Feed](#feed)

### uk
BBC News - UK


```js
bbc_rss.uk(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Feed](#feed)

### technology
BBC News - Technology


```js
bbc_rss.technology(null, context)
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


