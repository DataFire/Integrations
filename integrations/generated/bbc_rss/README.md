# @datafire/bbc_rss

Client library for feeds.bbci.co.uk

## Installation and Usage
```bash
npm install --save datafire @datafire/bbc_rss
```

```js
let datafire = require('datafire');
let bbc_rss = require('@datafire/bbc_rss').actions;
let context = new datafire.Context();

bbc_rss.topStories({}, context).then(data => {
  console.log(data);
})
```

## Description


## Actions
### topStories
BBC News - Home


```js
bbc_rss.topStories(null, context)
```


### world
BBC News - World


```js
bbc_rss.world(null, context)
```


### uk
BBC News - UK


```js
bbc_rss.uk(null, context)
```


### technology
BBC News - Technology


```js
bbc_rss.technology(null, context)
```


