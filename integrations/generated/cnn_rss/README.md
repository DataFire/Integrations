# @datafire/cnn_rss

Client library for rss.cnn.com

## Installation and Usage
```bash
npm install --save @datafire/cnn_rss
```
```js
let cnn_rss = require('@datafire/cnn_rss').create();

cnn_rss.topStories({}).then(data => {
  console.log(data);
})
```

## Description



## Actions

### topStories
CNN.com delivers up-to-the-minute news and information on the latest top stories, weather, entertainment, politics and more.


```js
cnn_rss.topStories(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Feed](#feed)

### world
CNN.com delivers up-to-the-minute news and information on the latest top stories, weather, entertainment, politics and more.


```js
cnn_rss.world(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Feed](#feed)

### politics
CNN.com delivers up-to-the-minute news and information on the latest top stories, weather, entertainment, politics and more.


```js
cnn_rss.politics(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Feed](#feed)

### business
CNNMoney.com, the business website of CNN, combines business news and in-depth market analysis with practical advice and answers to personal finance questions.


```js
cnn_rss.business(null, context)
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


