# @datafire/flat

Client library for Flat

## Installation and Usage
```bash
npm install --save @datafire/flat
```
```js
let flat = require('@datafire/flat').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
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
flat.oauthRefresh(null, context)
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

### listClasses
List the classes available for the current user


```js
flat.listClasses({}, context)
```

#### Input
* input `object`
  * state `string` (values: active, inactive, archived): Filter the classes by state

#### Output
* output `array`
  * items [ClassDetails](#classdetails)

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

#### Input
* input `object`
  * body **required** [ClassCreation](#classcreation)

#### Output
* output [ClassDetails](#classdetails)

### enrollClass
Use this method to join a class using an enrollment code given one of the teacher of this class. This code is also available in the `ClassDetails` returned to the teachers when creating the class or listing / fetching a specific class.

Flat will automatically add the user to the corresponding class group based on this role in the organization.



```js
flat.enrollClass({
  "enrollmentCode": ""
}, context)
```

#### Input
* input `object`
  * enrollmentCode **required** `string`: The enrollment code, available to the teacher in `ClassDetails`

#### Output
* output [ClassDetails](#classdetails)

### getClass
Get the details of a single class


```js
flat.getClass({
  "class": ""
}, context)
```

#### Input
* input `object`
  * class **required** `string`: Unique identifier of the class

#### Output
* output [ClassDetails](#classdetails)

### updateClass
Update the meta information of the class



```js
flat.updateClass({
  "class": ""
}, context)
```

#### Input
* input `object`
  * class **required** `string`: Unique identifier of the class
  * body [ClassUpdate](#classupdate)

#### Output
* output [ClassDetails](#classdetails)

### activateClass
Mark the class as `active`. This is mainly used for classes synchronized from Clever that are initially with an `inactive` state and hidden in the UI.



```js
flat.activateClass({
  "class": ""
}, context)
```

#### Input
* input `object`
  * class **required** `string`: Unique identifier of the class

#### Output
* output [ClassDetails](#classdetails)

### unarchiveClass
Mark the class as `active`. When this course is synchronized with another app, like Google Classroom, this state will be automatically be updated.



```js
flat.unarchiveClass({
  "class": ""
}, context)
```

#### Input
* input `object`
  * class **required** `string`: Unique identifier of the class

#### Output
* output [ClassDetails](#classdetails)

### archiveClass
Mark the class as `archived`. When this course is synchronized with another app, like Google Classroom, this state will be automatically be updated.



```js
flat.archiveClass({
  "class": ""
}, context)
```

#### Input
* input `object`
  * class **required** `string`: Unique identifier of the class

#### Output
* output [ClassDetails](#classdetails)

### listAssignments
Assignments listing


```js
flat.listAssignments({
  "class": ""
}, context)
```

#### Input
* input `object`
  * class **required** `string`: Unique identifier of the class

#### Output
* output `array`
  * items [Assignment](#assignment)

### createAssignment
Use this method as a teacher to create and post a new assignment to a class.

If the class is synchronized with Google Classroom, the assignment will be automatically posted to your Classroom course.



```js
flat.createAssignment({
  "class": ""
}, context)
```

#### Input
* input `object`
  * class **required** `string`: Unique identifier of the class
  * body [AssignmentCreation](#assignmentcreation)

#### Output
* output [Assignment](#assignment)

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

#### Input
* input `object`
  * class **required** `string`: Unique identifier of the class
  * assignment **required** `string`: Unique identifier of the assignment
  * body **required** [AssignmentCopy](#assignmentcopy)

#### Output
* output [Assignment](#assignment)

### getSubmissions
List the students' submissions


```js
flat.getSubmissions({
  "class": "",
  "assignment": ""
}, context)
```

#### Input
* input `object`
  * class **required** `string`: Unique identifier of the class
  * assignment **required** `string`: Unique identifier of the assignment

#### Output
* output `array`
  * items [AssignmentSubmission](#assignmentsubmission)

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

#### Input
* input `object`
  * class **required** `string`: Unique identifier of the class
  * assignment **required** `string`: Unique identifier of the assignment
  * body **required** [AssignmentSubmissionUpdate](#assignmentsubmissionupdate)

#### Output
* output [AssignmentSubmission](#assignmentsubmission)

### getSubmission
Get a student submission


```js
flat.getSubmission({
  "class": "",
  "assignment": "",
  "submission": ""
}, context)
```

#### Input
* input `object`
  * class **required** `string`: Unique identifier of the class
  * assignment **required** `string`: Unique identifier of the assignment
  * submission **required** `string`: Unique identifier of the submission

#### Output
* output [AssignmentSubmission](#assignmentsubmission)

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

#### Input
* input `object`
  * class **required** `string`: Unique identifier of the class
  * assignment **required** `string`: Unique identifier of the assignment
  * submission **required** `string`: Unique identifier of the submission
  * body **required** [AssignmentSubmissionUpdate](#assignmentsubmissionupdate)

#### Output
* output [AssignmentSubmission](#assignmentsubmission)

### listClassStudentSubmissions
Use this method as a teacher to list all the assignment submissions sent by a student of the class



```js
flat.listClassStudentSubmissions({
  "class": "",
  "user": ""
}, context)
```

#### Input
* input `object`
  * class **required** `string`: Unique identifier of the class
  * user **required** `string`: Unique identifier of the user

#### Output
* output `array`
  * items [AssignmentSubmission](#assignmentsubmission)

### deleteClassUser
This method can be used by a teacher to remove a user from the class, or by a student to leave the classroom.

Warning: Removing a user from the class will remove the associated resources, including the submissions and feedback related to these submissions.



```js
flat.deleteClassUser({
  "class": "",
  "user": ""
}, context)
```

#### Input
* input `object`
  * class **required** `string`: Unique identifier of the class
  * user **required** `string`: Unique identifier of the user

#### Output
*Output schema unknown*

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

#### Input
* input `object`
  * class **required** `string`: Unique identifier of the class
  * user **required** `string`: Unique identifier of the user

#### Output
*Output schema unknown*

### getGroupDetails
Get group information


```js
flat.getGroupDetails({
  "group": ""
}, context)
```

#### Input
* input `object`
  * group **required** `string`: Unique identifier of a Flat group

#### Output
* output [GroupDetails](#groupdetails)

### getGroupScores
Get the list of scores shared with a group.



```js
flat.getGroupScores({
  "group": ""
}, context)
```

#### Input
* input `object`
  * group **required** `string`: Unique identifier of a Flat group
  * parent `string`: Filter the score forked from the score id `parent`

#### Output
* output `array`
  * items [ScoreDetails](#scoredetails)

### listGroupUsers
List group's users


```js
flat.listGroupUsers({
  "group": ""
}, context)
```

#### Input
* input `object`
  * group **required** `string`: Unique identifier of a Flat group

#### Output
* output `array`
  * items [UserPublic](#userpublic)

### getAuthenticatedUser
Get details about the current authenticated User.



```js
flat.getAuthenticatedUser(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [UserDetails](#userdetails)

### listOrganizationInvitations
List the organization invitations


```js
flat.listOrganizationInvitations({}, context)
```

#### Input
* input `object`
  * role `string` (values: user, teacher, admin): Filter users by role
  * limit `integer`: This is the maximum number of objects that may be returned
  * next `string`: An opaque string cursor to fetch the next page of data.
  * previous `string`: An opaque string cursor to fetch the previous page of data.

#### Output
* output `array`
  * items [OrganizationInvitation](#organizationinvitation)

### createOrganizationInvitation
This method creates and sends invitation for teachers and admins.

Invitations can only be used by new Flat users or users who are not part of the organization yet.

If the email of the user is already associated to a user of your organization, the API will simply update the role of the existing user and won't send an invitation. In this case, the property `usedBy` will be directly filled with the uniquer identifier of the corresponding user.



```js
flat.createOrganizationInvitation({}, context)
```

#### Input
* input `object`
  * body [OrganizationInvitationCreation](#organizationinvitationcreation)

#### Output
* output [OrganizationInvitation](#organizationinvitation)

### removeOrganizationInvitation
Remove an organization invitation


```js
flat.removeOrganizationInvitation({
  "invitation": ""
}, context)
```

#### Input
* input `object`
  * invitation **required** `string`: Unique identifier of the invitation

#### Output
*Output schema unknown*

### listLtiCredentials
List LTI 1.x credentials


```js
flat.listLtiCredentials(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [LtiCredentials](#lticredentials)

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

#### Input
* input `object`
  * body **required** [LtiCredentialsCreation](#lticredentialscreation)

#### Output
* output [LtiCredentials](#lticredentials)

### revokeLtiCredentials
Revoke LTI 1.x credentials


```js
flat.revokeLtiCredentials({
  "credentials": ""
}, context)
```

#### Input
* input `object`
  * credentials **required** `string`: Credentials unique identifier

#### Output
*Output schema unknown*

### listOrganizationUsers
List the organization users


```js
flat.listOrganizationUsers({}, context)
```

#### Input
* input `object`
  * role `string` (values: user, teacher, admin): Filter users by role
  * limit `integer`: This is the maximum number of objects that may be returned
  * next `string`: An opaque string cursor to fetch the next page of data.
  * previous `string`: An opaque string cursor to fetch the previous page of data.

#### Output
* output `array`
  * items [UserDetailsAdmin](#userdetailsadmin)

### createOrganizationUser
Create a new user account


```js
flat.createOrganizationUser({}, context)
```

#### Input
* input `object`
  * body [UserCreation](#usercreation)

#### Output
* output [UserDetailsAdmin](#userdetailsadmin)

### removeOrganizationUser
This operation removes an account from Flat and its data, including:
* The music scores created by this user (documents, history, comments, collaboration information)
* Education related data (assignments and classroom information)



```js
flat.removeOrganizationUser({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Unique identifier of the Flat account
  * convertToIndividual `boolean`: If `true`, the account will be only removed from the organization and converted into an individual account on our public website, https://flat.io.

#### Output
*Output schema unknown*

### updateOrganizationUser
Update account information


```js
flat.updateOrganizationUser({
  "user": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Unique identifier of the Flat account
  * body **required** [UserAdminUpdate](#useradminupdate)

#### Output
* output [UserDetailsAdmin](#userdetailsadmin)

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

#### Input
* input `object`
  * body **required** [ScoreCreation](#scorecreation)

#### Output
* output [ScoreDetails](#scoredetails)

### deleteScore
This API call will schedule the deletion of the score, its revisions, and whole history.
The user calling this API method must have the `aclAdmin` rights on this document to process this action.
The score won't be accessible anymore after calling this method and the user's quota will directly be updated.



```js
flat.deleteScore({
  "score": ""
}, context)
```

#### Input
* input `object`
  * score **required** `string`: Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).

#### Output
*Output schema unknown*

### getScore
Get the details of a score identified by the `score` parameter in the URL.
The currently authenticated user must have at least a read access to the document to use this API call.



```js
flat.getScore({
  "score": ""
}, context)
```

#### Input
* input `object`
  * score **required** `string`: Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
  * sharingKey `string`: This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.

#### Output
* output [ScoreDetails](#scoredetails)

### editScore
This API method allows you to change the metadata of a score document (e.g. its `title` or `privacy`), all the properties are optional.

To edit the file itself, create a new revision using the appropriate method (`POST /v2/scores/{score}/revisions/{revision}`).



```js
flat.editScore({
  "score": ""
}, context)
```

#### Input
* input `object`
  * score **required** `string`: Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
  * body [ScoreModification](#scoremodification)

#### Output
* output [ScoreDetails](#scoredetails)

### getScoreCollaborators
This API call will list the different collaborators of a score and their rights on the document. The returned list will at least contain the owner of the document.

Collaborators can be a single user (the object `user` will be populated) or a group (the object `group` will be populated).



```js
flat.getScoreCollaborators({
  "score": ""
}, context)
```

#### Input
* input `object`
  * score **required** `string`: Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
  * sharingKey `string`: This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.

#### Output
* output `array`
  * items [ScoreCollaborator](#scorecollaborator)

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

#### Input
* input `object`
  * score **required** `string`: Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
  * body **required** [ScoreCollaboratorCreation](#scorecollaboratorcreation)

#### Output
* output [ScoreCollaborator](#scorecollaborator)

### removeScoreCollaborator
Remove the specified collaborator from the score



```js
flat.removeScoreCollaborator({
  "score": "",
  "collaborator": ""
}, context)
```

#### Input
* input `object`
  * score **required** `string`: Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
  * collaborator **required** `string`: Unique identifier of a **collaborator permission**, or unique identifier of a **User**, or unique identifier of a **Group**

#### Output
*Output schema unknown*

### getScoreCollaborator
Get the information about a collaborator (User or Group).



```js
flat.getScoreCollaborator({
  "score": "",
  "collaborator": ""
}, context)
```

#### Input
* input `object`
  * score **required** `string`: Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
  * collaborator **required** `string`: Unique identifier of a **collaborator permission**, or unique identifier of a **User**, or unique identifier of a **Group**
  * sharingKey `string`: This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.

#### Output
* output [ScoreCollaborator](#scorecollaborator)

### getScoreComments
This method lists the different comments added on a music score (documents and inline) sorted by their post dates.


```js
flat.getScoreComments({
  "score": ""
}, context)
```

#### Input
* input `object`
  * score **required** `string`: Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
  * sharingKey `string`: This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.

#### Output
* output `array`
  * items [ScoreComment](#scorecomment)

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

#### Input
* input `object`
  * score **required** `string`: Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
  * sharingKey `string`: This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.
  * body **required** [ScoreCommentCreation](#scorecommentcreation)

#### Output
* output [ScoreComment](#scorecomment)

### deleteScoreComment
Delete a comment


```js
flat.deleteScoreComment({
  "score": "",
  "comment": ""
}, context)
```

#### Input
* input `object`
  * score **required** `string`: Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
  * comment **required** `string`: Unique identifier of a sheet music comment
  * sharingKey `string`: This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.

#### Output
*Output schema unknown*

### updateScoreComment
Update an existing comment


```js
flat.updateScoreComment({
  "score": "",
  "comment": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * score **required** `string`: Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
  * comment **required** `string`: Unique identifier of a sheet music comment
  * sharingKey `string`: This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.
  * body **required** [ScoreCommentUpdate](#scorecommentupdate)

#### Output
* output [ScoreComment](#scorecomment)

### markScoreCommentUnresolved
Mark the comment as unresolved


```js
flat.markScoreCommentUnresolved({
  "score": "",
  "comment": ""
}, context)
```

#### Input
* input `object`
  * score **required** `string`: Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
  * comment **required** `string`: Unique identifier of a sheet music comment
  * sharingKey `string`: This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.

#### Output
*Output schema unknown*

### markScoreCommentResolved
Mark the comment as resolved


```js
flat.markScoreCommentResolved({
  "score": "",
  "comment": ""
}, context)
```

#### Input
* input `object`
  * score **required** `string`: Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
  * comment **required** `string`: Unique identifier of a sheet music comment
  * sharingKey `string`: This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.

#### Output
*Output schema unknown*

### forkScore
This API call will make a copy of the last revision of the specified score and create a new score. The copy of the score will have a privacy set to `private`.

When using a [Flat for Education](https://flat.io/edu) account, the inline and contextualized comments will be accessible in the child document.



```js
flat.forkScore({
  "score": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * score **required** `string`: Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
  * sharingKey `string`: This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.
  * body **required** [ScoreFork](#scorefork)

#### Output
* output [ScoreDetails](#scoredetails)

### getScoreRevisions
When creating a score or saving a new version of a score, a revision is created in our storage. This method allows you to list all of them, sorted by last modification.

Depending the plan of the account, this list can be trunked to the few last revisions.



```js
flat.getScoreRevisions({
  "score": ""
}, context)
```

#### Input
* input `object`
  * score **required** `string`: Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
  * sharingKey `string`: This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.

#### Output
* output `array`
  * items [ScoreRevision](#scorerevision)

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

#### Input
* input `object`
  * score **required** `string`: Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
  * body **required** [ScoreRevisionCreation](#scorerevisioncreation)

#### Output
* output [ScoreRevision](#scorerevision)

### getScoreRevision
When creating a score or saving a new version of a score, a revision is created in our storage. This method allows you to get a specific
revision metadata.



```js
flat.getScoreRevision({
  "score": "",
  "revision": ""
}, context)
```

#### Input
* input `object`
  * score **required** `string`: Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
  * revision **required** `string`: Unique identifier of a score revision. You can use `last` to fetch the information related to the last version created.
  * sharingKey `string`: This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.

#### Output
* output [ScoreRevision](#scorerevision)

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

#### Input
* input `object`
  * score **required** `string`: Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
  * revision **required** `string`: Unique identifier of a score revision. You can use `last` to fetch the information related to the last version created.
  * sharingKey `string`: This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.
  * format **required** `string` (values: json, mxl, xml, mp3, wav, midi, thumbnail.png): The format of the file you will retrieve
  * onlyCached `boolean`: Only return files already generated and cached in Flat's production
  * parts `string`: An optional a set of parts to be exported. This parameter must be

#### Output
* output `string`

### getScoreSubmissions
This API call will list the different assignments submissions where the score is attached. This method can be used by anyone that are part of the organization and have at least read access to the document.



```js
flat.getScoreSubmissions({
  "score": ""
}, context)
```

#### Input
* input `object`
  * score **required** `string`: Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).

#### Output
* output `array`
  * items [AssignmentSubmission](#assignmentsubmission)

### listScoreTracks
List the audio or video tracks linked to a score


```js
flat.listScoreTracks({
  "score": ""
}, context)
```

#### Input
* input `object`
  * score **required** `string`: Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
  * sharingKey `string`: This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.

#### Output
* output `array`
  * items [ScoreTrack](#scoretrack)

### addScoreTrack
Use this method to add new track to the score. This track can then be played on flat.io or in an embedded score.
This API method support medias hosted on SoundCloud, YouTube and Vimeo.



```js
flat.addScoreTrack({
  "score": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * score **required** `string`: Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
  * body **required** [ScoreTrackCreation](#scoretrackcreation)

#### Output
* output [ScoreTrack](#scoretrack)

### deleteScoreTrack
Remove an audio or video track linked to the score


```js
flat.deleteScoreTrack({
  "score": "",
  "track": ""
}, context)
```

#### Input
* input `object`
  * score **required** `string`: Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
  * track **required** `string`: Unique identifier of a score audio track

#### Output
*Output schema unknown*

### getScoreTrack
Retrieve the details of an audio or video track linked to a score


```js
flat.getScoreTrack({
  "score": "",
  "track": ""
}, context)
```

#### Input
* input `object`
  * score **required** `string`: Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
  * sharingKey `string`: This sharing key must be specified to access to a score with a `privacy` mode set to `privateLink` and the current user is not a collaborator of the document.
  * track **required** `string`: Unique identifier of a score audio track

#### Output
* output [ScoreTrack](#scoretrack)

### updateScoreTrack
Update an audio or video track linked to a score


```js
flat.updateScoreTrack({
  "score": "",
  "track": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * score **required** `string`: Unique identifier of the score document. This can be a Flat Score unique identifier (i.e. `ScoreDetails.id`) or, if the score is also a Google Drive file, the Drive file unique identifier prefixed with `drive-` (e.g. `drive-0B000000000`).
  * track **required** `string`: Unique identifier of a score audio track
  * body **required** [ScoreTrackUpdate](#scoretrackupdate)

#### Output
* output [ScoreTrack](#scoretrack)

### getUser
Get a public profile of a Flat User.



```js
flat.getUser({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: This route parameter is the unique identifier of the user. You can specify an email instead of an unique identifier. If you are executing this request authenticated, you can use `me` as a value instead of the current User unique identifier to work on the current authenticated user.

#### Output
* output [UserPublic](#userpublic)

### gerUserLikes
List liked scores


```js
flat.gerUserLikes({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Unique identifier of a Flat user. If you authenticated, you can use `me` to refer to the current user.
  * ids `boolean`: Return only the identifiers of the scores

#### Output
* output `array`
  * items [ScoreDetails](#scoredetails)

### getUserScores
Get the list of scores owned by the User



```js
flat.getUserScores({
  "user": ""
}, context)
```

#### Input
* input `object`
  * user **required** `string`: Unique identifier of a Flat user. If you authenticated, you can use `me` to refer to the current user.
  * parent `string`: Filter the score forked from the score id `parent`

#### Output
* output `array`
  * items [ScoreDetails](#scoredetails)



## Definitions

### Assignment
* Assignment `object`: Assignment details
  * attachments `array`
    * items [MediaAttachment](#mediaattachment)
  * classroom `string`: The unique identifier of the class where this assignment was posted
  * creationDate `string`: The creation date of this assignment
  * creator `string`: The User unique identifier of the creator of this assignment
  * description `string`: Description and content of the assignment
  * dueDate `string`: The due date of this assignment, late submissions will be marked as
  * googleClassroom [GoogleClassroomCoursework](#googleclassroomcoursework)
  * scheduledDate `string`: The publication (scheduled) date of the assignment.
  * state `string` (values: draft, active, archived): State of the assignment
  * submissions `array`
    * items [AssignmentSubmission](#assignmentsubmission)
  * title `string`: Title of the assignment

### AssignmentCopy
* AssignmentCopy `object`: Assignment copy operation
  * classroom **required** `string`: The destination classroom where the assignment will be copied

### AssignmentCreation
* AssignmentCreation `object`: Assignment creation details
  * attachments `array`
    * items [ClassAttachmentCreation](#classattachmentcreation)
  * description `string`: Description and content of the assignment
  * dueDate `string`: The due date of this assignment, late submissions will be marked as paste due. If not set, the assignment won't have a due date.
  * scheduledDate `string`: The publication (scheduled) date of the assignment.
  * title `string`: Title of the assignment

### AssignmentSubmission
* AssignmentSubmission `object`: Assignment Submission
  * assignment `string`: Unique identifier of the assignment
  * attachments `array`
    * items [MediaAttachment](#mediaattachment)
  * classroom `string`: Unique identifier of the classroom where the assignment was posted
  * creationDate `string`: The date when the submission was created
  * creator `string`: The User identifier of the student who created the submission
  * googleClassroom [GoogleClassroomSubmission](#googleclassroomsubmission)
  * id `string`: Unique identifier of the submission
  * returnCreator `string`: The User unique identifier of the teacher who returned the submission
  * returnDate `string`: The date when the teacher returned the work
  * returnFeedback `string`: The feedback associated with the return
  * studentComment `string`: An optionnal comment sent by the student when submitting his work
  * submissionDate `string`: The date when the student submitted his work

### AssignmentSubmissionUpdate
* AssignmentSubmissionUpdate `object`: Assignment Submission creation
  * attachments `array`
    * items [ClassAttachmentCreation](#classattachmentcreation)
  * returnFeedback `string`: The feedback associated with the return
  * studentComment `string`: An optionnal comment sent by the student when submitting his work
  * submit `boolean`: If `true`, the submission will be marked as done

### ClassAttachmentCreation
* ClassAttachmentCreation `object`: Attachment creation for an assignment or stream post.
  * score `string`: A unique Flat score identifier. The user creating the assignment must at least have read access to the document. If the user has admin rights, new group permissions will be automatically added for the
  * type `string` (values: flat, link, exercise): The type of the attachment posted
  * url `string`: The URL of the attachment.

### ClassCreation
* ClassCreation `object`: Creation of a classroom
  * name **required** `string`: The name of the new class
  * section `string`: The section of the new class

### ClassDetails
* ClassDetails `object`: A classroom
  * assignmentsCount `number`: The number of assignments created in the class
  * canvas `object`: Meta information provided by Canvs LMS
    * domain `string`: Canvas instance domain (e.g. "canvas.instructure.com")
    * id `string`: Unique identifier of the course on Canvas
  * clever `object`: Clever.com section-related information
    * creationDate `string`: The creation date of the section on clever
    * id `string`: Clever section unique identifier
    * modificationDate `string`: The last modification date of the section on clever
    * subject `string` (values: english/language arts, math, science, social studies, language, homeroom/advisory, interventions/online learning, technology and engineering, PE and health, arts and music, other): Normalized subject of the course
    * termEndDate `string`: End date of the term
    * termName `string`: Name of the term when this course happens
    * termStartDate `string`: Beginning date of the term
  * creationDate `string`: The date when the class was create
  * description `string`: An optionnal description for this class
  * enrollmentCode `string`: [Teachers only] The enrollment code that can be used by the students to join the class
  * googleClassroom `object`: Google Classroom course-related information
    * alternateLink `string`: Absolute link to this course in the Classroom web UI
    * id `string`: The course identifier on Google Classroom
    * name `string`: The name of the course on Google Classroom
    * section `string`: The section of the course on Google Classroom
  * googleDrive `object`: Google Drive course-related information provided by Google Classroom
    * teacherFolderAlternateLink `string`: [Teachers only] The Drive URL of the teachers' folder
    * teacherFolderId `string`: [Teachers only] The Drive directory identifier of the teachers' folder
  * id `string`: The unique identifier of the class
  * lti `object`: Meta information provided by the LTI consumer
    * contextId `string`: Unique context identifier provided
    * contextLabel `string`: Context label
    * contextTitle `string`: Context title
  * name `string`: The name of the class
  * organization `string`: The unique identifier of the Organization owning this class
  * owner `string`: The unique identifier of the User owning this class
  * section `string`: The section of the class
  * state [ClassState](#classstate)
  * studentsGroup [GroupDetails](#groupdetails)
  * teachersGroup [GroupDetails](#groupdetails)
  * theme `string`: The theme identifier using in Flat User Interface

### ClassRoles
* ClassRoles `string` (values: teacher, student): User's Class Role (for Edu users only)

### ClassState
* ClassState `string` (values: active, inactive, archived): The state of a classroom

### ClassUpdate
* ClassUpdate `object`: Update of a classroom
  * name `string`: The name of the class
  * section `string`: The section of the class

### FlatErrorResponse
* FlatErrorResponse `object`
  * code `string`: A corresponding code for this error
  * id `string`: An unique error identifier generated for the request
  * message `string`: A printable message for this message
  * param `string`: The related parameter that caused the error

### FlatLocales
* FlatLocales `string` (values: en, es, fr, it, pl, ro, nl): The user language

### GoogleClassroomCoursework
* GoogleClassroomCoursework `object`: A coursework on Google Classroom
  * alternateLink `string`: Absolute link to this coursework in the Classroom web UI
  * id `string`: Identifier of the coursework assigned by Classroom
  * state `string`: State of the coursework

### GoogleClassroomSubmission
* GoogleClassroomSubmission `object`: A coursework submission on Google Classroom
  * alternateLink `string`: Absolute link to this coursework in the Classroom web UI
  * id `string`: Identifier of the coursework submission assigned by Classroom
  * state `string`: State of the submission on Google Classroom

### Group
* Group `object`: A group of users
  * creationDate `string`: The creation date of the group
  * id `string`: The unique identifier of the group
  * name `string`: The display name of the group
  * organization `string`: If the group is related to an organization, this field will contain
  * readOnly `boolean`: `True` if the group is set in read-only
  * type `string` (values: generic, classTeachers, classStudents): The type of the group:
  * usersCount `number`: The number of users in this group

### GroupDetails
* GroupDetails `object`: The details of a group
  * creationDate `string`: The date when the group was create
  * id `string`: The unique identifier of the group
  * name `string`: The displayable name of the group
  * organization `string`: The unique identifier of the Organization owning the group
  * readOnly `boolean`: `true` if the properties and members of this group are in in read-only
  * type [GroupType](#grouptype)
  * usersCount `number`: The number of students in this group

### GroupType
* GroupType `string` (values: generic, classTeachers, classStudents): The type of the group

### LicenseMode
* LicenseMode `string` (values: credit, site): Mode of the license

### LicenseSources
* LicenseSources `string` (values: order, trial, voucher, distributor, subscription): Source of the license

### LmsName
* LmsName `string` (values: canvas, moodle, schoology, blackboard, desire2learn, sakai, other): LMS name

### LtiCredentials
* LtiCredentials `object`: A couple of LTI 1.x OAuth credentials
  * consumerKey `string`: OAuth 1 Consumer Key
  * consumerSecret `string`: OAuth 1 Consumer Secret
  * creationDate `string`: The creation date of thse credentials
  * creator `string`: Unique identifier of the user who created these credentials
  * id `string`: The unique identifier of this couple of credentials
  * lastUsage `string`: The last time these credentials were used
  * lms [LmsName](#lmsname)
  * name `string`: Name of the couple of credentials
  * organization `string`: The unique identifier of the Organization associated to these credentials

### LtiCredentialsCreation
* LtiCredentialsCreation `object`: Creation of a couple of LTI 1.x OAuth credentials
  * lms **required** [LmsName](#lmsname)
  * name **required** `string`: Name of the couple of credentials

### MediaAttachment
* MediaAttachment `object`: Media attachment. The API will automatically resolve the details, oEmbed,
  * authorName `string`: The resolved author name of the attachment
  * authorUrl `string`: The resolved author url of the attachment
  * correct `boolean`: If the attachment is an exercise question, this state will describe if it is correct or not.For exercise assignments only.
  * description `string`: The resolved description of the attachment
  * html `string`: If the attachment type is `rich` or `video`, the HTML code of the
  * htmlHeight `string`: If the `html` is available, the height of the widget
  * htmlWidth `string`: If the `html` is available, the width of the widget
  * revision `string`: An unique revision identifier of a score
  * score `string`: An unique Flat score identifier
  * sharingMode [MediaScoreSharingMode](#mediascoresharingmode)
  * thumbnailHeight `string`: If the `thumbnailUrl` is available, the width of the thumbnail
  * thumbnailUrl `string`: If the attachment type is `rich`, `video`, `photo` or `link`, a
  * thumbnailWidth `string`: If the `thumbnailUrl` is available, the width of the thumbnail
  * title `string`: The resolved title of the attachment
  * type `string` (values: rich, photo, video, link, flat, exercise): The type of the assignment resolved:
  * url `string`: The url of the attachment

### MediaScoreSharingMode
* MediaScoreSharingMode `string` (values: read, write, copy): The sharing mode of the score for classes post and assignments

### OrganizationInvitation
* OrganizationInvitation `object`: Details of an invitation to join an organization
  * customCode `string`: Enrollment code to use when joining this organization
  * email `string`: The email address this invitation was sent to
  * id `string`: The invitation unique identifier
  * invitedBy `string`: The unique identifier of the User who created this invitation
  * organization `string`: The unique identifier of the Organization owning this class
  * organizationRole [OrganizationRoles](#organizationroles)
  * usedBy `string`: The unique identifier of the User who used this invitation

### OrganizationInvitationCreation
* OrganizationInvitationCreation `object`: The parameters to create an organization invitation
  * email `string`: The email address you want to send the invitation to
  * organizationRole [OrganizationRoles](#organizationroles)

### OrganizationRoles
* OrganizationRoles `string` (values: admin, billing, teacher, user): User's Organization Role (for Edu users only)

### ScoreCollaborator
* ScoreCollaborator `object`: A collaborator of a score. The `userEmail` and `group` are only available if the requesting user is a collaborator of the related score (in this case these permissions will eventualy not be listed and exposed publicly).
  * aclAdmin `boolean`: `True` if the related user can can manage the current document, i.e. changing the document permissions and deleting the document
  * aclRead `boolean`: `True` if the related user can read the score. (probably true if the user has a permission on the document).
  * aclWrite `boolean`: `True` if the related user can modify the score.
  * group [Group](#group)
  * id `string`: The unique identifier of the score permission
  * score `string`: The unique identifier of the score
  * user [UserPublic](#userpublic)
  * userEmail `string`: If the collaborator is not a user of Flat yet, this field will contain his email.

### ScoreCollaboratorCreation
* ScoreCollaboratorCreation `object`: A collaborator of a score. The `userEmail` and `group` are only available if the requesting user is a collaborator of the related score (in this case these permissions will eventualy not be listed and exposed publicly).
  * aclAdmin `boolean`: `True` if the related user can can manage the current document, i.e. changing the document permissions and deleting the document
  * aclRead `boolean`: `True` if the related user can read the score. (probably true if the user has a permission on the document).
  * aclWrite `boolean`: `True` if the related user can modify the score.
  * group `string`: The unique identifier of a Flat group
  * user `string`: The unique identifier of a Flat user
  * userEmail `string`: Fill this field to invite an individual user by email.

### ScoreComment
* ScoreComment `object`: Comment added on a sheet music
  * comment `string`: The comment text that can includes mentions using the following
  * context [ScoreCommentContext](#scorecommentcontext)
  * date `string`: The date when the comment was posted
  * id `string`: The comment unique identifier
  * mentions `array`: The list of user identifier mentioned on the score
    * items `string`
  * modificationDate `string`: The date of the last comment modification
  * rawComment `string`: A raw version of the comment, that can be displayed without parsing
  * replyTo `string`: When the comment is a reply to another comment, the unique identifier of the parent comment
  * resolved `boolean`: For inline comments, the comment can be marked as resolved and will be hidden in the future responses
  * resolvedBy `string`: If the user is marked as resolved, this will contain the unique identifier of the User who marked this comment as resolved
  * revision `string`: The unique identifier of revision the comment was posted
  * score `string`: The unique identifier of the score where the comment was posted
  * spam `boolean`: `true  if the message has been detected as spam and hidden from other users
  * type `string` (values: document, inline): The type of the comment
  * user `string`: The author unique identifier

### ScoreCommentContext
* ScoreCommentContext `object`: The context of the comment (for inline/contextualized comments). A context will include all the information related to the location of the comment (i.e. score parts, range of measure, time position).
  * measureUuids **required** `array`: The list of measure UUIds
    * items `string`
  * partUuid **required** `string`: The unique identifier (UUID) of the score part
  * staffIdx **required** `number`: The identififer of the staff
  * startDpq **required** `number`
  * startTimePos **required** `number`
  * stopDpq **required** `number`
  * stopTimePos **required** `number`

### ScoreCommentCreation
* ScoreCommentCreation `object`: Creation of a comment
  * comment **required** `string`: The comment text that can includes mentions using the following format: `@[id:username]`.
  * context [ScoreCommentContext](#scorecommentcontext)
  * mentions `array`: The list of user identifiers mentioned in this comment
    * items `string`
  * rawComment `string`: A raw version of the comment, that can be displayed without the mentions. If you use mentions, this property must be set.
  * replyTo `string`: When the comment is a reply to another comment, the unique identifier of the parent comment
  * revision `string`: The unique indentifier of the revision of the score where the comment was added. If this property is unspecified or contains "last", the API will automatically take the last revision created.

### ScoreCommentUpdate
* ScoreCommentUpdate `object`: Update of a comment
  * comment `string`: The comment text that can includes mentions using the following format: `@[id:username]`.
  * context [ScoreCommentContext](#scorecommentcontext)
  * rawComment `string`: A raw version of the comment, that can be displayed without the mentions. If you use mentions, this property must be set.
  * revision `string`: The unique indentifier of the revision of the score where the comment was added. If this property is unspecified or contains "last", the API will automatically take the last revision created.

### ScoreCommentsCounts
* ScoreCommentsCounts `object`: A computed version of the total, unique, weekly and monthly number of
  * monthly `number`: The monthly unique number of comments added on the score
  * total `number`: The total number of comments added on the score
  * unique `number`: The unique (1/user) number of comments added on the score
  * weekly `number`: The weekly unique number of comments added on the score

### ScoreCreation
* ScoreCreation `object`: A new created score
  * data [ScoreData](#scoredata)
  * dataEncoding [ScoreDataEncoding](#scoredataencoding)
  * googleDriveFolder `string`: If the user uses Google Drive and this properties is specified, the file will be created in this directory. The currently user creating the file must be granted to write in this directory.
  * privacy **required** [ScorePrivacy](#scoreprivacy)
  * source [ScoreSource](#scoresource)
  * title `string`: The title of the new score.

### ScoreCreationType
* ScoreCreationType `string` (values: original, arrangement, other): The type of creation (an orginal, an arrangement)

### ScoreData
* ScoreData `string`: The data of the score file. It must be a MusicXML 3 file (`vnd.recordare.musicxml` or `vnd.recordare.musicxml+xml`), a MIDI file (`audio/midi`) or a Flat.json (aka Adagio.json) file.

### ScoreDataEncoding
* ScoreDataEncoding `string` (values: base64): The optional encoding of the score data. This property must match the encoding used for the `data` property.

### ScoreDetails
* ScoreDetails `object`: The score and all its details
  * htmlUrl `string`: The url where the score can be viewed in a web browser
  * id `string`: The unique identifier of the score
  * privacy [ScorePrivacy](#scoreprivacy)
  * sharingKey `string`: The private sharing key of the score (available when the `privacy` mode is set to `privateLink`)
  * title `string`: The title of the score
  * user [UserPublicSummary](#userpublicsummary)
  * collaborators `array`: The list of the collaborators of the score
    * items [ScoreCollaborator](#scorecollaborator)
  * comments [ScoreCommentsCounts](#scorecommentscounts)
  * composer `string`: Composer of the score
  * creationDate `string`: The date when the score was created
  * creationType [ScoreCreationType](#scorecreationtype)
  * description `string`: Description of the creation
  * durationTime `integer`: In seconds, an approximative duration of the score
  * googleDriveFileId `string`: If the user uses Google Drive and the score exists on Google Drive, this field will contain the unique identifier of the Flat score on Google Drive. You can access the document using the url: `https://drive.google.com/open?id={googleDriveFileId}`
  * instruments `array`: An array of the instrument identifiers used in the last version of the score. This is mainly used to display a list of the instruments in the Flat's UI or instruments icons. The format of the strings is `{instrument-group}.{instrument-id}`.
    * items `string`
  * license [ScoreLicense](#scorelicense)
  * licenseText `string`: Additional license text written on the exported/printed score
  * likes [ScoreLikesCounts](#scorelikescounts)
  * lyricist `string`: Lyricist of the score
  * mainTempoQpm `integer`: The main tempo of the score (in QPM)
  * modificationDate `string`: The date of the last revision of the score
  * numberMeasures `integer`: The number of measures in the score
  * organization `string`: If the score has been created in an organization, the identifier of this organization. This property is especially used with the score privacy `organizationPublic`.
  * parentScore `string`: If the score has been forked, the unique identifier of the parent score.
  * publicationDate `string`: The date when the score was published on Flat
  * rights [ScoreRights](#scorerights)
  * subtitle `string`: Subtitle of the score
  * tags `array`: Tags describing the score
    * items `string`
  * views [ScoreViewsCounts](#scoreviewscounts)

### ScoreFork
* ScoreFork `object`: Options to fork the score

### ScoreLicense
* ScoreLicense `string` (values: copyright, cc0, cc-by, cc-by-sa, cc-by-nd, cc-by-nc, cc-by-nc-sa, cc-by-nc-nd): License of the creation. Read more about the Creative Commons licenses on https://creativecommons.org/licenses/

### ScoreLikesCounts
* ScoreLikesCounts `object`: A computed version of the weekly, monthly and total of number of likes
  * monthly `number`: The number of new likes during the last month
  * total `number`: The total number of likes of the score
  * weekly `number`: The number of new likes during the last week

### ScoreModification
* ScoreModification `object`: Edit the score metadata
  * creationType [ScoreCreationType](#scorecreationtype)
  * description `string`: Description of the creation
  * license [ScoreLicense](#scorelicense)
  * privacy [ScorePrivacy](#scoreprivacy)
  * sharingKey `string`: When using the `privacy` mode `privateLink`, this property can be used to set a custom sharing key, otherwise a new key will be generated.
  * tags `array`: Tags describing the score
    * items `string`

### ScorePrivacy
* ScorePrivacy `string` (values: public, private, organizationPublic, privateLink): The score main privacy mode.

### ScoreRevision
* ScoreRevision `object`: A score revision metadata
  * autosave `boolean`: True if this revision was automatically generated by Flat and not on
  * collaborators `array`
    * items `string`: The list of user identifier or collaborators who worked on this
  * creationDate `string`: The date when this revision was created
  * description `string`: A description associated to the revision
  * id `string`: The unique identifier of the revision.
  * statistics [ScoreRevisionStatistics](#scorerevisionstatistics)
  * user `string`: The user identifier who created the revision

### ScoreRevisionCreation
* ScoreRevisionCreation `object`: A new created revision
  * autosave `boolean`: Must be set to `true` if the revision was created automatically.
  * data **required** [ScoreData](#scoredata)
  * dataEncoding [ScoreDataEncoding](#scoredataencoding)
  * description `string`: A description associated to the revision

### ScoreRevisionStatistics
* ScoreRevisionStatistics `object`: The statistics related to the score revision (additions and deletions)
  * additions `number`: The number of additions operations in the last revision
  * deletions `number`: The number of deletions operations in the last revision

### ScoreRights
* ScoreRights `object`: The rights of the current user on a score
  * aclAdmin `boolean`: `True` if the current user can manage the current document, i.e.
  * aclWrite `boolean`: `True` if the current user can modify the current document

### ScoreSource
* ScoreSource `object`
  * googleDrive `string`: If the score is a file on Google Drive, this field property must contain its identifier. To use this method, the Drive file must be public or the Flat Drive App must have access to the file.

### ScoreSummary
* ScoreSummary `object`: A summary of the score details
  * htmlUrl `string`: The url where the score can be viewed in a web browser
  * id `string`: The unique identifier of the score
  * privacy [ScorePrivacy](#scoreprivacy)
  * sharingKey `string`: The private sharing key of the score (available when the `privacy` mode is set to `privateLink`)
  * title `string`: The title of the score
  * user [UserPublicSummary](#userpublicsummary)

### ScoreTrack
* ScoreTrack `object`: An audio track for a score
  * creationDate `string`: The creation date of the track
  * creator `string`: The unique identifier of the track creator
  * default `boolean`: True if the track should be used as default audio source
  * id `string`: The unique identifier of the score track
  * mediaId `string`: The unique identifier of the track when hosted on an external service.
  * modificationDate `string`: The modification date of the track
  * score `string`: The unique identifier of the score
  * state [ScoreTrackState](#scoretrackstate)
  * synchronizationPoints `array`
    * items [ScoreTrackPoint](#scoretrackpoint)
  * title `string`: Title of the track
  * type [ScoreTrackType](#scoretracktype)
  * url `string`: The URL of the track

### ScoreTrackCreation
* ScoreTrackCreation `object`: Creation of a new track. This one must contain the URL of the track or the corresponding file
  * default `boolean`: True if the track should be used as default audio source
  * state [ScoreTrackState](#scoretrackstate)
  * synchronizationPoints `array`
    * items [ScoreTrackPoint](#scoretrackpoint)
  * title `string`: Title of the track
  * url `string`: The URL of the track

### ScoreTrackPoint
* ScoreTrackPoint `object`: A track synchronization point
  * measureUuid `string`: The measure unique identifier
  * time **required** `number`: The corresponding time in seconds
  * type **required** `string` (values: measure, end): The type of the synchronization point. If the type is `measure`, the measure uuid must be present in `measureUuid`

### ScoreTrackState
* ScoreTrackState `string` (values: draft, completed, deleted): State of the track

### ScoreTrackType
* ScoreTrackType `string` (values: audio, soundcloud, youtube, vimeo): The type of an audio track

### ScoreTrackUpdate
* ScoreTrackUpdate `object`: Update an existing track.
  * default `boolean`: True if the track should be used as default audio source
  * state [ScoreTrackState](#scoretrackstate)
  * synchronizationPoints `array`
    * items [ScoreTrackPoint](#scoretrackpoint)
  * title `string`: Title of the track

### ScoreViewsCounts
* ScoreViewsCounts `object`: A computed version of the total, weekly, and monthly number of views of
  * monthly `number`: The monthly number of views of the score
  * total `number`: The total number of views of the score
  * weekly `number`: The weekly number of views of the score

### UserAdminUpdate
* UserAdminUpdate `object`: User update as an organization admin
  * organizationRole [OrganizationRoles](#organizationroles)
  * password `string`: Password of the new account

### UserBasics
* UserBasics `object`
  * id `string`: The user unique identifier
  * isPowerUser `boolean`: User license status. 'True' if user is an individual Power user
  * name `string`: A displayable name for the user
  * picture `string`: User pictue
  * printableName `string`: The name that can be directly printed (name or username)
  * username `string`: The user name (unique for the organization)

### UserCreation
* UserCreation `object`: User creation
  * email `string`: Email of the new account
  * locale [FlatLocales](#flatlocales)
  * password **required** `string`: Password of the new account
  * username **required** `string`: Username of the new account

### UserDetails
* UserDetails `object`: User details
  * id `string`: The user unique identifier
  * isPowerUser `boolean`: User license status. 'True' if user is an individual Power user
  * name `string`: A displayable name for the user
  * picture `string`: User pictue
  * printableName `string`: The name that can be directly printed (name or username)
  * username `string`: The user name (unique for the organization)
  * classRole [ClassRoles](#classroles)
  * htmlUrl `string`: Link to user profile (for Indiv. users only)
  * organization `string`: Organization ID (for Edu users only)
  * organizationRole [OrganizationRoles](#organizationroles)
  * bio `string`: User's biography
  * followersCount `integer`: Number of followers the user have
  * followingCount `integer`: Number of people the user follow
  * instruments [UserInstruments](#userinstruments)
  * likedScoresCount `integer`: Number of the scores liked by the user
  * ownedPublicScoresCount `integer`: Number of public scores the user have
  * profileTheme `string`: Theme (background) for the profile
  * registrationDate `string`: Date the user signed up
  * id `string`: Identifier of the user
  * locale [FlatLocales](#flatlocales)
  * privateProfile `boolean`: Tell either this user profile is private or not (individual accounts only)
  * type `string` (values: user, guest): The type of account

### UserDetailsAdmin
* UserDetailsAdmin: User details (view for organization teacher / admin)
  * id `string`: The user unique identifier
  * isPowerUser `boolean`: User license status. 'True' if user is an individual Power user
  * name `string`: A displayable name for the user
  * picture `string`: User pictue
  * printableName `string`: The name that can be directly printed (name or username)
  * username `string`: The user name (unique for the organization)
  * classRole [ClassRoles](#classroles)
  * htmlUrl `string`: Link to user profile (for Indiv. users only)
  * organization `string`: Organization ID (for Edu users only)
  * organizationRole [OrganizationRoles](#organizationroles)
  * email `string`: Email of the user
  * lastActivityDate `string`: Date of the last user activity
  * license `object`: Current active license of the user
    * active `boolean`: ID of the current license
    * expirationDate `string`: Date when the license expires
    * id `string`: ID of the current license
    * mode [LicenseMode](#licensemode)
    * source [LicenseSources](#licensesources)

### UserInstruments
* UserInstruments `array`: An array of the instrument identifiers that the user plays.
  * items `string`

### UserPublic
* UserPublic: Public User details
  * id `string`: The user unique identifier
  * isPowerUser `boolean`: User license status. 'True' if user is an individual Power user
  * name `string`: A displayable name for the user
  * picture `string`: User pictue
  * printableName `string`: The name that can be directly printed (name or username)
  * username `string`: The user name (unique for the organization)
  * classRole [ClassRoles](#classroles)
  * htmlUrl `string`: Link to user profile (for Indiv. users only)
  * organization `string`: Organization ID (for Edu users only)
  * organizationRole [OrganizationRoles](#organizationroles)
  * bio `string`: User's biography
  * followersCount `integer`: Number of followers the user have
  * followingCount `integer`: Number of people the user follow
  * instruments [UserInstruments](#userinstruments)
  * likedScoresCount `integer`: Number of the scores liked by the user
  * ownedPublicScoresCount `integer`: Number of public scores the user have
  * profileTheme `string`: Theme (background) for the profile
  * registrationDate `string`: Date the user signed up

### UserPublicSummary
* UserPublicSummary: Public User details summary
  * id `string`: The user unique identifier
  * isPowerUser `boolean`: User license status. 'True' if user is an individual Power user
  * name `string`: A displayable name for the user
  * picture `string`: User pictue
  * printableName `string`: The name that can be directly printed (name or username)
  * username `string`: The user name (unique for the organization)
  * classRole [ClassRoles](#classroles)
  * htmlUrl `string`: Link to user profile (for Indiv. users only)
  * organization `string`: Organization ID (for Edu users only)
  * organizationRole [OrganizationRoles](#organizationroles)


