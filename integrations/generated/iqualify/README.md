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

iqualify..get(null).then(data => {
  console.log(data);
});
```

## Description



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
* output [OfferingResponse](#offeringresponse)

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
* output [OfferingResponse](#offeringresponse)

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
* output [OfferingResponse](#offeringresponse)

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

### offerings.offeringId.users.evaluatorId.evaluates.delete
Remove learners from evaluator's list.


```js
iqualify.offerings.offeringId.users.evaluatorId.evaluates.delete({
  "offeringId": "",
  "evaluatorId": "",
  "learners": []
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * evaluatorId **required** `string`: evaluator's id
  * learners **required** `array`
    * items `string`

#### Output
* output `array`
  * items [OfferingUser](#offeringuser)

### offerings.offeringId.users.evaluatorId.evaluates.get
Get learners evaluated by the peer evaluator.


```js
iqualify.offerings.offeringId.users.evaluatorId.evaluates.get({
  "offeringId": "",
  "evaluatorId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * evaluatorId **required** `string`: evaluators's id

#### Output
* output `array`
  * items [OfferingUser](#offeringuser)

### offerings.offeringId.users.evaluatorId.evaluates.post
Add learners to be evaluated by the peer evaluator.


```js
iqualify.offerings.offeringId.users.evaluatorId.evaluates.post({
  "offeringId": "",
  "evaluatorId": "",
  "learners": []
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * evaluatorId **required** `string`: evaluator's id
  * learners **required** `array`
    * items `string`

#### Output
* output `array`
  * items [OfferingUser](#offeringuser)

### offerings.offeringId.users.markerId.marks.delete
Remove learners from marker's list.


```js
iqualify.offerings.offeringId.users.markerId.marks.delete({
  "offeringId": "",
  "markerId": "",
  "learners": []
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * markerId **required** `string`: marker's id
  * learners **required** `array`
    * items `string`

#### Output
* output `array`
  * items [OfferingUser](#offeringuser)

### offerings.offeringId.users.markerId.marks.get
Get learners marked by the marker.


```js
iqualify.offerings.offeringId.users.markerId.marks.get({
  "offeringId": "",
  "markerId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * markerId **required** `string`: marker's id

#### Output
* output `array`
  * items [OfferingUser](#offeringuser)

### offerings.offeringId.users.markerId.marks.post
Add learners to be marked by the marker.


```js
iqualify.offerings.offeringId.users.markerId.marks.post({
  "offeringId": "",
  "markerId": "",
  "learners": []
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * markerId **required** `string`: marker's id
  * learners **required** `array`
    * items `string`

#### Output
* output `array`
  * items [OfferingUser](#offeringuser)

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

### offerings.offeringId.users.userId.delete
Removes user from the offering.


```js
iqualify.offerings.offeringId.users.userId.delete({
  "offeringId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * userId **required** `string`: user's id

#### Output
*Output schema unknown*

### offerings.offeringId.users.userId.submissions.open_response.get
Gets user's open response assignment submissions.


```js
iqualify.offerings.offeringId.users.userId.submissions.open_response.get({
  "offeringId": "",
  "userId": ""
}, context)
```

#### Input
* input `object`
  * offeringId **required** `string`: offering's id
  * userId **required** `string`: user's id

#### Output
* output `array`
  * items [Assignments](#assignments)

### users.userId.get
Returns a user matching the userId.


```js
iqualify.users.userId.get({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: user's id

#### Output
* output [UserResponse](#userresponse)

### users.userId.patch
Updates the user


```js
iqualify.users.userId.patch({
  "userId": "",
  "user": null
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: user's id
  * user **required** [User](#user)

#### Output
* output [UserResponse](#userresponse)

### users.userId.offerings.get
Responds with all user's offerings.


```js
iqualify.users.userId.offerings.get({
  "userId": ""
}, context)
```

#### Input
* input `object`
  * userId **required** `string`: user's id

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
  * name `string`
  * start `string`
  * trailerVideoUrl `string`
  * version `string`: Content version, if not specified, the most recent version is used.

### OfferingRequired
* OfferingRequired
  * contentId `string`
  * description `string`
  * earlyCloseOffDate `string`
  * end `string`
  * isReadonly `boolean`
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
  * personId `string`

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
  * personId `string`
  * profile [UserProfile](#userprofile)


