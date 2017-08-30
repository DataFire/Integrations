# @datafire/flat

Client library for Flat

## Installation and Usage
```bash
npm install --save datafire @datafire/flat
```

```js
let datafire = require('datafire');
let flat = require('@datafire/flat').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

flat.getGroupScores({}).then(data => {
  console.log(data);
})
```

## Description
The Flat API allows you to easily extend the abilities of the [Flat Platform](https://flat.io), with a wide range of use cases including the following:

* Creating and importing new music scores using MusicXML or MIDI files
* Browsing, updating, copying, exporting the user's scores (for example in MP3, WAV or MIDI)
* Managing educational resources with Flat for Education: creating & updating the organization accounts, the classes, rosters and assignments.

The Flat API is built on HTTP. Our API is RESTful It has predictable resource URLs. It returns HTTP response codes to indicate errors. It also accepts and returns JSON in the HTTP body.
The [schema](/swagger.yaml) of this API follows the [OpenAPI Initiative (OAI) specification](https://www.openapis.org/), you can use and work with [compatible Swagger tools](http://swagger.io/open-source-integrations/).
This API features Cross-Origin Resource Sharing (CORS) implemented in compliance with [W3C spec](https://www.w3.org/TR/cors/).

You can use your favorite HTTP/REST library for your programming language to use Flat's API. This specification and reference is [available on Github](https://github.com/FlatIO/api-reference).

Getting Started and learn more:

* [API Overview and interoduction](https://flat.io/developers/docs/api/)
* [Authentication (Personal Access Tokens or OAuth2)](https://flat.io/developers/docs/api/authentication.html)
* [SDKs](https://flat.io/developers/docs/api/sdks.html)
* [Rate Limits](https://flat.io/developers/docs/api/rate-limits.html)
* [Changelog](https://flat.io/developers/docs/api/changelog.html)


## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
flat.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
flat.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### getGroupScores
Get the list of scores shared with a group.



```js
flat.getGroupScores({
  "group": ""
}, context)
```

#### Parameters
* group (string) **required** - Unique identifier of the group
* parent (string) - Filter the score forked from the score id `parent`

### getAuthenticatedUser
Get details about the current authenticated User.



```js
flat.getAuthenticatedUser(null, context)
```

#### Parameters
*This action has no parameters*

### createScore
Use this API method to **create a new music score in the current User account**. You will need a MusicXML 3 (`vnd.recordare.musicxml` or `vnd.recordare.musicxml+xml`) or a MIDI (`audio/midi`) file to create the new Flat document.

This API call will automatically create the first revision of the document, the score can be modified by the using our web application or by uploading a new revision of this file (`POST /v2/scores/{score}/revisions/{revision}`).

The currently authenticated user will be granted owner of the file and will be able to add other collaborators (users and groups).



```js
flat.createScore({
  "body": {
    "privacy": ""
  }
}, context)
```

#### Parameters
* body (object) **required** - A new created score

### deleteScore
This API call will schedule the deletion of the score, its revisions, and whole history.
The user calling this API method must have the `aclAdmin` rights on this document to process this action.
The score won't be accessible anymore after calling this method and the user's quota will directly be updated.



```js
flat.deleteScore({
  "score": ""
}, context)
```

#### Parameters
* score (string) **required** - Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).

### getScore
Get the details of a score identified by the `score` parameter in the URL.
The currently authenticated user must have at least a read access to the document to use this API call.



```js
flat.getScore({
  "score": ""
}, context)
```

#### Parameters
* score (string) **required** - Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
* sharingKey (string) - This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.

### editScore
This API method allows you to change the metadata of a score document (e.g. its `title` or `privacy`), all the properties are optional.

To edit the file itself, create a new revision using the appropriate method (`POST /v2/scores/{score}/revisions/{revision}`).



```js
flat.editScore({
  "score": ""
}, context)
```

#### Parameters
* score (string) **required** - Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
* body (object) - Edit the score metadata

### getScoreCollaborators
This API call will list the different collaborators of a score and their rights on the document. The returned list will at least contain the owner of the document.

Collaborators can be a single user (the object `user` will be populated) or a group (the object `group` will be populated).



```js
flat.getScoreCollaborators({
  "score": ""
}, context)
```

#### Parameters
* score (string) **required** - Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
* sharingKey (string) - This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.

### addScoreCollaborator
Share a score with a single user or a group. This API call allows to add, invite and update the collaborators of a document.
- To add an existing Flat user to the document, specify its unique identifier in the `user` property.
- To invite an external user to the document, specify its email in the `userEmail` property.
- To add a Flat group to the document, specify its unique identifier in the `group` property.
- To update an existing collaborator, process the same request with different rights.



```js
flat.addScoreCollaborator({
  "score": "",
  "body": {}
}, context)
```

#### Parameters
* score (string) **required** - Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
* body (object) **required** - A collaborator of a score. The `userEmail` and `group` are only available if the requesting user is a collaborator of the related score (in this case these permissions will eventualy not be listed and exposed publicly).

### removeScoreCollaborator
Remove the specified collaborator from the score



```js
flat.removeScoreCollaborator({
  "score": "",
  "collaborator": ""
}, context)
```

#### Parameters
* score (string) **required** - Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
* collaborator (string) **required** - Unique identifier of a **collaborator permission**, or unique identifier of a **User**, or unique identifier of a **Group**

### getScoreCollaborator
Get the information about a collaborator (User or Group).



```js
flat.getScoreCollaborator({
  "score": "",
  "collaborator": ""
}, context)
```

#### Parameters
* score (string) **required** - Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
* collaborator (string) **required** - Unique identifier of a **collaborator permission**, or unique identifier of a **User**, or unique identifier of a **Group**
* sharingKey (string) - This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.

### getScoreComments
This method lists the different comments added on a music score (documents and inline) sorted by their post dates.


```js
flat.getScoreComments({
  "score": ""
}, context)
```

#### Parameters
* score (string) **required** - Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
* sharingKey (string) - This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.

### postScoreComment
Post a document or a contextualized comment on a document.

Please note that this method includes an anti-spam system for public scores. We don't guarantee that your comments will be accepted and displayed to end-user. Comments are be blocked by returning a `403` HTTP error and hidden from other users when the `spam` property is `true`.



```js
flat.postScoreComment({
  "score": "",
  "body": {
    "comment": ""
  }
}, context)
```

#### Parameters
* score (string) **required** - Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
* sharingKey (string) - This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.
* body (object) **required** - Creation of a comment

### deleteScoreComment
Delete a comment


```js
flat.deleteScoreComment({
  "score": "",
  "comment": ""
}, context)
```

#### Parameters
* score (string) **required** - Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
* comment (string) **required** - Unique identifier of a sheet music comment
* sharingKey (string) - This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.

### updateScoreComment
Update an existing comment


```js
flat.updateScoreComment({
  "score": "",
  "comment": "",
  "body": {}
}, context)
```

#### Parameters
* score (string) **required** - Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
* comment (string) **required** - Unique identifier of a sheet music comment
* sharingKey (string) - This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.
* body (object) **required** - Update of a comment

### markScoreCommentUnresolved
Mark the comment as unresolved


```js
flat.markScoreCommentUnresolved({
  "score": "",
  "comment": ""
}, context)
```

#### Parameters
* score (string) **required** - Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
* comment (string) **required** - Unique identifier of a sheet music comment
* sharingKey (string) - This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.

### markScoreCommentResolved
Mark the comment as resolved


```js
flat.markScoreCommentResolved({
  "score": "",
  "comment": ""
}, context)
```

#### Parameters
* score (string) **required** - Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
* comment (string) **required** - Unique identifier of a sheet music comment
* sharingKey (string) - This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.

### forkScore
This API call will make a copy of the last revision of the specified score and create a new score. The copy of the score will have a privacy set to `private`.

When using a [Flat for Education](https://flat.io/edu) account, the inline and contextualized comments will be accessible in the child document.



```js
flat.forkScore({
  "score": "",
  "body": {}
}, context)
```

#### Parameters
* score (string) **required** - Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
* sharingKey (string) - This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.
* body (object) **required** - Options to fork the score

### getScoreRevisions
When creating a score or saving a new version of a score, a revision is created in our storage. This method allows you to list all of them, sorted by last modification.

Depending the plan of the account, this list can be trunked to the few last revisions.



```js
flat.getScoreRevisions({
  "score": ""
}, context)
```

#### Parameters
* score (string) **required** - Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
* sharingKey (string) - This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.

### createScoreRevision
Update a score by uploading a new revision for this one.



```js
flat.createScoreRevision({
  "score": "",
  "body": {
    "data": ""
  }
}, context)
```

#### Parameters
* score (string) **required** - Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
* body (object) **required** - A new created revision

### getScoreRevision
When creating a score or saving a new version of a score, a revision is created in our storage. This method allows you to get a specific
revision metadata.



```js
flat.getScoreRevision({
  "score": "",
  "revision": ""
}, context)
```

#### Parameters
* score (string) **required** - Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
* revision (string) **required** - Unique identifier of a score revision. You can use `last` to fetch the information related to the last version created.
* sharingKey (string) - This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.

### getScoreRevisionData
Retrieve the file corresponding to a score revision (the following formats are available: Flat JSON/Adagio JSON `json`, MusicXML
`mxl`/`xml`, MP3 `mp3`, WAV `wav`, MIDI `midi`, or a tumbnail of the first page `thumbnail.png`).



```js
flat.getScoreRevisionData({
  "score": "",
  "revision": "",
  "format": ""
}, context)
```

#### Parameters
* score (string) **required** - Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
* revision (string) **required** - Unique identifier of a score revision. You can use `last` to fetch the information related to the last version created.
* sharingKey (string) - This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.
* format (string) **required** - The format of the file you will retrieve
* onlyCached (boolean) - Only return files already generated and cached in Flat's production
* parts (string) - An optional a set of parts to be exported. This parameter must be

### getUser
Get a public profile of a Flat User.



```js
flat.getUser({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - This route parameter is the unique identifier of the user. You can specify an email instead of an unique identifier. If you are executing this request authenticated, you can use `me` as a value instead of the current User unique identifier to work on the current authenticated user.

### gerUserLikes
List liked scores


```js
flat.gerUserLikes({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Unique identifier of a Flat user. If you authenticated, you can use `me` to refer to the current user.
* ids (boolean) - Return only the identifiers of the scores

### getUserScores
Get the list of scores owned by the User



```js
flat.getUserScores({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Unique identifier of a Flat user. If you authenticated, you can use `me` to refer to the current user.
* parent (string) - Filter the score forked from the score id `parent`

