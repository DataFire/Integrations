# @datafire/peel_ci

Client library for Peel Tune-in API

## Installation and Usage
```bash
npm install --save datafire @datafire/peel_ci
```

```js
let datafire = require('datafire');
let peel_ci = require('@datafire/peel_ci').create();

peel_ci.getTuneinLinks({}).then(data => {
  console.log(data);
})
```

## Description
The machine learning service APIs utilize hashtags from Twitter to find related, trending shows, related Twitter hashtags in real time and to generate direct tune-in URLs.

## Actions
### getRelatedHashtags
Returns any official hashtag and any hashtags which were learned within the most recent time window for the show.


```js
peel_ci.getRelatedHashtags({
  "showID": ""
}, context)
```

#### Parameters
* showID (string) **required** - Unique ID for a show
* timeWindow (string) - Time window in seconds (default is 2 hours)

### getTrendingShows
Gets trending shows.


```js
peel_ci.getTrendingShows({}, context)
```

#### Parameters
* limit (string) - Number of trending shows (default is 20)
* timeWindow (string) - Time window in seconds (default is 2 hours)

### getTuneinLinks
Either use <b>tweet</b>, <b>hashtags</b>, or <b>showID</b> as the parameter. The tunein URLs that match best are returned in order of best match.<br/><br/>A <b>tweet</b> in this context is shorthand for text from a social networking conversation, e.g., it could be from Facebook, Twitter, LinkedIn, etc., and be greater than 140 characters.


```js
peel_ci.getTuneinLinks({}, context)
```

#### Parameters
* tweet (string) - Text from a social networking conversation
* hashtags (string) - Comma separated list of hashtags and @mentions
* showID (string) - Unique ID for a show

### getHealth
Get health of Tune-in service (which includes its uptime).


```js
peel_ci.getHealth(null, context)
```

#### Parameters
*This action has no parameters*

### getStatuses
For Twitter, statuses are synonymous with tweets.


```js
peel_ci.getStatuses({
  "showID": ""
}, context)
```

#### Parameters
* showID (string) **required** - Unique ID for a show

