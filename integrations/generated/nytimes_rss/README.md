# @datafire/nytimes_rss

Client library for rss.nytimes.com

## Installation and Usage
```bash
npm install --save datafire @datafire/nytimes_rss
```

```js
let datafire = require('datafire');
let nytimes_rss = require('@datafire/nytimes_rss').actions;
let context = new datafire.Context();

nytimes_rss.homePage({}, context).then(data => {
  console.log(data);
})
```

## Description


## Actions
### homePage
NYT > Home Page


```js
nytimes_rss.homePage(null, context)
```


### world
NYT > World


```js
nytimes_rss.world(null, context)
```


### business
NYT > Business Day


```js
nytimes_rss.business(null, context)
```


### sports
NYT > Sports


```js
nytimes_rss.sports(null, context)
```


### science
NYT > Science


```js
nytimes_rss.science(null, context)
```


