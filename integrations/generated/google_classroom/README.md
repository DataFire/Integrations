# @datafire/google_classroom

Client library for Google Classroom

## Installation and Usage
```bash
npm install --save datafire @datafire/google_classroom
```

```js
let datafire = require('datafire');
let google_classroom = require('@datafire/google_classroom').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: "",
});

google_classroom.registrations.create({}).then(data => {
  console.log(data);
})
```

## Description
Manages classes, rosters, and invitations in Google Classroom.

## Actions
### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
google_classroom.oauthCallback({
  "code": ""
}, context)
```

#### Parameters
* code (string) **required**

### oauthRefresh
Exchange a refresh_token for an access_token


```js
google_classroom.oauthRefresh(null, context)
```

#### Parameters
*This action has no parameters*

### courses.list
Returns a list of courses that the requesting user is permitted to view,
restricted to those that match the request. Returned courses are ordered by
creation time, with the most recently created coming first.

This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.
* `INVALID_ARGUMENT` if the query argument is malformed.
* `NOT_FOUND` if any users specified in the query arguments do not exist.


```js
google_classroom.courses.list({}, context)
```

#### Parameters
* courseStates (array) - Restricts returned courses to those in one of the specified states
* pageSize (integer) - Maximum number of items to return. Zero or unspecified indicates that the
* teacherId (string) - Restricts returned courses to those having a teacher with the specified
* studentId (string) - Restricts returned courses to those having a student with the specified
* pageToken (string) - nextPageToken
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.create
Creates a course.

The user specified in `ownerId` is the owner of the created course
and added as a teacher.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to create
courses or for access errors.
* `NOT_FOUND` if the primary teacher is not a valid user.
* `FAILED_PRECONDITION` if the course owner's account is disabled or for
the following request errors:
    * UserGroupsMembershipLimitReached
* `ALREADY_EXISTS` if an alias was specified in the `id` and
already exists.


```js
google_classroom.courses.create({}, context)
```

#### Parameters
* body (object) - A Course in Classroom.
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.aliases.list
Returns a list of aliases for a course.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the
course or for access errors.
* `NOT_FOUND` if the course does not exist.


```js
google_classroom.courses.aliases.list({
  "courseId": ""
}, context)
```

#### Parameters
* courseId (string) **required** - The identifier of the course.
* pageSize (integer) - Maximum number of items to return. Zero or unspecified indicates that the
* pageToken (string) - nextPageToken
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.aliases.create
Creates an alias for a course.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to create the
alias or for access errors.
* `NOT_FOUND` if the course does not exist.
* `ALREADY_EXISTS` if the alias already exists.
* `FAILED_PRECONDITION` if the alias requested does not make sense for the
  requesting user or course (for example, if a user not in a domain
  attempts to access a domain-scoped alias).


```js
google_classroom.courses.aliases.create({
  "courseId": ""
}, context)
```

#### Parameters
* courseId (string) **required** - Identifier of the course to alias.
* body (object) - Alternative identifier for a course.
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.aliases.delete
Deletes an alias of a course.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to remove the
alias or for access errors.
* `NOT_FOUND` if the alias does not exist.
* `FAILED_PRECONDITION` if the alias requested does not make sense for the
  requesting user or course (for example, if a user not in a domain
  attempts to delete a domain-scoped alias).


```js
google_classroom.courses.aliases.delete({
  "courseId": "",
  "alias": ""
}, context)
```

#### Parameters
* courseId (string) **required** - Identifier of the course whose alias should be deleted.
* alias (string) **required** - Alias to delete.
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.announcements.list
Returns a list of announcements that the requester is permitted to view.

Course students may only view `PUBLISHED` announcements. Course teachers
and domain administrators may view all announcements.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access
the requested course or for access errors.
* `INVALID_ARGUMENT` if the request is malformed.
* `NOT_FOUND` if the requested course does not exist.


```js
google_classroom.courses.announcements.list({
  "courseId": ""
}, context)
```

#### Parameters
* announcementStates (array) - Restriction on the `state` of announcements returned.
* courseId (string) **required** - Identifier of the course.
* orderBy (string) - Optional sort ordering for results. A comma-separated list of fields with
* pageSize (integer) - Maximum number of items to return. Zero or unspecified indicates that the
* pageToken (string) - nextPageToken
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.announcements.create
Creates an announcement.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the
requested course, create announcements in the requested course, share a
Drive attachment, or for access errors.
* `INVALID_ARGUMENT` if the request is malformed.
* `NOT_FOUND` if the requested course does not exist.
* `FAILED_PRECONDITION` for the following request error:
    * AttachmentNotVisible


```js
google_classroom.courses.announcements.create({
  "courseId": ""
}, context)
```

#### Parameters
* body (object) - Announcement created by a teacher for students of the course
* courseId (string) **required** - Identifier of the course.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.announcements.delete
Deletes an announcement.

This request must be made by the Developer Console project of the
[OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
create the corresponding announcement item.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting developer project did not create
the corresponding announcement, if the requesting user is not permitted
to delete the requested course or for access errors.
* `FAILED_PRECONDITION` if the requested announcement has already been
deleted.
* `NOT_FOUND` if no course exists with the requested ID.


```js
google_classroom.courses.announcements.delete({
  "courseId": "",
  "id": ""
}, context)
```

#### Parameters
* courseId (string) **required** - Identifier of the course.
* id (string) **required** - Identifier of the announcement to delete.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.announcements.get
Returns an announcement.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the
requested course or announcement, or for access errors.
* `INVALID_ARGUMENT` if the request is malformed.
* `NOT_FOUND` if the requested course or announcement does not exist.


```js
google_classroom.courses.announcements.get({
  "courseId": "",
  "id": ""
}, context)
```

#### Parameters
* courseId (string) **required** - Identifier of the course.
* id (string) **required** - Identifier of the announcement.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.announcements.patch
Updates one or more fields of an announcement.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting developer project did not create
the corresponding announcement or for access errors.
* `INVALID_ARGUMENT` if the request is malformed.
* `FAILED_PRECONDITION` if the requested announcement has already been
deleted.
* `NOT_FOUND` if the requested course or announcement does not exist


```js
google_classroom.courses.announcements.patch({
  "courseId": "",
  "id": ""
}, context)
```

#### Parameters
* body (object) - Announcement created by a teacher for students of the course
* courseId (string) **required** - Identifier of the course.
* id (string) **required** - Identifier of the announcement.
* updateMask (string) - Mask that identifies which fields on the announcement to update.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.announcements.modifyAssignees
Modifies assignee mode and options of an announcement.

Only a teacher of the course that contains the announcement may
call this method.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the
requested course or course work or for access errors.
* `INVALID_ARGUMENT` if the request is malformed.
* `NOT_FOUND` if the requested course or course work does not exist.


```js
google_classroom.courses.announcements.modifyAssignees({
  "courseId": "",
  "id": ""
}, context)
```

#### Parameters
* body (object) - Request to modify assignee mode and options of an announcement.
* courseId (string) **required** - Identifier of the course.
* id (string) **required** - Identifier of the announcement.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.courseWork.list
Returns a list of course work that the requester is permitted to view.

Course students may only view `PUBLISHED` course work. Course teachers
and domain administrators may view all course work.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access
the requested course or for access errors.
* `INVALID_ARGUMENT` if the request is malformed.
* `NOT_FOUND` if the requested course does not exist.


```js
google_classroom.courses.courseWork.list({
  "courseId": ""
}, context)
```

#### Parameters
* courseId (string) **required** - Identifier of the course.
* courseWorkStates (array) - Restriction on the work status to return. Only courseWork that matches
* pageSize (integer) - Maximum number of items to return. Zero or unspecified indicates that the
* orderBy (string) - Optional sort ordering for results. A comma-separated list of fields with
* pageToken (string) - nextPageToken
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.courseWork.create
Creates course work.

The resulting course work (and corresponding student submissions) are
associated with the Developer Console project of the
[OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
make the request. Classroom API requests to modify course work and student
submissions must be made with an OAuth client ID from the associated
Developer Console project.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the
requested course, create course work in the requested course, share a
Drive attachment, or for access errors.
* `INVALID_ARGUMENT` if the request is malformed.
* `NOT_FOUND` if the requested course does not exist.
* `FAILED_PRECONDITION` for the following request error:
    * AttachmentNotVisible


```js
google_classroom.courses.courseWork.create({
  "courseId": ""
}, context)
```

#### Parameters
* courseId (string) **required** - Identifier of the course.
* body (object) - Course work created by a teacher for students of the course.
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.courseWork.studentSubmissions.list
Returns a list of student submissions that the requester is permitted to
view, factoring in the OAuth scopes of the request.
`-` may be specified as the `course_work_id` to include student
submissions for multiple course work items.

Course students may only view their own work. Course teachers
and domain administrators may view all student submissions.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the
requested course or course work, or for access errors.
* `INVALID_ARGUMENT` if the request is malformed.
* `NOT_FOUND` if the requested course does not exist.


```js
google_classroom.courses.courseWork.studentSubmissions.list({
  "courseId": "",
  "courseWorkId": ""
}, context)
```

#### Parameters
* courseId (string) **required** - Identifier of the course.
* courseWorkId (string) **required** - Identifier of the student work to request.
* late (string) - Requested lateness value. If specified, returned student submissions are
* pageSize (integer) - Maximum number of items to return. Zero or unspecified indicates that the
* pageToken (string) - nextPageToken
* states (array) - Requested submission states. If specified, returned student submissions
* userId (string) - Optional argument to restrict returned student work to those owned by the
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.courseWork.studentSubmissions.get
Returns a student submission.

* `PERMISSION_DENIED` if the requesting user is not permitted to access the
requested course, course work, or student submission or for
access errors.
* `INVALID_ARGUMENT` if the request is malformed.
* `NOT_FOUND` if the requested course, course work, or student submission
does not exist.


```js
google_classroom.courses.courseWork.studentSubmissions.get({
  "courseId": "",
  "courseWorkId": "",
  "id": ""
}, context)
```

#### Parameters
* courseId (string) **required** - Identifier of the course.
* courseWorkId (string) **required** - Identifier of the course work.
* id (string) **required** - Identifier of the student submission.
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.courseWork.studentSubmissions.patch
Updates one or more fields of a student submission.

See google.classroom.v1.StudentSubmission for details
of which fields may be updated and who may change them.

This request must be made by the Developer Console project of the
[OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
create the corresponding course work item.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting developer project did not create
the corresponding course work, if the user is not permitted to make the
requested modification to the student submission, or for
access errors.
* `INVALID_ARGUMENT` if the request is malformed.
* `NOT_FOUND` if the requested course, course work, or student submission
does not exist.


```js
google_classroom.courses.courseWork.studentSubmissions.patch({
  "courseId": "",
  "courseWorkId": "",
  "id": ""
}, context)
```

#### Parameters
* body (object) - Student submission for course work.
* courseId (string) **required** - Identifier of the course.
* courseWorkId (string) **required** - Identifier of the course work.
* id (string) **required** - Identifier of the student submission.
* updateMask (string) - Mask that identifies which fields on the student submission to update.
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.courseWork.studentSubmissions.modifyAttachments
Modifies attachments of student submission.

Attachments may only be added to student submissions belonging to course
work objects with a `workType` of `ASSIGNMENT`.

This request must be made by the Developer Console project of the
[OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
create the corresponding course work item.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the
requested course or course work, if the user is not permitted to modify
attachments on the requested student submission, or for
access errors.
* `INVALID_ARGUMENT` if the request is malformed.
* `NOT_FOUND` if the requested course, course work, or student submission
does not exist.


```js
google_classroom.courses.courseWork.studentSubmissions.modifyAttachments({
  "courseId": "",
  "courseWorkId": "",
  "id": ""
}, context)
```

#### Parameters
* courseId (string) **required** - Identifier of the course.
* courseWorkId (string) **required** - Identifier of the course work.
* id (string) **required** - Identifier of the student submission.
* body (object) - Request to modify the attachments of a student submission.
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.courseWork.studentSubmissions.reclaim
Reclaims a student submission on behalf of the student that owns it.

Reclaiming a student submission transfers ownership of attached Drive
files to the student and update the submission state.

Only the student that owns the requested student submission may call this
method, and only for a student submission that has been turned in.

This request must be made by the Developer Console project of the
[OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
create the corresponding course work item.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the
requested course or course work, unsubmit the requested student submission,
or for access errors.
* `FAILED_PRECONDITION` if the student submission has not been turned in.
* `INVALID_ARGUMENT` if the request is malformed.
* `NOT_FOUND` if the requested course, course work, or student submission
does not exist.


```js
google_classroom.courses.courseWork.studentSubmissions.reclaim({
  "courseId": "",
  "courseWorkId": "",
  "id": ""
}, context)
```

#### Parameters
* courseId (string) **required** - Identifier of the course.
* courseWorkId (string) **required** - Identifier of the course work.
* id (string) **required** - Identifier of the student submission.
* body (object) - Request to reclaim a student submission.
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.courseWork.studentSubmissions.return
Returns a student submission.

Returning a student submission transfers ownership of attached Drive
files to the student and may also update the submission state.
Unlike the Classroom application, returning a student submission does not
set assignedGrade to the draftGrade value.

Only a teacher of the course that contains the requested student submission
may call this method.

This request must be made by the Developer Console project of the
[OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
create the corresponding course work item.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the
requested course or course work, return the requested student submission,
or for access errors.
* `INVALID_ARGUMENT` if the request is malformed.
* `NOT_FOUND` if the requested course, course work, or student submission
does not exist.


```js
google_classroom.courses.courseWork.studentSubmissions.return({
  "courseId": "",
  "courseWorkId": "",
  "id": ""
}, context)
```

#### Parameters
* courseId (string) **required** - Identifier of the course.
* courseWorkId (string) **required** - Identifier of the course work.
* id (string) **required** - Identifier of the student submission.
* body (object) - Request to return a student submission.
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.courseWork.studentSubmissions.turnIn
Turns in a student submission.

Turning in a student submission transfers ownership of attached Drive
files to the teacher and may also update the submission state.

This may only be called by the student that owns the specified student
submission.

This request must be made by the Developer Console project of the
[OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
create the corresponding course work item.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the
requested course or course work, turn in the requested student submission,
or for access errors.
* `INVALID_ARGUMENT` if the request is malformed.
* `NOT_FOUND` if the requested course, course work, or student submission
does not exist.


```js
google_classroom.courses.courseWork.studentSubmissions.turnIn({
  "courseId": "",
  "courseWorkId": "",
  "id": ""
}, context)
```

#### Parameters
* courseId (string) **required** - Identifier of the course.
* courseWorkId (string) **required** - Identifier of the course work.
* id (string) **required** - Identifier of the student submission.
* body (object) - Request to turn in a student submission.
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.courseWork.delete
Deletes a course work.

This request must be made by the Developer Console project of the
[OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
create the corresponding course work item.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting developer project did not create
the corresponding course work, if the requesting user is not permitted
to delete the requested course or for access errors.
* `FAILED_PRECONDITION` if the requested course work has already been
deleted.
* `NOT_FOUND` if no course exists with the requested ID.


```js
google_classroom.courses.courseWork.delete({
  "courseId": "",
  "id": ""
}, context)
```

#### Parameters
* courseId (string) **required** - Identifier of the course.
* id (string) **required** - Identifier of the course work to delete.
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.courseWork.get
Returns course work.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the
requested course or course work, or for access errors.
* `INVALID_ARGUMENT` if the request is malformed.
* `NOT_FOUND` if the requested course or course work does not exist.


```js
google_classroom.courses.courseWork.get({
  "courseId": "",
  "id": ""
}, context)
```

#### Parameters
* courseId (string) **required** - Identifier of the course.
* id (string) **required** - Identifier of the course work.
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.courseWork.patch
Updates one or more fields of a course work.

See google.classroom.v1.CourseWork for details
of which fields may be updated and who may change them.

This request must be made by the Developer Console project of the
[OAuth client ID](https://support.google.com/cloud/answer/6158849) used to
create the corresponding course work item.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting developer project did not create
the corresponding course work, if the user is not permitted to make the
requested modification to the student submission, or for
access errors.
* `INVALID_ARGUMENT` if the request is malformed.
* `FAILED_PRECONDITION` if the requested course work has already been
deleted.
* `NOT_FOUND` if the requested course, course work, or student submission
does not exist.


```js
google_classroom.courses.courseWork.patch({
  "courseId": "",
  "id": ""
}, context)
```

#### Parameters
* body (object) - Course work created by a teacher for students of the course.
* courseId (string) **required** - Identifier of the course.
* id (string) **required** - Identifier of the course work.
* updateMask (string) - Mask that identifies which fields on the course work to update.
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.courseWork.modifyAssignees
Modifies assignee mode and options of a coursework.

Only a teacher of the course that contains the coursework may
call this method.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the
requested course or course work or for access errors.
* `INVALID_ARGUMENT` if the request is malformed.
* `NOT_FOUND` if the requested course or course work does not exist.


```js
google_classroom.courses.courseWork.modifyAssignees({
  "courseId": "",
  "id": ""
}, context)
```

#### Parameters
* body (object) - Request to modify assignee mode and options of a coursework.
* courseId (string) **required** - Identifier of the course.
* id (string) **required** - Identifier of the coursework.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.students.list
Returns a list of students of this course that the requester
is permitted to view.

This method returns the following error codes:

* `NOT_FOUND` if the course does not exist.
* `PERMISSION_DENIED` for access errors.


```js
google_classroom.courses.students.list({
  "courseId": ""
}, context)
```

#### Parameters
* courseId (string) **required** - Identifier of the course.
* pageSize (integer) - Maximum number of items to return. Zero means no maximum.
* pageToken (string) - nextPageToken
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.students.create
Adds a user as a student of a course.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to create
students in this course or for access errors.
* `NOT_FOUND` if the requested course ID does not exist.
* `FAILED_PRECONDITION` if the requested user's account is disabled,
for the following request errors:
    * CourseMemberLimitReached
    * CourseNotModifiable
    * UserGroupsMembershipLimitReached
* `ALREADY_EXISTS` if the user is already a student or teacher in the
course.


```js
google_classroom.courses.students.create({
  "courseId": ""
}, context)
```

#### Parameters
* courseId (string) **required** - Identifier of the course to create the student in.
* enrollmentCode (string) - Enrollment code of the course to create the student in.
* body (object) - Student in a course.
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.students.delete
Deletes a student of a course.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to delete
students of this course or for access errors.
* `NOT_FOUND` if no student of this course has the requested ID or if the
course does not exist.


```js
google_classroom.courses.students.delete({
  "courseId": "",
  "userId": ""
}, context)
```

#### Parameters
* courseId (string) **required** - Identifier of the course.
* userId (string) **required** - Identifier of the student to delete. The identifier can be one of the
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.students.get
Returns a student of a course.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to view
students of this course or for access errors.
* `NOT_FOUND` if no student of this course has the requested ID or if the
course does not exist.


```js
google_classroom.courses.students.get({
  "courseId": "",
  "userId": ""
}, context)
```

#### Parameters
* courseId (string) **required** - Identifier of the course.
* userId (string) **required** - Identifier of the student to return. The identifier can be one of the
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.teachers.list
Returns a list of teachers of this course that the requester
is permitted to view.

This method returns the following error codes:

* `NOT_FOUND` if the course does not exist.
* `PERMISSION_DENIED` for access errors.


```js
google_classroom.courses.teachers.list({
  "courseId": ""
}, context)
```

#### Parameters
* courseId (string) **required** - Identifier of the course.
* pageSize (integer) - Maximum number of items to return. Zero means no maximum.
* pageToken (string) - nextPageToken
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.teachers.create
Creates a teacher of a course.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not  permitted to create
teachers in this course or for access errors.
* `NOT_FOUND` if the requested course ID does not exist.
* `FAILED_PRECONDITION` if the requested user's account is disabled,
for the following request errors:
    * CourseMemberLimitReached
    * CourseNotModifiable
    * CourseTeacherLimitReached
    * UserGroupsMembershipLimitReached
* `ALREADY_EXISTS` if the user is already a teacher or student in the
course.


```js
google_classroom.courses.teachers.create({
  "courseId": ""
}, context)
```

#### Parameters
* courseId (string) **required** - Identifier of the course.
* body (object) - Teacher of a course.
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.teachers.delete
Deletes a teacher of a course.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to delete
teachers of this course or for access errors.
* `NOT_FOUND` if no teacher of this course has the requested ID or if the
course does not exist.
* `FAILED_PRECONDITION` if the requested ID belongs to the primary teacher
of this course.


```js
google_classroom.courses.teachers.delete({
  "courseId": "",
  "userId": ""
}, context)
```

#### Parameters
* courseId (string) **required** - Identifier of the course.
* userId (string) **required** - Identifier of the teacher to delete. The identifier can be one of the
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.teachers.get
Returns a teacher of a course.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to view
teachers of this course or for access errors.
* `NOT_FOUND` if no teacher of this course has the requested ID or if the
course does not exist.


```js
google_classroom.courses.teachers.get({
  "courseId": "",
  "userId": ""
}, context)
```

#### Parameters
* courseId (string) **required** - Identifier of the course.
* userId (string) **required** - Identifier of the teacher to return. The identifier can be one of the
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.delete
Deletes a course.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to delete the
requested course or for access errors.
* `NOT_FOUND` if no course exists with the requested ID.


```js
google_classroom.courses.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Identifier of the course to delete.
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.get
Returns a course.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the
requested course or for access errors.
* `NOT_FOUND` if no course exists with the requested ID.


