# @datafire/flat
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
## Operation: getGroupScores
Get the list of scores shared with a group.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "group": {
      "type": "string",
      "description": "Unique identifier of the group"
    },
    "parent": {
      "type": "string",
      "description": "Filter the score forked from the score id `parent`"
    }
  },
  "additionalProperties": false,
  "required": [
    "group"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ScoreDetails"
  },
  "type": "array"
}
```
## Operation: getAuthenticatedUser
Get details about the current authenticated User.


### Input Schema
```json
{}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserDetails"
}
```
## Operation: createScore
Use this API method to **create a new music score in the current User account**. You will need a MusicXML 3 (`vnd.recordare.musicxml` or `vnd.recordare.musicxml+xml`) or a MIDI (`audio/midi`) file to create the new Flat document.

This API call will automatically create the first revision of the document, the score can be modified by the using our web application or by uploading a new revision of this file (`POST /v2/scores/{score}/revisions/{revision}`).

The currently authenticated user will be granted owner of the file and will be able to add other collaborators (users and groups).


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "body": {
      "$ref": "#/definitions/ScoreCreation"
    }
  },
  "additionalProperties": false,
  "required": [
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ScoreDetails"
}
```
## Operation: deleteScore
This API call will schedule the deletion of the score, its revisions, and whole history.
The user calling this API method must have the `aclAdmin` rights on this document to process this action.
The score won't be accessible anymore after calling this method and the user's quota will directly be updated.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "score": {
      "type": "string",
      "description": "Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "score"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getScore
Get the details of a score identified by the `score` parameter in the URL.
The currently authenticated user must have at least a read access to the document to use this API call.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "score": {
      "type": "string",
      "description": "Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n"
    },
    "sharingKey": {
      "type": "string",
      "description": "This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "score"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ScoreDetails"
}
```
## Operation: editScore
This API method allows you to change the metadata of a score document (e.g. its `title` or `privacy`), all the properties are optional.

To edit the file itself, create a new revision using the appropriate method (`POST /v2/scores/{score}/revisions/{revision}`).


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "score": {
      "type": "string",
      "description": "Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n"
    },
    "body": {
      "$ref": "#/definitions/ScoreModification"
    }
  },
  "additionalProperties": false,
  "required": [
    "score"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ScoreDetails"
}
```
## Operation: getScoreCollaborators
This API call will list the different collaborators of a score and their rights on the document. The returned list will at least contain the owner of the document.

Collaborators can be a single user (the object `user` will be populated) or a group (the object `group` will be populated).


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "score": {
      "type": "string",
      "description": "Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n"
    },
    "sharingKey": {
      "type": "string",
      "description": "This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "score"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ScoreCollaborator"
  },
  "type": "array"
}
```
## Operation: addScoreCollaborator
Share a score with a single user or a group. This API call allows to add, invite and update the collaborators of a document.
- To add an existing Flat user to the document, specify its unique identifier in the `user` property.
- To invite an external user to the document, specify its email in the `userEmail` property.
- To add a Flat group to the document, specify its unique identifier in the `group` property.
- To update an existing collaborator, process the same request with different rights.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "score": {
      "type": "string",
      "description": "Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n"
    },
    "body": {
      "$ref": "#/definitions/ScoreCollaboratorCreation"
    }
  },
  "additionalProperties": false,
  "required": [
    "score",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ScoreCollaborator"
}
```
## Operation: removeScoreCollaborator
Remove the specified collaborator from the score


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "score": {
      "type": "string",
      "description": "Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n"
    },
    "collaborator": {
      "type": "string",
      "description": "Unique identifier of a **collaborator permission**, or unique identifier of a **User**, or unique identifier of a **Group**\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "score",
    "collaborator"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: getScoreCollaborator
Get the information about a collaborator (User or Group).


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "score": {
      "type": "string",
      "description": "Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n"
    },
    "collaborator": {
      "type": "string",
      "description": "Unique identifier of a **collaborator permission**, or unique identifier of a **User**, or unique identifier of a **Group**\n"
    },
    "sharingKey": {
      "type": "string",
      "description": "This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "score",
    "collaborator"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ScoreCollaborator"
}
```
## Operation: getScoreComments
This method lists the different comments added on a music score (documents and inline) sorted by their post dates.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "score": {
      "type": "string",
      "description": "Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n"
    },
    "sharingKey": {
      "type": "string",
      "description": "This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "score"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ScoreComment"
  },
  "type": "array"
}
```
## Operation: postScoreComment
Post a document or a contextualized comment on a document.

Please note that this method includes an anti-spam system for public scores. We don't guarantee that your comments will be accepted and displayed to end-user. Comments are be blocked by returning a `403` HTTP error and hidden from other users when the `spam` property is `true`.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "score": {
      "type": "string",
      "description": "Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n"
    },
    "sharingKey": {
      "type": "string",
      "description": "This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n"
    },
    "body": {
      "$ref": "#/definitions/ScoreCommentCreation"
    }
  },
  "additionalProperties": false,
  "required": [
    "score",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ScoreComment"
}
```
## Operation: deleteScoreComment
Delete a comment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "score": {
      "type": "string",
      "description": "Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n"
    },
    "comment": {
      "type": "string",
      "description": "Unique identifier of a sheet music comment\n"
    },
    "sharingKey": {
      "type": "string",
      "description": "This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "score",
    "comment"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: updateScoreComment
Update an existing comment

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "score": {
      "type": "string",
      "description": "Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n"
    },
    "comment": {
      "type": "string",
      "description": "Unique identifier of a sheet music comment\n"
    },
    "sharingKey": {
      "type": "string",
      "description": "This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n"
    },
    "body": {
      "$ref": "#/definitions/ScoreCommentUpdate"
    }
  },
  "additionalProperties": false,
  "required": [
    "score",
    "comment",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ScoreComment"
}
```
## Operation: markScoreCommentUnresolved
Mark the comment as unresolved

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "score": {
      "type": "string",
      "description": "Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n"
    },
    "comment": {
      "type": "string",
      "description": "Unique identifier of a sheet music comment\n"
    },
    "sharingKey": {
      "type": "string",
      "description": "This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "score",
    "comment"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: markScoreCommentResolved
Mark the comment as resolved

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "score": {
      "type": "string",
      "description": "Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n"
    },
    "comment": {
      "type": "string",
      "description": "Unique identifier of a sheet music comment\n"
    },
    "sharingKey": {
      "type": "string",
      "description": "This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "score",
    "comment"
  ]
}
```
### Output Schema
```json
{}
```
## Operation: forkScore
This API call will make a copy of the last revision of the specified score and create a new score. The copy of the score will have a privacy set to `private`.

When using a [Flat for Education](https://flat.io/edu) account, the inline and contextualized comments will be accessible in the child document.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "score": {
      "type": "string",
      "description": "Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n"
    },
    "sharingKey": {
      "type": "string",
      "description": "This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n"
    },
    "body": {
      "$ref": "#/definitions/ScoreFork"
    }
  },
  "additionalProperties": false,
  "required": [
    "score",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ScoreDetails"
}
```
## Operation: getScoreRevisions
When creating a score or saving a new version of a score, a revision is created in our storage. This method allows you to list all of them, sorted by last modification.

