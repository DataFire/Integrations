# @datafire/apitore_tweetsummarizationapis

Client library for Tweet summarization APIs

## Installation and Usage
```bash
npm install --save @datafire/apitore_tweetsummarizationapis
```
```js
let apitore_tweetsummarizationapis = require('@datafire/apitore_tweetsummarizationapis').create();

apitore_tweetsummarizationapis.getUsingGET({}).then(data => {
  console.log(data);
})
```

## Description

Tweet summarization.<BR />[Endpoint] https://api.apitore.com/api/27

## Actions

### getUsingGET
Tweet summarization API.<BR />Response<BR />&nbsp; Github: <a href="https://github.com/keigohtr/apitore-response-parent/tree/master/twitter-response">twitter-response</a><BR />&nbsp; Class: com.apitore.banana.response.twitter.TwitterSummarizeResponseEntity<BR />


```js
apitore_tweetsummarizationapis.getUsingGET({
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
  * iter `integer`: Numof search requests. Return up to 100 x iter tweets.
  * num `integer`: Numof summarization tweets.

#### Output
* output [TwitterSummarizeResponseEntity](#twittersummarizeresponseentity)



## Definitions

### TweetSummarizeEntity
* TweetSummarizeEntity `object`
  * createdAt **required** `integer`: Tweet date
  * score **required** `number`: Summarization score
  * statusId **required** `integer`: Status ID
  * text **required** `string`: Tweet text
  * userId **required** `integer`: User ID
  * userName **required** `string`: User name
  * userProfileImageURL **required** `string`: User profile image URL
  * userScreenName **required** `string`: User screen name

### TwitterSummarizeResponseEntity
* TwitterSummarizeResponseEntity `object`
  * endTime **required** `string`: End date
  * log **required** `string`: Log message
  * numofSummarize **required** `integer`: Output: Numof summarize
  * numofTweets **required** `integer`: Output: Numof hit tweets
  * processTime **required** `string`: Process time [millisecond]
  * query **required** `string`: Input: query
  * startTime **required** `string`: Start date
  * tweets **required** `array`: Output: Summarization tweets
    * items [TweetSummarizeEntity](#tweetsummarizeentity)


