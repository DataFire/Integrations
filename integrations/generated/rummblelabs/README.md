# @datafire/rummblelabs

Client library for Seldon

## Installation and Usage
```bash
npm install --save datafire @datafire/rummblelabs
```

```js
let datafire = require('datafire');
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

#### Parameters
* oauth_token (string) - oauth token
* body (undefined) **required**

### getItems
get items


```js
rummblelabs.getItems({}, context)
```

#### Parameters
* oauth_token (string) - oauth token
* full (boolean) - get all attributes for item
* name (string) - keywords to match
* dimension (integer) - limit items to a particular dimension
* type (integer) - limit items to a particular type
* limit (integer) - limit number of items returned

### postItem
post new item


```js
rummblelabs.postItem({
  "body": null
}, context)
```

#### Parameters
* oauth_token (string) - oauth token
* body (undefined) **required**

### putItem
update item


```js
rummblelabs.putItem({
  "body": null
}, context)
```

#### Parameters
* oauth_token (string) - oauth token
* body (undefined) **required**

### getItemTypes
get item type


```js
rummblelabs.getItemTypes({}, context)
```

#### Parameters
* oauth_token (string) - oauth token

### getItem
get item


```js
rummblelabs.getItem({
  "itemId": ""
}, context)
```

#### Parameters
* oauth_token (string) - oauth token
* itemId (string) **required** - the item id to get
* full (boolean) - get all attributes for item

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

#### Parameters
* consumer_key (string) **required** - consumer key
* user (string) **required** - user id
* item (string) **required** - item id
* type (string) **required** - type
* jsonpCallback (string) **required** - JSONP callback
* timestamp (integer) - time

### getRecommendation
Get recommendations for a user


```js
rummblelabs.getRecommendation({
  "consumer_key": "",
  "user": "",
  "jsonpCallback": ""
}, context)
```

#### Parameters
* consumer_key (string) **required** - consumer key
* user (string) **required** - user id
* item (string) - currently viewed item id
* limit (integer) - max number of recommendations to return
* dimension (integer) - get recommendations for a particular item dimension (e.g., just sports articles)
* attributes (string) - the fields to return
* algorithms (string) - override default algorithms with specified algorithms
* jsonpCallback (string) **required** - JSONP callback

### getToken
get token


```js
rummblelabs.getToken({
  "consumer_key": "",
  "consumer_secret": ""
}, context)
```

#### Parameters
* consumer_key (string) **required** - consumer key
* consumer_secret (string) **required** - consumer secret

### getUsers
get users


```js
rummblelabs.getUsers({}, context)
```

#### Parameters
* oauth_token (string) - oauth token
* full (boolean) - get all attributes for user
* name (string) - keywords to match
* limit (integer) - limit number of users returned

### postUser
post new user


```js
rummblelabs.postUser({
  "body": null
}, context)
```

#### Parameters
* oauth_token (string) - oauth token
* body (undefined) **required**

### updateUser
update user


```js
rummblelabs.updateUser({
  "body": null
}, context)
```

#### Parameters
* oauth_token (string) - oauth token
* body (undefined) **required**

### getUser
get a user


```js
rummblelabs.getUser({
  "userId": ""
}, context)
```

#### Parameters
* oauth_token (string) - oauth token
* userId (string) **required** - the user id to get
* full (boolean) - get all attributes for user

### getUserActions
get a user's recent actions


```js
rummblelabs.getUserActions({
  "userId": ""
}, context)
```

#### Parameters
* oauth_token (string) - oauth token
* userId (string) **required** - the user id to get
* full (boolean) - get all attributes for user
* limit (integer) - limit number of actions returned

### getUserRecommendations
get recommendations for a user


```js
rummblelabs.getUserRecommendations({
  "userId": ""
}, context)
```

#### Parameters
* oauth_token (string) - oauth token
* userId (string) **required** - the user id to get
* full (boolean) - get all attributes for user
* limit (integer) - limit number of actions returned
* dimension (integer) - get recommendations for a particular item dimension (e.g., just sports articles)
* algorithms (string) - override default algorithms with specified algorithms