```js
google_classroom.courses.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Identifier of the course to return.
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.patch
Updates one or more fields in a course.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to modify the
requested course or for access errors.
* `NOT_FOUND` if no course exists with the requested ID.
* `INVALID_ARGUMENT` if invalid fields are specified in the update mask or
if no update mask is supplied.
* `FAILED_PRECONDITION` for the following request errors:
    * CourseNotModifiable


```js
google_classroom.courses.patch({
  "id": ""
}, context)
```

#### Parameters
* body (object) - A Course in Classroom.
* id (string) **required** - Identifier of the course to update.
* updateMask (string) - Mask that identifies which fields on the course to update.
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### courses.update
Updates a course.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to modify the
requested course or for access errors.
* `NOT_FOUND` if no course exists with the requested ID.
* `FAILED_PRECONDITION` for the following request errors:
    * CourseNotModifiable


```js
google_classroom.courses.update({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Identifier of the course to update.
* body (object) - A Course in Classroom.
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### invitations.list
Returns a list of invitations that the requesting user is permitted to
view, restricted to those that match the list request.

*Note:* At least one of `user_id` or `course_id` must be supplied. Both
fields can be supplied.

This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.


```js
google_classroom.invitations.list({}, context)
```

#### Parameters
* courseId (string) - Restricts returned invitations to those for a course with the specified
* pageSize (integer) - Maximum number of items to return. Zero means no maximum.
* userId (string) - Restricts returned invitations to those for a specific user. The identifier
* pageToken (string) - nextPageToken
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### invitations.create
Creates an invitation. Only one invitation for a user and course may exist
at a time. Delete and re-create an invitation to make changes.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to create
invitations for this course or for access errors.
* `NOT_FOUND` if the course or the user does not exist.
* `FAILED_PRECONDITION` if the requested user's account is disabled or if
the user already has this role or a role with greater permissions.
* `ALREADY_EXISTS` if an invitation for the specified user and course
already exists.


```js
google_classroom.invitations.create({}, context)
```

#### Parameters
* body (object) - An invitation to join a course.
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### invitations.delete
Deletes an invitation.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to delete the
requested invitation or for access errors.
* `NOT_FOUND` if no invitation exists with the requested ID.


```js
google_classroom.invitations.delete({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Identifier of the invitation to delete.
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### invitations.get
Returns an invitation.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to view the
requested invitation or for access errors.
* `NOT_FOUND` if no invitation exists with the requested ID.


```js
google_classroom.invitations.get({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Identifier of the invitation to return.
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### invitations.accept
Accepts an invitation, removing it and adding the invited user to the
teachers or students (as appropriate) of the specified course. Only the
invited user may accept an invitation.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to accept the
requested invitation or for access errors.
* `FAILED_PRECONDITION` for the following request errors:
    * CourseMemberLimitReached
    * CourseNotModifiable
    * CourseTeacherLimitReached
    * UserGroupsMembershipLimitReached
* `NOT_FOUND` if no invitation exists with the requested ID.


```js
google_classroom.invitations.accept({
  "id": ""
}, context)
```

#### Parameters
* id (string) **required** - Identifier of the invitation to accept.
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### registrations.create
Creates a `Registration`, causing Classroom to start sending notifications
from the provided `feed` to the provided `destination`.

Returns the created `Registration`. Currently, this will be the same as
the argument, but with server-assigned fields such as `expiry_time` and
`id` filled in.

Note that any value specified for the `expiry_time` or `id` fields will be
ignored.

While Classroom may validate the `destination` and return errors on a best
effort basis, it is the caller's responsibility to ensure that it exists
and that Classroom has permission to publish to it.

This method may return the following error codes:

* `PERMISSION_DENIED` if:
    * the authenticated user does not have permission to receive
      notifications from the requested field; or
    * the credential provided does not include the appropriate scope for the
      requested feed.
    * another access error is encountered.
* `INVALID_ARGUMENT` if:
    * no `destination` is specified, or the specified `destination` is not
      valid; or
    * no `feed` is specified, or the specified `feed` is not valid.
* `NOT_FOUND` if:
    * the specified `feed` cannot be located, or the requesting user does not
      have permission to determine whether or not it exists; or
    * the specified `destination` cannot be located, or Classroom has not
      been granted permission to publish to it.


```js
google_classroom.registrations.create({}, context)
```

#### Parameters
* body (object) - An instruction to Classroom to send notifications from the `feed` to the
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### registrations.delete
Deletes a `Registration`, causing Classroom to stop sending notifications
for that `Registration`.


```js
google_classroom.registrations.delete({
  "registrationId": ""
}, context)
```

#### Parameters
* registrationId (string) **required** - The `registration_id` of the `Registration` to be deleted.
* $.xgafv (string) - V1 error format.
* access_token (string) - OAuth access token.
* alt (string) - Data format for response.
* bearer_token (string) - OAuth bearer token.
* callback (string) - JSONP
* fields (string) - Selector specifying which fields to include in a partial response.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* oauth_token (string) - OAuth 2.0 token for the current user.
* pp (boolean) - Pretty-print response.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### userProfiles.guardianInvitations.list
Returns a list of guardian invitations that the requesting user is
permitted to view, filtered by the parameters provided.

This method returns the following error codes:

* `PERMISSION_DENIED` if a `student_id` is specified, and the requesting
  user is not permitted to view guardian invitations for that student, if
  `"-"` is specified as the `student_id` and the user is not a domain
  administrator, if guardians are not enabled for the domain in question,
  or for other access errors.
* `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot
  be recognized (it is not an email address, nor a `student_id` from the
  API, nor the literal string `me`). May also be returned if an invalid
  `page_token` or `state` is provided.
* `NOT_FOUND` if a `student_id` is specified, and its format can be
  recognized, but Classroom has no record of that student.


```js
google_classroom.userProfiles.guardianInvitations.list({
  "studentId": ""
}, context)
```

#### Parameters
* studentId (string) **required** - The ID of the student whose guardian invitations are to be returned.
* pageSize (integer) - Maximum number of items to return. Zero or unspecified indicates that the
* invitedEmailAddress (string) - If specified, only results with the specified `invited_email_address`
* states (array) - If specified, only results with the specified `state` values will be
* pageToken (string) - nextPageToken
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### userProfiles.guardianInvitations.create
Creates a guardian invitation, and sends an email to the guardian asking
them to confirm that they are the student's guardian.

Once the guardian accepts the invitation, their `state` will change to
`COMPLETED` and they will start receiving guardian notifications. A
`Guardian` resource will also be created to represent the active guardian.

The request object must have the `student_id` and
`invited_email_address` fields set. Failing to set these fields, or
setting any other fields in the request, will result in an error.

This method returns the following error codes:

* `PERMISSION_DENIED` if the current user does not have permission to
  manage guardians, if the guardian in question has already rejected
  too many requests for that student, if guardians are not enabled for the
  domain in question, or for other access errors.
* `RESOURCE_EXHAUSTED` if the student or guardian has exceeded the guardian
  link limit.
* `INVALID_ARGUMENT` if the guardian email address is not valid (for
  example, if it is too long), or if the format of the student ID provided
  cannot be recognized (it is not an email address, nor a `user_id` from
  this API). This error will also be returned if read-only fields are set,
  or if the `state` field is set to to a value other than `PENDING`.
* `NOT_FOUND` if the student ID provided is a valid student ID, but
  Classroom has no record of that student.
* `ALREADY_EXISTS` if there is already a pending guardian invitation for
  the student and `invited_email_address` provided, or if the provided
  `invited_email_address` matches the Google account of an existing
  `Guardian` for this user.


```js
google_classroom.userProfiles.guardianInvitations.create({
  "studentId": ""
}, context)
```

#### Parameters
* studentId (string) **required** - ID of the student (in standard format)
* body (object) - An invitation to become the guardian of a specified user, sent to a specified
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### userProfiles.guardianInvitations.get
Returns a specific guardian invitation.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to view
  guardian invitations for the student identified by the `student_id`, if
  guardians are not enabled for the domain in question, or for other
  access errors.
* `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot
  be recognized (it is not an email address, nor a `student_id` from the
  API, nor the literal string `me`).
* `NOT_FOUND` if Classroom cannot find any record of the given student or
  `invitation_id`. May also be returned if the student exists, but the
  requesting user does not have access to see that student.


```js
google_classroom.userProfiles.guardianInvitations.get({
  "studentId": "",
  "invitationId": ""
}, context)
```

#### Parameters
* studentId (string) **required** - The ID of the student whose guardian invitation is being requested.
* invitationId (string) **required** - The `id` field of the `GuardianInvitation` being requested.
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### userProfiles.guardianInvitations.patch
Modifies a guardian invitation.

Currently, the only valid modification is to change the `state` from
`PENDING` to `COMPLETE`. This has the effect of withdrawing the invitation.

This method returns the following error codes:

* `PERMISSION_DENIED` if the current user does not have permission to
  manage guardians, if guardians are not enabled for the domain in question
  or for other access errors.
* `FAILED_PRECONDITION` if the guardian link is not in the `PENDING` state.
* `INVALID_ARGUMENT` if the format of the student ID provided
  cannot be recognized (it is not an email address, nor a `user_id` from
  this API), or if the passed `GuardianInvitation` has a `state` other than
  `COMPLETE`, or if it modifies fields other than `state`.
* `NOT_FOUND` if the student ID provided is a valid student ID, but
  Classroom has no record of that student, or if the `id` field does not
  refer to a guardian invitation known to Classroom.


```js
google_classroom.userProfiles.guardianInvitations.patch({
  "studentId": "",
  "invitationId": ""
}, context)
```

#### Parameters
* studentId (string) **required** - The ID of the student whose guardian invitation is to be modified.
* invitationId (string) **required** - The `id` field of the `GuardianInvitation` to be modified.
* updateMask (string) - Mask that identifies which fields on the course to update.
* body (object) - An invitation to become the guardian of a specified user, sent to a specified
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### userProfiles.guardians.list
Returns a list of guardians that the requesting user is permitted to
view, restricted to those that match the request.

To list guardians for any student that the requesting user may view
guardians for, use the literal character `-` for the student ID.

This method returns the following error codes:

* `PERMISSION_DENIED` if a `student_id` is specified, and the requesting
  user is not permitted to view guardian information for that student, if
  `"-"` is specified as the `student_id` and the user is not a domain
  administrator, if guardians are not enabled for the domain in question,
  if the `invited_email_address` filter is set by a user who is not a
  domain administrator, or for other access errors.
* `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot
  be recognized (it is not an email address, nor a `student_id` from the
  API, nor the literal string `me`). May also be returned if an invalid
  `page_token` is provided.
* `NOT_FOUND` if a `student_id` is specified, and its format can be
  recognized, but Classroom has no record of that student.


```js
google_classroom.userProfiles.guardians.list({
  "studentId": ""
}, context)
```

#### Parameters
* studentId (string) **required** - Filter results by the student who the guardian is linked to.
* pageSize (integer) - Maximum number of items to return. Zero or unspecified indicates that the
* invitedEmailAddress (string) - Filter results by the email address that the original invitation was sent
* pageToken (string) - nextPageToken
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### userProfiles.guardians.delete
Deletes a guardian.

The guardian will no longer receive guardian notifications and the guardian
will no longer be accessible via the API.

This method returns the following error codes:

* `PERMISSION_DENIED` if no user that matches the provided `student_id`
  is visible to the requesting user, if the requesting user is not
  permitted to manage guardians for the student identified by the
  `student_id`, if guardians are not enabled for the domain in question,
  or for other access errors.
* `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot
  be recognized (it is not an email address, nor a `student_id` from the
  API).
* `NOT_FOUND` if the requesting user is permitted to modify guardians for
  the requested `student_id`, but no `Guardian` record exists for that
  student with the provided `guardian_id`.


```js
google_classroom.userProfiles.guardians.delete({
  "studentId": "",
  "guardianId": ""
}, context)
```

#### Parameters
* studentId (string) **required** - The student whose guardian is to be deleted. One of the following:
* guardianId (string) **required** - The `id` field from a `Guardian`.
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### userProfiles.guardians.get
Returns a specific guardian.

This method returns the following error codes:

* `PERMISSION_DENIED` if no user that matches the provided `student_id`
  is visible to the requesting user, if the requesting user is not
  permitted to view guardian information for the student identified by the
  `student_id`, if guardians are not enabled for the domain in question,
  or for other access errors.
* `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot
  be recognized (it is not an email address, nor a `student_id` from the
  API, nor the literal string `me`).
* `NOT_FOUND` if the requesting user is permitted to view guardians for
  the requested `student_id`, but no `Guardian` record exists for that
  student that matches the provided `guardian_id`.


```js
google_classroom.userProfiles.guardians.get({
  "studentId": "",
  "guardianId": ""
}, context)
```

#### Parameters
* studentId (string) **required** - The student whose guardian is being requested. One of the following:
* guardianId (string) **required** - The `id` field from a `Guardian`.
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

### userProfiles.get
Returns a user profile.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access
this user profile, if no profile exists with the requested ID, or for
access errors.


```js
google_classroom.userProfiles.get({
  "userId": ""
}, context)
```

#### Parameters
* userId (string) **required** - Identifier of the profile to return. The identifier can be one of the
* access_token (string) - OAuth access token.
* prettyPrint (boolean) - Returns response with indentations and line breaks.
* key (string) - API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
* quotaUser (string) - Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
* pp (boolean) - Pretty-print response.
* fields (string) - Selector specifying which fields to include in a partial response.
* alt (string) - Data format for response.
* $.xgafv (string) - V1 error format.
* callback (string) - JSONP
* oauth_token (string) - OAuth 2.0 token for the current user.
* uploadType (string) - Legacy upload protocol for media (e.g. "media", "multipart").
* bearer_token (string) - OAuth bearer token.
* upload_protocol (string) - Upload protocol for media (e.g. "raw", "multipart").

