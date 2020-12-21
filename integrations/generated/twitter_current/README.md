# @datafire/twitter_current

Client library for Early Access

## Installation and Usage
```bash
npm install --save @datafire/twitter_current
```
```js
let twitter_current = require('@datafire/twitter_current').create({
  BearerToken: ""
});

.then(data => {
  console.log(data);
});
```

## Description

API Reference — v2

## Actions

### getOpenApiSpec
Full open api spec in JSON format. (See https://github.com/OAI/OpenAPI-Specification/blob/master/README.md)


```js
twitter_current.getOpenApiSpec(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### findTweetsById
Returns a variety of information about the Tweet specified by the requested ID


```js
twitter_current.findTweetsById({
  "ids": []
}, context)
```

#### Input
* input `object`
  * ids **required** `array`: A comma separated list of Tweet IDs. Up to 100 are allowed in a single request.
  * expansions `array`: A comma separated list of fields to expand.
  * tweet.fields `array`: A comma separated list of Tweet fields to display.
  * user.fields `array`: A comma separated list of User fields to display.
  * media.fields `array`: A comma separated list of Media fields to display.
  * place.fields `array`: A comma separated list of Place fields to display.
  * poll.fields `array`: A comma separated list of Poll fields to display.

#### Output
* output [TweetLookupResponse](#tweetlookupresponse)

### sampleStream
Streams a deterministic 1% of public tweets.


```js
twitter_current.sampleStream({}, context)
```

#### Input
* input `object`
  * expansions `array`: A comma separated list of fields to expand.
  * tweet.fields `array`: A comma separated list of Tweet fields to display.
  * user.fields `array`: A comma separated list of User fields to display.
  * media.fields `array`: A comma separated list of Media fields to display.
  * place.fields `array`: A comma separated list of Place fields to display.
  * poll.fields `array`: A comma separated list of Poll fields to display.

#### Output
* output [StreamingTweet](#streamingtweet)

### tweetsFullarchiveSearch
Returns Tweets that match a search query.


```js
twitter_current.tweetsFullarchiveSearch({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: One query/rule/filter for matching Tweets. Up to 1024 characters.
  * start_time `string`: YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).
  * end_time `string`: YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).
  * since_id `string`: Returns results with a Tweet ID greater than (that is, more recent than) the specified ID.
  * until_id `string`: Returns results with a Tweet ID less than (that is, older than) the specified ID.
  * max_results `integer`: The maximum number of search results to be returned by a request.
  * next_token `string`: This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
  * expansions `array`: A comma separated list of fields to expand.
  * tweet.fields `array`: A comma separated list of Tweet fields to display.
  * user.fields `array`: A comma separated list of User fields to display.
  * media.fields `array`: A comma separated list of Media fields to display.
  * place.fields `array`: A comma separated list of Place fields to display.
  * poll.fields `array`: A comma separated list of Poll fields to display.

#### Output
* output `object`
  * data `array`
    * items [Tweet](#tweet)
  * errors `array`
    * items [Problem](#problem)
  * includes [Expansions](#expansions)
  * meta `object`
    * newest_id `string`: Most recent Tweet Id returned by search query
    * next_token `string`: This value is used to get the next 'page' of results by providing it to the next_token parameter.
    * oldest_id `string`: Oldest Tweet Id returned by search query
    * result_count `integer`: Number of search query results

### tweetsRecentSearch
Returns Tweets from the last 7 days that match a search query.


```js
twitter_current.tweetsRecentSearch({
  "query": ""
}, context)
```

#### Input
* input `object`
  * query **required** `string`: One query/rule/filter for matching Tweets. Up to 512 characters.
  * start_time `string`: YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp (from most recent 7 days) from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).
  * end_time `string`: YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).
  * since_id `string`: Returns results with a Tweet ID greater than (that is, more recent than) the specified ID.
  * until_id `string`: Returns results with a Tweet ID less than (that is, older than) the specified ID.
  * max_results `integer`: The maximum number of search results to be returned by a request.
  * next_token `string`: This parameter is used to get the next 'page' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.
  * expansions `array`: A comma separated list of fields to expand.
  * tweet.fields `array`: A comma separated list of Tweet fields to display.
  * user.fields `array`: A comma separated list of User fields to display.
  * media.fields `array`: A comma separated list of Media fields to display.
  * place.fields `array`: A comma separated list of Place fields to display.
  * poll.fields `array`: A comma separated list of Poll fields to display.

#### Output
* output [TweetSearchResponse](#tweetsearchresponse)

### searchStream
Streams tweets matching a user's active rule set.


```js
twitter_current.searchStream({}, context)
```

#### Input
* input `object`
  * expansions `array`: A comma separated list of fields to expand.
  * tweet.fields `array`: A comma separated list of Tweet fields to display.
  * user.fields `array`: A comma separated list of User fields to display.
  * media.fields `array`: A comma separated list of Media fields to display.
  * place.fields `array`: A comma separated list of Place fields to display.
  * poll.fields `array`: A comma separated list of Poll fields to display.

#### Output
* output [FilteredStreamingTweet](#filteredstreamingtweet)

### getRules
Returns rules from a user's active rule set. Users can fetch all of their rules or a subset, specified by the provided rule ids.


```js
twitter_current.getRules({}, context)
```

#### Input
* input `object`
  * ids `array`: A comma-separated list of Rule IDs.

#### Output
* output `object`
  * data **required** `array`
    * items [Rule](#rule)
  * meta **required** [RulesResponseMetadata](#rulesresponsemetadata)

### addOrDeleteRules
Add or delete rules from a user's active rule set. Users can provide unique, optionally tagged rules to add. Users can delete their entire rule set or a subset specified by rule ids or values.


```js
twitter_current.addOrDeleteRules({
  "body": {}
}, context)
```

#### Input
* input `object`
  * dry_run `boolean`: Dry Run can be used with both the add and delete action, with the expected result given, but without actually taking any action in the system (meaning the end state will always be as it was when the request was submitted). This is particularly useful to validate rule changes.
  * body **required** [AddOrDeleteRulesRequest](#addordeleterulesrequest)

#### Output
* output [AddOrDeleteRulesResponse](#addordeleterulesresponse)

### findTweetById
Returns a variety of information about the Tweet specified by the requested ID


```js
twitter_current.findTweetById({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: A single Tweet ID.
  * expansions `array`: A comma separated list of fields to expand.
  * tweet.fields `array`: A comma separated list of Tweet fields to display.
  * user.fields `array`: A comma separated list of User fields to display.
  * media.fields `array`: A comma separated list of Media fields to display.
  * place.fields `array`: A comma separated list of Place fields to display.
  * poll.fields `array`: A comma separated list of Poll fields to display.

#### Output
* output [SingleTweetLookupResponse](#singletweetlookupresponse)

### hideReplyById
Tweet ID in the path is that of the reply to hide or unhide.


```js
twitter_current.hideReplyById({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: The ID of the reply that you want to hide or unhide.
  * body `object`
    * hidden `boolean`

#### Output
* output `object`
  * data `object`
    * hidden `boolean`

### findUsersById
This endpoint returns information about users. Specify users by their ID.


```js
twitter_current.findUsersById({
  "ids": []
}, context)
```

#### Input
* input `object`
  * ids **required** `array`: Required. A list of User IDs, comma-separated. You can specify up to 100 IDs.
  * expansions `array`: A comma separated list of fields to expand.
  * tweet.fields `array`: A comma separated list of Tweet fields to display.
  * user.fields `array`: A comma separated list of User fields to display.

#### Output
* output [UserLookupResponse](#userlookupresponse)

### findUsersByUsername
This endpoint returns information about users. Specify users by their username.


```js
twitter_current.findUsersByUsername({
  "usernames": []
}, context)
```

#### Input
* input `object`
  * usernames **required** `array`: Required . A list of usernames, comma-separated. You can specify up to 100 usernames.
  * expansions `array`: A comma separated list of fields to expand.
  * tweet.fields `array`: A comma separated list of Tweet fields to display.
  * user.fields `array`: A comma separated list of User fields to display.

#### Output
* output [UserLookupResponse](#userlookupresponse)

### findUserByUsername
This endpoint returns information about a user. Specify user by username.


```js
twitter_current.findUserByUsername({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: Required. A username.
  * expansions `array`: A comma separated list of fields to expand.
  * tweet.fields `array`: A comma separated list of Tweet fields to display.
  * user.fields `array`: A comma separated list of User fields to display.

#### Output
* output [SingleUserLookupResponse](#singleuserlookupresponse)

### findUserById
This endpoint returns information about a user. Specify user by ID.


```js
twitter_current.findUserById({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Required. A User ID.
  * expansions `array`: A comma separated list of fields to expand.
  * tweet.fields `array`: A comma separated list of Tweet fields to display.
  * user.fields `array`: A comma separated list of User fields to display.

#### Output
* output [SingleUserLookupResponse](#singleuserlookupresponse)



## Definitions

### AddOrDeleteRulesRequest
* AddOrDeleteRulesRequest `object`

### AddOrDeleteRulesResponse
* AddOrDeleteRulesResponse `object`

### AddRulesRequest
* AddRulesRequest `object`
  * add **required** `array`
    * items [RuleNoId](#rulenoid)

### AddRulesResponse
* AddRulesResponse `object`
  * data **required** `array`
    * items [Rule](#rule)
  * meta **required** [RulesResponseMetadata](#rulesresponsemetadata)

### AnimatedGif
* AnimatedGif `object`
  * height [MediaHeight](#mediaheight)
  * media_key [MediaKey](#mediakey)
  * width [MediaWidth](#mediawidth)
  * preview_image_url `string`
  * type `string` (values: animated_gif)

### CashtagEntity
* CashtagEntity
  * end **required** `integer`: Index (zero-based) at which position this entity ends.
  * start **required** `integer`: Index (zero-based) at which position this entity starts.
  * tag **required** `string`

### CashtagFields
* CashtagFields `object`: Represent the portion of text recognized as a Cashtag, and its start and end position within the text.
  * tag **required** `string`

### ClientDisconnectedProblem
* ClientDisconnectedProblem `object`: Your client has gone away.
  * detail **required** `string`
  * title **required** `string`
  * type `string` (values: https://api.twitter.com/2/problems/client-disconnected)

### ClientForbiddenProblem
* ClientForbiddenProblem `object`: A problem that indicates your client is forbidden from making this request.
  * detail **required** `string`
  * title **required** `string`
  * reason `string` (values: official-client-forbidden, client-not-enrolled)
  * registration_url `string`
  * type `string` (values: https://api.twitter.com/2/problems/client-forbidden)

### CommonMediaFields
* CommonMediaFields `object`
  * height [MediaHeight](#mediaheight)
  * media_key [MediaKey](#mediakey)
  * width [MediaWidth](#mediawidth)

### ConnectionExceptionProblem
* ConnectionExceptionProblem `object`: A problem that indicates something is wrong with the connection
  * detail **required** `string`
  * title **required** `string`
  * connection_issue `string` (values: TooManyConnections, ProvisioningSubscription)
  * type `string` (values: https://api.twitter.com/2/problems/streaming-connection)

### ContextAnnotation
* ContextAnnotation `object`: Annotation inferred from the tweet text.
  * domain **required** [ContextAnnotationDomainFields](#contextannotationdomainfields)
  * entity **required** [ContextAnnotationEntityFields](#contextannotationentityfields)

### ContextAnnotationDomainFields
* ContextAnnotationDomainFields `object`: Represents the data for the context annotation domain.
  * description `string`: Description of the context annotation domain.
  * id **required** `string`: The unique id for a context annotation domain.
  * name `string`: Name of the context annotation domain.

### ContextAnnotationEntityFields
* ContextAnnotationEntityFields `object`: Represents the data for the context annotation entity.
  * description `string`: Description of the context annotation entity.
  * id **required** `string`: The unique id for a context annotation entity.
  * name `string`: Name of the context annotation entity.

### CountryCode
* CountryCode `string`

### DeleteRulesRequest
* DeleteRulesRequest `object`
  * ids `array`
    * items [RuleId](#ruleid)
  * values `array`
    * items [RuleValue](#rulevalue)

### DeleteRulesResponse
* DeleteRulesResponse `object`
  * meta **required** [RulesResponseMetadata](#rulesresponsemetadata)

### DisallowedResourceProblem
* DisallowedResourceProblem `object`: A problem that indicates that the resource requested violates the precepts of this API.
  * detail **required** `string`
  * title **required** `string`
  * resource_id **required** `string`
  * resource_type **required** `string` (values: tweet, media)
  * section **required** `string` (values: data, includes)
  * type `string` (values: https://api.twitter.com/2/problems/disallowed-resource)

### DuplicateRuleProblem
* DuplicateRuleProblem `object`: The rule you have submitted is a duplicate.
  * detail **required** `string`
  * title **required** `string`
  * type `string` (values: https://api.twitter.com/2/problems/duplicate-rules)

### EntityIndices
* EntityIndices `object`: Represent a boundary range (start and end index) for a recognized entity (for example a hashtag or a mention). `start` must be smaller than `end`.
  * end **required** `integer`: Index (zero-based) at which position this entity ends.
  * start **required** `integer`: Index (zero-based) at which position this entity starts.

### Error
* Error `object`
  * code **required** `integer`
  * message **required** `string`

### Expansions
* Expansions `object`
  * media `array`
    * items [Media](#media)
  * places `array`
    * items [Place](#place)
  * polls `array`
    * items [Poll](#poll)
  * tweets `array`
    * items [Tweet](#tweet)
  * users `array`
    * items [User](#user)

### FieldUnauthorizedProblem
* FieldUnauthorizedProblem `object`: A problem that indicates that you are not allowed to see a particular field on a Tweet, User, etc.
  * detail **required** `string`
  * title **required** `string`
  * field **required** `string`
  * resource_type **required** `string` (values: tweet, media)
  * section **required** `string` (values: data, includes)
  * type `string` (values: https://api.twitter.com/2/problems/not-authorized-for-field)

### FilteredStreamingTweet
* FilteredStreamingTweet `object`: A tweet or error that can be returned by the streaming tweet API

### FullTextEntities
* FullTextEntities `object`
  * cashtags `array`
    * items [CashtagEntity](#cashtagentity)
  * hashtags `array`
    * items [HashtagEntity](#hashtagentity)
  * mentions `array`
    * items [MentionEntity](#mentionentity)
  * urls `array`
    * items [UrlEntity](#urlentity)

### GenericProblem
* GenericProblem: A generic problem with no additional information beyond that provided by the HTTP status code.
  * detail **required** `string`
  * title **required** `string`
  * status **required** `integer`
  * type `string` (values: about:blank)

### Geo
* Geo `object`
  * bbox **required** `array`
    * items `number`
  * geometry [Point](#point)
  * properties **required** `object`
  * type **required** `string` (values: Feature)

### HTTPStatusCode
* HTTPStatusCode `integer`: HTTP Status Code.

### HashtagEntity
* HashtagEntity
  * end **required** `integer`: Index (zero-based) at which position this entity ends.
  * start **required** `integer`: Index (zero-based) at which position this entity starts.
  * tag **required** `string`: The text of the Hashtag

### HashtagFields
* HashtagFields `object`: Represent the portion of text recognized as a Hashtag, and its start and end position within the text.
  * tag **required** `string`: The text of the Hashtag

### InvalidRequestProblem
* InvalidRequestProblem: A problem that indicates this request is invalid.
  * detail **required** `string`
  * title **required** `string`
  * errors `array`
    * items `object`
      * parameters `object`
      * message `string`
  * type `string` (values: https://api.twitter.com/2/problems/invalid-request)

### InvalidRuleProblem
* InvalidRuleProblem `object`: The rule you have submitted is invalid.
  * detail **required** `string`
  * title **required** `string`
  * type `string` (values: https://api.twitter.com/2/problems/invalid-rules)

### Media
* Media `object`
  * type **required** `string`

### MediaHeight
* MediaHeight `integer`: The height of the media in pixels

### MediaKey
* MediaKey `string`: The Media Key identifier for this attachment.

### MediaWidth
* MediaWidth `integer`: The width of the media in pixels

### MentionEntity
* MentionEntity
  * end **required** `integer`: Index (zero-based) at which position this entity ends.
  * start **required** `integer`: Index (zero-based) at which position this entity starts.
  * username **required** [UserName](#username)

### MentionFields
* MentionFields `object`: Represent the portion of text recognized as a User mention, and its start and end position within the text.
  * username **required** [UserName](#username)

### OperationalDisconnectProblem
* OperationalDisconnectProblem `object`: You have been disconnected for operational reasons.
  * detail **required** `string`
  * title **required** `string`
  * disconnect_type `string` (values: OperationalDisconnect, UpstreamOperationalDisconnect, ForceDisconnect, UpstreamUncleanDisconnect, SlowReader, InternalError, PackageUpgraded, PackageDowngraded, ClientApplicationStateDegraded)
  * type `string` (values: https://api.twitter.com/2/problems/operational-disconnect)

### Photo
* Photo `object`
  * height [MediaHeight](#mediaheight)
  * media_key [MediaKey](#mediakey)
  * width [MediaWidth](#mediawidth)
  * type `string` (values: photo)
  * url `string`

### Place
* Place `object`
  * contained_within `array`
    * items [PlaceId](#placeid)
  * country `string`
  * country_code [CountryCode](#countrycode)
  * full_name **required** `string`
  * geo [Geo](#geo)
  * id **required** [PlaceId](#placeid)
  * name `string`: The human readable name of this place.
  * place_type [PlaceType](#placetype)

### PlaceId
* PlaceId `string`: The identifier for this place

### PlaceType
* PlaceType `string` (values: poi, neighborhood, city, admin, country, unknown)

### Point
* Point `object`: A [GeoJson Point](https://tools.ietf.org/html/rfc7946#section-3.1.2) geometry object.
  * coordinates **required** [Position](#position)
  * type **required** `string` (values: Point)

### Poll
* Poll `object`: Represent a Poll attached to a Tweet
  * duration_minutes `integer`
  * end_datetime `string`
  * id **required** [PollId](#pollid)
  * options **required** `array`
    * items [PollOption](#polloption)
  * voting_status `string` (values: open, closed)

### PollId
* PollId `string`: Unique identifier of this poll.

### PollOption
* PollOption `object`: Describes a choice in a Poll object.
  * label **required** `string`: The text of a poll choice.
  * position **required** `integer`: Position of this choice in the poll.
  * votes **required** `integer`: Number of users who voted for this choice.

### Position
* Position `array`: A [GeoJson Position](https://tools.ietf.org/html/rfc7946#section-3.1.1) in the format `[longitude,latitude]`.
  * items `number`

### Problem
* Problem `object`: An HTTP Problem Details object, as defined in IETF RFC 7807 (https://tools.ietf.org/html/rfc7807).
  * type **required** `string`

### ProblemFields
* ProblemFields `object`
  * detail **required** `string`
  * title **required** `string`

### ReplySettings
* ReplySettings `string` (values: everyone, mentionedUsers, following, other): Shows who can reply a Tweet. Fields returned are everyone, mentioned_users, and following.

### ResourceNotFoundProblem
* ResourceNotFoundProblem: A problem that indicates that a given Tweet, User, etc. does not exist.
  * detail **required** `string`
  * title **required** `string`
  * parameter **required** `string`
  * resource_type **required** `string` (values: user, tweet, media)
  * type `string` (values: https://api.twitter.com/2/problems/resource-not-found)

### ResourceUnauthorizedProblem
* ResourceUnauthorizedProblem `object`: A problem that indicates you are not allowed to see a particular Tweet, User, etc.
  * detail **required** `string`
  * title **required** `string`
  * parameter **required** `string`
  * resource_type **required** `string` (values: tweet, user, media)
  * section **required** `string` (values: data, includes)
  * type `string` (values: https://api.twitter.com/2/problems/not-authorized-for-resource)
  * value **required** `string`

### Rule
* Rule `object`
  * id [RuleId](#ruleid)
  * tag [RuleTag](#ruletag)
  * value **required** [RuleValue](#rulevalue)

### RuleId
* RuleId `string`: Unique identifier of this rule.

### RuleNoId
* RuleNoId `object`
  * tag [RuleTag](#ruletag)
  * value **required** [RuleValue](#rulevalue)

### RuleTag
* RuleTag `string`: A tag meant for the labeling of user provided rules.

### RuleValue
* RuleValue `string`: The filterlang value of the rule.

### RulesCapProblem
* RulesCapProblem `object`: You have exceeded the maximum number of rules.
  * detail **required** `string`
  * title **required** `string`
  * type `string` (values: https://api.twitter.com/2/problems/rule-cap)

### RulesRequestSummary
* RulesRequestSummary `object`

### RulesResponseMetadata
* RulesResponseMetadata `object`
  * sent **required** `string`
  * summary [RulesRequestSummary](#rulesrequestsummary)

### SingleTweetLookupResponse
* SingleTweetLookupResponse `object`
  * data [Tweet](#tweet)
  * errors `array`
    * items [Problem](#problem)
  * includes [Expansions](#expansions)

### SingleUserLookupResponse
* SingleUserLookupResponse `object`
  * data [User](#user)
  * errors `array`
    * items [Problem](#problem)
  * includes [Expansions](#expansions)

### StreamingTweet
* StreamingTweet `object`: A tweet or error that can be returned by the streaming tweet API.

### Tweet
* Tweet `object`
  * attachments `object`: Specifies the type of attachments (if any) present in this Tweet.
    * media_keys `array`: A list of Media Keys for each one of the media attachments (if media are attached).
      * items [MediaKey](#mediakey)
    * poll_ids `array`: A list of poll IDs (if polls are attached).
      * items [PollId](#pollid)
  * author_id [UserID](#userid)
  * context_annotations `array`
    * items [ContextAnnotation](#contextannotation)
  * conversation_id [TweetID](#tweetid)
  * created_at `string`: Creation time of the Tweet.
  * entities [FullTextEntities](#fulltextentities)
  * geo `object`: The location tagged on the Tweet, if the user provided one.
    * coordinates [Point](#point)
    * place_id [PlaceId](#placeid)
  * id **required** [TweetID](#tweetid)
  * in_reply_to_user_id [UserID](#userid)
  * lang `string`: Language of the Tweet, if detected by Twitter. Returned as a BCP47 language tag.
  * non_public_metrics `object`: Nonpublic engagement metrics for the Tweet at the time of the request.
    * impression_count `integer`: Number of times this Tweet has been viewed.
  * organic_metrics `object`: Organic nonpublic engagement metrics for the Tweet at the time of the request.
    * impression_count **required** `integer`: Number of times this Tweet has been viewed.
    * like_count **required** `integer`: Number of times this Tweet has been liked.
    * reply_count **required** `integer`: Number of times this Tweet has been replied to.
    * retweet_count **required** `integer`: Number of times this Tweet has been Retweeted.
  * possibly_sensitive `boolean`: Indicates if this Tweet contains URLs marked as sensitive, for example content suitable for mature audiences.
  * promoted_metrics `object`: Promoted nonpublic engagement metrics for the Tweet at the time of the request.
    * impression_count `integer`: Number of times this Tweet has been viewed.
    * like_count `integer`: Number of times this Tweet has been liked.
    * reply_count `integer`: Number of times this Tweet has been replied to.
    * retweet_count `integer`: Number of times this Tweet has been Retweeted.
  * public_metrics `object`: Engagement metrics for the Tweet at the time of the request.
    * like_count **required** `integer`: Number of times this Tweet has been liked.
    * quote_count `integer`: Number of times this Tweet has been quoted.
    * reply_count **required** `integer`: Number of times this Tweet has been replied to.
    * retweet_count **required** `integer`: Number of times this Tweet has been Retweeted.
  * referenced_tweets `array`: A list of Tweets this Tweet refers to. For example, if the parent Tweet is a Retweet, a Quoted Tweet or a Reply, it will include the related Tweet referenced to by its parent.
    * items `object`
      * id **required** [TweetID](#tweetid)
      * type **required** `string` (values: retweeted, quoted, replied_to)
  * reply_settings [ReplySettings](#replysettings)
  * source `string`: The name of the app the user Tweeted from.
  * text **required** `string`: The content of the Tweet.
  * withheld [TweetWithheld](#tweetwithheld)

### TweetID
* TweetID `string`: Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

### TweetLookupResponse
* TweetLookupResponse `object`
  * data `array`
    * items [Tweet](#tweet)
  * errors `array`
    * items [Problem](#problem)
  * includes [Expansions](#expansions)
  * meta `object`
    * newest_id `string`: The ID of the newest Tweet in the response.
    * next_token `string`: The next cursor provided by the response.
    * oldest_id `string`: The ID of the oldest Tweet in the response.
    * previous_token `string`: The previous cursor provided by the response.
    * result_count `integer`: Number of results returned in the response.

### TweetSearchResponse
* TweetSearchResponse `object`
  * data `array`
    * items [Tweet](#tweet)
  * errors `array`
    * items [Problem](#problem)
  * includes [Expansions](#expansions)
  * meta `object`
    * newest_id `string`: Most recent Tweet Id returned by search query
    * next_token `string`: This value is used to get the next 'page' of results by providing it to the next_token parameter.
    * oldest_id `string`: Oldest Tweet Id returned by search query
    * result_count `integer`: Number of search query results

### TweetWithheld
* TweetWithheld `object`: Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country).
  * copyright **required** `boolean`: Indicates if the content is being withheld for on the basis of copyright infringement.
  * country_codes **required** `array`: Provides a list of countries where this content is not available.
    * items [CountryCode](#countrycode)
  * scope `string` (values: tweet, user): Indicates whether the content being withheld is the `tweet` or a `user`.

### URL
* URL `string`: A validly formatted URL.

### URLFields
* URLFields `object`: Represent the portion of text recognized as a URL.
  * description `string`: Description of the URL landing page.
  * display_url `string`: The URL as displayed in the Twitter client.
  * expanded_url [URL](#url)
  * images `array`
    * items [URLImage](#urlimage)
  * status [HTTPStatusCode](#httpstatuscode)
  * title `string`: Title of the page the URL points to.
  * unwound_url `string`: Fully resolved url
  * url **required** [URL](#url)

### URLImage
* URLImage `object`: Represent the information for the URL image
  * height [MediaHeight](#mediaheight)
  * url [URL](#url)
  * width [MediaWidth](#mediawidth)

### UnsupportedAuthenticationProblem
* UnsupportedAuthenticationProblem `object`: A problem that indicates that the authentication used is not supported.
  * detail **required** `string`
  * title **required** `string`
  * type `string` (values: https://api.twitter.com/2/problems/unsupported-authentication)

### UrlEntity
* UrlEntity: Represent the portion of text recognized as a URL, and its start and end position within the text.
  * end **required** `integer`: Index (zero-based) at which position this entity ends.
  * start **required** `integer`: Index (zero-based) at which position this entity starts.
  * description `string`: Description of the URL landing page.
  * display_url `string`: The URL as displayed in the Twitter client.
  * expanded_url [URL](#url)
  * images `array`
    * items [URLImage](#urlimage)
  * status [HTTPStatusCode](#httpstatuscode)
  * title `string`: Title of the page the URL points to.
  * unwound_url `string`: Fully resolved url
  * url **required** [URL](#url)

### UsageCapExceededProblem
* UsageCapExceededProblem `object`: A problem that indicates that a usage cap has been exceeded.
  * detail **required** `string`
  * title **required** `string`
  * period `string` (values: Daily, Monthly)
  * scope `string` (values: Account, Product)
  * type `string` (values: https://api.twitter.com/2/problems/usage-capped)

### User
* User `object`: The Twitter User object
  * created_at `string`: Creation time of this user.
  * description `string`: The text of this user's profile description (also known as bio), if the user provided one.
  * entities `object`: A list of metadata found in the user's profile description.
    * description [FullTextEntities](#fulltextentities)
    * url `object`: Expanded details for the URL specified in the user's profile, with start and end indices.
      * urls `array`
        * items [UrlEntity](#urlentity)
  * id **required** [UserID](#userid)
  * location `string`: The location specified in the user's profile, if the user provided one. As this is a freeform value, it may not indicate a valid location, but it may be fuzzily evaluated when performing searches with location queries.
  * name **required** `string`: The friendly name of this user, as shown on their profile.
  * pinned_tweet_id [TweetID](#tweetid)
  * profile_image_url `string`: The URL to the profile image for this user.
  * protected `boolean`: Indicates if this user has chosen to protect their Tweets (in other words, if this user's Tweets are private).
  * public_metrics `object`: A list of metrics for this user
    * followers_count **required** `integer`: Number of users who are following this user.
    * following_count **required** `integer`: Number of users this user is following.
    * listed_count **required** `integer`: The number of lists that include this user.
    * tweet_count **required** `integer`: The number of Tweets (including Retweets) posted by this user.
  * url `string`: The URL specified in the user's profile.
  * username **required** [UserName](#username)
  * verified `boolean`: Indicate if this user is a verified Twitter User.
  * withheld [UserWithheld](#userwithheld)

### UserID
* UserID `string`: Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

### UserLookupResponse
* UserLookupResponse `object`
  * data `array`
    * items [User](#user)
  * errors `array`
    * items [Problem](#problem)
  * includes [Expansions](#expansions)

### UserName
* UserName `string`: The Twitter handle (screen name) of this user.

### UserWithheld
* UserWithheld `object`: Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country).
  * country_codes **required** `array`: Provides a list of countries where this content is not available.
    * items [CountryCode](#countrycode)
  * scope `string` (values: user): Indicates that the content being withheld is a `user`.

### Video
* Video `object`
  * height [MediaHeight](#mediaheight)
  * media_key [MediaKey](#mediakey)
  * width [MediaWidth](#mediawidth)
  * duration_ms `integer`
  * non_public_metrics `object`: Nonpublic engagement metrics for the Media at the time of the request.
    * playback_0_count `integer`: Number of users who made it through 0% of the video.
    * playback_100_count `integer`: Number of users who made it through 100% of the video.
    * playback_25_count `integer`: Number of users who made it through 25% of the video.
    * playback_50_count `integer`: Number of users who made it through 50% of the video.
    * playback_75_count `integer`: Number of users who made it through 75% of the video.
  * organic_metrics `object`: Organic nonpublic engagement metrics for the Media at the time of the request.
    * playback_0_count `integer`: Number of users who made it through 0% of the video.
    * playback_100_count `integer`: Number of users who made it through 100% of the video.
    * playback_25_count `integer`: Number of users who made it through 25% of the video.
    * playback_50_count `integer`: Number of users who made it through 50% of the video.
    * playback_75_count `integer`: Number of users who made it through 75% of the video.
    * view_count `integer`: Number of times this video has been viewed.
  * preview_image_url `string`
  * promoted_metrics `object`: Promoted nonpublic engagement metrics for the Media at the time of the request.
    * playback_0_count `integer`: Number of users who made it through 0% of the video.
    * playback_100_count `integer`: Number of users who made it through 100% of the video.
    * playback_25_count `integer`: Number of users who made it through 25% of the video.
    * playback_50_count `integer`: Number of users who made it through 50% of the video.
    * playback_75_count `integer`: Number of users who made it through 75% of the video.
    * view_count `integer`: Number of times this video has been viewed.
  * public_metrics `object`: Engagement metrics for the Media at the time of the request.
    * view_count `integer`: Number of times this video has been viewed.
  * type `string` (values: video)


