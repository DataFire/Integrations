# @datafire/google_classroom
Manages classes, rosters, and invitations in Google Classroom.

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
## Operation: courses.list
Returns a list of courses that the requesting user is permitted to view,
restricted to those that match the request.

This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.
* `INVALID_ARGUMENT` if the query argument is malformed.
* `NOT_FOUND` if any users specified in the query arguments do not exist.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "courseStates": {
      "type": "array",
      "description": "Restricts returned courses to those in one of the specified states\nThe default value is ACTIVE, ARCHIVED, PROVISIONED, DECLINED."
    },
    "pageSize": {
      "type": "integer",
      "description": "Maximum number of items to return. Zero or unspecified indicates that the\nserver may assign a maximum.\n\nThe server may return fewer than the specified number of results."
    },
    "teacherId": {
      "type": "string",
      "description": "Restricts returned courses to those having a teacher with the specified\nidentifier. The identifier can be one of the following:\n\n* the numeric identifier for the user\n* the email address of the user\n* the string literal `\"me\"`, indicating the requesting user"
    },
    "studentId": {
      "type": "string",
      "description": "Restricts returned courses to those having a student with the specified\nidentifier. The identifier can be one of the following:\n\n* the numeric identifier for the user\n* the email address of the user\n* the string literal `\"me\"`, indicating the requesting user"
    },
    "pageToken": {
      "type": "string",
      "description": "nextPageToken\nvalue returned from a previous\nlist call,\nindicating that the subsequent page of results should be returned.\n\nThe list request must be\notherwise identical to the one that resulted in this token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListCoursesResponse"
}
```
## Operation: courses.create
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

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/Course"
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Course"
}
```
## Operation: courses.aliases.list
Returns a list of aliases for a course.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the
course or for access errors.
* `NOT_FOUND` if the course does not exist.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "courseId": {
      "type": "string",
      "description": "The identifier of the course.\nThis identifier can be either the Classroom-assigned identifier or an\nalias."
    },
    "pageSize": {
      "type": "integer",
      "description": "Maximum number of items to return. Zero or unspecified indicates that the\nserver may assign a maximum.\n\nThe server may return fewer than the specified number of results."
    },
    "pageToken": {
      "type": "string",
      "description": "nextPageToken\nvalue returned from a previous\nlist call,\nindicating that the subsequent page of results should be returned.\n\nThe list request\nmust be otherwise identical to the one that resulted in this token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "courseId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListCourseAliasesResponse"
}
```
## Operation: courses.aliases.create
Creates an alias for a course.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to create the
alias or for access errors.
* `NOT_FOUND` if the course does not exist.
* `ALREADY_EXISTS` if the alias already exists.
* `FAILED_PRECONDITION` if the alias requested does not make sense for the
  requesting user or course (for example, if a user not in a domain
  attempts to access a domain-scoped alias).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "courseId": {
      "type": "string",
      "description": "Identifier of the course to alias.\nThis identifier can be either the Classroom-assigned identifier or an\nalias."
    },
    "body": {
      "$ref": "#/definitions/CourseAlias"
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "courseId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CourseAlias"
}
```
## Operation: courses.aliases.delete
Deletes an alias of a course.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to remove the
alias or for access errors.
* `NOT_FOUND` if the alias does not exist.
* `FAILED_PRECONDITION` if the alias requested does not make sense for the
  requesting user or course (for example, if a user not in a domain
  attempts to delete a domain-scoped alias).

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "courseId": {
      "type": "string",
      "description": "Identifier of the course whose alias should be deleted.\nThis identifier can be either the Classroom-assigned identifier or an\nalias."
    },
    "alias": {
      "type": "string",
      "description": "Alias to delete.\nThis may not be the Classroom-assigned identifier."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "courseId",
    "alias"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Empty"
}
```
## Operation: courses.courseWork.list
Returns a list of course work that the requester is permitted to view.

Course students may only view `PUBLISHED` course work. Course teachers
and domain administrators may view all course work.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access
the requested course or for access errors.
* `INVALID_ARGUMENT` if the request is malformed.
* `NOT_FOUND` if the requested course does not exist.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "courseId": {
      "type": "string",
      "description": "Identifier of the course.\nThis identifier can be either the Classroom-assigned identifier or an\nalias."
    },
    "courseWorkStates": {
      "type": "array",
      "description": "Restriction on the work status to return. Only courseWork that matches\nis returned. If unspecified, items with a work status of `PUBLISHED`\nis returned."
    },
    "pageSize": {
      "type": "integer",
      "description": "Maximum number of items to return. Zero or unspecified indicates that the\nserver may assign a maximum.\n\nThe server may return fewer than the specified number of results."
    },
    "orderBy": {
      "type": "string",
      "description": "Optional sort ordering for results. A comma-separated list of fields with\nan optional sort direction keyword. Supported fields are `updateTime`\nand `dueDate`. Supported direction keywords are `asc` and `desc`.\nIf not specified, `updateTime desc` is the default behavior.\nExamples: `dueDate asc,updateTime desc`, `updateTime,dueDate desc`"
    },
    "pageToken": {
      "type": "string",
      "description": "nextPageToken\nvalue returned from a previous\nlist call,\nindicating that the subsequent page of results should be returned.\n\nThe list request\nmust be otherwise identical to the one that resulted in this token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "courseId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListCourseWorkResponse"
}
```
## Operation: courses.courseWork.create
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "courseId": {
      "type": "string",
      "description": "Identifier of the course.\nThis identifier can be either the Classroom-assigned identifier or an\nalias."
    },
    "body": {
      "$ref": "#/definitions/CourseWork"
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "courseId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CourseWork"
}
```
## Operation: courses.courseWork.studentSubmissions.list
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "courseId": {
      "type": "string",
      "description": "Identifier of the course.\nThis identifier can be either the Classroom-assigned identifier or an\nalias."
    },
    "courseWorkId": {
      "type": "string",
      "description": "Identifer of the student work to request.\nThis may be set to the string literal `\"-\"` to request student work for\nall course work in the specified course."
    },
    "states": {
      "type": "array",
      "description": "Requested submission states. If specified, returned student submissions\nmatch one of the specified submission states."
    },
    "userId": {
      "type": "string",
      "description": "Optional argument to restrict returned student work to those owned by the\nstudent with the specified identifier. The identifier can be one of the\nfollowing:\n\n* the numeric identifier for the user\n* the email address of the user\n* the string literal `\"me\"`, indicating the requesting user"
    },
    "pageSize": {
      "type": "integer",
      "description": "Maximum number of items to return. Zero or unspecified indicates that the\nserver may assign a maximum.\n\nThe server may return fewer than the specified number of results."
    },
    "late": {
      "type": "string",
      "description": "Requested lateness value. If specified, returned student submissions are\nrestricted by the requested value.\nIf unspecified, submissions are returned regardless of `late` value.",
      "enum": [
        "LATE_VALUES_UNSPECIFIED",
        "LATE_ONLY",
        "NOT_LATE_ONLY"
      ]
    },
    "pageToken": {
      "type": "string",
      "description": "nextPageToken\nvalue returned from a previous\nlist call,\nindicating that the subsequent page of results should be returned.\n\nThe list request\nmust be otherwise identical to the one that resulted in this token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "courseId",
    "courseWorkId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListStudentSubmissionsResponse"
}
```
## Operation: courses.courseWork.studentSubmissions.get
Returns a student submission.

* `PERMISSION_DENIED` if the requesting user is not permitted to access the
requested course, course work, or student submission or for
access errors.
* `INVALID_ARGUMENT` if the request is malformed.
* `NOT_FOUND` if the requested course, course work, or student submission
does not exist.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "courseId": {
      "type": "string",
      "description": "Identifier of the course.\nThis identifier can be either the Classroom-assigned identifier or an\nalias."
    },
    "courseWorkId": {
      "type": "string",
      "description": "Identifier of the course work."
    },
    "id": {
      "type": "string",
      "description": "Identifier of the student submission."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "courseId",
    "courseWorkId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StudentSubmission"
}
```
## Operation: courses.courseWork.studentSubmissions.patch
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "courseId": {
      "type": "string",
      "description": "Identifier of the course.\nThis identifier can be either the Classroom-assigned identifier or an\nalias."
    },
    "courseWorkId": {
      "type": "string",
      "description": "Identifier of the course work."
    },
    "id": {
      "type": "string",
      "description": "Identifier of the student submission."
    },
    "updateMask": {
      "type": "string",
      "description": "Mask that identifies which fields on the student submission to update.\nThis field is required to do an update. The update fails if invalid\nfields are specified.\n\nThe following fields may be specified by teachers:\n* `draft_grade`\n* `assigned_grade`"
    },
    "body": {
      "$ref": "#/definitions/StudentSubmission"
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "courseId",
    "courseWorkId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StudentSubmission"
}
```
## Operation: courses.courseWork.studentSubmissions.modifyAttachments
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "courseId": {
      "type": "string",
      "description": "Identifier of the course.\nThis identifier can be either the Classroom-assigned identifier or an\nalias."
    },
    "courseWorkId": {
      "type": "string",
      "description": "Identifier of the course work."
    },
    "id": {
      "type": "string",
      "description": "Identifier of the student submission."
    },
    "body": {
      "$ref": "#/definitions/ModifyAttachmentsRequest"
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "courseId",
    "courseWorkId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/StudentSubmission"
}
```
## Operation: courses.courseWork.studentSubmissions.reclaim
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "courseId": {
      "type": "string",
      "description": "Identifier of the course.\nThis identifier can be either the Classroom-assigned identifier or an\nalias."
    },
    "courseWorkId": {
      "type": "string",
      "description": "Identifier of the course work."
    },
    "id": {
      "type": "string",
      "description": "Identifier of the student submission."
    },
    "body": {
      "$ref": "#/definitions/ReclaimStudentSubmissionRequest"
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "courseId",
    "courseWorkId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Empty"
}
```
## Operation: courses.courseWork.studentSubmissions.return
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "courseId": {
      "type": "string",
      "description": "Identifier of the course.\nThis identifier can be either the Classroom-assigned identifier or an\nalias."
    },
    "courseWorkId": {
      "type": "string",
      "description": "Identifier of the course work."
    },
    "id": {
      "type": "string",
      "description": "Identifier of the student submission."
    },
    "body": {
      "$ref": "#/definitions/ReturnStudentSubmissionRequest"
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "courseId",
    "courseWorkId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Empty"
}
```
## Operation: courses.courseWork.studentSubmissions.turnIn
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "courseId": {
      "type": "string",
      "description": "Identifier of the course.\nThis identifier can be either the Classroom-assigned identifier or an\nalias."
    },
    "courseWorkId": {
      "type": "string",
      "description": "Identifier of the course work."
    },
    "id": {
      "type": "string",
      "description": "Identifier of the student submission."
    },
    "body": {
      "$ref": "#/definitions/TurnInStudentSubmissionRequest"
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "courseId",
    "courseWorkId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Empty"
}
```
## Operation: courses.courseWork.delete
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "courseId": {
      "type": "string",
      "description": "Identifier of the course.\nThis identifier can be either the Classroom-assigned identifier or an\nalias."
    },
    "id": {
      "type": "string",
      "description": "Identifier of the course work to delete.\nThis identifier is a Classroom-assigned identifier."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "courseId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Empty"
}
```
## Operation: courses.courseWork.get
Returns course work.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the
requested course or course work, or for access errors.
* `INVALID_ARGUMENT` if the request is malformed.
* `NOT_FOUND` if the requested course or course work does not exist.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "courseId": {
      "type": "string",
      "description": "Identifier of the course.\nThis identifier can be either the Classroom-assigned identifier or an\nalias."
    },
    "id": {
      "type": "string",
      "description": "Identifier of the course work."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "courseId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CourseWork"
}
```
## Operation: courses.courseWork.patch
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "courseId": {
      "type": "string",
      "description": "Identifier of the course.\nThis identifier can be either the Classroom-assigned identifier or an\nalias."
    },
    "id": {
      "type": "string",
      "description": "Identifier of the course work."
    },
    "updateMask": {
      "type": "string",
      "description": "Mask that identifies which fields on the course work to update.\nThis field is required to do an update. The update fails if invalid\nfields are specified. If a field supports empty values, it can be cleared\nby specifying it in the update mask and not in the CourseWork object. If a\nfield that does not support empty values is included in the update mask and\nnot set in the CourseWork object, an `INVALID_ARGUMENT` error will be\nreturned.\n\nThe following fields may be specified by teachers:\n* `title`\n* `description`\n* `state`\n* `due_date`\n* `due_time`\n* `max_points`\n* `submission_modification_mode`"
    },
    "body": {
      "$ref": "#/definitions/CourseWork"
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "courseId",
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/CourseWork"
}
```
## Operation: courses.students.list
Returns a list of students of this course that the requester
is permitted to view.

