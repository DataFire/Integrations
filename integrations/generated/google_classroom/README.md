# @datafire/google_classroom

Client library for Google Classroom API

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

.then(data => {
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

### classroom.courses.list
Returns a list of courses that the requesting user is permitted to view, restricted to those that match the request. Returned courses are ordered by creation time, with the most recently created coming first. This method returns the following error codes: * `PERMISSION_DENIED` for access errors. * `INVALID_ARGUMENT` if the query argument is malformed. * `NOT_FOUND` if any users specified in the query arguments do not exist.


```js
google_classroom.classroom.courses.list({}, context)
```

#### Input
* input `object`
  * courseStates `array`: Restricts returned courses to those in one of the specified states The default value is ACTIVE, ARCHIVED, PROVISIONED, DECLINED.
  * pageSize `integer`: Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
  * pageToken `string`: nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
  * studentId `string`: Restricts returned courses to those having a student with the specified identifier. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
  * teacherId `string`: Restricts returned courses to those having a teacher with the specified identifier. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListCoursesResponse](#listcoursesresponse)

### classroom.courses.create
Creates a course. The user specified in `ownerId` is the owner of the created course and added as a teacher. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create courses or for access errors. * `NOT_FOUND` if the primary teacher is not a valid user. * `FAILED_PRECONDITION` if the course owner's account is disabled or for the following request errors: * UserGroupsMembershipLimitReached * `ALREADY_EXISTS` if an alias was specified in the `id` and already exists.


```js
google_classroom.classroom.courses.create({}, context)
```

#### Input
* input `object`
  * body [Course](#course)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Course](#course)

### classroom.courses.aliases.list
Returns a list of aliases for a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the course or for access errors. * `NOT_FOUND` if the course does not exist.


```js
google_classroom.classroom.courses.aliases.list({
  "courseId": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: The identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * pageSize `integer`: Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
  * pageToken `string`: nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListCourseAliasesResponse](#listcoursealiasesresponse)

### classroom.courses.aliases.create
Creates an alias for a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create the alias or for access errors. * `NOT_FOUND` if the course does not exist. * `ALREADY_EXISTS` if the alias already exists. * `FAILED_PRECONDITION` if the alias requested does not make sense for the requesting user or course (for example, if a user not in a domain attempts to access a domain-scoped alias).


```js
google_classroom.classroom.courses.aliases.create({
  "courseId": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course to alias. This identifier can be either the Classroom-assigned identifier or an alias.
  * body [CourseAlias](#coursealias)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [CourseAlias](#coursealias)

### classroom.courses.aliases.delete
Deletes an alias of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to remove the alias or for access errors. * `NOT_FOUND` if the alias does not exist. * `FAILED_PRECONDITION` if the alias requested does not make sense for the requesting user or course (for example, if a user not in a domain attempts to delete a domain-scoped alias).


```js
google_classroom.classroom.courses.aliases.delete({
  "courseId": "",
  "alias": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course whose alias should be deleted. This identifier can be either the Classroom-assigned identifier or an alias.
  * alias **required** `string`: Alias to delete. This may not be the Classroom-assigned identifier.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### classroom.courses.announcements.list
Returns a list of announcements that the requester is permitted to view. Course students may only view `PUBLISHED` announcements. Course teachers and domain administrators may view all announcements. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.


```js
google_classroom.classroom.courses.announcements.list({
  "courseId": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * announcementStates `array`: Restriction on the `state` of announcements returned. If this argument is left unspecified, the default value is `PUBLISHED`.
  * orderBy `string`: Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported field is `updateTime`. Supported direction keywords are `asc` and `desc`. If not specified, `updateTime desc` is the default behavior. Examples: `updateTime asc`, `updateTime`
  * pageSize `integer`: Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
  * pageToken `string`: nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListAnnouncementsResponse](#listannouncementsresponse)

### classroom.courses.announcements.create
Creates an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create announcements in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible


```js
google_classroom.classroom.courses.announcements.create({
  "courseId": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * body [Announcement](#announcement)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Announcement](#announcement)

### classroom.courses.announcements.delete
Deletes an announcement. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding announcement item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding announcement, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested announcement has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.


```js
google_classroom.classroom.courses.announcements.delete({
  "courseId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * id **required** `string`: Identifier of the announcement to delete. This identifier is a Classroom-assigned identifier.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### classroom.courses.announcements.get
Returns an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or announcement, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or announcement does not exist.


```js
google_classroom.classroom.courses.announcements.get({
  "courseId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * id **required** `string`: Identifier of the announcement.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Announcement](#announcement)

### classroom.courses.announcements.patch
Updates one or more fields of an announcement. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding announcement or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested announcement has already been deleted. * `NOT_FOUND` if the requested course or announcement does not exist


```js
google_classroom.classroom.courses.announcements.patch({
  "courseId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * id **required** `string`: Identifier of the announcement.
  * updateMask `string`: Mask that identifies which fields on the announcement to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the Announcement object. If a field that does not support empty values is included in the update mask and not set in the Announcement object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified by teachers: * `text` * `state` * `scheduled_time`
  * body [Announcement](#announcement)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Announcement](#announcement)

### classroom.courses.announcements.modifyAssignees
Modifies assignee mode and options of an announcement. Only a teacher of the course that contains the announcement may call this method. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.


```js
google_classroom.classroom.courses.announcements.modifyAssignees({
  "courseId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * id **required** `string`: Identifier of the announcement.
  * body [ModifyAnnouncementAssigneesRequest](#modifyannouncementassigneesrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Announcement](#announcement)

### classroom.courses.courseWork.list
Returns a list of course work that the requester is permitted to view. Course students may only view `PUBLISHED` course work. Course teachers and domain administrators may view all course work. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.


```js
google_classroom.classroom.courses.courseWork.list({
  "courseId": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * courseWorkStates `array`: Restriction on the work status to return. Only courseWork that matches is returned. If unspecified, items with a work status of `PUBLISHED` is returned.
  * orderBy `string`: Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported fields are `updateTime` and `dueDate`. Supported direction keywords are `asc` and `desc`. If not specified, `updateTime desc` is the default behavior. Examples: `dueDate asc,updateTime desc`, `updateTime,dueDate desc`
  * pageSize `integer`: Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
  * pageToken `string`: nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListCourseWorkResponse](#listcourseworkresponse)

### classroom.courses.courseWork.create
Creates course work. The resulting course work (and corresponding student submissions) are associated with the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to make the request. Classroom API requests to modify course work and student submissions must be made with an OAuth client ID from the associated Developer Console project. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create course work in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible


```js
google_classroom.classroom.courses.courseWork.create({
  "courseId": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * body [CourseWork](#coursework)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [CourseWork](#coursework)

### classroom.courses.courseWork.studentSubmissions.list
Returns a list of student submissions that the requester is permitted to view, factoring in the OAuth scopes of the request. `-` may be specified as the `course_work_id` to include student submissions for multiple course work items. Course students may only view their own work. Course teachers and domain administrators may view all student submissions. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.


```js
google_classroom.classroom.courses.courseWork.studentSubmissions.list({
  "courseId": "",
  "courseWorkId": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * courseWorkId **required** `string`: Identifier of the student work to request. This may be set to the string literal `"-"` to request student work for all course work in the specified course.
  * late `string` (values: LATE_VALUES_UNSPECIFIED, LATE_ONLY, NOT_LATE_ONLY): Requested lateness value. If specified, returned student submissions are restricted by the requested value. If unspecified, submissions are returned regardless of `late` value.
  * pageSize `integer`: Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
  * pageToken `string`: nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
  * states `array`: Requested submission states. If specified, returned student submissions match one of the specified submission states.
  * userId `string`: Optional argument to restrict returned student work to those owned by the student with the specified identifier. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListStudentSubmissionsResponse](#liststudentsubmissionsresponse)

### classroom.courses.courseWork.studentSubmissions.get
Returns a student submission. * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, course work, or student submission or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.


```js
google_classroom.classroom.courses.courseWork.studentSubmissions.get({
  "courseId": "",
  "courseWorkId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * courseWorkId **required** `string`: Identifier of the course work.
  * id **required** `string`: Identifier of the student submission.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [StudentSubmission](#studentsubmission)

### classroom.courses.courseWork.studentSubmissions.patch
Updates one or more fields of a student submission. See google.classroom.v1.StudentSubmission for details of which fields may be updated and who may change them. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the user is not permitted to make the requested modification to the student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.


```js
google_classroom.classroom.courses.courseWork.studentSubmissions.patch({
  "courseId": "",
  "courseWorkId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * courseWorkId **required** `string`: Identifier of the course work.
  * id **required** `string`: Identifier of the student submission.
  * updateMask `string`: Mask that identifies which fields on the student submission to update. This field is required to do an update. The update fails if invalid fields are specified. The following fields may be specified by teachers: * `draft_grade` * `assigned_grade`
  * body [StudentSubmission](#studentsubmission)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [StudentSubmission](#studentsubmission)

### classroom.courses.courseWork.studentSubmissions.modifyAttachments
Modifies attachments of student submission. Attachments may only be added to student submissions belonging to course work objects with a `workType` of `ASSIGNMENT`. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, if the user is not permitted to modify attachments on the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.


```js
google_classroom.classroom.courses.courseWork.studentSubmissions.modifyAttachments({
  "courseId": "",
  "courseWorkId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * courseWorkId **required** `string`: Identifier of the course work.
  * id **required** `string`: Identifier of the student submission.
  * body [ModifyAttachmentsRequest](#modifyattachmentsrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [StudentSubmission](#studentsubmission)

### classroom.courses.courseWork.studentSubmissions.reclaim
Reclaims a student submission on behalf of the student that owns it. Reclaiming a student submission transfers ownership of attached Drive files to the student and updates the submission state. Only the student that owns the requested student submission may call this method, and only for a student submission that has been turned in. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, unsubmit the requested student submission, or for access errors. * `FAILED_PRECONDITION` if the student submission has not been turned in. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.


```js
google_classroom.classroom.courses.courseWork.studentSubmissions.reclaim({
  "courseId": "",
  "courseWorkId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * courseWorkId **required** `string`: Identifier of the course work.
  * id **required** `string`: Identifier of the student submission.
  * body [ReclaimStudentSubmissionRequest](#reclaimstudentsubmissionrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### classroom.courses.courseWork.studentSubmissions.return
Returns a student submission. Returning a student submission transfers ownership of attached Drive files to the student and may also update the submission state. Unlike the Classroom application, returning a student submission does not set assignedGrade to the draftGrade value. Only a teacher of the course that contains the requested student submission may call this method. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, return the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.


```js
google_classroom.classroom.courses.courseWork.studentSubmissions.return({
  "courseId": "",
  "courseWorkId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * courseWorkId **required** `string`: Identifier of the course work.
  * id **required** `string`: Identifier of the student submission.
  * body [ReturnStudentSubmissionRequest](#returnstudentsubmissionrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### classroom.courses.courseWork.studentSubmissions.turnIn
Turns in a student submission. Turning in a student submission transfers ownership of attached Drive files to the teacher and may also update the submission state. This may only be called by the student that owns the specified student submission. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, turn in the requested student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.


```js
google_classroom.classroom.courses.courseWork.studentSubmissions.turnIn({
  "courseId": "",
  "courseWorkId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * courseWorkId **required** `string`: Identifier of the course work.
  * id **required** `string`: Identifier of the student submission.
  * body [TurnInStudentSubmissionRequest](#turninstudentsubmissionrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### classroom.courses.courseWork.delete
Deletes a course work. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested course work has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.


```js
google_classroom.classroom.courses.courseWork.delete({
  "courseId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * id **required** `string`: Identifier of the course work to delete. This identifier is a Classroom-assigned identifier.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### classroom.courses.courseWork.get
Returns course work. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.


```js
google_classroom.classroom.courses.courseWork.get({
  "courseId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * id **required** `string`: Identifier of the course work.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [CourseWork](#coursework)

### classroom.courses.courseWork.patch
Updates one or more fields of a course work. See google.classroom.v1.CourseWork for details of which fields may be updated and who may change them. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work, if the user is not permitted to make the requested modification to the student submission, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested course work has already been deleted. * `NOT_FOUND` if the requested course, course work, or student submission does not exist.


```js
google_classroom.classroom.courses.courseWork.patch({
  "courseId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * id **required** `string`: Identifier of the course work.
  * updateMask `string`: Mask that identifies which fields on the course work to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the CourseWork object. If a field that does not support empty values is included in the update mask and not set in the CourseWork object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified by teachers: * `title` * `description` * `state` * `due_date` * `due_time` * `max_points` * `scheduled_time` * `submission_modification_mode` * `topic_id`
  * body [CourseWork](#coursework)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [CourseWork](#coursework)

### classroom.courses.courseWork.modifyAssignees
Modifies assignee mode and options of a coursework. Only a teacher of the course that contains the coursework may call this method. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work does not exist.


```js
google_classroom.classroom.courses.courseWork.modifyAssignees({
  "courseId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * id **required** `string`: Identifier of the coursework.
  * body [ModifyCourseWorkAssigneesRequest](#modifycourseworkassigneesrequest)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [CourseWork](#coursework)

### classroom.courses.courseWorkMaterials.list
Returns a list of course work material that the requester is permitted to view. Course students may only view `PUBLISHED` course work material. Course teachers and domain administrators may view all course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.


```js
google_classroom.classroom.courses.courseWorkMaterials.list({
  "courseId": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * courseWorkMaterialStates `array`: Restriction on the work status to return. Only course work material that matches is returned. If unspecified, items with a work status of `PUBLISHED` is returned.
  * materialDriveId `string`: Optional filtering for course work material with at least one Drive material whose ID matches the provided string. If `material_link` is also specified, course work material must have materials matching both filters.
  * materialLink `string`: Optional filtering for course work material with at least one link material whose URL partially matches the provided string.
  * orderBy `string`: Optional sort ordering for results. A comma-separated list of fields with an optional sort direction keyword. Supported field is `updateTime`. Supported direction keywords are `asc` and `desc`. If not specified, `updateTime desc` is the default behavior. Examples: `updateTime asc`, `updateTime`
  * pageSize `integer`: Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
  * pageToken `string`: nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListCourseWorkMaterialResponse](#listcourseworkmaterialresponse)

### classroom.courses.courseWorkMaterials.create
Creates a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create course work material in the requested course, share a Drive attachment, or for access errors. * `INVALID_ARGUMENT` if the request is malformed or if more than 20 * materials are provided. * `NOT_FOUND` if the requested course does not exist. * `FAILED_PRECONDITION` for the following request error: * AttachmentNotVisible


```js
google_classroom.classroom.courses.courseWorkMaterials.create({
  "courseId": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * body [CourseWorkMaterial](#courseworkmaterial)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [CourseWorkMaterial](#courseworkmaterial)

### classroom.courses.courseWorkMaterials.delete
Deletes a course work material. This request must be made by the Developer Console project of the [OAuth client ID](https://support.google.com/cloud/answer/6158849) used to create the corresponding course work material item. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding course work material, if the requesting user is not permitted to delete the requested course or for access errors. * `FAILED_PRECONDITION` if the requested course work material has already been deleted. * `NOT_FOUND` if no course exists with the requested ID.


```js
google_classroom.classroom.courses.courseWorkMaterials.delete({
  "courseId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * id **required** `string`: Identifier of the course work material to delete. This identifier is a Classroom-assigned identifier.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### classroom.courses.courseWorkMaterials.get
Returns a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or course work material, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or course work material does not exist.


```js
google_classroom.classroom.courses.courseWorkMaterials.get({
  "courseId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * id **required** `string`: Identifier of the course work material.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [CourseWorkMaterial](#courseworkmaterial)

### classroom.courses.courseWorkMaterials.patch
Updates one or more fields of a course work material. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `FAILED_PRECONDITION` if the requested course work material has already been deleted. * `NOT_FOUND` if the requested course or course work material does not exist


```js
google_classroom.classroom.courses.courseWorkMaterials.patch({
  "courseId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * id **required** `string`: Identifier of the course work material.
  * updateMask `string`: Mask that identifies which fields on the course work material to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the course work material object. If a field that does not support empty values is included in the update mask and not set in the course work material object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified by teachers: * `title` * `description` * `state` * `scheduled_time` * `topic_id`
  * body [CourseWorkMaterial](#courseworkmaterial)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [CourseWorkMaterial](#courseworkmaterial)

### classroom.courses.students.list
Returns a list of students of this course that the requester is permitted to view. This method returns the following error codes: * `NOT_FOUND` if the course does not exist. * `PERMISSION_DENIED` for access errors.


```js
google_classroom.classroom.courses.students.list({
  "courseId": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * pageSize `integer`: Maximum number of items to return. The default is 30 if unspecified or `0`. The server may return fewer than the specified number of results.
  * pageToken `string`: nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListStudentsResponse](#liststudentsresponse)

### classroom.courses.students.create
Adds a user as a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create students in this course or for access errors. * `NOT_FOUND` if the requested course ID does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * UserGroupsMembershipLimitReached * `ALREADY_EXISTS` if the user is already a student or teacher in the course.


```js
google_classroom.classroom.courses.students.create({
  "courseId": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course to create the student in. This identifier can be either the Classroom-assigned identifier or an alias.
  * enrollmentCode `string`: Enrollment code of the course to create the student in. This code is required if userId corresponds to the requesting user; it may be omitted if the requesting user has administrative permissions to create students for any user.
  * body [Student](#student)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Student](#student)

### classroom.courses.students.delete
Deletes a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete students of this course or for access errors. * `NOT_FOUND` if no student of this course has the requested ID or if the course does not exist.


```js
google_classroom.classroom.courses.students.delete({
  "courseId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * userId **required** `string`: Identifier of the student to delete. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### classroom.courses.students.get
Returns a student of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view students of this course or for access errors. * `NOT_FOUND` if no student of this course has the requested ID or if the course does not exist.


```js
google_classroom.classroom.courses.students.get({
  "courseId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * userId **required** `string`: Identifier of the student to return. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Student](#student)

### classroom.courses.teachers.list
Returns a list of teachers of this course that the requester is permitted to view. This method returns the following error codes: * `NOT_FOUND` if the course does not exist. * `PERMISSION_DENIED` for access errors.


```js
google_classroom.classroom.courses.teachers.list({
  "courseId": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * pageSize `integer`: Maximum number of items to return. The default is 30 if unspecified or `0`. The server may return fewer than the specified number of results.
  * pageToken `string`: nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListTeachersResponse](#listteachersresponse)

### classroom.courses.teachers.create
Creates a teacher of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create teachers in this course or for access errors. * `NOT_FOUND` if the requested course ID does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled, for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * CourseTeacherLimitReached * UserGroupsMembershipLimitReached * `ALREADY_EXISTS` if the user is already a teacher or student in the course.


```js
google_classroom.classroom.courses.teachers.create({
  "courseId": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * body [Teacher](#teacher)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Teacher](#teacher)

### classroom.courses.teachers.delete
Deletes a teacher of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete teachers of this course or for access errors. * `NOT_FOUND` if no teacher of this course has the requested ID or if the course does not exist. * `FAILED_PRECONDITION` if the requested ID belongs to the primary teacher of this course.


```js
google_classroom.classroom.courses.teachers.delete({
  "courseId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * userId **required** `string`: Identifier of the teacher to delete. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### classroom.courses.teachers.get
Returns a teacher of a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view teachers of this course or for access errors. * `NOT_FOUND` if no teacher of this course has the requested ID or if the course does not exist.


```js
google_classroom.classroom.courses.teachers.get({
  "courseId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * userId **required** `string`: Identifier of the teacher to return. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Teacher](#teacher)

### classroom.courses.topics.list
Returns the list of topics that the requester is permitted to view. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.


```js
google_classroom.classroom.courses.topics.list({
  "courseId": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * pageSize `integer`: Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
  * pageToken `string`: nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListTopicResponse](#listtopicresponse)

### classroom.courses.topics.create
Creates a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course, create a topic in the requested course, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course does not exist.


```js
google_classroom.classroom.courses.topics.create({
  "courseId": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * body [Topic](#topic)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Topic](#topic)

### classroom.courses.topics.delete
Deletes a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not allowed to delete the requested topic or for access errors. * `FAILED_PRECONDITION` if the requested topic has already been deleted. * `NOT_FOUND` if no course or topic exists with the requested ID.


```js
google_classroom.classroom.courses.topics.delete({
  "courseId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * id **required** `string`: Identifier of the topic to delete.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### classroom.courses.topics.get
Returns a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or topic, or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or topic does not exist.


```js
google_classroom.classroom.courses.topics.get({
  "courseId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course.
  * id **required** `string`: Identifier of the topic.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Topic](#topic)

### classroom.courses.topics.patch
Updates one or more fields of a topic. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting developer project did not create the corresponding topic or for access errors. * `INVALID_ARGUMENT` if the request is malformed. * `NOT_FOUND` if the requested course or topic does not exist


```js
google_classroom.classroom.courses.topics.patch({
  "courseId": "",
  "id": ""
}, context)
```

#### Input
* input `object`
  * courseId **required** `string`: Identifier of the course. This identifier can be either the Classroom-assigned identifier or an alias.
  * id **required** `string`: Identifier of the topic.
  * updateMask `string`: Mask that identifies which fields on the topic to update. This field is required to do an update. The update fails if invalid fields are specified. If a field supports empty values, it can be cleared by specifying it in the update mask and not in the Topic object. If a field that does not support empty values is included in the update mask and not set in the Topic object, an `INVALID_ARGUMENT` error is returned. The following fields may be specified: * `name`
  * body [Topic](#topic)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Topic](#topic)

### classroom.courses.delete
Deletes a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.


```js
google_classroom.classroom.courses.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifier of the course to delete. This identifier can be either the Classroom-assigned identifier or an alias.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### classroom.courses.get
Returns a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID.


```js
google_classroom.classroom.courses.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifier of the course to return. This identifier can be either the Classroom-assigned identifier or an alias.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Course](#course)

### classroom.courses.patch
Updates one or more fields in a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID. * `INVALID_ARGUMENT` if invalid fields are specified in the update mask or if no update mask is supplied. * `FAILED_PRECONDITION` for the following request errors: * CourseNotModifiable


```js
google_classroom.classroom.courses.patch({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias.
  * updateMask `string`: Mask that identifies which fields on the course to update. This field is required to do an update. The update will fail if invalid fields are specified. The following fields are valid: * `name` * `section` * `descriptionHeading` * `description` * `room` * `courseState` * `ownerId` Note: patches to ownerId are treated as being effective immediately, but in practice it may take some time for the ownership transfer of all affected resources to complete. When set in a query parameter, this field should be specified as `updateMask=,,...`
  * body [Course](#course)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Course](#course)

### classroom.courses.update
Updates a course. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to modify the requested course or for access errors. * `NOT_FOUND` if no course exists with the requested ID. * `FAILED_PRECONDITION` for the following request errors: * CourseNotModifiable


```js
google_classroom.classroom.courses.update({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifier of the course to update. This identifier can be either the Classroom-assigned identifier or an alias.
  * body [Course](#course)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Course](#course)

### classroom.invitations.list
Returns a list of invitations that the requesting user is permitted to view, restricted to those that match the list request. *Note:* At least one of `user_id` or `course_id` must be supplied. Both fields can be supplied. This method returns the following error codes: * `PERMISSION_DENIED` for access errors.


```js
google_classroom.classroom.invitations.list({}, context)
```

#### Input
* input `object`
  * courseId `string`: Restricts returned invitations to those for a course with the specified identifier.
  * pageSize `integer`: Maximum number of items to return. The default is 500 if unspecified or `0`. The server may return fewer than the specified number of results.
  * pageToken `string`: nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
  * userId `string`: Restricts returned invitations to those for a specific user. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListInvitationsResponse](#listinvitationsresponse)

### classroom.invitations.create
Creates an invitation. Only one invitation for a user and course may exist at a time. Delete and re-create an invitation to make changes. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to create invitations for this course or for access errors. * `NOT_FOUND` if the course or the user does not exist. * `FAILED_PRECONDITION` if the requested user's account is disabled or if the user already has this role or a role with greater permissions. * `ALREADY_EXISTS` if an invitation for the specified user and course already exists.


```js
google_classroom.classroom.invitations.create({}, context)
```

#### Input
* input `object`
  * body [Invitation](#invitation)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Invitation](#invitation)

### classroom.invitations.delete
Deletes an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to delete the requested invitation or for access errors. * `NOT_FOUND` if no invitation exists with the requested ID.


```js
google_classroom.classroom.invitations.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifier of the invitation to delete.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### classroom.invitations.get
Returns an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view the requested invitation or for access errors. * `NOT_FOUND` if no invitation exists with the requested ID.


```js
google_classroom.classroom.invitations.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifier of the invitation to return.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Invitation](#invitation)

### classroom.invitations.accept
Accepts an invitation, removing it and adding the invited user to the teachers or students (as appropriate) of the specified course. Only the invited user may accept an invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to accept the requested invitation or for access errors. * `FAILED_PRECONDITION` for the following request errors: * CourseMemberLimitReached * CourseNotModifiable * CourseTeacherLimitReached * UserGroupsMembershipLimitReached * `NOT_FOUND` if no invitation exists with the requested ID.


```js
google_classroom.classroom.invitations.accept({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Identifier of the invitation to accept.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### classroom.registrations.create
Creates a `Registration`, causing Classroom to start sending notifications from the provided `feed` to the destination provided in `cloudPubSubTopic`. Returns the created `Registration`. Currently, this will be the same as the argument, but with server-assigned fields such as `expiry_time` and `id` filled in. Note that any value specified for the `expiry_time` or `id` fields will be ignored. While Classroom may validate the `cloudPubSubTopic` and return errors on a best effort basis, it is the caller's responsibility to ensure that it exists and that Classroom has permission to publish to it. This method may return the following error codes: * `PERMISSION_DENIED` if: * the authenticated user does not have permission to receive notifications from the requested field; or * the current user has not granted access to the current Cloud project with the appropriate scope for the requested feed. Note that domain-wide delegation of authority is not currently supported for this purpose. If the request has the appropriate scope, but no grant exists, a Request Errors is returned. * another access error is encountered. * `INVALID_ARGUMENT` if: * no `cloudPubsubTopic` is specified, or the specified `cloudPubsubTopic` is not valid; or * no `feed` is specified, or the specified `feed` is not valid. * `NOT_FOUND` if: * the specified `feed` cannot be located, or the requesting user does not have permission to determine whether or not it exists; or * the specified `cloudPubsubTopic` cannot be located, or Classroom has not been granted permission to publish to it.


```js
google_classroom.classroom.registrations.create({}, context)
```

#### Input
* input `object`
  * body [Registration](#registration)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Registration](#registration)

### classroom.registrations.delete
Deletes a `Registration`, causing Classroom to stop sending notifications for that `Registration`.


```js
google_classroom.classroom.registrations.delete({
  "registrationId": ""
}, context)
```

#### Input
* input `object`
  * registrationId **required** `string`: The `registration_id` of the `Registration` to be deleted.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### classroom.userProfiles.guardianInvitations.list
Returns a list of guardian invitations that the requesting user is permitted to view, filtered by the parameters provided. This method returns the following error codes: * `PERMISSION_DENIED` if a `student_id` is specified, and the requesting user is not permitted to view guardian invitations for that student, if `"-"` is specified as the `student_id` and the user is not a domain administrator, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). May also be returned if an invalid `page_token` or `state` is provided. * `NOT_FOUND` if a `student_id` is specified, and its format can be recognized, but Classroom has no record of that student.


```js
google_classroom.classroom.userProfiles.guardianInvitations.list({
  "studentId": ""
}, context)
```

#### Input
* input `object`
  * studentId **required** `string`: The ID of the student whose guardian invitations are to be returned. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user * the string literal `"-"`, indicating that results should be returned for all students that the requesting user is permitted to view guardian invitations.
  * invitedEmailAddress `string`: If specified, only results with the specified `invited_email_address` are returned.
  * pageSize `integer`: Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
  * pageToken `string`: nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
  * states `array`: If specified, only results with the specified `state` values are returned. Otherwise, results with a `state` of `PENDING` are returned.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListGuardianInvitationsResponse](#listguardianinvitationsresponse)

### classroom.userProfiles.guardianInvitations.create
Creates a guardian invitation, and sends an email to the guardian asking them to confirm that they are the student's guardian. Once the guardian accepts the invitation, their `state` will change to `COMPLETED` and they will start receiving guardian notifications. A `Guardian` resource will also be created to represent the active guardian. The request object must have the `student_id` and `invited_email_address` fields set. Failing to set these fields, or setting any other fields in the request, will result in an error. This method returns the following error codes: * `PERMISSION_DENIED` if the current user does not have permission to manage guardians, if the guardian in question has already rejected too many requests for that student, if guardians are not enabled for the domain in question, or for other access errors. * `RESOURCE_EXHAUSTED` if the student or guardian has exceeded the guardian link limit. * `INVALID_ARGUMENT` if the guardian email address is not valid (for example, if it is too long), or if the format of the student ID provided cannot be recognized (it is not an email address, nor a `user_id` from this API). This error will also be returned if read-only fields are set, or if the `state` field is set to to a value other than `PENDING`. * `NOT_FOUND` if the student ID provided is a valid student ID, but Classroom has no record of that student. * `ALREADY_EXISTS` if there is already a pending guardian invitation for the student and `invited_email_address` provided, or if the provided `invited_email_address` matches the Google account of an existing `Guardian` for this user.


```js
google_classroom.classroom.userProfiles.guardianInvitations.create({
  "studentId": ""
}, context)
```

#### Input
* input `object`
  * studentId **required** `string`: ID of the student (in standard format)
  * body [GuardianInvitation](#guardianinvitation)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GuardianInvitation](#guardianinvitation)

### classroom.userProfiles.guardianInvitations.get
Returns a specific guardian invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to view guardian invitations for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). * `NOT_FOUND` if Classroom cannot find any record of the given student or `invitation_id`. May also be returned if the student exists, but the requesting user does not have access to see that student.


```js
google_classroom.classroom.userProfiles.guardianInvitations.get({
  "studentId": "",
  "invitationId": ""
}, context)
```

#### Input
* input `object`
  * studentId **required** `string`: The ID of the student whose guardian invitation is being requested.
  * invitationId **required** `string`: The `id` field of the `GuardianInvitation` being requested.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GuardianInvitation](#guardianinvitation)

### classroom.userProfiles.guardianInvitations.patch
Modifies a guardian invitation. Currently, the only valid modification is to change the `state` from `PENDING` to `COMPLETE`. This has the effect of withdrawing the invitation. This method returns the following error codes: * `PERMISSION_DENIED` if the current user does not have permission to manage guardians, if guardians are not enabled for the domain in question or for other access errors. * `FAILED_PRECONDITION` if the guardian link is not in the `PENDING` state. * `INVALID_ARGUMENT` if the format of the student ID provided cannot be recognized (it is not an email address, nor a `user_id` from this API), or if the passed `GuardianInvitation` has a `state` other than `COMPLETE`, or if it modifies fields other than `state`. * `NOT_FOUND` if the student ID provided is a valid student ID, but Classroom has no record of that student, or if the `id` field does not refer to a guardian invitation known to Classroom.


```js
google_classroom.classroom.userProfiles.guardianInvitations.patch({
  "studentId": "",
  "invitationId": ""
}, context)
```

#### Input
* input `object`
  * studentId **required** `string`: The ID of the student whose guardian invitation is to be modified.
  * invitationId **required** `string`: The `id` field of the `GuardianInvitation` to be modified.
  * updateMask `string`: Mask that identifies which fields on the course to update. This field is required to do an update. The update fails if invalid fields are specified. The following fields are valid: * `state` When set in a query parameter, this field should be specified as `updateMask=,,...`
  * body [GuardianInvitation](#guardianinvitation)
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [GuardianInvitation](#guardianinvitation)

### classroom.userProfiles.guardians.list
Returns a list of guardians that the requesting user is permitted to view, restricted to those that match the request. To list guardians for any student that the requesting user may view guardians for, use the literal character `-` for the student ID. This method returns the following error codes: * `PERMISSION_DENIED` if a `student_id` is specified, and the requesting user is not permitted to view guardian information for that student, if `"-"` is specified as the `student_id` and the user is not a domain administrator, if guardians are not enabled for the domain in question, if the `invited_email_address` filter is set by a user who is not a domain administrator, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). May also be returned if an invalid `page_token` is provided. * `NOT_FOUND` if a `student_id` is specified, and its format can be recognized, but Classroom has no record of that student.


```js
google_classroom.classroom.userProfiles.guardians.list({
  "studentId": ""
}, context)
```

#### Input
* input `object`
  * studentId **required** `string`: Filter results by the student who the guardian is linked to. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user * the string literal `"-"`, indicating that results should be returned for all students that the requesting user has access to view.
  * invitedEmailAddress `string`: Filter results by the email address that the original invitation was sent to, resulting in this guardian link. This filter can only be used by domain administrators.
  * pageSize `integer`: Maximum number of items to return. Zero or unspecified indicates that the server may assign a maximum. The server may return fewer than the specified number of results.
  * pageToken `string`: nextPageToken value returned from a previous list call, indicating that the subsequent page of results should be returned. The list request must be otherwise identical to the one that resulted in this token.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [ListGuardiansResponse](#listguardiansresponse)

### classroom.userProfiles.guardians.delete
Deletes a guardian. The guardian will no longer receive guardian notifications and the guardian will no longer be accessible via the API. This method returns the following error codes: * `PERMISSION_DENIED` if no user that matches the provided `student_id` is visible to the requesting user, if the requesting user is not permitted to manage guardians for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API). * `NOT_FOUND` if the requesting user is permitted to modify guardians for the requested `student_id`, but no `Guardian` record exists for that student with the provided `guardian_id`.


```js
google_classroom.classroom.userProfiles.guardians.delete({
  "studentId": "",
  "guardianId": ""
}, context)
```

#### Input
* input `object`
  * studentId **required** `string`: The student whose guardian is to be deleted. One of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
  * guardianId **required** `string`: The `id` field from a `Guardian`.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Empty](#empty)

### classroom.userProfiles.guardians.get
Returns a specific guardian. This method returns the following error codes: * `PERMISSION_DENIED` if no user that matches the provided `student_id` is visible to the requesting user, if the requesting user is not permitted to view guardian information for the student identified by the `student_id`, if guardians are not enabled for the domain in question, or for other access errors. * `INVALID_ARGUMENT` if a `student_id` is specified, but its format cannot be recognized (it is not an email address, nor a `student_id` from the API, nor the literal string `me`). * `NOT_FOUND` if the requesting user is permitted to view guardians for the requested `student_id`, but no `Guardian` record exists for that student that matches the provided `guardian_id`.


```js
google_classroom.classroom.userProfiles.guardians.get({
  "studentId": "",
  "guardianId": ""
}, context)
```

#### Input
* input `object`
  * studentId **required** `string`: The student whose guardian is being requested. One of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
  * guardianId **required** `string`: The `id` field from a `Guardian`.
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [Guardian](#guardian)

### classroom.userProfiles.get
Returns a user profile. This method returns the following error codes: * `PERMISSION_DENIED` if the requesting user is not permitted to access this user profile, if no profile exists with the requested ID, or for access errors.


```js
google_classroom.classroom.userProfiles.get({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: Identifier of the profile to return. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user
  * $.xgafv `string` (values: 1, 2): V1 error format.
  * access_token `string`: OAuth access token.
  * alt `string` (values: json, media, proto): Data format for response.
  * callback `string`: JSONP
  * fields `string`: Selector specifying which fields to include in a partial response.
  * key `string`: API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
  * oauth_token `string`: OAuth 2.0 token for the current user.
  * prettyPrint `boolean`: Returns response with indentations and line breaks.
  * quotaUser `string`: Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
  * upload_protocol `string`: Upload protocol for media (e.g. "raw", "multipart").
  * uploadType `string`: Legacy upload protocol for media (e.g. "media", "multipart").

#### Output
* output [UserProfile](#userprofile)



## Definitions

### Announcement
* Announcement `object`: Announcement created by a teacher for students of the course
  * alternateLink `string`: Absolute link to this announcement in the Classroom web UI. This is only populated if `state` is `PUBLISHED`. Read-only.
  * assigneeMode `string` (values: ASSIGNEE_MODE_UNSPECIFIED, ALL_STUDENTS, INDIVIDUAL_STUDENTS): Assignee mode of the announcement. If unspecified, the default value is `ALL_STUDENTS`.
  * courseId `string`: Identifier of the course. Read-only.
  * creationTime `string`: Timestamp when this announcement was created. Read-only.
  * creatorUserId `string`: Identifier for the user that created the announcement. Read-only.
  * id `string`: Classroom-assigned identifier of this announcement, unique per course. Read-only.
  * individualStudentsOptions [IndividualStudentsOptions](#individualstudentsoptions)
  * materials `array`: Additional materials. Announcements must have no more than 20 material items.
    * items [Material](#material)
  * scheduledTime `string`: Optional timestamp when this announcement is scheduled to be published.
  * state `string` (values: ANNOUNCEMENT_STATE_UNSPECIFIED, PUBLISHED, DRAFT, DELETED): Status of this announcement. If unspecified, the default state is `DRAFT`.
  * text `string`: Description of this announcement. The text must be a valid UTF-8 string containing no more than 30,000 characters.
  * updateTime `string`: Timestamp of the most recent change to this announcement. Read-only.

### Assignment
* Assignment `object`: Additional details for assignments.
  * studentWorkFolder [DriveFolder](#drivefolder)

### AssignmentSubmission
* AssignmentSubmission `object`: Student work for an assignment.
  * attachments `array`: Attachments added by the student. Drive files that correspond to materials with a share mode of STUDENT_COPY may not exist yet if the student has not accessed the assignment in Classroom. Some attachment metadata is only populated if the requesting user has permission to access it. Identifier and alternate_link fields are always available, but others (for example, title) may not be.
    * items [Attachment](#attachment)

### Attachment
* Attachment `object`: Attachment added to student assignment work. When creating attachments, setting the `form` field is not supported.
  * driveFile [DriveFile](#drivefile)
  * form [Form](#form)
  * link [Link](#link)
  * youTubeVideo [YouTubeVideo](#youtubevideo)

### CloudPubsubTopic
* CloudPubsubTopic `object`: A reference to a Cloud Pub/Sub topic. To register for notifications, the owner of the topic must grant `classroom-notifications@system.gserviceaccount.com` the `projects.topics.publish` permission.
  * topicName `string`: The `name` field of a Cloud Pub/Sub [Topic](https://cloud.google.com/pubsub/docs/reference/rest/v1/projects.topics#Topic).

### Course
* Course `object`: A Course in Classroom.
  * alternateLink `string`: Absolute link to this course in the Classroom web UI. Read-only.
  * calendarId `string`: The Calendar ID for a calendar that all course members can see, to which Classroom adds events for course work and announcements in the course. Read-only.
  * courseGroupEmail `string`: The email address of a Google group containing all members of the course. This group does not accept email and can only be used for permissions. Read-only.
  * courseMaterialSets `array`: Sets of materials that appear on the "about" page of this course. Read-only.
    * items [CourseMaterialSet](#coursematerialset)
  * courseState `string` (values: COURSE_STATE_UNSPECIFIED, ACTIVE, ARCHIVED, PROVISIONED, DECLINED, SUSPENDED): State of the course. If unspecified, the default state is `PROVISIONED`.
  * creationTime `string`: Creation time of the course. Specifying this field in a course update mask results in an error. Read-only.
  * description `string`: Optional description. For example, "We'll be learning about the structure of living creatures from a combination of textbooks, guest lectures, and lab work. Expect to be excited!" If set, this field must be a valid UTF-8 string and no longer than 30,000 characters.
  * descriptionHeading `string`: Optional heading for the description. For example, "Welcome to 10th Grade Biology." If set, this field must be a valid UTF-8 string and no longer than 3600 characters.
  * enrollmentCode `string`: Enrollment code to use when joining this course. Specifying this field in a course update mask results in an error. Read-only.
  * guardiansEnabled `boolean`: Whether or not guardian notifications are enabled for this course. Read-only.
  * id `string`: Identifier for this course assigned by Classroom. When creating a course, you may optionally set this identifier to an alias string in the request to create a corresponding alias. The `id` is still assigned by Classroom and cannot be updated after the course is created. Specifying this field in a course update mask results in an error.
  * name `string`: Name of the course. For example, "10th Grade Biology". The name is required. It must be between 1 and 750 characters and a valid UTF-8 string.
  * ownerId `string`: The identifier of the owner of a course. When specified as a parameter of a create course request, this field is required. The identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user This must be set in a create request. Admins can also specify this field in a patch course request to transfer ownership. In other contexts, it is read-only.
  * room `string`: Optional room location. For example, "301". If set, this field must be a valid UTF-8 string and no longer than 650 characters.
  * section `string`: Section of the course. For example, "Period 2". If set, this field must be a valid UTF-8 string and no longer than 2800 characters.
  * teacherFolder [DriveFolder](#drivefolder)
  * teacherGroupEmail `string`: The email address of a Google group containing all teachers of the course. This group does not accept email and can only be used for permissions. Read-only.
  * updateTime `string`: Time of the most recent update to this course. Specifying this field in a course update mask results in an error. Read-only.

### CourseAlias
* CourseAlias `object`: Alternative identifier for a course. An alias uniquely identifies a course. It must be unique within one of the following scopes: * domain: A domain-scoped alias is visible to all users within the alias creator's domain and can be created only by a domain admin. A domain-scoped alias is often used when a course has an identifier external to Classroom. * project: A project-scoped alias is visible to any request from an application using the Developer Console project ID that created the alias and can be created by any project. A project-scoped alias is often used when an application has alternative identifiers. A random value can also be used to avoid duplicate courses in the event of transmission failures, as retrying a request will return `ALREADY_EXISTS` if a previous one has succeeded.
  * alias `string`: Alias string. The format of the string indicates the desired alias scoping. * `d:` indicates a domain-scoped alias. Example: `d:math_101` * `p:` indicates a project-scoped alias. Example: `p:abc123` This field has a maximum length of 256 characters.

### CourseMaterial
* CourseMaterial `object`: A material attached to a course as part of a material set.
  * driveFile [DriveFile](#drivefile)
  * form [Form](#form)
  * link [Link](#link)
  * youTubeVideo [YouTubeVideo](#youtubevideo)

### CourseMaterialSet
* CourseMaterialSet `object`: A set of materials that appears on the "About" page of the course. These materials might include a syllabus, schedule, or other background information relating to the course as a whole.
  * materials `array`: Materials attached to this set.
    * items [CourseMaterial](#coursematerial)
  * title `string`: Title for this set.

### CourseRosterChangesInfo
* CourseRosterChangesInfo `object`: Information about a `Feed` with a `feed_type` of `COURSE_ROSTER_CHANGES`.
  * courseId `string`: The `course_id` of the course to subscribe to roster changes for.

### CourseWork
* CourseWork `object`: Course work created by a teacher for students of the course.
  * alternateLink `string`: Absolute link to this course work in the Classroom web UI. This is only populated if `state` is `PUBLISHED`. Read-only.
  * assigneeMode `string` (values: ASSIGNEE_MODE_UNSPECIFIED, ALL_STUDENTS, INDIVIDUAL_STUDENTS): Assignee mode of the coursework. If unspecified, the default value is `ALL_STUDENTS`.
  * assignment [Assignment](#assignment)
  * associatedWithDeveloper `boolean`: Whether this course work item is associated with the Developer Console project making the request. See CreateCourseWork for more details. Read-only.
  * courseId `string`: Identifier of the course. Read-only.
  * creationTime `string`: Timestamp when this course work was created. Read-only.
  * creatorUserId `string`: Identifier for the user that created the coursework. Read-only.
  * description `string`: Optional description of this course work. If set, the description must be a valid UTF-8 string containing no more than 30,000 characters.
  * dueDate [Date](#date)
  * dueTime [TimeOfDay](#timeofday)
  * id `string`: Classroom-assigned identifier of this course work, unique per course. Read-only.
  * individualStudentsOptions [IndividualStudentsOptions](#individualstudentsoptions)
  * materials `array`: Additional materials. CourseWork must have no more than 20 material items.
    * items [Material](#material)
  * maxPoints `number`: Maximum grade for this course work. If zero or unspecified, this assignment is considered ungraded. This must be a non-negative integer value.
  * multipleChoiceQuestion [MultipleChoiceQuestion](#multiplechoicequestion)
  * scheduledTime `string`: Optional timestamp when this course work is scheduled to be published.
  * state `string` (values: COURSE_WORK_STATE_UNSPECIFIED, PUBLISHED, DRAFT, DELETED): Status of this course work. If unspecified, the default state is `DRAFT`.
  * submissionModificationMode `string` (values: SUBMISSION_MODIFICATION_MODE_UNSPECIFIED, MODIFIABLE_UNTIL_TURNED_IN, MODIFIABLE): Setting to determine when students are allowed to modify submissions. If unspecified, the default value is `MODIFIABLE_UNTIL_TURNED_IN`.
  * title `string`: Title of this course work. The title must be a valid UTF-8 string containing between 1 and 3000 characters.
  * topicId `string`: Identifier for the topic that this coursework is associated with. Must match an existing topic in the course.
  * updateTime `string`: Timestamp of the most recent change to this course work. Read-only.
  * workType `string` (values: COURSE_WORK_TYPE_UNSPECIFIED, ASSIGNMENT, SHORT_ANSWER_QUESTION, MULTIPLE_CHOICE_QUESTION): Type of this course work. The type is set when the course work is created and cannot be changed.

### CourseWorkChangesInfo
* CourseWorkChangesInfo `object`: Information about a `Feed` with a `feed_type` of `COURSE_WORK_CHANGES`.
  * courseId `string`: The `course_id` of the course to subscribe to work changes for.

### CourseWorkMaterial
* CourseWorkMaterial `object`: Course work material created by a teacher for students of the course
  * alternateLink `string`: Absolute link to this course work material in the Classroom web UI. This is only populated if `state` is `PUBLISHED`. Read-only.
  * assigneeMode `string` (values: ASSIGNEE_MODE_UNSPECIFIED, ALL_STUDENTS, INDIVIDUAL_STUDENTS): Assignee mode of the course work material. If unspecified, the default value is `ALL_STUDENTS`.
  * courseId `string`: Identifier of the course. Read-only.
  * creationTime `string`: Timestamp when this course work material was created. Read-only.
  * creatorUserId `string`: Identifier for the user that created the course work material. Read-only.
  * description `string`: Optional description of this course work material. The text must be a valid UTF-8 string containing no more than 30,000 characters.
  * id `string`: Classroom-assigned identifier of this course work material, unique per course. Read-only.
  * individualStudentsOptions [IndividualStudentsOptions](#individualstudentsoptions)
  * materials `array`: Additional materials. A course work material must have no more than 20 material items.
    * items [Material](#material)
  * scheduledTime `string`: Optional timestamp when this course work material is scheduled to be published.
  * state `string` (values: COURSEWORK_MATERIAL_STATE_UNSPECIFIED, PUBLISHED, DRAFT, DELETED): Status of this course work material. If unspecified, the default state is `DRAFT`.
  * title `string`: Title of this course work material. The title must be a valid UTF-8 string containing between 1 and 3000 characters.
  * topicId `string`: Identifier for the topic that this course work material is associated with. Must match an existing topic in the course.
  * updateTime `string`: Timestamp of the most recent change to this course work material. Read-only.

### Date
* Date `object`: Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values * A month and day value, with a zero year, such as an anniversary * A year on its own, with zero month and day values * A year and month value, with a zero day, such as a credit card expiration date Related types are google.type.TimeOfDay and `google.protobuf.Timestamp`.
  * day `integer`: Day of a month. Must be from 1 to 31 and valid for the year and month, or 0 to specify a year by itself or a year and month where the day isn't significant.
  * month `integer`: Month of a year. Must be from 1 to 12, or 0 to specify a year without a month and day.
  * year `integer`: Year of the date. Must be from 1 to 9999, or 0 to specify a date without a year.

### DriveFile
* DriveFile `object`: Representation of a Google Drive file.
  * alternateLink `string`: URL that can be used to access the Drive item. Read-only.
  * id `string`: Drive API resource ID.
  * thumbnailUrl `string`: URL of a thumbnail image of the Drive item. Read-only.
  * title `string`: Title of the Drive item. Read-only.

### DriveFolder
* DriveFolder `object`: Representation of a Google Drive folder.
  * alternateLink `string`: URL that can be used to access the Drive folder. Read-only.
  * id `string`: Drive API resource ID.
  * title `string`: Title of the Drive folder. Read-only.

### Empty
* Empty `object`: A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); } The JSON representation for `Empty` is empty JSON object `{}`.

### Feed
* Feed `object`: A class of notifications that an application can register to receive. For example: "all roster changes for a domain".
  * courseRosterChangesInfo [CourseRosterChangesInfo](#courserosterchangesinfo)
  * courseWorkChangesInfo [CourseWorkChangesInfo](#courseworkchangesinfo)
  * feedType `string` (values: FEED_TYPE_UNSPECIFIED, DOMAIN_ROSTER_CHANGES, COURSE_ROSTER_CHANGES, COURSE_WORK_CHANGES): The type of feed.

### Form
* Form `object`: Google Forms item.
  * formUrl `string`: URL of the form.
  * responseUrl `string`: URL of the form responses document. Only set if respsonses have been recorded and only when the requesting user is an editor of the form. Read-only.
  * thumbnailUrl `string`: URL of a thumbnail image of the Form. Read-only.
  * title `string`: Title of the Form. Read-only.

### GlobalPermission
* GlobalPermission `object`: Global user permission description.
  * permission `string` (values: PERMISSION_UNSPECIFIED, CREATE_COURSE): Permission value.

### GradeHistory
* GradeHistory `object`: The history of each grade on this submission.
  * actorUserId `string`: The teacher who made the grade change.
  * gradeChangeType `string` (values: UNKNOWN_GRADE_CHANGE_TYPE, DRAFT_GRADE_POINTS_EARNED_CHANGE, ASSIGNED_GRADE_POINTS_EARNED_CHANGE, MAX_POINTS_CHANGE): The type of grade change at this time in the submission grade history.
  * gradeTimestamp `string`: When the grade of the submission was changed.
  * maxPoints `number`: The denominator of the grade at this time in the submission grade history.
  * pointsEarned `number`: The numerator of the grade at this time in the submission grade history.

### Guardian
* Guardian `object`: Association between a student and a guardian of that student. The guardian may receive information about the student's course work.
  * guardianId `string`: Identifier for the guardian.
  * guardianProfile [UserProfile](#userprofile)
  * invitedEmailAddress `string`: The email address to which the initial guardian invitation was sent. This field is only visible to domain administrators.
  * studentId `string`: Identifier for the student to whom the guardian relationship applies.

### GuardianInvitation
* GuardianInvitation `object`: An invitation to become the guardian of a specified user, sent to a specified email address.
  * creationTime `string`: The time that this invitation was created. Read-only.
  * invitationId `string`: Unique identifier for this invitation. Read-only.
  * invitedEmailAddress `string`: Email address that the invitation was sent to. This field is only visible to domain administrators.
  * state `string` (values: GUARDIAN_INVITATION_STATE_UNSPECIFIED, PENDING, COMPLETE): The state that this invitation is in.
  * studentId `string`: ID of the student (in standard format)

### IndividualStudentsOptions
* IndividualStudentsOptions `object`: Assignee details about a coursework/announcement. This field is set if and only if `assigneeMode` is `INDIVIDUAL_STUDENTS`.
  * studentIds `array`: Identifiers for the students that have access to the coursework/announcement.
    * items `string`

### Invitation
* Invitation `object`: An invitation to join a course.
  * courseId `string`: Identifier of the course to invite the user to.
  * id `string`: Identifier assigned by Classroom. Read-only.
  * role `string` (values: COURSE_ROLE_UNSPECIFIED, STUDENT, TEACHER, OWNER): Role to invite the user to have. Must not be `COURSE_ROLE_UNSPECIFIED`.
  * userId `string`: Identifier of the invited user. When specified as a parameter of a request, this identifier can be set to one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user

### Link
* Link `object`: URL item.
  * thumbnailUrl `string`: URL of a thumbnail image of the target URL. Read-only.
  * title `string`: Title of the target of the URL. Read-only.
  * url `string`: URL to link to. This must be a valid UTF-8 string containing between 1 and 2024 characters.

### ListAnnouncementsResponse
* ListAnnouncementsResponse `object`: Response when listing course work.
  * announcements `array`: Announcement items that match the request.
    * items [Announcement](#announcement)
  * nextPageToken `string`: Token identifying the next page of results to return. If empty, no further results are available.

### ListCourseAliasesResponse
* ListCourseAliasesResponse `object`: Response when listing course aliases.
  * aliases `array`: The course aliases.
    * items [CourseAlias](#coursealias)
  * nextPageToken `string`: Token identifying the next page of results to return. If empty, no further results are available.

### ListCourseWorkMaterialResponse
* ListCourseWorkMaterialResponse `object`: Response when listing course work material.
  * courseWorkMaterial `array`: Course work material items that match the request.
    * items [CourseWorkMaterial](#courseworkmaterial)
  * nextPageToken `string`: Token identifying the next page of results to return. If empty, no further results are available.

### ListCourseWorkResponse
* ListCourseWorkResponse `object`: Response when listing course work.
  * courseWork `array`: Course work items that match the request.
    * items [CourseWork](#coursework)
  * nextPageToken `string`: Token identifying the next page of results to return. If empty, no further results are available.

### ListCoursesResponse
* ListCoursesResponse `object`: Response when listing courses.
  * courses `array`: Courses that match the list request.
    * items [Course](#course)
  * nextPageToken `string`: Token identifying the next page of results to return. If empty, no further results are available.

### ListGuardianInvitationsResponse
* ListGuardianInvitationsResponse `object`: Response when listing guardian invitations.
  * guardianInvitations `array`: Guardian invitations that matched the list request.
    * items [GuardianInvitation](#guardianinvitation)
  * nextPageToken `string`: Token identifying the next page of results to return. If empty, no further results are available.

### ListGuardiansResponse
* ListGuardiansResponse `object`: Response when listing guardians.
  * guardians `array`: Guardians on this page of results that met the criteria specified in the request.
    * items [Guardian](#guardian)
  * nextPageToken `string`: Token identifying the next page of results to return. If empty, no further results are available.

### ListInvitationsResponse
* ListInvitationsResponse `object`: Response when listing invitations.
  * invitations `array`: Invitations that match the list request.
    * items [Invitation](#invitation)
  * nextPageToken `string`: Token identifying the next page of results to return. If empty, no further results are available.

### ListStudentSubmissionsResponse
* ListStudentSubmissionsResponse `object`: Response when listing student submissions.
  * nextPageToken `string`: Token identifying the next page of results to return. If empty, no further results are available.
  * studentSubmissions `array`: Student work that matches the request.
    * items [StudentSubmission](#studentsubmission)

### ListStudentsResponse
* ListStudentsResponse `object`: Response when listing students.
  * nextPageToken `string`: Token identifying the next page of results to return. If empty, no further results are available.
  * students `array`: Students who match the list request.
    * items [Student](#student)

### ListTeachersResponse
* ListTeachersResponse `object`: Response when listing teachers.
  * nextPageToken `string`: Token identifying the next page of results to return. If empty, no further results are available.
  * teachers `array`: Teachers who match the list request.
    * items [Teacher](#teacher)

### ListTopicResponse
* ListTopicResponse `object`: Response when listing topics.
  * nextPageToken `string`: Token identifying the next page of results to return. If empty, no further results are available.
  * topic `array`: Topic items that match the request.
    * items [Topic](#topic)

### Material
* Material `object`: Material attached to course work. When creating attachments, setting the `form` field is not supported.
  * driveFile [SharedDriveFile](#shareddrivefile)
  * form [Form](#form)
  * link [Link](#link)
  * youtubeVideo [YouTubeVideo](#youtubevideo)

### ModifyAnnouncementAssigneesRequest
* ModifyAnnouncementAssigneesRequest `object`: Request to modify assignee mode and options of an announcement.
  * assigneeMode `string` (values: ASSIGNEE_MODE_UNSPECIFIED, ALL_STUDENTS, INDIVIDUAL_STUDENTS): Mode of the announcement describing whether it is accessible by all students or specified individual students.
  * modifyIndividualStudentsOptions [ModifyIndividualStudentsOptions](#modifyindividualstudentsoptions)

### ModifyAttachmentsRequest
* ModifyAttachmentsRequest `object`: Request to modify the attachments of a student submission.
  * addAttachments `array`: Attachments to add. A student submission may not have more than 20 attachments. Form attachments are not supported.
    * items [Attachment](#attachment)

### ModifyCourseWorkAssigneesRequest
* ModifyCourseWorkAssigneesRequest `object`: Request to modify assignee mode and options of a coursework.
  * assigneeMode `string` (values: ASSIGNEE_MODE_UNSPECIFIED, ALL_STUDENTS, INDIVIDUAL_STUDENTS): Mode of the coursework describing whether it will be assigned to all students or specified individual students.
  * modifyIndividualStudentsOptions [ModifyIndividualStudentsOptions](#modifyindividualstudentsoptions)

### ModifyIndividualStudentsOptions
* ModifyIndividualStudentsOptions `object`: Contains fields to add or remove students from a course work or announcement where the `assigneeMode` is set to `INDIVIDUAL_STUDENTS`.
  * addStudentIds `array`: IDs of students to be added as having access to this coursework/announcement.
    * items `string`
  * removeStudentIds `array`: IDs of students to be removed from having access to this coursework/announcement.
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
  * familyName `string`: The user's last name. Read-only.
  * fullName `string`: The user's full name formed by concatenating the first and last name values. Read-only.
  * givenName `string`: The user's first name. Read-only.

### ReclaimStudentSubmissionRequest
* ReclaimStudentSubmissionRequest `object`: Request to reclaim a student submission.

### Registration
* Registration `object`: An instruction to Classroom to send notifications from the `feed` to the provided destination.
  * cloudPubsubTopic [CloudPubsubTopic](#cloudpubsubtopic)
  * expiryTime `string`: The time until which the `Registration` is effective. This is a read-only field assigned by the server.
  * feed [Feed](#feed)
  * registrationId `string`: A server-generated unique identifier for this `Registration`. Read-only.

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
  * actorUserId `string`: The teacher or student who made the change.
  * state `string` (values: STATE_UNSPECIFIED, CREATED, TURNED_IN, RETURNED, RECLAIMED_BY_STUDENT, STUDENT_EDITED_AFTER_TURN_IN): The workflow pipeline stage.
  * stateTimestamp `string`: When the submission entered this state.

### Student
* Student `object`: Student in a course.
  * courseId `string`: Identifier of the course. Read-only.
  * profile [UserProfile](#userprofile)
  * studentWorkFolder [DriveFolder](#drivefolder)
  * userId `string`: Identifier of the user. When specified as a parameter of a request, this identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user

### StudentSubmission
* StudentSubmission `object`: Student submission for course work. StudentSubmission items are generated when a CourseWork item is created. StudentSubmissions that have never been accessed (i.e. with `state` = NEW) may not have a creation time or update time.
  * alternateLink `string`: Absolute link to the submission in the Classroom web UI. Read-only.
  * assignedGrade `number`: Optional grade. If unset, no grade was set. This value must be non-negative. Decimal (that is, non-integer) values are allowed, but are rounded to two decimal places. This may be modified only by course teachers.
  * assignmentSubmission [AssignmentSubmission](#assignmentsubmission)
  * associatedWithDeveloper `boolean`: Whether this student submission is associated with the Developer Console project making the request. See CreateCourseWork for more details. Read-only.
  * courseId `string`: Identifier of the course. Read-only.
  * courseWorkId `string`: Identifier for the course work this corresponds to. Read-only.
  * courseWorkType `string` (values: COURSE_WORK_TYPE_UNSPECIFIED, ASSIGNMENT, SHORT_ANSWER_QUESTION, MULTIPLE_CHOICE_QUESTION): Type of course work this submission is for. Read-only.
  * creationTime `string`: Creation time of this submission. This may be unset if the student has not accessed this item. Read-only.
  * draftGrade `number`: Optional pending grade. If unset, no grade was set. This value must be non-negative. Decimal (that is, non-integer) values are allowed, but are rounded to two decimal places. This is only visible to and modifiable by course teachers.
  * id `string`: Classroom-assigned Identifier for the student submission. This is unique among submissions for the relevant course work. Read-only.
  * late `boolean`: Whether this submission is late. Read-only.
  * multipleChoiceSubmission [MultipleChoiceSubmission](#multiplechoicesubmission)
  * shortAnswerSubmission [ShortAnswerSubmission](#shortanswersubmission)
  * state `string` (values: SUBMISSION_STATE_UNSPECIFIED, NEW, CREATED, TURNED_IN, RETURNED, RECLAIMED_BY_STUDENT): State of this submission. Read-only.
  * submissionHistory `array`: The history of the submission (includes state and grade histories). Read-only.
    * items [SubmissionHistory](#submissionhistory)
  * updateTime `string`: Last update time of this submission. This may be unset if the student has not accessed this item. Read-only.
  * userId `string`: Identifier for the student that owns this submission. Read-only.

### SubmissionHistory
* SubmissionHistory `object`: The history of the submission. This currently includes state and grade histories.
  * gradeHistory [GradeHistory](#gradehistory)
  * stateHistory [StateHistory](#statehistory)

### Teacher
* Teacher `object`: Teacher of a course.
  * courseId `string`: Identifier of the course. Read-only.
  * profile [UserProfile](#userprofile)
  * userId `string`: Identifier of the user. When specified as a parameter of a request, this identifier can be one of the following: * the numeric identifier for the user * the email address of the user * the string literal `"me"`, indicating the requesting user

### TimeOfDay
* TimeOfDay `object`: Represents a time of day. The date and time zone are either not significant or are specified elsewhere. An API may choose to allow leap seconds. Related types are google.type.Date and `google.protobuf.Timestamp`.
  * hours `integer`: Hours of day in 24 hour format. Should be from 0 to 23. An API may choose to allow the value "24:00:00" for scenarios like business closing time.
  * minutes `integer`: Minutes of hour of day. Must be from 0 to 59.
  * nanos `integer`: Fractions of seconds in nanoseconds. Must be from 0 to 999,999,999.
  * seconds `integer`: Seconds of minutes of the time. Must normally be from 0 to 59. An API may allow the value 60 if it allows leap-seconds.

### Topic
* Topic `object`: Topic created by a teacher for the course
  * courseId `string`: Identifier of the course. Read-only.
  * name `string`: The name of the topic, generated by the user. Leading and trailing whitespaces, if any, are trimmed. Also, multiple consecutive whitespaces are collapsed into one inside the name. The result must be a non-empty string. Topic names are case sensitive, and must be no longer than 100 characters.
  * topicId `string`: Unique identifier for the topic. Read-only.
  * updateTime `string`: The time the topic was last updated by the system. Read-only.

### TurnInStudentSubmissionRequest
* TurnInStudentSubmissionRequest `object`: Request to turn in a student submission.

### UserProfile
* UserProfile `object`: Global information for a user.
  * emailAddress `string`: Email address of the user. Read-only.
  * id `string`: Identifier of the user. Read-only.
  * name [Name](#name)
  * permissions `array`: Global permissions of the user. Read-only.
    * items [GlobalPermission](#globalpermission)
  * photoUrl `string`: URL of user's profile photo. Read-only.
  * verifiedTeacher `boolean`: Represents whether a G Suite for Education user's domain administrator has explicitly verified them as being a teacher. If the user is not a member of a G Suite for Education domain, than this field is always false. Read-only

### YouTubeVideo
* YouTubeVideo `object`: YouTube video item.
  * alternateLink `string`: URL that can be used to view the YouTube video. Read-only.
  * id `string`: YouTube API resource ID.
  * thumbnailUrl `string`: URL of a thumbnail image of the YouTube video. Read-only.
  * title `string`: Title of the YouTube video. Read-only.


