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

flat.createOrganizationUser({}).then(data => {
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

### listClasses
List the classes available for the current user


```js
flat.listClasses({}, context)
```

#### Parameters
* state (string) - Filter the classes by state

### createClass
Classrooms on Flat allow you to create activities with assignments and post content to a specific group.

When creating a class, Flat automatically creates two groups: one for the teachers of the course, one for the students. The creator of this class is automatically added to the teachers group.

If the classsroom is synchronized with another application like Google Classroom, some of the meta information will automatically be updated.

You can add users to this class using `POST /classes/{class}/users/{user}`, they will automatically added to the group based on their role on Flat. Users can also enroll themselves to this class using `POST /classes/enroll/{enrollmentCode}` and the `enrollmentCode` returned in the `ClassDetails` response.



```js
flat.createClass({
  "body": {
    "name": ""
  }
}, context)
```

#### Parameters
* body (object) **required** - Creation of a classroom

### enrollClass
Use this method to join a class using an enrollment code given one of the teacher of this class. This code is also available in the `ClassDetails` returned to the teachers when creating the class or listing / fetching a specific class.

Flat will automatically add the user to the corresponding class group based on this role in the organization.



```js
flat.enrollClass({
  "enrollmentCode": ""
}, context)
```

#### Parameters
* enrollmentCode (string) **required** - The enrollment code, available to the teacher in `ClassDetails`

### getClass
Get the details of a single class


```js
flat.getClass({
  "class": ""
}, context)
```

#### Parameters
* class (string) **required** - Unique identifier of the class

### updateClass
Update the meta information of the class



```js
flat.updateClass({
  "class": ""
}, context)
```

#### Parameters
* class (string) **required** - Unique identifier of the class
* body (object) - Update of a classroom

### activateClass
Mark the class as `active`. This is mainly used for classes synchronized from Clever that are initially with an `inactive` state and hidden in the UI.



```js
flat.activateClass({
  "class": ""
}, context)
```

#### Parameters
* class (string) **required** - Unique identifier of the class

### unarchiveClass
Mark the class as `active`. When this course is synchronized with another app, like Google Classroom, this state will be automatically be updated.



```js
flat.unarchiveClass({
  "class": ""
}, context)
```

#### Parameters
* class (string) **required** - Unique identifier of the class

### archiveClass
Mark the class as `archived`. When this course is synchronized with another app, like Google Classroom, this state will be automatically be updated.



```js
flat.archiveClass({
  "class": ""
}, context)
```

#### Parameters
* class (string) **required** - Unique identifier of the class

### listAssignments
Assignments listing


```js
flat.listAssignments({
  "class": ""
}, context)
```

#### Parameters
* class (string) **required** - Unique identifier of the class

### createAssignment
Use this method as a teacher to create and post a new assignment to a class.

If the class is synchronized with Google Classroom, the assignment will be automatically posted to your Classroom course.



```js
flat.createAssignment({
  "class": ""
}, context)
```

#### Parameters
* class (string) **required** - Unique identifier of the class
* body (object) - Assignment creation details

### copyAssignment
Copy an assignment to a specified class.

If the original assignment has a due date in the past, this new assingment will be created without a due date.

If the new class is synchronized with an external app (e.g. Google Classroom), the copied assignment will also be posted on the external app.



```js
flat.copyAssignment({
  "class": "",
  "assignment": "",
  "body": {
    "classroom": ""
  }
}, context)
```

#### Parameters
* class (string) **required** - Unique identifier of the class
* assignment (string) **required** - Unique identifier of the assignment
* body (object) **required** - Assignment copy operation

### getSubmissions
List the students' submissions


```js
flat.getSubmissions({
  "class": "",
  "assignment": ""
}, context)
```

#### Parameters
* class (string) **required** - Unique identifier of the class
* assignment (string) **required** - Unique identifier of the assignment

### createSubmission
Use this method as a student to create, update and submit a submission related to an assignment. Students can only set `attachments`, `studentComment` and `submit`.

Teachers can use `PUT /classes/{class}/assignments/{assignment}/submissions/{submission}` to update a submission by id.



```js
flat.createSubmission({
  "class": "",
  "assignment": "",
  "body": {}
}, context)
```

#### Parameters
* class (string) **required** - Unique identifier of the class
* assignment (string) **required** - Unique identifier of the assignment
* body (object) **required** - Assignment Submission creation

### getSubmission
Get a student submission


```js
flat.getSubmission({
  "class": "",
  "assignment": "",
  "submission": ""
}, context)
```

#### Parameters
* class (string) **required** - Unique identifier of the class
* assignment (string) **required** - Unique identifier of the assignment
* submission (string) **required** - Unique identifier of the submission

### editSubmission
Use this method as a teacher to update the different submission and give feedback.
Teachers can only set `returnFeedback`



```js
flat.editSubmission({
  "class": "",
  "assignment": "",
  "submission": "",
  "body": {}
}, context)
```

#### Parameters
* class (string) **required** - Unique identifier of the class
* assignment (string) **required** - Unique identifier of the assignment
* submission (string) **required** - Unique identifier of the submission
* body (object) **required** - Assignment Submission creation

### listClassStudentSubmissions
Use this method as a teacher to list all the assignment submissions sent by a student of the class



```js
flat.listClassStudentSubmissions({
  "class": "",
  "user": ""
}, context)
```

#### Parameters
* class (string) **required** - Unique identifier of the class
* user (string) **required** - Unique identifier of the user

### deleteClassUser
This method can be used by a teacher to remove a user from the class, or by a student to leave the classroom.

Warning: Removing a user from the class will remove the associated resources, including the submissions and feedback related to these submissions.



```js
flat.deleteClassUser({
  "class": "",
  "user": ""
}, context)
```

#### Parameters
* class (string) **required** - Unique identifier of the class
* user (string) **required** - Unique identifier of the user

### addClassUser
This method can be used by a teacher of the class to enroll another Flat user into the class.

Only users that are part of your Organization can be enrolled in a class of this same Organization.

When enrolling a user in the class, Flat will automatically add this user to the corresponding Class group, based on this role in the Organization.



```js
flat.addClassUser({
  "class": "",
  "user": ""
}, context)
```

#### Parameters
* class (string) **required** - Unique identifier of the class
* user (string) **required** - Unique identifier of the user

### getGroupDetails
Get group information


```js
flat.getGroupDetails({
  "group": ""
}, context)
```

#### Parameters
* group (string) **required** - Unique identifier of a Flat group

### getGroupScores
Get the list of scores shared with a group.



```js
flat.getGroupScores({
  "group": ""
}, context)
```

#### Parameters
* group (string) **required** - Unique identifier of a Flat group
* parent (string) - Filter the score forked from the score id `parent`

### listGroupUsers
List group's users


```js
flat.listGroupUsers({
  "group": ""
}, context)
```

#### Parameters
* group (string) **required** - Unique identifier of a Flat group

### getAuthenticatedUser
Get details about the current authenticated User.



```js
flat.getAuthenticatedUser(null, context)
```

#### Parameters
*This action has no parameters*

### listOrganizationInvitations
List the organization invitations


```js
flat.listOrganizationInvitations({}, context)
```

#### Parameters
* role (string) - Filter users by role
* limit (integer) - This is the maximum number of objects that may be returned
* next (string) - An opaque string cursor to fetch the next page of data.
* previous (string) - An opaque string cursor to fetch the previous page of data.

### createOrganizationInvitation
This method creates and sends invitation for teachers and admins.

Invitations can only be used by new Flat users or users who are not part of the organization yet.

If the email of the user is already associated to a user of your organization, the API will simply update the role of the existing user and won't send an invitation. In this case, the property `usedBy` will be directly filled with the uniquer identifier of the corresponding user.



```js
flat.createOrganizationInvitation({}, context)
```

#### Parameters
* body (object) - The parameters to create an organization invitation

### removeOrganizationInvitation
Remove an organization invitation


```js
flat.removeOrganizationInvitation({
  "invitation": ""
}, context)
```

#### Parameters
* invitation (string) **required** - Unique identifier of the invitation

### listLtiCredentials
List LTI 1.x credentials


```js
flat.listLtiCredentials(null, context)
```

#### Parameters
*This action has no parameters*

### createLtiCredentials
Flat for Education is a Certified LTI Provider. You can use these API methods to automate the creation of LTI credentials. You can read more about our LTI implementation, supported components and LTI Endpoints in our [Developer Documentation](https://flat.io/developers/docs/lti/).



```js
flat.createLtiCredentials({
  "body": {
    "name": "",
    "lms": ""
  }
}, context)
```

#### Parameters
* body (object) **required** - Creation of a couple of LTI 1.x OAuth credentials

### revokeLtiCredentials
Revoke LTI 1.x credentials


```js
flat.revokeLtiCredentials({
  "credentials": ""
}, context)
```

#### Parameters
* credentials (string) **required** - Credentials unique identifier

### listOrganizationUsers
List the organization users


```js
flat.listOrganizationUsers({}, context)
```

#### Parameters
* role (string) - Filter users by role
* limit (integer) - This is the maximum number of objects that may be returned
* next (string) - An opaque string cursor to fetch the next page of data.
* previous (string) - An opaque string cursor to fetch the previous page of data.

### createOrganizationUser
Create a new user account


```js
flat.createOrganizationUser({}, context)
```

#### Parameters
* body (object) - User creation

### removeOrganizationUser
This operation removes an account from Flat and its data, including:
* The music scores created by this user (documents, history, comments, collaboration information)
* Education related data (assignments and classroom information)



```js
flat.removeOrganizationUser({
  "user": ""
}, context)
```

#### Parameters
* user (string) **required** - Unique identifier of the Flat account
* convertToIndividual (boolean) - If `true`, the account will be only removed from the organization and converted into an individual account on our public website, https://flat.io.

### updateOrganizationUser
Update account information


```js
flat.updateOrganizationUser({
  "user": "",
  "body": {}
}, context)
```

#### Parameters
* user (string) **required** - Unique identifier of the Flat account
* body (object) **required** - User update as an organization admin

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

### getScoreSubmissions
This API call will list the different assignments submissions where the score is attached. This method can be used by anyone that are part of the organization and have at least read access to the document.



```js
flat.getScoreSubmissions({
  "score": ""
}, context)
```

#### Parameters
* score (string) **required** - Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).

### listScoreTracks
List the audio or video tracks linked to a score


```js
flat.listScoreTracks({
  "score": ""
}, context)
```

#### Parameters
* score (string) **required** - Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
* sharingKey (string) - This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.

### addScoreTrack
Use this method to add new track to the score. This track can then be played on flat.io or in an embedded score.
This API method support medias hosted on SoundCloud, YouTube and Vimeo.



```js
flat.addScoreTrack({
  "score": "",
  "body": {}
}, context)
```

#### Parameters
* score (string) **required** - Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
* body (object) **required** - Creation of a new track. This one must contain the URL of the track or the corresponding file

### deleteScoreTrack
Remove an audio or video track linked to the score


```js
flat.deleteScoreTrack({
  "score": "",
  "track": ""
}, context)
```

#### Parameters
* score (string) **required** - Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
* track (string) **required** - Unique identifier of a score audio track

### getScoreTrack
Retrieve the details of an audio or video track linked to a score


```js
flat.getScoreTrack({
  "score": "",
  "track": ""
}, context)
```

#### Parameters
* score (string) **required** - Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
* sharingKey (string) - This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.
* track (string) **required** - Unique identifier of a score audio track

### updateScoreTrack
Update an audio or video track linked to a score


```js
flat.updateScoreTrack({
  "score": "",
  "track": "",
  "body": {}
}, context)
```

#### Parameters
* score (string) **required** - Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
* track (string) **required** - Unique identifier of a score audio track
* body (object) **required** - Update an existing track.

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

