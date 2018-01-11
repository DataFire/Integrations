# @datafire/rummblelabs

Client library for Seldon

## Installation and Usage
```bash
npm install --save @datafire/rummblelabs
```
```js
let rummblelabs = require('@datafire/rummblelabs').create();

rummblelabs.getUsers({}).then(data => {
  console.log(data);
})
```

## Description

Seldon is an Open Predictive Platform that currently allows item recommendations and general predictive models to be deployed based on structured historical data.

## Actions

### postAction
post new action between a user and an item


```js
rummblelabs.postAction({
  "body": null
}, context)
```

#### Input
* input `object`
  * oauth_token `string`: oauth token
  * body **required** [Action](#action)

#### Output
*Output schema unknown*

### getItems
get items


```js
rummblelabs.getItems({}, context)
```

#### Input
* input `object`
  * oauth_token `string`: oauth token
  * full `boolean`: get all attributes for item
  * name `string`: keywords to match
  * dimension `integer`: limit items to a particular dimension
  * type `integer`: limit items to a particular type
  * limit `integer`: limit number of items returned

#### Output
*Output schema unknown*

### postItem
post new item


```js
rummblelabs.postItem({
  "body": null
}, context)
```

#### Input
* input `object`
  * oauth_token `string`: oauth token
  * body **required** [Item](#item)

#### Output
*Output schema unknown*

### putItem
update item


```js
rummblelabs.putItem({
  "body": null
}, context)
```

#### Input
* input `object`
  * oauth_token `string`: oauth token
  * body **required** [Item](#item)

#### Output
*Output schema unknown*

### getItemTypes
get item type


```js
rummblelabs.getItemTypes({}, context)
```

#### Input
* input `object`
  * oauth_token `string`: oauth token

#### Output
*Output schema unknown*

### getItem
get item


```js
rummblelabs.getItem({
  "itemId": ""
}, context)
```

#### Input
* input `object`
  * oauth_token `string`: oauth token
  * itemId **required** `string`: the item id to get
  * full `boolean`: get all attributes for item

#### Output
*Output schema unknown*

### addAction
Add a user interaction


```js
rummblelabs.addAction({
  "consumer_key": "",
  "user": "",
  "item": "",
  "type": "",
  "jsonpCallback": ""
}, context)
```

#### Input
* input `object`
  * consumer_key **required** `string`: consumer key
  * user **required** `string`: user id
  * item **required** `string`: item id
  * type **required** `string`: type
  * jsonpCallback **required** `string`: JSONP callback
  * timestamp `integer`: time

#### Output
*Output schema unknown*

### getRecommendation
Get recommendations for a user


```js
rummblelabs.getRecommendation({
  "consumer_key": "",
  "user": "",
  "jsonpCallback": ""
}, context)
```

#### Input
* input `object`
  * consumer_key **required** `string`: consumer key
  * user **required** `string`: user id
  * item `string`: currently viewed item id
  * limit `integer`: max number of recommendations to return
  * dimension `integer`: get recommendations for a particular item dimension (e.g., just sports articles)
  * attributes `string`: the fields to return
  * algorithms `string`: override default algorithms with specified algorithms
  * jsonpCallback **required** `string`: JSONP callback

#### Output
*Output schema unknown*

### getToken
get token


```js
rummblelabs.getToken({
  "consumer_key": "",
  "consumer_secret": ""
}, context)
```

#### Input
* input `object`
  * consumer_key **required** `string`: consumer key
  * consumer_secret **required** `string`: consumer secret

#### Output
*Output schema unknown*

### getUsers
get users


```js
rummblelabs.getUsers({}, context)
```

#### Input
* input `object`
  * oauth_token `string`: oauth token
  * full `boolean`: get all attributes for user
  * name `string`: keywords to match
  * limit `integer`: limit number of users returned

#### Output
*Output schema unknown*

### postUser
post new user


```js
rummblelabs.postUser({
  "body": null
}, context)
```

#### Input
* input `object`
  * oauth_token `string`: oauth token
  * body **required** [User](#user)

#### Output
*Output schema unknown*

### updateUser
update user


```js
rummblelabs.updateUser({
  "body": null
}, context)
```

#### Input
* input `object`
  * oauth_token `string`: oauth token
  * body **required** [User](#user)

#### Output
*Output schema unknown*

### getUser
get a user


```js
rummblelabs.getUser({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * oauth_token `string`: oauth token
  * userId **required** `string`: the user id to get
  * full `boolean`: get all attributes for user

#### Output
*Output schema unknown*

### getUserActions
get a user's recent actions


```js
rummblelabs.getUserActions({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * oauth_token `string`: oauth token
  * userId **required** `string`: the user id to get
  * full `boolean`: get all attributes for user
  * limit `integer`: limit number of actions returned

#### Output
*Output schema unknown*

### getUserRecommendations
get recommendations for a user


```js
rummblelabs.getUserRecommendations({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * oauth_token `string`: oauth token
  * userId **required** `string`: the user id to get
  * full `boolean`: get all attributes for user
  * limit `integer`: limit number of actions returned
  * dimension `integer`: get recommendations for a particular item dimension (e.g., just sports articles)
  * algorithms `string`: override default algorithms with specified algorithms

#### Output
*Output schema unknown*



## Definitions

### Action
* Action `object`
  * item **required** `string`
  * type **required** `integer`: action type
  * user **required** `string`
  * value `number`: action value (e.g. a rating)

### AttributesName
* AttributesName `object`
  * attrName1 `string`
  * attrName2 `string`

### Item
* Item `object`
  * attributesName [AttributesName](#attributesname)
  * id **required** `string`
  * type `integer`: type of item

### User
* User `object`
  * active `boolean`: whether user is active
  * attributesName [AttributesName](#attributesname)
  * id **required** `string`
  * username `string`: name of user