This method returns the following error codes:

* `NOT_FOUND` if the course does not exist.
* `PERMISSION_DENIED` for access errors.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "courseId": {
      "type": "string",
      "description": "Identifier of the course.\nThis identifier can be either the Classroom-assigned identifier or an\nalias."
    },
    "pageSize": {
      "type": "integer",
      "description": "Maximum number of items to return. Zero means no maximum.\n\nThe server may return fewer than the specified number of results."
    },
    "pageToken": {
      "type": "string",
      "description": "nextPageToken\nvalue returned from a previous\nlist call, indicating that\nthe subsequent page of results should be returned.\n\nThe list request must be\notherwise identical to the one that resulted in this token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "courseId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListStudentsResponse"
}
```
## Operation: courses.students.create
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "courseId": {
      "type": "string",
      "description": "Identifier of the course to create the student in.\nThis identifier can be either the Classroom-assigned identifier or an\nalias."
    },
    "enrollmentCode": {
      "type": "string",
      "description": "Enrollment code of the course to create the student in.\nThis code is required if userId\ncorresponds to the requesting user; it may be omitted if the requesting\nuser has administrative permissions to create students for any user."
    },
    "body": {
      "$ref": "#/definitions/Student"
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "courseId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Student"
}
```
## Operation: courses.students.delete
Deletes a student of a course.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to delete
students of this course or for access errors.
* `NOT_FOUND` if no student of this course has the requested ID or if the
course does not exist.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "courseId": {
      "type": "string",
      "description": "Identifier of the course.\nThis identifier can be either the Classroom-assigned identifier or an\nalias."
    },
    "userId": {
      "type": "string",
      "description": "Identifier of the student to delete. The identifier can be one of the\nfollowing:\n\n* the numeric identifier for the user\n* the email address of the user\n* the string literal `\"me\"`, indicating the requesting user"
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "courseId",
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Empty"
}
```
## Operation: courses.students.get
Returns a student of a course.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to view
students of this course or for access errors.
* `NOT_FOUND` if no student of this course has the requested ID or if the
course does not exist.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "courseId": {
      "type": "string",
      "description": "Identifier of the course.\nThis identifier can be either the Classroom-assigned identifier or an\nalias."
    },
    "userId": {
      "type": "string",
      "description": "Identifier of the student to return. The identifier can be one of the\nfollowing:\n\n* the numeric identifier for the user\n* the email address of the user\n* the string literal `\"me\"`, indicating the requesting user"
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "courseId",
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Student"
}
```
## Operation: courses.teachers.list
Returns a list of teachers of this course that the requester
is permitted to view.

This method returns the following error codes:

* `NOT_FOUND` if the course does not exist.
* `PERMISSION_DENIED` for access errors.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "courseId": {
      "type": "string",
      "description": "Identifier of the course.\nThis identifier can be either the Classroom-assigned identifier or an\nalias."
    },
    "pageSize": {
      "type": "integer",
      "description": "Maximum number of items to return. Zero means no maximum.\n\nThe server may return fewer than the specified number of results."
    },
    "pageToken": {
      "type": "string",
      "description": "nextPageToken\nvalue returned from a previous\nlist call, indicating that\nthe subsequent page of results should be returned.\n\nThe list request must be\notherwise identical to the one that resulted in this token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "courseId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListTeachersResponse"
}
```
## Operation: courses.teachers.create
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "courseId": {
      "type": "string",
      "description": "Identifier of the course.\nThis identifier can be either the Classroom-assigned identifier or an\nalias."
    },
    "body": {
      "$ref": "#/definitions/Teacher"
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "courseId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Teacher"
}
```
## Operation: courses.teachers.delete
Deletes a teacher of a course.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to delete
teachers of this course or for access errors.
* `NOT_FOUND` if no teacher of this course has the requested ID or if the
course does not exist.
* `FAILED_PRECONDITION` if the requested ID belongs to the primary teacher
of this course.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "courseId": {
      "type": "string",
      "description": "Identifier of the course.\nThis identifier can be either the Classroom-assigned identifier or an\nalias."
    },
    "userId": {
      "type": "string",
      "description": "Identifier of the teacher to delete. The identifier can be one of the\nfollowing:\n\n* the numeric identifier for the user\n* the email address of the user\n* the string literal `\"me\"`, indicating the requesting user"
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "courseId",
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Empty"
}
```
## Operation: courses.teachers.get
Returns a teacher of a course.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to view
teachers of this course or for access errors.
* `NOT_FOUND` if no teacher of this course has the requested ID or if the
course does not exist.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "courseId": {
      "type": "string",
      "description": "Identifier of the course.\nThis identifier can be either the Classroom-assigned identifier or an\nalias."
    },
    "userId": {
      "type": "string",
      "description": "Identifier of the teacher to return. The identifier can be one of the\nfollowing:\n\n* the numeric identifier for the user\n* the email address of the user\n* the string literal `\"me\"`, indicating the requesting user"
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "courseId",
    "userId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Teacher"
}
```
## Operation: courses.delete
Deletes a course.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to delete the
requested course or for access errors.
* `NOT_FOUND` if no course exists with the requested ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Identifier of the course to delete.\nThis identifier can be either the Classroom-assigned identifier or an\nalias."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Empty"
}
```
## Operation: courses.get
Returns a course.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access the
requested course or for access errors.
* `NOT_FOUND` if no course exists with the requested ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Identifier of the course to return.\nThis identifier can be either the Classroom-assigned identifier or an\nalias."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Course"
}
```
## Operation: courses.patch
Updates one or more fields in a course.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to modify the
requested course or for access errors.
* `NOT_FOUND` if no course exists with the requested ID.
* `INVALID_ARGUMENT` if invalid fields are specified in the update mask or
if no update mask is supplied.
* `FAILED_PRECONDITION` for the following request errors:
    * CourseNotModifiable

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Identifier of the course to update.\nThis identifier can be either the Classroom-assigned identifier or an\nalias."
    },
    "updateMask": {
      "type": "string",
      "description": "Mask that identifies which fields on the course to update.\nThis field is required to do an update. The update will fail if invalid\nfields are specified. The following fields are valid:\n\n* `name`\n* `section`\n* `descriptionHeading`\n* `description`\n* `room`\n* `courseState`\n\nWhen set in a query parameter, this field should be specified as\n\n`updateMask=<field1>,<field2>,...`"
    },
    "body": {
      "$ref": "#/definitions/Course"
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Course"
}
```
## Operation: courses.update
Updates a course.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to modify the
requested course or for access errors.
* `NOT_FOUND` if no course exists with the requested ID.
* `FAILED_PRECONDITION` for the following request errors:
    * CourseNotModifiable

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Identifier of the course to update.\nThis identifier can be either the Classroom-assigned identifier or an\nalias."
    },
    "body": {
      "$ref": "#/definitions/Course"
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Course"
}
```
## Operation: invitations.list
Returns a list of invitations that the requesting user is permitted to
view, restricted to those that match the list request.

*Note:* At least one of `user_id` or `course_id` must be supplied. Both
fields can be supplied.

This method returns the following error codes:

* `PERMISSION_DENIED` for access errors.

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "courseId": {
      "type": "string",
      "description": "Restricts returned invitations to those for a course with the specified\nidentifier."
    },
    "pageSize": {
      "type": "integer",
      "description": "Maximum number of items to return. Zero means no maximum.\n\nThe server may return fewer than the specified number of results."
    },
    "userId": {
      "type": "string",
      "description": "Restricts returned invitations to those for a specific user. The identifier\ncan be one of the following:\n\n* the numeric identifier for the user\n* the email address of the user\n* the string literal `\"me\"`, indicating the requesting user"
    },
    "pageToken": {
      "type": "string",
      "description": "nextPageToken\nvalue returned from a previous\nlist call, indicating\nthat the subsequent page of results should be returned.\n\nThe list request must be\notherwise identical to the one that resulted in this token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListInvitationsResponse"
}
```
## Operation: invitations.create
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

### Input Schema
```json
{
  "type": [
    "object",
    "null"
  ],
  "properties": {
    "body": {
      "$ref": "#/definitions/Invitation"
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Invitation"
}
```
## Operation: invitations.delete
Deletes an invitation.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to delete the
requested invitation or for access errors.
* `NOT_FOUND` if no invitation exists with the requested ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Identifier of the invitation to delete."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Empty"
}
```
## Operation: invitations.get
Returns an invitation.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to view the
requested invitation or for access errors.
* `NOT_FOUND` if no invitation exists with the requested ID.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Identifier of the invitation to return."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Invitation"
}
```
## Operation: invitations.accept
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "description": "Identifier of the invitation to accept."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "id"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Empty"
}
```
## Operation: userProfiles.guardianInvitations.list
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "studentId": {
      "type": "string",
      "description": "The ID of the student whose guardian invitations are to be returned.\nThe identifier can be one of the following:\n\n* the numeric identifier for the user\n* the email address of the user\n* the string literal `\"me\"`, indicating the requesting user\n* the string literal `\"-\"`, indicating that results should be returned for\n  all students that the requesting user is permitted to view guardian\n  invitations."
    },
    "pageSize": {
      "type": "integer",
      "description": "Maximum number of items to return. Zero or unspecified indicates that the\nserver may assign a maximum.\n\nThe server may return fewer than the specified number of results."
    },
    "invitedEmailAddress": {
      "type": "string",
      "description": "If specified, only results with the specified `invited_email_address`\nwill be returned."
    },
    "states": {
      "type": "array",
      "description": "If specified, only results with the specified `state` values will be\nreturned. Otherwise, results with a `state` of `PENDING` will be returned."
    },
    "pageToken": {
      "type": "string",
      "description": "nextPageToken\nvalue returned from a previous\nlist call,\nindicating that the subsequent page of results should be returned.\n\nThe list request\nmust be otherwise identical to the one that resulted in this token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "studentId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListGuardianInvitationsResponse"
}
```
## Operation: userProfiles.guardianInvitations.create
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "studentId": {
      "type": "string",
      "description": "ID of the student (in standard format)"
    },
    "body": {
      "$ref": "#/definitions/GuardianInvitation"
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "studentId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GuardianInvitation"
}
```
## Operation: userProfiles.guardianInvitations.get
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "studentId": {
      "type": "string",
      "description": "The ID of the student whose guardian invitation is being requested."
    },
    "invitationId": {
      "type": "string",
      "description": "The `id` field of the `GuardianInvitation` being requested."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "studentId",
    "invitationId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GuardianInvitation"
}
```
## Operation: userProfiles.guardianInvitations.patch
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "studentId": {
      "type": "string",
      "description": "The ID of the student whose guardian invitation is to be modified."
    },
    "invitationId": {
      "type": "string",
      "description": "The `id` field of the `GuardianInvitation` to be modified."
    },
    "updateMask": {
      "type": "string",
      "description": "Mask that identifies which fields on the course to update.\nThis field is required to do an update. The update will fail if invalid\nfields are specified. The following fields are valid:\n\n* `state`\n\nWhen set in a query parameter, this field should be specified as\n\n`updateMask=<field1>,<field2>,...`"
    },
    "body": {
      "$ref": "#/definitions/GuardianInvitation"
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "studentId",
    "invitationId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/GuardianInvitation"
}
```
## Operation: userProfiles.guardians.list
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "studentId": {
      "type": "string",
      "description": "Filter results by the student who the guardian is linked to.\nThe identifier can be one of the following:\n\n* the numeric identifier for the user\n* the email address of the user\n* the string literal `\"me\"`, indicating the requesting user\n* the string literal `\"-\"`, indicating that results should be returned for\n  all students that the requesting user has access to view."
    },
    "pageSize": {
      "type": "integer",
      "description": "Maximum number of items to return. Zero or unspecified indicates that the\nserver may assign a maximum.\n\nThe server may return fewer than the specified number of results."
    },
    "invitedEmailAddress": {
      "type": "string",
      "description": "Filter results by the email address that the original invitation was sent\nto, resulting in this guardian link.\nThis filter can only be used by domain administrators."
    },
    "pageToken": {
      "type": "string",
      "description": "nextPageToken\nvalue returned from a previous\nlist call,\nindicating that the subsequent page of results should be returned.\n\nThe list request\nmust be otherwise identical to the one that resulted in this token."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "studentId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/ListGuardiansResponse"
}
```
## Operation: userProfiles.guardians.delete
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "studentId": {
      "type": "string",
      "description": "The student whose guardian is to be deleted. One of the following:\n\n* the numeric identifier for the user\n* the email address of the user\n* the string literal `\"me\"`, indicating the requesting user"
    },
    "guardianId": {
      "type": "string",
      "description": "The `id` field from a `Guardian`."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "studentId",
    "guardianId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Empty"
}
```
## Operation: userProfiles.guardians.get
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

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "studentId": {
      "type": "string",
      "description": "The student whose guardian is being requested. One of the following:\n\n* the numeric identifier for the user\n* the email address of the user\n* the string literal `\"me\"`, indicating the requesting user"
    },
    "guardianId": {
      "type": "string",
      "description": "The `id` field from a `Guardian`."
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
    }
  },
  "additionalProperties": false,
  "required": [
    "studentId",
    "guardianId"
  ]
}
```
### Output Schema
```json
{
  "$ref": "#/definitions/Guardian"
}
```
## Operation: userProfiles.get
Returns a user profile.

This method returns the following error codes:

* `PERMISSION_DENIED` if the requesting user is not permitted to access
this user profile, if no profile exists with the requested ID, or for
access errors.

### Input Schema
```json
{
  "type": "object",
  "properties": {
    "userId": {
      "type": "string",
      "description": "Identifier of the profile to return. The identifier can be one of the\nfollowing:\n\n* the numeric identifier for the user\n* the email address of the user\n* the string literal `\"me\"`, indicating the requesting user"
    },
    "access_token": {
      "type": "string",
      "description": "OAuth access token."
    },
    "prettyPrint": {
      "type": "boolean",
      "description": "Returns response with indentations and line breaks."
    },
    "key": {
      "type": "string",
      "description": "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token."
    },
    "quotaUser": {
      "type": "string",
      "description": "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters."
    },
    "pp": {
      "type": "boolean",
      "description": "Pretty-print response."
    },
    "fields": {
      "type": "string",
      "description": "Selector specifying which fields to include in a partial response."
    },
    "alt": {
      "type": "string",
      "description": "Data format for response.",
      "enum": [
        "json",
        "media",
        "proto"
      ]
    },
    "$.xgafv": {
      "type": "string",
      "description": "V1 error format.",
      "enum": [
        "1",
        "2"
      ]
    },
    "callback": {
      "type": "string",
      "description": "JSONP"
    },
    "oauth_token": {
      "type": "string",
      "description": "OAuth 2.0 token for the current user."
    },
    "uploadType": {
      "type": "string",
      "description": "Legacy upload protocol for media (e.g. \"media\", \"multipart\")."
    },
    "bearer_token": {
      "type": "string",
      "description": "OAuth bearer token."
    },
    "upload_protocol": {
      "type": "string",
      "description": "Upload protocol for media (e.g. \"raw\", \"multipart\")."
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
  "$ref": "#/definitions/UserProfile"
}
```
