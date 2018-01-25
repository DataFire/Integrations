# @datafire/google_classroom

Client library for Google Classroom

## Installation and Usage
```bash
npm install --save @datafire/google_classroom
```
```js
let google_classroom = require('@datafire/google_classroom').create({
  access_token: "",
  refresh_token: "",
  client_id: "",
  client_secret: "",
  redirect_uri: ""
});

google_classroom.registrations.create({}).then(data => {
  console.log(data);
});
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
google_classroom.oauthRefresh(null, context)
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

#### Input
* input `object`
  * courseStates `array`: Restricts returned courses to those in one of the specified states
  * pageSize `integer`: Maximum number of items to return. Zero or unspecified indicates that the
  * teacherId `string`: Restricts returned courses to those having a teacher with the specified
  * studentId `string`: Restricts returned courses to those having a student with the specified
  * pageToken `string`: nextPageToken
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListCoursesResponse](#listcoursesresponse)

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

#### Input
* input `object`
  * body [Course](#course)
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Course](#course)

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

#### Input
* input `object`
  * courseId **required** `string`: The identifier of the course.
  * pageSize `integer`: Maximum number of items to return. Zero or unspecified indicates that the
  * pageToken `string`: nextPageToken
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListCourseAliasesResponse](#listcoursealiasesresponse)

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

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course to alias.
  * body [CourseAlias](#coursealias)
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [CourseAlias](#coursealias)

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

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course whose alias should be deleted.
  * alias **required** `string`: Alias to delete.
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Empty](#empty)

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

#### Input
* input `object`
  * announcementStates `array`: Restriction on the `state` of announcements returned.
  * courseId **required** `string`: Identifier of the course.
  * orderBy `string`: Optional sort ordering for results. A comma-separated list of fields with
  * pageSize `integer`: Maximum number of items to return. Zero or unspecified indicates that the
  * pageToken `string`: nextPageToken
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListAnnouncementsResponse](#listannouncementsresponse)

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

#### Input
* input `object`
  * body [Announcement](#announcement)
  * courseId **required** `string`: Identifier of the course.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Announcement](#announcement)

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

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course.
  * id **required** `string`: Identifier of the announcement to delete.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Empty](#empty)

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

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course.
  * id **required** `string`: Identifier of the announcement.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Announcement](#announcement)

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

#### Input
* input `object`
  * body [Announcement](#announcement)
  * courseId **required** `string`: Identifier of the course.
  * id **required** `string`: Identifier of the announcement.
  * updateMask `string`: Mask that identifies which fields on the announcement to update.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Announcement](#announcement)

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

#### Input
* input `object`
  * body [ModifyAnnouncementAssigneesRequest](#modifyannouncementassigneesrequest)
  * courseId **required** `string`: Identifier of the course.
  * id **required** `string`: Identifier of the announcement.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Announcement](#announcement)

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

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course.
  * courseWorkStates `array`: Restriction on the work status to return. Only courseWork that matches
  * pageSize `integer`: Maximum number of items to return. Zero or unspecified indicates that the
  * orderBy `string`: Optional sort ordering for results. A comma-separated list of fields with
  * pageToken `string`: nextPageToken
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListCourseWorkResponse](#listcourseworkresponse)

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

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course.
  * body [CourseWork](#coursework)
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [CourseWork](#coursework)

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

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course.
  * courseWorkId **required** `string`: Identifier of the student work to request.
  * late `string` (values: LATE_VALUES_UNSPECIFIED, LATE_ONLY, NOT_LATE_ONLY): Requested lateness value. If specified, returned student submissions are
  * pageSize `integer`: Maximum number of items to return. Zero or unspecified indicates that the
  * pageToken `string`: nextPageToken
  * states `array`: Requested submission states. If specified, returned student submissions
  * userId `string`: Optional argument to restrict returned student work to those owned by the
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListStudentSubmissionsResponse](#liststudentsubmissionsresponse)

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

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course.
  * courseWorkId **required** `string`: Identifier of the course work.
  * id **required** `string`: Identifier of the student submission.
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [StudentSubmission](#studentsubmission)

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

#### Input
* input `object`
  * body [StudentSubmission](#studentsubmission)
  * courseId **required** `string`: Identifier of the course.
  * courseWorkId **required** `string`: Identifier of the course work.
  * id **required** `string`: Identifier of the student submission.
  * updateMask `string`: Mask that identifies which fields on the student submission to update.
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [StudentSubmission](#studentsubmission)

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

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course.
  * courseWorkId **required** `string`: Identifier of the course work.
  * id **required** `string`: Identifier of the student submission.
  * body [ModifyAttachmentsRequest](#modifyattachmentsrequest)
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [StudentSubmission](#studentsubmission)

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

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course.
  * courseWorkId **required** `string`: Identifier of the course work.
  * id **required** `string`: Identifier of the student submission.
  * body [ReclaimStudentSubmissionRequest](#reclaimstudentsubmissionrequest)
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Empty](#empty)

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

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course.
  * courseWorkId **required** `string`: Identifier of the course work.
  * id **required** `string`: Identifier of the student submission.
  * body [ReturnStudentSubmissionRequest](#returnstudentsubmissionrequest)
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Empty](#empty)

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

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course.
  * courseWorkId **required** `string`: Identifier of the course work.
  * id **required** `string`: Identifier of the student submission.
  * body [TurnInStudentSubmissionRequest](#turninstudentsubmissionrequest)
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Empty](#empty)

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

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course.
  * id **required** `string`: Identifier of the course work to delete.
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Empty](#empty)

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

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course.
  * id **required** `string`: Identifier of the course work.
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [CourseWork](#coursework)

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

#### Input
* input `object`
  * body [CourseWork](#coursework)
  * courseId **required** `string`: Identifier of the course.
  * id **required** `string`: Identifier of the course work.
  * updateMask `string`: Mask that identifies which fields on the course work to update.
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [CourseWork](#coursework)

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

#### Input
* input `object`
  * body [ModifyCourseWorkAssigneesRequest](#modifycourseworkassigneesrequest)
  * courseId **required** `string`: Identifier of the course.
  * id **required** `string`: Identifier of the coursework.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [CourseWork](#coursework)

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

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course.
  * pageSize `integer`: Maximum number of items to return. Zero means no maximum.
  * pageToken `string`: nextPageToken
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListStudentsResponse](#liststudentsresponse)

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

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course to create the student in.
  * enrollmentCode `string`: Enrollment code of the course to create the student in.
  * body [Student](#student)
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Student](#student)

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

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course.
  * userId **required** `string`: Identifier of the student to delete. The identifier can be one of the
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Empty](#empty)

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

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course.
  * userId **required** `string`: Identifier of the student to return. The identifier can be one of the
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Student](#student)

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

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course.
  * pageSize `integer`: Maximum number of items to return. Zero means no maximum.
  * pageToken `string`: nextPageToken
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListTeachersResponse](#listteachersresponse)

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

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course.
  * body [Teacher](#teacher)
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Teacher](#teacher)

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

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course.
  * userId **required** `string`: Identifier of the teacher to delete. The identifier can be one of the
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Empty](#empty)

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

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course.
  * userId **required** `string`: Identifier of the teacher to return. The identifier can be one of the
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Teacher](#teacher)

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

#### Input
* input `object`
  * id **required** `string`: Identifier of the course to delete.
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Empty](#empty)

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

#### Input
* input `object`
  * id **required** `string`: Identifier of the course to return.
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Course](#course)

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

#### Input
* input `object`
  * body [Course](#course)
  * id **required** `string`: Identifier of the course to update.
  * updateMask `string`: Mask that identifies which fields on the course to update.
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Course](#course)

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

#### Input
* input `object`
  * id **required** `string`: Identifier of the course to update.
  * body [Course](#course)
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Course](#course)

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

#### Input
* input `object`
  * courseId `string`: Restricts returned invitations to those for a course with the specified
  * pageSize `integer`: Maximum number of items to return. Zero means no maximum.
  * userId `string`: Restricts returned invitations to those for a specific user. The identifier
  * pageToken `string`: nextPageToken
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListInvitationsResponse](#listinvitationsresponse)

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

#### Input
* input `object`
  * body [Invitation](#invitation)
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Invitation](#invitation)

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

#### Input
* input `object`
  * id **required** `string`: Identifier of the invitation to delete.
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Empty](#empty)

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

#### Input
* input `object`
  * id **required** `string`: Identifier of the invitation to return.
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Invitation](#invitation)

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

#### Input
* input `object`
  * id **required** `string`: Identifier of the invitation to accept.
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Empty](#empty)

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

#### Input
* input `object`
  * body [Registration](#registration)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Registration](#registration)

### registrations.delete
Deletes a `Registration`, causing Classroom to stop sending notifications
for that `Registration`.


```js
google_classroom.registrations.delete({
  "registrationId": ""
}, context)
```

#### Input
* input `object`
  * registrationId **required** `string`: The `registration_id` of the `Registration` to be deleted.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * bearer_token `string`: OAuth bearer token.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * pp `boolean`: Pretty-print response.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Empty](#empty)

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

#### Input
* input `object`
  * studentId **required** `string`: The ID of the student whose guardian invitations are to be returned.
  * pageSize `integer`: Maximum number of items to return. Zero or unspecified indicates that the
  * invitedEmailAddress `string`: If specified, only results with the specified `invited_email_address`
  * states `array`: If specified, only results with the specified `state` values will be
  * pageToken `string`: nextPageToken
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListGuardianInvitationsResponse](#listguardianinvitationsresponse)

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

#### Input
* input `object`
  * studentId **required** `string`: ID of the student (in standard format)
  * body [GuardianInvitation](#guardianinvitation)
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [GuardianInvitation](#guardianinvitation)

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

#### Input
* input `object`
  * studentId **required** `string`: The ID of the student whose guardian invitation is being requested.
  * invitationId **required** `string`: The `id` field of the `GuardianInvitation` being requested.
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [GuardianInvitation](#guardianinvitation)

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

#### Input
* input `object`
  * studentId **required** `string`: The ID of the student whose guardian invitation is to be modified.
  * invitationId **required** `string`: The `id` field of the `GuardianInvitation` to be modified.
  * updateMask `string`: Mask that identifies which fields on the course to update.
  * body [GuardianInvitation](#guardianinvitation)
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [GuardianInvitation](#guardianinvitation)

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

#### Input
* input `object`
  * studentId **required** `string`: Filter results by the student who the guardian is linked to.
  * pageSize `integer`: Maximum number of items to return. Zero or unspecified indicates that the
  * invitedEmailAddress `string`: Filter results by the email address that the original invitation was sent
  * pageToken `string`: nextPageToken
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [ListGuardiansResponse](#listguardiansresponse)

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

#### Input
* input `object`
  * studentId **required** `string`: The student whose guardian is to be deleted. One of the following:
  * guardianId **required** `string`: The `id` field from a `Guardian`.
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Empty](#empty)

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

#### Input
* input `object`
  * studentId **required** `string`: The student whose guardian is being requested. One of the following:
  * guardianId **required** `string`: The `id` field from a `Guardian`.
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [Guardian](#guardian)

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

#### Input
* input `object`
  * userId **required** `string`: Identifier of the profile to return. The identifier can be one of the
  * access_token `string`: OAuth access token.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * pp `boolean`: Pretty-print response.
  * fields `string`: Selector specifying which fields to include in a partial response.
  * alt `string` (values: json, media, proto): Data format for response.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * callback `string`: JSONP
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").
  * bearer_token `string`: OAuth bearer token.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").

#### Output
* output [UserProfile](#userprofile)



## Definitions

### Announcement
* Announcement `object`: Announcement created by a teacher for students of the course
  * alternateLink `string`: Absolute link to this announcement in the Classroom web UI.
  * assigneeMode `string` (values: ASSIGNEE_MODE_UNSPECIFIED, ALL_STUDENTS, INDIVIDUAL_STUDENTS): Assignee mode of the announcement.
  * courseId `string`: Identifier of the course.
  * creationTime `string`: Timestamp when this announcement was created.
  * creatorUserId `string`: Identifier for the user that created the announcement.
  * id `string`: Classroom-assigned identifier of this announcement, unique per course.
  * individualStudentsOptions [IndividualStudentsOptions](#individualstudentsoptions)
  * materials `array`: Additional materials.
    * items [Material](#material)
  * scheduledTime `string`: Optional timestamp when this announcement is scheduled to be published.
  * state `string` (values: ANNOUNCEMENT_STATE_UNSPECIFIED, PUBLISHED, DRAFT, DELETED): Status of this announcement.
  * text `string`: Description of this announcement.
  * updateTime `string`: Timestamp of the most recent change to this announcement.

### Assignment
* Assignment `object`: Additional details for assignments.
  * studentWorkFolder [DriveFolder](#drivefolder)

### AssignmentSubmission
* AssignmentSubmission `object`: Student work for an assignment.
  * attachments `array`: Attachments added by the student.
    * items [Attachment](#attachment)

### Attachment
* Attachment `object`: Attachment added to student assignment work.
  * driveFile [DriveFile](#drivefile)
  * form [Form](#form)
  * link [Link](#link)
  * youTubeVideo [YouTubeVideo](#youtubevideo)

### CloudPubsubTopic
* CloudPubsubTopic `object`: A reference to a Cloud Pub/Sub topic.
  * topicName `string`: The `name` field of a Cloud Pub/Sub

### Course
* Course `object`: A Course in Classroom.
  * alternateLink `string`: Absolute link to this course in the Classroom web UI.
  * calendarId `string`: The Calendar ID for a calendar that all course members can see, to which
  * courseGroupEmail `string`: The email address of a Google group containing all members of the course.
  * courseMaterialSets `array`: Sets of materials that appear on the "about" page of this course.
    * items [CourseMaterialSet](#coursematerialset)
  * courseState `string` (values: COURSE_STATE_UNSPECIFIED, ACTIVE, ARCHIVED, PROVISIONED, DECLINED, SUSPENDED): State of the course.
  * creationTime `string`: Creation time of the course.
  * description `string`: Optional description.
  * descriptionHeading `string`: Optional heading for the description.
  * enrollmentCode `string`: Enrollment code to use when joining this course.
  * guardiansEnabled `boolean`: Whether or not guardian notifications are enabled for this course.
  * id `string`: Identifier for this course assigned by Classroom.
  * name `string`: Name of the course.
  * ownerId `string`: The identifier of the owner of a course.
  * room `string`: Optional room location.
  * section `string`: Section of the course.
  * teacherFolder [DriveFolder](#drivefolder)
  * teacherGroupEmail `string`: The email address of a Google group containing all teachers of the course.
  * updateTime `string`: Time of the most recent update to this course.

### CourseAlias
* CourseAlias `object`: Alternative identifier for a course.
  * alias `string`: Alias string. The format of the string indicates the desired alias scoping.

### CourseMaterial
* CourseMaterial `object`: A material attached to a course as part of a material set.
  * driveFile [DriveFile](#drivefile)
  * form [Form](#form)
  * link [Link](#link)
  * youTubeVideo [YouTubeVideo](#youtubevideo)

### CourseMaterialSet
* CourseMaterialSet `object`: A set of materials that appears on the "About" page of the course.
  * materials `array`: Materials attached to this set.
    * items [CourseMaterial](#coursematerial)
  * title `string`: Title for this set.

### CourseRosterChangesInfo
* CourseRosterChangesInfo `object`: Information about a `Feed` with a `feed_type` of `COURSE_ROSTER_CHANGES`.
  * courseId `string`: The `course_id` of the course to subscribe to roster changes for.

### CourseWork
* CourseWork `object`: Course work created by a teacher for students of the course.
  * alternateLink `string`: Absolute link to this course work in the Classroom web UI.
  * assigneeMode `string` (values: ASSIGNEE_MODE_UNSPECIFIED, ALL_STUDENTS, INDIVIDUAL_STUDENTS): Assignee mode of the coursework.
  * assignment [Assignment](#assignment)
  * associatedWithDeveloper `boolean`: Whether this course work item is associated with the Developer Console
  * courseId `string`: Identifier of the course.
  * creationTime `string`: Timestamp when this course work was created.
  * creatorUserId `string`: Identifier for the user that created the coursework.
  * description `string`: Optional description of this course work.
  * dueDate [Date](#date)
  * dueTime [TimeOfDay](#timeofday)
  * id `string`: Classroom-assigned identifier of this course work, unique per course.
  * individualStudentsOptions [IndividualStudentsOptions](#individualstudentsoptions)
  * materials `array`: Additional materials.
    * items [Material](#material)
  * maxPoints `number`: Maximum grade for this course work.
  * multipleChoiceQuestion [MultipleChoiceQuestion](#multiplechoicequestion)
  * scheduledTime `string`: Optional timestamp when this course work is scheduled to be published.
  * state `string` (values: COURSE_WORK_STATE_UNSPECIFIED, PUBLISHED, DRAFT, DELETED): Status of this course work.
  * submissionModificationMode `string` (values: SUBMISSION_MODIFICATION_MODE_UNSPECIFIED, MODIFIABLE_UNTIL_TURNED_IN, MODIFIABLE): Setting to determine when students are allowed to modify submissions.
  * title `string`: Title of this course work.
  * updateTime `string`: Timestamp of the most recent change to this course work.
  * workType `string` (values: COURSE_WORK_TYPE_UNSPECIFIED, ASSIGNMENT, SHORT_ANSWER_QUESTION, MULTIPLE_CHOICE_QUESTION): Type of this course work.

### Date
* Date `object`: Represents a whole calendar date, e.g. date of birth. The time of day and
  * day `integer`: Day of month. Must be from 1 to 31 and valid for the year and month, or 0
  * month `integer`: Month of year. Must be from 1 to 12.
  * year `integer`: Year of date. Must be from 1 to 9999, or 0 if specifying a date without

### DriveFile
* DriveFile `object`: Representation of a Google Drive file.
  * alternateLink `string`: URL that can be used to access the Drive item.
  * id `string`: Drive API resource ID.
  * thumbnailUrl `string`: URL of a thumbnail image of the Drive item.
  * title `string`: Title of the Drive item.

### DriveFolder
* DriveFolder `object`: Representation of a Google Drive folder.
  * alternateLink `string`: URL that can be used to access the Drive folder.
  * id `string`: Drive API resource ID.
  * title `string`: Title of the Drive folder.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated

### Feed
* Feed `object`: A class of notifications that an application can register to receive.
  * courseRosterChangesInfo [CourseRosterChangesInfo](#courserosterchangesinfo)
  * feedType `string` (values: FEED_TYPE_UNSPECIFIED, DOMAIN_ROSTER_CHANGES, COURSE_ROSTER_CHANGES): The type of feed.

### Form
* Form `object`: Google Forms item.
  * formUrl `string`: URL of the form.
  * responseUrl `string`: URL of the form responses document.
  * thumbnailUrl `string`: URL of a thumbnail image of the Form.
  * title `string`: Title of the Form.

### GlobalPermission
* GlobalPermission `object`: Global user permission description.
  * permission `string` (values: PERMISSION_UNSPECIFIED, CREATE_COURSE): Permission value.

### GradeHistory
* GradeHistory `object`: The history of each grade on this submission.
  * actorUserId `string`: The teacher who made the grade change.
  * gradeChangeType `string` (values: UNKNOWN_GRADE_CHANGE_TYPE, DRAFT_GRADE_POINTS_EARNED_CHANGE, ASSIGNED_GRADE_POINTS_EARNED_CHANGE, MAX_POINTS_CHANGE): The type of grade change at this time in the submission grade history.
  * gradeTimestamp `string`: When the grade of the submission was changed.
  * maxPoints `number`: The denominator of the grade at this time in the submission grade
  * pointsEarned `number`: The numerator of the grade at this time in the submission grade history.

### Guardian
* Guardian `object`: Association between a student and a guardian of that student. The guardian
  * guardianId `string`: Identifier for the guardian.
  * guardianProfile [UserProfile](#userprofile)
  * invitedEmailAddress `string`: The email address to which the initial guardian invitation was sent.
  * studentId `string`: Identifier for the student to whom the guardian relationship applies.

### GuardianInvitation
* GuardianInvitation `object`: An invitation to become the guardian of a specified user, sent to a specified
  * creationTime `string`: The time that this invitation was created.
  * invitationId `string`: Unique identifier for this invitation.
  * invitedEmailAddress `string`: Email address that the invitation was sent to.
  * state `string` (values: GUARDIAN_INVITATION_STATE_UNSPECIFIED, PENDING, COMPLETE): The state that this invitation is in.
  * studentId `string`: ID of the student (in standard format)

### IndividualStudentsOptions
* IndividualStudentsOptions `object`: Assignee details about a coursework/announcement.
  * studentIds `array`: Identifiers for the students that have access to the
    * items `string`

### Invitation
* Invitation `object`: An invitation to join a course.
  * courseId `string`: Identifier of the course to invite the user to.
  * id `string`: Identifier assigned by Classroom.
  * role `string` (values: COURSE_ROLE_UNSPECIFIED, STUDENT, TEACHER, OWNER): Role to invite the user to have.
  * userId `string`: Identifier of the invited user.

### Link
* Link `object`: URL item.
  * thumbnailUrl `string`: URL of a thumbnail image of the target URL.
  * title `string`: Title of the target of the URL.
  * url `string`: URL to link to.

### ListAnnouncementsResponse
* ListAnnouncementsResponse `object`: Response when listing course work.
  * announcements `array`: Announcement items that match the request.
    * items [Announcement](#announcement)
  * nextPageToken `string`: Token identifying the next page of results to return. If empty, no further

### ListCourseAliasesResponse
* ListCourseAliasesResponse `object`: Response when listing course aliases.
  * aliases `array`: The course aliases.
    * items [CourseAlias](#coursealias)
  * nextPageToken `string`: Token identifying the next page of results to return. If empty, no further

### ListCourseWorkResponse
* ListCourseWorkResponse `object`: Response when listing course work.
  * courseWork `array`: Course work items that match the request.
    * items [CourseWork](#coursework)
  * nextPageToken `string`: Token identifying the next page of results to return. If empty, no further

### ListCoursesResponse
* ListCoursesResponse `object`: Response when listing courses.
  * courses `array`: Courses that match the list request.
    * items [Course](#course)
  * nextPageToken `string`: Token identifying the next page of results to return. If empty, no further

### ListGuardianInvitationsResponse
* ListGuardianInvitationsResponse `object`: Response when listing guardian invitations.
  * guardianInvitations `array`: Guardian invitations that matched the list request.
    * items [GuardianInvitation](#guardianinvitation)
  * nextPageToken `string`: Token identifying the next page of results to return. If empty, no further

### ListGuardiansResponse
* ListGuardiansResponse `object`: Response when listing guardians.
  * guardians `array`: Guardians on this page of results that met the criteria specified in
    * items [Guardian](#guardian)
  * nextPageToken `string`: Token identifying the next page of results to return. If empty, no further

### ListInvitationsResponse
* ListInvitationsResponse `object`: Response when listing invitations.
  * invitations `array`: Invitations that match the list request.
    * items [Invitation](#invitation)
  * nextPageToken `string`: Token identifying the next page of results to return. If empty, no further

### ListStudentSubmissionsResponse
* ListStudentSubmissionsResponse `object`: Response when listing student submissions.
  * nextPageToken `string`: Token identifying the next page of results to return. If empty, no further
  * studentSubmissions `array`: Student work that matches the request.
    * items [StudentSubmission](#studentsubmission)

### ListStudentsResponse
* ListStudentsResponse `object`: Response when listing students.
  * nextPageToken `string`: Token identifying the next page of results to return. If empty, no further
  * students `array`: Students who match the list request.
    * items [Student](#student)

### ListTeachersResponse
* ListTeachersResponse `object`: Response when listing teachers.
  * nextPageToken `string`: Token identifying the next page of results to return. If empty, no further
  * teachers `array`: Teachers who match the list request.
    * items [Teacher](#teacher)

### Material
* Material `object`: Material attached to course work.
  * driveFile [SharedDriveFile](#shareddrivefile)
  * form [Form](#form)
  * link [Link](#link)
  * youtubeVideo [YouTubeVideo](#youtubevideo)

### ModifyAnnouncementAssigneesRequest
* ModifyAnnouncementAssigneesRequest `object`: Request to modify assignee mode and options of an announcement.
  * assigneeMode `string` (values: ASSIGNEE_MODE_UNSPECIFIED, ALL_STUDENTS, INDIVIDUAL_STUDENTS): Mode of the announcement describing whether it will be accessible by all
  * modifyIndividualStudentsOptions [ModifyIndividualStudentsOptions](#modifyindividualstudentsoptions)

### ModifyAttachmentsRequest
* ModifyAttachmentsRequest `object`: Request to modify the attachments of a student submission.
  * addAttachments `array`: Attachments to add.
    * items [Attachment](#attachment)

### ModifyCourseWorkAssigneesRequest
* ModifyCourseWorkAssigneesRequest `object`: Request to modify assignee mode and options of a coursework.
  * assigneeMode `string` (values: ASSIGNEE_MODE_UNSPECIFIED, ALL_STUDENTS, INDIVIDUAL_STUDENTS): Mode of the coursework describing whether it will be assigned to all
  * modifyIndividualStudentsOptions [ModifyIndividualStudentsOptions](#modifyindividualstudentsoptions)

### ModifyIndividualStudentsOptions
* ModifyIndividualStudentsOptions `object`: Contains fields to add or remove students from a course work or announcement
  * addStudentIds `array`: Ids of students to be added as having access to this
    * items `string`
  * removeStudentIds `array`: Ids of students to be removed from having access to this
    * items `string`

### MultipleChoiceQuestion
* MultipleChoiceQuestion `object`: Additional details for multiple-choice questions.
  * choices `array`: Possible choices.
    * items `string`

### MultipleChoiceSubmission
* MultipleChoiceSubmission `object`: Student work for a multiple-choice question.
  * answer `string`: Student's select choice.

### Name
* Name `object`: Details of the user's name.
  * familyName `string`: The user's last name.
  * fullName `string`: The user's full name formed by concatenating the first and last name
  * givenName `string`: The user's first name.

### ReclaimStudentSubmissionRequest
* ReclaimStudentSubmissionRequest `object`: Request to reclaim a student submission.

### Registration
* Registration `object`: An instruction to Classroom to send notifications from the `feed` to the
  * cloudPubsubTopic [CloudPubsubTopic](#cloudpubsubtopic)
  * expiryTime `string`: The time until which the `Registration` is effective.
  * feed [Feed](#feed)
  * registrationId `string`: A server-generated unique identifier for this `Registration`.

### ReturnStudentSubmissionRequest
* ReturnStudentSubmissionRequest `object`: Request to return a student submission.

### SharedDriveFile
* SharedDriveFile `object`: Drive file that is used as material for course work.
  * driveFile [DriveFile](#drivefile)
  * shareMode `string` (values: UNKNOWN_SHARE_MODE, VIEW, EDIT, STUDENT_COPY): Mechanism by which students access the Drive item.

### ShortAnswerSubmission
* ShortAnswerSubmission `object`: Student work for a short answer question.
  * answer `string`: Student response to a short-answer question.

### StateHistory
* StateHistory `object`: The history of each state this submission has been in.
  * actorUserId `string`: The teacher or student who made the change
  * state `string` (values: STATE_UNSPECIFIED, CREATED, TURNED_IN, RETURNED, RECLAIMED_BY_STUDENT, STUDENT_EDITED_AFTER_TURN_IN): The workflow pipeline stage.
  * stateTimestamp `string`: When the submission entered this state.

### Student
* Student `object`: Student in a course.
  * courseId `string`: Identifier of the course.
  * profile [UserProfile](#userprofile)
  * studentWorkFolder [DriveFolder](#drivefolder)
  * userId `string`: Identifier of the user.

### StudentSubmission
* StudentSubmission `object`: Student submission for course work.
  * alternateLink `string`: Absolute link to the submission in the Classroom web UI.
  * assignedGrade `number`: Optional grade. If unset, no grade was set.
  * assignmentSubmission [AssignmentSubmission](#assignmentsubmission)
  * associatedWithDeveloper `boolean`: Whether this student submission is associated with the Developer Console
  * courseId `string`: Identifier of the course.
  * courseWorkId `string`: Identifier for the course work this corresponds to.
  * courseWorkType `string` (values: COURSE_WORK_TYPE_UNSPECIFIED, ASSIGNMENT, SHORT_ANSWER_QUESTION, MULTIPLE_CHOICE_QUESTION): Type of course work this submission is for.
  * creationTime `string`: Creation time of this submission.
  * draftGrade `number`: Optional pending grade. If unset, no grade was set.
  * id `string`: Classroom-assigned Identifier for the student submission.
  * late `boolean`: Whether this submission is late.
  * multipleChoiceSubmission [MultipleChoiceSubmission](#multiplechoicesubmission)
  * shortAnswerSubmission [ShortAnswerSubmission](#shortanswersubmission)
  * state `string` (values: SUBMISSION_STATE_UNSPECIFIED, NEW, CREATED, TURNED_IN, RETURNED, RECLAIMED_BY_STUDENT): State of this submission.
  * submissionHistory `array`: The history of the submission (includes state and grade histories).
    * items [SubmissionHistory](#submissionhistory)
  * updateTime `string`: Last update time of this submission.
  * userId `string`: Identifier for the student that owns this submission.

### SubmissionHistory
* SubmissionHistory `object`: The history of the submission. This currently includes state and grade
  * gradeHistory [GradeHistory](#gradehistory)
  * stateHistory [StateHistory](#statehistory)

### Teacher
* Teacher `object`: Teacher of a course.
  * courseId `string`: Identifier of the course.
  * profile [UserProfile](#userprofile)
  * userId `string`: Identifier of the user.

### TimeOfDay
* TimeOfDay `object`: Represents a time of day. The date and time zone are either not significant
  * hours `integer`: Hours of day in 24 hour format. Should be from 0 to 23. An API may choose
  * minutes `integer`: Minutes of hour of day. Must be from 0 to 59.
  * nanos `integer`: Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  * seconds `integer`: Seconds of minutes of the time. Must normally be from 0 to 59. An API may

### TurnInStudentSubmissionRequest
* TurnInStudentSubmissionRequest `object`: Request to turn in a student submission.

### UserProfile
* UserProfile `object`: Global information for a user.
  * emailAddress `string`: Email address of the user.
  * id `string`: Identifier of the user.
  * name [Name](#name)
  * permissions `array`: Global permissions of the user.
    * items [GlobalPermission](#globalpermission)
  * photoUrl `string`: URL of user's profile photo.
  * verifiedTeacher `boolean`: Represents whether a G Suite for Education user's domain administrator has

### YouTubeVideo
* YouTubeVideo `object`: YouTube video item.
  * alternateLink `string`: URL that can be used to view the YouTube video.
  * id `string`: YouTube API resource ID.
  * thumbnailUrl `string`: URL of a thumbnail image of the YouTube video.
  * title `string`: Title of the YouTube video.


