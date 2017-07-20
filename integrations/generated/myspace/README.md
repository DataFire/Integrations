# @datafire/myspace

Client library for MySpace

## Installation and Usage
```bash
npm install --save datafire @datafire/myspace
```

```js
let datafire = require('datafire');
let myspace = require('@datafire/myspace').actions;
let context = new datafire.Context();

myspace.1.0.activities._supportedFields.get({}, context).then(data => {
  console.log(data);
})
```

## Description
Create apps and games within the MySpace platform. Monetize through advertising and virtual goods.

## Actions
### 1.0.statusmoodcomments.personId._self.statusId.post
Posts a comment to a status.


```js
myspace.1.0.statusmoodcomments.personId._self.statusId.post({
  "Content-Type": "",
  "personId": "",
  "statusId": "",
  "selector": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Specifies Content Type.
* personId (string) **required** - The person's identifier.
* statusId (string) **required** - Specifies which status or mood to post a comment for.
* selector (string) **required** - Indicates which set of individuals to query for activities. @friends and @all currently can be used interchangeably.
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported.
* filterBy (string) - See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results
* filterOp (string) - See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results
* filterValue (string) - See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.

### 1.0.statusmood.personId.selector.friendId.history.get
Returns History Friend.


```js
myspace.1.0.statusmood.personId.selector.friendId.history.get({
  "personId": "",
  "friendId": "",
  "selector": ""
}, context)
```

#### Parameters
* personId (string) **required** - The person's identifier.
* friendId (string) **required** - Is the same as {personId}, but for the person's friend.
* selector (string) **required** - Indicates which set of individuals to query for activities. @friends and @all currently can be used interchangeably.
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported.
* filterBy (string) - See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results
* filterOp (string) - See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results
* filterValue (string) - See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.

### 1.0.statusmood.personId.selector.friendId.get
Returns a status for Friend.


```js
myspace.1.0.statusmood.personId.selector.friendId.get({
  "personId": "",
  "friendId": "",
  "selector": ""
}, context)
```

#### Parameters
* personId (string) **required** - The person's identifier.
* friendId (string) **required** - Is the same as {personId}, but for the person's friend.
* selector (string) **required** - Indicates which set of individuals to query for activities. @friends and @all currently can be used interchangeably.
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported.
* filterBy (string) - See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results
* filterOp (string) - See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results
* filterValue (string) - See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.

### 1.0.statusmood.personId.selector.history.get
Returns History User.


```js
myspace.1.0.statusmood.personId.selector.history.get({
  "personId": "",
  "selector": ""
}, context)
```

#### Parameters
* personId (string) **required** - The person's identifier.
* selector (string) **required** - Indicates which set of individuals to query for activities. @friends and @all currently can be used interchangeably.
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported.
* filterBy (string) - See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results
* filterOp (string) - See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results
* filterValue (string) - See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.

### 1.0.statusmood.personId.selector.put
Updates a status for User.


```js
myspace.1.0.statusmood.personId.selector.put({
  "Content-Type": "",
  "personId": "",
  "selector": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Specifies Content Type.
* personId (string) **required** - The person's identifier.
* selector (string) **required** - Indicates which set of individuals to query for activities. @friends and @all currently can be used interchangeably.
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported.
* filterBy (string) - See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results
* filterOp (string) - See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results
* filterValue (string) - See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.

### 1.0.statusmood.personId.selector.get
Returns a status for User.


```js
myspace.1.0.statusmood.personId.selector.get({
  "personId": "",
  "selector": ""
}, context)
```

#### Parameters
* personId (string) **required** - The person's identifier.
* selector (string) **required** - Indicates which set of individuals to query for activities. @friends and @all currently can be used interchangeably.
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported.
* filterBy (string) - See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results
* filterOp (string) - See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results
* filterValue (string) - See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.

### 1.0.statusmood.personId._supportedMood.moodId.put
Updates a mood.


```js
myspace.1.0.statusmood.personId._supportedMood.moodId.put({
  "Content-Type": "",
  "personId": "",
  "moodId": 0
}, context)
```

#### Parameters
* Content-Type (string) **required** - Specifies Content Type.
* personId (string) **required** - The person's identifier.
* moodId (integer) **required** - The integer value of the specific mood that you want to retrieve data for.
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported.
* filterBy (string) - See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results
* filterOp (string) - See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results
* filterValue (string) - See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.

### 1.0.statusmood.personId._supportedMood.moodId.get
Retrieves a mood.


```js
myspace.1.0.statusmood.personId._supportedMood.moodId.get({
  "personId": "",
  "moodId": 0
}, context)
```

#### Parameters
* personId (string) **required** - The person's identifier.
* moodId (integer) **required** - The integer value of the specific mood that you want to retrieve data for.
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported.
* filterBy (string) - See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results
* filterOp (string) - See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results
* filterValue (string) - See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.

### 1.0.statusmood.personId._supportedMood.post
Adds a mood.


```js
myspace.1.0.statusmood.personId._supportedMood.post({
  "Content-Type": "",
  "personId": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Specifies Content Type.
* personId (string) **required** - The person's identifier.
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported.
* filterBy (string) - See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results
* filterOp (string) - See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results
* filterValue (string) - See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.

### 1.0.statusmood.personId._supportedMood.get
Retrieves all supported moods.


```js
myspace.1.0.statusmood.personId._supportedMood.get({
  "personId": ""
}, context)
```

#### Parameters
* personId (string) **required** - The person's identifier.
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported.
* filterBy (string) - See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results
* filterOp (string) - See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results
* filterValue (string) - See: http://wiki.developer.myspace.com/index.php?title=Status_and_Mood_API#Filtering_Results
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.

### 1.0.mediaitemcomments.personId._self.albumId.mediaItemId.get
Retrieves item comments from a specified album.


```js
myspace.1.0.mediaitemcomments.personId._self.albumId.mediaItemId.get({
  "personId": "",
  "albumId": "",
  "mediaItemId": ""
}, context)
```

#### Parameters
* personId (string) **required** - The person's identifier.
* albumId (string) **required** - Indicates which single album from the group identified by {selector} should be returned.
* mediaItemId (string) **required** - Indicates which single media item from the album identified by {albumId} should be returned.
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported. Bold fields are always returned.
* msPrivacyLevel (string) - MySpace specific field. May be one of the following values:
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.

### 1.0.mediaItems.personId._videos._supportedcategories.categoryId.get
Retrieves videos for Category.


```js
myspace.1.0.mediaItems.personId._videos._supportedcategories.categoryId.get({
  "personId": "",
  "categoryId": ""
}, context)
```

#### Parameters
* personId (string) **required** - The person's identifier.
* categoryId (string) **required** - Indicates the video category about which you want to retrieve data.
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported. Bold fields are always returned.
* msPrivacyLevel (string) - MySpace specific field. May be one of the following values:
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.

### 1.0.mediaItems.personId._videos._supportedcategories.get
Retrieves supported categories.


```js
myspace.1.0.mediaItems.personId._videos._supportedcategories.get({
  "personId": ""
}, context)
```

#### Parameters
* personId (string) **required** - The person's identifier.
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported. Bold fields are always returned.
* msPrivacyLevel (string) - MySpace specific field. May be one of the following values:
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.

### 1.0.mediaItems.personId._self._videos.mediaItemId.put
Updates an video.


```js
myspace.1.0.mediaItems.personId._self._videos.mediaItemId.put({
  "Content-Type": "",
  "personId": "",
  "mediaItemId": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Specifies Content Type.
* personId (string) **required** - The person's identifier.
* mediaItemId (string) **required** - Indicates which single media item should be returned.
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported. Bold fields are always returned.
* msPrivacyLevel (string) - MySpace specific field. May be one of the following values:
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.

### 1.0.mediaItems.personId._self._videos.mediaItemId.get
Retrieves a video.


```js
myspace.1.0.mediaItems.personId._self._videos.mediaItemId.get({
  "personId": "",
  "mediaItemId": ""
}, context)
```

#### Parameters
* personId (string) **required** - The person's identifier.
* mediaItemId (string) **required** - Indicates which single media item should be returned.
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported. Bold fields are always returned.
* msPrivacyLevel (string) - MySpace specific field. May be one of the following values:
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.

### 1.0.mediaItems.personId._self._videos.post
Adds videos from a specified album.


```js
myspace.1.0.mediaItems.personId._self._videos.post({
  "Content-Type": "",
  "personId": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Specifies Content Type.
* personId (string) **required** - The person's identifier.
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported. Bold fields are always returned.
* msPrivacyLevel (string) - MySpace specific field. May be one of the following values:
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.

### 1.0.mediaItems.personId._self._videos.get
Retrieves all the videos.


```js
myspace.1.0.mediaItems.personId._self._videos.get({
  "personId": ""
}, context)
```

#### Parameters
* personId (string) **required** - The person's identifier.
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported. Bold fields are always returned.
* msPrivacyLevel (string) - MySpace specific field. May be one of the following values:
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.

### 1.0.mediaItems.personId._self.albumId.mediaItemId.put
Updates an item from a specified album.


```js
myspace.1.0.mediaItems.personId._self.albumId.mediaItemId.put({
  "Content-Type": "",
  "personId": "",
  "albumId": "",
  "mediaItemId": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Specifies Content Type.
* personId (string) **required** - The person's identifier.
* albumId (string) **required** - Indicates which single album from the group identified by {selector} should be returned.
* mediaItemId (string) **required** - Indicates which single media item from the album identified by {albumId} should be returned.
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported. Bold fields are always returned.
* msPrivacyLevel (string) - MySpace specific field. May be one of the following values:
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.

### 1.0.mediaItems.personId._self.albumId.mediaItemId.get
Retrieves an item from a specified album.


```js
myspace.1.0.mediaItems.personId._self.albumId.mediaItemId.get({
  "personId": "",
  "albumId": "",
  "mediaItemId": ""
}, context)
```

#### Parameters
* personId (string) **required** - The person's identifier.
* albumId (string) **required** - Indicates which single album from the group identified by {selector} should be returned.
* mediaItemId (string) **required** - Indicates which single media item from the album identified by {albumId} should be returned.
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported. Bold fields are always returned.
* msPrivacyLevel (string) - MySpace specific field. May be one of the following values:
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.

### 1.0.mediaItems.personId._self.albumId.post
Adds items from a specified album.


```js
myspace.1.0.mediaItems.personId._self.albumId.post({
  "Content-Type": "",
  "personId": "",
  "albumId": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Specifies Content Type.
* personId (string) **required** - The person's identifier.
* albumId (string) **required** - Indicates which single album from the group identified by {selector} should be returned.
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported. Bold fields are always returned.
* msPrivacyLevel (string) - MySpace specific field. May be one of the following values:
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.

### 1.0.mediaItems.personId._self.albumId.get
Retrieves items from a specified album.


```js
myspace.1.0.mediaItems.personId._self.albumId.get({
  "personId": "",
  "albumId": ""
}, context)
```

#### Parameters
* personId (string) **required** - The person's identifier.
* albumId (string) **required** - Indicates which single album from the group identified by {selector} should be returned.
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported. Bold fields are always returned.
* msPrivacyLevel (string) - MySpace specific field. May be one of the following values:
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.

### 1.0.mediaItems._supportedFields.get
Retrieves all supported fields.


```js
myspace.1.0.mediaItems._supportedFields.get({}, context)
```

#### Parameters
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported. Bold fields are always returned.
* msPrivacyLevel (string) - MySpace specific field. May be one of the following values:
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.

### stream.subscription._all.delete
Deletes all subscriptions.


```js
myspace.stream.subscription._all.delete({}, context)
```

#### Parameters
* format (string) - Determines the format of the response.

### stream.subscription._all.get
Retrieves all subscriptions.


```js
myspace.stream.subscription._all.get({}, context)
```

#### Parameters
* format (string) - Determines the format of the response.

### stream.subscription.subscriptionId.delete
Deletes a subscription.


```js
myspace.stream.subscription.subscriptionId.delete({
  "subscriptionId": 0
}, context)
```

#### Parameters
* subscriptionId (integer) **required** - The subscription's identifier.
* format (string) - Determines the format of the response.

### stream.subscription.subscriptionId.put
Updates a subscription.


```js
myspace.stream.subscription.subscriptionId.put({
  "Content-Type": "",
  "subscriptionId": 0
}, context)
```

#### Parameters
* Content-Type (string) **required** - Specifies Content Type.
* subscriptionId (integer) **required** - The subscription's identifier.
* format (string) - Determines the format of the response.

### stream.subscription.subscriptionId.get
Retrieves a subscription.


```js
myspace.stream.subscription.subscriptionId.get({
  "subscriptionId": 0
}, context)
```

#### Parameters
* subscriptionId (integer) **required** - The subscription's identifier.
* format (string) - Determines the format of the response.

### stream.subscription.post
Creates a subscription.


```js
myspace.stream.subscription.post({
  "Content-Type": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Specifies Content Type.
* format (string) - Determines the format of the response.

### opensearch.videos.get
Returns search results for videos.


```js
myspace.opensearch.videos.get({
  "searchTerms": ""
}, context)
```

#### Parameters
* searchTerms (string) **required** - Free form search terms or query words
* count (integer) - Number of items to return.
* culture (string) - The culture context of the search. Default is en-us.
* format (string) - Determines the format of the response.
* startPage (integer) - Which page to start at for the results.
* tag (integer) - Determine if searching on tags, as opposed to contents. To enable tag search, set to 1.
* videoMode (integer) - Search for specific video types. Two allowed values are videoMode=1 (music videos) or videoMode=2 (official).

### opensearch.images.get
Returns search results for images.


```js
myspace.opensearch.images.get({
  "searchTerms": ""
}, context)
```

#### Parameters
* searchTerms (string) **required** - Free form search terms or query words
* count (integer) - Number of items to return.
* culture (string) - The culture context of the search. Default is en-us.
* format (string) - Determines the format of the response.
* sortBy (string) - How to sort the images. Default is all.
* sortOrder (string) - Indicates whether to sort ascending or descending. Default is descending.
* startPage (integer) - Which page to start at for the results.

### opensearch.people.get
Returns search results for people.


```js
myspace.opensearch.people.get({
  "searchTerms": ""
}, context)
```

#### Parameters
* searchTerms (string) **required** - Free form search terms or query words
* count (integer) - Number of items to return.
* countryCode (string) - Country code to search with. Can be used instead of culture.
* culture (string) - The culture context of the search. Default is en-us.
* distance (integer) - Distance away from location to return results. Default is in miles, but depending on culture specified, it can be in kilometers.
* format (string) - Determines the format of the response.
* gender (string) - The gender to filter on. Default is both.
* hasPhoto (string) - Filter for only those who have a photo. Default those with or without a photo.
* latitude (integer) - Geographic latitude. Required to be combined with longitude and not combined with location field.
* location (string) - The location field, such as city, state and/or country.
* longitude (integer) - Geographic longitude. Required to be combined with latitude and not combined with location field.
* minAge (integer) - Minimum age for returned people. Same functionality as the MySpace website search.
* maxAge (integer) - Maximum age for returned people. Same functionality as the MySpace website search.
* searchBy (string) - Which field the search should go through. Default is all of the fields. (yomi is only available to ja-jp culture).
* startPage (integer) - Which page to start at for the results.

### 1.0.profilecomments.personId._self.get
Retrieves profile comments.


```js
myspace.1.0.profilecomments.personId._self.get({
  "personId": ""
}, context)
```

#### Parameters
* personId (string) **required** - The person's identifier.

### 1.0.people.personId.selector.friendId.get
Retrieves friend data.


```js
myspace.1.0.people.personId.selector.friendId.get({
  "personId": "",
  "selector": "",
  "friendId": ""
}, context)
```

#### Parameters
* personId (string) **required** - The person's identifier.
* selector (string) **required** - Indicates which set of individuals to query for activities. @friends and @all currently can be used interchangeably.
* friendId (string) **required** - Is the same as {personId}, but for the person's friend.
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported. Bold are default values.
* filterBy (string) - @friends, hasapp, @topfriends, @toponlinefriends,	networkpresence.
* filterOp (string) - contains, equals
* filterValue (string) - <userId>, online, true|false 
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.

### 1.0.people.personId.selector.get
Retrieves user data.


```js
myspace.1.0.people.personId.selector.get({
  "personId": "",
  "selector": ""
}, context)
```

#### Parameters
* personId (string) **required** - The person's identifier.
* selector (string) **required** - Indicates which set of individuals to query for activities. @friends and @all currently can be used interchangeably.
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported. Bold are default values.
* filterBy (string) - @friends, hasapp, @topfriends, @toponlinefriends,	networkpresence.
* filterOp (string) - contains, equals
* filterValue (string) - <userId>, online, true|false 
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.

### 1.0.people._supportedFields.get
Retrieves all supported fields.


```js
myspace.1.0.people._supportedFields.get({}, context)
```

#### Parameters
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported. Bold are default values.
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.

### 1.0.appdata.personId.selector.appId.delete
Deletes a specified user's application data.


```js
myspace.1.0.appdata.personId.selector.appId.delete({
  "personId": "",
  "selector": "",
  "appId": ""
}, context)
```

#### Parameters
* personId (string) **required** - The person's identifier.
* selector (string) **required** - Indicates which set of individuals to query for activities. @friends and @all currently can be used interchangeably.
* appId (string) **required** - The application's ID associated with the OAuth ConsumerKey/ConsumerSecret pair.
* fields (string) - The fields correspond to keys in the application data. One uses fields to only retrieve specific keys. If the request omits fields, all application data per user will be returned.
* format (string) - Determines the format of the response.

### 1.0.appdata.personId.selector.appId.post
Adds or updates a specified user's application data.


```js
myspace.1.0.appdata.personId.selector.appId.post({
  "Content-Type": "",
  "personId": "",
  "selector": "",
  "appId": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Specifies Content Type.
* personId (string) **required** - The person's identifier.
* selector (string) **required** - Indicates which set of individuals to query for activities. @friends and @all currently can be used interchangeably.
* appId (string) **required** - The application's ID associated with the OAuth ConsumerKey/ConsumerSecret pair.
* fields (string) - The fields correspond to keys in the application data. One uses fields to only retrieve specific keys. If the request omits fields, all application data per user will be returned.
* format (string) - Determines the format of the response.

### 1.0.appdata.personId.selector.appId.get
Retrieves all application data for a specified user.


```js
myspace.1.0.appdata.personId.selector.appId.get({
  "personId": "",
  "selector": "",
  "appId": ""
}, context)
```

#### Parameters
* personId (string) **required** - The person's identifier.
* selector (string) **required** - Indicates which set of individuals to query for activities. @friends and @all currently can be used interchangeably.
* appId (string) **required** - The application's ID associated with the OAuth ConsumerKey/ConsumerSecret pair.
* fields (string) - The fields correspond to keys in the application data. One uses fields to only retrieve specific keys. If the request omits fields, all application data per user will be returned.
* format (string) - Determines the format of the response.

### 1.0.notifications.personId._self.post
Sends notification.


```js
myspace.1.0.notifications.personId._self.post({
  "Content-Type": "",
  "personId": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Specifies Content Type.
* personId (string) **required** - The person's identifier.

### 1.0.groups.personId.get
Retrieves the current user's groups.


```js
myspace.1.0.groups.personId.get({
  "personId": ""
}, context)
```

#### Parameters
* personId (string) **required** - The person's identifier.
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported: id and title.
* msPrivacyLevel (string) - MySpace specific field. May be one of the following values:
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.

### 1.0.groups._supportedFields.get
Retrieves all supported fields.


```js
myspace.1.0.groups._supportedFields.get({}, context)
```

#### Parameters
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported: id and title.
* msPrivacyLevel (string) - MySpace specific field. May be one of the following values:
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.

### 1.0.albums.personId._self.albumId.put
Update an Album.


```js
myspace.1.0.albums.personId._self.albumId.put({
  "Content-Type": "",
  "personId": "",
  "albumId": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Specifies Content Type.
* personId (string) **required** - The person's identifier.
* albumId (string) **required** - Indicates which single album should be returned.

### 1.0.albums.personId._self.albumId.get
Retrieves an album.


```js
myspace.1.0.albums.personId._self.albumId.get({
  "personId": "",
  "albumId": ""
}, context)
```

#### Parameters
* personId (string) **required** - The person's identifier.
* albumId (string) **required** - Indicates which single album should be returned.

### 1.0.albums.personId._self.post
Adding an Album.


```js
myspace.1.0.albums.personId._self.post({
  "Content-Type": "",
  "personId": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Specifies Content Type.
* personId (string) **required** - The person's identifier.

### 1.0.albums.personId._self.get
Retrieves the current user's albums.


```js
myspace.1.0.albums.personId._self.get({
  "personId": ""
}, context)
```

#### Parameters
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported. Bold are default values.
* msPrivacyLevel (string) - MySpace specific field. May be one of the following values:
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.
* personId (string) **required** - The person's identifier.

### 1.0.albums._supportedFields.get
Retrieves all supported fields.


```js
myspace.1.0.albums._supportedFields.get({}, context)
```

#### Parameters
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported. Bold are default values.
* msPrivacyLevel (string) - MySpace specific field. May be one of the following values:
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.

### 1.0.activities.personId.selector.appId.get
Retrieves activities created by an application.


```js
myspace.1.0.activities.personId.selector.appId.get({
  "personId": "",
  "selector": "",
  "appId": ""
}, context)
```

#### Parameters
* personId (string) **required** - The person's identifier.
* selector (string) **required** - Indicates which set of individuals to query for activities. @friends and @all currently can be used interchangeably.
* appId (string) **required** - The application's ID associated with the OAuth ConsumerKey/ConsumerSecret pair.
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported.
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.
* updatedSince (string) - Indicates the date before which no activities should be returned.

### 1.0.activities._supportedObjectTypes.get
Retrieves all supported object types.


```js
myspace.1.0.activities._supportedObjectTypes.get({}, context)
```

#### Parameters
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported.
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.
* updatedSince (string) - Indicates the date before which no activities should be returned.

### 1.0.activities._supportedVerbs.get
Retrieves all supported verbs.


```js
myspace.1.0.activities._supportedVerbs.get({}, context)
```

#### Parameters
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported.
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.
* updatedSince (string) - Indicates the date before which no activities should be returned.

### 1.0.activities._supportedFields.get
Retrieves all supported fields.


```js
myspace.1.0.activities._supportedFields.get({}, context)
```

#### Parameters
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported.
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.
* updatedSince (string) - Indicates the date before which no activities should be returned.

### 1.0.activities.personId._self.post
Creates an activity for the user.


```js
myspace.1.0.activities.personId._self.post({
  "Content-Type": "",
  "personId": ""
}, context)
```

#### Parameters
* Content-Type (string) **required** - Specifies Content Type.
* personId (string) **required** - The person's identifier.

### 1.0.activities.personId.selector.get
Retrieves all activities for the user or for the friends of the viewer.


```js
myspace.1.0.activities.personId.selector.get({
  "personId": "",
  "selector": ""
}, context)
```

#### Parameters
* count (string) - Only returns the nearest multiple of 3 compared to the original value.
* fields (string) - The following field names are supported.
* format (string) - Determines the format of the response.
* startIndex (string) - Indicates the index of the first item to retrieve from the query set.
* updatedSince (string) - Indicates the date before which no activities should be returned.
* personId (string) **required** - The person's identifier.
* selector (string) **required** - Indicates which set of individuals to query for activities. @friends and @all currently can be used interchangeably.

