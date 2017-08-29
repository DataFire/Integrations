# @datafire/nytimes_community

Client library for Community

## Installation and Usage
```bash
npm install --save datafire @datafire/nytimes_community
```

```js
let datafire = require('datafire');
let nytimes_community = require('@datafire/nytimes_community').create({
  api-key: "",
});

nytimes_community.user_content.user.json.get({}).then(data => {
  console.log(data);
})
```

## Description
Get access to comments from registered users on New York Times articles.  NOTE: This API is deprecated.

## Actions
### user_content.by_date.json.get
Comments by Date


```js
nytimes_community.user_content.by_date.json.get({}, context)
```

#### Parameters
* date (string)

### user_content.recent.json.get
Recent User Comments


```js
nytimes_community.user_content.recent.json.get(null, context)
```


### user_content.url.json.get
Comments by URL


```js
nytimes_community.user_content.url.json.get({}, context)
```

#### Parameters
* url (string)

### user_content.user.json.get
Comments by User


```js
nytimes_community.user_content.user.json.get({}, context)
```

#### Parameters
* userID (integer)

