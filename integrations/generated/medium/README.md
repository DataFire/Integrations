# @datafire/medium

Client library for Medium.com

## Installation and Usage
```bash
npm install --save @datafire/medium
```
```js
let medium = require('@datafire/medium').create({
  BearerToken: "",
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
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

#### Input
* input `object`
  * code **required** `string`

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### oauthRefresh
Exchange a refresh_token for an access_token


```js
medium.oauthRefresh(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`
  * access_token `string`
  * refresh_token `string`
  * token_type `string`
  * scope `string`
  * expiration `string`

### me.get
Returns details of the user who has granted permission to the application.


```js
medium.me.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [UserResponse](#userresponse)

### publications.publicationId.contributors.get
This endpoint returns a list of contributors for a given publication. In other words, a list of Medium users who are allowed to publish under a publication, as well as a description of their exact role in the publication (for now, either an editor or a writer).


```js
medium.publications.publicationId.contributors.get({
  "publicationId": ""
}, context)
```

#### Input
* input `object`
  * publicationId **required** `string`: A unique identifier for the publication.

#### Output
* output [ContibutorResponse](#contibutorresponse)

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

#### Input
* input `object`
  * publicationId **required** `string`: Here publicationId is the id of the publication the post is being created under. The publicationId can be acquired from the API for listing user’s publications.
  * body **required** [Post](#post)

#### Output
* output [PostDetails](#postdetails)

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

#### Input
* input `object`
  * authorId **required** `string`: authorId is the user id of the authenticated user.
  * body **required** [Post](#post)

#### Output
* output [PostDetails](#postdetails)

### users.userId.publications.get
Returns a full list of publications that the user is related to in some way. This includes all publications the user is subscribed to, writes to, or edits.


```js
medium.users.userId.publications.get({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: A unique identifier for the user.

#### Output
* output [PublicationResponse](#publicationresponse)



## Definitions

### Contibutor
* Contributor `object`: Contibutor
  * publicationId `string`: An ID for the publication. This can be lifted from response of publications above
  * role `string`: Role of the user identified by userId in the publication identified by `publicationId`. *editor* or *writer*
  * userId `string`: A user ID of the contributor.

### ContibutorResponse
* Contributors list for a publication `object`: list of contributors for a given publication
  * data `array`
    * items [Contibutor](#contibutor)

### Post
* Post `object`
  * canonicalUrl `string`: The original home of this content, if it was originally published elsewhere.
  * content **required** `string`: The body of the post, in a valid, semantic, HTML fragment, or Markdown. Further markups may be supported in the future. For a full list of accepted HTML tags, see here. If you want your title to appear on the post page, you must also include it as part of the post content.
  * contentFormat **required** `string`: The format of the "content" field. There are two valid values, "html", and "markdown"
  * license `string` (values: all-rights-reserved, cc-40-by, cc-40-by-sa, cc-40-by-nd, cc-40-by-nc, cc-40-by-nc-nd, cc-40-by-nc-sa, cc-40-zero, public-domain): The license of the post. Valid values are `all-rights-reserved`, `cc-40-by`, `cc-40-by-sa`, `cc-40-by-nd`, `cc-40-by-nc`, `cc-40-by-nc-nd`, `cc-40-by-nc-sa`, `cc-40-zero`, `public-domain`. The default is `all-rights-reserved`.
  * publishStatus `string` (values: public, draft, unlisted): The status of the post. Valid values are `public`, `draft`, or `unlisted`. The default is `public`.
  * tags `array`: Tags to classify the post. Only the first three will be used. Tags longer than 25 characters will be ignored.
    * items `string`
  * title **required** `string`: The title of the post. Note that this title is used for SEO and when rendering the post as a listing, but will not appear in the actual post—for that, the title must be specified in the content field as well. Titles longer than 100 characters will be ignored. In that case, a title will be synthesized from the first content in the post when it is published.

### PostDetails
* Post Details `object`: Details of Post
  * authorId `string`: The userId of the post’s author
  * canonicalUrl `string`: The canonical URL of the post. If canonicalUrl was not specified in the creation of the post, this field will not be present.
  * id `string`: A unique identifier for the post.
  * license `string` (values: all-rights-reserved, cc-40-by, cc-40-by-sa, cc-40-by-nd, cc-40-by-nc, cc-40-by-nc-nd, cc-40-by-nc-sa, cc-40-zero, public-domain): The license of the post.
  * licenseUrl `string`: The URL to the license of the post.
  * publishStatus `string`: The publish status of the post.
  * publishedAt `string`: The post’s published date. If created as a draft, this field will not be present.
  * tags `array`: The post’s tags
    * items `string`
  * title `string`: The post’s title
  * url `string`: The URL of the post on Medium

### Publication
* Publication Info `object`: Publications provide a way for authors to work collaboratively within a common narrative framework, brand or point of view.
  * description `string`: Short description of the publication
  * id `string`: A unique identifier for the publication.
  * imageUrl `string`: The URL to the publication’s image/logo
  * name `string`: The publication’s name on Medium.
  * url `string`: The URL to the publication’s homepage

### PublicationResponse
* Publication List Container `object`: Container object for publication list.
  * data `array`
    * items [Publication](#publication)

### User
* User `object`
  * id `string`: A unique identifier for the user.
  * imageUrl `string`: The URL to the user’s avatar on Medium
  * name `string`: The user’s name on Medium.
  * url `string`: The URL to the user’s profile on Medium
  * username `string`: The user’s username on Medium.

### UserResponse
* User Container `object`: Container object for user info
  * data [User](#user)


