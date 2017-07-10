# @datafire/vestorly
Vestorly Developers API

## Operation: findAdvisorByID
Returns a single advisor given their ID

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "vestorly_auth": {
      "type": "string",
      "description": "Vestorly Auth Token"
    },
    "id": {
      "type": "string",
      "description": "Advisor Id to fetch"
    }
  },
  "additionalProperties": false,
  "required": [
    "vestorly_auth",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Advisor"
}
```
## Operation: findArticles
Returns all articles

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "vestorly_auth": {
      "type": "string",
      "description": "Vestorly Auth Token"
    },
    "limit": {
      "type": "integer",
      "format": "int32",
      "description": "Limit on the number of articles to return"
    },
    "text_query": {
      "type": "string",
      "description": "Search query parameter"
    },
    "sort_direction": {
      "type": "string",
      "description": "Direction of sort (used with sort_by parameter)"
    },
    "sort_by": {
      "type": "string",
      "description": "Field on model to sort by"
    }
  },
  "additionalProperties": false,
  "required": [
    "vestorly_auth"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Articles"
}
```
## Operation: findArticleByID
Returns a single article

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "vestorly_auth": {
      "type": "string",
      "description": "Vestorly Auth Token"
    },
    "id": {
      "type": "string",
      "format": "string",
      "description": "Article Id to fetch"
    }
  },
  "additionalProperties": false,
  "required": [
    "vestorly_auth",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Articleresponse"
}
```
## Operation: findEvents
Returns all events

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "vestorly_auth": {
      "type": "string",
      "description": "Vestorly Auth Token"
    }
  },
  "additionalProperties": false,
  "required": [
    "vestorly_auth"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Events"
}
```
## Operation: createEvent
Creates a new event in the system

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "vestorly_auth": {
      "type": "string",
      "description": "Vestorly Auth Token"
    },
    "event": {
      "$ref": "#/definitions/EventInput"
    }
  },
  "additionalProperties": false,
  "required": [
    "vestorly_auth",
    "event"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Eventcreateresponse"
}
```
## Operation: findEventByID
Returns a single event if the user has access

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Mongo ID of event to fetch"
    },
    "vestorly_auth": {
      "type": "string",
      "description": "Vestorly Auth Token"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "vestorly_auth"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Eventresponse"
}
```
## Operation: findGroups
Returns all groups

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "vestorly_auth": {
      "type": "string",
      "format": "string",
      "description": "Vestorly Auth Token"
    }
  },
  "additionalProperties": false,
  "required": [
    "vestorly_auth"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Groups"
}
```
## Operation: createGroup
Creates a new Group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "vestorly_auth": {
      "type": "string",
      "format": "string",
      "description": "Vestorly Auth Token"
    },
    "group": {
      "$ref": "#/definitions/GroupInput"
    }
  },
  "additionalProperties": false,
  "required": [
    "vestorly_auth",
    "group"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Groupresponse"
}
```
## Operation: deleteGroup
Deletes a Group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "vestorly_auth": {
      "type": "string",
      "format": "string",
      "description": "Vestorly Auth Token"
    },
    "id": {
      "type": "string",
      "description": "id of group to delete"
    }
  },
  "additionalProperties": false,
  "required": [
    "vestorly_auth",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Groupresponse"
}
```
## Operation: findGroupByID
Returns a single group if user has access

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "vestorly_auth": {
      "type": "string",
      "format": "string",
      "description": "Vestorly Auth Token"
    },
    "id": {
      "type": "string",
      "format": "string",
      "description": "Mongo ID of group to fetch"
    }
  },
  "additionalProperties": false,
  "required": [
    "vestorly_auth",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Groupresponse"
}
```
## Operation: updateGroupById
Updates a Group

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "vestorly_auth": {
      "type": "string",
      "description": "Vestorly Auth Token"
    },
    "id": {
      "type": "string",
      "description": "id of group to update"
    },
    "group": {
      "$ref": "#/definitions/GroupInput"
    }
  },
  "additionalProperties": false,
  "required": [
    "vestorly_auth",
    "id",
    "group"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Groupresponse"
}
```
## Operation: findMemberEvents
Returns all MemberEvents

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "vestorly_auth": {
      "type": "string",
      "description": "Vestorly Auth Token"
    }
  },
  "additionalProperties": false,
  "required": [
    "vestorly_auth"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MemberEvents"
}
```
## Operation: findMemberReports
Returns all member reports

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "vestorly_auth": {
      "type": "string",
      "description": "Vestorly Auth Token"
    }
  },
  "additionalProperties": false,
  "required": [
    "vestorly_auth"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/MemberReports"
}
```
## Operation: findMembers
Returns all members

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "vestorly_auth": {
      "type": "string",
      "format": "string",
      "description": "Vestorly Auth Token"
    }
  },
  "additionalProperties": false,
  "required": [
    "vestorly_auth"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Members"
}
```
## Operation: createMember
Create a new member in the Vestorly Platform

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "vestorly_auth": {
      "type": "string",
      "description": "Vestorly Auth Token"
    },
    "member": {
      "$ref": "#/definitions/Member"
    }
  },
  "additionalProperties": false,
  "required": [
    "vestorly_auth",
    "member"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Memberresponse"
}
```
## Operation: findMemberByID
Returns a single member

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "format": "string",
      "description": "Mongo ID of member to fetch"
    },
    "vestorly_auth": {
      "type": "string",
      "format": "string",
      "description": "Vestorly Auth Token"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "vestorly_auth"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Memberresponse"
}
```
## Operation: updateMemberByID
Updates a single member

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "format": "string",
      "description": "Mongo ID of member to fetch"
    },
    "vestorly_auth": {
      "type": "string",
      "format": "string",
      "description": "Vestorly Auth Token"
    },
    "member": {
      "$ref": "#/definitions/Member"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "vestorly_auth",
    "member"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Memberresponse"
}
```
## Operation: findNewsletterSettings
Returns all newsletter settings

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "vestorly_auth": {
      "type": "string",
      "description": "Vestorly Auth Token"
    }
  },
  "additionalProperties": false,
  "required": [
    "vestorly_auth"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/NewsletterSettings"
}
```
## Operation: findNewsletterSettingsByID
Returns a single newsletter settings if the user has access

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Mongo ID of newsletter settings to fetch"
    },
    "vestorly_auth": {
      "type": "string",
      "description": "Vestorly Auth Token"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "vestorly_auth"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Newslettersettingresponse"
}
```
## Operation: updateNewsletterSettingsByID
Update a single newsletter setting by ID

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Mongo ID of newsletter settings to update"
    },
    "vestorly_auth": {
      "type": "string",
      "description": "Vestorly Auth Token"
    },
    "newsletter_setting": {
      "$ref": "#/definitions/NewsletterSettingsInput"
    }
  },
  "additionalProperties": false,
  "required": [
    "id",
    "vestorly_auth",
    "newsletter_setting"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Newslettersettingresponse"
}
```
## Operation: findNewsletters
Returns all newsletters

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "vestorly_auth": {
      "type": "string",
      "description": "Vestorly Auth Token"
    }
  },
  "additionalProperties": false,
  "required": [
    "vestorly_auth"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Newsletters"
}
```
## Operation: getNewsletterByID
Get a newsletter by ID

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "vestorly_auth": {
      "type": "string",
      "description": "Vestorly Auth Token"
    },
    "id": {
      "type": "string",
      "description": "Mongo ID of event to get"
    }
  },
  "additionalProperties": false,
  "required": [
    "vestorly_auth",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Newsletterresponse"
}
```
## Operation: updateNewsletterByID
Updates a newsletter

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "vestorly_auth": {
      "type": "string",
      "description": "Vestorly Auth Token"
    },
    "id": {
      "type": "string",
      "description": "Mongo ID of event to update"
    },
    "newsletter": {
      "$ref": "#/definitions/NewsletterInput"
    }
  },
  "additionalProperties": false,
  "required": [
    "vestorly_auth",
    "id",
    "newsletter"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Newsletterresponse"
}
```
## Operation: findPosts
Query all posts

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "vestorly_auth": {
      "type": "string",
      "description": "Vestorly Auth Token"
    },
    "text_query": {
      "type": "string",
      "description": "Filter post by parameters"
    },
    "external_url": {
      "type": "string",
      "description": "Filter by External URL"
    },
    "is_published": {
      "type": "string",
      "description": "Filter by is_published boolean"
    }
  },
  "additionalProperties": false,
  "required": [
    "vestorly_auth"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Posts"
}
```
## Operation: createPost
Create a new post in the Vestorly Platform

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "vestorly_auth": {
      "type": "string",
      "description": "Vestorly Auth Token"
    },
    "post": {
      "$ref": "#/definitions/PostInput"
    }
  },
  "additionalProperties": false,
  "required": [
    "vestorly_auth",
    "post"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Postresponse"
}
```
## Operation: getPostByID
Query all posts

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "vestorly_auth": {
      "type": "string",
      "description": "Vestorly Auth Token"
    },
    "id": {
      "type": "string",
      "description": "ID of post to fetch"
    }
  },
  "additionalProperties": false,
  "required": [
    "vestorly_auth",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Postresponse"
}
```
## Operation: updatePostByID
Update A Post

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "vestorly_auth": {
      "type": "string",
      "description": "Vestorly Auth Token"
    },
    "id": {
      "type": "string",
      "description": "id of post to update"
    },
    "post": {
      "$ref": "#/definitions/Post"
    }
  },
  "additionalProperties": false,
  "required": [
    "vestorly_auth",
    "id",
    "post"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Postresponse"
}
```
## Operation: login
Login To Vestorly Platform

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string",
      "description": "Username in the vestorly platform"
    },
    "password": {
      "type": "string",
      "description": "Password in Vestorly Platform"
    }
  },
  "additionalProperties": false,
  "required": [
    "username",
    "password"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Session"
}
```
## Operation: logout
Logout of the vestorly platform

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "vestorly_auth": {
      "type": "string",
      "description": "Authenication token"
    },
    "id": {
      "type": "string",
      "description": "ID of pet to session"
    }
  },
  "additionalProperties": false,
  "required": [
    "vestorly_auth",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/SessionLogoutResponse"
}
```
## Operation: findSources
Returns all sources

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "vestorly_auth": {
      "type": "string",
      "description": "Vestorly Auth Token"
    }
  },
  "additionalProperties": false,
  "required": [
    "vestorly_auth"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Sources"
}
```
## Operation: createSource
Create source

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "vestorly_auth": {
      "type": "string",
      "description": "Vestorly Auth Token"
    },
    "source": {
      "$ref": "#/definitions/SourceInput"
    }
  },
  "additionalProperties": false,
  "required": [
    "vestorly_auth",
    "source"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Sourceresponse"
}
```
## Operation: getSourceByID
Get Source By ID

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "vestorly_auth": {
      "type": "string",
      "description": "Vestorly Auth Token"
    },
    "id": {
      "type": "string",
      "description": "ID of source to fetch"
    }
  },
  "additionalProperties": false,
  "required": [
    "vestorly_auth",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Sourceresponse"
}
```
## Operation: updateSourceByID
Update Source By ID

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "vestorly_auth": {
      "type": "string",
      "description": "Vestorly Auth Token"
    },
    "id": {
      "type": "string",
      "description": "ID of source to fetch"
    },
    "source": {
      "$ref": "#/definitions/SourceInput"
    }
  },
  "additionalProperties": false,
  "required": [
    "vestorly_auth",
    "id",
    "source"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Sourceresponse"
}
```
