# @datafire/amazonaws_personalize_runtime

Client library for Amazon Personalize Runtime

## Installation and Usage
```bash
npm install --save @datafire/amazonaws_personalize_runtime
```
```js
let amazonaws_personalize_runtime = require('@datafire/amazonaws_personalize_runtime').create({
  accessKeyId: "",
  secretAccessKey: "",
  region: ""
});

.then(data => {
  console.log(data);
});
```

## Description

<p/>

## Actions

### GetPersonalizedRanking



```js
amazonaws_personalize_runtime.GetPersonalizedRanking({
  "campaignArn": "",
  "inputList": [],
  "userId": ""
}, context)
```

#### Input
* input `object`
  * campaignArn **required** `string`: The Amazon Resource Name (ARN) of the campaign to use for generating the personalized ranking.
  * context `object`: The contextual metadata to use when getting recommendations. Contextual metadata includes any interaction information that might be relevant when getting a user's recommendations, such as the user's current location or device type.
  * filterArn `string`: The Amazon Resource Name (ARN) of a filter you created to include items or exclude items from recommendations for a given user. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering Recommendations</a>.
  * filterValues `object`: <p>The values to use when filtering recommendations. For each placeholder parameter in your filter expression, provide the parameter name (in matching case) as a key and the filter value(s) as the corresponding value. Separate multiple values for one parameter with a comma. </p> <p>For filter expressions that use an <code>INCLUDE</code> element to include items, you must provide values for all parameters that are defined in the expression. For filters with expressions that use an <code>EXCLUDE</code> element to exclude items, you can omit the <code>filter-values</code>.In this case, Amazon Personalize doesn't use that portion of the expression to filter recommendations.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering Recommendations</a>.</p>
  * inputList **required** `array`: A list of items (by <code>itemId</code>) to rank. If an item was not included in the training dataset, the item is appended to the end of the reranked list. The maximum is 500.
    * items [ItemID](#itemid)
  * userId **required** `string`: The user for which you want the campaign to provide a personalized ranking.

#### Output
* output [GetPersonalizedRankingResponse](#getpersonalizedrankingresponse)

### GetRecommendations



```js
amazonaws_personalize_runtime.GetRecommendations({
  "campaignArn": ""
}, context)
```

#### Input
* input `object`
  * campaignArn **required** `string`: The Amazon Resource Name (ARN) of the campaign to use for getting recommendations.
  * context `object`: The contextual metadata to use when getting recommendations. Contextual metadata includes any interaction information that might be relevant when getting a user's recommendations, such as the user's current location or device type.
  * filterArn `string`: <p>The ARN of the filter to apply to the returned recommendations. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering Recommendations</a>.</p> <p>When using this parameter, be sure the filter resource is <code>ACTIVE</code>.</p>
  * filterValues `object`: <p>The values to use when filtering recommendations. For each placeholder parameter in your filter expression, provide the parameter name (in matching case) as a key and the filter value(s) as the corresponding value. Separate multiple values for one parameter with a comma. </p> <p>For filter expressions that use an <code>INCLUDE</code> element to include items, you must provide values for all parameters that are defined in the expression. For filters with expressions that use an <code>EXCLUDE</code> element to exclude items, you can omit the <code>filter-values</code>.In this case, Amazon Personalize doesn't use that portion of the expression to filter recommendations.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/filter.html">Filtering Recommendations</a>.</p>
  * itemId `string`: <p>The item ID to provide recommendations for.</p> <p>Required for <code>RELATED_ITEMS</code> recipe type.</p>
  * numResults `integer`: The number of results to return. The default is 25. The maximum is 500.
  * userId `string`: <p>The user ID to provide recommendations for.</p> <p>Required for <code>USER_PERSONALIZATION</code> recipe type.</p>

#### Output
* output [GetRecommendationsResponse](#getrecommendationsresponse)



## Definitions

### Arn
* Arn `string`

### AttributeName
* AttributeName `string`

### AttributeValue
* AttributeValue `string`

### Context
* Context `object`

### FilterAttributeName
* FilterAttributeName `string`

### FilterAttributeValue
* FilterAttributeValue `string`

### FilterValues
* FilterValues `object`

### GetPersonalizedRankingRequest
* GetPersonalizedRankingRequest `object`
  * campaignArn **required**
  * context
  * filterArn
  * filterValues
  * inputList **required**
    * items [ItemID](#itemid)
  * userId **required**

### GetPersonalizedRankingResponse
* GetPersonalizedRankingResponse `object`
  * personalizedRanking
    * items [PredictedItem](#predicteditem)
  * recommendationId

### GetRecommendationsRequest
* GetRecommendationsRequest `object`
  * campaignArn **required**
  * context
  * filterArn
  * filterValues
  * itemId
  * numResults
  * userId

### GetRecommendationsResponse
* GetRecommendationsResponse `object`
  * itemList
    * items [PredictedItem](#predicteditem)
  * recommendationId

### InputList
* InputList `array`
  * items [ItemID](#itemid)

### InvalidInputException


### ItemID
* ItemID `string`

### ItemList
* ItemList `array`
  * items [PredictedItem](#predicteditem)

### NumResults
* NumResults `integer`

### PredictedItem
* PredictedItem `object`: <p>An object that identifies an item.</p> <p>The and APIs return a list of <code>PredictedItem</code>s.</p>
  * itemId
  * score

### RecommendationID
* RecommendationID `string`

### ResourceNotFoundException


### Score
* Score `number`

### UserID
* UserID `string`


