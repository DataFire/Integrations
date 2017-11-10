# @datafire/vestorly

Client library for Vestorly

## Installation and Usage
```bash
npm install --save datafire @datafire/vestorly
```

```js
let datafire = require('datafire');
let vestorly = require('@datafire/vestorly').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

vestorly.findAdvisorByID({}).then(data => {
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
  "vestorly-auth": "",
  "id": ""
}, context)
```

#### Parameters
* vestorly-auth (string) **required** - Vestorly Auth Token
* access_token (string) - OAuth Token
* id (string) **required** - Advisor Id to fetch

### findArticles
Returns all articles


```js
vestorly.findArticles({
  "vestorly-auth": ""
}, context)
```

#### Parameters
* vestorly-auth (string) **required** - Vestorly Auth Token
* access_token (string) - OAuth Token
* limit (integer) - Limit on the number of articles to return
* text_query (string) - Search query parameter
* sort_direction (string) - Direction of sort (used with sort_by parameter)
* sort_by (string) - Field on model to sort by

### findArticleByID
Returns a single article


```js
vestorly.findArticleByID({
  "vestorly-auth": "",
  "id": ""
}, context)
```

#### Parameters
* vestorly-auth (string) **required** - Vestorly Auth Token
* access_token (string) - OAuth Token
* id (string) **required** - Article Id to fetch

### findEvents
Returns all events


```js
vestorly.findEvents({
  "vestorly-auth": ""
}, context)
```

#### Parameters
* vestorly-auth (string) **required** - Vestorly Auth Token
* access_token (string) - OAuth Token

### createEvent
Creates a new event in the system


```js
vestorly.createEvent({
  "vestorly-auth": "",
  "event": null
}, context)
```

#### Parameters
* vestorly-auth (string) **required** - Vestorly Auth Token
* access_token (string) - OAuth Token
* event (undefined) **required**

### findEventByID
Returns a single event if the user has access


```js
vestorly.findEventByID({
  "id": "",
  "vestorly-auth": ""
}, context)
```

#### Parameters
* id (string) **required** - Mongo ID of event to fetch
* access_token (string) - OAuth Token
* vestorly-auth (string) **required** - Vestorly Auth Token

### findGroups
Returns all groups


```js
vestorly.findGroups({
  "vestorly-auth": ""
}, context)
```

#### Parameters
* vestorly-auth (string) **required** - Vestorly Auth Token
* access_token (string) - OAuth Token

### createGroup
Creates a new Group


```js
vestorly.createGroup({
  "vestorly-auth": "",
  "group": null
}, context)
```

#### Parameters
* vestorly-auth (string) **required** - Vestorly Auth Token
* access_token (string) - OAuth Token
* group (undefined) **required**

### deleteGroup
Deletes a Group


```js
vestorly.deleteGroup({
  "vestorly-auth": "",
  "id": ""
}, context)
```

#### Parameters
* vestorly-auth (string) **required** - Vestorly Auth Token
* access_token (string) - OAuth Token
* id (string) **required** - id of group to delete

### findGroupByID
Returns a single group if user has access


```js
vestorly.findGroupByID({
  "vestorly-auth": "",
  "id": ""
}, context)
```

#### Parameters
* vestorly-auth (string) **required** - Vestorly Auth Token
* access_token (string) - OAuth Token
* id (string) **required** - Mongo ID of group to fetch

### updateGroupById
Updates a Group


```js
vestorly.updateGroupById({
  "vestorly-auth": "",
  "id": "",
  "group": null
}, context)
```

#### Parameters
* vestorly-auth (string) **required** - Vestorly Auth Token
* access_token (string) - OAuth Token
* id (string) **required** - id of group to update
* group (undefined) **required**

### findMemberEvents
Returns all MemberEvents


```js
vestorly.findMemberEvents({
  "vestorly-auth": ""
}, context)
```

#### Parameters
* vestorly-auth (string) **required** - Vestorly Auth Token
* access_token (string) - OAuth Token

### findMemberReports
Returns all member reports


```js
vestorly.findMemberReports({
  "vestorly-auth": ""
}, context)
```

#### Parameters
* vestorly-auth (string) **required** - Vestorly Auth Token
* access_token (string) - OAuth Token

### findMembers
Returns all members


```js
vestorly.findMembers({
  "vestorly-auth": ""
}, context)
```

#### Parameters
* vestorly-auth (string) **required** - Vestorly Auth Token
* access_token (string) - OAuth Token
* start (integer) - Skips number of members from start
* limit (integer) - Number of members to return

### createMember
Create a new member in the Vestorly Platform


```js
vestorly.createMember({
  "vestorly-auth": "",
  "member": null
}, context)
```

#### Parameters
* vestorly-auth (string) **required** - Vestorly Auth Token
* access_token (string) - OAuth Token
* member (undefined) **required**

### findMemberByID
Returns a single member


```js
vestorly.findMemberByID({
  "id": "",
  "vestorly-auth": ""
}, context)
```

#### Parameters
* id (string) **required** - Mongo ID of member to fetch
* vestorly-auth (string) **required** - Vestorly Auth Token
* access_token (string) - OAuth Token

