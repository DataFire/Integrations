# @datafire/thenounproject

Client library for The Noun Project

## Installation and Usage
```bash
npm install --save datafire @datafire/thenounproject
```

```js
let datafire = require('datafire');
let thenounproject = require('@datafire/thenounproject').actions;
let context = new datafire.Context();

thenounproject.getRecentIcons({}, context).then(data => {
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

#### Parameters
* id (integer) **required** - Collection id

### getCollectionIconsById
Returns a list of icons associated with a collection


```js
thenounproject.getCollectionIconsById({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Collection id
* limit (integer) - Maximum number of results
* offset (integer) - Number of results to displace or skip over
* page (integer) - Number of results of limit length to displace or skip over

### getCollectionBySlug
Returns a single collection


```js
thenounproject.getCollectionBySlug({
  "slug": ""
}, context)
```

#### Parameters
* slug (string) **required** - Collection slug

### getCollectionIconsBySlug
Returns a list of icons associated with a collection


```js
thenounproject.getCollectionIconsBySlug({
  "slug": ""
}, context)
```

#### Parameters
* slug (string) **required** - Collection slug
* limit (integer) - Maximum number of results
* offset (integer) - Number of results to displace or skip over
* page (integer) - Number of results of limit length to displace or skip over

### getAllCollections
Return's a list of all collections


```js
thenounproject.getAllCollections({}, context)
```


### getIconById
Returns a single icon


```js
thenounproject.getIconById({
  "id": 0
}, context)
```

#### Parameters
* id (integer) **required** - Icon id

### getIconByTerm
Returns a single icon


```js
thenounproject.getIconByTerm({
  "term": ""
}, context)
```

#### Parameters
* term (string) **required** - Icon term

### getRecentIcons
Returns list of most recently uploaded icons


```js
thenounproject.getRecentIcons({}, context)
```


### getIconsByTerm
Returns a list of icons


```js
thenounproject.getIconsByTerm({
  "term": ""
}, context)
```

#### Parameters
* term (string) **required** - Icon term
* limit_to_public_domain (integer) - Limit results to public domain icons only
* limit (integer) - Maximum number of results
* offset (integer) - Number of results to displace or skip over
* page (integer) - Number of results of limit length to displace or skip over

### getApiQuotaStatus
Returns current oauth usage and limits


```js
thenounproject.getApiQuotaStatus(null, context)
```


### getUserCollections
Returns a list of collections associated with a user


```js
thenounproject.getUserCollections({
  "user_id": 0
}, context)
```

#### Parameters
* user_id (integer) **required** - User id

### getUserCollection
Returns a single collection associated with a user


```js
thenounproject.getUserCollection({
  "user_id": 0,
  "slug": ""
}, context)
```

#### Parameters
* user_id (integer) **required** - User id
* slug (string) **required** - Collection slug

### getUserUploadsWithUser
Returns a list of uploads associated with a user


```js
thenounproject.getUserUploadsWithUser({
  "username": ""
}, context)
```

#### Parameters
* username (string) **required** - Username
* limit (integer) - Maximum number of results
* offset (integer) - Number of results to displace or skip over
* page (integer) - Number of results of limit length to displace or skip over

