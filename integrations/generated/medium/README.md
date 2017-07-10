# @datafire/medium
Medium’s unofficial API documentation using OpenAPI specification.

# Official API
Official API document can also be viewed for most up to date API spec at [https://github.com/Medium/medium-api-docs](https://github.com/Medium/medium-api-docs).

Developer Blog - [Welcome to the Medium API](https://medium.com/blog/welcome-to-the-medium-api-3418f956552)


## Operation: oauthCallback


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "code": {
      "title": "code",
      "type": "string"
    }
  },
  "required": [
    "code"
  ]
}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: oauthRefresh


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "properties": {
    "access_token": {
      "type": "string"
    },
    "refresh_token": {
      "type": "string"
    },
    "token_type": {
      "type": "string"
    },
    "scope": {
      "type": "string"
    },
    "expiration": {
      "type": "string"
    }
  }
}
```
## Operation: me.get
Returns details of the user who has granted permission to the application.

### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserResponse"
}
```
## Operation: publications.publicationId.contributors.get
This endpoint returns a list of contributors for a given publication. In other words, a list of Medium users who are allowed to publish under a publication, as well as a description of their exact role in the publication (for now, either an editor or a writer).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "publicationId": {
      "type": "string",
      "description": "A unique identifier for the publication."
    }
  },
  "additionalProperties": false,
  "required": [
    "publicationId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ContibutorResponse"
}
```
## Operation: publications.publicationId.posts.post
creating a post and associating it with a publication on Medium. The request also shows this association, considering posts a collection of resources under a publication

There are additional rules around publishing that each request to this API must respect:
  - If the authenticated user is an 'editor' for the publication, they can create posts with any publish status. Posts published as 'public' or 'unlisted' will appear in collection immediately, while posts created as 'draft' will remain in pending state under publication.
  - If the authenticated user is a 'writer' for the chosen publication, they can only create a post as a 'draft'. That post will remain in pending state under publication until an editor for the publication approves it.
  - If the authenticated user is neither a 'writer' nor an 'editor', they are not allowed to create any posts in a publication.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "publicationId": {
      "type": "string",
      "description": "Here publicationId is the id of the publication the post is being created under. The publicationId can be acquired from the API for listing user’s publications."
    },
    "body": {
      "$ref": "#/definitions/Post"
    }
  },
  "additionalProperties": false,
  "required": [
    "publicationId",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PostDetails"
}
```
## Operation: users.authorId.posts.post
Creates a post on the authenticated user’s profile.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "authorId": {
      "type": "string",
      "description": "authorId is the user id of the authenticated user."
    },
    "body": {
      "$ref": "#/definitions/Post"
    }
  },
  "additionalProperties": false,
  "required": [
    "authorId",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/PostDetails"
}
```
## Operation: users.userId.publications.get
Returns a full list of publications that the user is related to in some way. This includes all publications the user is subscribed to, writes to, or edits.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "A unique identifier for the user."
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
{
  "$ref": "#/definitions/PublicationResponse"
}
```
