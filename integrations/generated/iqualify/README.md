# @datafire/iqualify

Client library for iQualify

## Installation and Usage
```bash
npm install --save @datafire/iqualify
```
```js
let iqualify = require('@datafire/iqualify').create({
  jwt: ""
});

iqualify.users.all.progress.get({}).then(data => {
  console.log(data);
});
```

## Description

The iQualify API offers management and analytics responses for building
learning experiences using your iQualify instance data.

Once you’ve registered with iQualify, you can request an API access token by
navigating to the API access section of the "Account Settings" area.

Find out how to [Request your API access token](https://intercom.help/iqualify/iqualify-set-up/authentication/requesting-your-api-access-token) on our Knowledge base.

All endpoints are only accessible via https and are located at
api.iqualify.com. For instance: you can find your current offerings by
accessing the following URL:

    https://api.iqualify.com/v1/offerings/current



## Actions

### .get
Responds with all supported endpoints URLs for v1 version.


```js
iqualify..get(null, context)
```

#### Input
*This action has no parameters*

#### Output
*Output schema unknown*

### course_mappings.get
Returns all the course mappings


```js
iqualify.course_mappings.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `object`

### course_mappings.offeringId.get
Finds course mappings by offering id


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
Removes the course mapping between the offering and the external course id


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
Creates a mapping between the offering and the external course id


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
Responds with courses that can be activated (made to an offering).


```js
iqualify.courses.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [CourseResponse](#courseresponse)

### courses.contentId.get
Find course by content id


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

### courses.contentId.metadata.category.put
Update course category


```js
iqualify.courses.contentId.metadata.category.put({
  "contentId": "",
  "category": {}
}, context)
```

#### Input
* input `object`
  * contentId **required** `string`: The content Id
  * category **required** `object`
    * category `string`

#### Output
* output [CourseMetaResponse](#coursemetaresponse)

### courses.contentId.metadata.level.put
Update course level


```js
iqualify.courses.contentId.metadata.level.put({
  "contentId": "",
  "level": {}
}, context)
```

#### Input
* input `object`
  * contentId **required** `string`: The content Id
  * level **required** `object`
    * level `string`

#### Output
* output [CourseMetaResponse](#coursemetaresponse)

### courses.contentId.metadata.tags.put
Update course tags


```js
iqualify.courses.contentId.metadata.tags.put({
  "contentId": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * contentId **required** `string`: The content Id
  * tags **required** `object`
    * tags `array`
      * items `string`

#### Output
* output [CourseMetaResponse](#coursemetaresponse)

### courses.contentId.metadata.topic.put
Update course topic


```js
iqualify.courses.contentId.metadata.topic.put({
  "contentId": "",
  "topic": {}
}, context)
```

#### Input
* input `object`
  * contentId **required** `string`: The content Id
  * topic **required** `object`
    * topic `string`

#### Output
* output [CourseMetaResponse](#coursemetaresponse)

### offerings.get
Responds with all offerings for your organisation.


```js
iqualify.offerings.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [OfferingResponse](#offeringresponse)

### offerings.post
Creates new offering.


```js
iqualify.offerings.post({
  "offering": null
}, context)
```

#### Input
* input `object`
  * offering **required** [OfferingRequired](#offeringrequired)

#### Output
* output [OfferingMetadataResponse](#offeringmetadataresponse)

### offerings.current.get
Responds with current (active) offerings for your organisation. Offering is current when today's date is between (inclusive) it's `start` and `end` date.


```js
iqualify.offerings.current.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [OfferingResponse](#offeringresponse)

### offerings.future.get
Responds with future (inactive) offerings for your organisation. Future offerings have their `start` date after today's date (inclusive).


```js
iqualify.offerings.future.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [OfferingResponse](#offeringresponse)

### offerings.past.get
Responds with past (inactive) offerings for your organisation. Past offerings have their `end` date before today's date (inclusive).


```js
iqualify.offerings.past.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [OfferingResponse](#offeringresponse)

### offerings.offeringId.get
Returns an offering matching the offeringId.


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
  "offering": null
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * offering **required** [Offering](#offering)

#### Output
* output [OfferingMetadataResponse](#offeringmetadataresponse)

### offerings.offeringId.analytics.channels.channelId.comments.get
Responds with a list of all comments in any of the posts for a channel in a offering


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
Responds with a list of posts for a channel in a offering


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
  * items [Post](#post)

### offerings.offeringId.analytics.learners_progress.get
Responds with learners progress.


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
Responds with assignments marks.


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
Responds with quizzes marks.


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
Returns ids of all pulses that learners responded to.


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
Returns pulses' responses matching the offeringId.


```js
iqualify.offerings.offeringId.analytics.pulses.responses.get({
  "offeringId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * pulseType `string` (values: submit_text, MCQ, spatial_triangular, spatial_planar, spatial_linear): Filter pulse responses by type.
  * responseTime `string`: Filter pulse responses by responseTime. Lower then (`lt`), lower then or equal (`lte`), greater then (`gt`) and greater then or equal (`gte`) operators are available. Example of filtering by time range __responseTime=gte\_\_2017-03-14T07:30:00Z&responseTime=lte\_\_2017-03-16T09:30:00Z__

#### Output
* output `array`
  * items [PulseResponse](#pulseresponse)

### offerings.offeringId.analytics.pulses.pulseId.responses.get
Returns pulse's responses matching the offeringId and pulseId.


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

### offerings.offeringId.analytics.submissions.assignments.get
Responds with assignments submissions.


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

### offerings.offeringId.assessments.get
Get all offering's assessments


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
Modifies assessment details


```js
iqualify.offerings.offeringId.assessments.assessmentId.patch({
  "offeringId": "",
  "assessmentId": "",
  "assessment": null
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * assessmentId **required** `string`: assessment's id
  * assessment **required** [Assessment](#assessment)

#### Output
* output [AssessmentResponse](#assessmentresponse)

### offerings.offeringId.assessments.assessmentId.documents.post
Uploads assessment document file


```js
iqualify.offerings.offeringId.assessments.assessmentId.documents.post({
  "offeringId": "",
  "assessmentId": "",
  "file": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * assessmentId **required** `string`: assessment's id
  * file **required** `string`: Assessment document

#### Output
* output [Document](#document)

### offerings.offeringId.assessments.assessmentId.documents.documentId.delete
Removes assessment document file


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

### offerings.offeringId.channels.get
Responds with a list of channels in a offering


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
Adds new channel to the offering


```js
iqualify.offerings.offeringId.channels.post({
  "offeringId": "",
  "channel": null
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * channel **required** [ChannelRequired](#channelrequired)

#### Output
* output [ChannelResponse](#channelresponse)

### offerings.offeringId.channels.channelId.patch
Updates the channel


```js
iqualify.offerings.offeringId.channels.channelId.patch({
  "offeringId": "",
  "channelId": "",
  "channel": null
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * channelId **required** `string`: channel's id
  * channel **required** [Channel](#channel)

#### Output
* output [ChannelResponse](#channelresponse)

### offerings.offeringId.cover_image.put
Replaces offering's cover image with uploaded image


```js
iqualify.offerings.offeringId.cover_image.put({
  "offeringId": "",
  "file": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * file **required** `string`: Cover image, required size is 1280x380px

#### Output
* output [OfferingResponse](#offeringresponse)

### offerings.offeringId.groups.get
Responds with a list of assessment groups in an offering


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
Creates a new assessment group in a offering


```js
iqualify.offerings.offeringId.groups.post({
  "offeringId": "",
  "assessmentGroup": null
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * assessmentGroup **required** [AssessmentGroupRequired](#assessmentgrouprequired)

#### Output
* output [AssessmentGroupResponse](#assessmentgroupresponse)

### offerings.offeringId.groups.groupId.learners.get
Responds with a list of learners for the assessment group


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
Add a learner to an assessment group


```js
iqualify.offerings.offeringId.groups.groupId.learners.post({
  "offeringId": "",
  "groupId": "",
  "user": null
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * groupId **required** `string`: Assessment group id
  * user **required** `object`
    * email `string`

#### Output
* output [UserResponse](#userresponse)

### offerings.offeringId.groups.groupId.learners.userEmail.delete
Remove a learner from an assessment group


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

### offerings.offeringId.metadata.category.put
Updates the offering category metadata.


```js
iqualify.offerings.offeringId.metadata.category.put({
  "offeringId": "",
  "category": {}
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * category **required** `object`
    * category `string`

#### Output
* output [OfferingMetadataResponse](#offeringmetadataresponse)

### offerings.offeringId.metadata.level.put
Updates the offering level metadata.


```js
iqualify.offerings.offeringId.metadata.level.put({
  "offeringId": "",
  "level": {}
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * level **required** `object`
    * level `string`

#### Output
* output [OfferingMetadataResponse](#offeringmetadataresponse)

### offerings.offeringId.metadata.tags.put
Updates the offering tags metadata.


```js
iqualify.offerings.offeringId.metadata.tags.put({
  "offeringId": "",
  "tags": {}
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * tags **required** `object`
    * tags `array`
      * items `string`

#### Output
* output [OfferingMetadataResponse](#offeringmetadataresponse)

### offerings.offeringId.metadata.topic.put
Updates the offering topic metadata.


```js
iqualify.offerings.offeringId.metadata.topic.put({
  "offeringId": "",
  "topic": {}
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * topic **required** `object`
    * topic `string`

#### Output
* output [OfferingMetadataResponse](#offeringmetadataresponse)

### offerings.offeringId.study_plan.put
Replaces offering's study plan with uploaded file


```js
iqualify.offerings.offeringId.study_plan.put({
  "offeringId": "",
  "file": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * file **required** `string`: Study plan

#### Output
* output [OfferingResponse](#offeringresponse)

### offerings.offeringId.users.get
Responds with a list of offering's users (facilitators, learners and markers).


```js
iqualify.offerings.offeringId.users.get({
  "offeringId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * facilitators `boolean`: If true, facilitators are included in the results.
  * learners `boolean`: If true, learners are included in the results.
  * markers `boolean`: If true, markers are included in the results.

#### Output
* output `array`
  * items [OfferingUserResponse](#offeringuserresponse)

### offerings.offeringId.users.post
Adds user to the offering.


```js
iqualify.offerings.offeringId.users.post({
  "offeringId": "",
  "user": null
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * user **required** [OfferingUser](#offeringuser)

#### Output
* output [OfferingUser](#offeringuser)

### offerings.offeringId.users.evaluatorEmail.evaluates.delete
Remove learners from evaluator's list.


```js
iqualify.offerings.offeringId.users.evaluatorEmail.evaluates.delete({
  "offeringId": "",
  "evaluatorEmail": "",
  "learners": []
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * evaluatorEmail **required** `string`: evaluator's id
  * learners **required** `array`
    * items `string`

#### Output
* output `array`
  * items [OfferingUser](#offeringuser)

### offerings.offeringId.users.evaluatorEmail.evaluates.get
Get learners evaluated by the peer evaluator.


```js
iqualify.offerings.offeringId.users.evaluatorEmail.evaluates.get({
  "offeringId": "",
  "evaluatorEmail": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * evaluatorEmail **required** `string`: evaluators's email

#### Output
* output `array`
  * items [OfferingUser](#offeringuser)

### offerings.offeringId.users.evaluatorEmail.evaluates.post
Add learners to be evaluated by the peer evaluator.


```js
iqualify.offerings.offeringId.users.evaluatorEmail.evaluates.post({
  "offeringId": "",
  "evaluatorEmail": "",
  "learners": []
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * evaluatorEmail **required** `string`: evaluator's email
  * learners **required** `array`
    * items `string`

#### Output
* output `array`
  * items [OfferingUser](#offeringuser)

### offerings.offeringId.users.markerEmail.marks.delete
Remove learners from marker's list.


```js
iqualify.offerings.offeringId.users.markerEmail.marks.delete({
  "offeringId": "",
  "markerEmail": "",
  "learners": []
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * markerEmail **required** `string`: marker's email
  * learners **required** `array`
    * items `string`

#### Output
* output `array`
  * items [OfferingUser](#offeringuser)

### offerings.offeringId.users.markerEmail.marks.get
Get learners marked by the marker.


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
Add learners to be marked by the marker.


```js
iqualify.offerings.offeringId.users.markerEmail.marks.post({
  "offeringId": "",
  "markerEmail": "",
  "learners": []
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * markerEmail **required** `string`: marker's email
  * learners **required** `array`
    * items `string`

#### Output
* output `array`
  * items [OfferingUser](#offeringuser)

### offerings.offeringId.users.userEmail.delete
Removes user from the offering.


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

### offerings.offeringId.users.userEmail.invite_email.post
Re-sends the invitation e-mail to the user.


```js
iqualify.offerings.offeringId.users.userEmail.invite_email.post({
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

### offerings.offeringId.users.userEmail.submissions.open_response.get
Gets user's open response assignment submissions.


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

### users.all.progress.get
Returns offering progress for each learner


```js
iqualify.users.all.progress.get({}, context)
```

#### Input
* input `object`
  * $top `integer`: Returns only the first n results.
  * $orderby `string`: Sorts the results.
  * $filter `string`: Filters the results, based on a Boolean condition.

#### Output
* output `object`
  * data `object`
    * offerings `object`
    * progress `array`
      * items [LearnerResponse](#learnerresponse)
  * top `integer`

### users.userEmail.get
Returns a user matching the email.


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
Updates the user


```js
iqualify.users.userEmail.patch({
  "userEmail": "",
  "user": null
}, context)
```

#### Input
* input `object`
  * userEmail **required** `string`: user's email
  * user **required** [User](#user)

#### Output
* output [UserResponse](#userresponse)

### users.userEmail.offerings.get
Responds with all user's offerings.


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
  * items [OfferingResponse](#offeringresponse)



## Definitions

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

### Channel
* Channel `object`
  * isBroadcastOnly `boolean`
  * title `string`

### ChannelRequired
* ChannelRequired `object`
  * isBroadcastOnly `boolean`
  * title **required** `string`

### ChannelResponse
* ChannelResponse `object`
  * id `string`
  * isBroadcastOnly `boolean`
  * title `string`

### Comment
* Comment `object`
  * content `string`
  * createdAt `string`
  * email `string`
  * id `string`
  * isFacilitatorPost `boolean`
  * moderation [Moderation](#moderation)
  * postId `string`

### CourseMetaResponse
* Course `object`
  * coverImageUrl `string`
  * createdAt `string`
  * id `string`
  * metadata [PortfolioMetadata](#portfoliometadata)
  * name `string`

### CourseResponse
* Course `object`
  * coverImageUrl `string`
  * createdAt `string`
  * id `string`
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

### Mark
* Mark `object`
  * createdAt `string`
  * feedback `string`
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
  * contentId `string`
  * description `string`
  * earlyCloseOffDate `string`
  * end `string`
  * isReadonly `boolean`
  * metadata [PortfolioMetadata](#portfoliometadata)
  * name `string`
  * start `string`
  * trailerVideoUrl `string`
  * version `string`: Content version, if not specified, the most recent version is used.

### OfferingMetadataResponse
* OfferingMetadataResponse `object`
  * contentId `string`
  * coverImageUrl `string`
  * description `string`
  * earlyCloseOffDate `string`
  * end `string`
  * id `string`
  * isReadonly `boolean`
  * metadata [PortfolioMetadata](#portfoliometadata)
  * name `string`
  * start `string`
  * trailerVideoUrl `string`
  * version `string`

### OfferingProgressRow
* OfferingProgressRow `object`
  * completion `string`
  * id `string`

### OfferingRequired
* OfferingRequired
  * contentId `string`
  * description `string`
  * earlyCloseOffDate `string`
  * end `string`
  * isReadonly `boolean`
  * metadata [PortfolioMetadata](#portfoliometadata)
  * name `string`
  * start `string`
  * trailerVideoUrl `string`
  * version `string`: Content version, if not specified, the most recent version is used.

### OfferingResponse
* OfferingResponse `object`
  * contentId `string`
  * coverImageUrl `string`
  * description `string`
  * earlyCloseOffDate `string`
  * end `string`
  * id `string`
  * isReadonly `boolean`
  * name `string`
  * start `string`
  * trailerVideoUrl `string`
  * version `string`

### OfferingUser
* OfferingUser `object`
  * email **required** `string`
  * isFacilitator `boolean`
  * isMarker `boolean`
  * isReadonly `boolean`
  * profile [UserProfile](#userprofile)
  * firstName `string`
  * lastName `string`
  * metadata [UserMetadata](#usermetadata)
  * personId `string`

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

### PortfolioMetadata
* PortfolioMetadata `object`
  * category `string`
  * level `string`
  * tags `array`
    * items `string`
  * topic `string`

### Post
* Post `object`
  * attachments `array`
    * items [DocumentResponse](#documentresponse)
  * content `string`
  * createdAt `string`
  * email `string`
  * id `string`
  * isFacilitatorPost `boolean`
  * moderation [Moderation](#moderation)
  * title `string`

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
  * learnerFullname `string`
  * learnerId `string`
  * learnerPersonId `string`
  * mark `string`
  * quizId `string`
  * quizTitle `string`

### ThemeResponse
* ThemeResponse `object`
  * filter `string`
  * numberOfQuestions `string`

### User
* User `object`
  * firstName `string`
  * lastName `string`
  * metadata [UserMetadata](#usermetadata)
  * personId `string`

### UserMetadata
* UserMetadata `object`
  * tags `array`
    * items `string`

### UserProfile
* UserProfile `object`
  * displayName `string`
  * mobile `string`

### UserResponse
* UserResponse `object`
  * avatarUrl `string`
  * email `string`
  * firstName `string`
  * id `string`
  * lastAccessAt `string`
  * lastName `string`
  * metadata [UserMetadata](#usermetadata)
  * personId `string`
  * profile [UserProfile](#userprofile)


