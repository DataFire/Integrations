# @datafire/salesforcechatter

Client library for Salesforce Chatter

## Installation and Usage
```bash
npm install --save @datafire/salesforcechatter
```
```js
let salesforcechatter = require('@datafire/salesforcechatter').create();

salesforcechatter.chatter.users.me.groups.get({}).then(data => {
  console.log(data);
})
```

## Description

Create applications for the social enterprise with Salesforce's collaboration platform

## Actions

### chatter.comments.commentId.get
Gets info on a comment.


```js
salesforcechatter.chatter.comments.commentId.get({
  "commentId": ""
}, context)
```

#### Input
* input `object`
  * commentId **required** `string`

#### Output
*Output schema unknown*

### chatter.comments.commentId.delete
Deletes a comment.


```js
salesforcechatter.chatter.comments.commentId.delete({
  "commentId": ""
}, context)
```

#### Input
* input `object`
  * commentId **required** `string`

#### Output
*Output schema unknown*

### chatter.feed_items.feedItemId.get
Gets info on a feedItem.


```js
salesforcechatter.chatter.feed_items.feedItemId.get({
  "feedItemId": ""
}, context)
```

#### Input
* input `object`
  * page `string`
  * feedItemId **required** `string`

#### Output
*Output schema unknown*

### chatter.feed_items.feedItemId.delete
Deletes a feedItem.


```js
salesforcechatter.chatter.feed_items.feedItemId.delete({
  "feedItemId": ""
}, context)
```

#### Input
* input `object`
  * feedItemId **required** `string`

#### Output
*Output schema unknown*

### chatter.feed_items.feedItemId.comments.get
Gets comments on a feedItem.


```js
salesforcechatter.chatter.feed_items.feedItemId.comments.get({
  "feedItemId": ""
}, context)
```

#### Input
* input `object`
  * page `string`
  * feedItemId **required** `string`

#### Output
*Output schema unknown*

### chatter.feed_items.feedItemId.comments.post
Post a comment on a feedItem.


```js
salesforcechatter.chatter.feed_items.feedItemId.comments.post({
  "text": "",
  "feedItemId": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`
  * feedItemId **required** `string`

#### Output
*Output schema unknown*

### chatter.feed_items.feedItemId.likes.get
Gets likes on a feedItem.


```js
salesforcechatter.chatter.feed_items.feedItemId.likes.get({
  "feedItemId": ""
}, context)
```

#### Input
* input `object`
  * page `string`
  * feedItemId **required** `string`

#### Output
*Output schema unknown*

### chatter.feed_items.feedItemId.likes.post
Post a like on a feedItem.


```js
salesforcechatter.chatter.feed_items.feedItemId.likes.post({
  "feedItemId": ""
}, context)
```

#### Input
* input `object`
  * feedItemId **required** `string`

#### Output
*Output schema unknown*

### chatter.group_memberships.membershipId.get
Gets info on a subscriber to a group.


```js
salesforcechatter.chatter.group_memberships.membershipId.get({
  "membershipId": ""
}, context)
```

#### Input
* input `object`
  * membershipId **required** `string`

#### Output
*Output schema unknown*

### chatter.group_memberships.membershipId.delete
Deletes a subscriber.


```js
salesforcechatter.chatter.group_memberships.membershipId.delete({
  "membershipId": ""
}, context)
```

#### Input
* input `object`
  * membershipId **required** `string`

#### Output
*Output schema unknown*

### chatter.groups.groupId.get
Gets info on a group.


```js
salesforcechatter.chatter.groups.groupId.get({
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`

#### Output
*Output schema unknown*

### chatter.groups.groupId.members.get
Gets members of a group.


