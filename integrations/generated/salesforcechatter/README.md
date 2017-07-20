# @datafire/salesforcechatter
Create applications for the social enterprise with Salesforce's collaboration platform

## Operation: chatter.comments.commentId.get
Gets info on a comment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "commentId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "commentId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.comments.commentId.delete
Deletes a comment.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "commentId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "commentId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.feed_items.feedItemId.get
Gets info on a feedItem.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "string"
    },
    "feedItemId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "feedItemId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.feed_items.feedItemId.delete
Deletes a feedItem.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "feedItemId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "feedItemId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.feed_items.feedItemId.comments.get
Gets comments on a feedItem.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "string"
    },
    "feedItemId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "feedItemId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.feed_items.feedItemId.comments.post
Post a comment on a feedItem.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "text": {
      "type": "string"
    },
    "feedItemId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "text",
    "feedItemId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.feed_items.feedItemId.likes.get
Gets likes on a feedItem.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "string"
    },
    "feedItemId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "feedItemId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.feed_items.feedItemId.likes.post
Post a like on a feedItem.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "feedItemId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "feedItemId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.group_memberships.membershipId.get
Gets info on a subscriber to a group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "membershipId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "membershipId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.group_memberships.membershipId.delete
Deletes a subscriber.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "membershipId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "membershipId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.groups.groupId.get
Gets info on a group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "groupId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "groupId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.groups.groupId.members.get
Gets members of a group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "string"
    },
    "groupId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "groupId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.groups.groupId.members.post
Add member to a group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string"
    },
    "groupId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "groupId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.groups.groupId.photos.get
Gets photos of a group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "groupId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "groupId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.groups.groupId.photos.post
Post photos to a group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "groupId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "groupId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.groups.groupId.photos.delete
Post photos to a group.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "groupId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "groupId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.likes.likeId.get
Gets info on a specified like.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "likeId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "likeId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.likes.likeId.delete
Deletes a specified like.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "likeId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "likeId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.feeds.news.me.feed_items.get
Gets news on a specified feed.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: chatter.feeds.news.me.feed_items.post
Posts news on a specified feed.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "contentDocumentId": {
      "type": "string"
    },
    "fileName": {
      "type": "string"
    },
    "feedItemFileUpload": {
      "type": "string"
    },
    "desc": {
      "type": "string"
    },
    "text": {
      "type": "string"
    },
    "url": {
      "type": "string"
    },
    "urlName": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: chatter.feeds.news.userId.feed_items.get
Gets news on a specified user's feed items.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "string"
    },
    "userId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.feeds.news.userId.feed_items.post
Post news on a specified user's feed items.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "contentDocumentId": {
      "type": "string"
    },
    "fileName": {
      "type": "string"
    },
    "feedItemFileUpload": {
      "type": "string"
    },
    "desc": {
      "type": "string"
    },
    "text": {
      "type": "string"
    },
    "url": {
      "type": "string"
    },
    "urlName": {
      "type": "string"
    },
    "userId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.feeds.record.me.feed_items.get
Gets records on a specified feed.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "string"
    },
    "text": {
      "type": "string"
    },
    "url": {
      "type": "string"
    },
    "contentDocumentId": {
      "type": "string"
    },
    "fileName": {
      "type": "string"
    },
    "feedItemFileUpload": {
      "type": "string"
    },
    "desc": {
      "type": "string"
    },
    "urlName": {
      "type": "string"
    },
    "recordId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "text",
    "recordId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.feeds.record.me.feed_items.post
Posts a record on a specified feed.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "text": {
      "type": "string"
    },
    "url": {
      "type": "string"
    },
    "contentDocumentId": {
      "type": "string"
    },
    "fileName": {
      "type": "string"
    },
    "feedItemFileUpload": {
      "type": "string"
    },
    "desc": {
      "type": "string"
    },
    "urlName": {
      "type": "string"
    },
    "recordId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "text",
    "recordId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.feeds.record.userId.feed_items.get
Gets records on a specified user's feed items.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "string"
    },
    "userId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.feeds.record.userId.feed_items.post
Post record on a specified user's feed items.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "contentDocumentId": {
      "type": "string"
    },
    "fileName": {
      "type": "string"
    },
    "feedItemFileUpload": {
      "type": "string"
    },
    "desc": {
      "type": "string"
    },
    "text": {
      "type": "string"
    },
    "url": {
      "type": "string"
    },
    "urlName": {
      "type": "string"
    },
    "userId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.subscriptions.subscriptionId.get
