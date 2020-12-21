# @datafire/iqualify

Client library for iQualify Management API

## Installation and Usage
```bash
npm install --save @datafire/iqualify
```
```js
let iqualify = require('@datafire/iqualify').create({
  Authorization: ""
});

.then(data => {
  console.log(data);
});
```

## Description

The iQualify API offers management responses for building
learning experiences using your iQualify instance data.

Once you’ve registered with iQualify, you can request an API access token by
navigating to the API access section of the "Account Settings" area.

Find out how to [Request your API access token](https://www.iqualify.com/help/connecting-iqualify-to-other-systems/api/how-to-access-and-manage-your-api-token)
on our Knowledge base.

All endpoints are only accessible via https and are located at
api.iqualify.com. For instance: you can find your current offerings by
accessing the following URL:
    https://api.iqualify.com/v1/offerings/current



## Actions

### .get
Responds with all supported endpoints URLs for v2 version.


```js
iqualify..get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### course_mappings.get
Returns all course mappings for course offerings.


```js
iqualify.course_mappings.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### course_mappings.externalcourse.externalCourseId.get
Responds with course mapping details by externalCourseId.


```js
iqualify.course_mappings.externalcourse.externalCourseId.get({
  "externalCourseId": ""
}, context)
```

#### Input
* input `object`
  * externalCourseId **required** `string`: external course's id

#### Output
* output `array`
  * items `string`

### course_mappings.offeringId.get
Responds with course mapping details by offeringId.


```js
iqualify.course_mappings.offeringId.get({
  "offeringId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id

#### Output
* output `array`
  * items `string`

### course_mappings.offeringId.externalCourseId.delete
Removes the course mapping between the offering and the externalCourseId.


```js
iqualify.course_mappings.offeringId.externalCourseId.delete({
  "offeringId": "",
  "externalCourseId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * externalCourseId **required** `string`: external course's id

#### Output
* output `array`
  * items `string`

### course_mappings.offeringId.externalCourseId.put
Creates a mapping between the offering and the externalCourseId.


```js
iqualify.course_mappings.offeringId.externalCourseId.put({
  "offeringId": "",
  "externalCourseId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * externalCourseId **required** `string`: external course's id

#### Output
* output `array`
  * items `string`

### courses.get
Responds with all courses (draft and published.)


```js
iqualify.courses.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [CourseResponse](#courseresponse)

### courses.contentId.get
Responds with a course matching the contentId.


```js
iqualify.courses.contentId.get({
  "contentId": ""
}, context)
```

#### Input
* input `object`
  * contentId **required** `string`: The content Id

#### Output
* output [CourseMetaResponse](#coursemetaresponse)

### courses.contentId.activations.get
Responds with all activations for the contentId provided.


```js
iqualify.courses.contentId.activations.get({
  "contentId": ""
}, context)
```

#### Input
* input `object`
  * contentId **required** `string`: The content Id

#### Output
* output [ActivationResponse](#activationresponse)

### courses.contentId.metadata.category.put
Add or update course category in the metadata of a course.


```js
iqualify.courses.contentId.metadata.category.put({
  "contentId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * contentId **required** `string`: The content Id
  * body **required** `object`
    * category `string`

#### Output
* output [CourseMetaResponse](#coursemetaresponse)

### courses.contentId.metadata.level.put
Add or update the course level in the metadata of a course.


```js
iqualify.courses.contentId.metadata.level.put({
  "contentId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * contentId **required** `string`: The content Id
  * body **required** `object`
    * level `string`

#### Output
* output [CourseMetaResponse](#coursemetaresponse)

### courses.contentId.metadata.tags.put
Add or update course tags in the metadata of a course.


```js
iqualify.courses.contentId.metadata.tags.put({
  "contentId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * contentId **required** `string`: The content Id
  * body **required** `object`
    * tags `array`
      * items `string`

#### Output
* output [CourseMetaResponse](#coursemetaresponse)

### courses.contentId.metadata.topic.put
Add or update the course topic in the metadata of a course.


```js
iqualify.courses.contentId.metadata.topic.put({
  "contentId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * contentId **required** `string`: The content Id
  * body **required** `object`
    * topic `string`

#### Output
* output [CourseMetaResponse](#coursemetaresponse)

### courses.contentId.permissions.get
Responds with users who have access to a specific course by contentId.


```js
iqualify.courses.contentId.permissions.get({
  "contentId": ""
}, context)
```

#### Input
* input `object`
  * contentId **required** `string`: The content Id

#### Output
* output [UserPermission](#userpermission)

### courses.rootContentId.permissions.userEmail.post
Provide an array of users with access to a specific course.


```js
iqualify.courses.rootContentId.permissions.userEmail.post({
  "rootContentId": "",
  "userEmail": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * rootContentId **required** `string`: The content Id
  * userEmail **required** `string`: The user email
  * body **required** `object`
    * isBuilder `boolean`
    * isReviewer `boolean`

#### Output
* output `object`
  * contentId `string`

### offerings.get
Responds with all offerings for your organisation.


```js
iqualify.offerings.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [OfferingMetadataResponse](#offeringmetadataresponse)

### offerings.post
Creates a new offering.


```js
iqualify.offerings.post({
  "body": {
    "start": "",
    "end": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [OfferingRequired](#offeringrequired)

#### Output
* output [OfferingMetadataResponse](#offeringmetadataresponse)

### offerings.current.get
Responds with active offerings for your organisation.


```js
iqualify.offerings.current.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [OfferingMetadataResponse](#offeringmetadataresponse)

### offerings.future.get
Responds with scheduled offerings for your organisation. Scheduled offerings have a start date after today's date (inclusive).


```js
iqualify.offerings.future.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [OfferingMetadataResponse](#offeringmetadataresponse)

### offerings.info.textPattern.get
Find offerings where info field matches the specified text pattern.


```js
iqualify.offerings.info.textPattern.get({
  "textPattern": ""
}, context)
```

#### Input
* input `object`
  * textPattern **required** `string`: Text pattern to search for (minimum of 3 characters length).

#### Output
* output `array`
  * items [PortfolioActivations](#portfolioactivations)

### offerings.past.get
Responds with past offerings for your organisation.


```js
iqualify.offerings.past.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [OfferingMetadataResponse](#offeringmetadataresponse)

### offerings.summary.get
Responds with a summary of all offerings for your organisation.


```js
iqualify.offerings.summary.get({}, context)
```

#### Input
* input `object`
  * $top `string`: Returns only the first n results.
  * $orderby `string`: Sorts the results.
  * $filter `string`: Filters the results, based on a Boolean condition.

#### Output
* output `array`
  * items [PortfolioActivations](#portfolioactivations)

### offerings.offeringId.get
Responds with an offering matching the offeringId.


```js
iqualify.offerings.offeringId.get({
  "offeringId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id

#### Output
* output [OfferingMetadataResponse](#offeringmetadataresponse)

### offerings.offeringId.patch
Updates the offering.


```js
iqualify.offerings.offeringId.patch({
  "offeringId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * body **required** [Offering](#offering)

#### Output
* output [OfferingMetadataResponse](#offeringmetadataresponse)

### offerings.offeringId.activities.openresponse.get
Responds with the activities in a specific offering.


```js
iqualify.offerings.offeringId.activities.openresponse.get({
  "offeringId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id

#### Output
* output `array`
  * items [OfferingActivitiesResponse](#offeringactivitiesresponse)

### offerings.offeringId.analytics.activities.responses.get
Responds with all learner activity attempts for open response activities in an offering matching the offeringId.


```js
iqualify.offerings.offeringId.analytics.activities.responses.get({
  "offeringId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id

#### Output
* output `array`
  * items [ActivityAttemptOpenResponse](#activityattemptopenresponse)

### offerings.offeringId.analytics.channels.channelId.comments.get
Responds with a list of comments made in any posts in a specified channel, within an offering.


```js
iqualify.offerings.offeringId.analytics.channels.channelId.comments.get({
  "offeringId": "",
  "channelId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * channelId **required** `string`: channel's id

#### Output
* output `array`
  * items [Comment](#comment)

### offerings.offeringId.analytics.channels.channelId.posts.get
Responds with a list of posts made in a specified channel, within an offering.


```js
iqualify.offerings.offeringId.analytics.channels.channelId.posts.get({
  "offeringId": "",
  "channelId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * channelId **required** `string`: channel's id

#### Output
* output `array`
  * items [httpPost](#httppost)

### offerings.offeringId.analytics.channels.channelId.replies.get
Responds with a list of replies to comments in any posts in a specified channel, within an offering.


```js
iqualify.offerings.offeringId.analytics.channels.channelId.replies.get({
  "offeringId": "",
  "channelId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * channelId **required** `string`: channel's id

#### Output
* output `array`
  * items [Comment](#comment)

### offerings.offeringId.analytics.learners_progress.get
Responds with all learner progress in the offering.


```js
iqualify.offerings.offeringId.analytics.learners_progress.get({
  "offeringId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id

#### Output
* output `array`
  * items [LearnerProgressResponse](#learnerprogressresponse)

### offerings.offeringId.analytics.marks.assignments.get
Responds with all learner assessment marks in an offering matching the offeringId.


```js
iqualify.offerings.offeringId.analytics.marks.assignments.get({
  "offeringId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id

#### Output
* output `array`
  * items [AssignmentMarkResponse](#assignmentmarkresponse)

### offerings.offeringId.analytics.marks.quizzes.get
Responds with all learner quiz marks in an offering matching the offeringId.


```js
iqualify.offerings.offeringId.analytics.marks.quizzes.get({
  "offeringId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id

#### Output
* output `array`
  * items [QuizMarkResponse](#quizmarkresponse)

### offerings.offeringId.analytics.pulses.get
Responds with the IDs of all pulses that learners have responded to in a specified offering.


```js
iqualify.offerings.offeringId.analytics.pulses.get({
  "offeringId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id

#### Output
* output `array`
  * items `string`

### offerings.offeringId.analytics.pulses.responses.get
Responds with pulse's responses in an offering matching the offeringId.


```js
iqualify.offerings.offeringId.analytics.pulses.responses.get({
  "offeringId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * pulseType `string` (values: submit_text, MCQ, spatial_triangular, spatial_planar, spatial_linear): Filter pulse responses by type.

#### Output
* output `array`
  * items [PulseResponse](#pulseresponse)

### offerings.offeringId.analytics.pulses.pulseId.responses.get
Responds with pulse's responses, matching the pulseId, in an offering matching the offeringId.


```js
iqualify.offerings.offeringId.analytics.pulses.pulseId.responses.get({
  "offeringId": "",
  "pulseId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * pulseId **required** `string`: pulse's base id

#### Output
* output `array`
  * items [PulseResponse](#pulseresponse)

### offerings.offeringId.analytics.social_notes.get
Responds with all shared social notes in a specified offering.


```js
iqualify.offerings.offeringId.analytics.social_notes.get({
  "offeringId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id

#### Output
* output `array`
  * items [SocialNotesResponse](#socialnotesresponse)

### offerings.offeringId.analytics.submissions.assignments.get
Responds with all learner assessment submissions and marks, if any, in an offering matching the offeringId.


```js
iqualify.offerings.offeringId.analytics.submissions.assignments.get({
  "offeringId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id

#### Output
* output `array`
  * items [AssignmentMarkResponse](#assignmentmarkresponse)

### offerings.offeringId.analytics.submissions.open_response.assessmentId.get
Responds with all learner assessment submissions and marks, if any, in a specified open response assessment.


```js
iqualify.offerings.offeringId.analytics.submissions.open_response.assessmentId.get({
  "offeringId": "",
  "assessmentId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * assessmentId **required** `string`: assessment's id

#### Output
* output `array`
  * items [SubmissionMarkResponse](#submissionmarkresponse)

### offerings.offeringId.analytics.unit_reactions.get
Responds with user reactions to units in a specified offering.


```js
iqualify.offerings.offeringId.analytics.unit_reactions.get({
  "offeringId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id

#### Output
* output `array`
  * items [UnitReactionsAnalyticsResponse](#unitreactionsanalyticsresponse)

### offerings.offeringId.assessments.get
Responds with all assessments in an offering matching the offeringId.


```js
iqualify.offerings.offeringId.assessments.get({
  "offeringId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id

#### Output
* output `array`
  * items [AssessmentResponse](#assessmentresponse)

### offerings.offeringId.assessments.assessmentId.patch
Updates the assessment details for a specified assessment in an offering.


```js
iqualify.offerings.offeringId.assessments.assessmentId.patch({
  "offeringId": "",
  "assessmentId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * assessmentId **required** `string`: assessment's id
  * body **required** [Assessment](#assessment)

#### Output
* output [AssessmentResponse](#assessmentresponse)

### offerings.offeringId.assessments.assessmentId.documents.documentId.delete
Removes the assessment document file for a specified assessment in an offering.


```js
iqualify.offerings.offeringId.assessments.assessmentId.documents.documentId.delete({
  "offeringId": "",
  "assessmentId": "",
  "documentId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * assessmentId **required** `string`: assessment's id
  * documentId **required** `string`: documents's id

#### Output
*Output schema unknown*

### offerings.offeringId.assessments.assessmentId.userEmail.patch
Updates the due dates for a learner's quiz attempt specified by the assessmentId.


```js
iqualify.offerings.offeringId.assessments.assessmentId.userEmail.patch({
  "offeringId": "",
  "assessmentId": "",
  "userEmail": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * assessmentId **required** `string`: assessment's id
  * userEmail **required** `string`: user's email
  * body **required** `object`
    * dueDate `string`

#### Output
*Output schema unknown*

### offerings.offeringId.badges.get
Responds with the badge for an offering matching the offeringId.


```js
iqualify.offerings.offeringId.badges.get({
  "offeringId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id

#### Output
* output [Badge](#badge)

### offerings.offeringId.channels.get
Responds with a list of channels in an offering.


```js
iqualify.offerings.offeringId.channels.get({
  "offeringId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id

#### Output
* output `array`
  * items [ChannelResponse](#channelresponse)

### offerings.offeringId.channels.post
Adds new channel to the specified offering.


```js
iqualify.offerings.offeringId.channels.post({
  "offeringId": "",
  "body": {
    "title": ""
  }
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * body **required** [ChannelRequired](#channelrequired)

#### Output
* output [ChannelResponse](#channelresponse)

### offerings.offeringId.channels.channelId.patch
Updates a channel in an offering.


```js
iqualify.offerings.offeringId.channels.channelId.patch({
  "offeringId": "",
  "channelId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * channelId **required** `string`: channel's id
  * body **required** [Channel](#channel)

#### Output
* output [ChannelResponse](#channelresponse)

### offerings.offeringId.channels.channelId.learners.delete
Removes a learner from the specified group channel.


```js
iqualify.offerings.offeringId.channels.channelId.learners.delete({
  "offeringId": "",
  "channelId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * channelId **required** `string`: channel's id
  * body **required** `object`
    * email `string`

#### Output
*Output schema unknown*

### offerings.offeringId.channels.channelId.learners.get
Finds all learners in a specified group channel.


```js
iqualify.offerings.offeringId.channels.channelId.learners.get({
  "offeringId": "",
  "channelId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * channelId **required** `string`: channel's id

#### Output
* output [ChannelResponse](#channelresponse)

### offerings.offeringId.channels.channelId.learners.post
Adds a learner to a specified group channel.


```js
iqualify.offerings.offeringId.channels.channelId.learners.post({
  "offeringId": "",
  "channelId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * channelId **required** `string`: channel's id
  * body **required** `object`
    * email `string`

#### Output
*Output schema unknown*

### offerings.offeringId.groups.get
Responds with a list of assessment groups in an offering.


```js
iqualify.offerings.offeringId.groups.get({
  "offeringId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id

#### Output
* output `array`
  * items [AssessmentGroupResponse](#assessmentgroupresponse)

### offerings.offeringId.groups.post
Creates a new assessment group in an offering.


```js
iqualify.offerings.offeringId.groups.post({
  "offeringId": "",
  "body": {
    "title": ""
  }
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * body **required** [AssessmentGroupRequired](#assessmentgrouprequired)

#### Output
* output [AssessmentGroupResponse](#assessmentgroupresponse)

### offerings.offeringId.groups.groupId.learners.get
Responds with a list of learners in a specified assessment group.


```js
iqualify.offerings.offeringId.groups.groupId.learners.get({
  "offeringId": "",
  "groupId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * groupId **required** `string`: Assessment group id

#### Output
* output `array`
  * items [UserResponse](#userresponse)

### offerings.offeringId.groups.groupId.learners.post
Adds a learner into the specified assessment group.


```js
iqualify.offerings.offeringId.groups.groupId.learners.post({
  "offeringId": "",
  "groupId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * groupId **required** `string`: Assessment group id
  * body **required** `object`
    * email `string`

#### Output
* output [UserResponse](#userresponse)

### offerings.offeringId.groups.groupId.learners.userEmail.delete
Removes a learner from the specified assessment group.


```js
iqualify.offerings.offeringId.groups.groupId.learners.userEmail.delete({
  "offeringId": "",
  "groupId": "",
  "userEmail": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * groupId **required** `string`: Assessment group id
  * userEmail **required** `string`: user's email

#### Output
*Output schema unknown*

### offerings.offeringId.learners.pending_submission.get
Responds with learners who have one or more assessments due x days before the due date, with each assessment that is due, where x = the number of days specified in the request. The default is 3 days.


```js
iqualify.offerings.offeringId.learners.pending_submission.get({
  "offeringId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * days `string`: days to assessment due date. Default is 3 days

#### Output
* output `array`
  * items [AssessmentPendingSubmission](#assessmentpendingsubmission)

### offerings.offeringId.metadata.category.put
Updates the offering category metadata.


```js
iqualify.offerings.offeringId.metadata.category.put({
  "offeringId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * body **required** `object`
    * category `string`

#### Output
* output [OfferingMetadataResponse](#offeringmetadataresponse)

### offerings.offeringId.metadata.level.put
Updates the offering level metadata.


```js
iqualify.offerings.offeringId.metadata.level.put({
  "offeringId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * body **required** `object`
    * level `string`

#### Output
* output [OfferingMetadataResponse](#offeringmetadataresponse)

### offerings.offeringId.metadata.tags.put
Updates the offering tags metadata.


```js
iqualify.offerings.offeringId.metadata.tags.put({
  "offeringId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * body **required** `object`
    * tags `array`
      * items `string`

#### Output
* output [OfferingMetadataResponse](#offeringmetadataresponse)

### offerings.offeringId.metadata.topic.put
Updates the offering topic metadata.


```js
iqualify.offerings.offeringId.metadata.topic.put({
  "offeringId": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * body **required** `object`
    * topic `string`

#### Output
* output [OfferingMetadataResponse](#offeringmetadataresponse)

### offerings.offeringId.users.get
Responds with a list of users in the offering (facilitators, learners and markers.).


```js
iqualify.offerings.offeringId.users.get({
  "offeringId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * facilitators `string` (values: true, false): If true, facilitators are included in the results.
  * learners `string` (values: true, false): If true, learners are included in the results.
  * markers `string` (values: true, false): If true, markers are included in the results.

#### Output
* output `array`
  * items [OfferingUserResponse](#offeringuserresponse)

### offerings.offeringId.users.post
Adds one or more users to the offering.


```js
iqualify.offerings.offeringId.users.post({
  "offeringId": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * body **required** `array`
    * items [OfferingUser](#offeringuser)

#### Output
* output `array`
  * items [OfferingUserAddResponse](#offeringuseraddresponse)

### offerings.offeringId.users.markerEmail.marks.delete
Removes an array of learners from coach's marking list.


```js
iqualify.offerings.offeringId.users.markerEmail.marks.delete({
  "offeringId": "",
  "markerEmail": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * markerEmail **required** `string`: marker's email
  * body **required** `array`
    * items `string`

#### Output
* output `array`
  * items [OfferingUser](#offeringuser)

### offerings.offeringId.users.markerEmail.marks.get
Responds with all learners marked by the specified coach.


```js
iqualify.offerings.offeringId.users.markerEmail.marks.get({
  "offeringId": "",
  "markerEmail": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * markerEmail **required** `string`: marker's email

#### Output
* output `array`
  * items [OfferingUser](#offeringuser)

### offerings.offeringId.users.markerEmail.marks.post
Adds an array of learners to be marked by the specified coach.


```js
iqualify.offerings.offeringId.users.markerEmail.marks.post({
  "offeringId": "",
  "markerEmail": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * markerEmail **required** `string`: marker's email
  * body **required** `array`
    * items `string`

#### Output
* output `array`
  * items [OfferingUser](#offeringuser)

### offerings.offeringId.users.userEmail.delete
Removes a user from the offering.


```js
iqualify.offerings.offeringId.users.userEmail.delete({
  "offeringId": "",
  "userEmail": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * userEmail **required** `string`: user's email

#### Output
*Output schema unknown*

### offerings.offeringId.users.userEmail.assessments.assessmentId.delete
Resets the user's submitted assessment to a draft state.


```js
iqualify.offerings.offeringId.users.userEmail.assessments.assessmentId.delete({
  "offeringId": "",
  "userEmail": "",
  "assessmentId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * userEmail **required** `string`: user's email
  * assessmentId **required** `string`: assessment's id

#### Output
*Output schema unknown*

### offerings.offeringId.users.userEmail.badges.award.post
Awards a badge to a user in the offering.


```js
iqualify.offerings.offeringId.users.userEmail.badges.award.post({
  "offeringId": "",
  "userEmail": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * userEmail **required** `string`: user's email

#### Output
* output [AwardedResponse](#awardedresponse)

### offerings.offeringId.users.userEmail.submissions.open_response.get
Responds with open response assessment submissions by a learner in an offering.


```js
iqualify.offerings.offeringId.users.userEmail.submissions.open_response.get({
  "offeringId": "",
  "userEmail": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * userEmail **required** `string`: user's email

#### Output
* output `array`
  * items [Assignments](#assignments)

### org.get
Returns the current organisation info.


```js
iqualify.org.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [OrgResponse](#orgresponse)

### users.post
Creates a new user.


```js
iqualify.users.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [User](#user)

#### Output
* output [UserResponse](#userresponse)

### users.all.progress.get
Responds with all learners' progress in all offerings.


```js
iqualify.users.all.progress.get({}, context)
```

#### Input
* input `object`
  * $top `string`: Returns only the first n results.
  * $orderby `string`: Sorts the results.
  * $filter `string`: Filters the results, based on a Boolean condition.

#### Output
* output `object`
  * data `object`
    * progress `array`
      * items [LearnerResponse](#learnerresponse)
  * top `integer`

### users.userEmail.get
Responds with a user matching the specified email.


```js
iqualify.users.userEmail.get({
  "userEmail": ""
}, context)
```

#### Input
* input `object`
  * userEmail **required** `string`: user's email

#### Output
* output [UserResponse](#userresponse)

### users.userEmail.patch
Updates the specified user by email.


```js
iqualify.users.userEmail.patch({
  "userEmail": ""
}, context)
```

#### Input
* input `object`
  * userEmail **required** `string`: user's email
  * body [User](#user)

#### Output
* output [UserResponse](#userresponse)

### users.userEmail.badges.get
Responds with all badges that the specified user has been awarded.


```js
iqualify.users.userEmail.badges.get({
  "userEmail": ""
}, context)
```

#### Input
* input `object`
  * userEmail **required** `string`: user's email

#### Output
* output `array`
  * items [UserBadge](#userbadge)

### users.userEmail.invite_email.post
Re-sends an invitation e-mail to the specified user.


```js
iqualify.users.userEmail.invite_email.post({
  "userEmail": ""
}, context)
```

#### Input
* input `object`
  * userEmail **required** `string`: user's email

#### Output
*Output schema unknown*

### users.userEmail.offerings.get
Responds with all offerings that the user in.


```js
iqualify.users.userEmail.offerings.get({
  "userEmail": ""
}, context)
```

#### Input
* input `object`
  * userEmail **required** `string`: user's email

#### Output
* output `array`
  * items [OfferingMetadataResponse](#offeringmetadataresponse)

### users.userEmail.offerings.post
Adds a user to an array of offerings by offeringId.


```js
iqualify.users.userEmail.offerings.post({
  "userEmail": "",
  "body": []
}, context)
```

#### Input
* input `object`
  * userEmail **required** `string`: user's email
  * body **required** `array`
    * items `string`

#### Output
* output `array`
  * items [OfferingMetadataResponse](#offeringmetadataresponse)

### users.userEmail.offerings.offeringId.progress.get
Responds with the learner's progress in a specified offering.


```js
iqualify.users.userEmail.offerings.offeringId.progress.get({
  "userEmail": "",
  "offeringId": ""
}, context)
```

#### Input
* input `object`
  * userEmail **required** `string`: user's email
  * offeringId **required** `string`: offering's id

#### Output
* output `object`
  * completion `string`
  * email `string`
  * firstName `string`
  * id `string`
  * lastName `string`

### users.userEmail.permissions.permissionName.post
Adds additional permissions to the specified user.


```js
iqualify.users.userEmail.permissions.permissionName.post({
  "userEmail": "",
  "permissionName": ""
}, context)
```

#### Input
* input `object`
  * userEmail **required** `string`: user's email
  * permissionName **required** `string` (values: builder, manager): permission name

#### Output
* output [UserResponse](#userresponse)

### users.userEmail.progress.get
Responds with the specified learner's progress in all offerings.


```js
iqualify.users.userEmail.progress.get({
  "userEmail": ""
}, context)
```

#### Input
* input `object`
  * userEmail **required** `string`: user's email

#### Output
* output [LearnerResponse](#learnerresponse)

### users.userEmail.suspend.put
Suspends the specified user's account.


```js
iqualify.users.userEmail.suspend.put({
  "userEmail": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * userEmail **required** `string`: user's email
  * body **required** [SuspendedRequest](#suspendedrequest)

#### Output
*Output schema unknown*

### users.userEmail.transfer.patch
Moves the user's access and progress from one offering to another.


```js
iqualify.users.userEmail.transfer.patch({
  "userEmail": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * userEmail **required** `string`: user's email
  * body **required** [TransferRequest](#transferrequest)

#### Output
*Output schema unknown*



## Definitions

### ActivationResponse
* ActivationResponse `object`
  * info `string`
  * end `string`
  * id `string`
  * learnersCount `string`: number of learners in the offering, excluding facilitators and coaches
  * metadata `object`
    * rootContentId `string`
  * name `string`
  * start `string`

### ActivityAttemptOpenResponse
* ActivityAttemptOpenResponse `object`
  * activityId `string`
  * activityType `string`
  * feedback [ActivityAttemptOpenResponseFeedback](#activityattemptopenresponsefeedback)
  * learnerEmail `string`
  * offeringId `string`
  * responseText `string`
  * uploadedFiles [ActivityAttemptOpenResponseFiles](#activityattemptopenresponsefiles)

### ActivityAttemptOpenResponseFeedback
* ActivityAttemptOpenResponseFeedback `object`
  * facilitatorEmail `string`
  * text `string`

### ActivityAttemptOpenResponseFiles
* ActivityAttemptOpenResponseFiles `object`
  * filename `string`
  * mimetype `string`
  * size `string`
  * url `string`

### Assessment
* Assessment `object`
  * content `string`
  * dueDate `string`
  * markNumber `string`
  * markType `string`
  * openDate `string`

### AssessmentGroupRequired
* AssessmentGroupRequired `object`
  * title **required** `string`

### AssessmentGroupResponse
* AssessmentGroupResponse `object`
  * createdAt `string`
  * id `string`
  * title `string`

### AssessmentPendingSubmission
* AssessmentPendingSubmission `object`
  * content `string`
  * documents `array`
    * items [Document](#document)
  * dueDate `string`
  * durationMinutes `integer`
  * filename `string`
  * hidden `boolean`
  * id `string`
  * markNumber `string`
  * markType `string`
  * maxAttempts `integer`
  * offeringId `string`
  * offeringName `string`
  * openDate `string`
  * pid `string`
  * points `string`
  * themes `array`
    * items [ThemeResponse](#themeresponse)
  * title `string`
  * totalQuestions `integer`
  * totalThemes `integer`
  * type `string`
  * users `array`
    * items [User](#user)

### AssessmentResponse
* AssessmentResponse `object`
  * content `string`
  * documents `array`
    * items [Document](#document)
  * dueDate `string`
  * durationMinutes `integer`
  * filename `string`
  * hidden `boolean`
  * id `string`
  * markNumber `string`
  * markType `string`
  * maxAttempts `integer`
  * openDate `string`
  * pid `string`
  * points `string`
  * themes `array`
    * items [ThemeResponse](#themeresponse)
  * title `string`
  * totalQuestions `integer`
  * totalThemes `integer`
  * type `string`

### AssignmentMarkResponse
* AssignmentMark `object`
  * assessmentId `string`
  * assessmentItemDetails `string`
  * assessmentItemName `string`
  * courseName `string`
  * learnerEmail `string`
  * learnerFirstName `string`
  * learnerLastName `string`
  * learnerPersonId `string`
  * mark `string`
  * markFeedback `string`
  * markedBy `string`
  * markedByEvaluator `boolean`
  * markedByFacilitator `boolean`
  * markedByMarker `boolean`
  * markedDateTime `string`
  * submissionDateTime `string`

### Assignments
* Assignments `object`
  * files `array`
    * items [Document](#document)
  * marks `array`
    * items [Mark](#mark)
  * status `string`
  * submittedAt `string`
  * updatedAt `string`

### AwardedResponse
* AwardedResponse `object`
  * awarded `boolean`
  * badgeId `string`
  * badgeUrl `string`

### Badge
* Badge `object`
  * badgeUrl `string`
  * criterias
    * hasCompletedCourse `boolean`
    * hasPassedMandatoryAssessedQuizzes `boolean`
  * description `string`
  * expirationDate `string`
  * expires `boolean`
  * openBadge
    * criteria `object`
      * narrative `string`
    * description `string`
    * id `string`
    * image `string`
    * issuer `string`
    * name `string`
    * type `string`
  * title `string`

### Channel
* Channel `object`
  * group `object`
    * autoAssign `boolean`
  * groupDiscussion `boolean`
  * isBroadcastOnly `boolean`
  * privateSupport `boolean`
  * title `string`

### ChannelRequired
* ChannelRequired `object`
  * group `object`
    * autoAssign `boolean`
  * groupDiscussion `boolean`
  * isBroadcastOnly `boolean`
  * privateSupport `boolean`
  * title **required** `string`

### ChannelResponse
* ChannelResponse `object`
  * group `object`
    * autoAssign `boolean`
  * groupDiscussion `boolean`
  * id `string`
  * isBroadcastOnly `boolean`
  * learners `array`
    * items `string`
  * privateSupport `boolean`
  * title `string`

### Comment
* Comment `object`
  * content `string`
  * createdAt `string`
  * email `string`
  * id `string`
  * isFacilitatorPost `boolean`
  * moderation [Moderation](#moderation)
  * parentCommentId `string`
  * postId `string`

### CourseMetaResponse
* Course `object`
  * coverImageUrl `string`
  * createdAt `string`
  * id `string`
  * metadata `object`
    * tags `array`
      * items `string`
    * category `string`
    * learning_outcomes `array`
      * items [LearningOutcomes](#learningoutcomes)
    * level `string`
    * rootContentId `string`
    * topic `string`
  * name `string`

### CourseResponse
* Course `object`
  * coverImageUrl `string`
  * createdAt `string`
  * id `string`
  * metadata `object`
    * learning_outcomes `array`
      * items [LearningOutcomes](#learningoutcomes)
  * name `string`

### Criteria
* Criteria `object`
  * hasCompletedCourse `boolean`
  * hasPassedMandatoryAssessedQuizzes `boolean`

### Document
* Document `object`
  * createdAt `string`
  * filename `string`
  * id `string`
  * mimetype `string`
  * size `integer`
  * url `string`

### DocumentResponse
* DocumentResponse `object`
  * id `string`
  * mimetype `string`
  * size `integer`
  * url `string`

### Error
* Error `object`
  * error `object`
    * details `string`
    * name `string`

### Invite
* Invite `object`
  * url `string`: if sendInvite in request is false

### LearnerProgressResponse
* LearnerProgress `object`
  * completion `string`
  * courseId `string`
  * email `string`
  * firstName `string`
  * lastLoggedInAt `string`
  * lastName `string`
  * personId `string`

### LearnerResponse
* LearnerResponse `object`
  * email `string`
  * firstName `string`
  * id `string`
  * lastName `string`
  * offerings `array`
    * items [OfferingProgressRow](#offeringprogressrow)
  * personId `string`

### LearningOutcomes
* LearningOutcomes `object`
  * description `string`
  * id `string`

### Mark
* Mark `object`
  * createdAt `string`
  * feedback `string`
  * id `string`
  * mark `string`
  * markFeedback `array`
    * items [MarkFeedback](#markfeedback)
  * markedBy `string`
  * markerId `string`

### MarkFeedback
* MarkFeedback `object`
  * createdAt `string`
  * feedback `string`
  * feedbackBy `string`
  * id `string`
  * mark `string`
  * markerId `string`

### Moderation
* Moderation `object`
  * isMuted `boolean`
  * moderator [Moderator](#moderator)
  * reason `string`

### Moderator
* Moderator `object`
  * avatarUrl `string`
  * firstName `string`
  * id `string`
  * lastName `string`

### Offering
* Offering `object`
  * badge `object`
    * description `string`
    * expirationDate `string`
    * requiresApproval `boolean`
    * title `string`
  * contentId `string`: The identifier for a specific version of a course
  * description `string`
  * earlyCloseOffDate `string`
  * end `string`
  * hasEarlyCloseOff `boolean`
  * identifier `string`
  * isReadonly `boolean`
  * metadata `object`
    * tags `array`
      * items `string`
    * category `string`
    * level `string`
    * topic `string`
  * name `string`
  * overview `string`
  * rootContentId `string`: Every time a course is republished it is assigned a new contentId. rootContentId is the first original contentId associated with a course.
  * start `string`
  * trailerVideoUrl `string`
  * useRelativeDates `boolean`

### OfferingActivitiesResponse
* OfferingActivitiesResponse `object`
  * activityId `string`
  * time `number`: expected minutes to complete
  * title `string`

### OfferingMetadata
* OfferingMetadata `object`
  * tags `array`
    * items `string`
  * category `string`
  * level `string`
  * rootContentId `string`
  * topic `string`

### OfferingMetadataResponse
* OfferingMetadataResponse `object`
  * contentId `string`
  * coverImageUrl `string`
  * currency `string`
  * description `string`
  * earlyCloseOffDate `string`
  * end `string`
  * enrollmentLimit `number`
  * hasEarlyCloseOff `boolean`
  * id `string`
  * identifier `string`
  * isReadonly `boolean`
  * metadata [OfferingMetadata](#offeringmetadata)
  * name `string`
  * overview `string`: content can contain html
  * price `number`
  * start `string`
  * trailerVideoUrl `string`
  * useRelativeDates `boolean`

### OfferingProgressRow
* OfferingProgressRow `object`
  * completion `string`
  * id `string`

### OfferingRequired
* OfferingRequired `object`
  * badge `object`
    * description `string`
    * expirationDate `string`
    * requiresApproval `boolean`
    * title `string`
  * contentId `string`: The identifier for a specific version of a course
  * createDefaultChannels `boolean`
  * description `string`
  * earlyCloseOffDate `string`
  * end **required** `string`
  * hasEarlyCloseOff `boolean`
  * identifier `string`
  * isReadonly `boolean`
  * metadata `object`
    * tags `array`
      * items `string`
    * category `string`
    * level `string`
    * topic `string`
  * name `string`
  * rootContentId `string`: Every time a course is republished it's assigned a new contentId. rootContentId is the first original contentId associated with a course.
  * start **required** `string`
  * trailerVideoUrl `string`
  * useRelativeDates `boolean`

### OfferingResponse
* OfferingResponse `object`
  * contentId `string`
  * coverImageUrl `string`
  * currency `string`
  * description `string`
  * earlyCloseOffDate `string`
  * end `string`
  * enrollmentLimit `number`
  * hasEarlyCloseOff `boolean`
  * id `string`
  * identifier `string`
  * isReadonly `boolean`
  * name `string`
  * price `number`
  * start `string`
  * trailerVideoUrl `string`

### OfferingUser
* OfferingUser `object`
  * email **required** `string`
  * firstName `string`
  * isFacilitator `boolean`
  * isMarker `boolean`
  * isReadonly `boolean`
  * lastName `string`
  * metadata [UserMetadata](#usermetadata)
  * personId `string`
  * profile [UserProfileRequest](#userprofilerequest)
  * sendInvite `boolean`
  * sendNotificationEmail `boolean`

### OfferingUserAddResponse
* OfferingUserAddResponse `object`
  * email `string`
  * firstName `string`
  * invite [Invite](#invite)
  * isFacilitator `boolean`
  * isMarker `boolean`
  * isReadonly `boolean`
  * lastName `string`
  * metadata [UserMetadata](#usermetadata)
  * personId `string`
  * profile [UserProfileRequest](#userprofilerequest)
  * sendInvite `boolean`
  * sendNotificationEmail `boolean`

### OfferingUserResponse
* OfferingUserResponse `object`
  * avatarUrl `string`
  * email `string`
  * evaluatedBy `array`
    * items `string`
  * evaluates `array`
    * items `string`
  * firstName `string`
  * id `string`
  * isFacilitator `boolean`
  * isMarker `boolean`
  * isReadonly `boolean`
  * lastName `string`
  * markedBy `array`
    * items `string`
  * marks `array`
    * items `string`
  * personId `string`
  * profile [UserProfile](#userprofile)

### OpenBadgeClass
* OpenBadgeClass `object`
  * criteria `object`
    * narrative `string`
  * description `string`
  * id `string`
  * image `string`
  * issuer `string`
  * name `string`
  * type `string`

### OrgRequest
* OrgRequest `object`
  * id `string`
  * name **required** `string`

### OrgResponse
* OrgResponse `object`
  * id `string`
  * name `string`

### PortfolioActivations
* PortfolioActivations `object`
  * info `string`
  * contentId `string`
  * end `string`
  * id `string`
  * learnersCount `number`: number of learners in the offering, excluding facilitators and coaches
  * metadata `object`
    * rootContentId `string`
  * name `string`
  * start `string`

### PortfolioLicenseResponse
* PortfolioLicenseResponse `object`
  * licenses `array`
    * items `string`
  * owner `string`

### PortfolioMetadata
* PortfolioMetadata `object`
  * tags `array`
    * items `string`
  * category `string`
  * level `string`
  * topic `string`

### PulseAnswer
* Answer `object`
  * multiChoiceAnswer `array`
    * items [PulseMCQOption](#pulsemcqoption)
  * spatialAnswer `array`
    * items [PulseSpatialOption](#pulsespatialoption)
  * textAnswer `string`

### PulseMCQOption
* MultiChoiceOption `object`
  * option `string`
  * value `boolean`

### PulseResponse
* Pulse `object`
  * learnerFirstName `string`
  * learnerId `string`
  * learnerLastName `string`
  * pulseBaseId `string`
  * pulseInstanceId `string`
  * pulseQuestion `string`
  * pulseRunDurationMinutes `integer`
  * pulseRunStart `string`
  * pulseType `string`
  * response [PulseAnswer](#pulseanswer)
  * responseTime `string`

### PulseSpatialOption
* SpatialOption `object`
  * option `string`
  * value `number`

### QuizMarkResponse
* QuizMark `object`
  * attempts `integer`
  * lastAttemptAt `string`
  * learnerEmail `string`
  * learnerFullname `string`
  * learnerPersonId `string`
  * mark `string`
  * quizId `string`
  * quizTitle `string`

### RevokedResponse
* RevokedResponse `object`
  * badgeId `string`
  * badgeUrl `string`
  * revocationReason `string`
  * revoked `boolean`

### SocialNotesResponse
* SocialNotesResponse `object`
  * email `string`
  * firstName `string`
  * lastName `string`
  * pageId `string`
  * personId `string`
  * social-note-content `string`
  * social-note-paragraphId `string`
  * userId `string`

### SubmissionMarkResponse
* SubmissionMark `object`
  * assessmentId `string`
  * assessmentItemDetails `string`
  * assessmentItemName `string`
  * courseName `string`
  * files `array`
    * items [Document](#document)
  * html `string`
  * learnerEmail `string`
  * learnerFirstName `string`
  * learnerLastName `string`
  * learnerPersonId `string`
  * marks `array`
    * items [Mark](#mark)
  * status `string`
  * submissionDateTime `string`

### SuspendedRequest
* SuspendedRequest `object`
  * suspended `boolean`

### ThemeResponse
* ThemeResponse `object`
  * filter `string`
  * numberOfQuestions `string`

### TransferRequest
* TransferRequest `object`
  * fromOfferingId `string`
  * sendInvite `boolean`
  * toOfferingId `string`

### UnitReactionsAnalyticsResponse
* UnitReactionsAnalyticsResponse `object`
  * feedback [UnitReactionsFeedback](#unitreactionsfeedback)
  * pageId `boolean`

### UnitReactionsFeedback
* UnitReactionsFeedback `object`
  * thumbs-down `number`
  * thumbs-up `number`

### User
* User `object`
  * email `string`
  * firstName `string`
  * lastName `string`
  * metadata [UserMetadata](#usermetadata)
  * personId `string`
  * profile [UserProfileRequest](#userprofilerequest)
  * sendInvite `boolean`

### UserBadge
* UserBadge `object`
  * awardedAt `string`
  * offeringId `string`
  * badgeUrl `string`
  * criterias
    * hasCompletedCourse `boolean`
    * hasPassedMandatoryAssessedQuizzes `boolean`
  * description `string`
  * expirationDate `string`
  * expires `boolean`
  * openBadge
    * criteria `object`
      * narrative `string`
    * description `string`
    * id `string`
    * image `string`
    * issuer `string`
    * name `string`
    * type `string`
  * title `string`

### UserMetadata
* UserMetadata `object`
  * tags `array`
    * items `string`

### UserPermission
* User `object`
  * email `string`
  * isBuilder `boolean`
  * isReviewer `boolean`
  * name `string`

### UserProfile
* UserProfile `object`
  * displayName `string`
  * mobile `string`

### UserProfileRequest
* UserProfileRequest `object`
  * displayName `string`

### UserResponse
* UserResponse `object`
  * avatarUrl `string`
  * email `string`
  * firstAccessAt `string`
  * firstName `string`
  * id `string`
  * invite [Invite](#invite)
  * lastAccessAt `string`
  * lastName `string`
  * metadata [UserMetadata](#usermetadata)
  * personId `string`
  * profile [UserProfile](#userprofile)

### httpPost
* httpPost `object`
  * attachments `array`
    * items [DocumentResponse](#documentresponse)
  * content `string`
  * createdAt `string`
  * email `string`
  * id `string`
  * isFacilitatorPost `boolean`
  * moderation [Moderation](#moderation)
  * title `string`