```js
salesforcechatter.chatter.groups.groupId.members.get({
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * page `string`
  * groupId **required** `string`

#### Output
*Output schema unknown*

### chatter.groups.groupId.members.post
Add member to a group.


```js
salesforcechatter.chatter.groups.groupId.members.post({
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * userId `string`
  * groupId **required** `string`

#### Output
*Output schema unknown*

### chatter.groups.groupId.photos.get
Gets photos of a group.


```js
salesforcechatter.chatter.groups.groupId.photos.get({
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`

#### Output
*Output schema unknown*

### chatter.groups.groupId.photos.post
Post photos to a group.


```js
salesforcechatter.chatter.groups.groupId.photos.post({
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`

#### Output
*Output schema unknown*

### chatter.groups.groupId.photos.delete
Post photos to a group.


```js
salesforcechatter.chatter.groups.groupId.photos.delete({
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * groupId **required** `string`

#### Output
*Output schema unknown*

### chatter.likes.likeId.get
Gets info on a specified like.


```js
salesforcechatter.chatter.likes.likeId.get({
  "likeId": ""
}, context)
```

#### Input
* input `object`
  * likeId **required** `string`

#### Output
*Output schema unknown*

### chatter.likes.likeId.delete
Deletes a specified like.


```js
salesforcechatter.chatter.likes.likeId.delete({
  "likeId": ""
}, context)
```

#### Input
* input `object`
  * likeId **required** `string`

#### Output
*Output schema unknown*

### chatter.feeds.news.me.feed_items.get
Gets news on a specified feed.


```js
salesforcechatter.chatter.feeds.news.me.feed_items.get({}, context)
```

#### Input
* input `object`
  * page `string`

#### Output
*Output schema unknown*

### chatter.feeds.news.me.feed_items.post
Posts news on a specified feed.


```js
salesforcechatter.chatter.feeds.news.me.feed_items.post({}, context)
```

#### Input
* input `object`
  * contentDocumentId `string`
  * fileName `string`
  * feedItemFileUpload `string`
  * desc `string`
  * text `string`
  * url `string`
  * urlName `string`

#### Output
*Output schema unknown*

### chatter.feeds.news.userId.feed_items.get
Gets news on a specified user's feed items.


```js
salesforcechatter.chatter.feeds.news.userId.feed_items.get({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * page `string`
  * userId **required** `string`

#### Output
*Output schema unknown*

### chatter.feeds.news.userId.feed_items.post
Post news on a specified user's feed items.


```js
salesforcechatter.chatter.feeds.news.userId.feed_items.post({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * contentDocumentId `string`
  * fileName `string`
  * feedItemFileUpload `string`
  * desc `string`
  * text `string`
  * url `string`
  * urlName `string`
  * userId **required** `string`

#### Output
*Output schema unknown*

### chatter.feeds.record.me.feed_items.get
Gets records on a specified feed.


```js
salesforcechatter.chatter.feeds.record.me.feed_items.get({
  "text": "",
  "recordId": ""
}, context)
```

#### Input
* input `object`
  * page `string`
  * text **required** `string`
  * url `string`
  * contentDocumentId `string`
  * fileName `string`
  * feedItemFileUpload `string`
  * desc `string`
  * urlName `string`
  * recordId **required** `string`

#### Output
*Output schema unknown*

### chatter.feeds.record.me.feed_items.post
Posts a record on a specified feed.


```js
salesforcechatter.chatter.feeds.record.me.feed_items.post({
  "text": "",
  "recordId": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`
  * url `string`
  * contentDocumentId `string`
  * fileName `string`
  * feedItemFileUpload `string`
  * desc `string`
  * urlName `string`
  * recordId **required** `string`

#### Output
*Output schema unknown*

### chatter.feeds.record.userId.feed_items.get
Gets records on a specified user's feed items.


```js
salesforcechatter.chatter.feeds.record.userId.feed_items.get({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * page `string`
  * userId **required** `string`

#### Output
*Output schema unknown*

### chatter.feeds.record.userId.feed_items.post
Post record on a specified user's feed items.


```js
salesforcechatter.chatter.feeds.record.userId.feed_items.post({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * contentDocumentId `string`
  * fileName `string`
  * feedItemFileUpload `string`
  * desc `string`
  * text `string`
  * url `string`
  * urlName `string`
  * userId **required** `string`

#### Output
*Output schema unknown*

### chatter.subscriptions.subscriptionId.get
Gets info on a specified subscription.


```js
salesforcechatter.chatter.subscriptions.subscriptionId.get({
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`

#### Output
*Output schema unknown*

### chatter.subscriptions.subscriptionId.delete
Deletes a specified subscription.


```js
salesforcechatter.chatter.subscriptions.subscriptionId.delete({
  "subscriptionId": ""
}, context)
```

#### Input
* input `object`
  * subscriptionId **required** `string`

#### Output
*Output schema unknown*

### chatter.feeds.to.me.feed_items.get
Gets @mentions of the current user.


```js
salesforcechatter.chatter.feeds.to.me.feed_items.get({}, context)
```

#### Input
* input `object`
  * page `string`

#### Output
*Output schema unknown*

### chatter.feeds.to.me.feed_items.post
Posts a @mention on the current user.


```js
salesforcechatter.chatter.feeds.to.me.feed_items.post({}, context)
```

#### Input
* input `object`
  * contentDocumentId `string`
  * fileName `string`
  * feedItemFileUpload `string`
  * desc `string`
  * text `string`
  * url `string`
  * urlName `string`

#### Output
*Output schema unknown*

### chatter.feeds.to.userId.feed_items.get
Gets @mentions on a specified user.


```js
salesforcechatter.chatter.feeds.to.userId.feed_items.get({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * page `string`
  * userId **required** `string`

#### Output
*Output schema unknown*

### chatter.feeds.to.userId.feed_items.post
Post @mentions on a specified user.


```js
salesforcechatter.chatter.feeds.to.userId.feed_items.post({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * contentDocumentId `string`
  * fileName `string`
  * feedItemFileUpload `string`
  * desc `string`
  * text `string`
  * url `string`
  * urlName `string`
  * userId **required** `string`

#### Output
*Output schema unknown*

### chatter.feeds.user_profile.me.feed_items.get
Gets profile feed of the current user.


```js
salesforcechatter.chatter.feeds.user_profile.me.feed_items.get({}, context)
```

#### Input
* input `object`
  * page `string`

#### Output
*Output schema unknown*

### chatter.feeds.user_profile.me.feed_items.post
Posts a profile feed on the current user.


```js
salesforcechatter.chatter.feeds.user_profile.me.feed_items.post({}, context)
```

#### Input
* input `object`
  * contentDocumentId `string`
  * fileName `string`
  * feedItemFileUpload `string`
  * desc `string`
  * text `string`
  * url `string`
  * urlName `string`

#### Output
*Output schema unknown*

### chatter.feeds.user_profile.userId.feed_items.get
Gets profile feed on a specified user.


```js
salesforcechatter.chatter.feeds.user_profile.userId.feed_items.get({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * page `string`
  * userId **required** `string`

#### Output
*Output schema unknown*

### chatter.feeds.user_profile.userId.feed_items.post
Post profile feed on a specified user.


```js
salesforcechatter.chatter.feeds.user_profile.userId.feed_items.post({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * contentDocumentId `string`
  * fileName `string`
  * feedItemFileUpload `string`
  * desc `string`
  * text `string`
  * url `string`
  * urlName `string`
  * userId **required** `string`

#### Output
*Output schema unknown*

### chatter.users.me.get
Returns information on the current user.


```js
salesforcechatter.chatter.users.me.get({}, context)
```

#### Input
* input `object`
  * page `integer`

#### Output
*Output schema unknown*

### chatter.users.me.followers.get
Returns information on followers of the current user.


```js
salesforcechatter.chatter.users.me.followers.get({}, context)
```

#### Input
* input `object`
  * page `integer`

#### Output
*Output schema unknown*

### chatter.users.me.following.get
Returns information on who the current user follows.


```js
salesforcechatter.chatter.users.me.following.get({}, context)
```

#### Input
* input `object`
  * page `integer`

#### Output
*Output schema unknown*

### chatter.users.me.following.post
Posts information on who the current user follows.


```js
salesforcechatter.chatter.users.me.following.post({
  "subjectId": ""
}, context)
```

#### Input
* input `object`
  * subjectId **required** `string`

#### Output
*Output schema unknown*

### chatter.users.me.groups.get
Returns information on groups the current user is in.


```js
salesforcechatter.chatter.users.me.groups.get({}, context)
```

#### Input
* input `object`
  * page `integer`

#### Output
*Output schema unknown*

### chatter.users.me.photo.get
Returns information on the current user's photos.


```js
salesforcechatter.chatter.users.me.photo.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### chatter.users.me.photo.post
Post photo to current user's profile.


```js
salesforcechatter.chatter.users.me.photo.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### chatter.users.me.photo.delete
Delete photo of current user's profile.


```js
salesforcechatter.chatter.users.me.photo.delete(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### chatter.users.me.status.get
Returns info of current user's status.


```js
salesforcechatter.chatter.users.me.status.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### chatter.users.me.status.post
Post text to current user's status.


```js
salesforcechatter.chatter.users.me.status.post({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`

#### Output
*Output schema unknown*

### chatter.users.me.status.delete
Delete current user's status containing text.


```js
salesforcechatter.chatter.users.me.status.delete({
  "text": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`

#### Output
*Output schema unknown*

### chatter.users.userId.get
Returns information on the specified user.


```js
salesforcechatter.chatter.users.userId.get({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * page `integer`
  * userId **required** `string`

#### Output
*Output schema unknown*

### chatter.users.userId.followers.get
Returns information on followers of the specified user.


```js
salesforcechatter.chatter.users.userId.followers.get({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * page `integer`
  * userId **required** `string`

#### Output
*Output schema unknown*

### chatter.users.userId.following.get
Returns information on who the specified user follows.


```js
salesforcechatter.chatter.users.userId.following.get({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * page `integer`
  * userId **required** `string`

#### Output
*Output schema unknown*

### chatter.users.userId.following.post
Posts information on who the specified user follows.


```js
salesforcechatter.chatter.users.userId.following.post({
  "subjectId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * subjectId **required** `string`
  * userId **required** `string`

#### Output
*Output schema unknown*

### chatter.users.userId.groups.get
Returns information on groups the specified user is in.


```js
salesforcechatter.chatter.users.userId.groups.get({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * page `integer`
  * userId **required** `string`

#### Output
*Output schema unknown*

### chatter.users.userId.photo.get
Returns information on the specified user's photos.


```js
salesforcechatter.chatter.users.userId.photo.get({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`

#### Output
*Output schema unknown*

### chatter.users.userId.photo.post
Post photo to specified user's profile.


```js
salesforcechatter.chatter.users.userId.photo.post({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`

#### Output
*Output schema unknown*

### chatter.users.userId.photo.delete
Delete photo of specified user's profile.


```js
salesforcechatter.chatter.users.userId.photo.delete({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`

#### Output
*Output schema unknown*

### chatter.users.userId.status.get
Returns info of specified user's status.


```js
salesforcechatter.chatter.users.userId.status.get({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`

#### Output
*Output schema unknown*

### chatter.users.userId.status.post
Post text to specified user's status.


```js
salesforcechatter.chatter.users.userId.status.post({
  "text": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`
  * userId **required** `string`

#### Output
*Output schema unknown*

### chatter.users.userId.status.delete
Delete specified user's status containing text.


```js
salesforcechatter.chatter.users.userId.status.delete({
  "text": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * text **required** `string`
  * userId **required** `string`

#### Output
*Output schema unknown*



## Definitions

**This integration has no definitions**