Depending the plan of the account, this list can be trunked to the few last revisions.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "score": {
      "type": "string",
      "description": "Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n"
    },
    "sharingKey": {
      "type": "string",
      "description": "This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "score"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ScoreRevision"
  },
  "type": "array"
}
```
## Operation: createScoreRevision
Update a score by uploading a new revision for this one.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "score": {
      "type": "string",
      "description": "Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n"
    },
    "body": {
      "$ref": "#/definitions/ScoreRevisionCreation"
    }
  },
  "additionalProperties": false,
  "required": [
    "score",
    "body"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ScoreRevision"
}
```
## Operation: getScoreRevision
When creating a score or saving a new version of a score, a revision is created in our storage. This method allows you to get a specific
revision metadata.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "score": {
      "type": "string",
      "description": "Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n"
    },
    "revision": {
      "type": "string",
      "description": "Unique identifier of a score revision. You can use `last` to fetch the information related to the last version created.\n"
    },
    "sharingKey": {
      "type": "string",
      "description": "This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "score",
    "revision"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ScoreRevision"
}
```
## Operation: getScoreRevisionData
Retrieve the file corresponding to a score revision (the following formats are available: Flat JSON/Adagio JSON `json`, MusicXML
`mxl`/`xml`, MP3 `mp3`, WAV `wav`, MIDI `midi`, or a tumbnail of the first page `thumbnail.png`).


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "score": {
      "type": "string",
      "description": "Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).\n"
    },
    "revision": {
      "type": "string",
      "description": "Unique identifier of a score revision. You can use `last` to fetch the information related to the last version created.\n"
    },
    "sharingKey": {
      "type": "string",
      "description": "This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.\n"
    },
    "format": {
      "type": "string",
      "description": "The format of the file you will retrieve",
      "enum": [
        "json",
        "mxl",
        "xml",
        "mp3",
        "wav",
        "midi",
        "thumbnail.png"
      ]
    },
    "onlyCached": {
      "type": "boolean",
      "description": "Only return files already generated and cached in Flat's production\ncache. If the file is not availabe, a 404 will be returned\n"
    },
    "parts": {
      "type": "string",
      "description": "An optional a set of parts to be exported. This parameter must be\nspecified with a list of integers. For example \"1,2,5\".\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "score",
    "revision",
    "format"
  ]
}
```
### Output Schema
```json
{
  "format": "binary",
  "type": "string"
}
```
## Operation: getUser
Get a public profile of a Flat User.


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "This route parameter is the unique identifier of the user. You can specify an email instead of an unique identifier. If you are executing this request authenticated, you can use `me` as a value instead of the current User unique identifier to work on the current authenticated user.\n"
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/UserPublic"
}
```
## Operation: gerUserLikes
List liked scores

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Unique identifier of a Flat user. If you authenticated, you can use `me` to refer to the current user.\n"
    },
    "ids": {
      "type": "boolean",
      "description": "Return only the identifiers of the scores"
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ScoreDetails"
  },
  "type": "array"
}
```
## Operation: getUserScores
Get the list of scores owned by the User


### Input Schema
```json
{
  "type": "object",
  "properties": {
    "user": {
      "type": "string",
      "description": "Unique identifier of a Flat user. If you authenticated, you can use `me` to refer to the current user.\n"
    },
    "parent": {
      "type": "string",
      "description": "Filter the score forked from the score id `parent`"
    }
  },
  "additionalProperties": false,
  "required": [
    "user"
  ]
}
```
### Output Schema
```json
{
  "items": {
    "$ref": "#/definitions/ScoreDetails"
  },
  "type": "array"
}
```
