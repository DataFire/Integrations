# @datafire/pinboard

Client library for Pinboard

## Installation and Usage
```bash
npm install --save @datafire/pinboard
```
```js
let pinboard = require('@datafire/pinboard').create();

pinboard.posts.all.get({}).then(data => {
  console.log(data);
})
```

## Description

Store, manage and share bookmarks on Pinboard

## Actions

### posts.update.get
Returns the most recent time a bookmark was added, updated or deleted. Use this before calling posts/all to see if the data has changed since the last fetch.


```js
pinboard.posts.update.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### posts.add.get
Add a new bookmark.


```js
pinboard.posts.add.get({
  "url": "",
  "description": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: The URL of the item.
  * description **required** `string`: Title of the item. This field is unfortunately named 'description' for backwards compatibility with the delicious API.
  * extended `string`: Description of the item. Called 'extended' for backwards compatibility with delicious API.
  * tags `string`: List of up to 100 tags.
  * dt `string`: Creation time for this bookmark. Defaults to current time. Datestamps more than 10 minutes ahead of server time will be reset to current server time.
  * replace `string`: Replace any existing bookmark with this URL. Default is yes. If set to no, will throw an error if bookmark exists.
  * shared `string`: Make bookmark public. Default is "yes" unless user has enabled the "save all bookmarks as private" user setting, in which case default is "no".
  * toread `string`: Marks the bookmark as unread. Default is "no".

#### Output
*Output schema unknown*

### posts.delete.get
Delete a bookmark.


```js
pinboard.posts.delete.get({
  "url": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: The URL of the item.

#### Output
*Output schema unknown*

### posts.get.get
Returns one or more posts on a single day matching the arguments. If no date or url is given, date of most recent bookmark will be used.


```js
pinboard.posts.get.get({}, context)
```

#### Input
* input `object`
  * tag `string`: Filter by up to three tags.
  * dt `string`: Return results bookmarked on this day.
  * url `string`: Return bookmark for this URL.
  * meta `string`: Include a change detection signature in a meta attribute (yes/no).
  * format `string`: Default is xml.

#### Output
*Output schema unknown*

### posts.dates.get
Returns a list of dates with the number of posts at each date.


```js
pinboard.posts.dates.get({}, context)
```

#### Input
* input `object`
  * tag `string`: Filter by up to three tags.

#### Output
*Output schema unknown*

### posts.recent.get
Returns a list of the user's most recent posts, filtered by tag.


```js
pinboard.posts.recent.get({}, context)
```

#### Input
* input `object`
  * tag `string`: Filter by up to three tags.
  * count `integer`: Number of results to return. Default is 15, max is 100.

#### Output
*Output schema unknown*

### posts.all.get
Returns all bookmarks in the user's account.


```js
pinboard.posts.all.get({}, context)
```

#### Input
* input `object`
  * tag `string`: Filter by up to three tags.
  * start `integer`: Offset value (default is 0).
  * results `integer`: Number of results to return. Default is all.
  * fromdt `string`: Return only bookmarks created after this time.
  * todt `string`: Return only bookmarks created before this time.
  * meta `integer`: Include a change detection signature for each bookmark.
  * format `string`: Default is xml.

#### Output
*Output schema unknown*

### posts.suggest.get
Returns a list of popular tags and recommended tags for a given URL. Popular tags are tags used site-wide for the url; recommended tags are drawn from the user's own tags.


```js
pinboard.posts.suggest.get({
  "url": ""
}, context)
```

#### Input
* input `object`
  * url **required** `string`: The URL of the item.

#### Output
*Output schema unknown*

### tags.get.get
Returns a full list of the user's tags along with the number of times they were used.


```js
pinboard.tags.get.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### tags.delete.get
Delete an existing tag.


```js
pinboard.tags.delete.get({
  "tag": ""
}, context)
```

#### Input
* input `object`
  * tag **required** `string`: The tag to delete.

#### Output
*Output schema unknown*

### tags.rename.get
Rename an tag, or fold it in to an existing tag.


```js
pinboard.tags.rename.get({
  "old": "",
  "new": ""
}, context)
```

#### Input
* input `object`
  * old **required** `string`: The tag to rename. Note: match is not case sensitive.
  * new **required** `string`: The new name. If empty, nothing will happen.

#### Output
*Output schema unknown*

### user.secret.get
Get the secret RSS token (allows viewing user's private RSS feeds).


```js
pinboard.user.secret.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*



## Definitions

**This integration has no definitions**
