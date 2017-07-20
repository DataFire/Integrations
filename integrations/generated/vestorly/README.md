# @datafire/vestorly

Client library for Vestorly

## Installation and Usage
```bash
npm install --save datafire @datafire/vestorly
```

```js
let datafire = require('datafire');
let vestorly = require('@datafire/vestorly').actions;
let context = new datafire.Context();

vestorly.findAdvisorByID({}, context).then(data => {
  console.log(data);
})
```

## Description
Vestorly Developers API

## Actions
### findAdvisorByID
Returns a single advisor given their ID


```js
vestorly.findAdvisorByID({
  "vestorly_auth": "",
  "id": ""
}, context)
```

#### Parameters
* vestorly_auth (string) **required** - Vestorly Auth Token
* id (string) **required** - Advisor Id to fetch

### findArticles
Returns all articles


```js
vestorly.findArticles({
  "vestorly_auth": ""
}, context)
```

#### Parameters
* vestorly_auth (string) **required** - Vestorly Auth Token
* limit (integer) - Limit on the number of articles to return
* text_query (string) - Search query parameter
* sort_direction (string) - Direction of sort (used with sort_by parameter)
* sort_by (string) - Field on model to sort by

### findArticleByID
Returns a single article


```js
vestorly.findArticleByID({
  "vestorly_auth": "",
  "id": ""
}, context)
```

#### Parameters
* vestorly_auth (string) **required** - Vestorly Auth Token
* id (string) **required** - Article Id to fetch

### findEvents
Returns all events


```js
vestorly.findEvents({
  "vestorly_auth": ""
}, context)
```

#### Parameters
* vestorly_auth (string) **required** - Vestorly Auth Token

### createEvent
Creates a new event in the system


```js
vestorly.createEvent({
  "vestorly_auth": "",
  "event": null
}, context)
```

#### Parameters
* vestorly_auth (string) **required** - Vestorly Auth Token
* event (undefined) **required**

### findEventByID
Returns a single event if the user has access


```js
vestorly.findEventByID({
  "id": "",
  "vestorly_auth": ""
}, context)
```

#### Parameters
* id (string) **required** - Mongo ID of event to fetch
* vestorly_auth (string) **required** - Vestorly Auth Token

### findGroups
Returns all groups


```js
vestorly.findGroups({
  "vestorly_auth": ""
}, context)
```

#### Parameters
* vestorly_auth (string) **required** - Vestorly Auth Token

### createGroup
Creates a new Group


```js
vestorly.createGroup({
  "vestorly_auth": "",
  "group": null
}, context)
```

#### Parameters
* vestorly_auth (string) **required** - Vestorly Auth Token
* group (undefined) **required**

### deleteGroup
Deletes a Group


```js
vestorly.deleteGroup({
  "vestorly_auth": "",
  "id": ""
}, context)
```

#### Parameters
* vestorly_auth (string) **required** - Vestorly Auth Token
* id (string) **required** - id of group to delete

### findGroupByID
Returns a single group if user has access


```js
vestorly.findGroupByID({
  "vestorly_auth": "",
  "id": ""
}, context)
```

#### Parameters
* vestorly_auth (string) **required** - Vestorly Auth Token
* id (string) **required** - Mongo ID of group to fetch

### updateGroupById
Updates a Group


```js
vestorly.updateGroupById({
  "vestorly_auth": "",
  "id": "",
  "group": null
}, context)
```

#### Parameters
* vestorly_auth (string) **required** - Vestorly Auth Token
* id (string) **required** - id of group to update
* group (undefined) **required**

### findMemberEvents
Returns all MemberEvents


```js
vestorly.findMemberEvents({
  "vestorly_auth": ""
}, context)
```

#### Parameters
* vestorly_auth (string) **required** - Vestorly Auth Token

### findMemberReports
Returns all member reports


```js
vestorly.findMemberReports({
  "vestorly_auth": ""
}, context)
```

#### Parameters
* vestorly_auth (string) **required** - Vestorly Auth Token

### findMembers
Returns all members


```js
vestorly.findMembers({
  "vestorly_auth": ""
}, context)
```

#### Parameters
* vestorly_auth (string) **required** - Vestorly Auth Token

### createMember
Create a new member in the Vestorly Platform


```js
vestorly.createMember({
  "vestorly_auth": "",
  "member": null
}, context)
```

#### Parameters
* vestorly_auth (string) **required** - Vestorly Auth Token
* member (undefined) **required**

### findMemberByID
Returns a single member


```js
vestorly.findMemberByID({
  "id": "",
  "vestorly_auth": ""
}, context)
```

#### Parameters
* id (string) **required** - Mongo ID of member to fetch
* vestorly_auth (string) **required** - Vestorly Auth Token

### updateMemberByID
Updates a single member


