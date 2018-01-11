# @datafire/thenounproject

Client library for The Noun Project

## Installation and Usage
```bash
npm install --save @datafire/thenounproject
```
```js
let thenounproject = require('@datafire/thenounproject').create();

thenounproject.getRecentIcons({}).then(data => {
  console.log(data);
})
```

## Description

Icons for Everything

## Actions

### getCollectionById
Returns a single collection


```js
thenounproject.getCollectionById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Collection id

#### Output
*Output schema unknown*

### getCollectionIconsById
Returns a list of icons associated with a collection


```js
thenounproject.getCollectionIconsById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Collection id
  * limit `integer`: Maximum number of results
  * offset `integer`: Number of results to displace or skip over
  * page `integer`: Number of results of limit length to displace or skip over

#### Output
*Output schema unknown*

### getCollectionBySlug
Returns a single collection


```js
thenounproject.getCollectionBySlug({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`: Collection slug

#### Output
*Output schema unknown*

### getCollectionIconsBySlug
Returns a list of icons associated with a collection


```js
thenounproject.getCollectionIconsBySlug({
  "slug": ""
}, context)
```

#### Input
* input `object`
  * slug **required** `string`: Collection slug
  * limit `integer`: Maximum number of results
  * offset `integer`: Number of results to displace or skip over
  * page `integer`: Number of results of limit length to displace or skip over

#### Output
*Output schema unknown*

### getAllCollections
Return's a list of all collections


```js
thenounproject.getAllCollections({}, context)
```

#### Input
* input `object`
  * limit `integer`: Maximum number of results
  * offset `integer`: Number of results to displace or skip over
  * page `integer`: Number of results of limit length to displace or skip over

#### Output
*Output schema unknown*

### getIconById
Returns a single icon


```js
thenounproject.getIconById({
  "id": 0
}, context)
```

#### Input
* input `object`
  * id **required** `integer`: Icon id

#### Output
*Output schema unknown*

### getIconByTerm
Returns a single icon


```js
thenounproject.getIconByTerm({
  "term": ""
}, context)
```

#### Input
* input `object`
  * term **required** `string`: Icon term

#### Output
*Output schema unknown*

### getRecentIcons
Returns list of most recently uploaded icons


```js
thenounproject.getRecentIcons({}, context)
```

#### Input
* input `object`
  * limit `integer`: Maximum number of results
  * offset `integer`: Number of results to displace or skip over
  * page `integer`: Number of results of limit length to displace or skip over

#### Output
*Output schema unknown*

### getIconsByTerm
Returns a list of icons


```js
thenounproject.getIconsByTerm({
  "term": ""
}, context)
```

#### Input
* input `object`
  * term **required** `string`: Icon term
  * limit_to_public_domain `integer`: Limit results to public domain icons only
  * limit `integer`: Maximum number of results
  * offset `integer`: Number of results to displace or skip over
  * page `integer`: Number of results of limit length to displace or skip over

#### Output
*Output schema unknown*

### getApiQuotaStatus
Returns current oauth usage and limits


```js
thenounproject.getApiQuotaStatus(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### getUserCollections
Returns a list of collections associated with a user


```js
thenounproject.getUserCollections({
  "user_id": 0
}, context)
```

#### Input
* input `object`
  * user_id **required** `integer`: User id

#### Output
*Output schema unknown*

### getUserCollection
Returns a single collection associated with a user


```js
thenounproject.getUserCollection({
  "user_id": 0,
  "slug": ""
}, context)
```

#### Input
* input `object`
  * user_id **required** `integer`: User id
  * slug **required** `string`: Collection slug

#### Output
*Output schema unknown*

### getUserUploadsWithUser
Returns a list of uploads associated with a user


```js
thenounproject.getUserUploadsWithUser({
  "username": ""
}, context)
```

#### Input
* input `object`
  * username **required** `string`: Username
  * limit `integer`: Maximum number of results
  * offset `integer`: Number of results to displace or skip over
  * page `integer`: Number of results of limit length to displace or skip over

#### Output
*Output schema unknown*



## Definitions

** No definitions **
