# @datafire/pinboard

Client library for Pinboard

## Installation and Usage
```bash
npm install --save datafire @datafire/pinboard
```

```js
let datafire = require('datafire');
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

#### Parameters
*This action has no parameters*

### posts.add.get
Add a new bookmark.


```js
pinboard.posts.add.get({
  "url": "",
  "description": ""
}, context)
```

#### Parameters
* url (string) **required** - The URL of the item.
* description (string) **required** - Title of the item. This field is unfortunately named 'description' for backwards compatibility with the delicious API.
* extended (string) - Description of the item. Called 'extended' for backwards compatibility with delicious API.
* tags (string) - List of up to 100 tags.
* dt (string) - Creation time for this bookmark. Defaults to current time. Datestamps more than 10 minutes ahead of server time will be reset to current server time.
* replace (string) - Replace any existing bookmark with this URL. Default is yes. If set to no, will throw an error if bookmark exists.
* shared (string) - Make bookmark public. Default is "yes" unless user has enabled the "save all bookmarks as private" user setting, in which case default is "no".
* toread (string) - Marks the bookmark as unread. Default is "no".

### posts.delete.get
Delete a bookmark.


```js
pinboard.posts.delete.get({
  "url": ""
}, context)
```

#### Parameters
* url (string) **required** - The URL of the item.

### posts.get.get
Returns one or more posts on a single day matching the arguments. If no date or url is given, date of most recent bookmark will be used.


```js
pinboard.posts.get.get({}, context)
```

#### Parameters
* tag (string) - Filter by up to three tags.
* dt (string) - Return results bookmarked on this day.
* url (string) - Return bookmark for this URL.
* meta (string) - Include a change detection signature in a meta attribute (yes/no).
* format (string) - Default is xml.

### posts.dates.get
Returns a list of dates with the number of posts at each date.


```js
pinboard.posts.dates.get({}, context)
```

#### Parameters
* tag (string) - Filter by up to three tags.

### posts.recent.get
Returns a list of the user's most recent posts, filtered by tag.


```js
pinboard.posts.recent.get({}, context)
```

#### Parameters
* tag (string) - Filter by up to three tags.
* count (integer) - Number of results to return. Default is 15, max is 100.

### posts.all.get
Returns all bookmarks in the user's account.


```js
pinboard.posts.all.get({}, context)
```

#### Parameters
* tag (string) - Filter by up to three tags.
* start (integer) - Offset value (default is 0).
* results (integer) - Number of results to return. Default is all.
* fromdt (string) - Return only bookmarks created after this time.
* todt (string) - Return only bookmarks created before this time.
* meta (integer) - Include a change detection signature for each bookmark.
* format (string) - Default is xml.

### posts.suggest.get
Returns a list of popular tags and recommended tags for a given URL. Popular tags are tags used site-wide for the url; recommended tags are drawn from the user's own tags.


```js
pinboard.posts.suggest.get({
  "url": ""
}, context)
```

#### Parameters
* url (string) **required** - The URL of the item.

### tags.get.get
Returns a full list of the user's tags along with the number of times they were used.


```js
pinboard.tags.get.get(null, context)
```

#### Parameters
*This action has no parameters*

### tags.delete.get
Delete an existing tag.


```js
pinboard.tags.delete.get({
  "tag": ""
}, context)
```

#### Parameters
* tag (string) **required** - The tag to delete.

### tags.rename.get
Rename an tag, or fold it in to an existing tag.


```js
pinboard.tags.rename.get({
  "old": "",
  "new": ""
}, context)
```

#### Parameters
* old (string) **required** - The tag to rename. Note: match is not case sensitive.
* new (string) **required** - The new name. If empty, nothing will happen.

### user.secret.get
Get the secret RSS token (allows viewing user's private RSS feeds).


```js
pinboard.user.secret.get(null, context)
```

#### Parameters
*This action has no parameters*

