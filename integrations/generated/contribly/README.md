# @datafire/contribly

Client library for Contribly

## Installation and Usage
```bash
npm install --save @datafire/contribly
```
```js
let contribly = require('@datafire/contribly').create({
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



## Actions

### oauthCallback
Exchange the code passed to your redirect URI for an access_token


```js
contribly.oauthCallback({
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
contribly.oauthRefresh(null, context)
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

### artifact_formats.get
List the available artifact formats


```js
contribly.artifact_formats.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [ArtifactFormats](#artifactformats)

### assignments.get
List assignments


```js
contribly.assignments.get({}, context)
```

#### Input
* input `object`
  * ownedBy `string`: Restrict results to assignments owned by this user.
  * page `integer`: Pagination page
  * pageSize `integer`: Pagination page size
  * q `string`: Restrict results to assignments whose name or description matches this keyword.
  * urlWords `string`: Select an assignment by urlWords.
  * open `boolean`: Select open or closed assignments
  * alwaysOpen `boolean`: Select assignments with no closing date.
  * tag `string`: Restrict results to assignments which are tagged with this tag.
  * name `string`: Restrict results to the assignment (or potentially assignments) with this exact name

#### Output
* output `array`
  * items [Assignment](#assignment)

### assignments.post
Create a new assignment


```js
contribly.assignments.post({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [AssignmentSubmission](#assignmentsubmission)

#### Output
* output [Assignment](#assignment)

### assignments.id.delete
Delete this assignment and all of it's contributions


```js
contribly.assignments.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Id of the assignment to return

#### Output
*Output schema unknown*

### assignments.id.get
Get a single assigment by id


```js
contribly.assignments.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Id of the assignment to return

#### Output
* output [Assignment](#assignment)

### change_log.get
The Contribly change log.


```js
contribly.change_log.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [ChangeLogItem](#changelogitem)

### contribution_refinement_types.get
List valid contribution refinement types


```js
contribly.contribution_refinement_types.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `string`

### contribution_refinements.get
Given a contribution list query determine the available filter options. Can be used to generate the UI to refinement a filter.


```js
contribly.contribution_refinements.get({}, context)
```

#### Input
* input `object`
  * assignment `string`: Restrict results to contributions submitted to this assignment.
  * country `string`: Limit results to contributions which have a publicly visible location within the given country (specified by two letter country code).
  * createdBefore `string`: Limit results to contributions created before this date time.
  * createdAfter `string`: Limit results to contributions created after this date time.
  * geohash `string`: Restrict results to contributions which have specified a location which falls within this geohash (or comma seperated list of multiple geohashes)
  * hasLocation `boolean`: Restrict results to contributions which have a publicly visible location.
  * latLong `string`: Limit results to contributions with location near this latitude and longitude (comma seperated lat/long pair). Also see radius
  * radius `number`: When limiting result by location with the latLong parameter, specify the radius in kilometers.
  * mediaType `string`: Restrict results to contributions which include a media file of the given type (ie. image / video)
  * ownedBy `string`: Restrict results to contributions which are fall under the jurisdiction by this user.
  * q `string`: Restrict results to contributions whose headline text matches this keyword.
  * urlWords `string`: Locate a specific contribution by URL words
  * user `string`: Restrict results to contributions by this user identified by id.
  * refinements `string`: Comma seperated list of refinement names.
  * refinementSize `number`: Number of refinement options to return.

#### Output
* output `object`

### contributions.get
Retrieve contributions.


```js
contribly.contributions.get({}, context)
```

#### Input
* input `object`
  * assignment `string`: Restrict results to contributions submitted to this assignment.
  * country `string`: Limit results to contributions which have a publicly visible location within the given country (specified by two letter country code).
  * createdBefore `string`: Limit results to contributions created before this date time.
  * createdAfter `string`: Limit results to contributions created after this date time.
  * createdDay `string`: Limit results to contributions created on this day.
  * createdMonth `string`: Limit results to contributions created during this month.
  * geohash `string`: Restrict results to contributions which have specified a location which falls within this geohash (or comma seperated list of multiple geohashes)
  * hasLocation `boolean`: Restrict results to contributions which have a publicly visible location.
  * latLong `string`: Limit results to contributions with location near this latitude and longitude (comma seperated lat/long pair). Also see radius
  * radius `number`: When limiting result by location with the latLong parameter, specify the radius in kilometers.
  * mediaType `string`: Restrict results to contributions which include a media file of the given type (ie. image / video)
  * ownedBy `string`: Restrict results to contributions which are fall under the jurisdiction by this user.
  * q `string`: Restrict results to contributions whose headline text matches this keyword.
  * urlWords `string`: Locate a specific contribution by URL words
  * user `string`: Restrict results to contributions by this user identified by id.
  * ids `string`: Restrict results to a list of specific contributions identified by a comma seperated list of ids.
  * format `string`: Select output format. 'json' or 'rss'. Defaults to JSON.

#### Output
* output `array`
  * items [Contribution](#contribution)

### contributions.post
Create a new contribution


```js
contribly.contributions.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [Contribution](#contribution)

#### Output
* output [Contribution](#contribution)

### contributions.id.delete
Delete this contribution


```js
contribly.contributions.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Id of the contribution to delete

#### Output
* output [Contribution](#contribution)

### contributions.id.get
Get a single contribution by id


```js
contribly.contributions.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Id of the contribution to return

#### Output
* output [Contribution](#contribution)

### contributions.id.flag.post
Allows end users to bring potential issues with publicly visible content to the attention of moderators.


```js
contribly.contributions.id.flag.post({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Id of the contribution to flag
  * body **required** [Flag](#flag)

#### Output
* output [Flag](#flag)

### contributions.id.like.post
Allows a user to mark a contribution as liked


```js
contribly.contributions.id.like.post({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Id of the contribution

#### Output
* output `number`

### contributions.id.likes.get
Returns a list of user ids of users who have liked this conribution


```js
contribly.contributions.id.likes.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Id of the contribution

#### Output
* output `array`
  * items `string`

### contributions.id.moderate.post
Allows the contribution to approved of rejected.


```js
contribly.contributions.id.moderate.post({
  "id": "",
  "body": {}
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Id of the contribution to moderate
  * body **required** [ModerationHistoryItemSubmission](#moderationhistoryitemsubmission)

#### Output
* output `string`

### credentials.get
List the credentials associated with the authenticated user.


```js
contribly.credentials.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [Credential](#credential)

### event_types.get
List available notification event types


```js
contribly.event_types.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [EventType](#eventtype)

### export.post
Begin an export job. Returns a export job which can be polled to follow the progress of an export.


```js
contribly.export.post({}, context)
```

#### Input
* input `object`
  * assignment `string`: Restrict results to contributions submitted to this assignment.
  * country `string`: Limit results to contributions which have a publicly visible location within the given country (specified by two letter country code).
  * createdBefore `string`: Limit results to contributions created before this date time.
  * createdAfter `string`: Limit results to contributions created after this date time.
  * geohash `string`: Restrict results to contributions which have specified a location which falls within this geohash (or comma seperated list of multiple geohashes)
  * hasLocation `boolean`: Restrict results to contributions which have a publicly visible location.
  * latLong `string`: Limit results to contributions with location near this latitude and longitude (comma seperated lat/long pair). Also see radius
  * radius `number`: When limiting result by location with the latLong parameter, specify the radius in kilometers.
  * mediaType `string`: Restrict results to contributions which include a media file of the given type (ie. image / video)
  * ownedBy `string`: Restrict results to contributions which are fall under the jurisdiction by this user.
  * q `string`: Restrict results to contributions whose headline text matches this keyword.
  * urlWords `string`: Locate a specific contribution by URL words
  * user `string`: Restrict results to contributions by this user identified by id.
  * tagged `boolean`: Should exported media files be tagged with metadata. Deprecated; use format instead.
  * combined `boolean`: Included a combined file with all contribution text.
  * individual `boolean`: Include individual text files for each contribution.
  * format `string`: Media format to export; none, fullsize, tagged or original.
  * json `boolean`: Include raw JSON for each contribution.

#### Output
* output [Export](#export)

### export_summary.post
Provide a preflight summary of an export request.


```js
contribly.export_summary.post({}, context)
```

#### Input
* input `object`
  * assignment `string`: Restrict results to contributions submitted to this assignment.
  * country `string`: Limit results to contributions which have a publicly visible location within the given country (specified by two letter country code).
  * createdBefore `string`: Limit results to contributions created before this date time.
  * createdAfter `string`: Limit results to contributions created after this date time.
  * geohash `string`: Restrict results to contributions which have specified a location which falls within this geohash (or comma seperated list of multiple geohashes)
  * hasLocation `boolean`: Restrict results to contributions which have a publicly visible location.
  * latLong `string`: Limit results to contributions with location near this latitude and longitude (comma seperated lat/long pair). Also see radius
  * radius `number`: When limiting result by location with the latLong parameter, specify the radius in kilometers.
  * mediaType `string`: Restrict results to contributions which include a media file of the given type (ie. image / video)
  * ownedBy `string`: Restrict results to contributions which are fall under the jurisdiction by this user.
  * q `string`: Restrict results to contributions whose headline text matches this keyword.
  * urlWords `string`: Locate a specific contribution by URL words
  * user `string`: Restrict results to contributions by this user identified by id.

#### Output
* output [ExportSummary](#exportsummary)

### exports.id.get
Get a single export job; poll to follow export progress.


```js
contribly.exports.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Id of the export job to return

#### Output
* output [Export](#export)

### form_responses.get
List form responses


```js
contribly.form_responses.get({}, context)
```

#### Input
* input `object`
  * user `string`: Restrict results to responses submitted by this user.
  * form `string`: Restrict results to responses submitted to this form.
  * contribution `string`: Restrict results to responses relating to this contribution.

#### Output
* output `array`
  * items [FormResponse](#formresponse)

### form_responses.post
Submit a response to a form


```js
contribly.form_responses.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [FormResponseSubmission](#formresponsesubmission)

#### Output
* output [FormResponse](#formresponse)

### form_responses.id.get
Get a single form response by id


```js
contribly.form_responses.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Id of the assignment to return

#### Output
* output [FormResponse](#formresponse)

### forms.get
List forms


```js
contribly.forms.get({
  "ownedBy": ""
}, context)
```

#### Input
* input `object`
  * ownedBy **required** `string`: Restrict results to forms owned by this user.

#### Output
* output `array`
  * items [Form](#form)

### forms.post
Create a form


```js
contribly.forms.post({
  "body": {}
}, context)
```

#### Input
* input `object`
  * body **required** [FormSubmission](#formsubmission)

#### Output
* output [Form](#form)

### forms.id.delete
Delete this form and all of it's responses.


```js
contribly.forms.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Id of the form to delete

#### Output
*Output schema unknown*

### forms.id.get
Get a single form by id


```js
contribly.forms.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Id of the form to return

#### Output
* output [Form](#form)

### media.post
Submit a new media file


```js
contribly.media.post({
  "body": ""
}, context)
```

#### Input
* input `object`
  * body **required** `string`

#### Output
* output [Media](#media)

### notifications.contributions.id.preview.get



```js
contribly.notifications.contributions.id.preview.get({
  "id": "",
  "message": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Id of the contribution to preview a notification for
  * message **required** `string`: Type of message to preview.

#### Output
* output [NotificationPreview](#notificationpreview)

### scopes.get
List available token scopes


```js
contribly.scopes.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items `string`

### subscription_types.get
List available subscription types


```js
contribly.subscription_types.get(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output `array`
  * items [SubscriptionType](#subscriptiontype)

### subscriptions.get
List subscriptions for the authorised user.


```js
contribly.subscriptions.get({
  "body": {
    "types": [],
    "includeBody": true
  }
}, context)
```

#### Input
* input `object`
  * body **required** [SubscriptionSubmission](#subscriptionsubmission)

#### Output
* output `array`
  * items [Subscription](#subscription)

### subscriptions.id.delete
Delete a subscription.


```js
contribly.subscriptions.id.delete({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Id of the subscription to delete

#### Output
*Output schema unknown*

### tags.get
Retrieve tags.


```js
contribly.tags.get({}, context)
```

#### Input
* input `object`
  * ownedBy `string`: Restrict results to those owned by this user.
  * tagSet `string`: Restrict results to tags belonging to this tag set.
  * urlWords `string`: Restrict results by urlWords. Should be used with ownedBy when searching for one of your own tags.

#### Output
* output `array`
  * items [Tag](#tag)

### tags.post
Create a new tag


```js
contribly.tags.post({
  "body": {
    "name": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [TagSubmission](#tagsubmission)

#### Output
* output [Tag](#tag)

### tags.id.get
Retrieve a single tag by id


```js
contribly.tags.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Id of the tag to return

#### Output
* output [Tag](#tag)

### tagsets.get
Retrieve tag sets.


```js
contribly.tagsets.get({}, context)
```

#### Input
* input `object`
  * ownedBy `string`: Restrict results to those owned by this user.
  * urlWords `string`: Restrict results by urlWords. Should be used with ownedBy when searching for one of your own tag sets.

#### Output
* output `array`
  * items [TagSet](#tagset)

### tagsets.post
Create a new tag set


```js
contribly.tagsets.post({
  "body": {
    "name": "",
    "urlWords": ""
  }
}, context)
```

#### Input
* input `object`
  * body **required** [TagSetSubmission](#tagsetsubmission)

#### Output
* output [TagSet](#tagset)

### tagsets.id.get
Retrieve a single tag set by id


```js
contribly.tagsets.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Id of the tag set to return

#### Output
* output [TagSet](#tagset)

### users.get
List users


```js
contribly.users.get({}, context)
```

#### Input
* input `object`
  * assignment `string`: Restrict results to the users who have contributed to this assignment.
  * country `string`: Restrict results to the users who have submitted a contribution with a public location located within this country.
  * minimumContributions `number`: Restrict results to the users who have submitted at least this many contributions.
  * linkedProfile `string`: Restrict results to the users who a linked profile of this type.
  * ownedBy `string`: Restrict results to the users who are owned by of this owner.
  * submittedBefore `string`: Limit results to users who have submitted at least one contribution before this date time.
  * submittedAfter `string`: Limit results to users who have submitted at least one contribution after this date time.
  * username `string`: Restrict results to the user with this username.

#### Output
* output `array`
  * items [User](#user)

### users.id.get
Retrieve a single user by id


```js
contribly.users.id.get({
  "id": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Id of the user to return

#### Output
* output [User](#user)

### users.id.linked.type.get
Retrieve a users linked profile by type


```js
contribly.users.id.linked.type.get({
  "id": "",
  "type": ""
}, context)
```

#### Input
* input `object`
  * id **required** `string`: Id of the user to return
  * type **required** `string`: Type of the linked profile to fetch

#### Output
* output [LinkedProfile](#linkedprofile)

### verify.post
Verify token and return details of the owning user


```js
contribly.verify.post(null, context)
```

#### Input
*This action has no parameters*

#### Output
* output [Authority](#authority)



## Definitions

### Artifact
* Artifact `object`
  * contentLength `number`
  * contentType `string`
  * height `number`
  * label `string`
  * url `string`
  * width `number`

### ArtifactFormat
* ArtifactFormat `object`
  * contentType `string`
  * fileExtension `string`
  * forContentType `string`
  * label `string`
  * preserveAspectRatio `boolean`
  * public `boolean`
  * upscaleAllowed `boolean`

### ArtifactFormats
* ArtifactFormats `object`
  * contribution `array`
    * items [ArtifactFormat](#artifactformat)
  * cover `array`
    * items [ArtifactFormat](#artifactformat)
  * profileImage `array`
    * items [ArtifactFormat](#artifactformat)

### Assignment
* Assignment `object`
  * allowsAnonymousContributions `boolean`
  * callToAction `string`: An optional call to action specific to this assignment. ie. Submit your snow pictures.
  * cover [MediaUsage](#mediausage)
  * created `string`
  * description `string`
  * embargo `string`
  * ends `string`
  * featured `boolean`
  * id `string`
  * mediaRequired `boolean`
  * moderator `string`: Optional credential id of the moderator who owns this particular assignment.
  * name `string`
  * open `boolean`: Helper value. Is this assignment currently open? Based on the value of the ends field.
  * receiptMessage `string`: An optional assignment specific message to be displayed on successful contribution submission. For example, this might be used to inform contributors of assignment specific moderation time frames.
  * starts `string`
  * tags `array`
    * items [Tag](#tag)
  * urlWords `string`
  * webUrl `string`

### AssignmentSubmission
* AssignmentSubmission `object`
  * allowsAnonymousContributions `boolean`
  * cover [MediaUsage](#mediausage)
  * description `string`
  * embargo `string`
  * ends `string`
  * featured `boolean`
  * id `string`
  * mediaRequired `boolean`
  * moderator `string`: Optional credential id of the login which will moderator this assignment.
  * name **required** `string`
  * receiptMessage `string`: An optional assignment specific message to be displayed on successful contribution submission. For example, this might be used to inform contributors of assignment specific moderation time frames.
  * starts `string`
  * tags `array`
    * items [Tag](#tag)
  * urlWords `string`

### Authority
* Authority `object`
  * client [Client](#client)
  * id `string`
  * user [User](#user)

### ChangeLogItem
* ChangeLogItem `object`
  * date **required** `string`
  * description `string`
  * title **required** `string`

### Client
* Client `object`
  * id `string`
  * name `string`

### Contribution
* Contribution `object`
  * assignment [Assignment](#assignment)
  * attribution `string`: The public attribution for this contribution. This will be the display name of the registered user or the contributor's first and last name if they provided them while making a non authenticated contribution. A blank attribution field indicates and anonymous contribution.
  * body `string`
  * created `string`
  * headline `string`
  * id `string`
  * mediaUsages `array`
    * items [MediaUsage](#mediausage)
  * moderationHistory `array`
    * items [ModerationHistoryItem](#moderationhistoryitem)
  * place [Place](#place)
  * urlWords `string`
  * via [Via](#via)

### Credential
* Credential `object`
  * scopes `array`
    * items `string`
  * type `string`
  * user `string`
  * value `string`

### ErrorField
* ErrorField `object`
  * message `string`
  * name **required** `string`

### ErrorResponse
* ErrorResponse `object`
  * fields `array`
    * items [ErrorField](#errorfield)
  * message `string`

### EventType
* EventType `object`
  * id **required** `string`
  * name **required** `string`

### Export
* Export `object`
  * downloadUrl `string`
  * finished `string`
  * id **required** `string`
  * owner **required** `string`
  * progress `number`
  * started **required** `string`
  * step `string`

### ExportSummary
* ExportSummary `object`
  * contributions **required** `number`: The number of contributions selected for export.
  * estimatedSize `string`: Human readable estimate of the export size. ie. '10MB'.
  * media **required** `number`: The number of media files included in this export.
  * totalMediaSize **required** `number`: The expected total size of the media files to be exported.

### Flag
* Flag `object`
  * date `string`
  * email `string`
  * id `string`
  * notes `string`
  * type `string`

### Form
* Form `object`
  * callToAction `string`
  * cssUrl `string`
  * fields `array`
    * items [FormField](#formfield)
  * heading `string`
  * id `string`
  * name `string`
  * noCss `boolean`
  * ownedBy `string`
  * tags `array`
    * items [Tag](#tag)

### FormField
* FormField `object`
  * description `string`
  * label `string`
  * name `string`
  * options `array`
    * items `string`
  * public `boolean`
  * required `boolean`
  * type `string`

### FormResponse
* FormResponse `object`
  * contribution `string`
  * date `string`
  * form `string`
  * id `string`
  * responses `object`
  * user `string`

### FormResponseSubmission
* FormResponseSubmission `object`
  * contribution `string`
  * form `string`
  * responses `object`

### FormSubmission
* FormSubmission `object`
  * callToAction `string`
  * cssUrl `string`
  * fields `array`
    * items [FormField](#formfield)
  * heading `string`
  * name `string`
  * noCss `boolean`
  * tags `array`
    * items [Tag](#tag)

### Group
* Group `object`
  * id `string`
  * name `string`

### LatLong
* LatLong `object`
  * latitude `number`
  * longitude `number`

### LinkedProfile
* LinkedProfile `object`
  * bio `string`
  * email `string`
  * id `string`
  * name `string`
  * picture `string`
  * profile `string`
  * registered `string`

### Media
* Media `object`
  * duration `number`
  * id `string`
  * place [Place](#place)
  * type `string`

### MediaUsage
* MediaUsage `object`
  * artifacts `array`
    * items [Artifact](#artifact)
  * id `string`
  * media [Media](#media)

### ModerationAction
* ModerationAction `object`
  * id **required** `string`
  * label **required** `string`
  * resultingState **required** [ModerationState](#moderationstate)

### ModerationHistoryItem
* ModerationHistoryItem `object`
  * action [ModerationAction](#moderationaction)
  * date **required** `string`
  * notes `string`

### ModerationHistoryItemSubmission
* ModerationHistoryItemSubmission `object`
  * action [ModerationAction](#moderationaction)
  * notes `string`

### ModerationState
* ModerationState `object`
  * id **required** `string`
  * label **required** `string`
  * public **required** `boolean`

### NotificationPreview
* NotificationPreview `object`
  * email `string`
  * html `string`
  * subject `string`

### OsmId
* OsmId `object`
  * osmId `number`
  * osmType `string`

### Place
* Place `object`
  * country `string`
  * geohash `string`
  * google `string`
  * latLong [LatLong](#latlong)
  * name `string`
  * osm [OsmId](#osmid)

### Subscription
* Subscription `object`
  * assignment `string`
  * email `string`
  * id **required** `string`
  * includeBody **required** `boolean`
  * includeThumbenail `boolean`
  * slackChannel `string`
  * token **required** `string`
  * types **required** `array`
    * items `string`
  * user **required** `string`

### SubscriptionSubmission
* SubscriptionSubmission `object`
  * assignment `string`
  * email `string`
  * includeBody **required** `boolean`
  * includeThumbenail `boolean`
  * slackChannel `string`
  * types **required** `array`
    * items `string`

### SubscriptionType
* SubscriptionType `object`
  * id **required** `string`
  * name **required** `string`

### Tag
* Tag `object`
  * colour `string`: Optional HTML hexcode colour
  * id **required** `string`
  * name **required** `string`
  * tagSet [TagSet](#tagset)
  * urlWords `string`

### TagSet
* TagSet `object`
  * id **required** `string`
  * name **required** `string`

### TagSetSubmission
* TagSetSubmission `object`
  * name **required** `string`
  * urlWords **required** `string`

### TagSubmission
* TagSubmission `object`
  * colour `string`
  * name **required** `string`
  * tagSet [TagSet](#tagset)
  * urlWords `string`

### User
* User `object`
  * bio `string`
  * displayName `string`
  * id `string`
  * registered `string`
  * username `string`

### Via
* Via `object`
  * authority [Authority](#authority)
  * ipAddress `string`
  * ipAddressPlace [Place](#place)


