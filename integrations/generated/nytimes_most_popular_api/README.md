# @datafire/nytimes_most_popular_api

Client library for Most Popular

## Installation and Usage
```bash
npm install --save datafire @datafire/nytimes_most_popular_api
```

```js
let datafire = require('datafire');
let nytimes_most_popular_api = require('@datafire/nytimes_most_popular_api').actions;

let account = {
  api-key: "",
}
let context = new datafire.Context({
  accounts: {
    nytimes_most_popular_api: account,
  }
})


nytimes_most_popular_api.mostemailed.section.time_period.json.get({}, context).then(data => {
  console.log(data);
})
```

## Description
Get lists of NYT Articles based on shares, emails, and views.

## Actions
### mostemailed.section.time_period.json.get
Most Emailed by Section & Time Period


```js
nytimes_most_popular_api.mostemailed.section.time_period.json.get({
  "section": "",
  "time-period": ""
}, context)
```

#### Parameters
* section (string) **required** - Limits the results by one or more sections. You can use
* time-period (string) **required** - Number of days `1 | 7 | 30 ` corresponds to a day, a week, or a month of content.

### mostshared.section.time_period.json.get
Most Shared by Section & Time Period


```js
nytimes_most_popular_api.mostshared.section.time_period.json.get({
  "section": "",
  "time-period": ""
}, context)
```

#### Parameters
* section (string) **required** - Limits the results by one or more sections. You can use
* time-period (string) **required** - Number of days `1 | 7 | 30 ` corresponds to a day, a week, or a month of content.

### mostviewed.section.time_period.json.get
Most Viewed by Section & Time Period


```js
nytimes_most_popular_api.mostviewed.section.time_period.json.get({
  "section": "",
  "time-period": ""
}, context)
```

#### Parameters
* section (string) **required** - Limits the results by one or more sections. You can use
* time-period (string) **required** - Number of days `1 | 7 | 30 ` corresponds to a day, a week, or a month of content.

