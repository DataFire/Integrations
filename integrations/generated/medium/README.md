# @datafire/medium

Client library for Medium.com

## Installation and Usage
```bash
npm install --save datafire @datafire/medium
```

```js
let datafire = require('datafire');
let medium = require('@datafire/medium').create({
  BearerToken: "",
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

medium.me.get({}).then(data => {
  console.log(data);
})
```

## Description
Medium’s unofficial API documentation using OpenAPI specification.

# Official API
Official API document can also be viewed for most up to date API spec at [https://github.com/Medium/medium-api-docs](https://github.com/Medium/medium-api-docs).

Developer Blog - [Welcome to the Medium API](https://medium.com/blog/welcome-to-the-medium-api-3418f956552)


## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
medium.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
medium.oauthRefresh(null, context)
```


### me.get
Returns details of the user who has granted permission to the application.


```js
medium.me.get(null, context)
```


### publications.publicationId.contributors.get
This endpoint returns a list of contributors for a given publication. In other words, a list of Medium users who are allowed to publish under a publication, as well as a description of their exact role in the publication (for now, either an editor or a writer).


```js
medium.publications.publicationId.contributors.get({
  "publicationId": ""
}, context)
```

#### Parameters
* publicationId (string) **required** - A unique identifier for the publication.

### publications.publicationId.posts.post
creating a post and associating it with a publication on Medium. The request also shows this association, considering posts a collection of resources under a publication

There are additional rules around publishing that each request to this API must respect:
  - If the authenticated user is an 'editor' for the publication, they can create posts with any publish status. Posts published as 'public' or 'unlisted' will appear in collection immediately, while posts created as 'draft' will remain in pending state under publication.
  - If the authenticated user is a 'writer' for the chosen publication, they can only create a post as a 'draft'. That post will remain in pending state under publication until an editor for the publication approves it.
  - If the authenticated user is neither a 'writer' nor an 'editor', they are not allowed to create any posts in a publication.



```js
medium.publications.publicationId.posts.post({
  "publicationId": "",
  "body": {
    "title": "",
    "contentFormat": "",
    "content": ""
  }
}, context)
```

#### Parameters
* publicationId (string) **required** - Here publicationId is the id of the publication the post is being created under. The publicationId can be acquired from the API for listing user’s publications.
* body (object) **required**

### users.authorId.posts.post
Creates a post on the authenticated user’s profile.


```js
medium.users.authorId.posts.post({
  "authorId": "",
  "body": {
    "title": "",
    "contentFormat": "",
    "content": ""
  }
}, context)
```

#### Parameters
* authorId (string) **required** - authorId is the user id of the authenticated user.
* body (object) **required**

### users.userId.publications.get
Returns a full list of publications that the user is related to in some way. This includes all publications the user is subscribed to, writes to, or edits.


```js
medium.users.userId.publications.get({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - A unique identifier for the user.