```js
vestorly.updateMemberByID({
  "id": "",
  "vestorly_auth": "",
  "member": null
}, context)
```

#### Parameters
* id (string) **required** - Mongo ID of member to fetch
* vestorly_auth (string) **required** - Vestorly Auth Token
* member (undefined) **required**

### findNewsletterSettings
Returns all newsletter settings


```js
vestorly.findNewsletterSettings({
  "vestorly_auth": ""
}, context)
```

#### Parameters
* vestorly_auth (string) **required** - Vestorly Auth Token

### findNewsletterSettingsByID
Returns a single newsletter settings if the user has access


```js
vestorly.findNewsletterSettingsByID({
  "id": "",
  "vestorly_auth": ""
}, context)
```

#### Parameters
* id (string) **required** - Mongo ID of newsletter settings to fetch
* vestorly_auth (string) **required** - Vestorly Auth Token

### updateNewsletterSettingsByID
Update a single newsletter setting by ID


```js
vestorly.updateNewsletterSettingsByID({
  "id": "",
  "vestorly_auth": "",
  "newsletter_setting": null
}, context)
```

#### Parameters
* id (string) **required** - Mongo ID of newsletter settings to update
* vestorly_auth (string) **required** - Vestorly Auth Token
* newsletter_setting (undefined) **required**

### findNewsletters
Returns all newsletters


```js
vestorly.findNewsletters({
  "vestorly_auth": ""
}, context)
```

#### Parameters
* vestorly_auth (string) **required** - Vestorly Auth Token

### getNewsletterByID
Get a newsletter by ID


```js
vestorly.getNewsletterByID({
  "vestorly_auth": "",
  "id": ""
}, context)
```

#### Parameters
* vestorly_auth (string) **required** - Vestorly Auth Token
* id (string) **required** - Mongo ID of event to get

### updateNewsletterByID
Updates a newsletter


```js
vestorly.updateNewsletterByID({
  "vestorly_auth": "",
  "id": "",
  "newsletter": null
}, context)
```

#### Parameters
* vestorly_auth (string) **required** - Vestorly Auth Token
* id (string) **required** - Mongo ID of event to update
* newsletter (undefined) **required**

### findPosts
Query all posts


```js
vestorly.findPosts({
  "vestorly_auth": ""
}, context)
```

#### Parameters
* vestorly_auth (string) **required** - Vestorly Auth Token
* text_query (string) - Filter post by parameters
* external_url (string) - Filter by External URL
* is_published (string) - Filter by is_published boolean

### createPost
Create a new post in the Vestorly Platform


```js
vestorly.createPost({
  "vestorly_auth": "",
  "post": null
}, context)
```

#### Parameters
* vestorly_auth (string) **required** - Vestorly Auth Token
* post (undefined) **required**

### getPostByID
Query all posts


```js
vestorly.getPostByID({
  "vestorly_auth": "",
  "id": ""
}, context)
```

#### Parameters
* vestorly_auth (string) **required** - Vestorly Auth Token
* id (string) **required** - ID of post to fetch

### updatePostByID
Update A Post


```js
vestorly.updatePostByID({
  "vestorly_auth": "",
  "id": "",
  "post": null
}, context)
```

#### Parameters
* vestorly_auth (string) **required** - Vestorly Auth Token
* id (string) **required** - id of post to update
* post (undefined) **required**

### login
Login To Vestorly Platform


```js
vestorly.login({
  "username": "",
  "password": ""
}, context)
```

#### Parameters
* username (string) **required** - Username in the vestorly platform
* password (string) **required** - Password in Vestorly Platform

### logout
Logout of the vestorly platform


```js
vestorly.logout({
  "vestorly_auth": "",
  "id": ""
}, context)
```

#### Parameters
* vestorly_auth (string) **required** - Authenication token
* id (string) **required** - ID of pet to session

### findSources
Returns all sources


```js
vestorly.findSources({
  "vestorly_auth": ""
}, context)
```

#### Parameters
* vestorly_auth (string) **required** - Vestorly Auth Token

### createSource
Create source


```js
vestorly.createSource({
  "vestorly_auth": "",
  "source": null
}, context)
```

#### Parameters
* vestorly_auth (string) **required** - Vestorly Auth Token
* source (undefined) **required**

### getSourceByID
Get Source By ID


```js
vestorly.getSourceByID({
  "vestorly_auth": "",
  "id": ""
}, context)
```

#### Parameters
* vestorly_auth (string) **required** - Vestorly Auth Token
* id (string) **required** - ID of source to fetch

### updateSourceByID
Update Source By ID


```js
vestorly.updateSourceByID({
  "vestorly_auth": "",
  "id": "",
  "source": null
}, context)
```

#### Parameters
* vestorly_auth (string) **required** - Vestorly Auth Token
* id (string) **required** - ID of source to fetch
* source (undefined) **required**

