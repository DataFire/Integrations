# @datafire/apitore_twitterapiswithsentimentbyapitoresentimentapi

Client library for Twitter APIs with sentiment by Apitore sentiment

## Installation and Usage
```bash
npm install --save @datafire/apitore_twitterapiswithsentimentbyapitoresentimentapi
```
```js
let apitore_twitterapiswithsentimentbyapitoresentimentapi = require('@datafire/apitore_twitterapiswithsentimentbyapitoresentimentapi').create();

apitore_twitterapiswithsentimentbyapitoresentimentapi.searchUsingGET_1({}).then(data => {
  console.log(data);
})
```

## Description

Call Twitter APIs with sentiment by Apitore sentiment API.<BR />[Endpoint] https://api.apitore.com/api/25

## Actions

### searchUsingGET_1
Tweets search API with sentiment by Apitore sentiment API.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/twitter-response">twitter-response</a><BR />&nbsp; Class: com.apitore.banana.response.twitter.TwitterResponseEntity<BR />


```js
apitore_twitterapiswithsentimentbyapitoresentimentapi.searchUsingGET_1({
  "access_token": "",
  "q": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * q **required** `string`: Search query
  * sinceId `integer`: Get after this id.
  * maxId `integer`: Get before this id.

#### Output
* output [TwitterResponseEntity](#twitterresponseentity)



## Definitions

### TweetEntity
* TweetEntity `object`
  * createdAt **required** `integer`: Tweet date
  * favorited `boolean`
  * favoritedCount **required** `integer`: Number of be favorited
  * retweetCount **required** `integer`: Number of be retweeted
  * retweeted `boolean`
  * sentiment `string`: Tweet sentiment by Apitore sentiment API
  * sentimentScore `number`: Tweet sentiment score by Apitore sentiment API
  * source **required** `string`: Tweet client
  * statusId **required** `integer`: Status ID
  * text **required** `string`: Tweet text
  * userId **required** `integer`: User ID
  * userName **required** `string`: User name
  * userProfileImageURL **required** `string`: User profile image URL
  * userScreenName **required** `string`: User screen name

### TwitterResponseEntity
* TwitterResponseEntity `object`
  * endTime **required** `string`: End date
  * log **required** `string`: Log message
  * numofTweets **required** `integer`: Output: Numof tweets
  * processTime **required** `string`: Process time [millisecond]
  * query **required** `string`: Input: query
  * startTime **required** `string`: Start date
  * tweets **required** `array`: Output: Tweets
    * items [TweetEntity](#tweetentity)


