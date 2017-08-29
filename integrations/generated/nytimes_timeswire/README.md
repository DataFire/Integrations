# @datafire/nytimes_timeswire

Client library for Times Newswire

## Installation and Usage
```bash
npm install --save datafire @datafire/nytimes_timeswire
```

```js
let datafire = require('datafire');
let nytimes_timeswire = require('@datafire/nytimes_timeswire').create({
  apikey: "",
});

nytimes_timeswire.content.json.get({}).then(data => {
  console.log(data);
})
```

## Description
With the Times Newswire API, you can get links and metadata for Times articles and blog posts as soon as they are published on NYTimes.com. The Times Newswire API provides an up-to-the-minute stream of published items.

## Actions
### content.json.get



```js
nytimes_timeswire.content.json.get({
  "url": ""
}, context)
```

#### Parameters
* url (string) **required** - The complete URL of a specific news item, URL-encoded or backslash-escaped

### source.section.json.get



```js
nytimes_timeswire.source.section.json.get({
  "source": "",
  "section": ""
}, context)
```

#### Parameters
* source (string) **required** - Limits the set of items by originating source
* section (string) **required** - Limits the set of items by one or more sections
* limit (integer) - Limits the number of results, between 1 and 20
* offset (integer) - Sets the starting point of the result set

### source.section.time_period.json.get



```js
nytimes_timeswire.source.section.time_period.json.get({
  "source": "",
  "section": "",
  "time-period": 0
}, context)
```

#### Parameters
* source (string) **required** - Limits the set of items by originating source
* section (string) **required** - Limits the set of items by one or more sections
* time-period (integer) **required** - Limits the set of items by time published, integer in number of hours
* limit (integer) - Limits the number of results, between 1 and 20
* offset (integer) - Sets the starting point of the result set

