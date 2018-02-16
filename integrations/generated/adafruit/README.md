# @datafire/adafruit

Client library for Adafruit IO

## Installation and Usage
```bash
npm install --save @datafire/adafruit
```
```js
let adafruit = require('@datafire/adafruit').create({
  HeaderKey: "",
  HeaderSignature: "",
  QueryKey: ""
});

adafruit.currentUser(null).then(data => {
  console.log(data);
});
```

## Description

### The Internet of Things for Everyone

The Adafruit IO HTTP API provides access to your Adafruit IO data from any programming language or hardware environment that can speak HTTP. The easiest way to get started is with [an Adafruit IO learn guide](https://learn.adafruit.com/series/adafruit-io-basics) and [a simple Internet of Things capable device like the Feather Huzzah](https://www.adafruit.com/product/2821).

This API documentation is hosted on GitHub Pages and is available at [https://github.com/adafruit/io-api](https://github.com/adafruit/io-api). For questions or comments visit the [Adafruit IO Forums](https://forums.adafruit.com/viewforum.php?f=56) or the [adafruit-io channel on the Adafruit Discord server](https://discord.gg/adafruit).

#### Authentication

Authentication for every API request happens through the `X-AIO-Key` header or query parameter and your IO API key. A simple cURL request to get all available feeds for a user with the username "io_username" and the key "io_key_12345" could look like this:

    $ curl -H "X-AIO-Key: io_key_12345" https://io.adafruit.com/api/v2/io_username/feeds

Or like this:

    $ curl "https://io.adafruit.com/api/v2/io_username/feeds?X-AIO-Key=io_key_12345

Using the node.js [request](https://github.com/request/request) library, IO HTTP requests are as easy as:

```js
var request = require('request');

var options = {
  url: 'https://io.adafruit.com/api/v2/io_username/feeds',
  headers: {
    'X-AIO-Key': 'io_key_12345',
    'Content-Type': 'application/json'
  }
};

function callback(error, response, body) {
  if (!error && response.statusCode == 200) {
    var feeds = JSON.parse(body);
    console.log(feeds.length + " FEEDS AVAILABLE");

    feeds.forEach(function (feed) {
      console.log(feed.name, feed.key);
    })
  }
}

request(options, callback);
```

#### Client Libraries

We have client libraries to help you get started with your project: [Python](https://github.com/adafruit/io-client-python), [Ruby](https://github.com/adafruit/io-client-ruby), [Arduino C++](https://github.com/adafruit/Adafruit_IO_Arduino), [Javascript](https://github.com/adafruit/adafruit-io-node), and [Go](https://github.com/adafruit/io-client-go) are available. They're all open source, so if they don't already do what you want, you can fork and add any feature you'd like.



## Actions

### currentUser
Get information about the current user


```js
adafruit.currentUser(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [User](#user)

### destroyActivities
Delete all your activities.


```js
adafruit.destroyActivities({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string

#### Output
*Output schema unknown*

### allActivities
The Activities endpoint returns information about the user's activities.


```js
adafruit.allActivities({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * start_time `string`: Start time for filtering, returns records created after given time.
  * end_time `string`: End time for filtering, returns records created before give time.
  * limit `integer`: Limit the number of records returned.

#### Output
* output `array`
  * items [Activity](#activity)

### getActivity
The Activities endpoint returns information about the user's activities.


```js
adafruit.getActivity({
  "username": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * type **required** `string`
  * start_time `string`: Start time for filtering, returns records created after given time.
  * end_time `string`: End time for filtering, returns records created before give time.
  * limit `integer`: Limit the number of records returned.

#### Output
* output `array`
  * items [Activity](#activity)

### allDashboards
The Dashboards endpoint returns information about the user's dashboards.



```js
adafruit.allDashboards({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string

#### Output
* output `array`
  * items [Dashboard](#dashboard)

### createDashboard
Create a new Dashboard


```js
adafruit.createDashboard({
  "username": "",
  "dashboard": {}
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * dashboard **required** `object`
    * description `string`
    * key `string`
    * name `string`

#### Output
* output [Dashboard](#dashboard)

### allBlocks
The Blocks endpoint returns information about the user's blocks.



```js
adafruit.allBlocks({
  "username": "",
  "dashboard_id": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * dashboard_id **required** `string`

#### Output
* output `array`
  * items [Block](#block)

### createBlock
Create a new Block


```js
adafruit.createBlock({
  "username": "",
  "block": {},
  "dashboard_id": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * block **required** `object`
    * block_feeds `array`
      * items `object`
        * feed_id `string`
        * group_id `string`
    * column `number`
    * dashboard_id `number`
    * description `string`
    * key `string`
    * name `string`
    * properties `object`
    * row `number`
    * size_x `number`
    * size_y `number`
    * visual_type `string`
  * dashboard_id **required** `string`

#### Output
* output [Block](#block)

### destroyBlock
Delete an existing Block


```js
adafruit.destroyBlock({
  "username": "",
  "dashboard_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * dashboard_id **required** `string`
  * id **required** `string`

#### Output
* output `string`

### getBlock
Returns Block based on ID


```js
adafruit.getBlock({
  "username": "",
  "dashboard_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * dashboard_id **required** `string`
  * id **required** `string`

#### Output
* output [Block](#block)

### updateBlock
Update properties of an existing Block


```js
adafruit.updateBlock({
  "username": "",
  "dashboard_id": "",
  "id": "",
  "block": {}
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * dashboard_id **required** `string`
  * id **required** `string`
  * block **required** `object`
    * block_feeds `array`
      * items `object`
        * feed_id `string`
        * group_id `string`
    * column `number`
    * dashboard_id `number`
    * description `string`
    * key `string`
    * name `string`
    * properties `object`
    * row `number`
    * size_x `number`
    * size_y `number`
    * visual_type `string`

#### Output
* output [Block](#block)

### replaceBlock
Replace an existing Block


```js
adafruit.replaceBlock({
  "username": "",
  "dashboard_id": "",
  "id": "",
  "block": {}
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * dashboard_id **required** `string`
  * id **required** `string`
  * block **required** `object`
    * block_feeds `array`
      * items `object`
        * feed_id `string`
        * group_id `string`
    * column `number`
    * dashboard_id `number`
    * description `string`
    * key `string`
    * name `string`
    * properties `object`
    * row `number`
    * size_x `number`
    * size_y `number`
    * visual_type `string`

#### Output
* output [Block](#block)

### destroyDashboard
Delete an existing Dashboard


```js
adafruit.destroyDashboard({
  "username": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * id **required** `string`

#### Output
* output `string`

### getDashboard
Returns Dashboard based on ID


```js
adafruit.getDashboard({
  "username": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * id **required** `string`

#### Output
* output [Dashboard](#dashboard)

### updateDashboard
Update properties of an existing Dashboard


```js
adafruit.updateDashboard({
  "username": "",
  "id": "",
  "dashboard": {}
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * id **required** `string`
  * dashboard **required** `object`
    * description `string`
    * key `string`
    * name `string`

#### Output
* output [Dashboard](#dashboard)

### replaceDashboard
Replace an existing Dashboard


```js
adafruit.replaceDashboard({
  "username": "",
  "id": "",
  "dashboard": {}
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * id **required** `string`
  * dashboard **required** `object`
    * description `string`
    * key `string`
    * name `string`

#### Output
* output [Dashboard](#dashboard)

### allFeeds
The Feeds endpoint returns information about the user's feeds. The response includes the latest value of each feed, and other metadata about each feed.


```js
adafruit.allFeeds({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string

#### Output
* output `array`
  * items [Feed](#feed)

### createFeed
Create a new Feed


```js
adafruit.createFeed({
  "username": "",
  "feed": {}
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * group_key `string`
  * feed **required** `object`
    * description `string`
    * key `string`
    * license `string`
    * name `string`

#### Output
* output [Feed](#feed)

### destroyFeed
Delete an existing Feed


```js
adafruit.destroyFeed({
  "username": "",
  "feed_key": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * feed_key **required** `string`: a valid feed key

#### Output
*Output schema unknown*

### getFeed
Returns feed based on the feed key


```js
adafruit.getFeed({
  "username": "",
  "feed_key": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * feed_key **required** `string`: a valid feed key

#### Output
* output [Feed](#feed)

### updateFeed
Update properties of an existing Feed


```js
adafruit.updateFeed({
  "username": "",
  "feed_key": "",
  "feed": {}
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * feed_key **required** `string`: a valid feed key
  * feed **required** `object`
    * description `string`
    * key `string`
    * license `string`
    * name `string`

#### Output
* output [Feed](#feed)

### replaceFeed
Replace an existing Feed


```js
adafruit.replaceFeed({
  "username": "",
  "feed_key": "",
  "feed": {}
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * feed_key **required** `string`: a valid feed key
  * feed **required** `object`
    * description `string`
    * key `string`
    * license `string`
    * name `string`

#### Output
* output [Feed](#feed)

### allData
Get all data for the given feed


```js
adafruit.allData({
  "username": "",
  "feed_key": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * feed_key **required** `string`: a valid feed key
  * start_time `string`: Start time for filtering, returns records created after given time.
  * end_time `string`: End time for filtering, returns records created before give time.
  * limit `integer`: Limit the number of records returned.
  * include `string`: List of Data record fields to include in response as comma separated list. Acceptable values are: `value`, `lat`, `lon`, `ele`, `id`, and `created_at`. 

#### Output
* output `array`
  * items [DataResponse](#dataresponse)

### createData
Create new Data


```js
adafruit.createData({
  "username": "",
  "feed_key": "",
  "datum": {}
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * feed_key **required** `string`: a valid feed key
  * datum **required** `object`
    * created_at `string`
    * ele `string`
    * epoch `number`
    * lat `string`
    * lon `string`
    * value `string`

#### Output
* output [Data](#data)

### batchCreateData
Create multiple new Data records


```js
adafruit.batchCreateData({
  "username": "",
  "feed_key": "",
  "data": []
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * feed_key **required** `string`: a valid feed key
  * data **required** `array`
    * items `object`
      * created_at `string`
      * ele `string`
      * epoch `number`
      * lat `string`
      * lon `string`
      * value `string`

#### Output
* output `array`
  * items [DataResponse](#dataresponse)

### chartData
The Chart API is what we use on io.adafruit.com to populate charts over varying timespans with a consistent number of data points. The maximum number of points returned is 480. This API works by aggregating slices of time into a single value by averaging.

All time-based parameters are optional, if none are given it will default to 1 hour at the finest-grained resolution possible.


```js
adafruit.chartData({
  "username": "",
  "feed_key": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * feed_key **required** `string`: a valid feed key
  * start_time `string`: Start time for filtering, returns records created after given time.
  * end_time `string`: End time for filtering, returns records created before give time.
  * resolution `integer`: A resolution size in minutes. By giving a resolution value you will get back grouped data points aggregated over resolution-sized intervals. NOTE: time span is preferred over resolution, so if you request a span of time that includes more than max limit points you may get a larger resolution than you requested. Valid resolutions are 1, 5, 10, 30, 60, and 120.
  * hours `integer`: The number of hours the chart should cover.

#### Output
* output `object`
  * columns `array`: The names of the columns returned as data.
    * items `string`
  * data `array`: The actual chart data.
    * items `array`
      * items `string`
  * feed `object`
    * id `integer`
    * key `string`
    * name `string`
  * parameters `object`

### firstData
Get the oldest data point in the feed. This request sets the queue pointer to the beginning of the feed.


```js
adafruit.firstData({
  "username": "",
  "feed_key": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * feed_key **required** `string`: a valid feed key
  * include `string`: List of Data record fields to include in response as comma separated list. Acceptable values are: `value`, `lat`, `lon`, `ele`, `id`, and `created_at`. 

#### Output
* output [DataResponse](#dataresponse)

### lastData
Get the most recent data point in the feed. This request sets the queue pointer to the end of the feed.


```js
adafruit.lastData({
  "username": "",
  "feed_key": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * feed_key **required** `string`: a valid feed key
  * include `string`: List of Data record fields to include in response as comma separated list. Acceptable values are: `value`, `lat`, `lon`, `ele`, `id`, and `created_at`. 

#### Output
* output [DataResponse](#dataresponse)

### nextData
Get the next newest data point in the feed. If queue processing hasn't been started, the first data point in the feed will be returned.


```js
adafruit.nextData({
  "username": "",
  "feed_key": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * feed_key **required** `string`: a valid feed key
  * include `string`: List of Data record fields to include in response as comma separated list. Acceptable values are: `value`, `lat`, `lon`, `ele`, `id`, and `created_at`. 

#### Output
* output [DataResponse](#dataresponse)

### previousData
Get the previously processed data point in the feed. NOTE: this method doesn't move the processing queue pointer.


```js
adafruit.previousData({
  "username": "",
  "feed_key": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * feed_key **required** `string`: a valid feed key
  * include `string`: List of Data record fields to include in response as comma separated list. Acceptable values are: `value`, `lat`, `lon`, `ele`, `id`, and `created_at`. 

#### Output
* output [DataResponse](#dataresponse)

### retainData
Get the most recent data point in the feed in an MQTT compatible CSV format: `value,lat,lon,ele`


```js
adafruit.retainData({
  "username": "",
  "feed_key": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * feed_key **required** `string`: a valid feed key

#### Output
* output `string`

### destroyData
Delete existing Data


```js
adafruit.destroyData({
  "username": "",
  "feed_key": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * feed_key **required** `string`: a valid feed key
  * id **required** `string`

#### Output
* output `string`

### getData
Returns data based on feed key


```js
adafruit.getData({
  "username": "",
  "feed_key": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * feed_key **required** `string`: a valid feed key
  * id **required** `string`
  * include `string`: List of Data record fields to include in response as comma separated list. Acceptable values are: `value`, `lat`, `lon`, `ele`, `id`, and `created_at`. 

#### Output
* output [DataResponse](#dataresponse)

### updateData
Update properties of existing Data


```js
adafruit.updateData({
  "username": "",
  "feed_key": "",
  "id": "",
  "datum": {}
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * feed_key **required** `string`: a valid feed key
  * id **required** `string`
  * datum **required** `object`
    * created_at `string`
    * ele `string`
    * epoch `number`
    * lat `string`
    * lon `string`
    * value `string`

#### Output
* output [DataResponse](#dataresponse)

### replaceData
Replace existing Data


```js
adafruit.replaceData({
  "username": "",
  "feed_key": "",
  "id": "",
  "datum": {}
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * feed_key **required** `string`: a valid feed key
  * id **required** `string`
  * datum **required** `object`
    * created_at `string`
    * ele `string`
    * epoch `number`
    * lat `string`
    * lon `string`
    * value `string`

#### Output
* output [DataResponse](#dataresponse)

### getFeedDetails
Returns more detailed feed record based on the feed key


```js
adafruit.getFeedDetails({
  "username": "",
  "feed_key": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * feed_key **required** `string`: a valid feed key

#### Output
* output [Feed](#feed)

### allGroups
The Groups endpoint returns information about the user's groups. The response includes the latest value of each feed in the group, and other metadata about the group.



```js
adafruit.allGroups({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string

#### Output
* output `array`
  * items [Group](#group)

### createGroup
Create a new Group


```js
adafruit.createGroup({
  "username": "",
  "group": {}
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * group **required** `object`
    * description `string`
    * key `string`
    * name `string`

#### Output
* output [Group](#group)

### destroyGroup
Delete an existing Group


```js
adafruit.destroyGroup({
  "username": "",
  "group_key": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * group_key **required** `string`

#### Output
* output `string`

### getGroup
Returns Group based on ID


```js
adafruit.getGroup({
  "username": "",
  "group_key": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * group_key **required** `string`

#### Output
* output [Group](#group)

### updateGroup
Update properties of an existing Group


```js
adafruit.updateGroup({
  "username": "",
  "group_key": "",
  "group": {}
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * group_key **required** `string`
  * group **required** `object`
    * description `string`
    * key `string`
    * name `string`

#### Output
* output [Group](#group)

### replaceGroup
Replace an existing Group


```js
adafruit.replaceGroup({
  "username": "",
  "group_key": "",
  "group": {}
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * group_key **required** `string`
  * group **required** `object`
    * description `string`
    * key `string`
    * name `string`

#### Output
* output [Group](#group)

### addFeedToGroup
Add an existing Feed to a Group


```js
adafruit.addFeedToGroup({
  "group_key": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * group_key **required** `string`
  * username **required** `string`: a valid username string
  * feed_key `string`

#### Output
* output [Group](#group)

### createGroupData
Create new data for multiple feeds in a group


```js
adafruit.createGroupData({
  "username": "",
  "group_key": "",
  "group_feed_data": {
    "feeds": []
  }
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * group_key **required** `string`
  * group_feed_data **required** `object`
    * created_at `string`: Optional created_at timestamp which will be applied to all feed values created.
    * feeds **required** `array`: An array of feed data records with `key` and `value` properties.
      * items `object`
        * key **required** `string`
        * value **required** `string`
    * location `object`: A location record with `lat`, `lon`, and [optional] `ele` properties.
      * ele `number`
      * lat **required** `number`
      * lon **required** `number`

#### Output
* output `array`
  * items [DataResponse](#dataresponse)

### allGroupFeeds
The Group Feeds endpoint returns information about the user's feeds. The response includes the latest value of each feed, and other metadata about each feed, but only for feeds within the given group.


```js
adafruit.allGroupFeeds({
  "group_key": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * group_key **required** `string`
  * username **required** `string`: a valid username string

#### Output
* output `array`
  * items [Feed](#feed)

### createGroupFeed
Create a new Feed in a Group


```js
adafruit.createGroupFeed({
  "username": "",
  "group_key": "",
  "feed": {}
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * group_key **required** `string`
  * feed **required** `object`
    * description `string`
    * key `string`
    * license `string`
    * name `string`

#### Output
* output [Feed](#feed)

### allGroupFeedData
All data for current feed in a specific group


```js
adafruit.allGroupFeedData({
  "username": "",
  "group_key": "",
  "feed_key": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * group_key **required** `string`
  * feed_key **required** `string`: a valid feed key
  * start_time `string`: Start time for filtering data. Returns data created after given time.
  * end_time `string`: End time for filtering data. Returns data created before give time.
  * limit `integer`: Limit the number of records returned.

#### Output
* output `array`
  * items [DataResponse](#dataresponse)

### createGroupFeedData
Create new Data in a feed belonging to a particular group


```js
adafruit.createGroupFeedData({
  "username": "",
  "group_key": "",
  "feed_key": "",
  "datum": {}
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * group_key **required** `string`
  * feed_key **required** `string`: a valid feed key
  * datum **required** `object`
    * created_at `string`
    * ele `string`
    * epoch `number`
    * lat `string`
    * lon `string`
    * value `string`

#### Output
* output [DataResponse](#dataresponse)

### batchCreateGroupFeedData
Create multiple new Data records in a feed belonging to a particular group


```js
adafruit.batchCreateGroupFeedData({
  "username": "",
  "group_key": "",
  "feed_key": "",
  "data": []
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * group_key **required** `string`
  * feed_key **required** `string`: a valid feed key
  * data **required** `array`
    * items `object`
      * created_at `string`
      * ele `string`
      * epoch `number`
      * lat `string`
      * lon `string`
      * value `string`

#### Output
* output `array`
  * items [DataResponse](#dataresponse)

### removeFeedFromGroup
Remove a Feed from a Group


```js
adafruit.removeFeedFromGroup({
  "group_key": "",
  "username": ""
}, context)
```

#### Input
* input `object`
  * group_key **required** `string`
  * username **required** `string`: a valid username string
  * feed_key `string`

#### Output
* output [Group](#group)

### getCurrentUserThrottle
Get the user's data rate limit and current activity level.


```js
adafruit.getCurrentUserThrottle({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string

#### Output
* output `object`
  * active_data_rate `integer`: Actions taken inside the time window.
  * data_rate_limit `integer`: Max possible actions inside the time window (usually 1 minute).

### allTokens
The Tokens endpoint returns information about the user's tokens.



```js
adafruit.allTokens({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string

#### Output
* output `array`
  * items [Token](#token)

### createToken
Create a new Token


```js
adafruit.createToken({
  "username": "",
  "token": {}
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * token **required** `object`
    * token `string`

#### Output
* output [Token](#token)

### destroyToken
Delete an existing Token


```js
adafruit.destroyToken({
  "username": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * id **required** `string`

#### Output
* output `string`

### getToken
Returns Token based on ID


```js
adafruit.getToken({
  "username": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * id **required** `string`

#### Output
* output [Token](#token)

### updateToken
Update properties of an existing Token


```js
adafruit.updateToken({
  "username": "",
  "id": "",
  "token": {}
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * id **required** `string`
  * token **required** `object`
    * token `string`

#### Output
* output [Token](#token)

### replaceToken
Replace an existing Token


```js
adafruit.replaceToken({
  "username": "",
  "id": "",
  "token": {}
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * id **required** `string`
  * token **required** `object`
    * token `string`

#### Output
* output [Token](#token)

### allTriggers
The Triggers endpoint returns information about the user's triggers.



```js
adafruit.allTriggers({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string

#### Output
* output `array`
  * items [Trigger](#trigger)

### createTrigger
Create a new Trigger


```js
adafruit.createTrigger({
  "username": "",
  "trigger": {}
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * trigger **required** `object`
    * name `string`

#### Output
* output [Trigger](#trigger)

### destroyTrigger
Delete an existing Trigger


```js
adafruit.destroyTrigger({
  "username": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * id **required** `string`

#### Output
* output `string`

### getTrigger
Returns Trigger based on ID


```js
adafruit.getTrigger({
  "username": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * id **required** `string`

#### Output
* output [Trigger](#trigger)

### updateTrigger
Update properties of an existing Trigger


```js
adafruit.updateTrigger({
  "username": "",
  "id": "",
  "trigger": {}
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * id **required** `string`
  * trigger **required** `object`
    * name `string`

#### Output
* output [Trigger](#trigger)

### replaceTrigger
Replace an existing Trigger


```js
adafruit.replaceTrigger({
  "username": "",
  "id": "",
  "trigger": {}
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * id **required** `string`
  * trigger **required** `object`
    * name `string`

#### Output
* output [Trigger](#trigger)

### allPermissions
The Permissions endpoint returns information about the user's permissions.



```js
adafruit.allPermissions({
  "username": "",
  "type": "",
  "type_id": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * type **required** `string`
  * type_id **required** `string`

#### Output
* output `array`
  * items [Permission](#permission)

### createPermission
Create a new Permission


```js
adafruit.createPermission({
  "username": "",
  "type": "",
  "type_id": "",
  "permission": {}
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * type **required** `string`
  * type_id **required** `string`
  * permission **required** `object`
    * mode `string` (values: r, w, rw)
    * scope `string` (values: secret, public, user, organization)
    * scope_value `string`

#### Output
* output [Permission](#permission)

### destroyPermission
Delete an existing Permission


```js
adafruit.destroyPermission({
  "username": "",
  "type": "",
  "type_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * type **required** `string`
  * type_id **required** `string`
  * id **required** `string`

#### Output
* output `string`

### getPermission
Returns Permission based on ID


```js
adafruit.getPermission({
  "username": "",
  "type": "",
  "type_id": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * type **required** `string`
  * type_id **required** `string`
  * id **required** `string`

#### Output
* output [Permission](#permission)

### updatePermission
Update properties of an existing Permission


```js
adafruit.updatePermission({
  "username": "",
  "type": "",
  "type_id": "",
  "id": "",
  "permission": {}
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * type **required** `string`
  * type_id **required** `string`
  * id **required** `string`
  * permission **required** `object`
    * mode `string` (values: r, w, rw)
    * scope `string` (values: secret, public, user, organization)
    * scope_value `string`

#### Output
* output [Permission](#permission)

### replacePermission
Replace an existing Permission


```js
adafruit.replacePermission({
  "username": "",
  "type": "",
  "type_id": "",
  "id": "",
  "permission": {}
}, context)
```

#### Input
* input `object`
  * username **required** `string`: a valid username string
  * type **required** `string`
  * type_id **required** `string`
  * id **required** `string`
  * permission **required** `object`
    * mode `string` (values: r, w, rw)
    * scope `string` (values: secret, public, user, organization)
    * scope_value `string`

#### Output
* output [Permission](#permission)



## Definitions

### Activity
* Activity `object`
  * action `string`
  * created_at `string`
  * data `object`
  * id `number`
  * model `string`
  * updated_at `string`
  * user_id `number`

### Block
* Block `object`
  * block_feeds `array`
    * items [BlockFeed](#blockfeed)
  * column `number`
  * description `string`
  * key `string`
  * name `string`
  * row `number`
  * size_x `number`
  * size_y `number`
  * visual_type `string`

### BlockFeed
* BlockFeed `object`
  * feed [Feed](#feed)
  * group [Group](#group)
  * id `string`

### Dashboard
* Dashboard `object`
  * blocks `array`
    * items [Block](#block)
  * description `string`
  * key `string`
  * name `string`

### Data
* Data `object`
  * completed_at `string`
  * created_at `string`
  * created_epoch `number`
  * ele `number`
  * expiration `string`
  * feed_id `number`
  * group_id `number`
  * id `string`
  * lat `number`
  * lon `number`
  * updated_at `string`
  * value `string`

### DataResponse
* DataResponse `object`
  * completed_at `string`
  * created_at `string`
  * created_epoch `number`
  * ele `number`
  * expiration `string`
  * feed_id `number`
  * group_id `number`
  * id `string`
  * lat `number`
  * lon `number`
  * updated_at `string`
  * value `string`

### Error
* Error `object`
  * code `string`
  * message `string`

### Feed
* Feed `object`
  * created_at `string`
  * description `string`
  * details `object`: Additional details about this feed.
    * data `object`
      * count `integer`: Number of data points stored by this feed.
      * first `object`
      * last `object`
    * shared_with `array`: Access control list for this feed
      * items `object`
  * enabled `boolean`
  * group `object`
  * groups `array`
    * items [ShallowGroup](#shallowgroup)
  * history `boolean`
  * id `number`
  * key `string`
  * last_value `string`
  * license `string`
  * name `string`
  * status `string`
  * status_notify `boolean`: Is status notification active?
  * status_timeout `integer`: Status notification timeout in minutes.
  * unit_symbol `string`
  * unit_type `string`
  * updated_at `string`
  * visibility `string` (values: private, public)

### Group
* Group `object`
  * created_at `string`
  * description `string`
  * feeds `array`
    * items [Feed](#feed)
  * id `number`
  * name `string`
  * updated_at `string`

### Permission
* Permission `object`
  * created_at `string`
  * id `number`
  * model `string` (values: feed, group, dashboard)
  * object_id `number`
  * scope `string` (values: secret, public, user, organization)
  * scope_value `string`
  * updated_at `string`
  * user_id `number`

### ShallowGroup
* ShallowGroup `object`
  * created_at `string`
  * description `string`
  * id `number`
  * name `string`
  * updated_at `string`

### Token
* Token `object`
  * token `string`

### Trigger
* Trigger `object`
  * name `string`

### User
* User `object`
  * color `string`
  * created_at `string`
  * id `number`
  * name `string`
  * time_zone `string`
  * updated_at `string`
  * username `string`