### updateMemberByID
Updates a single member


```js
vestorly.updateMemberByID({
  "id": "",
  "vestorly-auth": "",
  "member": null
}, context)
```

#### Parameters
* id (string) **required** - Mongo ID of member to fetch
* vestorly-auth (string) **required** - Vestorly Auth Token
* access_token (string) - OAuth Token
* member (undefined) **required**

### findNewsletterSettings
Returns all newsletter settings


```js
vestorly.findNewsletterSettings({
  "vestorly-auth": ""
}, context)
```

#### Parameters
* vestorly-auth (string) **required** - Vestorly Auth Token
* access_token (string) - OAuth Token

### findNewsletterSettingsByID
Returns a single newsletter settings if the user has access


```js
vestorly.findNewsletterSettingsByID({
  "id": "",
  "vestorly-auth": ""
}, context)
```

#### Parameters
* id (string) **required** - Mongo ID of newsletter settings to fetch
* vestorly-auth (string) **required** - Vestorly Auth Token
* access_token (string) - OAuth Token

### updateNewsletterSettingsByID
Update a single newsletter setting by ID


```js
vestorly.updateNewsletterSettingsByID({
  "id": "",
  "vestorly-auth": "",
  "newsletter_setting": null
}, context)
```

#### Parameters
* id (string) **required** - Mongo ID of newsletter settings to update
* vestorly-auth (string) **required** - Vestorly Auth Token
* access_token (string) - OAuth Token
* newsletter_setting (undefined) **required**

### findNewsletters
Returns all newsletters


```js
vestorly.findNewsletters({
  "vestorly-auth": ""
}, context)
```

#### Parameters
* vestorly-auth (string) **required** - Vestorly Auth Token
* access_token (string) - OAuth Token

### getNewsletterByID
Get a newsletter by ID


```js
vestorly.getNewsletterByID({
  "vestorly-auth": "",
  "id": ""
}, context)
```

#### Parameters
* vestorly-auth (string) **required** - Vestorly Auth Token
* access_token (string) - OAuth Token
* id (string) **required** - Mongo ID of event to get

### updateNewsletterByID
Updates a newsletter


```js
vestorly.updateNewsletterByID({
  "vestorly-auth": "",
  "id": "",
  "newsletter": null
}, context)
```

#### Parameters
* vestorly-auth (string) **required** - Vestorly Auth Token
* access_token (string) - OAuth Token
* id (string) **required** - Mongo ID of event to update
* newsletter (undefined) **required**

### findPosts
Query all posts


```js
vestorly.findPosts({
  "vestorly-auth": ""
}, context)
```

#### Parameters
* vestorly-auth (string) **required** - Vestorly Auth Token
* access_token (string) - OAuth Token
* text_query (string) - Filter post by parameters
* external_url (string) - Filter by External URL
* is_published (string) - Filter by is_published boolean

### createPost
Create a new post in the Vestorly Platform


```js
vestorly.createPost({
  "vestorly-auth": "",
  "post": null
}, context)
```

#### Parameters
* vestorly-auth (string) **required** - Vestorly Auth Token
* access_token (string) - OAuth Token
* post (undefined) **required**

### getPostByID
Query all posts


```js
vestorly.getPostByID({
  "vestorly-auth": "",
  "id": ""
}, context)
```

#### Parameters
* vestorly-auth (string) **required** - Vestorly Auth Token
* access_token (string) - OAuth Token
* id (string) **required** - ID of post to fetch

### updatePostByID
Update A Post


```js
vestorly.updatePostByID({
  "vestorly-auth": "",
  "id": "",
  "post": null
}, context)
```

#### Parameters
* vestorly-auth (string) **required** - Vestorly Auth Token
* access_token (string) - OAuth Token
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
  "vestorly-auth": "",
  "id": ""
}, context)
```

#### Parameters
* vestorly-auth (string) **required** - Authenication token
* id (string) **required** - ID of pet to session

### findSources
Returns all sources


```js
vestorly.findSources({
  "vestorly-auth": ""
}, context)
```

#### Parameters
* vestorly-auth (string) **required** - Vestorly Auth Token
* access_token (string) - OAuth Token

### createSource
Create source


```js
vestorly.createSource({
  "vestorly-auth": "",
  "source": null
}, context)
```

#### Parameters
* vestorly-auth (string) **required** - Vestorly Auth Token
* access_token (string) - OAuth Token
* source (undefined) **required**

### getSourceByID
Get Source By ID


```js
vestorly.getSourceByID({
  "vestorly-auth": "",
  "id": ""
}, context)
```

#### Parameters
* vestorly-auth (string) **required** - Vestorly Auth Token
* access_token (string) - OAuth Token
* id (string) **required** - ID of source to fetch

### updateSourceByID
Update Source By ID


```js
vestorly.updateSourceByID({
  "vestorly-auth": "",
  "id": "",
  "source": null
}, context)
```

#### Parameters
* vestorly-auth (string) **required** - Vestorly Auth Token
* access_token (string) - OAuth Token
* id (string) **required** - ID of source to fetch
* source (undefined) **required**