Gets info on a specified subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.subscriptions.subscriptionId.delete
Deletes a specified subscription.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subscriptionId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "subscriptionId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.feeds.to.me.feed_items.get
Gets @mentions of the current user.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: chatter.feeds.to.me.feed_items.post
Posts a @mention on the current user.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "contentDocumentId": {
      "type": "string"
    },
    "fileName": {
      "type": "string"
    },
    "feedItemFileUpload": {
      "type": "string"
    },
    "desc": {
      "type": "string"
    },
    "text": {
      "type": "string"
    },
    "url": {
      "type": "string"
    },
    "urlName": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: chatter.feeds.to.userId.feed_items.get
Gets @mentions on a specified user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "string"
    },
    "userId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.feeds.to.userId.feed_items.post
Post @mentions on a specified user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "contentDocumentId": {
      "type": "string"
    },
    "fileName": {
      "type": "string"
    },
    "feedItemFileUpload": {
      "type": "string"
    },
    "desc": {
      "type": "string"
    },
    "text": {
      "type": "string"
    },
    "url": {
      "type": "string"
    },
    "urlName": {
      "type": "string"
    },
    "userId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.feeds.user_profile.me.feed_items.get
Gets profile feed of the current user.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: chatter.feeds.user_profile.me.feed_items.post
Posts a profile feed on the current user.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "contentDocumentId": {
      "type": "string"
    },
    "fileName": {
      "type": "string"
    },
    "feedItemFileUpload": {
      "type": "string"
    },
    "desc": {
      "type": "string"
    },
    "text": {
      "type": "string"
    },
    "url": {
      "type": "string"
    },
    "urlName": {
      "type": "string"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: chatter.feeds.user_profile.userId.feed_items.get
Gets profile feed on a specified user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "string"
    },
    "userId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.feeds.user_profile.userId.feed_items.post
Post profile feed on a specified user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "contentDocumentId": {
      "type": "string"
    },
    "fileName": {
      "type": "string"
    },
    "feedItemFileUpload": {
      "type": "string"
    },
    "desc": {
      "type": "string"
    },
    "text": {
      "type": "string"
    },
    "url": {
      "type": "string"
    },
    "urlName": {
      "type": "string"
    },
    "userId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.users.me.get
Returns information on the current user.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: chatter.users.me.followers.get
Returns information on followers of the current user.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: chatter.users.me.following.get
Returns information on who the current user follows.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: chatter.users.me.following.post
Posts information on who the current user follows.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subjectId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "subjectId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.users.me.groups.get
Returns information on groups the current user is in.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "page": {
      "type": "integer"
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{}
```
## Operation: chatter.users.me.photo.get
Returns information on the current user's photos.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: chatter.users.me.photo.post
Post photo to current user's profile.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: chatter.users.me.photo.delete
Delete photo of current user's profile.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: chatter.users.me.status.get
Returns info of current user's status.

### Input Schema
```json
{}
```
### Output Schema
```json
{}
```
## Operation: chatter.users.me.status.post
Post text to current user's status.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "text": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "text"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.users.me.status.delete
Delete current user's status containing text.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "text": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "text"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.users.userId.get
Returns information on the specified user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer"
    },
    "userId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.users.userId.followers.get
Returns information on followers of the specified user.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer"
    },
    "userId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.users.userId.following.get
Returns information on who the specified user follows.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer"
    },
    "userId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.users.userId.following.post
Posts information on who the specified user follows.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "subjectId": {
      "type": "string"
    },
    "userId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "subjectId",
    "userId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.users.userId.groups.get
Returns information on groups the specified user is in.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer"
    },
    "userId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.users.userId.photo.get
Returns information on the specified user's photos.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.users.userId.photo.post
Post photo to specified user's profile.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.users.userId.photo.delete
Delete photo of specified user's profile.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.users.userId.status.get
Returns info of specified user's status.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "userId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.users.userId.status.post
Post text to specified user's status.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "text": {
      "type": "string"
    },
    "userId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "text",
    "userId"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: chatter.users.userId.status.delete
Delete specified user's status containing text.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "text": {
      "type": "string"
    },
    "userId": {
      "type": "string"
    }
  },
  "additionalProperties": false,
  "required": [
    "text",
    "userId"
  ]
}
```
### Output Schema
```json
{}
```
