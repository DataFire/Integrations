# @datafire/npr_rss

Client library for www.npr.org

## Installation and Usage
```bash
npm install --save datafire @datafire/npr_rss
```

```js
let datafire = require('datafire');
let npr_rss = require('@datafire/npr_rss').actions;
let context = new datafire.Context();

npr_rss.news({}, context).then(data => {
  console.log(data);
})
```

## Description


## Actions
### news
Assorted stories from NPR


```js
npr_rss.news(null, context)
```


