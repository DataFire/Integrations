# @datafire/apitore_twitterapis

Client library for Twitter APIs

## Installation and Usage
```bash
npm install --save @datafire/apitore_twitterapis
```
```js
let apitore_twitterapis = require('@datafire/apitore_twitterapis').create();

apitore_twitterapis.myTimelineUsingGET({}).then(data => {
  console.log(data);
})
```

## Description

Call Twitter APIs.<BR />[Endpoint] https://api.apitore.com/api/23

## Actions

### myTimelineUsingGET
Get my timeline tweets.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/twitter-response">twitter-response</a><BR />&nbsp; Class: com.apitore.banana.response.twitter.TwitterResponseEntity<BR />


```js
apitore_twitterapis.myTimelineUsingGET({
  "access_token": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * sinceId `integer`: Get after this id.
  * maxId `integer`: Get before this id.
  * iter `integer`: Numof requests. Return up to 200 x iter tweets.

#### Output
* output [TwitterResponseEntity](#twitterresponseentity)

### myTweetUsingGET
Get my tweets.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/twitter-response">twitter-response</a><BR />&nbsp; Class: com.apitore.banana.response.twitter.TwitterResponseEntity<BR />


```js
apitore_twitterapis.myTweetUsingGET({
  "access_token": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * sinceId `integer`: Get after this id.
  * maxId `integer`: Get before this id.
  * iter `integer`: Numof requests. Return up to 200 x iter tweets.

#### Output
* output [TwitterResponseEntity](#twitterresponseentity)

### searchUsingGET
Tweets search API.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/twitter-response">twitter-response</a><BR />&nbsp; Class: com.apitore.banana.response.twitter.TwitterResponseEntity<BR />


```js
apitore_twitterapis.searchUsingGET({
  "access_token": "",
  "q": ""
}, context)
```

#### Input
* input `object`
  * access_token **required** `string`: Access Token
  * q **required** `string`: Search query
  * sinceId `integer`: Search after this id.
  * maxId `integer`: Search before this id.
  * iter `integer`: Numof search requests. Return up to 100 x iter tweets.

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


