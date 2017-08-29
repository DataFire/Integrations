# @datafire/neowsapp

Client library for NeoWs - (Near Earth Object Web Service)

## Installation and Usage
```bash
npm install --save datafire @datafire/neowsapp
```

```js
let datafire = require('datafire');
let neowsapp = require('@datafire/neowsapp').create();

neowsapp.browseNearEarthObjects({}).then(data => {
  console.log(data);
})
```

## Description
A web service for near earth objects. All the data is from the  <a href="http://neo.jpl.nasa.gov/" target="_blank">NASA JPL Asteroid team</a>. 

 

NeoWs is proud to power AsteroidTracker on <a href="https://itunes.apple.com/us/app/asteroid-tracker/id689684901?mt=8" target="_blank">iOS</a> and <a href="https://play.google.com/store/apps/details?id=com.vitruviussoftware.bunifish.asteroidtracker&feature" target="_blank">Android</a> as well as related apps. 

 Get <a href="http://apps.getpebble.com/en_US/application/55bc4913d1690c372900000f" target="_blank">Asteroid Today on Pebble</a> 

Follow us on <a href="https://twitter.com/AsteroidTracker" target="_blank">Twitter</a>

## Actions
### retrieveNearEarthObjectFeed
Get a list of Near Earth Objects within a date range, The max range in one query is 7 days


```js
neowsapp.retrieveNearEarthObjectFeed({
  "end_date": ""
}, context)
```

#### Parameters
* start_date (string) - Start of date range search, format: yyyy-MM-dd - (ex: 2015-04-28)
* end_date (string) **required** - End of date range search, format: yyyy-MM-dd - (ex: 2015-04-28). If left off search will extends 7 days from start_date
* detailed (boolean) - detailed

### retrieveNEOFeedToday
Get a list of Near Earth Objects for today


```js
neowsapp.retrieveNEOFeedToday({}, context)
```

#### Parameters
* detailed (boolean) - detailed

### browseNearEarthObjects
Retieve a paginated list of Near Earth Objects


```js
neowsapp.browseNearEarthObjects({}, context)
```

#### Parameters
* page (integer) - page
* size (integer) - size

### retrieveNearEarthObjectById
Retieve a Near Earth Objects with a given id


```js
neowsapp.retrieveNearEarthObjectById({
  "asteroid_id": ""
}, context)
```

#### Parameters
* asteroid_id (string) **required** - ID of Near Earth Object - (ex: 3729835)

### retrieveCurrentNeoStatistics
retrieveCurrentNeoStatistics


```js
neowsapp.retrieveCurrentNeoStatistics(null, context)
```


